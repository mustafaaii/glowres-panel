
/* Element Connect Database Info
/* Element Name : Connect Database
/* Element Description : Connect Database
/* Element Version : 0.1
*/

//NEXT IMPORT
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
//ICON IMPORT
import Connect from "../../../icon/connect";
import Disconnet from "../../../icon/disconnect";
import Eye from "../../../icon/eye";
import Eyeoff from "../../../icon/eyeoff";
import Infocircle from "../../../icon/infocircle";
import Puffloading from "../../../icon/puffloading";


export default function ConnectDatabase()
{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success text-white mr-2 ml-2 rounded-none',
            cancelButton: 'btn btn-danger text-white mr-2 ml-2 rounded-none'
        },
        buttonsStyling: false
    })

    const [showhide, setshowhide] = useState(0)
    const [passtext, setpasstext] = useState("password")
    const ShowHideFunc = (event: any) => {

        if (parseInt(event.currentTarget.value) === 0) {

            setshowhide(1)
            setpasstext("text")
        }
        else {
            setshowhide(0)
            setpasstext("password")
        }
    }

    const [error, seterror] = useState(0)
    const [loader, setloader] = useState(0)
    const [errortext, seterrortext] = useState("")
    const [errorclass, seterrorclass] = useState("")
    const ConnectControl = () => {

        const value = {
            server: (document.getElementById(`server`) as HTMLInputElement).value,
            username: (document.getElementById(`username`) as HTMLInputElement).value,
            password: (document.getElementById(`password`) as HTMLInputElement).value,
            database: (document.getElementById(`database`) as HTMLInputElement).value
        }

        switch (value.server)   { case "": alertcontent({ title: "", html: "1", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value.username) { case "": alertcontent({ title: "", html: "2", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value.database) { case "": alertcontent({ title: "", html: "4", icon: 'error', buttontext: "Okay, I got it !" }); return true; }
        switch (value) { default: return false; }

    }
    const ConnectServer = async (e: any) => {
        e.preventDefault();
        if (ConnectControl() === false) {

            setloader(1);
            const { data } = await axios.post('https://localhost/connect.php', {
                op: "control",
                servername: (document.getElementById(`server`) as HTMLInputElement).value,
                username: (document.getElementById(`username`) as HTMLInputElement).value,
                password: (document.getElementById(`password`) as HTMLInputElement).value,
                database: (document.getElementById(`database`) as HTMLInputElement).value
            })

            if (data.status === false) {
                setTimeout(() => {
                    setloader(0);
                    seterror(1)
                    seterrorclass("danger")
                    seterrortext(data.data)
                }, 2000)
            }
            else {
                setTimeout(() => {
                    seterror(0)
                    seterrorclass("success")
                    seterrortext(data.data)
                    setloader(0);
                }, 2000)
            }
        }
    }
    const ConnectRead = async () => {
        const { data } = await axios.post('https://localhost/connect.php', { op: "read" })
        console.log(data)
        if (data.status === true) {
            (document.getElementById(`server`) as HTMLInputElement).value = data.data.servername;
            (document.getElementById(`username`) as HTMLInputElement).value = data.data.username;
            (document.getElementById(`password`) as HTMLInputElement).value = data.data.password;
            (document.getElementById(`database`) as HTMLInputElement).value = data.data.database;
            (document.getElementById(`selectdatabase`) as HTMLInputElement).value = data.data.database;
            seterror(0)
            seterrorclass("success")
            console.log(data)
        }

    }
    useEffect(() => { ConnectRead(); }, [])


    const alertcontent = (data: any) => {
        swalWithBootstrapButtons.fire({
            title: data.title,
            html: data.html,
            icon: data.icon,
            showCancelButton: false,
            confirmButtonText: data.buttontext,
            reverseButtons: true
        });
    }

    return (
        <>
            <div className="grid grid-cols-12 mt-5">
                <div className="col-span-12">
                    <div className="grid grid-cols-4 mt-5">
                        <div className="col-span-3">
                            <div className={`alert ${errorclass === "danger" ? "alert-danger-soft" : "alert-success-soft"} intro-y  p-2 mx-auto transition-all ease-in-out duration-400 ${error === 0 ? "hidden" : "show"} `} style={{ height: "42px" }}>
                                <div className="flex">
                                    <div className="w-10">
                                        <Infocircle class="lucide lucide-alert-circle float-left block mx-auto mr-2" />
                                    </div>
                                    <div className="w-full">
                                        <div className="mt-1">{errortext}</div>
                                    </div>
                                    <div className="w-10 cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="intro-y text-center float-right">
                                <div className={`alert ${errorclass === "success" ? "alert-success" : "alert-danger"} text-white form-control mt-1 p-2 float-right w-44`}>
                                    <div className="float-left">{errorclass === "danger" ? <Disconnet class="text-white" /> : <Connect class="text-white" />}</div>
                                    <div style={{ marginTop: "3px" }}>Connected Status</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <form onSubmit={ConnectServer} method="post">

                        <div className="grid grid-cols-4 gap-2 gap-y-5 mt-5 mb-5">

                            <div className="col-span-3">
                                <div className="intro-y">
                                    <label htmlFor="vertical-form-2" className="form-label">Server Name</label>
                                    <input id="server" name="server" type="text" className="form-control mt-2 w-54" placeholder="Server Name" />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="intro-y">
                                    <label htmlFor="vertical-form-2" className="form-label">Database</label>
                                    <input id="database" name="database" type="text" className="form-control mt-2 w-54" placeholder="Database" />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="intro-y">
                                    <label htmlFor="vertical-form-2" className="form-label">Username</label>
                                    <input id="username" name="username" type="text" className="form-control mt-2 w-54" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="intro-y">
                                    <label htmlFor="vertical-form-2" className="form-label">Password</label>
                                    <input id="password" name="password" type={passtext} className="form-control mt-2 w-54" placeholder="Password" />
                                    <button type="button" value={showhide} onClick={(event: any) => { ShowHideFunc(event) }} className="float-right cursor-pointer mr-2" style={{ marginTop: "-29px", zIndex: "99999", position: "inherit", color: "#888", width: "20px", height: "20px" }}>
                                        {showhide === 0 ? <Eye class="lucide lucide-eye block" /> : <Eyeoff class="lucide lucide-eye-off block" />}
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-12">
                                <div className="intro-y">
                                    <button className="btn btn-secondary mr-1 mt-1 mb-2 w-44 float-right">
                                        {loader === 1 ? <Puffloading /> : ""}
                                        Connect Database
                                    </button>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}