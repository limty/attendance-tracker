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
          <div class="class-att-table">
            <h1>List of Classes</h1>

            <ul>
              <li>Name | Form Teacher</li>
            </ul>
            <ul>{list_of_classes}</ul>

            <a href="/add-class">
              <button>Add Class</button>
            </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = classes;
