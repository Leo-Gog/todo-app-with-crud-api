import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/todo/todo.thunk'

const TasksForm = () => {
    const { texts } = useSelector(state => state.language)
    const dispatch = useDispatch()
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)
    
    const onSubmit = (e) => {
        e.preventDefault()

        const inputValue = taskInputRef.current.value
        const userData = userInputRef?.current.value
        const dateData = dateInputRef?.current.value
        
        const newTask = {
            name: inputValue,
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
    
    const addButton = useRef(null)
    const activeBtn = () => {
        let userData = taskInputRef.current.value
        if (userData.trim() !== '') addButton.current.classList.add("active")
        else addButton.current.classList.remove("active")
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder={texts.taskPlaceholder} ref={taskInputRef} onKeyUp={activeBtn} required/>
            <input type="text" placeholder={texts.userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button type='submit' className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
