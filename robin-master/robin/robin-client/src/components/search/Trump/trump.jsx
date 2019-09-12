import React from "react";
import TrumpChirpItem from "./trump_chirp_item";
import { Link } from "react-router-dom";
const url =
  "https://newsapi.org/v2/everything?" +
  "q=Donald Trump&" +
  "from=2019-08-29&" +
  "sortBy=date&" +
  "apiKey=16501a297930412098622207552bc218";
const req = new Request(url);
class TrumpChirps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trumpChirps: []
    };
  }

  async componentDidMount() {
    const res = await fetch(req);
    const data = await res.json();
    const trumpTrends = await data.articles.slice(0);
    this.setState({
      trumpChirps: trumpTrends
    });
  }

  render() {
    return (
      <div className="xx">
        <div className="item-container">
          {this.state.trumpChirps.map((trend, index) => (
            <TrumpChirpItem key={index} trend={trend} />
          ))}
        </div>
        <div className="right-side-ternd">
          <img src={require("./trump.png")} className="trump-pic" alt="" />
          <div className="directions">Click the Robin logo to checkout more trending topics. </div>
        </div>
      </div>
    );
  }
}
export default TrumpChirps;
