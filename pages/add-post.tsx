import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const Addpost: NextPage = () => {

    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    Add post
                </div>
            </div>

        </>
    )
}

export default Addpost;