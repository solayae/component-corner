import styles from "./InfoUsers.module.css"
import { useState, useEffect } from "react"
import axios from "axios"

const InfoUsers = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await axios.get("/users")
      setUsers([...response.data])
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    !users.length && getUsers()
    //eslint-disable-next-line
  }, [users])

  return (<div className={styles.info_container}>
    <h1 className="text-center">Todos los usuarios</h1>
    <div className="row">
      <div className="col text-center">
        Id
      </div>
      <div className="col text-center">
        Nombre
      </div>
      <div className="col text-center">
        Email
      </div>
      <div className="col text-center">
        Bloquear
      </div>
    </div>
    <div className={styles.info_users}>
      {users.map((e) => (
        <div className="row" key={e.id}>
          <div className="col text-center">
            {e.id}
          </div>
          <div className="col text-center">
            {e.name}
          </div>
          <div className="col text-center">
            {e.email}
          </div>
          <div className="col text-center">
            <input type="checkbox" />
          </div>
        </div>
      ))}
    </div>
  </div>)
}

export default InfoUsers