import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/todo/todo.thunk'

const TasksForm = () => {
    const { texts } = useSelector(state => state.language)
    const dispatch = useDispatch()

    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)
    const addButton = useRef(null)

    const activeBtn = () => {
        if (taskInputRef.current.value.trim()) addButton.current.classList.add("active")
        else addButton.current.classList.remove("active")
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const taskData = taskInputRef.current.value
        const userData = userInputRef?.current.value
        const dateData = dateInputRef?.current.value
        
        const newTask = {
            name: taskData,
            isCompleted: false,
            person: userData,
            deadline: dateData,
        }
        dispatch(addTodo([newTask]))

        taskInputRef.current.value = ''
        userInputRef.current.value = ''
        dateInputRef.current.value = ''
        addButton.current.classList.remove("active")
    }
    
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input placeholder={texts.taskPlaceholder} ref={taskInputRef} onKeyUp={activeBtn} required/>
            <input placeholder={texts.userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
