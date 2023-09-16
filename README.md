Question 1. Add at least 3 Project features

ANS: 
### Features
1. Browse and Select Courses: Users can browse a list of available courses and select the ones they want to enroll in.Users can click the "Select" button to add a course to their cart.you can see the course selection interface.

2. Credit Hour Tracking: The application keeps track of the total credit hours selected by the user and displays any remaining credit hours.

3. Sweet alert: I have used in Sweet alert. Sweet Alert is used to make an alert box more attractive and easier to design. 

Question 2 . Discuss how you managed the state in your assignment project.

ANS:

At first I am  using  ChatGpt for create a fake data.

It looks like you've provided a React component called Header that appears to be part of a course registration application. This component seems to be responsible for displaying a list of courses and allowing users to select them. Here's a breakdown of the code:

You import necessary React and component-related modules at the beginning of the file.

Inside the Header component, you define several state variables using the useState hook to manage the application's data:

allCourse: This state variable holds an array of all available courses.
selectedCourse: It stores an array of courses that the user has selected.
remaining: This variable represents the remaining credit hours the user can select.
totalCredit: It keeps track of the total credit hours selected.
totalPrice: This variable stores the total price of selected courses.
You use the useEffect hook to fetch course data from a JSON file when the component mounts. The fetched data is stored in the allCourse state variable.
The handleSelectCourse function is called when a user selects a course. It checks whether the course is already in the selectedCourse array, calculates the total credit hours and total price, and updates the state variables accordingly. It also displays toast messages using the react-toastify library to provide feedback to the user.

In the render part of the component, you map over the allCourse array and display each course as a card. Users can click the "Select" button to add a course to their selection.

You render a <Cart> component, passing the selectedCourse, remaining, totalCredit, and totalPrice as props.

Overall, this code seems to be the front-end part of a course registration system, where users can select courses, view their selections, and receive feedback on their choices. The react-toastify library is used for displaying notifications, and icons from the react-icons library are used to represent currency and credit hours.
