import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TDD from "./TDD";

export default function Main() {
  return (
    <BrowserRouter>
      <MainWrap>
        <Routes><Route path="/*" element={<TDD />} /></Routes>
      </MainWrap>
    </BrowserRouter>
  );
}

const MainWrap = styled.div``;
