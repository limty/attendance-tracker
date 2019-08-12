var React = require("react");
//var Default = require("./layout/default");

class addClass extends React.Component {
  render() {
    let posturl = "/post-class";
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
              <li class="nav-item">
                <a class="nav-link" href="/students">
                  Students
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/classes">
                  Classes
                </a>
              </li>
            </ul>
          </nav>
          <div style={{ textAlign: "center" }}>
            <h1>Add Class</h1>
            <form method="POST" action={posturl}>
              <table
                class="table table-bordered"
                style={{ margin: "0 auto" }}
              >
                <tr>
                  <th scope="row">Class</th>
                  <td>
                    <input type="text" name="class_name" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Form Teacher</th>
                  <td>
                    <input type="text" name="form_teacher" />
                  </td>
                </tr>
              </table>
              <p> </p>
              <input type="submit" value="Add" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = addClass;
