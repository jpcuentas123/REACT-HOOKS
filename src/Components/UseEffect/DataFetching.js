import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(response => {
                console.log(response)
                setPosts(response.data)
            })
            .catch(error => console.error(error))
    }, [id]
    )
    return (
        <ul>
            <li key={posts.id}>{posts.title}</li>
            <input type="text" onChange={e => setId(e.target.value)} />
        </ul>
    )
}

export default DataFetching
