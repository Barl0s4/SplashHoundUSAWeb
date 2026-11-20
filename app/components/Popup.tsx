"use client";

import {useState} from "react";
import Link from "next/link";
import "../styles/popup.css";

export default function Popup() {
    const [isOpen, setIsOpen] = useState(true);
    if (!isOpen) return null;

    return (
        <div className="popup">
        <button
            onClick={() => setIsOpen(false)}
            className="closeBtn"
            aria-label="Close pop-up"
        >
            &times;
        </button>
            <Link href="/visit-us" className="popupLink">
                <h4>Thanksgiving Hours</h4>
                <p>Click here to view →</p>
            </Link>
        </div>
    );
}