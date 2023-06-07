import { useEffect, useState } from 'react'
import { Header } from './components/header/index.jsx';
import { FeedPost } from './components/FeedPost/index.jsx';
import CSSreset from './components/CSSreset/CSSreset.js';

function App() {

  const [user, setUser] = useState();
  
 useEffect(() => {

 }, [])


  return (
    <>
      <CSSreset />
     <Header user={user} setUser={setUser}/>
     <FeedPost setUser={setUser}/>
    </>
  )
}

export default App
