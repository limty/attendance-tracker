var React = require("react");

class teachers extends React.Component {
  render() {
       const list_of_teachers = this.props.teachers.map(teacher => {
         return (
           <li>
             {teacher.id} | {teacher.name} |{" "}
             {teacher.department}
           </li>
         );
       });

       return (
         <div>
           <span>
             <a href="/">View Present Students</a>
           </span>
           <h1>List of Teachers</h1>

           <ul>
             <li>ID | Name | Department</li>
           </ul>
           <ul>{list_of_teachers}</ul>

           <a href="/add-teacher">Add Teacher</a>
         </div>
       );
  }
}

module.exports = teachers;
