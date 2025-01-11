//import the necessary components and others


import { useEffect, useRef, useState } from "react"
import AdminHeader from "../../components/Admin/AdminHeader"
import FormC from "../../components/FormC";
import FormInput from "../../components/FormInput"
import * as Yup  from 'yup'
import { ErrorMessage, Field } from "formik";
import FormFile from "../../components/FormFile";
import  Axios  from "axios";
import Api from "../../components/URL/Api";
import SuccessError from "../../components/SuccessError";
import Loader from "../../components/Loader";
import useDishes from "../../components/FetchData/Dishes";
import Comfirmation from "../../components/Comfirmation";
import Preview from "../../components/Admin/Preview";
import PreLoader from "../../components/preLoader";
import useTables from "../../components/FetchData/tables";
import Pagination from "../../components/pagination";



// menu form validation
const formDishValidation = Yup.object({
    dishName: Yup.string().required('dish name is missing'),
    dishPrice: Yup.string().required('dish price is missing'),
    dishImage: Yup.mixed().required('add an image'),
    Dishdescription: Yup.string().required("please include a description")
})



// Table form validation
const formTableValidation = Yup.object({
    tableName: Yup.string().required('Table name is missing'),
    tableLocation: Yup.string().required('Table location is missing'),
    tableImage: Yup.mixed().required('add an image'),
    tableNumber: Yup.string().required("add number"),
    tableType: Yup.string().required("please include the table")
})


// main function 
function Menu(){
    

    //State management
    const [openTable, setOpenTable] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(false)
    const [openMenuForm, setOpenMenuForm] = useState(false)
    const [openTableForm, setOpenTableForm] = useState(false)
    const [preview, setPreview] = useState(false)
    const [confirmTermination, setConfirmTermination] = useState(false)
    const [toggle, setToggle] = useState(false);
    const [IMG, setImg] = useState(null)
    const [IMGT, setImgT] = useState(null)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)
    const [resfreshData, setResfreshData] = useState(0)
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([])
    const [editDish, setEditDish] = useState(false)
    const [edittable, setEditTable] = useState(false)
    const [dishDeleteComfirmation, setDishDeleteComfirmation] = useState(false)
    const [tableDeleteComfirmation, setTableDeleteComfirmation] = useState(false)
    const [searchTerms, setSearchTerms] = useState("")
    const [searchTermsT, setSearchTermsT] = useState("")
      
      


    const DishImage = useRef(null);
    const tableImage = useRef(null);
    const editDishImage = useRef(null)
    const editTableImage = useRef(null)

    const {tables, preload} = useTables(resfreshData)
    const {dishes, preloader} = useDishes(resfreshData) // custom hook to fetch all dishes
    

    // arrow function to reset and refresh page
    const reset = () => {
        setSuccess(false)
        setResfreshData((prev) => prev + 1)
    }

    
    // menu post initial value
     const dishInitValue = {
        dishName: '',
        dishPrice: '',
        dishImage: '',
        Dishdescription: ''
     }

     //Table post initial values
     const tableInitValue = {
        tableName: '',
        tableLocation: '',
        tableImage: '',
        tableNumber: '',
        tableType: ''
     }



     // custom dish click button to add image
    function ImageMenu(){
        DishImage.current.click()
    }

    // custom table click button to add image
    function TableImage(){
        tableImage.current.click()
    }

    //function to change the image . dish change
    const handleChange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) { 
          const reader = new FileReader();
          reader.onload = () => {
            setImg(reader.result);
          };
          reader.readAsDataURL(file);
        }

        return file
    };
    

      //function to change the image .Table change
    function handleTChange(event){
        const file = event.target.files;

        if(file.length > 0){
            const Files = file[0]
            const fileUrl = URL.createObjectURL(Files)
            setImgT(fileUrl)
        }

        return file[0]
    }

    //function to open dish form
    function Dish(){
        setOpenSubmenu(true)
        setOpenMenuForm(true)
        setToggle(!toggle)
        setOpenTableForm(false)
        setEditDish(false)
        setEditTable(false)
    }

    //function to open table form
    function Table(){
        setOpenSubmenu(true)
        setOpenTableForm(true)
        setToggle(!toggle)
        setOpenMenuForm(false)
        setEditDish(false)
        setEditTable(false)
    }



    // handle dish form submission
    async function handleDishSubmission(value, {resetForm}){
        setLoading(true)
        try {
            const Request = await Axios.post(`${Api}/dishes`, value, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            });
            const Response = Request.data

            if(Response.Success == true){
                resetForm();
                setImg(null)
                setLoading(false)
                setOpenSubmenu(false)
                setSuccess(true)
                setMessage(Response.message)
            }else if(Response.Success == false){
                setLoading(false)
                setError(Response.message)
            }else{
                setLoading(false)
                setError(Response.message)
            }
            
            console.log(Response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    //comfirmation function
   function decline(){
    setConfirmTermination(false)
    setDishDeleteComfirmation(false)
    setTableDeleteComfirmation(false)
    sessionStorage.clear()
   }

   function accept(id){
    setConfirmTermination(false)
    setDishDeleteComfirmation(false)
    Terminate(id)
    sessionStorage.clear()
   }

   function acceptT(id){
    setConfirmTermination(false)
    setTableDeleteComfirmation(false)
    tableTerminate(id)
    sessionStorage.clear()
   }


    //handle dish deletions
     async function Terminate(id){
        setLoading(true)
      
        const terminateDish = await Axios.delete(`${Api}/delete/dish/${id}`)

        try {
            setLoading(false)
            if(terminateDish.data.success == true){
                setSuccess(true)
                setMessage(terminateDish.data.message)
            }else{
                setError(true)
                setMessage(terminateDish.data.message) 
            }
            
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error);
            setMessage(terminateDish.data.message)
        }
        
    }
    //handle table termination
    async function tableTerminate(id){
        setLoading(true)

        const terminateTable = await Axios.delete(`${Api}/delete/table/${id}`)

        try {
            setLoading(false)
            if(terminateTable.data.success == true){
                setSuccess(true)
                setMessage(terminateTable.data.message)
                setOpenTable(true)
            }else{
                setError(true)
                setMessage(terminateTable.data.message)
            }
        } catch (error) {
            console.log(error);
            setError(true)
            setMessage(terminateTable.data.message)
        }
    }

    //function to get a specific dish
    const getSepecificDish = async(id) =>{
        setLoading(true)
        const getData = await Axios.get(`${Api}/dish/${id}`)

        try {
            setLoading(false)
            setData({...data, id: getData.data.dish.id,
                dishName: getData.data.dish.dishName, 
                dishPrice: getData.data.dish.dishPrice, 
                dishImage: getData.data.dish.dishImage, 
                Dishdescription: getData.data.dish.Dishdescription})
        } catch (error) {
            setError(true)
            setMessage('something went wrong')
        }
    }

    //function to get a specifi table
    const getSpecificTable = async(id) => {
        setLoading(true)

        const getTable = await Axios.get(`${Api}/table/${id}`)
        try {
            setLoading(false)
            setTableData({...tableData, id: getTable.data.table.id,
                tableName: getTable.data.table.tableName,
                tableLocation: getTable.data.table.tableLocation,
                tableType: getTable.data.table.tableType,
                tableNumber: getTable.data.table.tableNumber,
                tableImage: getTable.data.table.tableImage
            })
        } catch (error) {
            setLoading(false)
            console.log(error);
            setError(true)
            setMessage(getTable.data.message)
        }
    }

    //process edit function
    const editMenu = async(event) => {
        setLoading(true)
        event.preventDefault();
        const updateMenu = await Axios.put(`${Api}/update`, data)

        try {
            
            if(updateMenu.data.success == true){
               setLoading(false) 
               setOpenSubmenu(false)
               setData([])
               setSuccess(true)
               setMessage(updateMenu.data.message)
            }else{
                setLoading(false)
                setError(true)
                setMessage(updateMenu.data.message)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(updateMenu.data.message)
        }
    }


    const editTables = async(event) => {
        setLoading(true)
        event.preventDefault();
        const updateTable = await Axios.put(`${Api}/update/table`, tableData)

        try {
            
            if(updateTable.data.success == true){
               setLoading(false) 
               setOpenSubmenu(false)
               setTableData([])
               setSuccess(true)
               setMessage(updateTable.data.message)
            }else{
                setLoading(false)
                setError(true)
                setMessage(updateTable.data.message)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(updateTable.data.message)
        }
    }


    const editTablesImage = async(value) => {
        setLoading(true)
        const updateTable = await Axios.put(`${Api}/update/tableImage/${tableData.id}`, value,
            {
                headers: { 
                    "Content-Type": "multipart/form-data",
                },
            })

        try {
            
            if(updateTable.data.success == true){
               setLoading(false) 
               setOpenSubmenu(false)
               setTableData([])
               setSuccess(true)
               setMessage(updateTable.data.message)
            }else{
                setLoading(false)
                setError(true)
                setMessage(updateTable.data.message)
            }

            setOpenTable(true)

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(updateTable.data.message)
        }
    }



    //edit dish image function
    const editMenuImage = async(value) => {
        setLoading(true);

        // Make the API call
        const updateMenu = await Axios.put(
            `${Api}/update/image/${data.id}`,
            value,
            {
                headers: { // Correct key for headers
                    "Content-Type": "multipart/form-data",
                },
            }
        );
          

        try {
            
            if(updateMenu.data.success == true){
               setLoading(false) 
               setOpenSubmenu(false)
               setData([])
               setSuccess(true)
               setMessage(updateMenu.data.message)
            }else{
                setLoading(false)
                setError(true)
                setMessage(updateMenu.data.message)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(updateMenu.data.message)
        }
    }

    function view(id){
        getSepecificDish(id)
        setPreview(true)
    }

    function edit(id){
        getSepecificDish(id)
        setOpenSubmenu(true)
        setEditDish(true)
        setEditTable(false)
        setOpenTableForm(false)
        setOpenMenuForm(false)
        setOpenTable(false)
    }

    function editTable(id){
        getSpecificTable(id)
        setOpenSubmenu(true)
        setEditTable(true)
        setEditDish(false)
        setOpenTableForm(false)
        setOpenMenuForm(false)
        setOpenTable(true)
    }


    //function to delete dish image from storage and database
    async function deleteImage(id){
        setLoading(true)
        const deleteImageRequest = await Axios.delete(`${Api}/delete/image/${id}`)

        try {
            if(deleteImageRequest.data.success == true){
                setLoading(false)
                setSuccess(true)
                setMessage(deleteImageRequest.data.message)
                getSepecificDish(id)
            }else{
                setLoading(false)
                setError(true)
                setMessage(deleteImageRequest.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(deleteImageRequest.data.message)
        }
    }

    //function to make a delete request to delete table image
    async function deleteTableImage(id){
        setLoading(true)
        const deleteTableRequest = await Axios.delete(`${Api}/delete/image/table/${id}`)

        try {
            if(deleteTableRequest.data.success == true){
                setLoading(false)
                setSuccess(true)
                setMessage(deleteTableRequest.data.message)
                getSpecificTable(id)
                setOpenTable(true)
            }else{
                setLoading(false)
                setError(true)
                setMessage(deleteTableRequest.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
            setMessage(deleteTableRequest.data.message)
        }
    }



    //handle table form submission
   async function handleTableSubmission(value, {resetForm}){

    setLoading(true)
    try {
        const Request = await Axios.post(`${Api}/add/table`, value, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });
        const Response = Request.data

        if(Response.success == true){
            resetForm();
            setImgT(null)
            setLoading(false)
            setOpenSubmenu(false)
            setSuccess(true)
            setMessage(Response.message)
            setOpenTable(true)
        }else{
            setLoading(false)
            setError(Response.message)
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
        
    }

    //pagination set up
    const [currentData, setCurrentData] = useState([]);
    const [currentTable, setCurrentTable] = useState([]);
    
    const itemsPerPage = 10;
    
    useEffect(() => {
      // Update `currentData` if `dishes` changes
      if (Array.isArray(dishes)) {
        setCurrentData(dishes.slice(0, itemsPerPage));
      }
    
      // Update `currentTable` if `tables` changes
      if (Array.isArray(tables)) {
        setCurrentTable(tables.slice(0, itemsPerPage));
      }
    }, [dishes, tables, itemsPerPage]);
    
  

    
    return(
        <div className="text-black overflow-x-hidden">
            {
                confirmTermination && dishDeleteComfirmation && (
                    <Comfirmation Image={'https://imgvisuals.com/cdn/shop/products/animated-warning-gradient-ui-icon-783663.gif?v=1697531930'} message={'are you sure you want to delete this dish'} Decline={decline} Confirm={() => accept(sessionStorage.getItem('dishId'))} />
                )
            }

            {
                tableDeleteComfirmation && confirmTermination && (
                    <Comfirmation Image={'https://imgvisuals.com/cdn/shop/products/animated-warning-gradient-ui-icon-783663.gif?v=1697531930'} message={'are you sure you want to delete table'} Decline={decline} Confirm={() => acceptT(sessionStorage.getItem('tableId'))} />
                )
            }
            
            {
                loading && (
                    <Loader />
                )
            }

            <AdminHeader PageTitle='Menus and Tables' />

            {/* Menu form */}
            {openSubmenu == true ? (
               <div className="fixed inset-0 z-[100000] bg-[#000000c6]"></div> 
            ) : ''}
            
            <div className={`fixed inset-0 bg-white z-[1000000] md:left-72 h-full transition duration-500 ease-out ${openSubmenu == true ? ' translate-x-0' : ' translate-x-[120%] md:translate-x-[100%]'}`}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 bg-red-500 text-white my-2 mx-2 rounded-xl cursor-pointer" onClick={() => {setOpenSubmenu(false); setData([]); setTableData([]); setImg(null); setImgT(null)}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>



                {/* Table form */}
               
               <FormC Style={`${openTableForm == true ? 'block' : 'hidden'} w-96 mx-auto md:-mt-9`} DefualtValue={tableInitValue} FormSchema={formTableValidation} Submission={handleTableSubmission}>
                <FormInput Title='Table name' Type='text' ErrorStyle='text-red-500' FieldName='tableName' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Table location' Type='text' ErrorStyle='text-red-500' FieldName='tableLocation' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Table number' Type='number' ErrorStyle='text-red-500' FieldName='tableNumber' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormFile Title='Table image' InputRef={tableImage} Change={handleTChange} ErrorStyle='text-red-500' FieldName='tableImage' Component='p' ContainerStyle='text-black flex flex-col hidden' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>

                  <Field
                        as="select"
                        name="tableType"
                        id="tableType"
                        className="bg-white outline-none border border-black py-3 mt-4 rounded-2xl w-96"
                    >
                        <option value="" disabled>Select a table type</option>
                        <option value="guest">Guest</option>
                        <option value="vip">VIP</option>
                    </Field>
                    <ErrorMessage name="tableType" component="p" className="text-red-500 mt-1" />

               
                <div className="flex items-center gap-1 mt-2">
 
                 <div className="relative border-2 border-black w-96 h-52">
                     <img src={IMGT} className="h-[12.8rem] w-96" alt="" />
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IMGT != null ? 'hidden' : 'block'} size-6 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`} onClick={TableImage}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg>
                 </div>
 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => setImg(null)}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                 </svg>
 
                </div>
                <ErrorMessage name="tableImage" component={'p'} className="text-red-500" />


                <button type="submit" className="mt-2 text-center py-2 px-2 bg-black text-white rounded-xl w-96">Add Table</button>
                </FormC>


                {/* Menu form */}

                <FormC Style={`${openMenuForm == true ? 'block' : 'hidden'} w-96 mx-auto md:-mt-9`} DefualtValue={dishInitValue} FormSchema={formDishValidation} Submission={handleDishSubmission}>
                <FormInput Title='Dish name' Type='text' ErrorStyle='text-red-500' FieldName='dishName' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Dish price' Type='text' ErrorStyle='text-red-500' FieldName='dishPrice' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormFile Title='Dish image' InputRef={DishImage} Change={handleChange} ErrorStyle='text-red-500' FieldName='dishImage' Component='p' ContainerStyle='text-black flex flex-col hidden' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
               
                <div className="flex items-center gap-1 mt-2">
 
                 <div className="relative border-2 border-black w-96 h-52">
                     <img src={IMG} className="h-[12.8rem] w-96" alt="" />
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IMG != null ? 'hidden' : 'block'} size-6 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`} onClick={ImageMenu}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg>
                 </div>
 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => setImg(null)}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                 </svg>
 
                </div>
                <ErrorMessage name="dishImage" component={'p'} className="text-red-500" />

                <Field as="textarea" name="Dishdescription" id="" cols="41" rows="10" className="bg-white text-black border-2 mt-2 border-black px-2 py-2" placeholder="enter description" />
                <ErrorMessage name="Dishdescription" component={'p'} className="text-red-500" />
 
                <button type="submit" className="mt-2 text-center py-2 px-2 bg-black text-white rounded-xl w-96">Add dish</button>
                </FormC>



                {/* editting forms */}
                    <div>
                        {/* menu editting form */}
                            
                                 <div className={`${editDish == true ? 'flex flex-col' : 'hidden'} w-96 mx-auto md:-mt-9`}>
                                    <form >
                                        <label htmlFor="">dish name</label>
                                        <input type="text" value={data.dishName} onChange={(e) => setData({...data, dishName: e.target.value})} className="border border-black bg-white px-2 py-2 w-96 mb-2" />
                                        <label htmlFor="" className="">dish price</label>
                                        <input type="text" value={data.dishPrice} onChange={(e) => setData({...data, dishPrice: e.target.value})} className="border border-black bg-white px-2 py-2 w-96 mb-2" />
                                        
                                        <label htmlFor="">dish description</label>
                                        <textarea name="" id="" cols="44" rows="11" onChange={(e) => setData({...data, Dishdescription: e.target.value})} className="bg-white border border-black" value={data.Dishdescription}></textarea>

                                        <button onClick={editMenu} className="bg-black py-2 w-96 text-white mt-2">save change</button>

                                    </form>

                                    
                                    {data.dishImage == '' ? (
                                        <FormC DefualtValue={{
                                            dishImage: ''
                                        }} 

                                        FormSchema={Yup.object({
                                            dishImage: Yup.mixed().required('add an image'),
                                        })}
                                        
                                        Submission={editMenuImage}>
                                                   
                                                    <FormFile Title='' InputRef={editDishImage} Change={handleChange} ErrorStyle='text-red-500' FieldName='dishImage' Component='p' ContainerStyle='text-black flex flex-col hidden' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                                                    <div className="flex items-center gap-1 mt-2 mb-4">
            
                                                    <div className="relative border-2 border-black w-96 h-52">
                                                        <img src={IMG} className="h-[12.8rem] w-96" alt="" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IMG != null ? 'hidden' : 'block'} size-6 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`} onClick={() => {
                                                            editDishImage.current.click()
                                                        }}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>

                                                        <button type="submit" className={`${IMG == null ? 'hidden' : 'block'} px-2 py-1 bg-black text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl`}>
                                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => setImg(null)}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                            </div>
                                          
                                          </FormC>
                                        )  : (
                                             <div className="flex items-center gap-3">
                                                <img src={data.dishImage} alt="" className="border border-black bg-white px-2 py-2 w-[22.1rem] mt-4 mb-4 h-48"/>  
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12" onClick={() => deleteImage(data.id)}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </div>
                                        )}     
                                        
                                </div> 
                            

                                <div className={`${edittable == true ? 'flex flex-col' : 'hidden'} w-96 mx-auto md:-mt-9`}>

                                    <form onSubmit={editTables}>
                                    <label htmlFor="">table name</label>
                                    <input type="text" value={tableData.tableName} onChange={(e) => setTableData({...tableData, tableName: e.target.value})} className="border border-black bg-white px-2 py-2 w-96 mb-4" />   
                                    <label htmlFor="">table location</label>                                
                                     <input type="text" value={tableData.tableLocation} onChange={(e) => setTableData({...tableData, tableLocation: e.target.value})} className="border border-black bg-white px-2 py-2 w-96 mb-4" />
                                     <label htmlFor="">table number</label>
                                     <input type="text" value={tableData.tableNumber} onChange={(e) => setTableData({...tableData, tableNumber: e.target.value})} className="border border-black bg-white px-2 py-2 w-96 mb-4" />
                                     

                                     <label htmlFor="">table type</label>
                                     <select
                                        name="tableType"
                                        className="border border-black bg-white px-2 py-2 w-96 mb-4"
                                        onChange={(e) => setTableData({...tableData, tableType: e.target.value})}
                                        >
                                        {tableData.tableType == 'guest' && (
                                            <>
                                            <option value="guest">Guest</option>
                                            <option value="vip">VIP</option>
                                            </>
                                        )}

                                         {tableData.tableType == 'vip'  && (
                                            <>
                                            <option value="vip">VIP</option>
                                            <option value="guest">Guest</option>
                                            </>
                                        )}
                                        </select>

                                        <button type="submit" className="bg-black py-2 w-96 text-white mt-2">update</button>
                                        </form>

                                        <FormC DefualtValue={{
                                            tableImage: ''
                                        }} 
                                        
                                        Submission={editTablesImage}>
                                        {tableData.tableImage == '' && (
                                           
                                             <div className="flex items-center gap-1 mt-2">
                                              <FormFile Title='' InputRef={editTableImage} Change={handleTChange} ErrorStyle='text-red-500' FieldName='tableImage' Component='p' ContainerStyle='text-black flex flex-col hidden' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                                             <div className="relative border-2 border-black w-96 h-52">
                                                 <img src={IMGT} className="h-[12.8rem] w-96" alt="" />
                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IMGT != null ? 'hidden' : 'block'} size-6 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`} onClick={() => editTableImage.current.click()}>
                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                 </svg>

                                                 <button type="submit" className={`${IMGT == null ? 'hidden' : 'block'} px-2 py-1 bg-black text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                                    </svg>
                                                 </button>
                                             </div>
                             
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => setImg(null)}>
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                             </svg>
                             
                                            </div>
                                        )}
                                        
                                    

                                    {tableData.tableImage != '' && (
                                        <div className="flex items-center gap-3">
                                        <img src={tableData.tableImage} alt="" className="border border-black bg-white px-2 py-2 w-[22.1rem] mt-4 mb-4 h-48"/>  
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer" onClick={() => deleteTableImage(tableData.id)}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                    )}
                                   </FormC>
                                 </div>
                    
                    </div>
                
            </div>

            <div className="mt-8 lg:ml-72">

                {
                    !openTable && (
                        <div className="w-96 bg-gray-300 mx-1 md:w-[40rem] md:mx-auto flex mt-10 py-3 px-2 rounded-xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder="Filter dish by Search"  onChange={(e) => setSearchTerms(e.target.value)} className="w-96 pl-3 py-1 bg-transparent border-0 outline-0" />
                        </div>
                    )
                }
                

                {
                    openTable && (
                        <div className="w-96 bg-gray-300 mx-1 md:w-[40rem] md:mx-auto flex mt-10 py-3 px-2 rounded-xl items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder="Filter table by Search" onChange={(e) => setSearchTermsT(e.target.value)} className="w-96 pl-3 py-1 bg-transparent border-0 outline-0" />
                    </div> 
                    )
                }

                <div className={`fixed right-28 w-52 rounded-xl top-14 md:top-20 flex flex-col bg-white shadow-2xl shadow-black ${toggle ? 'translate-x-0  transition ease-out duration-300' : 'translate-x-[200%] transition ease-out duration-300'}`}>
                    <button className="px-2 py-1 bg-black text-white mx-3 my-2 rounded-xl" onClick={Dish}>Add new dish</button>
                    <button className="px-2 py-1 bg-[#EA6D27] text-white mx-3 my-2 rounded-xl" onClick={Table}>Add new table</button>
                </div>

                <div className={`bg-black text-white w-10 h-10 flex justify-center items-center rounded-xl -mt-28 absolute right-10 sm:-mt-12 cursor-pointer ${toggle ? 'rotate-45 bg-red-500 transition ease-out duration-300' : ' transition ease-out duration-300'}`} onClick={() => setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>




                <div className="text-xl mt-12 flex justify-around">
                    <button className={`${openTable != true ? 'border-b-2 border-b-[#EA6D27] w-40' : ''}`} onClick={() => setOpenTable(false)}>Menus</button>
                    <button onClick={() => setOpenTable(true)} className={`${openTable == true ? 'border-b-2 border-b-[#EA6D27] w-40' : ''}`}>Tables</button>
                </div>



            {/* menu table */}
            
            
                <div className={`mt-5 h-[30rem] overflow-x-scroll md:overflow-x-hidden ${openTable == true ? 'hidden' : 'block'}`} id="table">
                    
                    <table className="md:w-full w-[300%] text-center">
                        <thead>
                            <th>CreatedAt</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody className="">
                            {
                                
                        currentData.filter((items) => {
                            return items.dishName.toLowerCase().includes(searchTerms)
                        }).map((dish) => (
                             <tr key={dish.id} className="h-10">
                             <td className="py-5">{dish.updatedAt}</td>
                             <td>{dish.dishName}</td>
                             <td>{dish.dishPrice}</td>
                             <td className="flex justify-center items-center"><img src={dish.dishImage} alt="" className="w-10 h-10" /></td>
                             <td>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer" onClick={() => view(dish.id)}>
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                 </svg>
                             </td>
                             <td>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer" onClick={() => edit(dish.id)}>
                                     <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                 </svg>
                             </td>
                             <td className="cursor-pointer" onClick={() => {sessionStorage.setItem('dishId', dish.id); setDishDeleteComfirmation(true); setConfirmTermination(true)}}>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                 </svg>
                             </td>
                         </tr>
                        ))
                }
                        </tbody>
                    </table>

                    {preloader && (
                        <PreLoader /> 
                     )}
                </div>



                {/* tables table */}

                {openTable == true && (
                    <div className="mt-5 h-[30rem] overflow-x-scroll md:overflow-x-hidden" id="table">
                    <table className="md:w-full w-[300%] text-center">
                        <thead>
                            <th>CreatedAt</th>
                            <th>name</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Type</th>
                            <th>number</th>
                            <th></th>
                            <th></th>
                        </thead>
                        
                        <tbody className="">
                        { 
                        currentTable.filter((items) => {
                            return items.tableName.toLowerCase().includes(searchTermsT)
                        }).map((table, index) => (
                            <tr key={index} className="h-10">
                                <td>{table.createdAt}</td>
                                <td>{table.tableName}</td>
                                <td>{table.tableLocation}</td>
                                <td className="flex justify-center items-center"><img src={table.tableImage} alt="" className="w-10 h-10" /></td>
                                <td>{table.tableType}</td>
                                <td>{table.tableNumber}</td>
                                <td onClick={() => editTable(table.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </td>
                                <td onClick={() => {sessionStorage.setItem('tableId', table.id); setTableDeleteComfirmation(true); setConfirmTermination(true)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>

                    {preload && (
                        <PreLoader /> 
                     )}
                </div>
                )}

                

                {/* pagenation */}

                {!openTable ? (
                    <Pagination data={dishes} itemsPerPage={itemsPerPage} onPageChange={(pageData) => setCurrentData(pageData)} />
                ): (
                    <Pagination data={tables} itemsPerPage={itemsPerPage} onPageChange={(pageData) => setCurrentTable(pageData)} />
                )}
                
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

            {
                preview && data && (
                    <div>
                       <Preview name={data.dishName} price={data.dishPrice} image={data.dishImage} details={data.Dishdescription} action={() => {setPreview(false); setData([])}}/> 
                    </div>
                    
                )
            }
            

        </div>
    )
}

export default Menu   // export the menu function