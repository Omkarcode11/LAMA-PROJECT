import React from "react";
import logo from "./../assets/logo.svg";
import Pile from "./Pile";
import setting from "./../assets/setting2.svg";
import plus from "./../assets/plus.svg";
import pen from "./../assets/pen.svg";
import wid from "./../assets/wid.svg";
import diamond from "./../assets/diamond.svg";

function LeftSideBar() {
  return (
    <div className="h-screen w-[30%] flex flex-col justify-between px-3 bg-white">
      <div>
        <img src={logo} className="pt-10  w-44" />
        <p className="text-[#49454F] font-bold px-4 pt-4 pb-2">
          Podcast Upload Flow
        </p>
        <div className="px-2">
          <Pile selected={true} svg={plus} text="Projects" />
          <Pile selected={false} svg={pen} text="Deployment" />
          <Pile selected={false} svg={wid} text="Widget Config" />
          <Pile selected={false} svg={diamond} text="Upgrade" />
          <hr />
        </div>
      </div>
      <div className="flex flex-col ps-8">
        <div className="flex gap-2 pb-4">
          <img src={setting} /> <span>Settings</span>
        </div>
        <hr className="w-full" />
        <div className="p-4">Omkar</div>
      </div>
    </div>
  );
}

export default LeftSideBar;
