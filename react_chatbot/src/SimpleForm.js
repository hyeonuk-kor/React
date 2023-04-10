import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Header from "./Header";
import ReviewPerson from "./ReviewPerson";
import ReviewInfo from "./ReviewInfo";
import logo from "./img/kblife.jpg";
import { ThemeProvider } from "styled-components";
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#FAB809",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#FAB809",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const bubbleStyle = {
  borderRadius: 20,
  padding: "8px 10px",
  display: "flex",
  textAlign: "left",
  user: {
    backgroundColor: "white",
    color: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  bot: {
    backgroundColor: "#FAB809",
    color: "#fff",
    borderRadius: 10,
    padding: 10,
  },
};
class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerComponent={<Header></Header>}
          bubbleStyle={bubbleStyle}
          botAvatar={logo}
          contentStyle={{ height: window.innerHeight - 120 }}
          placeholder={""}
          style={{ height: "100vh", borderRadius: "0px" }}
          steps={[
            {
              id: "1",
              message: "KB착한정기보험II 설계를 도와드리겠습니다.",
              trigger: "2",
            },
            {
              id: "2",
              message: "이름을 입력해주세요.",
              trigger: "이름",
            },
            {
              id: "이름",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message:
                "안녕하세요 {previousValue} 고객님,      아래 정보를 클릭해주세요.",
              trigger: "성별",
            },
            {
              id: "성별",
              options: [
                { value: "남자", label: "남자", trigger: "5" },
                { value: "여자", label: "여자", trigger: "5" },
              ],
            },
            {
              id: "5",
              message: "나이를 입력해주세요",
              trigger: "나이",
            },
            {
              id: "7",
              message: "Great! Check out your summary",
              trigger: "review",
            },
            {
              id: "나이",
              user: true,
              trigger: "7",
              validator: (value) => {
                if (isNaN(value)) {
                  return "숫자만 입력해주세요, ex: 26";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: "7",
              message: "아래 정보를 확인해주세요.",
              trigger: "review",
            },
            {
              id: "review",
              component: <ReviewPerson />,
              asMessage: true,
              trigger: "update",
            },
            {
              id: "update",
              message: "아래 정보가 맞다면 다음 버튼을 눌러주세요.",
              trigger: "update-question",
            },
            {
              id: "update-question",
              options: [
                { value: "수정", label: "수정", trigger: "update-yes" },
                // { value: "no", label: "No", trigger: "end-message" },
                { value: "보험기간", label: "다음", trigger: "보험기간" },
              ],
            },
            {
              id: "update-yes",
              message: "어떤 정보를 수정할까요?",
              trigger: "update-fields",
            },
            {
              id: "update-fields",
              options: [
                { value: "이름", label: "이름", trigger: "update-name" },
                { value: "성별", label: "성별", trigger: "update-gender" },
                { value: "나이", label: "나이", trigger: "update-age" },
              ],
            },
            {
              id: "update-name",
              update: "이름",
              trigger: "7",
            },
            {
              id: "update-gender",
              update: "성별",
              trigger: "7",
            },
            {
              id: "update-age",
              update: "나이",
              trigger: "7",
            },
            {
              id: "보험기간",
              message: "보험기간을 선택해주세요.",
              trigger: "보험기간선택",
            },
            {
              id: "보험기간선택",
              options: [
                { value: "10년", label: "10년", trigger: "납입기간" },
                { value: "60세", label: "60세", trigger: "납입기간" },
                { value: "65세", label: "65세", trigger: "납입기간" },
              ],
            },
            {
              id: "납입기간",
              message: "납입기간을 선택해주세요.",
              trigger: "납입기간선택",
            },
            {
              id: "납입기간선택",
              options: [
                { value: "5년", label: "5년", trigger: "납입방법" },
                { value: "10년", label: "10년", trigger: "납입방법" },
              ],
            },
            {
              id: "납입방법",
              message: "납입방법을 선택해주세요.",
              trigger: "납입방법선택",
            },
            {
              id: "납입방법선택",
              options: [
                { value: "월납", label: "월납", trigger: "정보확인" },
                { value: "3개월납", label: "3개월납", trigger: "정보확인" },
                { value: "6개월납", label: "6개월납", trigger: "정보확인" },
                { value: "연납", label: "연납", trigger: "정보확인" },
              ],
            },
            {
              id: "정보확인",
              message: "아래 정보를 확인해주세요.",
              trigger: "정보확인출력",
            },
            {
              id: "정보확인출력",
              component: <ReviewInfo />,
              asMessage: true,
              trigger: "마지막체크",
            },
            {
              id: "마지막체크",
              message: "아래 정보가 맞다면 다음 버튼을 눌러주세요.",
              trigger: "마지막체크필드",
            },
            {
              id: "마지막체크필드",
              options: [
                { value: "수정", label: "수정", trigger: "마지막수정할거임" },
                { value: "다음", label: "다음", trigger: "끝" },
              ],
            },
            {
              id: "마지막수정할거임",
              message: "어떤 정보를 수정할까요?",
              trigger: "찐막수정",
            },
            {
              id: "찐막수정",
              options: [
                {
                  value: "보험기간",
                  label: "보험기간",
                  trigger: "찐막보험기간",
                },
                {
                  value: "납입기간",
                  label: "납입기간",
                  trigger: "찐막납입기간",
                },
                {
                  value: "납입방법",
                  label: "납입방법",
                  trigger: "찐막납입방법",
                },
              ],
            },
            {
              id: "찐막보험기간",
              update: "보험기간선택",
              trigger: "정보확인",
            },
            {
              id: "찐막납입기간",
              update: "납입기간선택",
              trigger: "정보확인",
            },
            {
              id: "찐막납입방법",
              update: "납입방법선택",
              trigger: "정보확인",
            },
            {
              id: "끝",
              message: "수고요",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
