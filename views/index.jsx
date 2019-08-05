var React = require("react");

class index extends React.Component {
  render() {
    let artists = this.props.artists.map(item => {
      let url = "/artist/" + item.id;
      return (
        <div className="artist-div">
          <a href={url}>
            <img className="artist-pic" src={item.photo_url} />
          </a>
          <p>Name: {item.name}</p>
          <p>Nationality: {item.nationality}</p>
        </div>
      );
    });

    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin}>
        <form action="/artist/new">
          <input type="submit" value="Add New Artist" />
        </form>
        <div className="main-container">{artists}</div>
      </Default>
    );
  }
}

module.exports = index;
