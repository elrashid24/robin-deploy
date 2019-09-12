import React from "react";

class ChirpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: Math.floor(Math.random() * 1000 + 2000)
    };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.randomDate = this.randomDate.bind(this);
  }

  componentDidMount() {
    // console.log("props", this.props);
  }
  IncrementItem() {
    return this.setState({ likes: this.state.likes + 1 });
  }

  randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  render() {
    const { chirp } = this.props;
    // this.date = this.randomDate(new Date(2019, 0, 1), new Date());
    return (
      <div className="chirp-item-container">
        <ul>
          <div className="chirper">Chirper: @DemoDave</div>
          <br/>
          <div className="chirp">{chirp.body}</div>
          <br/>
          <div className="date">Date: circa 2019</div>
          <br/>
          <div className="likes-container">
            <div className="num-likes">{this.state.likes} Likes</div>
            <div classaName="like-btn">
              <button onClick={this.IncrementItem} className="like">
                Like
              </button>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
export default ChirpIndexItem;
