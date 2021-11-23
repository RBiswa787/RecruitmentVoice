import styled from "styled-components";
export const UpdateProfileStyles=styled.div`
*{
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
hr{
    border-top: 1.5px solid black;
}
h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 43px;
    color: #FF984E;
}
position: absolute;
left: 36%;
top:75%;
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
input,textarea{
    margin-left:5px;
    border: 0px solid;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
}
input, label,textarea {
    float:left;
    left: 60%;
}
#smalltext{
    width: 57%;

}
textarea{
    width: 57%;
    height: 137px;
}


Button{
    position:absolute;
    margin-bottom: 15px;
    top:105%;
    left: 110%;
    background:  #14AAFF;
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
    margin-left: -49%;
}
`