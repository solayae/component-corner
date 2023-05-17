import styles from "./InfoUsers.module.css"
import { useState, useEffect } from "react"
import axios from "axios"

const InfoUsers = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await axios.get("/users")
      setUsers([...response.data])
      setFilteredUsers([...response.data])
    } catch (error) {
      console.log(error)
    }
  }
  const filterUsers = (value) => {
    if (!value) return setFilteredUsers(users)
    let oldList = [...users]
    const newList = oldList.filter((el) => el.name.toLowerCase().includes(value))
    setFilteredUsers(newList)
  }
  const banUser = async (e) => {
    try {
      const response = await axios.put("/users/", { ...e, banned: !e.banned })
      response.status === 200 && getUsers()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    !users.length && getUsers()
    //eslint-disable-next-line
  }, [users, filteredUsers])

  return (
    <div className={styles.container}>
      <h1 className="text-center">Información de los usuarios:</h1>
      <input type="text" onChange={(ev) => { filterUsers(ev.target.value) }} placeholder="Buscar por nombre" />
      <div className={styles.info_container}>
        <div className={styles.row} style={{ backgroundColor: "#f9c139", width: "100%" }}>
          <p>Id</p>
          <p>Nombre</p>
          <p>Email</p>
          <p>Bloquear</p>
        </div>
        <div className={styles.info_users}>
          {filteredUsers.sort((a, b) => a.id - b.id).map((e) => (
            <div className={styles.row} key={e.id}>
              <p>{e.id}</p>
              <p>{e.name}</p>
              <p>{e.email}</p>
              <div>
                <input type="checkbox" onChange={() => banUser(e)} checked={e.banned} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoUsers