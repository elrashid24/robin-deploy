import React from "react";
import { writeChirp } from "../../util/chirp_api_util";
import { connect } from "react-redux";
import { composeChirp } from "../../actions/chirp_actions";

class WriteChirp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      errors: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  clearErrors = async () => {
    await writeChirp;
    setTimeout(
      () =>
        this.setState({
          success: "",
          errors: ""
        }),
      6000
    );
  };

  handleSubmit(e) {
    e.preventDefault();
    const { composeChirp } = this.props;
    const newChirp = {
      body: this.state.body
    };
    writeChirp(newChirp).then(
      () =>
        this.setState({
          success: "Success! Head to `My Chirps` to check out your chirps. "
        }),
      err => {
        this.setState({
          errors: "Chirps must be between 1 and 280 characters...Keep it clean!"
        });
      }
    );
    this.clearErrors();
  }

  render() {
    return (
      <div className="new-chirp-container">
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="chirp-input"
              name="body"
              value={this.state.name}
              onChange={this.handleOnChange}
              placeholder="Write a Chirp"
            />
            <div className="err-btn-container">
              <button className="publish" type="submit">
                submit
              </button>
              <div className="chirp-errors">
                {this.state.errors || this.state.success}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.user.id
  };
};

const mapDispatchToProps = dispatch => ({
  composeChirp: chirp => dispatch(composeChirp(chirp))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteChirp);
