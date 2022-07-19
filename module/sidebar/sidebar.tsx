/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnyARecord } from "dns";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";


export default function Sidebar(data: any) {

    const router = useRouter();

    var status = false;
    var unstatus = false;
    const HandlerSubmit = (event: any) => {
        SidebarMenu.map((item: any) => {





            if (item.id === event.currentTarget.id) {
                (item.submenu || []).map((subitem: any) => {
                    if (subitem.to === router.pathname) { status = true; }
                })
                if (status === false) {
                    document.getElementById(item.id)?.classList.toggle("side-menu--active");
                    document.getElementById(`sub${item.id}`)?.classList.toggle("side-menu__sub-open");
                    document.getElementById(`ico${item.id}`)?.classList.toggle("rotate-180");

                }
            }
            else {
                (item.submenu || []).map((subitem: any) => {
                    if (subitem.to === router.pathname) {
                        unstatus = true;
                    }
                })
                if (item.to !== router.pathname) {
                    if (unstatus !== true) {
                        document.getElementById(item.id)?.classList.remove("side-menu--active")
                        document.getElementById(`sub${item.id}`)?.classList.remove("side-menu__sub-open")
                        document.getElementById(`ico${item.id}`)?.classList.remove("rotate-180")
                    }
                } else { }
            }



        })
    };
    const HandlerunSubmit = () => { };



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
            submenu: [
                {
                    id: "320221",
                    name: "deneme1",
                    to: "/deneme1",
                    icon: "",
                },
                {
                    id: "320222",
                    name: "Peron Sayım",
                    to: "/peron-sayim",
                    icon: "",
                },
                {
                    id: "320223",
                    name: "Envanter",
                    to: "/envanter",
                    icon: "",
                }
            ],
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
                        SidebarMenu.map((item: any) => {
                            return (
                                <li key={item.id}>
                                    <Link role="button" href={item.submenu === false ? (item.to) : "#"}>
                                        <div
                                            id={item.id}
                                            className={`side-menu cursor-pointer ${router.pathname === item.to ? ("a side-menu--active a") : (item.submenu === false ? ("") : (item.submenu.map((subitem: any) => { return (subitem.to.trim() === router.pathname.trim() ? ("a side-menu--active a") : ("")) })))}`}
                                            onClick={item.submenu === false ? (HandlerunSubmit) : (HandlerSubmit)}
                                        >
                                            <div className="side-menu__icon"></div>
                                            <div className="side-menu__title">
                                                {item.name}
                                                {item.submenu === false ? ("") : (<div id={`ico${item.id}`} className="side-menu__sub-icon "><FontAwesomeIcon icon={faAngleDown} /> </div>)}
                                            </div>
                                        </div>
                                    </Link>
                                    <ul id={`sub${item.id}`} className={`${item.submenu === false ? ("") : (item.submenu.map((subitem: any) => { return (subitem.to === router.pathname ? ("a side-menu__sub-open a") : ("")) }))}`}>
                                        {
                                            (item.submenu || []).map((subitem: any) => {
                                                return (
                                                    <li key={subitem.id}>
                                                        <Link href={subitem.to}>
                                                            <a className="side-menu">
                                                                <div className={`side-menu__icon`}>{subitem.icon}</div>
                                                                <div className={`side-menu__title`}>{subitem.name}</div>
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