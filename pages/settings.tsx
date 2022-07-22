import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Input from "../element/input";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
import Swal from 'sweetalert2'
type DataBaseList = {
    data: [],
    status: boolean,
    totalItems: number
}
const Settings: NextPage = () => {


    //#region GLOBAL
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success text-white mr-2 ml-2 rounded-none',
            cancelButton: 'btn btn-danger text-white mr-2 ml-2 rounded-none'
        },
        buttonsStyling: false
    })
    //#endregion

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

    const HandlerDeleteDatabase = async (e: any) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            html: "Are you sure you want to delete database named <b>" + e + "</b> ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('https://localhost/api/database/delete_database.php', { db_name: e, }).then(() => { List(); });
                swalWithBootstrapButtons.fire('Deleted!', 'Database Deleted.', 'success')

            }
        })
    }
    const HandlerEmptyDatabase = () => {
        swalWithBootstrapButtons.fire({
            html: "This Database Cannot Be Deleted or you do not have permission",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Okay, I got it!',
            reverseButtons: true
        })
    }
    const [database, setdatabasename] = useState('');
    function hasWhiteSpace(s: any) {
        return /\s/g.test(s);
    }

    const FormSubmit = (event: any) => {
        event.preventDefault();
        console.log(hasWhiteSpace(database))
        if (hasWhiteSpace(database) === false)
        {
            axios.post('https://localhost/api/database/create_database.php', { database: database, }).then(() => { List(); });
        }
        else
        {
            swalWithBootstrapButtons.fire({
                html: "No Spaces Allowed in Database Names",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Okay, I got it!',
                reverseButtons: true
            })
        }


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


                                <div className="col-span-12 2xl:col-span-12">
                                    <form onSubmit={FormSubmit} method="post">
                                        <div className="font-medium text-base">Create New Database</div>
                                        <div className="grid grid-cols-12 gap-6 gap-y-5 mt-5">
                                            <div className="col-span-12 2xl:col-span-10">
                                                <div className="intro-y">
                                                    <input id="database" name="database" type="text" value={database} className="form-control" onChange={e => { setdatabasename(e.target.value) }} placeholder="Database Name" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 2xl:col-span-2">
                                                <div className="intro-y  flex items-center justify-center sm:justify-end">
                                                    <button type="submit" className="btn btn-secondary w-24">Create</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-span-12 2xl:col-span-12">
                                    <table className="table intro-y table-bordered md:table-fixed  table table-striped">
                                        <thead>
                                            <tr>
                                                <th className={`whitespace-nowrap`}>Database Name</th>
                                                <th className={`whitespace-nowrap`} style={{ width: "88px" }}>Tables</th>
                                                <th className={`whitespace-nowrap`} style={{ width: "88px" }}>Total Table</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (DataBaseList.data || "").map((item: any) => {
                                                    return (
                                                        <tr style={{ opacity: `${item.name === "information_schema" ? "0.4" : ""}` }}>
                                                            <td>{item.name}</td>
                                                            <td>12</td>
                                                            <td className="text-center" style={{ width: "110px" }}>
                                                                <div id={item.name} onClick={(e) => { item.name === "information_schema" ? (HandlerEmptyDatabase) : (HandlerDeleteDatabase(e.currentTarget.id)) }} className={`pointer-cursor`}>
                                                                    <div className="delete flex items-center  pointer-cursor text-danger">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="trash-2" data-lucide="trash-2" className="lucide lucide-trash-2 w-4 h-4 mr-1">
                                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                                        </svg>
                                                                        Delete
                                                                    </div>
                                                                </div>
                                                            </td>
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




