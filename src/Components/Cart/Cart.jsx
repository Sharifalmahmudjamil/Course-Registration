/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({selectedCourse,remaining,totalCredit,totalPrice}) => {
    // console.log(selectedCourse)
    return (
        <div>
            <div>
                <h3>Credit Hour Remaining:{remaining}</h3>
            </div>
            <h3 className="text-xl font-bold">Course Name</h3>
            {
                selectedCourse.map(course =>(
                    <ol className="list-decimal list-inside">
                        <li key={course.id}>{course.title}</li>
                    </ol>
                    
                ))
            }
            <div>
                <h3>Total Credit Hour:{totalCredit}</h3>
            </div>
            <div>
                <h3>Total price:{totalPrice}</h3>
            </div>
        </div>
       
    );
};

export default Cart;