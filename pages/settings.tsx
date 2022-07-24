import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
import Swal from 'sweetalert2';
import ToCompare from "../data/tocompare.json";
import DataType from "../data/datatype.json";
type DataBaseList = {
    data: [],
    status: boolean,
    totalItems: number
}

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

    const Default = {
        data: [
            {
                id: 0,
                name: "No",
            }, {
                id: 1,
                name: "Null",
            },
        ]
    }

    const Attribute = {
        data: [
            {
                id: 0,
                name: "BINARY",
            }, {
                id: 1,
                name: "UNSIGNED",
            }, {
                id: 2,
                name: "UNSIGNED ZEROFILL",
            }, {
                id: 3,
                name: "on update CURRENT_TIMESTAMP",
            },
        ]
    }

    const Index = {
        data: [
            {
                id: 0,
                name: "---",
            }, {
                id: 1,
                name: "PRIMARY KEY",
            }, {
                id: 2,
                name: "UNIQUE",
            }, {
                id: 3,
                name: "INDEX",
            }, {
                id: 4,
                name: "FULLTEXT",
            }, {
                id: 5,
                name: "SPATIAL",
            },
        ]
    }




    const [Cate, setCate] = useState<SetCate>([])
    const [count, setcount] = useState(0)
    const HandlerAddColumn = (e: any) => {
        var total = count + 1;
        setcount(total)
        const id = e.currentTarget.value;
        setCate((column: any) => [...column, ...[{ id: id }]])

    }
    const HandlerRemoveColumn = (e: any) => {
        const id = e.target.getAttribute("name")
        setCate(Cate.filter((item: any) => item.id !== id));
        console.log(id)
        var total = count - 1;
        setcount(total)
    };

    //#endregion

    //#region  LIST   DATABASE
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

    //#region  DELETE DATABASE
    const HandlerDeleteDatabase = async (e: any) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            html: "Are you sure you want to delete <br/> database named  <b>" + e + "</b> ?",
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
    //#endregion

    //#region  EMPTY  DATABASE
    const HandlerEmptyDatabase = () => {
        swalWithBootstrapButtons.fire({
            html: "This Database Cannot Be Deleted or you do not have permission",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Okay, I got it!',
            reverseButtons: true
        })
    }
    //#endregion

    //#region  CREATE DATABASE
    const [database, setdatabasename] = useState('');
    function hasWhiteSpace(s: any) {
        return /\s/g.test(s);
    }
    const FormSubmit = (event: any) => {
        event.preventDefault();
        if (hasWhiteSpace(database) === false) {
            axios.post('https://localhost/api/database/create_database.php', { database: database, }).then(({ data }) => {
                List();
                //console.log(data.split(" ")[11])
                if (data.split(" ")[11] === "exists") {
                    swalWithBootstrapButtons.fire({
                        html: "Database named <b>" + database + " </b> already exists in the records",
                        icon: 'warning',
                        confirmButtonText: 'Okay, I got it!',
                        reverseButtons: true
                    })
                }
            });
        }
        else {
            swalWithBootstrapButtons.fire({
                html: "No Spaces Allowed in Database Names",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Okay, I got it!',
                reverseButtons: true
            })
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
    //#endregion



    //#region  AUTO START
    useEffect(() => {
        List();

    }, [])
    //#endregion

    //#region CREATE TABLE





    //#endregion


    const [SelectedDataBase, SetSelectedDataBase] = useState()
    const SelectDataBase = (e: any) => {
        SetSelectedDataBase(e.currentTarget.value)
    }

    //table_name
    //data

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
        axios.post('https://localhost/api/table/create_table.php', { data: columndata, table_name: tablename, database: SelectedDataBase }).then(({ data }) => {
            console.log(data)

        });
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
                                        <button id={`but${item.id}`} key={item.id} value={count} onClick={HandlerClick} className={`intro-y w-96 h-10  btn ${index === Tabsetting.opener ? Tabsetting.active : Tabsetting.pasive}   mx-2`} style={{ width: "180px" }}>
                                            {item.name}
                                            {item.icon}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div key={`tab${202290}`} id={`tab${202290}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${0 === Tabsetting.opener ? "block" : "none"}` }}>
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 2xl:col-span-12" hidden>
                                    <div className="alert alert-danger-soft show flex items-center mb-2" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="alert-octagon" data-lucide="alert-octagon" className="w-6 h-6 mr-2">
                                            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>

                                        Awesome alert with icon
                                        <button type="button" className="btn-close" data-tw-dismiss="alert" aria-label="Close">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="x" data-lucide="x" className="w-4 h-4">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
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
                                    <table className="table intro-y table-bordered md:table-fixed table">
                                        <thead>
                                            <tr>
                                                <th className={`whitespace-nowrap`}>Database Name</th>
                                                <th className={`whitespace-nowrap text-center`} style={{ width: "88px" }}>Tables</th>
                                                <th className={`whitespace-nowrap`} style={{ width: "88px" }}>Total Table</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (DataBaseList.data || "").map((item: any) => {
                                                    return (
                                                        <tr key={item.name} style={{ opacity: `${item.name === "information_schema" ? "0.4" : ""}`, backgroundColor: `${item.name === "information_schema" ? "#e9e9e9" : ""}`, cursor: `${item.name === "information_schema" ? "" : "pointer"}` }}>
                                                            <td>{item.name}</td>
                                                            <td className="text-center">12</td>
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
                                                <select data-placeholder="Select your favorite actors" className="tom-select w-full form-control" onChange={e => { SelectDataBase(e) }}>
                                                    <option value={0} key={`emptydata0`}> Select Database</option>
                                                    {DataBaseList.data.map((item: any) => { return (<option key={item.name} value={item.name}>{item.name}</option>) })}
                                                </select>
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

                                    <div className="grid grid-cols-12  gap-y-5 mt-5 mb-5"><br /></div>
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




