import Category_Card from "./category_card";

const Second_Section = () => {
    return (
        <div className="flex flex-col pt-12 pb-12 sec2_bg">
            <div className="flex flex-col mx-auto">
                <div className="mx-auto pb-3 text-lg text-prehead_gray font-semibold">Category</div>
                <div className="mx-auto pb-16 text-3xl sm:text-4xl md:text-5xl font-bold text-center">We Offer Best Service</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <Category_Card />
            </div>
        </div>
    )
}

export default Second_Section;