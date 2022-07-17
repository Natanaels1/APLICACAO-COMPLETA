import { useState } from 'react';
import { Container, NavBar, Menu, Options, AreaUser,NmUser, Main } from './styleHome';
import { MdAccountBox } from 'react-icons/md';
import { ImExit } from 'react-icons/im';

let token = localStorage.getItem('TOKEN');

function Home() {

  const [nameUser, setNameUser] = useState(localStorage.getItem('NOME-USER'));

  function logout() {

    window.location.href = '/Login';

    localStorage.removeItem('TOKEN');
    localStorage.removeItem('NAME-USER');

  };

  return (
    <Container>
      { token !== null ? 

        <>

          <NavBar>
          
            <Menu>
              Menu
            </Menu>

            <AreaUser>
              <MdAccountBox style={{marginRight: 10, width: '10%'}} /> <NmUser>{nameUser}</NmUser>
              <ImExit style={{cursor: 'pointer', width: '10%'}}  onClick={logout}/>
            </AreaUser>

          </NavBar>

          <Main>

            

          </Main>

        </>
      
      : window.location.href = '/Login'}
    </Container>
  );

};

export default Home;