
import { useContext } from "react";
import UserContext from "../context/Usercontext.js";

const Profile = () => {
  const { user } = useContext(UserContext);
//   console.log(user)

  if (!user) {
    return <div>Loading...</div>; 

  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <h1>password, {user.password}!</h1>
      
    </div>
  );
};

export default Profile;
