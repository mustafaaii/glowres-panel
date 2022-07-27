

/* Element Create Table Info
/* Element Name : Create Table
/* Element Description : Create Table
/* Element Version : 0.1
*/

//NEXT IMPORT
import { useState } from "react";

//DATA IMPORT
import ToCompare from "../../../data/tocompare.json";
import DataType from "../../../data/datatype.json";
import Default from "../../../data/default.json";
import Attribute from "../../../data/attribute.json";
import Index from "../../../data/index.json";

type row_data = string[];
export default function CreateTable() {

    //#region CREATE TABLE
    const [row, setrow] = useState<row_data>([])
    const [tablename, settablename] = useState("")
    const [count, setcount] = useState(0)
    const row_list_add = (e: any) => {
        var total = count + 1;
        setcount(total)
        const id = e.currentTarget.value;
        setrow((column: any) => [...column, ...[{ id: id }]])
    }
    const row_list_remove = (e: any) => {
        const id = e.target.getAttribute("name")
        setrow(row.filter((item: any) => item.id !== id));
        var total = count - 1;
        setcount(total)
    }
    const table_add = (e: any) => {
        e.preventDefault();
        var collect = "";
        (row || []).map((item: any) => {
            var val1 = (document.getElementById(`in_val_1_${item.id}`) as HTMLInputElement).checked;
            var val2 = (document.getElementById(`in_val_2_${item.id}`) as HTMLInputElement).value;
            var val3 = (document.getElementById(`in_val_3_${item.id}`) as HTMLInputElement).value;
            var val4 = (document.getElementById(`in_val_4_${item.id}`) as HTMLInputElement).value;
            var val6 = (document.getElementById(`in_val_6_${item.id}`) as HTMLInputElement).value;
            var val7 = (document.getElementById(`in_val_7_${item.id}`) as HTMLInputElement).value;
            var val8 = (document.getElementById(`in_val_8_${item.id}`) as HTMLInputElement).checked;
            var val9 = (document.getElementById(`in_val_9_${item.id}`) as HTMLInputElement).value;
            //CREATE TABLE (id INT(13) NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(300) CHARACTER SET utf8mb4  COLLATE utf8mb4_nopad_bin NOT NULL,surname VARCHAR(300) CHARACTER SET utf8mb4  COLLATE utf8mb4_slovenian_ci NOT NULL      ,description TEXT CHARACTER SET utf8mb4  COLLATE utf8mb4_turkish_ci NOT NULL ,dates DATE()   NOT NULL      ) DEFAULT CHARSET=latin1
            collect = 'CREATE TABLE (' + val2 + ' ' + val6 === "No" ? "NOT NULL" : val6 + ')';
        })
        console.log(collect)
    }

    //#endregion





    return (
        <>
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
                                <input id="selectdatabase" type="text" className="form-control" placeholder="Database Name" disabled />
                            </div>

                        </div>
                        <div className="col-span-12 2xl:col-span-2">

                        </div>
                        <div className="col-span-12 2xl:col-span-4"></div>
                        <div className="col-span-12 2xl:col-span-2">
                            <div className="intro-y sm:justify-end float-right">
                                <button type="submit" className="btn btn-secondary w-32" value={count} onClick={e => { row_list_add(e) }}>
                                    Add Column
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="plus" data-lucide="plus" className="lucide lucide-plus block mx-auto">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={table_add} method="post">
                        {
                            (row || []).map((item: any, index: number) => {
                                return (

                                    <div key={`keys${index}`} id={`id${index}`} className={`intro-y flex gap-5 mt-5`} >
                                        <div className="col-span-12 2xl:col-span-1">
                                            <div className="intro-y">
                                                <label className="tooltip " delay-hide='1000' data-tip='asdasd'>AI</label>
                                                <div className="mt-2">
                                                    <div className="form-check form-switch w-full w-8">
                                                        <div className="text-center">
                                                            <input id={`in_val_1_${item.id}`} value={item.id} className="show-code  h-6 form-control  " type="checkbox" style={{ height: "38px", width: "38px" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-12 2xl:col-span-3">
                                            <div className="intro-y">
                                                <label>Column Name</label>
                                                <div className="mt-2">
                                                    <input id={`in_val_2_${item.id}`} type="text" className="form-control w-44" placeholder="Column Name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-12 2xl:col-span-3">
                                            <div className="intro-y">
                                                <label>Type</label>
                                                <div className="mt-2">
                                                    <select id={`in_val_3_${item.id}`} className="tom-select w-full form-control">
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
                                                    <input id={`in_val_4_${item.id}`} type="text" className="form-control" placeholder="Length/Value" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-12 2xl:col-span-2">
                                            <div className="intro-y">
                                                <label>Default</label>
                                                <div className="mt-2">
                                                    <select id={`in_val_5_${item.id}`} className="tom-select  w-32 form-control">
                                                        {
                                                            Default.data.map((e: any) => {
                                                                return (<option key={e.name} value={e.name} >{e.name}</option>)
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
                                                    <select id={`in_val_6_${item.id}`} className="tom-select w-full form-control">
                                                        {
                                                            ToCompare.content.map((item: any) => {
                                                                return (
                                                                    <optgroup key={item.title} label={item.title}>
                                                                        {
                                                                            ToCompare.data.map((subitem: any) => { return (subitem.title === item.title ? (<option key={subitem.name} value={[item.title, subitem.name]}>{subitem.name}</option>) : "") })
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
                                                    <select id={`in_val_7_${item.id}`} className="tom-select w-full form-control">
                                                        <option value=""></option>
                                                        {
                                                            Attribute.data.map((e: any) => {
                                                                return (<option key={e.name} value={e.name} >{e.name}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-12 2xl:col-span-1">
                                            <div className="intro-y text-cen">
                                                <label className="">Empty</label>
                                                <div className="mt-2">
                                                    <div className="form-check form-switch w-full">
                                                        <div className="text-center">
                                                            <input id={`in_val_8_${item.id}`} className="show-code  h-6 form-control" type="checkbox" style={{ height: "38px", width: "38px" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-12 2xl:col-span-2">
                                            <div className="intro-y">
                                                <label>Index</label>
                                                <div className="mt-2">
                                                    <select id={`in_val_9_${item.id}`} className="tom-select w-44 form-control">
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
                                                    <button name={`${item.id}`} className={`delete btn btn-danger flex  w-32 pointer-cursor`} onClick={(e: any) => row_list_remove(e)}>
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


        </>
    )

}