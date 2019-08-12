var React = require("react");

class students extends React.Component {
  render() {
    const list_of_students = this.props.students.map(student => {
      let editUrl = "/students/" + student.id + "/edit";
      let deleteUrl = "/students/" + student.id + "?_method=delete";
      let editAbsentUrl = "/students/" + student.id + "/absent?_method=PUT";
      let editPresentUrl = "/students/" + student.id + "/present?_method=PUT";

      return (
        <tr>
          <td>{student.id}</td>
          <td>{student.stud_name}</td>
          <td>{student.class_name}</td>
          <td>{student.form_teacher}</td>
          <td>{student.presence}</td>
          <td>
            <div class="px-3 row">
              <form action={editUrl}>
                <input type="submit" value="Edit" />
              </form>

              <form method="POST" action={deleteUrl}>
                <input type="submit" value="Delete" />
              </form>

              <form method="POST" action={editAbsentUrl}>
                <input type="submit" value="Absent" />
              </form>

              <form method="POST" action={editPresentUrl}>
                <input type="submit" value="Present" />
              </form>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
          <link href="style.css" rel="stylesheet" />
        </head>
        <body>
          <nav class="navbar navbar-expand-sm bg-success navbar-dark">
            <a class="navbar-brand" href="/">
              Class Attendance
            </a>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/students">
                  Students
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/classes">
                  Classes
                </a>
              </li>
            </ul>
          </nav>
          <div class="class-att-table">
            <h1>Students</h1>
            <a href="/add-student">
              <button>Add Student</button>
            </a>
            <p />

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Form Teacher</th>
                  <th>Presence</th>
                  <th>Action</th>
                </tr>
                {list_of_students}
              </tbody>
            </table>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = students;
