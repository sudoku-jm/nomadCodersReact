import { async } from "@firebase/util";
import { authService } from "fBase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    // console.log(event.target.name)

    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    //자동로그인
    try {
      if (newAccount) {
        //새 계정 만들기
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );

        console.log("data 새 계정 만들기", data);
      } else {
        //로그인
        const data = await signInWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log("data 로그인", data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  //소셜 로그인
  const onSocialClick = async (event) => {
    // console.log(event.target.name);
    //es6문법
    const {
      target: { name },
    } = event;

    const auth = getAuth();

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    if (name === "google") {
      signInWithPopup(auth, providerGoogle)
        .then((result) => {
          let credential = GoogleAuthProvider.credentialFromResult(result);
          let token = credential.accessToken;
          let user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GithubAuthProvider.credentialFromError(error);
        });
    } else if (name === "github") {
      signInWithPopup(auth, providerGithub)
        .then((result) => {
          let credential = GithubAuthProvider.credentialFromResult(result);
          // let token = credential.accessToken;
          // let user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Login"}
          />
          {error}
        </form>
        <span onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Create Account"}
        </span>
        <div>
          <button name="google" onClick={onSocialClick}>
            Continue with google
          </button>
          <button name="github" onClick={onSocialClick}>
            Continue with Github
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
