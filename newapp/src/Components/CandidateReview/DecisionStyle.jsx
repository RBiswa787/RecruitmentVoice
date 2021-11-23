import styled from "styled-components";
export const DecisionStyle=styled.div`
margin-left:60%;
margin-top: 5%;
h3{
    font-family: 'Montserrat';
    font-style: normal;
    color: #40CDE0;
    font-size: 30px;
}
input,label{
    margin-left: -8%;
}
#label{
    font-family: 'Montserrat';
    font-style: normal;
}
button{
    margin-left:5%;
    border: 0px solid;
    height: 30px;
    width: 100px;
    position: absolute;
    background: #14AAFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
}
input[type="radio"] {
    margin-right: 5%;
}
input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  
  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #FF2775;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }  `