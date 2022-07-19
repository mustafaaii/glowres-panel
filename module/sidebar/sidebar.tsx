/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { faAngleDown, faCodeFork, faLayerGroup, faSpellCheck, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Sidebar(data: any) {
    const router = useRouter();
    var status = false;
    var exters = "";
    const HandlerSubmit = (event: any) => {
        SidebarMenu.map((item: any) => {
            (item.submenu || []).map((subitem: any) => { if (subitem.to === router.pathname) { status = true; exters = subitem.to } })
            if (status === false) {
                if (item.id === event.currentTarget.id) {
                    document.getElementById(item.id)?.classList.toggle("side-menu--active")
                    document.getElementById(`sub${item.id}`)?.classList.toggle("side-menu__sub-open")
                    document.getElementById(`ico${item.id}`)?.classList.toggle("rotate-180")
                }
                else if (item.to !== router.pathname) {
                    document.getElementById(item.id)?.classList.remove("side-menu--active")
                    document.getElementById(`sub${item.id}`)?.classList.remove("side-menu__sub-open")
                    document.getElementById(`ico${item.id}`)?.classList.remove("rotate-180")
                }
            }
            else {
                if (item.id === event.currentTarget.id) {
                    document.getElementById(item.id)?.classList.toggle("side-menu--active")
                    document.getElementById(`sub${item.id}`)?.classList.toggle("side-menu__sub-open")
                    document.getElementById(`ico${item.id}`)?.classList.toggle("rotate-180")
                }
                else if (item.to !== router.pathname) {
                    document.getElementById(item.id)?.classList.remove("side-menu--active")
                    document.getElementById(`sub${item.id}`)?.classList.remove("side-menu__sub-open")
                    document.getElementById(`ico${item.id}`)?.classList.remove("rotate-180")
                }
            }
        })

        console.log(status)
    };
    const HandlerunSubmit = () => { };
    const [SidebarMenu] = useState([
        {
            id: "02022",
            name: "Dashboard",
            to: "/",
            func: "",
            icon: <FontAwesomeIcon icon={faCircleExclamation} />,
            submenu: false,
        },
        {
            id: "12022",
            name: "Günlük Akış",
            to: "",
            icon: <FontAwesomeIcon icon={faSun} />,
            submenu: [
                {
                    id: "12",
                    name: "İş Planı",
                    to: "/isplani",
                    icon: <FontAwesomeIcon icon={faCodeFork} />,
                },
                {
                    id: "13",
                    name: "Chekc In",
                    to: "/checkin",
                    icon: <FontAwesomeIcon icon={faSpellCheck} />,
                }
            ],
        },
        {
            id: "22022",
            name: "Güncel Stoklar",
            to: "",
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            submenu: [
                {
                    id: "220221",
                    name: "Peron",
                    to: "/peron",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                },
                {
                    id: "220222",
                    name: "Peron Sayım",
                    to: "/peron-sayim",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                },
                {
                    id: "220223",
                    name: "Envanter",
                    to: "/envanter",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                }
            ],
        },
        {
            id: "32022",
            name: "Seo",
            to: "/seo",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: [
                {
                    id: "320221",
                    name: "deneme1",
                    to: "/deneme1",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                },
                {
                    id: "320222",
                    name: "Peron Sayım",
                    to: "/peron-sayim",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                },
                {
                    id: "320223",
                    name: "Envanter",
                    to: "/envanter",
                    icon: <FontAwesomeIcon icon={faPhone} />,
                }
            ],
        },
        {
            id: "42022",
            name: "File Manager",
            to: "/file-manager",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "52022",
            name: "Profile",
            to: "/profile",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "62022",
            name: "User",
            to: "/user",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "72022",
            name: "Authorized",
            to: "/authorized",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "82022",
            name: "Settings",
            to: "/settings",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "92022",
            name: "Api",
            to: "/api",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
            submenu: false,
        },
        {
            id: "13022",
            name: "Documents",
            to: "/docs",
            func: "",
            icon: <FontAwesomeIcon icon={faPhone} />,
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
                                            <div className="side-menu__icon">{item.icon}</div>
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