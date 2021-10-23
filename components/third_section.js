import Destination_Card from "./destination_card";

const Third_Section = () => {
    return (
        <div className="flex flex-col pt-12 pb-12">
            <div className="flex flex-col mx-auto">
                <div className="mx-auto pb-3 text-lg">top selling</div>
                <div className="mx-auto pb-16 text-3xl sm:text-4xl md:text-5xl text-bold">Top Destinations</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <Destination_Card />
            </div> 
        </div>
    )
}

export default Third_Section;