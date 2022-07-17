import { useState } from 'react';
import { Container, Title, InputGroup, Input, Button, Link } from './styleLogin';
import '../../Services/fireBase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');

  function loginUser() {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailUser, passwordUser)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)

      localStorage.setItem('TOKEN', user.accessToken)
      localStorage.setItem('E-MAIL', user.email)

      window.location.href = '/'

    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      
      if(errorMessage === 'EMAIL_NOT_FOUND') {
        alert('E-mail incorrento!')
      }

      if(errorMessage === 'INVALID_PASSWORD') {
        alert('Senha incorreta!')
      }  

    });

  }

  return (
    
    <Container>
        
      <Title>Login</Title>

      <InputGroup>
          <Input value={emailUser} placeholder="Digite seu e-mail" onChange={e => setEmailUser(e.target.value)} />
          <Input value={passwordUser} type="password" placeholder="Digite sua senha" onChange={e => setPasswordUser(e.target.value)} />
      </InputGroup>

      <Button onClick={loginUser}>
          Entrar
      </Button>

      <Link href="/Cadastro" >Não possui cadastro? Clique aqui!</Link>

    </Container>

  )

}

export default Login;