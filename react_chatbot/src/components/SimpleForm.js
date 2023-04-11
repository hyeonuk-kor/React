import React, { Component, useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import Header from "./Header";
import flow from "../flow.js";
import logo from "../img/kblife.jpg";
import { ThemeProvider } from "styled-components";
import useWindowSize from "./useWindowSize";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#B97A57",
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

const SimpleForm = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight - 120);
  const { height: windowHeight } = useWindowSize();

  useEffect(() => {
    setContentHeight(window.innerHeight - 120);
  }, [windowHeight]);

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerComponent={<Header></Header>}
        bubbleStyle={bubbleStyle}
        botAvatar={logo}
        contentStyle={{ height: contentHeight }}
        placeholder={""}
        style={{ height: "100vh", borderRadius: "0px" }}
        steps={flow}
      />
    </ThemeProvider>
  );
};

export default SimpleForm;
