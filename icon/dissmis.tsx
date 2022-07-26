
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { useState } from "react"
export default function Dissmiss(data: any) {
    const [setting] = useState({ class: data.class, })
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="x"
                data-lucide="x"
                className={`lucide lucide-x block ${setting.class}`}
            >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </>
    )
}