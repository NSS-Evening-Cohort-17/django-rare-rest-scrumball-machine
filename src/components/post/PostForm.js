 import React, { useState, useEffect } from 'react';
 import { useNavigate, useHistory } from 'react-router-dom'
 import { getAllPost, addPost, getCategories } from './PostManager';
 import moment from 'moment';

 export const PostForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [post, setPost] = useState({
        rareuser: JSON.parse(localStorage.getItem('token')),
        category: "",
        title: "",
        publication_date: moment().format("YYYY-MM-DD"),
        image_url: "",
        content: "",
        approved: false
    })
    
        useEffect(() => {
            getCategories().then(data => setCategories(data))
        }, [])
    
        const changeState = (event) => {
            const newPost = {...post}
            let selectedVal = event.target.value
            if (event.target.name.includes("name")) {
                selectedVal = parseInt(selectedVal)
            }
            newPost[event.target.name] = selectedVal
            setPost(newPost)
        }

        const handleClickSavePost = (event) => {
            event.preventDefault() //Prevents the browser from submitting the for
            addPost(post)
            .then(() => history.push("/posts"))
        }
    

    return (
        <form>
        <h1>Create New Post</h1>
        <fieldset>
            <div className="postForm__group">
                    <label htmlFor="title">Title</label>    
                    <input
                        type="text"
                        name="title"
                        className="postForm__input"
                        required
                        autoFocus
                        value={post.title}
                        onChange={changeState}
                    /> 
                </div>
                <div className="postForm__group">
                    <label htmlFor="image">Image URL</label>    
                    <input
                        type="text"
                        name="image_url"
                        className="postForm__input"
                        required
                        placeholder="http://imageurl.com"
                        value={post.image_url}
                        onChange={changeState}
                    /> 
                </div>
                <div className="postForm__group">
                    <label htmlFor="content">Content</label>    
                    <input
                        type="text"
                        name="content"
                        className="postForm__input"
                        required
                        value={post.content}
                        onChange={changeState}
                    />
                    <div className="postForm__group">
                    <label htmlFor="category">Category</label>    
                    <select
                        type="text"
                        name="category"
                        className="postForm__input"
                        required
                        value={post.category}
                        onChange={changeState} >
                        <option value="0">Select Category</option>
                            {categories.map(
                                category => (<option key={category.id} value={category.id}>{category.label}</option>)
                            )}
                    </select>
                </div>  
                </div>        
        </fieldset>

        <button className="btn btn-primary"
				onClick={handleClickSavePost}
                >
				Save Message
        </button>
        </form>
    )
 }