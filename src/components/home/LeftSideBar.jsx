import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/postAction'

const LeftSideBar = () => {
    const { auth } = useSelector(state => state)
    const [fieldGet, setfieldGet] = useState('createdAt')
    const dispatch = useDispatch()
    const handleGetPost = (field) => {
        setfieldGet(field)
        dispatch(getPosts(auth.token, { field: field }))
        window.scrollTo({ top: 20, behavior: 'smooth' })
    }
    return (
        <div className="mt-3 mr-3 right-side-bar left-side-bar">
            <ul className='list-action-post'>
                <li onClick={() => handleGetPost('likes')} className = {`${fieldGet === 'likes' ? 'posts-action-active' : ''}`}>Notable Posts</li>
                <li onClick={() => handleGetPost('createdAt')} className = {`${fieldGet === 'createdAt' ? 'posts-action-active' : ''}`}>Latest Posts</li>
                <li onClick={() => handleGetPost('updatedAt')} className = {`${fieldGet === 'updatedAt' ? 'posts-action-active' : ''}`}>Latest Update Posts</li>
            </ul>
        </div>
    )
}

export default LeftSideBar
