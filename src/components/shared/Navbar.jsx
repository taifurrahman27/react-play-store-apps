import React from "react";
import logoImg from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/apps",
            text: "Apps",
        },
        {
            path: "/installedApps",
            text: "Installation",
        },
        {
            path: "/dashboard",
            text: "Dashboard",
        },
    ];

    return (
        <nav className=" shadow">
            <div className="flex justify-between gap-5 items-center  py-3 container mx-auto">
                <img src={logoImg} alt="" className="w-13" />
                <ul className="flex justify-between gap-2 items-center">
                    {navItems.map((item, index) => (
                        <MyNavLink key={index} to={item.path}>
                            {item.text}
                        </MyNavLink>
                    ))}
                </ul>
                <button className="btn bg-purple-500 text-white">
                    <FaGithub />
                    Contribute
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
