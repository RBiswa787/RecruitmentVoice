import styled from "styled-components";
export const MainAppFormStyle = styled.div`
position:absolute;
margin-top:9%;
top:0;
bottom:0;
margin-left:25%;
.Appform-Desc {
    color: #40cde0;
}
input,textarea{
    margin-left:5px;
    border: 0px solid;
    background:#F9F9F9; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
}
input, label,textarea {
    float:left;
    left: 60%;
    top: 70%;
}
.label-desc{
    clear:left;
    margin-left:10px;
    display: inline-block;
    width: 200px;
    text-align: left;
    flex-direction: row;
    justify-content: flex;
    line-height: 26px;
    margin-bottom: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
}
.desc{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}

input{
    width:45%;
}

.btn {
    position:relative;
    margin-bottom: 15px;
    margin-top:19.5%;
    margin-left: 21%;
    background: #FF2775;
    height: 46px;
    width: 176px;
    border: 0px solid;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    float:left;
    margin-left: -62%;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input, label{
    float:left;
    left: 60%;
}
input, label {
    float:left;
}
`



