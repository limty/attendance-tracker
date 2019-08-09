var React = require("react");

class classes extends React.Component {
  render() {
       const list_of_classes = this.props.classes.map(oneClass => {
         return (
           <li>
             {oneClass.class_name} | {oneClass.form_teacher}
           </li>
         );
       });

       return (
         <div>
           <span>
             <a href="/students">View Students</a>
           </span>
           <h1>List of Classes</h1>

           <ul>
             <li>Name | Form Teacher</li>
           </ul>
           <ul>{list_of_classes}</ul>

           <a href="/add-class">Add Class</a>
         </div>
       );
  }
}

module.exports = classes;
