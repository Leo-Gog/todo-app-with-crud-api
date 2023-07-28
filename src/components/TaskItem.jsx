import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, modifyTodo } from '../store/todo/todo.thunk';

const TaskItem = ({task}) => {
    const {_uuid: id, isCompleted: status, name: value} = task
    const dispatch = useDispatch()
    const [texts, theme] = useSelector((state) => [
        state.language.texts,
        state.theme.theme
    ])

    const liDarkStyle = {
        backgroundColor: 'black'
    }

    const onDelete = (id) => dispatch(deleteTodo(id))
    const onComplete = (id) => {
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
