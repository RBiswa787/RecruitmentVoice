import styled from "styled-components";
export const CardStyle = styled.div`
  .ResultBox {
    display: flexbox;
    
    justify-content: space-between;
    border: 4px solid;
    border-radius: 10px;
    padding: 0.2%;
    padding-left: 1%;
    width: 30%;
    height: 20%;
    margin-left: 40%;
    top: 30%;
  }
  .dip {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    
  }
  .jobid {
    color: #ff2775;
    margin-left: 1px;
    margin-right: 1%;
  }
  .role {
    margin-right: 1%;
  }

  .Org {
    display: inline flex;
    margin-right: 1%;
    color: #666666;
  }
  .btn {
    -webkit-border-radius: 11;
    -moz-border-radius: 11;
    border-radius: 6px;
    font-family: Georgia;
    color: #ffffff;
    font-size: 12px;
    background: #00e786;
    padding: 2px 12px 2px 12px;
    text-decoration: none;
    display: flexend;
    border: solid;
    margin-left:-20%;
  }

  .btn:hover {
    text-decoration: none;
  }
`;