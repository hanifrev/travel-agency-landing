import SocialMedia from "./social_media";

const Footer = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 pt-12 pb-12">
            <div>
                <div>Logo</div>
                <div>description</div>
            </div>
            <div>
                <div>Menu Title</div>
                <div className="list-none">
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                </div>
            </div>
            <div>
                <div>Menu Title</div>
                <div className="list-none">
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                </div>
            </div>
            <div>
                <div>Menu Title</div>
                <div className="list-none">
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                    <li><a href="#">lorem ipsum</a></li>
                </div>
            </div>
            <div>
                <SocialMedia fb ig tw playstr appstr />
            </div>
        </div>
    )
}

export default Footer;