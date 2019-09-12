import React from "react";
import TrendItem from "./trend_item";
const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=16501a297930412098622207552bc218";
const req = new Request(url);

class Trends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: []
    };
  }
  async componentDidMount() {
    const res = await fetch(req);
    const data = await res.json();
    const topTrends = await data.articles.slice(0);
    this.setState({
      trends: topTrends
    });
  }

  render() {
    return (
      <div className="trend-item-container">
        {this.state.trends.map((trend, index) => (
          <TrendItem key={index} trend={trend} />
        ))}
      </div>
    );
  }
}

export default Trends;
