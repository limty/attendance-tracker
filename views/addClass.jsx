var React = require("react");
//var Default = require("./layout/default");

class addClass extends React.Component {
  render() {
    let posturl = "/post-class";
    return (
      <html>
        <head>
        <link href="style.css" rel="stylesheet"/>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div style={{ textAlign: "center" }}>
            <h1>Add Class</h1>
            <form method="POST" action={posturl}>
              <table
                className="table table-bordered"
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
