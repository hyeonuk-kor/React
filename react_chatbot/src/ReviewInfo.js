import React, { Component } from "react";
import PropTypes from "prop-types";
class ReviewInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      보험기간선택: "",
      납입기간선택: "",
      납입방법선택: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { 보험기간선택, 납입기간선택, 납입방법선택 } = steps;

    this.setState({ 보험기간선택, 납입기간선택, 납입방법선택 });
  }

  render() {
    const { 보험기간선택, 납입기간선택, 납입방법선택 } = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>보험기간</td>
              <td>{보험기간선택.value}</td>
            </tr>
            <tr>
              <td>납입기간</td>
              <td>{납입기간선택.value}</td>
            </tr>
            <tr>
              <td>납입방법</td>
              <td>{납입방법선택.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReviewInfo.propTypes = {
  steps: PropTypes.object,
};

ReviewInfo.defaultProps = {
  steps: undefined,
};
export default ReviewInfo;
