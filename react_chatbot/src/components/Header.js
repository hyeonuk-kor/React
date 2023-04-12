import React from "react";

const Header = () => {
  return (
    <div className="rsc-header">
      <h2
        className="rsc-header-title"
        style={{
          background: "#FAB809",
          margin: "0",
          padding: "0 auto",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          color: "black",
          height: "54px",
          border: "none", // border 스타일 제거
          width: "100%",
        }}
      >
        KB라이프생명 보험가입
      </h2>
    </div>
  );
};

export default Header;
