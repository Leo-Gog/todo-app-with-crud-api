import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import myContext from '../contexts/myContext';
import { Link } from 'react-router-dom';
import useCRUD from '../hooks/useCRUD';
import { useLanguageContext } from '../contexts/LanguageContext';
import { texts } from '../contexts/LanguageContext';

const TaskItem = ({task}) => {

    const {_uuid:id, isCompleted, name:value} = task
    const {catchChange} = useContext(myContext)
    let status = isCompleted
    const { sendRequest } = useCRUD()
    const {lang} = useLanguageContext()


    const onDelete = (id) => {
        sendRequest(`/api/v1/tasks/${id}`, 'DELETE')
            .finally(catchChange(Date.now()))
    }

    const onComplete = (id) => {
        status = !status
        sendRequest(`/api/v1/tasks/${id}`, 'PUT', {isCompleted: !isCompleted})
            .finally(catchChange(Date.now()))
    }

    return (
        <li className={status ? 'done': undefined}>
            <span className='checkbox' onClick={() => onComplete(id)}>
                <FontAwesomeIcon icon={status? faCheckCircle : faCircle} />
            </span>
                {value}
            <span className='remove' title={texts[lang].removeTitle} onClick={() => onDelete(id)}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
            <Link className='edit' title={texts[lang].edit} to={`edit/${id}`}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
        </li>
    )
}
export default TaskItem
