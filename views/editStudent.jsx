var React = require("react");
//var Default = require("./layout/default");

class editStudent extends React.Component {
  render() {
    let item = this.props.students;
    let actionUrl = "/students/" + item.id + "?_method=PUT";
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
          <div class="class-att-table" style={{ textAlign: "center" }}>
            <h1>Edit Student</h1>
            <form method="POST" action={actionUrl}>
              <table
                class="table table-bordered"
                style={{ margin: "0 auto" }}
              >
                <tr>
                  <th scope="row">Name</th>
                  <td>
                    <input
                      type="text"
                      name="stud_name"
                      value={item.stud_name}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Class</th>
                  <td>
                    <input
                      type="text"
                      name="class_name"
                      value={item.class_name}
                    />
                  </td>
                </tr>
              </table>
              <p />
              <input
                type="submit"
                value="Submit"
                style={{ display: "block", margin: "0 auto" }}
              />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = editStudent;
