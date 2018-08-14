import axios from "axios";

const API_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=luchoReact";

export const FETCH_POSTS = "FETCH_POSTS";

const request = axios.get(`${API_URL}/posts${API_KEY}`);

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
