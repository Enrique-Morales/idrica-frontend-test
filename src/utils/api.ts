import axios from "axios";
import { Post } from "./types";
import { API_URL } from "./constants";

export const fetchPostsFromAPI = async () => {
  const response = await axios
    .get<Post[]>(API_URL)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return response || [];
};
