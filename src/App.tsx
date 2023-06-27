import React from 'react';
import './App.css';

function App() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.email.value
    const password = event.currentTarget.password.value
    if(email === "renan@exemplo.com" && password === "123456") {
      alert("Bem vindo, Renan!")
    } else {
      alert("Email ou senha incorretos!")
    }
  }

  return (
    <div className="App">
      <h2>Acessar minha conta</h2>
      <form onSubmit={handleLogin} className='form-container'>
        <input name='email' placeholder='Email' className='input' type='email' />
        <input name='password' placeholder='Senha' className='input' type='password' />
        <button className='button' type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
