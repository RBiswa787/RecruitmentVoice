import styled from "styled-components";
export const InterviewFormStyles=styled.div`

margin-left:55%;

.Overlay{
    position: absolute;
    background: #F9F9F9;
    width:50%;
    height:50%;
    
}
button{
    margin-left:10%;
    border: 0px solid;
    height: 30px;
    width: 100px;
    position: absolute;
    background: #4EE979;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
}
label {
    width:180px;
    clear:left;
    text-align:right;
    margin-left:10px;
    display: flex;
    flex-direction: row;
    justify-content: flex;
    line-height: 26px;
    margin-bottom: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
}
input{
    margin-left:0px;
    border: 0px solid;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
}
input, label {
    float:left;
    margin-left: -10%;
}
#smalltext{
    width: 45%;
}

`