const Welcome = () => {
    return (
            <>
            <div className="mt-[72px] bg-[#edf1e5] py-4 px-4 sm:px-6 md:px-8 lg:px-16 text-black">
                <div className="flex justify-between items-center gap-3 flex-wrap">
                    <div className="leading-wide">
                        <h1 className="font-semibold text-zinc-900 text-xl md:text-2xl lg:text-2xl">Welcome, Barbara!</h1>
                        <p className="font-lighter text-zinc-900 text-sm">Check all updates about application here</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button className="px-3 py-2 border border-[#4b7600] bg-[#f6f8f2] text-[#4b7600] text-sm border-1 rounded-md">Fill Supplement</button>
                        <button className="px-3 py-2 border border-[#4b7600] text-[#f6f8f2] bg-[#4b7600] text-sm border-1 rounded-md">Add Application</button>
                    </div>
                </div>
            </div>
            
            </>
        )
}

export default Welcome;