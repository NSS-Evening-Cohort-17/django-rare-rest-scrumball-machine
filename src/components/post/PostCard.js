import React, { useState, useEffect } from 'react'

export const PostCard = ({post, delPost}) => {

    return (
        <>
            <div className='post_Modal'>
                <div className='post_header'>
                    <h1>{post.title}</h1>
                    <h1><b>Posted:</b> {post.publication_date}</h1>
                </div>
                <div className='post_body'>
                    <img src={post.image_url}/>
                    <p>{post.content}</p>
                </div>
                <div className='post_footer'>
                    <p><b>Arthur:</b> {post.rareuser.user.first_name}</p>
                    <p>{post.category.label}</p>
                </div>
            </div>
        </>
    )
}