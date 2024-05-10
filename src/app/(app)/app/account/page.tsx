import React from "react";
import H1 from "@/components/h1";
import ContentBlock from "@/components/content-block";
import SignOutBtn from "@/components/sign-out-btn";
import { checkAuth } from "@/lib/server-utils";

const Account = async () => {
  const session = await checkAuth();

  return (
    <main>
      <H1 className="my-8 text-white">You Account</H1>
      <ContentBlock className="flex flex-col gap-y-3 h-[500px]  justify-center items-center">
        <p>Logged in as...{session?.user?.email}</p>
        <SignOutBtn />
      </ContentBlock>
    </main>
  );
};

export default Account;
