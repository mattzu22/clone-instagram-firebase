import { useState } from "react"
import firebase from 'firebase/compat/app';
import { StyleModalUpload } from "./style"
import { storage, db } from '../../firebase.js'




export const ModalUpload = ({ setToggleModal, toggleModal })=>{
    const [ inputs, setInputs ] = useState({
        titulo: ""
    })

    const [ progress, setProgress] = useState(0)

    const [ file, setFile ] = useState(null)

    function handleInputChanger(event){
        const { target } = event
        const { name } = target
        const { value } = target
        setInputs({
          ...inputs,
          [name]: value
        })
      }

      function uploadPost(e){
        e.preventDefault();
        const titulo = inputs.titulo

        const uploadTask = storage.ref(`images/${file.name}`).put(file);

        uploadTask.on('state_changed', function(snapShot){
            const progress = Math.round(snapShot.bytesTransferred/snapShot.totalBytes) * 100
            setProgress(progress);
        }, (err)=>{

        }, ()=>{
            storage.ref('images').child(file.name).getDownloadURL()
            .then((url)=>{
                  db.collection('posts').add({
                    titulo: titulo,
                    image: url,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  })

                  setProgress(0)
                  setFile(null)

                  alert("post feito com sucesso!")
            })
        })
      }

 return (
    <>
    {toggleModal ? (
         <StyleModalUpload>
         <div className="form-modal-upload">
           <div className="close-modal" onClick={() => setToggleModal(false)}>
             X
           </div>

           <h2>Publicar Post</h2>

           <form onSubmit={(e)=>uploadPost(e)}>
             <progress value={progress}></progress>

             <input type="text" placeholder="Título do post" name="titulo" id="titulo" value={inputs.titulo} onChange={handleInputChanger}/>

             <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>

             <input type="submit" value="Publicar" />
           </form>
         </div>
       </StyleModalUpload>
    ): null}
    </>
 )
}