/* Element Select Info
/* Element Name : Select
/* Element Description : Select
/* Element Version : 0.1
*/


import { useState } from "react";
import ToCompare from "../data/tocompare.json";
import DataType from "../data/datatype.json";
import CloneLimit from "../data/clonelimit.json";


export default function TableData(data: any) {

    const Default = {
        data: [
            {
                name: "No",
            },
            {
                name: "As defined:",
            },
            {
                name: "Null",
            },
            {
                name: "CURRENT_TIMESTAMP",
            },

        ]
    }
    const Attributes = {
        data: [
            {
                name: "",
            },
            {
                name: "BINARY",
            },
            {
                name: "UNSIGNED",
            },
            {
                name: "UNSIGNED ZEROFILL",
            },
            {
                name: "on update CURRENT_TIMESTAMP",
            }
        ]
    }


    const SelectDefault = (e: any) => {
        (Cate || []).map((item: any, index) => {

            const id = `default_select${index}`
            const inid = `defaultinput${index}`
            if (e.currentTarget.id === id) {
                if (e.currentTarget.value === "As defined:") {
                    document.getElementById(inid)?.classList.remove("hidden")
                }
                else {
                    document.getElementById(inid)?.classList.toggle("hidden")
                }
            }
            else {
                document.getElementById(id)?.classList.remove("hidden")
            }
        })
    }


    return (
        <>

            <div className="col-span-12 2xl:col-span-2">
                <div className="intro-y">
                    <label>Column Name</label>
                    <div className="mt-2">
                        <input id="database" name="database" type="text" className="form-control" placeholder="Column Name" />
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Type</label>
                    <div className="mt-2">
                        <select data-placeholder="Select your favorite actors" className="tom-select w-full form-control">
                            {
                                DataType.default.map((item) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })
                            }
                            <optgroup label="Digital">
                                {DataType.digital.map((item: any) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })}
                            </optgroup>
                            <optgroup label="Date and Time">
                                {DataType.dateandtime.map((item: any) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })}
                            </optgroup>
                            <optgroup label="Type Setting">
                                {DataType.typesetting.map((item: any) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })}
                            </optgroup>
                            <optgroup label="Spatial">
                                {DataType.spatial.map((item: any) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })}
                            </optgroup>
                            <optgroup label="Json">
                                {DataType.json.map((item: any) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })}
                            </optgroup>

                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Length/Value</label>
                    <div className="mt-2">
                        <input id="database" name="database" type="text" className="form-control" placeholder="Length/Value" />
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Default</label>
                    <div className="mt-2">
                        <select id={`default_select${index}`} data-placeholder="Select your favorite actors" className="tom-select w-full form-control" onChange={e => { SelectDefault(e) }} >
                            {
                                Default.data.map((item) => {
                                    return (<option key={item.name} value={item.name}>{item.name}</option>)
                                })
                            }
                        </select>
                        <input id={`defaultinput${index}`} name="database" type="text" className="form-control mt-2 hidden" placeholder="To compare" />
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>To compare</label>
                    <div className="mt-2">
                        <select data-placeholder="Select your favorite actors" className="tom-select w-full form-control" onChange={e => { SelectDefault(e) }}>
                            {
                                ToCompare.content.map((item: any) => {
                                    return (
                                        <optgroup label={item.title}>
                                            {
                                                ToCompare.data.map((subitem) => { return (subitem.title === item.title ? (<option>{subitem.name}</option>) : "") })
                                            }
                                        </optgroup>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Attributes</label>
                    <div className="mt-2">
                        <select data-placeholder="Select your favorite actors" className="tom-select w-full form-control">
                            {
                                Attributes.data.map((item: any) => {
                                    return (<option value={item.name}>{item.name}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Empty</label>
                    <div className="mt-2">
                        <div className="form-check form-switch w-full sm:w-auto h-6 sm:ml-auto mt-3 sm:mt-0">
                            <input id="show-example-2" data-target="#input-sizing" className="show-code h-6 form-check-input mr-0 mt-3" type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label>Attributes</label>
                    <div className="mt-2">
                        <select data-placeholder="Select your favorite actors" className="tom-select w-full form-control">
                            {
                                Attributes.data.map((item: any) => {
                                    return (<option value={item.name}>{item.name}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-1">
                <div className="intro-y">
                    <label >AI</label>
                    <div className="mt-2">
                        <div className="form-check form-switch w-full sm:w-auto h-6 sm:ml-auto mt-3 sm:mt-0  ">
                            <input id="show-example-2" data-target="#input-sizing" className="show-code  h-6 form-check-input mr-0 mt-3" type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-2">
                <div className="intro-y">
                    <label>Description</label>
                    <div className="mt-2">
                        <input id="database" name="database" type="text" value={""} className="form-control" placeholder="Description" />
                    </div>
                </div>
            </div>
        </>
    )
}