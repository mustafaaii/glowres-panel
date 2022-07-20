import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const PageSettings: NextPage = () => {

    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    Page Settings
                </div>
            </div>

        </>
    )
}

export default PageSettings;
