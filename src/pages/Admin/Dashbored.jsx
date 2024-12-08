import AdminHeader from "../../components/Admin/AdminHeader"


function Dashbored(){{
    return(
        <div className="text-black overflow-x-scroll lg:overflow-x-hidden h-full open">
            <AdminHeader PageTitle='Dashbored' />

            <div className=" mt-12 lg:ml-72 grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:flex  lg:justify-between text-center px-5">
                <div className="flex justify-center lg:px-4 items-center gap-3 rounded-xl bg-black text-white py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <h1></h1>
                    <input type="date"  className="bg-transparent outline-0 border-0"/>
                </div>

                <div className="flex rounded-xl lg:px-4 justify-center items-center gap-3 bg-black text-white py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <h1></h1>
                    <input type="date" className="bg-transparent outline-0 border-0" />
                </div>

                <div className="flex flex-col rounded-xl lg:px-4 justify-center items-center gap-3 bg-black text-white py-4">
                    <h1>0</h1>
                    <p1>Avialable Guest Seats</p1>
                </div>

                <div className="flex flex-col rounded-xl lg:px-4 justify-center items-center gap-3 bg-black text-white py-4">
                    <h1>0</h1>
                    <p1>Avaliable Vip Seats</p1>
                </div>
            </div>

            <div className="mt-12 lg:ml-72 text-sm mr-5">
                <div>
                    <table className="">
                        <thead className="">
                            <th>9:00 - 10:00 AM</th>
                            <th>11:00 - 12:00 AM</th>
                            <th>12:00 - 1:00 PM</th>
                            <th>1:00 - 2:00 PM</th>
                            <th>3:00 - 4:00 PM</th>
                            <th>4:00 - 5:00 PM</th>
                            <th>5:00 - 6:00 PM</th>
                            <th>6:00 - 7:00 PM</th>
                            <th>7:00 - 8:00 PM</th>
                            <th>8:00 - 9:00 PM</th>
                            <th>9:00 - 10:30 PM</th>
                        </thead>
                        <tbody className="border border-black">
                            <tr>
                                <td className="border border-black px-2 py-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className="border border-black px-2 py-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        {/* <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p> */}
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className="border border-black px-2 py-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-black px-2 py-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td className="border border-black px-2 py-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>

                                <td className="border border-black px-2">
                                    <div>
                                        <h1>Alice</h1>
                                        <p>2 adults, 4 childen</p>
                                        <p>Table: <h5>Family Table</h5></p>
                                        <p>Site: <h5>Window corner</h5></p>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`flex justify-center mt-8 lg:ml-72`}>
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

            <div className="mt-5 lg:ml-72 text-sm gap-2 mb-32 grid grid-cols-2 mx-10 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-200 rounded-full"></div>
                    <p>pending</p>
                </div>

                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                    <p>Deposited</p>
                </div>

                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-yellow-200 rounded-full"></div>
                    <p> waiting payment...</p>
                </div>

                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-green-200 rounded-full"></div>
                    <p>Finished</p>
                </div>

                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <p>Cancelled</p>
                </div>
            </div>
        </div>
    )
}}

export default Dashbored