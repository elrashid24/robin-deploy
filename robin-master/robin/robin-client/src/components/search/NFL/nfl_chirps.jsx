import React from "react";
import NFLChirpItem from "./nfl_chirp_item";

const url =
  "https://newsapi.org/v2/everything?" +
  "q= NFL&" +
  "from=2019-08-29&" +
  "sortBy=date&" +
  "apiKey=16501a297930412098622207552bc218";
const req = new Request(url);
class NFLChirps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nflChirps: []
    };
  }

  async componentDidMount() {
    const res = await fetch(req);
    const data = await res.json();
    const nflTrends = await data.articles.slice(0);
    this.setState({
      nflChirps: nflTrends
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="xx">
        <div className="item-container">
          {this.state.nflChirps.map((trend, index) => (
            <NFLChirpItem key={index} trend={trend} />
          ))}
        </div>
        <div className="right-side-ternd">
          <img src={require("./nfl.png")} className="nfl-pic" alt="" />
          <div className="directions">
            Click the Robin logo to checkout more trending topics.{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default NFLChirps;
