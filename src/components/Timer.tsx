export default function Timer() {
    return (
        <div className="flex justify-center items-center ">
            <input type="number" min="0" max="23" step="1" placeholder="00" className="w-16 h-16 bg-[#322F40] text-white text-[32px] text-center font-normal flex justify-center items-center rounded-lg leading-none" x-text="hours" />
            <div className="text-xs text-[#4E4964] mx-1">h</div>
           
            <div className="text-[32px] mx-3 text-white">:</div>
            
            <input type="number" min="0" max="59" step="1" placeholder="00" className="w-16 h-16 bg-[#322F40] text-white text-[32px] text-center font-normal flex justify-center items-center rounded-lg leading-none" x-text="minutes" />
            <div className="text-xs text-[#4E4964] mx-1">m</div>
        </div>
    )
}