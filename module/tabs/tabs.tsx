import { NextPage } from "next";
import { useEffect, useState } from "react";


type TabsData = {
    data: any,
    sett: any,
}
const Tabs: NextPage = (d: any) => {

    const [moduledata] = useState<TabsData>({
        data: d.data,
        sett: d.setting,
    });

    const HandlerClick = (e: any) => {
        const id = e.currentTarget.id.slice(3, 18)
        moduledata.data.map((item: any, index: number) => {
            if (item.id === parseInt(id)) {
                document.getElementById(`tab${id}`)?.setAttribute("style", "display:block");
                document.getElementById(`but${item.id}`)?.setAttribute("class", `intro-y w-96 h-10 outline-none btn ${moduledata.sett.active}  border-none text-white mx-2`);
            }
            else {
                document.getElementById(`tab${item.id}`)?.setAttribute("style", "display:none");
                document.getElementById(`but${item.id}`)?.setAttribute("class", `intro-y w-96 h-10 outline-none  text-slate-700 mx-2 btn ${moduledata.sett.pasive}`);
            }
        })
    }
    return (
        <div className="intro-y box py-10 sm:py-20 mt-5">
            <div className="flex justify-center">
                {
                    moduledata.data.map((item: any, index: number) => {
                        return (
                            <button id={`but${item.id}`} key={item.id} onClick={HandlerClick} className={`intro-y w-96 h-10  btn ${index === moduledata.sett.opener ? moduledata.sett.active : moduledata.sett.pasive}   mx-2`} style={{ width: "180px" }}>
                                {item.name}
                                {item.icon}
                            </button>
                        )
                    })
                }
            </div>
            {
                moduledata.data.map((item: any, index: number) => {
                    return (
                        <div key={`tab${item.id}`} id={`tab${item.id}`} className={`px-5 sm:px-20 mt-10 pt-10  border-slate-200/60 dark:border-darkmode-400`} style={{ display: `${index === moduledata.sett.opener ? "" : "none"}` }}>
                            {item.body}
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Tabs;