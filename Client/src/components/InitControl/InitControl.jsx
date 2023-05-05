import { useState, useEffect  } from 'react'
import userServices from '../../services/userService'
import Home from '../../views/Home/Home'
const InitControl = ()=>{
  const [content, setContent ] = useState('')

  useEffect(()=>{
    userServices.getPublicContent().then(
      (response)=>{
        setContent(response.data)
      },
      (error) =>{
        const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        setContent(_content)
      }
    )
  }, [])

  return (
    content === 'Home' ? <Home/> : <div className="container">
    <header className="jumbotron">
      <h3>{content}</h3>
    </header>
  </div>
  )

}

export default InitControl