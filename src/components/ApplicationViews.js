import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { Post } from "./post/Post"
import { PostList } from "./post/PostList"
import { PostForm } from "./post/PostForm"

export const ApplicationViews = () => {

  return (
    <>
      {/* <Post/> */}
      <Route exact path="/posts">
        <PostList/>
      </Route>
      <Route exact path="/posts/postform">
        <PostForm />
      </Route>
    </>
  )
}
