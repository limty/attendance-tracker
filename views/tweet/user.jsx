var React = require("react");
var Default = require("./layout/default");
class User extends React.Component {
  render() {
    let tweets = this.props.tweets;
    let tweetsList = tweets.map(tweetsData => {
        return(
            <tr>
                <td>{tweetsData.id}</td>
                <td>{tweetsData.tweet}</td>
                <td>{tweetsData.user_id}</td>
            </tr>
        )
    })
    return (
        <Default>
          <h1>Welcome to your tweetdr page!!</h1>
            <table>
                <tr>
                    <th>All Tweets</th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>Tweet Messasge</td>
                    <td>User ID</td>
                </tr>
                    {tweetsList}
            </table>
            <table>
                <tr>
                    <th>All Your Tweets</th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>Tweet Messasge</td>
                    <td>User ID</td>
                </tr>
                    {tweetsList}
            </table>
        </Default>
    );
  }
}
module.exports = User;