import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location, minRepos) => {
    try {
        let query = [];

        if (username) query.push(`user:${username}`);
        if (location) query.push(`location:${location}`);
        if (minRepos) query.push(`repos:>${minRepos}`);

        const queryString = query.join("+");
        const response = await axios.get(`${BASE_URL}?q=${queryString}`);
        
        // Check if items exist in the response
        if (!response.data.items.length) {
            throw new Error("No users found matching the criteria");
        }
        
        return response.data.items; // Return the list of users
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching users");
    }
};
