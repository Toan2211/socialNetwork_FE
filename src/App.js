import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/register'
import { React } from 'react'
import Profile from './pages/profile/[id]'
import { useEffect } from 'react'
import { refreshToken } from './redux/actions/authAction'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import io from 'socket.io-client'
import StatusModal from './components/StatusModal'
import { getPosts } from './redux/actions/postAction'
import Post from './pages/post/[id]'
import { getNotifies } from './redux/actions/notifyAction'
import Message from './pages/message'
import Conversation from './pages/message/[id]'
import Alert from './components/alert/Alert'
import SocketClient from './SocketClient'
import { getSuggestions } from './redux/actions/suggestionsAction'
function App() {
    const { auth, status } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshToken())

        const socket = io()
        dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
        return () => socket.close()
    }, [dispatch])

    useEffect(() => {
        if (auth.token) {
            dispatch(getPosts(auth.token))
            dispatch(getNotifies(auth.token))
            dispatch(getSuggestions(auth.token))
        }
    }, [dispatch, auth.token])
    return (
        <div className="App">
            <Alert />
            <BrowserRouter>
                {auth.token && <Header />}
                {status && <StatusModal />}
                {auth.token && <SocketClient />}
                <Routes>
                    <Route
                        path="/"
                        element={auth.token ? <Home /> : <Login />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/profile/:id"
                        element={<Profile />}
                    />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/message" element={<Message />} />
                    <Route
                        path="/message/:id"
                        element={<Conversation />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
