
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { useState } from "react"
export default function Connect(data: any) {

    const [setting] = useState({
        class: data.class,
    })

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="wifi"
                data-lucide="wifi"
                className={`lucide lucide-wifi block  ${setting.class}`}
            >
                <path d="M5 13a10 10 0 0114 0"></path>
                <path d="M8.5 16.5a5 5 0 017 0"></path>
                <path d="M2 8.82a15 15 0 0120 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
        </>
    )
}