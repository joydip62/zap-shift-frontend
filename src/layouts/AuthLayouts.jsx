import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex items-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
