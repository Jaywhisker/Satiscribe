import React from 'react';
import Navbar from './navbartest';
import Tasklist from '../components/tasklist';
import styled from 'styled-components';
import { Button } from '../components';
import pagestyle from '../styles/home.module.css'

const Container = styled.div`
  position: relative;
  padding: 20px;
`;

function HomePage() {
  return (
    <Container>
      <Navbar projectName="Home" />
      <div className={pagestyle.parentContainer} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '75px' }}>
  <div className={pagestyle.aligntext}>
    <h4>Hi Hubob:<br />Your Task List</h4>
  </div>
  <div className={pagestyle.alignButton2}>
    <Button
      size="small"
      logo="left"
      logoStyle={{ backgroundImage: `url("/icons/plus.png")`, zIndex: 1 }}
      onClick={() => alert('Border Button (Smol) with left logo clicked!')}
    >
      Create New Meeting
    </Button>
  </div>
</div>

      <Tasklist/>
    </Container>
  );
}

export default HomePage;
