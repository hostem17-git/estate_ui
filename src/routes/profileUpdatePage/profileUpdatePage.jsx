import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ProfileUpdatePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("in");
    setError("");
    try {
      const formData = new FormData(e.target);

      const { username, email, password } = Object.fromEntries(formData);

      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
      });

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button type="submit">Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
