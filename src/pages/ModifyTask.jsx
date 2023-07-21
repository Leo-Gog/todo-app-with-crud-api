import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useCRUD from "../hooks/useCRUD"
import { texts, useLanguageContext } from "../contexts/LanguageContext"

const ModifyTask = () => {
    const { id } = useParams()
    const taskInputRef = useRef(null)
    const userInputRef = useRef(null)
    const dateInputRef = useRef(null)
    const { sendRequest } = useCRUD()
    const { lang } = useLanguageContext()

    const navigate = useNavigate()

    useEffect(() => {
        sendRequest(`/api/v1/tasks/${id}`, 'GET')
            .then(data => {
                const {name, person, deadline} = data
                taskInputRef.current.value = name
                userInputRef.current.value = person ?? ''
                dateInputRef.current.value = deadline ?? ''
            })
    }, [id, sendRequest])

    const sendChangedData = (e, id) => {
        e.preventDefault()
        sendRequest(`/api/v1/tasks/${id}`, 'PUT', {
            name: taskInputRef.current.value ?? '',
            person: userInputRef.current.value ?? '',
            deadline: dateInputRef.current.value ?? '',
        })
          .finally(navigate('/'))
    }
    return (
        <form onSubmit={(e) => sendChangedData(e, id)}>
            <input type="text" placeholder={texts[lang].taskPlaceholder} ref={taskInputRef}/>
            <input type="text" placeholder={texts[lang].userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button>{texts[lang].edit}</button>
        </form>
    )
}

export default ModifyTask