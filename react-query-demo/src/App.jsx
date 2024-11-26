import './App.css'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
}

export default App
