import { MdKeyboardArrowDown } from "react-icons/md";
import { LuTextSearch } from "react-icons/lu";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
const Application2 = () => {
    const data1 = [
        {
            icon: "icon",
            time: "2h ago",
            title: "title",
            description: "destription"
        }
    ]
    return (
        <>
            <div className="">
                <div className="flex gap-2 items-center justify-between">
                    <h2 className="text-sm font-semibold">What's New</h2>
                    <div className="flex items-center gap-1">
                        <p className="text-[#4b7600] text-sm">All Notifications</p>
                        <MdKeyboardArrowDown className="text-[#4b7600]" size={15} />
                    </div>
                </div>
                <div className="mt-4 w-full rounded-lg shadow-md p-4 space-y-4">
                    <div className="flex gap-3 items-start">
                        <div>
                            <div className="w-8 h-8 relative rounded-full flex items-center justify-center bg-[#eef7ed]">
                                <LuTextSearch />
                                <span className="text-xs font-semibold absolute bottom-0.5 right-0.5 border border-white bg-red-500 text-white rounded-full p-0.75"></span>
                            </div>
                        </div>
                        <div className="text-xs">
                            <p className="mb-2">Congratulations! You are a <b>winner of a Winter Scholarship program 2024</b>!</p>
                            <span className="text-zinc-700">2h ago</span>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div>
                            <div className="w-8 h-8 relative rounded-full flex items-center justify-center bg-[#eef7ed]">
                                <LuTextSearch />
                                <span className="text-xs font-semibold absolute bottom-0.5 right-0.5 border border-white bg-red-500 text-white rounded-full p-0.75"></span>
                            </div>
                        </div>
                        <div className="text-xs">
                            <p className="mb-2">Your application for<b>MicroweWORKS Summer Scholarship is under review</b></p>
                            <span className="text-zinc-700">2h ago</span>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ffebb9]">
                                <BsExclamationTriangleFill />
                            </div>
                        </div>
                        <div className="text-xs">
                            <p className="mb-2">Congratulations! You are a <b>Re-upload document needed</b>. Error occured in <b>Scholarship program 2024</b> with some documents</p>
                            <span className="text-zinc-700">2h ago</span>
                            <div className="">
                            <button className="px-2 py-1 border border-[#4b7600] bg-[#f6f8f2] text-[#4b7600] text-xs border-1 mt-2 font-medium rounded-md">See Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#dfdefe]">
                                <LuUsersRound />
                            </div>
                        </div>
                        <div className="text-xs">
                            <p className="mb-2">Your applcation for <b>MicroweWORKS Summer Scholarship successfully submitted</b></p>
                            <span className="text-zinc-700">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application2;