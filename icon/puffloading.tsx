
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/

import { useState } from "react"
export default function Puffloading(data: any) {

    const [setting] = useState({
        class: data.class || "lucide lucide-alert-circle block mx-auto",
        style: data.style,
    })
    return (
        <>
            <svg
                width="25"
                viewBox="0 0 44 44"
                xmlns="http://www.w3.org/2000/svg"
                stroke="rgb(30, 41, 59)"
                className={`${setting.class} w-6 h-6`}
            >
                <g fill="none" fillRule="evenodd" strokeWidth="4">
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                    </circle>
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                    </circle>
                </g>
            </svg>
        </>
    )
}