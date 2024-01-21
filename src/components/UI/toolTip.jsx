import React from 'react'
import { Tooltip, Button } from "@material-tailwind/react";
export default function Tool_Tipa({ content }) {
    return (
        <Tooltip
            trigger={
                <button className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                    Open Tooltip
                </button>
            }
            content={
                <p className="dark:text-white">
                   {content}
                </p>
            }
        />
    )
}
