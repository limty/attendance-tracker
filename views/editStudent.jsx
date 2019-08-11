var React = require("react");
//var Default = require("./layout/default");

class editStudent extends React.Component {
  render() {
    let item = this.props.students;
    let actionUrl = "/students/" + item.id + "?_method=PUT";
    return (
      <html>
        <head>
          <link href="style.css" rel="stylesheet" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div className="solo-artist">
            <img className="artist-pic" src={item.photo_url} />
            <form method="POST" action={actionUrl}>
              <table className="table table-bordered">
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
