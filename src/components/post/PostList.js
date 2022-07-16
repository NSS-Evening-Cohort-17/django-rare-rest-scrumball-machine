import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { PostCard } from "./PostCard";
import { getAllPost } from "./PostManager"


export const PostList = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      getAllPost().then((posts) => {
        setPosts(posts)
      })
    }, [])
    console.log(posts)

    const deletePost = (postId) => {
      delPost(postId)
          .then(() => getPosts().then(setPosts))
  }
    return (
      <>
        <Link to="/posts/postform">
          <button>New Post</button>
        </Link>
        <div>
              {posts.map((post, index) =>    
              <PostCard
              key={index}
              post={post}
              delPost={deletePost}
              />
              )}
        </div>
      </>
    )
}
