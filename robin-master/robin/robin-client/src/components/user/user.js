import React from "react";
import { connect } from "react-redux";
import { fetchChirps } from "../../actions/chirp_actions";
// import ChripIndexItem from "../chirps/chirp_index_item";
import ChirpIndexItem from "../chirps/chirp_index_item";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chirps: [] };
  }

  componentDidMount() {
    this.props
      .fetchChirps()
      .then(chirps => this.setState({ chirps: chirps.chirps.data }));
  }

  render() {
    const { chirps } = this.state;
    console.log(chirps);
    return (
      <div className="xx">
        <div className="trend-item-container">
          {this.state.chirps.map((chirp, idx) => (
            <ChirpIndexItem chirp={chirp} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // console.log(state),
    // chirps: Object.values(state.chirps)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChirps: () => dispatch(fetchChirps())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
