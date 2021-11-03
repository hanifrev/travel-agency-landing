import React, { useState } from "react"

const Subscribe_Section = () => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submited, ${name}`)
    }

    return (
        <div className="flex flex-col mx-auto my-auto w-full h-96 justify-center subs_bg">
            <div className="mx-auto text-xl md:text-3xl lg:text-4xl font-semibold text-prehead_gray text-center md:w-3/4 pb-8 lg:pb-16 md:-mt-12 lg:mt-0 leading-7 lg:leading-10">
            Subscribe to get information, latest news and other interesting offers about Cobham
            </div>
            <div className="flex flex-col md:flex-row mx-auto max-w-90% md:max-w-full">
                <form onSubmit = {handleSubmit}>
                    <input
                        type="email"
                        className="w-full md:w-96 h-11 md:h-14 lg:h-16 border border-gray-400 pl-5 mb-3 md:mb-0 rounded-md md:mr-5"
                        placeholder="Enter your email..."
                        onChange = {(e) => setName(e.target.value)}
                        value={name}
                    />
                    <button type="submit" className="w-full md:w-40 h-11 md:h-14 lg:h-16 bg-subs_cta hover:bg-yellow-500 active:bg-yellow-800 text-white rounded-md">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe_Section