import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="my-20">
            <p className="text-center text-sm text-slate-500">
                Copyright ©  Trung. All rights reserved.
            </p>
            <p className="text-center text-xs text-slate-500 mt-1">
                Made by <Link
                    to={'/GabiSpa'}
                    className="hover:underline">
                    Trung
                </Link>
            </p>
        </footer>
    )
}
