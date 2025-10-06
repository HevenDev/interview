import Application1 from "./Application1";
import Application2 from "./Application2";

const Application = () => {
    return (
        <>
            <div className="py-5 py-4 px-4 sm:px-6 md:px-8 lg:px-16 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 h-[50vh]">
                    <div className="col-span-2">
                        <Application1 />
                    </div>
                    <div className="">
                        <Application2 />
                    </div>
                </div>
            </div></>
    )
}

export default Application;