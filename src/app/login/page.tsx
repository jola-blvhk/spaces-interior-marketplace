import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Login = dynamic(() => import("../../components/auth/login"), {
  ssr: false,
});

const LogIn = () => {
  return (
    <>
      <Head>
        <title>Login | Spaces</title>
      </Head>

      <Login />
    </>
  );
};

export default LogIn;
