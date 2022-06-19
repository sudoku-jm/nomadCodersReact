import { async } from "@firebase/util";
import { authService } from "fBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
          <button>Continue with google</button>
          <button>Continue with Github</button>
        </div>
      </div>
    </>
  );
};

export default Auth;
