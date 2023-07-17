import { useContext, useRef } from 'react'
import myContext from '../myContext'

const TasksForm = () => {
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)
    const {catchChange} = useContext(myContext)

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

        fetch('/api/v1/tasks', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify([newTask])
        })
        // .then(response => console.log(response))
        .catch(err => console.error(err))
        .finally(()=>{
            taskInputRef.current.value = ''
            userInputRef.current.value = ''
            dateInputRef.current.value = ''
            catchChange(Date.now())
        })
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
            <input type="text" placeholder='task' ref={taskInputRef} onKeyUp={activeBtn} required/>
            <input type="text" placeholder='user' ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button type='submit' className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
