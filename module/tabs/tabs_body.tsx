import { NextPage } from "next";
import { useState } from "react";
type bodydata =
    {
        data: any
    }
const TabsBody: NextPage = (data: any) => {

    const [bodydata] = useState<bodydata>({
        data: data.BodyData
    });

    console.log()


    return (
        <>
            <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                {bodydata.data}
            </div>
        </>
    )
}


export default TabsBody;