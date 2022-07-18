const rareApiUrl = "http://localhost:8000"
const rareToken = `Token ${localStorage.getItem('lu_token')}`

console.log(rareToken)

export const getAllPost = () => {
    return fetch(`${rareApiUrl}/posts`, {
        headers: {
            "Authorization": rareToken
        }
    })
    .then(res => res.json())
}

export const getPostById = (id) => {
    return fetch (`${rareApiUrl}/posts/${id}`, {
        headers: {
            "Authorization": rareToken
        }
    })
    .then(res => res.json())
}

export const getPostsByUserId = (userId) => {
    return fetch (`${rareApiUrl}/posts?user=${userId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": rareToken
        }
    })
    .then(res => res.json())
}

export const addPost = (newPost) => {
    return fetch(`${rareApiUrl}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": rareToken
        },
        body: JSON.stringify(newPost)
    }).then(res => res.json())
}

export const updatePost = (post, id) => {
    return fetch(`${rareApiUrl}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": rareToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}

export const getCategories = () => {
    return fetch(`${rareApiUrl}/categories`, {
        headers: {
            "Authorization": rareToken
       }
    })
        .then(response => response.json())
}