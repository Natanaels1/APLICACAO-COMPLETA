import { useState } from 'react';
import { Container, Title, InputGroup, Input, Button } from './styleRegistration.js';
import '../../Services/fireBase.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  function createUser() {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        localStorage.setItem('NOME-USER', name);

        window.location.href = "/Login";
        
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('E-mail já cadastrado!')
      });
  };

  return (
    <Container>
        
        <Title>Cadastre-se</Title>

        <InputGroup>
            <Input
            value={name}
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)}
            />
            <Input
            value={email}
            placeholder="Digite seu e-mail"
            onChange={e => setEmail(e.target.value)}
            />
            <Input
            value={password}
            type="password"
            placeholder="Digite sua senha"
            onChange={e => setpassword(e.target.value)}
            />
        </InputGroup>

        <Button onClick={createUser}>
            Cadastrar
        </Button>

    </Container>
  );

};

export default Registration;

   /* 
      localStorage.setItem('E-MAIl', user.email)
      localStorage.setItem('TOKEN', user.accessToken) */
        //window.location.href = "http://www.devmedia.com.br";