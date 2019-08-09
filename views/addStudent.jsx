var React = require("react");
//var Default = require("./layout/default");

class addStudent extends React.Component {
  render() {
    let posturl = "/post-student";
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div style={{ textAlign: "center" }}>
            <h1>Check In Student</h1>
            <form method="POST" action={posturl}>
              <table
                className="table table-bordered"
                style={{ margin: "0 auto" }}
              >
                <tr>
                  <th scope="row">Name</th>
                  <td>
                    <input type="text" name="stud_name" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Class</th>
                  <td>
                    <input type="text" name="class_name" />
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

module.exports = addStudent;
