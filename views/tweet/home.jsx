var React = require("react");
var Default = require("./layout/default");
class Home extends React.Component {
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
            <h1>Welcome to tweetdr!!</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Tweet Messasge</th>
                    <th>User ID</th>
                </tr>
                    {tweetsList}
            </table>
        </Default>
    )
  }
}
module.exports = Home;