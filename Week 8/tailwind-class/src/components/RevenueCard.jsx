export const RevenueCard = ({title, showWarning, orderCount, amount}) => {
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-700">
            {title}
            ?
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
                Rs. {amount}
            </div>
            {orderCount ? <div className=" flex cursor-pointer font-medium">
                <div className="text-blue-500 underline">
                    {orderCount} order(s) 
                </div>
                <div className="fill-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div> : null}
        </div>
    </div>
}