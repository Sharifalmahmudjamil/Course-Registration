/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaDollarSign,FaBookOpen} from 'react-icons/fa';



const Header = () => {

        const [allCourse,setAllCourse]=useState([]);
        const [selectedCourse,setSelectedCourse]=useState([]);
        const [remaining,setRemaining]=useState(0);
        const [totalCredit,setTotalCredit]=useState(0);
        const [totalPrice,setTotalPrice]=useState(0);
    


        useEffect(()=>{
            fetch('Course.json')
            .then(res => res.json())
            .then(data=> setAllCourse(data))
        });


        const handleSelectCourse = (course,) =>{
            const isExist=selectedCourse.find((item)=>item.id== course.id);

            let count=course.credit;
            let price=course.price;

            if(isExist){
               return toast('You already select this Course')
            }
            else{
                selectedCourse.forEach((item)=>{
                    count=count + item.credit;
                });
                selectedCourse.forEach((item)=>{
                    price=price+item.price;
                });
                // console.log(Total)
                const totalRemaining= 20-count;
                setTotalCredit(count);
                if(count>20){
                    return toast("You don't have enough credit hour")
                }
                
                setRemaining(totalRemaining);
                setTotalPrice(price);

                setSelectedCourse([...selectedCourse,course]);
            }
                
        };
        // console.log(selectedCourse)


    return (
        <div className="w-full h-full mx-auto bg-[#F3F3F3]">

            
            <div>
            <h3 className='text-4xl text-center font-bold'>Course Registration</h3>
            </div>
            {/* card section */}
            <div className="flex flex-col lg:flex-row mt-14">
                <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-7 ">

              {
                allCourse.map(course =>(
                    <div key={course.id} className="card  h-max bg-base-100 shadow-xl">
            <figure><img className="w-full h-4/5 rounded-xl" src={course.img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{course.title}</h2>
            <p>{course.description}</p>
                    <div className="flex justify-between">
                          
                            <div className="flex gap-2">
                               <h1 className="my-2"> <small><FaDollarSign></FaDollarSign></small></h1> 
                                <p> Price: {course.price}</p>
                            </div>
                            <div className="flex gap-2 ">
                                <h1 className="my-2"> <small><FaBookOpen></FaBookOpen></small></h1>
                                <p>{course.credit}hr</p>
                            </div>
                        </div>
             <div className="card-actions justify-center ">
                    <button onClick={()=>handleSelectCourse(course)} className="btn bg-pink-500 text-white hover:bg-purple-600 w-[300px] h-[40px]">Select</button>
                    <ToastContainer />
                    
                 </div>
                </div>
                </div>
                ))

              }     
                </div>

                <div className="w-[300px] h-[400px] p-3 border-none border-white-600 rounded-xl bg-white mx-8 mt-5 ">
                <div className="courseName ">
                        <Cart selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice} ></Cart>
                </div>
                </div>

                </div>
            </div>
    );
};

export default Header;