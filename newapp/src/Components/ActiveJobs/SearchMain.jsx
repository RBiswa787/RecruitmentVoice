import React from "react";
import Search from "./Search";
import initialDetails from "./InitialDetails";

function SearchMain() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails} />
    </div>
  );
}

export default SearchMain;
