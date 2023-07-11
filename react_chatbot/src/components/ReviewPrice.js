import React, { Component } from "react";
import PropTypes from "prop-types";
class ReviewPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      이름: "",
      성별: "",
      나이: "",
      보험기간: "",
      납입기간: "",
      납입방법: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      이름,
      성별,
      나이,
      보험기간선택,
      납입기간선택,
      납입방법선택,
    } = steps;

    this.setState({
      이름,
      성별,
      나이,
      보험기간선택,
      납입기간선택,
      납입방법선택,
    });
  }

  render() {
    const {
      이름,
      성별,
      나이,
      보험기간선택,
      납입기간선택,
      납입방법선택,
    } = this.state;
    return (
      <div>
        <table>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>이름</td>
              <td>이도형</td>
            </tr>
            <tr>
              <td>보험료</td>
              <td>16,200원</td>
            </tr>
            <tr>
              <td>보험나이</td>
              <td>{55 + "세 남자"}</td>
            </tr>

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

ReviewPrice.propTypes = {
  steps: PropTypes.object,
};

ReviewPrice.defaultProps = {
  steps: undefined,
};
export default ReviewPrice;
