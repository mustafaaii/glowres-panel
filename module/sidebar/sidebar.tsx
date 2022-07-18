/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function Sidebar(data: any) {

    const router = useRouter()


    const [menu, setmenu] = useState(Number)
    const [menuId, setmenuId] = useState(Number)
    const menuactive = () => {
        return (
            menu === 1 ? setmenu(0) : setmenu(1)
        )
    }


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
            func: () => { menuactive() },
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
                    to: "/check-in",
                    icon: "",
                }
            ],
        },
        {
            id: "22022",
            name: "Post",
            to: "/posts",
            func: "",
            icon: "",
            submenu: false,
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




    return (
        <>
            <nav className="side-nav">
                <ul>
                    {
                        (SidebarMenu || []).map((item: any) => {
                            return (
                                <Fragment key={item.id}>
                                    <li>
                                        <Link href={item.to}>
                                            <a className={`side-menu`}>
                                                <div className="side-menu__icon">{item.icon}</div>
                                                <div className="side-menu__title">{item.name}</div>
                                            </a>
                                        </Link>
                                        <ul>
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