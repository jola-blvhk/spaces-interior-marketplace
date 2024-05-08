import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Signup = dynamic(() => import("../../components/auth/signup"), {
  ssr: false,
});

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Spaces</title>
      </Head>

      <Signup />
    </>
  );
};

export default SignUp;
