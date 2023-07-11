import React, { Component } from "react";
import PropTypes from "prop-types";
class ReviewPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      이름: "",
      성별: "",
      나이: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { 이름, 성별, 나이 } = steps;

    this.setState({ 이름, 성별, 나이 });
  }

  render() {
    const { 이름, 성별, 나이 } = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>이름</td>
              <td>이도형</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>남자</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>55</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReviewPerson.propTypes = {
  steps: PropTypes.object,
};

ReviewPerson.defaultProps = {
  steps: undefined,
};
export default ReviewPerson;
