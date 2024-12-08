import { useState } from "react"
import AdminHeader from "../../components/Admin/AdminHeader"

function Users(){

    const [user, setuser] = useState(false)
    const [staff, setstaff] = useState(false)

    function Default() {
        setstaff(true)
    }

    function User(){
        setuser(true)
        setstaff(false)
    }


    return(
        <div className="text-black">

            <AdminHeader PageTitle='User Management' />

            <div className="mt-8 lg:ml-72">
                <div className="text-4xl flex justify-around">
                    <button className={`${staff == true ? '' : 'border-b-2 border-b-[#EA6D27] w-52'}`} onClick={User}>Users</button>
                    <button className={`${staff == true ? 'border-b-2 border-b-[#EA6D27] w-52' : ''}`} onClick={Default}>Staffs</button>
                </div>
                <div className="w-96 bg-gray-300 mx-1 md:mx-auto flex mt-10 py-3 px-2 rounded-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="Filter user by Search" className="w-96 pl-3 py-1 bg-transparent border-0 outline-0" />
                </div>

                <div className={`h-[30rem] ${staff == true ? 'hidden' : user == true ? 'block' : ''} mt-5 overflow-x-scroll md:overflow-x-hidden`}>
                    <table className="md:w-full w-[300%] text-center">
                        <thead>
                            <th>CreatedAt</th>
                            <th>Full name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Account type</th>
                            <th>Status</th>
                        </thead>
                        <tbody className="">
                            <tr className="h-10 py-5">
                                
                                
                                    <td>02.03.2021</td>
                                    <td>Hazly wislon</td>
                                    <td>0901235674</td>
                                    <td>hazlywislon@gmail.com</td>
                                    <td>Guest</td>
                                    <td>Active</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </td>
                               
                               
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={`${staff == true ? 'hidden' : 'flex justify-center'}`}>
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

                <div className={`${staff == true ? 'block h-[30rem]' : 'hidden'}`}>
                    <table className="md:w-full w-[300%] text-center mt-12">
                            <thead>
                                <th>CreatedAt</th>
                                <th>Full name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Account type</th>
                                <th>Status</th>
                            </thead>
                            <tbody className="">
                                <tr className="h-10 py-5">
                                        <td>02.03.2021</td>
                                        <td>Hazly wislon</td>
                                        <td>0901235674</td>
                                        <td>hazlywislon@gmail.com</td>
                                        <td>Staff</td>
                                        <td>Active</td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </td>
                                </tr>
                            </tbody>
                        </table>

                        
                </div>

                <div className={`${staff !== true ? 'hidden' : 'float-start'}`}>
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

               <div className={`${staff == true ? 'block text-white mb-4 float-right mr-6' : 'hidden'}`}>
                    <button className="bg-black py-3 rounded-xl px-4">Create employee</button>
                </div> 
            </div>
           
           
        </div>
    )
}

export default Users