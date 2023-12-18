import React from "react";
import ResultScreen from "../components/SearchPage/ResultScreen";
import Navbar from "../components/Navbar";
import "./SearchPage.scss";

function SearchPage() {
  return (
    <>
      <Navbar />
      <ResultScreen />
    </>
  );
}

export default SearchPage;
