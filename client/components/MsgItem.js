import MsgInput from './MsgInput';

const MsgItem = ({
    id,
    userId,
    timestamp,
    text,
    onUpdate,
    onDelete,
    isEditing,
    startEdit,
}) => (
    <li className="messages_item">
        <h3>
            {userId}{' '}
            <sub>
                {new Date(timestamp).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })}
            </sub>
        </h3>

        {isEditing ? (
            <>
                <MsgInput mutate={onUpdate} text={text} id={id} />
            </>
        ) : (
            text)}

        <div className='messages_buttons'>
            <button onClick={startEdit}>수정</button>
            <button onClick={onDelete}>삭제</button>
        </div>

    </li>
)


export default MsgItem