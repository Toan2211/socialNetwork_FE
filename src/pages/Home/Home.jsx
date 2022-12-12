import React, { useEffect } from 'react'


import LoadIcon from '../../images/loading.gif'
import { useSelector } from 'react-redux'
import Posts from '../../components/home/Posts'
import Status from '../../components/home/Status'
import RightSideBar from '../../components/home/RightSideBar'
import LeftSideBar from '../../components/home/LeftSideBar'


let scroll = 0

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if (window.location.pathname === '/') {
            scroll = window.pageYOffset
            return scroll
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (
        <div className="home row mx-0">
            <div className="col-md-2">
                <LeftSideBar />
            </div>
            <div className="col-md-7">
                <Status />

                {homePosts.loading ? (
                    <img
                        src={LoadIcon}
                        alt="loading"
                        className="d-block mx-auto"
                    />
                ) : homePosts.result === 0 &&
                  homePosts.posts.length === 0 ? (
                        <h2 className="text-center">No Post</h2>
                    ) : (
                        <Posts />
                    )}
            </div>

            <div className="col-md-3">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
