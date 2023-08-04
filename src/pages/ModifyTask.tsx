import React, { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { modifyTodo } from "../store/todo/todo.thunk"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { getSelectedLanguage } from "../store/selectors"

const ModifyTask: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const taskInputRef = useRef<HTMLInputElement>(null)
    const userInputRef = useRef<HTMLInputElement>(null)
    const dateInputRef = useRef<HTMLInputElement>(null)

    const [{name, person, deadline}] = useAppSelector((state) => 
        state.todo.todoList.filter(todo => todo._uuid === id)
    )    
    const texts = useAppSelector(getSelectedLanguage)     
    
    useEffect(() => {
        taskInputRef.current!.value = name ?? ''
        userInputRef.current!.value  = person ?? '';
        dateInputRef.current!.value  = deadline ?? '';
    }, [])

    
    const sendChangedData = (e: React.FocusEvent<HTMLFormElement>, id: string | undefined) => {
        e.preventDefault()
        
        if (typeof id === 'string'){
            dispatch(modifyTodo({
                _uuid: id,
                name: taskInputRef.current?.value ?? '',
                person: userInputRef.current?.value ?? '',
                deadline: dateInputRef.current?.value ?? '',
            }))
        }   
       
        navigate('/')
    }
    
    return (
        <form onSubmit={(e: React.FocusEvent<HTMLFormElement>) => sendChangedData(e, id)}>
            <input type="text" placeholder={texts.taskPlaceholder} ref={taskInputRef}/>
            <input type="text" placeholder={texts.userPlaceholder} ref={userInputRef}/>
            <input type="date" ref={dateInputRef}/>
            <button>{texts.edit}</button>
        </form>
    )
}

export default ModifyTask