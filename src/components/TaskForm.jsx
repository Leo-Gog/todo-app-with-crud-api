import { useRef } from 'react'

const TasksForm = ({refresh}) => {
    const inputRef = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault()

        const inputValue = inputRef.current.value
        const newTask = {
            name: inputValue,
            isCompleted: false,
            // user: null,
            // deadline: null,
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
        .catch(err => console.log(err))
        .finally(()=>{
            inputRef.current.value = '';
            refresh(Date.now())
        })
        addButton.current.classList.remove("active")
    }
    const addButton = useRef(null)
    const activeBtn = () => {
        let userData = inputRef.current.value
        if (userData.trim() !== '') addButton.current.classList.add("active")
        else addButton.current.classList.remove("active")
    }

    return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text" ref={inputRef} onKeyUp={activeBtn} required/>
            <button type='submit' className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
