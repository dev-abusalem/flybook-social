import React from "react";
import LeftSideBarMain from "../global/LetfSidebar/LeftSideBarMain";
import RightsidebarMain from "../global/RightSidebar/RightsidebarMain";
import Header from "./Header";
import Container from "./Container";

interface ContainerTypes {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: ContainerTypes) => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 min-h-screen">
        <Container>
          <div className=" grid grid-cols-4 justify-between items-start gap-x-6">
            <section className="col-span-1 my-3 p-4 rounded shadow bg-white">
              <LeftSideBarMain />
            </section>
            <section className="col-span-2 my-3 p-4 rounded shadow bg-white">
              {children}
            </section>
            <section className="col-span-1 my-3 p-4 rounded shadow bg-white">
              <RightsidebarMain />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
};

export default AuthLayout;
