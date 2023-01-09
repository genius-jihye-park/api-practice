import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'
import fetcher from '../fetcher'

const MsgList = () => {
    const {
        query: { userId = '' },
    } = useRouter()
    const [msgs, setMsgs] = useState([])
    const [editingId, setEditingId] = useState(null)

    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', { text, userId })
        if (!newMsg) throw Error('somethong wrong')
        setMsgs(msgs => [newMsg, ...msgs])
    }

    const onUpdate = async (text, id) => {
        const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
        if (!newMsg) throw Error('somethong wrong')
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1, newMsg)
            return newMsgs
        })
        doneEdit()
    }

    const onDelete = async id => {
        const receviedId = await fetcher('delete', `/messages/${id}`, { params: { userId } })
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === receviedId + '')
            //파싱과정에서 문자열-> 숫자열 전환, 화면상에서 바로 안지워지는 문제해결
            if (targetIndex < 0) return msgs
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1)
            return newMsgs
        })
    }

    const doneEdit = () => setEditingId(null)


    const getMessages = async () => {
        const msgs = await fetcher('get', '/messages')
        setMsgs(msgs)
    }
    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <MsgInput mutate={onCreate} />
            <ul className="messages">
                {msgs.map(x => (
                    <MsgItem
                        key={x.id}
                        {...x}
                        onUpdate={onUpdate}
                        onDelete={() => onDelete(x.id)}
                        startEdit={() => setEditingId(x.id)}
                        isEditing={editingId === x.id}
                        myId={userId}
                    />
                ))}
            </ul>
        </>
    )
}

export default MsgList