import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
import Swal from 'sweetalert2';
import ToCompare from "../data/tocompare.json";
import DataType from "../data/datatype.json";
import Default from "../data/default.json";
import Attribute from "../data/attribute.json";
import Index from "../data/index.json";
import Connect from "../icon/connect";
import Eye from "../icon/eye";
import Eyeoff from "../icon/eyeoff";
import Disconnet from "../icon/disconnect";
import Infocircle from "../icon/infocircle";
import Dissmiss from "../icon/dissmis";
import Puffloading from "../icon/puffloading";


type ColumnData = string[];
type SetCate = string[];


const Settings: NextPage = () => {

    //#region  GLOBAL
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success text-white mr-2 ml-2 rounded-none',
            cancelButton: 'btn btn-danger text-white mr-2 ml-2 rounded-none'
        },
        buttonsStyling: false
    })

    const [Cate, setCate] = useState<SetCate>([])
    const [count, setcount] = useState(0)
    const [showhide, setshowhide] = useState(0)
    const [passtext, setpasstext] = useState("password")
    const [status, setstatus] = useState(0)

    const HandlerAddColumn = (e: any) => {
        var total = count + 1;
        setcount(total)
        const id = e.currentTarget.value;
        setCate((column: any) => [...column, ...[{ id: id }]])

    }
    const HandlerRemoveColumn = (e: any) => {
        const id = e.target.getAttribute("name")
        setCate(Cate.filter((item: any) => item.id !== id));
        var total = count - 1;
        setcount(total)
    };
    const ShowHideFunc = (event: any) => {

        if (parseInt(event.currentTarget.value) === 0) {

            setshowhide(1)
            setpasstext("text")
        }
        else {
            setshowhide(0)
            setpasstext("password")
        }


    }
    //#endregion

    //#region  TABS
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
    //#endregion

    //#region CREATE TABLE
    const [SelectedDataBase, SetSelectedDataBase] = useState()
    const SelectDataBase = (e: any) => {
        SetSelectedDataBase(e.currentTarget.value)
    }
    const result: string[] = [];
    const [tablename, settablename] = useState("")
    const [columndata, setcolumndata] = useState<ColumnData>([])
    const setcolumnautoin = (e: any) => {
        (Cate || []).map((item: any) => {

            if (e.target.checked === true) {
                if (e.target.value === item.id) {
                    (document.getElementById(`columnindex${item.id}`) as HTMLInputElement).value = "PRIMARY KEY";
                }

            } else {

                if (e.target.value === item.id) {
                    (document.getElementById(`columnindex${item.id}`) as HTMLInputElement).value = "---";
                }

            }

        })
    }
    const setcolumnempty = (e: any) => { }
    const setcolumnname = (e: any) => { }
    const setcolumntype = (e: any) => { }
    const setcolumnvalue = (e: any) => { }
    const setcolumncompare = (e: any) => { }
    const TableCreater = (event: any) => {
        event.preventDefault();
        (Cate || []).map((item: any) => {
            setcolumndata((data: any) => [...data, ...[
                {
                    column_increment: (document.getElementById(`autoinreme${item.id}`) as HTMLInputElement).checked,
                    column_empty: (document.getElementById(`columnempty${item.id}`) as HTMLInputElement).checked,
                    column_name: (document.getElementById(`columnname${item.id}`) as HTMLInputElement).value,
                    column_type: (document.getElementById(`columntype${item.id}`) as HTMLInputElement).value,
                    column_value: (document.getElementById(`columnvalue${item.id}`) as HTMLInputElement).value,
                    column_default: (document.getElementById(`columndflt${item.id}`) as HTMLInputElement).value,
                    column_compare: (document.getElementById(`columncomp${item.id}`) as HTMLInputElement).value,
                    column_attribute: (document.getElementById(`columnattr${item.id}`) as HTMLInputElement).value,
                    column_index: (document.getElementById(`columnindex${item.id}`) as HTMLInputElement).value,
                }
            ]
            ])
        })
        axios.post('https://localhost/api/table/create_table.php', { data: columndata, table_name: tablename, database: SelectedDataBase }).then(({ data }) => { });
    }

    //#endregion

    //#region CONNECT DATABASE

    const [error, seterror] = useState(0)
    const [loader, setloader] = useState(0)
    const [errortext, seterrortext] = useState("")
    const [errorclass, seterrorclass] = useState("")


    const ConnectControl = () => {

        const value = {
            server: (document.getElementById(`server`) as HTMLInputElement).value,
            username: (document.getElementById(`database`) as HTMLInputElement).value,
            password: (document.getElementById(`username`) as HTMLInputElement).value,
            database: (document.getElementById(`password`) as HTMLInputElement).value
        }

        switch (value.server) { case "": alertcontent({ title: "", html: "1", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value.username) { case "": alertcontent({ title: "", html: "2", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value.password) { case "": alertcontent({ title: "", html: "3", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value.database) { case "": alertcontent({ title: "", html: "4", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value) { default: return false; }

    }
    const ConnectServer = async (e: any) => {
        e.preventDefault();
        if (ConnectControl() === false) {

            setloader(1);
            const { data } = await axios.post('https://localhost/connect.php', {
                op: "control",
                servername: (document.getElementById(`server`) as HTMLInputElement).value,
                username: (document.getElementById(`username`) as HTMLInputElement).value,
                password: (document.getElementById(`password`) as HTMLInputElement).value,
                database: (document.getElementById(`database`) as HTMLInputElement).value
            })

            if (data.status === false) {
                setTimeout(() => {
                    setloader(0);
                    seterror(1)
                    seterrorclass("danger")
                    seterrortext(data.data)
                }, 2000)
            }
            else {
                setTimeout(() => {
                    seterror(0)
                    seterrorclass("success")
                    seterrortext(data.data)
                    setloader(0);
                }, 2000)
            }


        }


    }

    const ConnectRead = async () => {
        const { data } = await axios.post('https://localhost/connect.php', { op: "read" })
        if (data.status === true) {
            (document.getElementById(`server`) as HTMLInputElement).value = data.data.servername;
            (document.getElementById(`username`) as HTMLInputElement).value = data.data.username;
            (document.getElementById(`password`) as HTMLInputElement).value = data.data.password;
            (document.getElementById(`database`) as HTMLInputElement).value = data.data.database;
            seterror(0)
            seterrorclass("success")
        }

    }
    useEffect(() => { ConnectRead(); }, [])

    //#endregion




    //#region SWEETALERT
    const alertcontent = (data: any) => {
        swalWithBootstrapButtons.fire({
            title: data.title,
            html: data.html,
            icon: data.icon,
            showCancelButton: false,
            confirmButtonText: data.buttontext,
            reverseButtons: true
        });
    }
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
                                        <button id={`but${item.id}`} key={item.id} value={count} onClick={HandlerClick} className={`intro-y w-96 h-10  btn ${index === Tabsetting.opener ? Tabsetting.active : Tabsetting.pasive}   mx-2`} style={{ width: "200px" }}>
                                            <div className="mx-2">{item.name}</div>
                                            <div className="mx-2">{item.icon}</div>
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div key={`tab${202289}`} id={`tab${202289}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${0 === Tabsetting.opener ? "block" : "none"}` }}>

                            <div className="grid grid-cols-12 mt-5">

                                <div className="col-span-12">
                                    <div className="grid grid-cols-4 mt-5">
                                        <div className="col-span-3">

                                            <div className={`alert ${errorclass === "danger" ? "alert-danger-soft" : "alert-success-soft"} intro-y  p-2 mx-auto transition-all ease-in-out duration-400 ${error === 0 ? "hidden" : "show"} `} style={{ height: "42px" }}>
                                                <div className="flex">
                                                    <div className="w-10">
                                                        <Infocircle class="lucide lucide-alert-circle float-left block mx-auto mr-2" />
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="mt-1">{errortext}</div>
                                                    </div>
                                                    <div className="w-10 cursor-pointer">

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-span-1">
                                            <div className="intro-y text-center float-right">
                                                <div className={`alert ${errorclass === "success" ? "alert-success" : "alert-danger"} text-white form-control mt-1 p-2 float-right w-44`}>
                                                    <div className="float-left">{errorclass === "danger" ? <Disconnet class="text-white" /> : <Connect class="text-white" />}</div>
                                                    <div style={{ marginTop: "3px" }}>Connected Status</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-span-12">
                                    <form onSubmit={ConnectServer} method="post">

                                        <div className="grid grid-cols-4 gap-2 gap-y-5 mt-5 mb-5">

                                            <div className="col-span-3">
                                                <div className="intro-y">
                                                    <label htmlFor="vertical-form-2" className="form-label">Server Name</label>
                                                    <input id="server" name="server" type="text" className="form-control mt-2 w-54" placeholder="Server Name" />
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="intro-y">
                                                    <label htmlFor="vertical-form-2" className="form-label">Database</label>
                                                    <input id="database" name="database" type="text" className="form-control mt-2 w-54" placeholder="Database" />
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="intro-y">
                                                    <label htmlFor="vertical-form-2" className="form-label">Username</label>
                                                    <input id="username" name="username" type="text" className="form-control mt-2 w-54" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="intro-y">
                                                    <label htmlFor="vertical-form-2" className="form-label">Password</label>
                                                    <input id="password" name="password" type={passtext} className="form-control mt-2 w-54" placeholder="Password" />
                                                    <button type="button" value={showhide} onClick={(event: any) => { ShowHideFunc(event) }} className="float-right cursor-pointer mr-2" style={{ marginTop: "-29px", zIndex: "99999", position: "inherit", color: "#888", width: "20px", height: "20px" }}>
                                                        {showhide === 0 ? <Eye class="lucide lucide-eye block" /> : <Eyeoff class="lucide lucide-eye-off block" />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-span-12">
                                                <div className="intro-y">
                                                    <button className="btn btn-secondary mr-1 mt-1 mb-2 w-44 float-right">
                                                        {loader === 1 ? <Puffloading /> : ""}
                                                        Connect Database
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div key={`tab${202291}`} id={`tab${202291}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${1 === Tabsetting.opener ? "block" : "none"}` }}>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 2xl:col-span-12">

                                    <div className="font-medium text-base">Create Database 2</div>

                                    <div className="grid grid-cols-12 gap-2 gap-y-5 mt-5 mb-5">
                                        <div className="col-span-12 2xl:col-span-2">
                                            <div className="intro-y">
                                                <input value={tablename} onChange={(e: any) => { settablename(e.target.value) }} type="text" className="form-control" placeholder="Table Name" />
                                            </div>
                                        </div>
                                        <div className="col-span-12 2xl:col-span-2">
                                            <div className="intro-y">
                                                <input onChange={(e: any) => { settablename(e.target.value) }} type="text" className="form-control" placeholder="Database Name" disabled />
                                            </div>

                                        </div>
                                        <div className="col-span-12 2xl:col-span-2">

                                        </div>
                                        <div className="col-span-12 2xl:col-span-4"></div>
                                        <div className="col-span-12 2xl:col-span-2">
                                            <div className="intro-y sm:justify-end float-right">
                                                <button type="submit" className="btn btn-secondary w-32" value={count} onClick={e => { HandlerAddColumn(e) }}>
                                                    Add Column
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="plus" data-lucide="plus" className="lucide lucide-plus block mx-auto">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <form onSubmit={TableCreater} method="post">
                                        {
                                            (Cate || []).map((item: any, index: number) => {
                                                return (

                                                    <div key={`keys${index}`} id={`id${index}`} className={`intro-y flex gap-5 mt-5`} >
                                                        <div className="col-span-12 2xl:col-span-1">
                                                            <div className="intro-y">
                                                                <label className="tooltip " delay-hide='1000' data-tip='asdasd'>AI</label>
                                                                <div className="mt-2">
                                                                    <div className="form-check form-switch w-full w-8">
                                                                        <div className="text-center">
                                                                            <input id={`autoinreme${item.id}`} value={item.id} onChange={(e: any) => setcolumnautoin(e)} className="show-code  h-6 form-control  " type="checkbox" style={{ height: "38px", width: "38px" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-1">
                                                            <div className="intro-y text-cen">
                                                                <label className="">Empty</label>
                                                                <div className="mt-2">
                                                                    <div className="form-check form-switch w-full">
                                                                        <div className="text-center">
                                                                            <input id={`columnempty${item.id}`} onChange={(e: any) => setcolumnempty(e.target.checked)} className="show-code  h-6 form-control" type="checkbox" style={{ height: "38px", width: "38px" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-3">
                                                            <div className="intro-y">
                                                                <label>Column Name</label>
                                                                <div className="mt-2">
                                                                    <input id={`columnname${item.id}`} onMouseOut={(e: any) => setcolumnname(e.target.value)} type="text" className="form-control w-44" placeholder="Column Name" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-3">
                                                            <div className="intro-y">
                                                                <label>Type</label>
                                                                <div className="mt-2">
                                                                    <select id={`columntype${item.id}`} onChange={(e: any) => { setcolumntype(e.target.value) }} className="tom-select w-full form-control">
                                                                        {
                                                                            DataType.default.map((e, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })
                                                                        }
                                                                        <optgroup label="Digital">
                                                                            {DataType.digital.map((e: any, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })}
                                                                        </optgroup>
                                                                        <optgroup label="Date and Time">
                                                                            {DataType.dateandtime.map((e: any, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })}
                                                                        </optgroup>
                                                                        <optgroup label="Type Setting">
                                                                            {DataType.typesetting.map((e: any, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })}
                                                                        </optgroup>
                                                                        <optgroup label="Spatial">
                                                                            {DataType.spatial.map((e: any, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })}
                                                                        </optgroup>
                                                                        <optgroup label="Json">
                                                                            {DataType.json.map((e: any, i) => {
                                                                                return (<option key={`key${item.id}props${i}`} value={e.name}>{e.name}</option>)
                                                                            })}
                                                                        </optgroup>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-3">
                                                            <div className="intro-y">
                                                                <label>Length/Value</label>
                                                                <div className="mt-2">
                                                                    <input id={`columnvalue${item.id}`} onChange={(e: any) => { setcolumnvalue(e.target.value) }} type="text" className="form-control" placeholder="Length/Value" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-12 2xl:col-span-2">
                                                            <div className="intro-y">
                                                                <label>Default</label>
                                                                <div className="mt-2">
                                                                    <select id={`columndflt${item.id}`} onChange={(e: any) => { setcolumncompare(e.target.value) }} className="tom-select  w-32 form-control">
                                                                        <option value=""></option>
                                                                        {
                                                                            Default.data.map((e: any) => {
                                                                                return (<option key={e.name} value={e.name}>{e.name}</option>)
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-12 2xl:col-span-2">
                                                            <div className="intro-y">
                                                                <label>To compare</label>
                                                                <div className="mt-2">
                                                                    <select id={`columncomp${item.id}`} onChange={(e: any) => { setcolumncompare(e.target.value) }} className="tom-select w-full form-control">
                                                                        {
                                                                            ToCompare.content.map((item: any) => {
                                                                                return (
                                                                                    <optgroup key={item.title} label={item.title}>
                                                                                        {
                                                                                            ToCompare.data.map((subitem: any) => { return (subitem.title === item.title ? (<option key={subitem.name} value={subitem.name}>{subitem.name}</option>) : "") })
                                                                                        }
                                                                                    </optgroup>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-2">
                                                            <div className="intro-y">
                                                                <label>Attribute</label>
                                                                <div className="mt-2">
                                                                    <select id={`columnattr${item.id}`} onChange={(e: any) => { setcolumncompare(e.target.value) }} className="tom-select w-full form-control">
                                                                        <option value=""></option>
                                                                        {
                                                                            Attribute.data.map((e: any) => {
                                                                                return (<option key={e.name} value={e.name}>{e.name}</option>)
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-2">
                                                            <div className="intro-y">
                                                                <label>Index</label>
                                                                <div className="mt-2">
                                                                    <select id={`columnindex${item.id}`} onChange={(e: any) => { setcolumncompare(e.target.value) }} className="tom-select w-44 form-control">
                                                                        <option value=""></option>
                                                                        {
                                                                            Index.data.map((e: any) => {
                                                                                return (<option key={e.name} value={e.name}>{e.name}</option>)
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-12 2xl:col-span-3">
                                                            <div className="intro-y">
                                                                <label>Op</label>
                                                                <div className="mt-2">
                                                                    <button name={`${item.id}`} className={`delete btn btn-danger flex  w-32 pointer-cursor`} onClick={(e: any) => HandlerRemoveColumn(e)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="trash-2" data-lucide="trash-2" className="lucide lucide-trash-2 w-4 h-4 mr-1">
                                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                                        </svg>
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                )
                                            })
                                        }

                                        <div className="intro-y flex gap-5 mt-5">
                                            <div className="intro-y  sm:justify-end">
                                                <button type="submit" className="btn btn-secondary w-24" >Create</button>
                                            </div>
                                        </div>


                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default Settings;




