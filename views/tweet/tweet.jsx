var React = require("react");
var Default = require("./layout/default");
class Tweet extends React.Component {
  render() {
    return (
        <Default>
          <h3>Let's tweetdr tweetdr!!</h3>
          <form action="/new" method="POST">
              <p>Your Tweet</p>
              <input name="tweet"/>
              <p>Your User ID</p>
              <input name="user_id"/>
              <br></br>
              <input type="submit"/>
          </form>
        </Default>
    );
  }
}
module.exports = Tweet;