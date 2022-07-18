import React, { useEffect, useState } from "react";
import { useHistory, useParams, useNavigate } from "react-router-dom";
import { getCategories, getPostById, updatePost } from "./PostManager";
import moment from "moment";

export const PostEditForm = () => {
    const [currentPost, setCurrentPost] = useState({
        title: "",
        publicationDate: moment().format("YYYY-MM-DD"), 
        imageURL: "", 
        content: "", 
        category: 0
    });

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] =  useState(true);
    
    const history = useHistory()
    const {postId} =  useParams();
    // const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('token'))

    const updateExistingPost = evt => {
        evt.preventDefault()
        setIsLoading(true);
    
        const editedPost = {
            rareuser: currentUser,
            title: currentPost.title,
            publication_date: currentPost.publication_date,
            image_url: currentPost.image_url,
            content: currentPost.content,
            category: currentPost.category.id
        }

        updatePost(editedPost, postId)
        .then(() => history.push("/posts"))

    }

    // const loadPost = () => {
    //     if (postId) {
    //         getPostById(postId)
    //             .then(data => {
    //                 setCurrentPost({
    //                     id: postId,
    //                     title: data.title,
    //                     publicationDate: data.publication_date,
    //                     imageURL: data.image_url,
    //                     content: data.content,
    //                     category: data.category.id
    //                 })
    //             })
    //     }
    // }

    
    // useEffect(() => {
    //     console.log('currentPost', currentPost)
    // }, [currentPost])

        useEffect(() => {
            getCategories().then(data => {
                setCategories(data)
            })
        }, [])
        
        const handleFieldChange = (domEvent) => {
            const stateToChange = {...currentPost}
            stateToChange[domEvent.target.name] = domEvent.target.value;
            setCurrentPost(stateToChange)
        }
        
        useEffect(() => {
            getPostById(postId)
                .then(post => {
                    setCurrentPost(post);
                    setIsLoading(false)
                })
        }, [])

    return (
        <>
        <form className="postForm">
            <h2>Edit Post</h2>
            <fieldset>
                <div className="postForm__group">
                    <label htmlFor="title">Title</label>    
                    <input
                        type="text"
                        name="title"
                        className="postForm__input"
                        required
                        autoFocus
                        value={currentPost.title}
                        onChange={handleFieldChange}
                    /> 
                </div>    
            </fieldset>

            <fieldset>
                <div className="postForm__group">
                    <label htmlFor="publicationDate">Date</label>    
                    <input
                        type="text"
                        name="publicationDate"
                        className="postForm__input"
                        required
                        placeholder="yyyy-mm-dd"
                        value={currentPost.publicationDate}
                        onChange={handleFieldChange}
                    /> 
                </div>    
            </fieldset>

            <fieldset>
                <div className="postForm__group">
                    <label htmlFor="imageURL">Image URL</label>    
                    <input
                        type="text"
                        name="imageURL"
                        className="postForm__input"
                        required
                        placeholder="http://imageurl.com"
                        value={currentPost.imageURL}
                        onChange={handleFieldChange}
                    /> 
                </div>    
            </fieldset>

            <fieldset>
                <div className="postForm__group">
                    <label htmlFor="content">Content</label>    
                    <input
                        type="text"
                        name="content"
                        className="postForm__input"
                        required
                        value={currentPost.content}
                        onChange={handleFieldChange}
                    /> 
                </div>    
            </fieldset>

            <fieldset>
                <div className="postForm__group">
                    <label htmlFor="category">Category</label>    
                    <select
                        type="text"
                        name="category"
                        className="postForm__input"
                        required
                        value={currentPost.category}
                        onChange={handleFieldChange} >
                        <option value="0">Please select ...</option>
                            {categories.map(
                                category => (<option key={category.id} value={category.id}>{category.label}</option>)
                            )}
                    </select>
                </div>    
            </fieldset>

            {/* <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const updatedPost = {
                        title: currentPost.title,
                        publication_date: currentPost.publicationDate,
                        image_url: currentPost.imageURL,
                        content: currentPost.content,
                        category: currentPost.category,
                        approved: 1
                    }

                    updatePost(updatedPost, postId)
                    .then(() => history.push('/posts'))
                }}
                className="formBtn"
                id="postForm__formBtn">
                    Update
                </button> */}

            <div className="alignRight">
                <button
                type="button" disabled={isLoading}
                onClick={updateExistingPost}
                className="btn btn-primary"
                >Submit</button>
            </div>
                

        </form>
        </>
    )
}
