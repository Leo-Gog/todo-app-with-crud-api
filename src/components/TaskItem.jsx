import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({task, refresh}) => {
    const {_uuid, isCompleted, name} = task
    const [id, status, value] = [_uuid, isCompleted, name]
    const onDelete = (id) => {
        fetch(`/api/v1/tasks/${id}`, {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        })
        // .then(res => console.log('onDelete:', res))
        .finally(refresh(Date.now()))
    }

    const onComplete = (id) => {
        fetch(`/api/v1/tasks/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify({isCompleted: !status})
        })
        // .then(res => console.log('onComplete:', res))
        .finally(refresh(Date.now()))
    }

    return (
        <li className={status ? 'done': undefined}>
            <span className='checkbox' onClick={() => onComplete(id)}>
                <FontAwesomeIcon icon={status? faCheckCircle : faCircle} />
            </span>
                {value}
            <span className='remove' onClick={() => onDelete(id)}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
            {/* <button>Redact</button>*/}
        </li>
    )
}
export default TaskItem
