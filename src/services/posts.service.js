import { apiConfig } from '../config/api.config'

export const PostsService = {
    getAllPosts
}

function getAllPosts() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`${apiConfig.getPostsURL}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
