import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setPosts(response.data)
            } )
            .catch(error => console.error(error))
    },[]
    )
return (
    <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
    </ul>
)
}

export default DataFetching
