import { useState } from "react"
import Link from 'next/link';
import data from '../dummy/navbar.json'

const SideNav = () => {

    const [show, setShow] = useState()
    const [visible, setVisible] = useState(false)

    return (
        <div>
            {data.map((item, key) => {
                return (
                    <div key={key} className="" onClick={() => {
                        setShow(item.key)
                        setVisible(false)
                    }} >
                        Toggle
                        {visible && key === "null" ? (
                            <>
                                <div>
                                    <li className="list-none mx-9 font-semibold" key={idx}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                </div>
                            </>
                        ) : null }
                        {show === key ? (
                            <>
                                <div>
                                    <li className="list-none mx-9 font-semibold" key={idx}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                </div>
                            </>
                        ) : null }
    
                    </div>
                )
            })}
        </div>
    )
}

export default SideNav