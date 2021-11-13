import React from 'react'
import Sidebar from '../../Sidebar'
import SinglePost from '../../SinglePost'
import './Single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
