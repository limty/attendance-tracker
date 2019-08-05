var React = require("react");

class home extends React.Component {
  render() {
       const list_of_students = this.props.students.map(student => {
         return (
           <li>
             {student.studentname} | class: {student.class} | teacher ID: {student.teachers_id}
           </li>
         );
       });

       return (
         <div>
         <h1>Present Students</h1>
           <ul>{list_of_students}</ul>
        <a href="/check-in">Check-in Student</a>
         </div>
       );
  }
}

module.exports = home;
