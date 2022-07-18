import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { Post } from "./post/Post"
import { PostList } from "./post/PostList"
import { PostForm } from "./post/PostForm"
import { PostEditForm } from "./post/PostEditForm"

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
      <Route exact path="/posts/:postId/edit">
        <PostEditForm />
      </Route>
    </>
  )
}
