var React = require("react");
class Default extends React.Component {
  render() {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="/">Tweedr</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-item nav-link" href="/register/new">Register<span class="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="/login/new">Login</a>
                      <a className="nav-item nav-link" href="/user">Your Tweedr</a>
                      <a className="nav-item nav-link" href="#">Logout</a>
                    </div>
                  </div>
                </nav>
                <div>
                  {this.props.children}
                </div>
            </body>
        </html>
    )
  }
}
module.exports = Default;