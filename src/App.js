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
function App() {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshToken())

        const socket = io()
        dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
        return () => socket.close()
    }, [dispatch])
    return (
        <div className="App">
            <BrowserRouter>
                {auth.token && <Header />}

                <Routes>
                    <Route
                        path="/"
                        element={auth.token ? <Home /> : <Login />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    {/* <PrivateRouter path="/:page" element={<PageRender />} /> */}
                    {/* <PrivateRouter path="/:page/:id" element={<PageRender />} /> */}
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App
