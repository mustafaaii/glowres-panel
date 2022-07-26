
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { useState } from "react"
export default function Disconnet(data: any) {
    const [setting] = useState({ class: data.class, })
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                icon-name="wifi-off"
                data-lucide="wifi-off"
                className={`lucide lucide-wifi-off block ${setting.class}`}
            >
                <line x1="2" y1="2" x2="22" y2="22"></line>
                <path d="M8.5 16.5a5 5 0 017 0"></path>
                <path d="M2 8.82a15 15 0 014.17-2.65"></path>
                <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"></path>
                <path d="M16.85 11.25a10 10 0 012.22 1.68"></path>
                <path d="M5 13a10 10 0 015.24-2.76"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
        </>
    )
}