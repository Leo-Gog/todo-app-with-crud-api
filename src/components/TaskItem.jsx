import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import myContext from '../myContext';
import { Link } from 'react-router-dom';
// import useCRUD from '../hooks/useCRUD';

const TaskItem = ({task}) => {
    const {_uuid:id, isCompleted, name:value} = task
    const {catchChange} = useContext(myContext)
    let status = isCompleted

    const onDelete = (id) => {
        fetch(`/api/v1/tasks/${id}`, {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        })
        // .then(res => console.log('onDelete:', res))
        .finally(catchChange(Date.now()))
    }

    const onComplete = (id) => {
        status = !status
        fetch(`/api/v1/tasks/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify({isCompleted: !isCompleted})
        })
        // .then(res => console.log('onComplete:', res))
        .finally(catchChange(Date.now()))
    }

    return (
        <li className={status ? 'done': undefined}>
            <span className='checkbox' onClick={() => onComplete(id)}>
                <FontAwesomeIcon icon={status? faCheckCircle : faCircle} />
            </span>
                {value}
            <span className='remove' title='Remove' onClick={() => onDelete(id)}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
            <Link className='edit' title='Edit' to={`edit/${id}`}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
        </li>
    )
}
export default TaskItem
