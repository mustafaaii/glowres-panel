import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const Postlist: NextPage = () => {

    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    Post list
                </div>
            </div>

        </>
    )
}

export default Postlist;
