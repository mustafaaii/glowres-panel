import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Input from "../element/input";
import Table from "../element/table";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";

type DataBaseList = {
    data: [],
    status: boolean,
    totalItems: number
}


const Settings: NextPage = () => {


    //#region  DATABASE LIST
    const [DataBaseList, SetDataBaseList] = useState<DataBaseList>({
        data: [],
        status: false,
        totalItems: 0
    });
    const List = async () => {
        const { data } = await axios.post('https://localhost/api/database/get_database.php', { op: "database_list", });
        SetDataBaseList(data);
    }
    //#endregion


    console.log(DataBaseList.data)




    const [database, setdatabasename] = useState('');
    const FormSubmit = (event: any) => {
        event.preventDefault();
        axios.post('https://localhost/api/database/create_database.php', { database: database, }).then(({ data }) => { console.log(data) });
    }
    const Tabsetting = {
        active: "bg-primary text-white",
        pasive: "bg-slate-200 text-slate-700",
        opener: 0,
    }
    const Tabdata = {
        data: [
            {
                id: 202290,
                name: "Connect data base",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="database" data-lucide="database" className="lucide lucide-database block mx-auto ml-3">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>,
            },
            {
                id: 202291,
                name: "Create a new table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="list" data-lucide="list" className="lucide lucide-list block mx-auto">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>,
            },
            {
                id: 202292,
                name: "Create a new table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="list" data-lucide="list" className="lucide lucide-list block mx-auto">
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




    //#region  AUTOSTART
    useEffect(() => {
        List();

    }, [])



    //#endregion









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
                                        <button id={`but${item.id}`} key={item.id} onClick={HandlerClick} className={`intro-y w-96 h-10  btn ${index === Tabsetting.opener ? Tabsetting.active : Tabsetting.pasive}   mx-2`} style={{ width: "180px" }}>
                                            {item.name}
                                            {item.icon}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div key={`tab${202290}`} id={`tab${202290}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${0 === Tabsetting.opener ? "block" : "none"}` }}>
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 2xl:col-span-6">
                                    <form onSubmit={FormSubmit} method="post">
                                        <div className="font-medium text-base">Create Database 1</div>
                                        <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                                            <div className="intro-y col-span-12 sm:col-span-12">
                                                <label htmlFor="input-wizard-1" className="form-label">Database Name</label>
                                                <input id="database" name="database" type="text" value={database} className="form-control" onChange={e => { setdatabasename(e.target.value) }} placeholder="Database Name" />
                                            </div>
                                            <div className="intro-y col-span-12 sm:col-span-12">
                                                <label htmlFor="input-wizard-1" className="form-label">Database Name</label>
                                                <input id="database" name="database" type="text" value={database} className="form-control" onChange={e => { setdatabasename(e.target.value) }} placeholder="Database Name" />
                                            </div>
                                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                                <button type="submit" className="btn btn-secondary w-24">Create</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-span-12 2xl:col-span-6 2xl:border-l p-2">
                                    <table className="table table-bordered md:table-fixed  table table-striped">
                                        <thead>
                                            <tr>
                                                <th className={`whitespace-nowrap`}>Database Name</th>
                                                <th className={`whitespace-nowrap`}>Total Table</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (DataBaseList.data || "").map((item: any) => {
                                                    return (
                                                        <tr>
                                                            <td>{item.name}</td>
                                                            <td></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div key={`tab${202291}`} id={`tab${202291}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${1 === Tabsetting.opener ? "block" : "none"}` }}>
                            <form onSubmit={FormSubmit} method="post">
                                <div className="font-medium text-base">Create Database 2</div>
                                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">

                                    <div className="intro-y col-span-12 sm:col-span-6">
                                        <label htmlFor="input-wizard-1" className="form-label">Database Name</label>
                                    </div>

                                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                        <button type="submit" className="btn btn-secondary w-24">Create</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div key={`tab${202292}`} id={`tab${202292}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${2 === Tabsetting.opener ? "block" : "none"}` }}>
                            <form onSubmit={FormSubmit} method="post">
                                <div className="font-medium text-base">Create Database 3</div>
                                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">

                                    <div className="intro-y col-span-12 sm:col-span-6">
                                        <label htmlFor="input-wizard-1" className="form-label">Database Name</label>
                                    </div>

                                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                        <button type="submit" className="btn btn-secondary w-24">Create</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>























                </div>
            </div >
        </>
    )
}


export default Settings;




