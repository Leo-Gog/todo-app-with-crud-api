import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { modifyTodo } from "../store/todo/todo.thunk"

const ModifyTask = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)

    const [texts, [{name, person, deadline}]] = useSelector((state) => [
        state.language.texts,
        state.todo.todoList.filter(todo => todo._uuid === id)
    ])
    
    useEffect(() => {
        taskInputRef.current.value = name
        userInputRef.current.value = person ?? ''
        dateInputRef.current.value = deadline ?? ''
    }, [])

    const sendChangedData = (e, id) => {
        e.preventDefault()
        dispatch(modifyTodo({
            _uuid: id,
            name: taskInputRef.current.value ?? '',
            person: userInputRef.current.value ?? '',
            deadline: dateInputRef.current.value ?? '',
        }))
        navigate('/')
    }
    
    return (
        <form onSubmit={(e) => sendChangedData(e, id)}>
            <input type="text" placeholder={texts.taskPlaceholder} ref={taskInputRef}/>
            <input type="text" placeholder={texts.userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button>{texts.edit}</button>
        </form>
    )
}

export default ModifyTask