import React from 'react'
import { FaInstagram, FaLinkedin, FaGithubSquare, FaTools } from "react-icons/fa";

const Modals = ({show, onClose}) => {
    if (!show) {
        return null
    }

    const iconStyle = { fontSize: "2.2rem" }

    return (
        <div className="flex modalbg">
            <div className="the-modal rounded-xl">
                <div className="pb-6">
                    <FaTools style={iconStyle} />
                </div>
                <div className="text-xl">
                    We Are Still Working On It
                </div>
                <div className="pt-4">
                    Stay Tuned!!!
                </div>
                <div className="pt-4">
                    <button className="bg-gray-400 hover:bg-red-600 px-3 py-1 rounded-md" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modals
