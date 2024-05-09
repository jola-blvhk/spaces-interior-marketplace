import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Authentication from "../../components/auth/auth-layout";
// const Auth = dynamic(() => import("../../components/auth/auth-layout"), {
//   ssr: true,
// });

const AuthLayout = () => {
  return (
    <>
      <Head>
        <title>Authentication | Spaces</title>
      </Head>

      <Authentication />
    </>
  );
};

export default AuthLayout;
