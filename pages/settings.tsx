import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
import Tabs from "../module/tabs/tabs";





const Settings: NextPage = () => {

    const TabsData = {
        data: [
            {
                tabsid: 202290,
                tabsname: "Connect data base",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="database" data-lucide="database" className="lucide lucide-database block mx-auto ml-3">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>,
            },
            {
                tabsid: 202291,
                tabsname: "Create a new table",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="list" data-lucide="list" className="lucide lucide-list block mx-auto">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>,
            },
        ],
        Description: "Setup Your System",
        BottomTitle: "asdasdasddas.",
    };

    function Tabs_one() {
        return (
            <>
                <div className="font-medium text-base">Profile Settings</div>
                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-1" className="form-label">From</label>
                        <input id="input-wizard-1" type="text" className="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-2" className="form-label">To</label>
                        <input id="input-wizard-2" type="text" className="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-3" className="form-label">Subject</label>
                        <input id="input-wizard-3" type="text" className="form-control" placeholder="Important Meeting" />
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-4" className="form-label">Has the Words</label>
                        <input id="input-wizard-4" type="text" className="form-control" placeholder="Job, Work, Documentation" />
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-5" className="form-label">Doesn't Have</label>
                        <input id="input-wizard-5" type="text" className="form-control" placeholder="Job, Work, Documentation" />
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-6" className="form-label">Size</label>
                        <select id="input-wizard-6" className="form-select">
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                        <button className="btn btn-secondary w-24">Previous</button>
                        <button className="btn btn-primary w-24 ml-2">Next</button>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    <Tabs HeadData={TabsData} BodyData={Tabs_one()} />
                </div>
            </div >

        </>
    )
}


export default Settings;




