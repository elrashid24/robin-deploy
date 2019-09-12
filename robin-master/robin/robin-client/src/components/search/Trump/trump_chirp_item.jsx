import React from "react";
import TrumpChirps from "./trump";

class TrumpChirpItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: Math.floor(Math.random() * 2 + 140)
    };
    this.IncrementItem = this.IncrementItem.bind(this);
  }
  IncrementItem() {
    return this.setState({ likes: this.state.likes + 1 });
  }
  render() {
    const { trend } = this.props;
    const date = trend.publishedAt.slice(0, 10);
    const chirper =
      trend.author && trend.author.length < 22 ? trend.author : "anonymous";
    const link = trend.url || "";
    const photo = trend.urlToImage ? trend.urlToImage : "";
    const chirp = trend.content
      ? trend.content.slice(0, 200)
      : "Click on the link bellow to view this chirp";
    return (
      <div className="chirp-item-container">
        <ul>
          <div className="chirper">Chirper: @{chirper.split(" ")[0]}</div>
          <br />
          <div className="handle">{chirp}...</div>
          <br />
          <div className="date-link-container">
            <div className="date">
              Chirped On:{" "}
              {date
                .split("-")
                .reverse()
                .join("-")}
            </div>
            <div className="link-to-full">
              <a className="external-link" href={link}>
                Read More
              </a>
            </div>
            <br />
          </div>
          <div className="photo-container">
            <img className="chirp-photo" src={photo} alt="" />
          </div>
        </ul>
      </div>
    );
  }
}

export default TrumpChirpItem;
