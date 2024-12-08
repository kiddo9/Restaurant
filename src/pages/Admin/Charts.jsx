import AdminHeader from "../../components/Admin/AdminHeader"
import Chart from '../../components/chart'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'

function Charts(){

    return(
        <div className="text-black">
            <AdminHeader PageTitle='Charts/Report' />

            <div className="mt-12 lg:ml-72">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-col px-3 md:px-0 flex md:flex-row gap-7">
                        <div  className="text-center bg-slate-400 px-3 py-3 rounded-xl">
                        <h1  className="text-xl font-bold">2010</h1>  
                        <p className="text-sm">Total Reeservation</p>
                        </div>

                        <div className="text-center bg-slate-400 px-3 py-3 rounded-xl">
                        <h1 className="text-xl font-bold">4987</h1>  
                        <p className="text-sm">Total Customers</p>
                        </div>

                        <div className="text-center bg-slate-400 px-3 py-3 rounded-xl">
                        <h1 className="text-xl font-bold">100</h1>  
                        <p className="text-sm">Total Cancellation</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row px-3 lg:px-0 lg:ml-6 gap-3 mt-5">
                        <div className="flex justify-center lg:px-4 items-center gap-3 rounded-xl bg-gray-300 text-black py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>
                        <h1></h1>
                        <input type="date"  className="bg-transparent outline-0 border-0"/>
                    </div>

                    <div className="flex rounded-xl lg:px-4 justify-center items-center gap-3 bg-gray-300 text-black py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>
                        <h1></h1>
                        <input type="date" className="bg-transparent outline-0 border-0" />
                    </div>
                    </div>


                    <div className="mt-8 mx-4 2xl:ml-20 lg:mx-0 text-center lg:ml-10 bg-black text-white px-4 py-2 rounded-xl">
                        <button>Generate Report</button>
                    </div>
                </div>
                    
                    <Chart />

                <div className="lg:grid lg:grid-cols-2">
                    <div className="bg-blue-700">
                        <PieChart />
                    </div>
                    <div className="shadow shadow-black">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts