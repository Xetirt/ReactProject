import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useParams } from 'react-router-dom'

function PostDetails() {
    const { id } = useParams();
    //console.log("Param:", id );
    const [post, setPost] = useState([]);

    const fetchPost = async (id) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        console.log(data);
        setPost(data);
    }

    useEffect(()=>{
        fetchPost(id);
    }, [])

  return (
    <>
    <HeaderComponent></HeaderComponent>
{post && (
    <section>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.id}</p>
        <p>{post.userId}</p>
    </section>
)}
    
<br />
    </>
  )
}

export default PostDetails