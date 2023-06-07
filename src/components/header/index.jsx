import { useState } from "react";
import instagram from "../../image/instagram.png";
import { ModalCreateAccount } from "../modalCreateAccount";
import { HeaderStyle } from "./style";
import { auth } from '../../firebase.js'
import { ModalUpload } from "../modalUpload";

export const Header = ({ user, setUser }) => {
  const [toggleModal, setToggleModal] = useState(false)

  const [inputs, setInputs] = useState({
    login: '',
    senha: ''
  })

  function handleInputChanger(event){
    const { target } = event
    const { name } = target
    const { value } = target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function singOn(e){
    e.preventDefault();

    const email = inputs.login
    const senha = inputs.senha

    auth.signInWithEmailAndPassword(email, senha)
    .then((auth)=>{
      setUser(auth.user.displayName)
      alert('logado com sucesso!')
      window.location.href = '/';
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

  function logout(e){
    e.preventDefault();

    auth.signOut().then((user)=>{
      setUser(null)
      window.location.href = '/';
    })
  }
  
  return (
    <>
      {(toggleModal) ? <ModalCreateAccount toggleModal={toggleModal} setToggleModal={setToggleModal}/> : null}

      {(toggleModal) ? <ModalUpload toggleModal={toggleModal} setToggleModal={setToggleModal}/> : null}

      
      <HeaderStyle>
      <div className="container">
        <img src={instagram} alt="logo" />

        {user ? (
          <div className="info-logado">
            <p>Olá, {user}!</p>
            <a href="#" onClick={()=>{setToggleModal(true)}}>Postar</a>
            <a href="#" onClick={(e) =>logout(e)}>Logout</a>
          </div>
        ) : (
          <>
            <form className="login-form" onSubmit={singOn}>
              <input type="text" placeholder="Login" name="login" id="login" onChange={handleInputChanger} value={inputs.login}/>
              <input type="password" placeholder="Senha" name="senha" id="senha" 
              onChange={handleInputChanger} value={inputs.senha}/>
              <input type="submit" name="action" value="Sing up" />
            </form>
            <a
              href="#"
              className="btn-create-account"
              onClick={()=>{setToggleModal(true)}}
            >
              Criar conta
            </a>
          </>
        )}
      </div>  
      </HeaderStyle>
    </>
  );
};
