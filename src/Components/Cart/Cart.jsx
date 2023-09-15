/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <div>
            <h3 className="text-xl font-bold">Course Name</h3>
            {
                selectedCourse.map(course =>(
                    <li key={course.id}>{course.title}</li>
                ))
            }
        </div>
    );
};

export default Cart;