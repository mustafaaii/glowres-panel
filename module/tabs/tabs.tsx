import { NextPage } from "next";
import { useState } from "react";
import TabsBody from "./tabs_body";
import TabsHeader from "./tabs_header";

type GlobalData =
    {
        Head: any,
        Body: any,
    }


const Tabs: NextPage = (Tabs: any) => {
    const [ModuleTabs] = useState<GlobalData>(
        {
            Head: Tabs.HeadData,
            Body: Tabs.BodyData,
        });



    return (
        <div className="intro-y box py-10 sm:py-20 mt-5">
            <TabsHeader HeadData={ModuleTabs.Head} />
            <TabsBody   BodyData={ModuleTabs.Body} />
        </div>
    )

}

export default Tabs;