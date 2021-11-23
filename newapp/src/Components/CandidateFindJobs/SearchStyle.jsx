import styled from "styled-components";
export const SearchStyle = styled.div`
.searchbox {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: center;
    border: 3px solid;
    border-color: #100C3E;
    border-radius: 12px;
    width: 50%;
    font-size: 15px;
    margin-left: 30%;
    margin-top:2%;
    postion: sticky;
    autoComplete:none;
  }
  input:focus::-webkit-input-placeholder { color:transparent; }
  input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
`;