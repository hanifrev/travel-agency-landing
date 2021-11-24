import { useState } from "react"
import Link from 'next/link';
import data from '../dummy/navbar_mobile.json'

const SideNav = () => {

    const [open, setOpen] = useState()
    const [visible, setVisible] = useState(true)

    return (
        <div>
            {data.map((item, key) => {
                return (
                    <div key={key} className="pane" onClick={()=> {
                        setOpen(item.key);
                        setVisible(false)
                    }} >
                        <div className="pane-item">=</div>
                        {visible && key === "null" ? (
                            <>
                                <Link href={item.link} className="pane-item">{item.title}</Link>
                                <Link href={item.link2} className="pane-item">{item.title2}</Link>
                                <Link href={item.link3} className="pane-item">{item.title3}</Link>
                                <Link href={item.link4} className="pane-item">{item.title4}</Link>
                                <Link href={item.link5} className="pane-item">{item.title5}</Link>
                            </>
                        ) : null}
                        {open === key ? (
                            <>
                                <Link href={item.link} className="pane-item">{item.title}</Link>
                                 <Link href={item.link2} className="pane-item">{item.title2}</Link>
                                <Link href={item.link3} className="pane-item">{item.title3}</Link>
                                <Link href={item.link4} className="pane-item">{item.title4}</Link>
                                <Link href={item.link5} className="pane-item">{item.title5}</Link>
                            </>
                        ) : null }

                    </div>
                )
            })}
        </div>
    )
}

export default SideNav