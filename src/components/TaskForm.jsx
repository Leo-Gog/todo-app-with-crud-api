import { useContext, useRef } from 'react'
import myContext from '../contexts/myContext'
import useCRUD from '../hooks/useCRUD'
import { texts, useLanguageContext } from '../contexts/LanguageContext'

const TasksForm = () => {
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)
    const {catchChange} = useContext(myContext)
    const { sendRequest } = useCRUD()
    const { lang } = useLanguageContext()

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

        sendRequest('/api/v1/tasks', 'POST', [newTask])
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
            <input type="text" placeholder={texts[lang].taskPlaceholder} ref={taskInputRef} onKeyUp={activeBtn} required/>
            <input type="text" placeholder={texts[lang].userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button type='submit' className='btn' ref={addButton}>+</button>
        </form>
    )
}
export default TasksForm
