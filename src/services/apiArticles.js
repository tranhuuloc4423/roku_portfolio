import axios from "axios";

const API_URL = "https://dev.to/api/Blogs?username=manavss";
export async function getBlogs() {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get Blogs");
  }
}
