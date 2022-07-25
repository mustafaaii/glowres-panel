
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/


export default function Alert(data: any) {
    return (
        <>
            <div className={`shadow-md fixed bottom-0 right-0 box border bg-danger ${data.data.status === false ? "" : "hidden"} text-white px-5 z-50 mb-10 mr-10`}>
                <div style={{ lineHeight: "28px", fontSize: "14px" }}>{data.data.title}</div>
                <div style={{ lineHeight: "28px", fontSize: "14px" }}>{data.data.html}</div>
            </div>
        </>
    )
}