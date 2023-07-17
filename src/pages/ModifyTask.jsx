import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ModifyTask = () => {
    const { id } = useParams()
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/api/v1/tasks/${id}`, {
            headers:{
              "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          })
          .then(res => res.json())
          .then(task => {
            taskInputRef.current.value = task.name 
            userInputRef.current.value = task.person ?? ''
            dateInputRef.current.value = task.deadline ?? ''
          })
    }, [id])
    const sendChangedData = (id) => {
        fetch(`/api/v1/tasks/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify({
                name: taskInputRef.current.value ?? '',
                person: userInputRef.current.value ?? '',
                deadline: dateInputRef.current.value ?? '',
            })
          })
          .finally(navigate('/'))
    }
    return (
        <form onSubmit={() => sendChangedData(id)}>
            <input type="text" placeholder='task' ref={taskInputRef}/>
            <input type="text" placeholder='user' ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button>Edit</button>
        </form>
    )
}

export default ModifyTask