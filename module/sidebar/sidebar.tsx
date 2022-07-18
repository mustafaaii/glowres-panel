/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";


export default function Sidebar(data: any) {

    const router = useRouter();

    const [isActive, setActive] = useState(Boolean);
    const [menuId, SetmenuId] = useState();
    const handleClick = (event: any) => {
        isActive === true ? setActive(!isActive) : setActive(isActive)
        console.log(isActive)
        SetmenuId(event.currentTarget.id)
    };





    const [SidebarMenu] = useState([
        {
            id: "02022",
            name: "Dashboard",
            to: "/",
            func: "",
            icon: "",
            submenuId: "sub-02022",
            submenu: false,
        },
        {
            id: "12022",
            name: "Günlük Akış",
            to: "",
            icon: "",
            submenuId: "sub-12022",
            submenu: [
                {
                    id: "12",
                    name: "İş Planı",
                    to: "/isplani",
                    icon: "",
                },
                {
                    id: "13",
                    name: "Chekc In",
                    to: "/check-in",
                    icon: "",
                }
            ],
        },
        {
            id: "22022",
            name: "Güncel Stoklar",
            to: "",
            icon: "",
            submenuId: "sub-22022",
            submenu: [
                {
                    id: "220221",
                    name: "Peron",
                    to: "/peron",
                    icon: "",
                },
                {
                    id: "220222",
                    name: "Peron Sayım",
                    to: "/peron-sayim",
                    icon: "",
                },
                {
                    id: "220223",
                    name: "Envanter",
                    to: "/envanter",
                    icon: "",
                }
            ],
        },
        {
            id: "32022",
            name: "Seo",
            to: "/seo",
            func: "",
            icon: "",
            submenuId: "sub-32022",
            submenu: false,
        },
        {
            id: "42022",
            name: "File Manager",
            to: "/file-manager",
            func: "",
            icon: "",
            submenuId: "sub-42022",
            submenu: false,
        },
        {
            id: "52022",
            name: "Profile",
            to: "/profile",
            func: "",
            icon: "",
            submenuId: "sub-52022",
            submenu: false,
        },
        {
            id: "62022",
            name: "User",
            to: "/user",
            func: "",
            icon: "",
            submenuId: "sub-62022",
            submenu: false,
        },
        {
            id: "72022",
            name: "Authorized",
            to: "/authorized",
            func: "",
            icon: "",
            submenuId: "sub-72022",
            submenu: false,
        },
        {
            id: "82022",
            name: "Settings",
            to: "/settings",
            func: "",
            icon: "",
            submenuId: "sub-82022",
            submenu: false,
        },
        {
            id: "92022",
            name: "Api",
            to: "/api",
            func: "",
            icon: "",
            submenuId: "sub-92022",
            submenu: false,
        },
        {
            id: "13022",
            name: "Documents",
            to: "/docs",
            func: "",
            icon: "",
            submenuId: "sub-13022",
            submenu: false,
        }


    ])





    return (
        <>
            <nav className="side-nav">
                <ul>
                    {
                        (SidebarMenu || []).map((item: any) => {
                            return (
                                <Fragment key={item.id}>
                                    <li>
                                        <Link role="button" href={item.to === "" ? ("") : (item.to)}>
                                            <a id={item.submenuId} onClick={item.to === "" ? (handleClick) : ("")} className={`side-menu ${menuId === item.submenuId ? (!isActive ? "side-menu side-menu--active" : null) : (null)}  `}>
                                                <div className="side-menu__icon">{item.icon}</div>
                                                <div className="side-menu__title">{item.name}{item.submenu === false ? ("") : (<div className="side-menu__sub-icon"><FontAwesomeIcon icon={faAngleDown} className="h-4" /></div>)}</div>
                                            </a>
                                        </Link>
                                        <ul className={`${menuId === item.submenuId ? (!isActive ? "side-menu__sub-open" : null) : (null)}`}>
                                            {
                                                (item.submenu || []).map((subitem: any) => {
                                                    return (
                                                        <li key={subitem.id}>
                                                            <a href={subitem.to} className="side-menu">
                                                                <div className="side-menu__icon">{subitem.icon}</div>
                                                                <div className="side-menu__title">{subitem.name}</div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </li>
                                    {
                                        item.id === "42022" ? (<li className="side-nav__devider my-6"></li>) : ("")
                                    }
                                    {
                                        item.id === "72022" ? (<li className="side-nav__devider my-6"></li>) : ("")
                                    }
                                </Fragment>
                            )
                        })
                    }

                </ul>
            </nav>
        </>
    )
}