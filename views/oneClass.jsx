var React = require("react");

class oneClass extends React.Component {
  render() {
       const list_of_students = this.props.students.map(student => {
         return (
           <li>
           {student.id} | {student.stud_name} | {student.class_name} Edit Delete
           </li>
         );
       });

       return (
         <div>
           <span>
             <a href="/classes">View Classes</a>
           </span>
           <h1>Present Students</h1>

           <ul>
             <li>No. | Name | Class</li>
           </ul>
           <ul>{list_of_students} </ul>

           <a href="/add-student">Add Student</a>
         </div>
       );
  }
}

module.exports = oneClass;
