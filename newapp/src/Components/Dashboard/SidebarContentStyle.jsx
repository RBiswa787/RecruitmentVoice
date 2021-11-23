import styled from "styled-components";
export const SidebarContentStyle = styled.div`
position: sticky;
top:0;

ul li a{
  display: block;
  padding: 13px 30px;
  color: #00000;
  position: relative;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}

a{
  color:#00000;
  
}
ul li a:hover,
ul li a.active{
  color: #000000;
  background:white;
  border-radius: 10px;
}

ul li a:hover:before,
ul li a.active:before{
  display: block;
  
}  

`