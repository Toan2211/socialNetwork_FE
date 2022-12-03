import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/register'
import { React } from 'react'

function App() {
    const { auth } = useSelector(state => state)
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
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App
