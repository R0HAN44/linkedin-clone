import React, { useState } from "react";
import "./Login.css";
import Linkedin from "./linkedin-login.png";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilepic,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src={Linkedin} alt="" />
      <form>
        <input
          placeholder="Full name (required if registering)"
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilepic}
          onChange={(e) => {
            setprofilepic(e.target.value);
          }}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
