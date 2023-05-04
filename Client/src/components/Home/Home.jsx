import { useState, useEffect  } from 'react'
import userServices from '../../services/userService'
import LandingPage from '../../views/LandingPage/LandingPage'
const Home = ()=>{
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
    content === 'Home' ? <LandingPage/> : <div className="container">
    <header className="jumbotron">
      <h3>{content}</h3>
    </header>
  </div>
  )

}

export default Home