var React = require("react");

class home extends React.Component {
  render() {
       const list_of_students = this.props.students.map(student => {
         return (
           <li>
             {student.studentname} | {student.department} | {student.stud_class} | {student.teachername}
           </li>
         );
       });

       return (
         <div>
           <span>
             <a href="/teachers">View Teachers</a>
           </span>
           <h1>Present Students</h1>

           <ul>
             <li>Name | Level | Class | Teacher in Charge</li>
           </ul>
           <ul>{list_of_students}</ul>

           <a href="/check-in">Check-in Student</a>
         </div>
       );
  }
}

module.exports = home;
