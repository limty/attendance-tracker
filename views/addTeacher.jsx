var React = require("react");
//var Default = require("./layout/default");

class addTeacher extends React.Component {
  render() {
    let posturl = "/post-teacher";
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div style={{ textAlign: "center" }}>
            <h1>Add Teacher</h1>
            <form method="POST" action={posturl}>
              <table
                className="table table-bordered"
                style={{ margin: "0 auto" }}
              >
                <tr>
                  <th scope="row">ID</th>
                  <td>
                    <input type="text" name="id" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>
                    <input type="text" name="name" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Department</th>
                  <td>
                    <input type="text" name="department" />
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

module.exports = addTeacher;
