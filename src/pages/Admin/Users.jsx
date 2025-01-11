import { useEffect, useState } from "react"
import AdminHeader from "../../components/Admin/AdminHeader"
import FormC from "../../components/FormC"
import FormInput from "../../components/FormInput"
import { Field } from "formik"
import useUsers from "../../components/FetchData/users"
import Pagination from "../../components/pagination"
import PreLoader from "../../components/preLoader"
import  * as Yup from 'yup'
import Axios  from "axios"
import Api from "../../components/URL/Api"
import SuccessError from "../../components/SuccessError"
import Loader from "../../components/Loader"
import useStaffs from "../../components/FetchData/staffs"

const staffFormValidation = Yup.object({
    name: Yup.string().required('Please enter full name'),
    email: Yup.string().required('Enter a valid email'),
    mobile: Yup.string().required('ener mobile number'),
    type: Yup.string().required('select account type')
})

function Users(){

    const [user, setuser] = useState(false)
    const [staff, setstaff] = useState(false)
    const [createStaff, setCreateStaff] = useState(false)
    const [guest, setGuest] = useState(true)
    const [refresh, setRefresh] = useState(0)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    function Default() {
        setstaff(true)
    }

    function User(){
        setuser(true)
        setstaff(false)
    }

    function reset(){
        setSuccess(false)
        setRefresh((prev) => prev * 1)
    }

    const initValue = {
        name: '',
        email: '',
        mobile: '',
        type: ''
    }

    const handleSubmission = async(values, {resetForm}) => {
        setLoading(true)
        const registerStaff = await Axios.post(`${Api}/staffregistration`, values)
        try {
            const response = registerStaff.data

            if(response.success == true){
                setSuccess(true)
                setMessage(response.message)
                setstaff(true)
                setCreateStaff(false)
            }else{
                setError(true)
                setMessage(response.message)
            }
        } catch (error) {
            console.log(error);
            setError(true)
            setMessage(registerStaff.data.message)
        }finally{
            setLoading(false)
            resetForm()
        }
    }

    const {users, preLoader} = useUsers(refresh)
    const {staffs, preLoad} = useStaffs(refresh)


    //pagination setup
    const [guestData, setGuestData] = useState([])
    const [staffData, setStafftData] = useState([])
    const dataPerPage = 4

    useEffect(() => {
        if(users.length > 0){
            setGuestData(users.slice(0, dataPerPage))
        }

        if(staffs.length > 0){
            setStafftData(staffs.slice(0, dataPerPage))
        }
    }, [users, staffs])


    return(
        <div className="text-black">

            <AdminHeader PageTitle='User Management' />

            <div className="mt-8 lg:ml-72">
                <div className="text-4xl flex justify-around">
                    <button className={`${staff == true ? '' : 'border-b-2 border-b-[#EA6D27] w-52'}`} onClick={User}>Users</button>
                    <button className={`${staff == true ? 'border-b-2 border-b-[#EA6D27] w-52' : ''}`} onClick={Default}>Staffs</button>
                </div>
                <div className="w-96 bg-gray-300 mx-auto md:mx-auto flex mt-10 py-3 px-2 rounded-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="Filter user by Search" className="w-96 pl-3 py-1 bg-transparent border-0 outline-0" />
                </div>

                { staff != true && (
                    <div className="flex justify-center my-4">
                        <ul className="flex gap-7 items-center">
                            <li className={`${guest == true ? "py-1 px-2 cursor-pointer w-24 rounded-lg text-center bg-black text-white" : ''} cursor-pointer`} onClick={() => setGuest(true)}>Guests</li>
                            <li className={`${guest == false ? 'py-1 px-2 cursor-pointer w-24 rounded-lg text-center bg-black text-white': ''} cursor-pointer`} onClick={() => setGuest(false)}>Members</li>
                        </ul>
                    </div>
                )}
                

                <div className={`h-[30rem] ${staff == true ? 'hidden' : user == true ? 'block' : ''} mt-5 overflow-x-scroll md:overflow-x-hidden`}>
                    
                        {guest == true ? (
                            <table className="md:w-full w-[300%] text-center">
                           <thead>
                            <th>CreatedAt</th>
                            <th>Email</th>
                            <th>guestID</th>
                        </thead>
                        <tbody className="">
                            {
                                guestData.map((guestUser) => (
                                    <tr key={guestUser.id} className="h-10 py-5">
                                
                                
                                        <td>{guestUser.updatedAt}</td>
                                        <td>{guestUser.guestemail}</td>
                                        <td>generated</td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </td>
                               
                               
                                    </tr>
                                ))
                            }
                            
                        </tbody> 
                        {preLoader && (
                            <PreLoader />
                        )}
                        </table>
                        
                        ): (
                            <table className="md:w-full w-[300%] text-center">
                                <thead>
                                    <th>createdAt</th>
                                    <th>username</th>
                                    <th>Email</th>
                                    <th>membership token</th>
                                </thead>
                                <tbody>
                                    <tr className="h-10 py-5">
                                        
                                        
                                        <td>02.03.2021</td>
                                        <td>username</td>
                                        <td>hazlywislon@gmail.com</td>
                                        <td>generated</td>
                                        
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </td>
                                
                                
                                    </tr>
                                </tbody>
                            </table>
                        )}
                        
                    
                </div>

                <div className={`${staff == true ? 'hidden' : 'block'}`}>
                       {guest == true ? (
                        <Pagination data={users} itemsPerPage={dataPerPage} onPageChange={(pageData) => setGuestData(pageData)} />
                       ): (
                        // <Pagination />
                        ''
                       )}
                    </div>

                <div className={`${staff == true ? 'block h-[30rem]' : 'hidden'} mt-5 overflow-x-scroll md:overflow-x-hidden`}>
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
                                {staffData.map((staff) => (
                                    <tr key={staff.id} className="h-10 py-5">
                                        <td>{staff.updatedAt}</td>
                                        <td>{staff.name}</td>
                                        <td>{staff.mobile}</td>
                                        <td>{staff.email}</td>
                                        <td>{staff.type}</td>
                                        <td>{staff.password == null ? "password not set": "password set"}</td>
                                       
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
                                ))}
                                
                            </tbody>
                        </table>

                        {preLoad && (
                            <PreLoader />
                        )}
                </div>

                <div className={`${staff !== true ? 'hidden' : 'float-start'}`}>
                        <Pagination data={staffs}  itemsPerPage={dataPerPage} onPageChange={(pageData) => setStafftData(pageData)}/>
                    </div>

               <div className={`${staff == true ? 'block text-white mb-4 float-right mr-6' : 'hidden'}`}>
                    <button className="bg-black py-3 rounded-xl px-4" onClick={() => setCreateStaff(true)}>Create employee</button>
                </div> 

                <div className={`${createStaff == true ? "block" : "hidden"}`}>
                    <div className="fixed inset-0 z-[100000] bg-[#000000c6]"></div>
                    <div className="fixed right-0 bottom-0 top-0 left-0 md:left-72 xl:left-96 z-[10000000] bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 bg-red-500 text-white my-2 mx-2 rounded-xl cursor-pointer" onClick={() => setCreateStaff(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                        
                            <FormC DefualtValue={initValue}  FormSchema={staffFormValidation} Submission={handleSubmission} Style={`mt-32 mx-3 sm:mx-10 md:mx-28 lg:mx-44 xl:mx-56 2xl:mx-64` }>
                                 <FormInput Title='full Name' Type='text' ErrorStyle='text-red-500' FieldName='name' Component='p' ContainerStyle='text-black flex flex-col mt-3' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                                 <FormInput Title='Email' Type='email' ErrorStyle='text-red-500' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col mt-3' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                                 <FormInput Title='mobile' Type='number' ErrorStyle='text-red-500' FieldName='mobile' Component='p' ContainerStyle='text-black flex flex-col mt-3' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                                 <Field
                                    as="select"
                                    name="type"
                                    id=""
                                    className="bg-white outline-none border border-black py-3 mt-4 rounded-2xl w-full"
                                >
                                    <option value="" disabled>Select a table type</option>
                                    <option value="admin">Admin</option>
                                    <option value="staff">Staff</option>
                                </Field> 

                                <button type="submit" className=" text-center py-2 px-2 bg-black text-white rounded-xl w-full mt-3">create</button>
                            </FormC>
                        
                    </div>
                </div>
            </div>
           

            {
                success && (
                <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={reset} />
                )
            }

            {
                error && (
                    <SuccessError Image='https://media.lordicon.com/icons/wired/flat/38-error-cross-simple.gif' style='bg-white' message={message} click={() => setError(false)} />
                )
            }
            {loading && (
                <Loader />
            )}
           
        </div>
    )
}

export default Users