/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { faAddressCard, faAngleDown, faBook, faChargingStation, faCheckToSlot, faCirclePlus, faClipboard, faFilePen, faLayerGroup, faListCheck, faSatelliteDish, faScrewdriverWrench, faSliders, faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Sidebar(data: any) {
    const router = useRouter();

    var status = false;
    var unstatus = false;
    var suid = "";

    const HandlerSubmit = (event: any) => {

        SidebarMenu.map((item: any) => {
            if (item.id === event.currentTarget.id) {
                (item.submenu || []).map((subitem: any) => {
                    if (subitem.to === router.pathname) { status = true; suid = subitem.id; }
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
        });


    };
    const HandlerunSubmit = () => { };
    const [SidebarMenu] = useState([
        {
            id: "1",
            name: "Dashboard",
            to: "/",
            func: "",
            icon: <FontAwesomeIcon icon={faCircleExclamation} />,
            submenu: false,
        },
        {
            id: "2",
            name: "Pages",
            to: "",
            func: "",
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            submenu: [
                {
                    id: "21",
                    name: "Seo",
                    to: "/seo",
                    icon: <FontAwesomeIcon icon={faChartPie} />,
                },
                {
                    id: "22",
                    name: "Settings",
                    to: "/page-settings",
                    icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
                },
            ],
        },
        {
            id: "3",
            name: "Post",
            to: "",
            func: "",
            icon: <FontAwesomeIcon icon={faCheckToSlot} />,
            submenu: [
                {
                    id: "31",
                    name: "Add Post",
                    to: "/add-post",
                    icon: <FontAwesomeIcon icon={faCirclePlus} />,
                },
                {
                    id: "32",
                    name: "Post List",
                    to: "/post-list",
                    icon: <FontAwesomeIcon icon={faClipboard} />,
                },
                {
                    id: "33",
                    name: "Category",
                    to: "/category",
                    icon: <FontAwesomeIcon icon={faListCheck} />,
                }
            ]
        },
        {
            id: "4",
            name: "File Manager",
            to: "/file-manager",
            func: "",
            icon: <FontAwesomeIcon icon={faFilePen} />,
            submenu: false,
        },
        {
            id: "5",
            name: "Profile",
            to: "/profile",
            func: "",
            icon: <FontAwesomeIcon icon={faAddressCard} />,
            submenu: false,
        },
        {
            id: "6",
            name: "User",
            to: "/user",
            func: "",
            icon: <FontAwesomeIcon icon={faUser} />,
            submenu: false,
        },
        {
            id: "7",
            name: "Authorized",
            to: "/authorized",
            func: "",
            icon: <FontAwesomeIcon icon={faChargingStation} />,
            submenu: false,
        },
        {
            id: "8",
            name: "Settings",
            to: "/settings",
            func: "",
            icon: <FontAwesomeIcon icon={faSliders} />,
            submenu: false,
        },
        {
            id: "9",
            name: "Api",
            to: "/api",
            func: "",
            icon: <FontAwesomeIcon icon={faSatelliteDish} />,
            submenu: false,
        },
        {
            id: "10",
            name: "Documents",
            to: "/docs",
            func: "",
            icon: <FontAwesomeIcon icon={faBook} />,
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
                                            id={`${item.id}`}
                                            className={`side-menu cursor-pointer ${router.pathname === item.to ? (" side-menu--active ") : (item.submenu === false ? ("") : (item.submenu.map((subitem: any) => { return (subitem.to.trim() === router.pathname.trim() ? (" side-menu--active ") : ("")) })))}`}
                                            onClick={item.submenu === false ? (HandlerunSubmit) : (HandlerSubmit)}
                                        >
                                            <div className="side-menu__icon">{item.icon}</div>
                                            <div className="side-menu__title">
                                                {item.name}
                                                {item.submenu === false ? ("") : (<div id={`ico${item.id}`} className="side-menu__sub-icon "><FontAwesomeIcon icon={faAngleDown} /> </div>)}
                                            </div>
                                        </div>
                                    </Link>
                                    <ul id={`sub${item.id}`} className={`${item.submenu === false ? ("") : (item.submenu.map((subitem: any) => { return (subitem.to === router.pathname ? (" side-menu__sub-open ") : ("")) }))}`}>
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