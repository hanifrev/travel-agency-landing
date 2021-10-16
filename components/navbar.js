/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import data from '../dummy/navbar.json'

const Navbar = ({ uselogo, logosrc }) => {
    // console.log(data)
    return (
        <div className="flex flex-row justify-between pt-6">
            <div className="flex">
                <a className="" href="">
                    {uselogo ? (
                        <img src={logosrc} alt="logo" />
                    ) : (
                        <p>Title</p>
                    )}
                </a>
            </div>
            <div className="flex flex-row ">
                {/* use this method if u want to use separate json cms */}
                {/* disable/comment if u not use it */}
                {data.map((item, idx) => (
                    <li className="list-none mx-9" key={idx}>
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
        </div>
    )
}

export default Navbar