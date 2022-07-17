/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import Link from "next/link";
import { Fragment, useState } from "react";

export default function Sidebar(data: any) {

    const [SidebarMenu] = useState([
        {
            id: "02022",
            name: "Dashboard",
            to: "/",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="inbox" data-lucide="inbox" className="lucide lucide-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path></svg>,
        },
        {
            id: "12022",
            name: "Pages",
            to: "/pages",
            subname: "New Page",
            subto: "/new-page",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="hard-drive" data-lucide="hard-drive" className="lucide lucide-hard-drive"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>,
        },
        {
            id: "22022",
            name: "Post",
            to: "/posts",
            subname: "New Page",
            subto: "/new-page",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="hard-drive" data-lucide="hard-drive" className="lucide lucide-hard-drive"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>,
        },
        {
            id: "32022",
            name: "Seo",
            to: "/seo",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="file-text" data-lucide="file-text" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>,
        },
        {
            id: "42022",
            name: "File Manager",
            to: "/file-manager",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "52022",
            name: "Profile",
            to: "/profile",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "62022",
            name: "User",
            to: "/user",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "72022",
            name: "Authorized",
            to: "/authorized",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "82022",
            name: "Settings",
            to: "/settings",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "92022",
            name: "Api",
            to: "/api",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        },
        {
            id: "13022",
            name: "Documents",
            to: "/docs",
            subname: "",
            subto: "",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="calendar" data-lucide="calendar" className="lucide lucide-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        }


    ])

    return (
        <>
            <nav className="side-nav">
                <ul>
                    {
                        (SidebarMenu || []).map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    <li>
                                        <Link href={item.to}>
                                            <a className="side-menu">
                                                <div className="side-menu__icon">
                                                    {item.icon}
                                                </div>
                                                <div className="side-menu__title">
                                                    {item.name}
                                                </div>
                                            </a>
                                        </Link>
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