import { useLocation } from "react-router";
import React, { useState, useEffect } from 'react'
import Header from '../../Header1'
import Posts from '../../Posts'
import Sidebar from '../../Sidebar'
import './Home.css'
import axios from 'axios'

export default function Homepage() {
    const {search} = useLocation();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
    return (
        <>
        <Header />
        <div className="home">
            <Posts posts = {posts} />
            <Sidebar />
        </div>
        </>
    )
}
