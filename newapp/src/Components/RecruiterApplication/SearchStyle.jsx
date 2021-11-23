import styled from "styled-components";
export const SearchStyle = styled.div`
.searchbox {
  position: absolute;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-align: center;
    border: 3px solid;
    border-color: #100C3E;
    border-radius: 12px;
    width: 50%;
    font-size: 15px;
    margin-left: 30%;
    margin-top:40%;
    postion: sticky;
    autoComplete:none;
  }
  input:focus::-webkit-input-placeholder { color:transparent; }
`;