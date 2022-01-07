/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Link from 'next/link';
import data from '../dummy/navbar.json'
import Foobar from './nav-mobile/Foobar';
import { FaAlignJustify } from "react-icons/fa";
import Navtoogle from './navtoogle';

const Navbar = ({ uselogo, logosrc, logoClass }) => {
    const [show, setShow] = useState(false)
    
    // console.log(data)
    return (
        <div className="flex flex-row justify-between pt-8 md:pt-12">
            <div className="flex">
                <a className="" href="/">
                    {uselogo ? (
                        <img src={logosrc} alt="logo" className={logoClass} />
                    ) : (
                        <p>Title</p>
                    )}
                </a>
            </div>
            <div className="hidden md:flex flex-row ">
                {/* use this method if u want to use separate json cms */}
                {/* disable/comment if u not use it */}
                {data.map((item, idx) => (
                    <li className="list-none mx-9 font-semibold" key={idx}>
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    </li>
                ))}

                {/* manual */}
                {/* <Link href="https://google.com">Menu 1</Link>
                <Link href="https://google.com">Menu 2</Link>
                <Link href="https://google.com">Menu 3</Link> */}
            </div>
            {/* burger menu (mobile) */}
            <div className="flex items-center md:hidden ">
                {/* <Foobar /> */}
                <button onClick={() => setShow(!show)}><FaAlignJustify /></button>
                {show && <Navtoogle onClose={()=> setShow(!show)} />}
            </div>
        </div>
    )
}

export default Navbar