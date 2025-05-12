import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

// Query to search for users
export const searchUsers = async (query: string) => {
  try {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw new Error("Failed to search users");
  }
};

// Query to get user details
export const getUserDetails = async (username: string) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw new Error("Failed to fetch user details");
  }
};