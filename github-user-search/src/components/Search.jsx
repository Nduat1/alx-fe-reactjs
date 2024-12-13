import React, { useState } from "react";
import { fetchUserData } from '../services/githubService';
const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data);
        } catch (err) {
            setError("Looks like we cant find the user"); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSearch} className="flex flex-col space-y-4 p-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    value={minRepos}
                    min="0"
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Min. repositories"
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData.length > 0 && (
                <div>
                    {userData.map(user => (
                        <div key={user.id} className="border p-4 mb-4 rounded">
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-20 h-20 rounded-full" />
                            <h2>{user.name || user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repos: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                        </div>
                    ))}
                </div>
            )}
        </>
     );
}

export default Search;