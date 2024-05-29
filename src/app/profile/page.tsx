import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const ProfilePage = dynamic(() => import("@/components/profile-page"), {
  ssr: false,
});

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <ProfilePage />
        </div>
      </RootLayout>
    </>
  );
};

export default Profile;
