import { useState } from "react";
import { ModalStyle } from "./style";
import { auth } from "../../firebase";

export const ModalCreateAccount = ({modalCreateAccount, setModalCreateAccount}) => {

  const [inputs, setInputs] = useState({
    email: '',
    nome: '',
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


  function createAccount(e){
    e.preventDefault()
    const email = inputs.email
    const nome = inputs.nome
    const senha = inputs.senha

    auth.createUserWithEmailAndPassword(email, senha)
    .then((authUser)=>{
      authUser.user.updateProfile({
        displayName: nome
      })
      alert('conta criada com sucesso!')
      setModalCreateAccount(false)
    }).catch((err)=>{
      alert(err.message)
    });
  }

  return (
    <>
      {modalCreateAccount ? (
        <ModalStyle>
          <div className="form-create-account">
            <h2>Crie sua conta</h2>

            <div className="close-modal" onClick={() => setModalCreateAccount(false)}>
              X
            </div>

            <form action="criar" className="form" onSubmit={createAccount}>
              <input type="text" placeholder="Email" name="email" id="email" value={inputs.email} onChange={handleInputChanger}/>

              <input type="text" placeholder="Nome" name="nome" id="nome" value={inputs.nome} onChange={handleInputChanger}/>

              <input type="password" placeholder="Senha" name="senha" id="senha" value={inputs.senha} onChange={handleInputChanger}/>

              <input type="submit" value="Criar conta" />
            </form>
          </div>
        </ModalStyle>
      ) : null}
    </>
  );
};
