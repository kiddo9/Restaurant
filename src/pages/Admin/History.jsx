import AdminHeader from "../../components/Admin/AdminHeader"

function History(){
    return(
        <div className="text-black">
            <AdminHeader PageTitle='History' />

            <div className="mt-12 lg:ml-72">
                <div className="flex flex-col items-center md:flex-row md:px-2 md:flex-wrap gap-7">
                    <div className="flex gap-5 items-center">
                        <label htmlFor="">phone number:</label>
                        <input type="text" className="border border-black bg-transparent w-56 py-1 rounded-xl" />
                    </div>

                    <div className="flex gap-5 items-center">
                        <label htmlFor="">full Name:</label>
                        <input type="text" className="border border-black bg-transparent w-56 py-1 rounded-xl"  />
                    </div>

                    <div className="flex gap-5 justify-center items-center">
                        <label htmlFor="">Email:</label>
                        <input type="text" className="border border-black bg-transparent w-56 py-1 rounded-xl"  />
                    </div>

                    <div className="flex items-center gap-5 w-96 justify-center md:w-64">
                        <label htmlFor="">from:</label>
                        <div className="flex justify-center lg:px-4 items-center gap-3 rounded-xl bg-black text-white py-3 w-52">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>
                            <h1></h1>
                            <input type="date"  className="bg-transparent outline-0 border-0"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 w-96 md:w-64 justify-center">
                        <label htmlFor="">to:</label>
                        <div className="flex justify-center lg:px-2 w-52  items-center gap-3 rounded-xl bg-black text-white py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>
                            <h1></h1>
                            <input type="date"  className="bg-transparent outline-0 border-0"/>
                        </div>
                    </div>

                    <button className="bg-gray-500 w-96 lg:w-60 py-2 text-white rounded-xl">View</button>
                </div>

                <div className="overflow-x-scroll md:overflow-x-hidden">
               
                    <div className="mt-10 flex w-[300%] md:w-[98%] justify-between mr-7 ">
                        <button className="border-b-2 w-24 border-b-[#EA6D27]">Pending</button>
                        <button>Deposited</button>
                        <button>Waiting payment</button>
                        <button>Finished</button>
                        <button>Cancelled</button>
                    </div>

                </div>
                <div className="mt-5 overflow-x-scroll h-[30rem] md:overflow-x-hidden">
                    <table className="md:w-full w-[300%] text-center">
                        <thead>
                            <th>Date</th>
                            <th>Time</th>
                            <th>No of ppl</th>
                            <th>Full name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Table</th>
                            <th>Event</th>
                        </thead>
                        <tbody className="">
                            <tr className="py-4">
                                <td className="py-4">02.03.2021</td>
                                <td>9:00 - 10:00 Am</td>
                                <td>2</td>
                                <td>Hazly wislon</td>
                                <td>0901235674</td>
                                <td>hazlywislon@gmail.com</td>
                                <td>Couples</td>
                                <td>Birthday</td>
                            </tr>

                            <tr>
                                <td className="py-4">02.03.2021</td>
                                <td>9:00 - 10:00 Am</td>
                                <td>2</td>
                                <td>Hazly wislon</td>
                                <td>0901235674</td>
                                <td>hazlywislon@gmail.com</td>
                                <td>Couples</td>
                                <td>Birthday</td>
                            </tr>

                            <tr>
                                <td className="py-4">02.03.2021</td>
                                <td>9:00 - 10:00 Am</td>
                                <td>2</td>
                                <td>Hazly wislon</td>
                                <td>0901235674</td>
                                <td>hazlywislon@gmail.com</td>
                                <td>Couples</td>
                                <td>Birthday</td>
                            </tr>

                            <tr>
                                <td className="py-4">02.03.2021</td>
                                <td>9:00 - 10:00 Am</td>
                                <td>2</td>
                                <td>Hazly wislon</td>
                                <td>0901235674</td>
                                <td>hazlywislon@gmail.com</td>
                                <td>Couples</td>
                                <td>Birthday</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={`flex justify-center`}>
                        <ul className="flex gap-4 mb-3">
                            <li className="border px-1 py-1 rounded-lg text-center bg-black text-white border-black w-7">1</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">2</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">3</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">4</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">5</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">6</li>
                            <li className="border px-1 py-1 rounded-lg text-center border-black w-7">7</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default History