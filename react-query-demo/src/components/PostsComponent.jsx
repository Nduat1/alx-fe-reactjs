import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching, // Indicates whether a background refetch is in progress
  } = useQuery("posts", fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes (300,000ms)
    staleTime: 60 * 1000, // Data is considered fresh for 1 minute (60,000ms)
    refetchOnWindowFocus: true, // Automatically refetch when window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  // Handle loading and error states
  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
