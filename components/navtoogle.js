import React from 'react'
import Link from 'next/link';
import data from '../dummy/navbar.json'

const Navtoogle = ({onClose}) => {
    return (
        <div className="list-none toogle font-bold" style={{ fontFamily: ['Ubuntu', 'sans-serif'], }}>
                {data.map((x, id) => {
                    return (
                        <li className="mx-auto pb-4" key={id}>
                            <Link href={x.link}>
                                {x.title}
                            </Link>
                        </li>
                    )
                })}
                <button onClick={onClose} className="border px-2 py-1 rounded-md bg-slate-800 active:bg-red-500">C L O S E</button>
            </div>
    )
}

export default Navtoogle
