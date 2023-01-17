import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import MsgItem from './MsgItem'
import MsgInput from './MsgInput'
import { QueryKeys, fetcher } from '../queryClient'
// import useInfiniteScroll from '../hooks/useInfiniteScroll'
import { GET_MESSAGES } from '../graphql/message';

const MsgList = ({ smsgs, users }) => {

    const { query } = useRouter()
    const userId = query.userId || query.userid || ''
    const [msgs, setMsgs] = useState(smsgs)
    const [editingId, setEditingId] = useState(null)
    // const [hasNext, setHasNext] = useState(true)
    // const fetchMoreEl = useRef(null)
    // const intersecting = useInfiniteScroll(fetchMoreEl)

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

    const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () => fetcher(GET_MESSAGES))

    console.log(data)

    if (isError) {
        console.log(error)
        return null
    }

    const getMessages = async () => {
        const newMsgs = await fetcher('get', '/messages', {
            params: { cursor: msgs[msgs.length - 1]?.id || '' }
        })
        if (newMsgs.length === 0) {
            setHasNext(false)
            return
        }
        setMsgs(msgs => [...msgs, ...newMsgs])
    }

    // useEffect(() => {
    //     if (intersecting && hasNext) getMessages()
    // }, [intersecting])

    return (
        <>
            {userId && <MsgInput mutate={onCreate} />}
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
                        user={users.find(x => userId === x.userId)}
                    />
                ))}
            </ul>
            {/* <div ref={fetchMoreEl} /> */}
            {/* 화면 상에 나타났을 때 다음 데이터를 불러와라 */}
        </>
    )
}

export default MsgList