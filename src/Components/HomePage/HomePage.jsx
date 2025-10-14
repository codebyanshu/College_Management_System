import React from "react";
import NavBar from "../NavBar";
import UserLogo from "../userLogo";
import SideBarInHome from "./SideBarInHome";
import HomeBody from "./HomeBody";

const HomePage = () => {
  return (
    <div className="bg-blue-100 min-h-screen w-full">
      <NavBar userlogo={true} />
      <div className="grid grid-cols-1 md:grid-cols-[0.7fr_4fr]  min-h-screen">
        <SideBarInHome />
        <HomeBody />
      </div>
    </div>
  );
};

export default HomePage;
