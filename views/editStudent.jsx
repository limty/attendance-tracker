var React = require("react");
var Default = require("./layout/default");

class editStudent extends React.Component {
  render() {
    let item = this.props.students;
    let actionUrl = "/artist/" + item.id + "?_method=PUT";
    return (
      <Default
        title={this.props.title}
        cookieLogin={this.props.cookieLogin}
      >
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
      </Default>
    );
  }
}

module.exports = editStudent;
