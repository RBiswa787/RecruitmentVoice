import styled from "styled-components";

export const SidebarStyle = styled.div`
*{
  list-style: none;
  text-decoration: none;
  margin: 10;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

}

body{
  background: #F3F3F3;
}

.wrapper .sidebar{
  background: #F3F3F3;
  position:absolute;
  width: 225px;
  bottom:100%;
  height: 89%;
  top: 11.7%;
  zIndex:-5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top:98px;
  padding: 20px 0;
  transition: all 0.5s ease;
}`