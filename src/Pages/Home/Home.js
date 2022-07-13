import { useState } from 'react';
import { Container } from './styleHome';

function Home() {

  const [nameUser, setNameUser] = useState(localStorage.getItem('NOME-USER'))

  return (
    <Container>
      {nameUser}
    </Container>
  )

}

export default Home;