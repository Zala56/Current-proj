import React,  { useState } from 'react'
import styled from 'styled-components';
import  {Link}   from "react-router-dom";
import { SideData } from './SideData';
import Submenu from './Submenu';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const Nav = styled.div`
    background:#15171c;
    height: 80px;
    display:flex;
    justify-content:flex-start;
 
    align-items:center;
`;
const NavIcon = styled(Link)`

    margin-left:2rem;
    font-size:2rem;
    height: 80px;
    display:flex;
    justify-content:flex-start;
    aligh-items:center;
    
`;





const SidebarNav = styled.nav`
  background:#15171c;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;

  left: ${({ sidebar }) => (sidebar ? '0' : '-100%') };
  transition: 350ms;
  z-index: auto;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;


const Temp = () => {
     const [sidebar, setSidebar] = useState(false);
    //    console.log("",sidebar)
  
  const showSidebar = () => {
    console.log(sidebar)
    setSidebar(!sidebar)};
 
   
    
  return (
    <>

        <Nav >
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose  onClick={showSidebar}/>
            </NavIcon>
            {SideData.map((item, index) => {
              return<Submenu item={item} key={index} />;
            })}
           
          </SidebarWrap>
        </SidebarNav>


       


    </>
  );
}





export default Temp;