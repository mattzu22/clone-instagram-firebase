import styled from "styled-components";

export const StyleModalUpload = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);

    .form-modal-upload {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }

    .form-modal-upload form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-modal-upload input{
        border: 1px solid #CCD0D5;
        padding: 5px 10px;
        border-radius: 4px;
        color: white;
        font-size: 14px;
    }

    .form-modal-upload input[type=submit]{
        background-color: rgb(0, 149, 246);
        border: 1px solid #CCD0D5;
        padding: 5px 4px;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-size: 14px;
    }

    .form-modal-upload .close-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -13px;
        right: -13px;
        width: 30px;
        height: 30px;
        background-color: rgb(0, 149, 246);
        border-radius: 50%;
        color: white;
        cursor: pointer;
    }

`
