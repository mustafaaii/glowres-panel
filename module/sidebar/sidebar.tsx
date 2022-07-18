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

    const [isActive, setActive] = useState(false);
    const [menuId, SetmenuId] = useState(String);


    const HandlerClick = (event: any) => {

        SetmenuId(event.currentTarget.id)
        SidebarMenu.map((item) => {
            if (item.id === event.currentTarget.id) {

               
                
                const Class = document.getElementById(event.currentTarget.id)?.getAttribute("class");
                if(Class === "side-menu side-menu--active ")
                {
                    setActive(!isActive)
                }
                else
                {
                    if(isActive === false)
                    {
                        setActive(!isActive)
                    }
                    else
                    {
                        setActive(isActive)
                    }
                }
                console.log()
                
            }
           
        })



    };


    const [SidebarMenu] = useState([
        {
            id: "02022",
            name: "Dashboard",
            to: "/",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "12022",
            name: "Günlük Akış",
            to: "",
            icon: "",
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
                    to: "/checkin",
                    icon: "",
                }
            ],
        },
        {
            id: "22022",
            name: "Güncel Stoklar",
            to: "",
            icon: "",
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
            submenu: false,
        },
        {
            id: "42022",
            name: "File Manager",
            to: "/file-manager",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "52022",
            name: "Profile",
            to: "/profile",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "62022",
            name: "User",
            to: "/user",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "72022",
            name: "Authorized",
            to: "/authorized",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "82022",
            name: "Settings",
            to: "/settings",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "92022",
            name: "Api",
            to: "/api",
            func: "",
            icon: "",
            submenu: false,
        },
        {
            id: "13022",
            name: "Documents",
            to: "/docs",
            func: "",
            icon: "",
            submenu: false,
        }


    ])
    //${router.pathname === item.to ? "side-menu--active" : ""}
    //${item.submenu === false ? (null) : (item.submenu.map((sunitem: any) => { router.pathname === sunitem.to ? "side-menu--active" : "" }



    return (
        <>
            <nav className="side-nav">
                <ul>

                    {
                        SidebarMenu.map((item: any) => {
                            return (
                                <li key={item.id}>
                                    <Link role="button" href={item.submenu === false ? (item.to) : ("#")}>
                                        <a id={item.id} className={`side-menu ${item.submenu === false ? (router.pathname === item.to ? "side-menu--active" : "") : (menuId === item.id ? (isActive ? ("side-menu--active") : ("")) : (""))} `} onClick={item.submenu === false ? (null) : (HandlerClick)}>
                                            <div className="side-menu__icon"></div>
                                            <div className="side-menu__title">{item.name}</div>
                                        </a>
                                    </Link>
                                    <ul className={`${item.submenu === false ? (null) : (menuId === item.id ? (isActive ? ("side-menu__sub-open") : ("")) : (null))}  ${router.pathname === item.to ? "side-menu__sub-open" : ""}`}>
                                        {
                                            (item.submenu || []).map((subitem: any) => {
                                                return (
                                                    <li key={subitem.id}>
                                                        <Link href={subitem.to}>
                                                            <a className="side-menu">
                                                                <div className="side-menu__icon">{subitem.icon}</div>
                                                                <div className="side-menu__title">{subitem.name}</div>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </li>
                            )
                        })
                    }





                </ul>
            </nav>
        </>
    )
}