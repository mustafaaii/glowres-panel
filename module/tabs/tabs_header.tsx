import { NextPage } from "next";
import { useState } from "react";


type TabsHeader = { HeadData: any }

const TabsHeader: NextPage = (data: any) => {

    const [ModuleTabs] = useState<TabsHeader>({ HeadData: data.HeadData });



    return (
        <>

            <div className="flex justify-center">
                {
                    ModuleTabs.HeadData.data.map((item: any) => {
                        return (
                            <button key={item.tabsid} className="intro-y w-96 h-10  btn bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400 text-slate-700 mx-2" style={{ width: "180px" }}>
                                {item.tabsname}
                                {item.icon}
                            </button>
                        )
                    })
                }
            </div>
            <div className="px-5 mt-10">
                <div className="font-medium text-center text-lg">{ModuleTabs.HeadData.Description}</div>
                <div className="text-slate-500 text-center mt-2">{ModuleTabs.HeadData.BottomTitle}</div>
            </div>


        </>
    )
}
export default TabsHeader;