import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: white;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
  }

  img {
    width: 120px;
  }

  .login-form {
    display: flex;
    gap: 10px;
  }

  input {
    border-radius: 2px;
    border: 1px solid #ccd0d5;
    padding: 3px;
    padding-left: 10px;
  }

  input[type="submit"] {
    background-color: rgb(0, 149, 246);
    color: white;
    padding: 2px 8px;
    border: 0;
    cursor: pointer;
  }

  .btn-create-account {
    font-size: 14px;
    text-decoration: none;
  }

  .info-logado {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .info-logado a {
    text-decoration: none;
    font-size: 14px;
    background-color: rgb(0, 149, 246);
    color: white;
    padding: 3px 7px;
    border-radius: 3px;
  }
`;
