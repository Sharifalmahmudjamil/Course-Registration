/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */



const Cart = ({selectedCourse,remaining,totalCredit,totalPrice,}) => {
    // console.log(selectedCourse)
    return (
        <div>
            <div>
                <h3 className="font-bold text-lg text-pink-500">Credit Hour Remaining:{remaining}hr</h3>
                <hr />
            </div>
            <h3 className="text-xl font-bold ">Course Name</h3>
            
            
            {

                    
                selectedCourse.map(course =>(
                    <li type="1" key={course.id}>{course.title}</li>
                    
                    
                ))
            
            }
            <div>
                <hr />
                <h3>Total Credit Hour:{totalCredit}</h3>
            </div>
            <div>
                <hr />
                <h3>Total price:{totalPrice}</h3>
            </div>
        </div>
       
    );
};

export default Cart;