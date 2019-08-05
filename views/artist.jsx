var React = require("react");

class artist extends React.Component {
  render() {
    let item = this.props.artists;
    let editUrl = "/artist/"+item.id+"/edit";
    let deleteUrl = "/artist/"+item.id+"?_method=delete";
    let songList = "/artist/"+item.id+"/songs";
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin}>
        <div className="solo-artist">
            <img className="artist-pic" src={item.photo_url}/>
            <table className="table table-bordered">
                <tr>
                    <th scope="row">Name</th>
                    <td>{item.name}</td>
                </tr>
                <tr>
                    <th scope="row">Nationality</th>
                    <td>{item.nationality}</td>
                </tr>
            </table>
            <div className="choices">
                <form action={songList}>
                    <input type="submit" value="Songs"/>
                </form>
                <form action={editUrl}>
                    <input type="submit" value="Edit"/>
                </form>
                <form method="POST" action={deleteUrl}>
                    <input type="submit" value="Delete"/>
                </form>
            </div>


        </div>
      </Default>
    );
  }
}

module.exports = artist;
