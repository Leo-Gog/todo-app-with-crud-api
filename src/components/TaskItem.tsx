import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { deleteTodo, modifyTodo } from '../store/todo/todo.thunk';
import { getSelectedLanguage, getSelectedTheme } from '../store/selectors';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { TaskInterface } from '../types/interfaces';
interface TaskItemprops {
    task: TaskInterface
}

const TaskItem: React.FC<TaskItemprops> = ({task}) => {
    const {_uuid: id, isCompleted: status, name: value} = task
    const dispatch = useAppDispatch()

    const texts = useAppSelector(getSelectedLanguage)
    const theme = useAppSelector(getSelectedTheme)

    const liDarkStyle = {
        backgroundColor: 'black'
    }

    const onDelete = (id: string) => dispatch(deleteTodo(id))
    const onComplete = (id: string) => {
        dispatch(modifyTodo({
            _uuid: id,
            isCompleted: !status
        }))
    }

    return (
        <li className={status ? 'done': undefined} style={theme === 'dark' ? liDarkStyle : undefined}>
            <span className='checkbox' onClick={() => onComplete(id)}>
                <FontAwesomeIcon icon={status? faCheckCircle : faCircle} />
            </span>
                {value}
            <span className='remove' title={texts.removeTitle} onClick={() => onDelete(id)}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
            <Link className='edit' title={texts.edit} to={`edit/${id}`}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
        </li>
    )
}
export default TaskItem
