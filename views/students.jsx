var React = require("react");

class students extends React.Component {
  render() {
       const list_of_students = this.props.students.map(student => {
        let editUrl = "/student/" + student.id + "/edit";
        let deleteUrl = "/student/" + student.id + "?_method=delete";
         return (
           <li>
             {student.id} | {student.stud_name} | {student.class_name}
             <form action={editUrl}>
               <input type="submit" value="Edit" />
             </form>
             <form method="POST" action={deleteUrl}>
               <input type="submit" value="Delete" />
             </form>
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

module.exports = students;
