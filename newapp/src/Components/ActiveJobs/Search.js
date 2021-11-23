import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import { SearchStyle } from "./SearchStyle";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return (
      person.jobid.toLowerCase().includes(searchField.toLowerCase()) ||
      person.role.toLowerCase().includes(searchField.toLowerCase()) ||
      person.organisation.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {

      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
  
  }

  return (
    <SearchStyle>
      <section className="garamond">
        <div className="pa2">
          <input
            className="searchbox"
            id="input"
            type="search"
            placeholder="Search by JobID"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <br />
        {searchList()}
      </section>
    </SearchStyle>
  );
}
export default Search;
