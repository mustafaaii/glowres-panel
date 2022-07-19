import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const Seo: NextPage = () => {

    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    Seo
                </div>
            </div>

        </>
    )
}

export default Seo;
