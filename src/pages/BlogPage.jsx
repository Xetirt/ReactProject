import { useContext, useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent"
import PostCard from "../components/PostCard";
import { BlogContext } from "../contents/blog.context";

function BlogPage() {

    const {posts, error, getPosts} = useContext(BlogContext)

    useEffect(()=>{
        getPosts();
    }, [])

    const postCards = posts.map((post)=>{
        return(
            <li key={post.id}>
                <PostCard post={post}></PostCard>
            </li>
        );
    })



    return (
        <>
        <HeaderComponent></HeaderComponent>
        <br></br>
        <section>
            <h2>Blog</h2>

        {error ? (
            <h2>Algo ha salido mal</h2>
        ) :
        postCards.length ? (<ul>{postCards}</ul>):(
            <ul>Loading...</ul>
        )}
            
        </section>
    </>
    )
}

export default BlogPage
