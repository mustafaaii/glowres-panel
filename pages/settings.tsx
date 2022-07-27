import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
import ConnectDatabase from "./page-element/p-settings/connect-database";
import CreateTable from "./page-element/p-settings/create-table";
const Settings: NextPage = () => {
    const Tabsetting = {
        active: "bg-primary text-white",
        pasive: "bg-slate-200 text-slate-700",
        opener: 0,
    }
    const Tabdata = {
        data: [
            {
                id: 202289,
                name: "Connect Database",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="database" data-lucide="database" className="lucide lucide-database  float-right">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>,
            },
            {
                id: 202291,
                name: "Create Table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="list" data-lucide="list" className="lucide lucide-list  float-right">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>,
            },
        ],
        Description: "Setup Your System",
        BottomTitle: "asdasdasddas.",
    };
    const HandlerClick = (e: any) => {
        const id = e.currentTarget.id.slice(3, 18)
        Tabdata.data.map((item: any, index: number) => {
            if (item.id === parseInt(id)) {
                document.getElementById(`tab${id}`)?.setAttribute("style", "display:block");
                document.getElementById(`but${id}`)?.setAttribute("class", `intro-y w-96 h-10 outline-none btn ${Tabsetting.active}  border-none text-white mx-2`);
            }
            else {
                document.getElementById(`tab${item.id}`)?.setAttribute("style", "display:none");
                document.getElementById(`but${item.id}`)?.setAttribute("class", `intro-y w-96 h-10 outline-none  text-slate-700 mx-2 btn ${Tabsetting.pasive}`);
            }
        })
    }


    return (
        <>
            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    <div className="intro-y box py-10 sm:py-20 mt-5">
                        <div className="flex justify-center">
                            {
                                Tabdata.data.map((item: any, index: number) => {
                                    return (
                                        <button id={`but${item.id}`} key={item.id} onClick={HandlerClick} className={`intro-y w-96 h-10  btn ${index === Tabsetting.opener ? Tabsetting.active : Tabsetting.pasive}   mx-2`} style={{ width: "200px" }}>
                                            <div className="mx-2">{item.name}</div>
                                            <div className="mx-2">{item.icon}</div>
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div key={`tab${202289}`} id={`tab${202289}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${0 === Tabsetting.opener ? "block" : "none"}` }}>
                            <ConnectDatabase />
                        </div>
                        <div key={`tab${202291}`} id={`tab${202291}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${1 === Tabsetting.opener ? "block" : "none"}` }}>
                            <CreateTable />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default Settings;




