import React, { useRef } from 'react'
import { addTodo } from '../store/todo/todo.thunk'
import { getSelectedLanguage } from '../store/selectors'
import { NewTodoInterface } from '../types/interfaces'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

const TasksForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const texts = useAppSelector(getSelectedLanguage)

    const formRef = useRef<HTMLFormElement>(null)

    const taskInputRef = useRef<HTMLInputElement>(null)
    const userInputRef = useRef<HTMLInputElement>(null)
    const dateInputRef = useRef<HTMLInputElement>(null)
    const addButton = useRef<HTMLButtonElement>(null)

    const activeBtn = () => {
        if (taskInputRef.current?.value.trim()) addButton.current?.classList.add("active")
        else addButton.current?.classList.remove("active")
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const taskData = taskInputRef.current?.value ?? ''
        const userData = userInputRef.current?.value ?? ''
        const dateData = dateInputRef.current?.value ?? ''

        const newTask: NewTodoInterface = {
            name: taskData,
            isCompleted: false,
            person: userData,
            deadline: dateData,
        }
        dispatch(addTodo([newTask]))

        formRef.current?.reset()
        addButton.current?.classList.remove("active")
    }
    
    return (
        <form onSubmit={(e) => onSubmit(e)} ref={formRef}>
            <input placeholder={texts.taskPlaceholder} ref={taskInputRef} onKeyUp={activeBtn} required/>
            <input placeholder={texts.userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
