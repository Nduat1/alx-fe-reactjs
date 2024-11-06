import React, {useContext} from "react";
import UserContext from './components/UserContext';

function UserProfile() {
    const userProfile = useContext(UserContext)

    return (
      <div>
        <h2>{userProfile.name}</h2>
        <p>Age: {userProfile.age}</p>
        <p>Bio: {userProfile.bio}</p>
      </div>
    );
  }
  
  export default UserProfile;