import axios from 'axios';

export const FETCH_POSTS = "fetchPosts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/";
const API_KEY = "?key=rosnovsky";

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}