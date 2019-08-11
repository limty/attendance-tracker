var React = require("react");

class students extends React.Component {
  render() {
    const list_of_students = this.props.students.map(student => {
      let editUrl = "/students/" + student.id + "/edit";
      let deleteUrl = "/students/" + student.id + "?_method=delete";
      let editAbsentUrl = "";
      let editPresentUrl = "";

      return (
        <tr>
          <td>{student.id}</td>
          <td>{student.stud_name}</td>
          <td>{student.class_name}</td>
          <td>{student.form_teacher}</td>
          <td>{student.presence}</td>
          <td>
            <form action={editUrl}>
              <input type="submit" value="Edit" />
            </form>
          </td>
          <td>
            <form method="POST" action={deleteUrl}>
              <input type="submit" value="Delete" />
            </form>
          </td>
          <td>
            <form action={editAbsentUrl}>
              <input type="submit" value="Absent" />
            </form>
          </td>
          <td>
            <form action={editPresentUrl}>
              <input type="submit" value="Present" />
            </form>
          </td>
        </tr>
      );
    });

    return (
      <html>
        <head>
          <link href="style.css" rel="stylesheet" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <span>
            <a href="/classes">View Classes</a>
          </span>
          <h1>Students</h1>
          <a href="/add-student">
            <button>Add Student</button>
          </a>
          <p />
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>No.</h3>
                </td>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <h3>Class</h3>
                </td>
                <td>
                  <h3>Form Teacher</h3>
                </td>
                <td>
                  <h3>Presence</h3>
                </td>
                <td>
                  <h3>&nbsp;</h3>
                </td>
                <td>
                  <h3>&nbsp;</h3>
                </td>
                <td>
                  <h3>&nbsp;</h3>
                </td>
                <td>
                  <h3>&nbsp;</h3>
                </td>
              </tr>
              {list_of_students}
            </tbody>
          </table>
        </body>
      </html>
    );
  }
}

module.exports = students;
