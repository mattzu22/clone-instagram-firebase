import styled from "styled-components";

export const PostStyle = styled.div`
  background-color: white;
  max-width: 700px;
  margin: 20px auto;
  border-radius: 5px;

  img {
    width: 100%;
    height: 400px;
    object-fit: 100%;
  }

  h3 {
    padding: 10px;
  }

  form {
    padding: 15px;
  }

  form textarea {
    width: 100%;
    height: 120px;
    border: 1px solid #ccc;
    padding: 10px;
    resize: none;
  }

  form input[type="submit"] {
    border: 1px solid #ccc;
    background-color: rgb(0, 149, 246);
    padding: 4px 8px;
    font-weight: bold;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;
