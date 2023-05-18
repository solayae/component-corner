import styles from "./BoardAdmin.module.css"
import LeftPanel from "../LeftPanel/LeftPanel";
import { useEffect, useState } from "react";
import InfoUsers from "../InfoUsers/InfoUsers";
import { useNavigate } from "react-router-dom";
import InfoProducts from "../infoProducts/InfoProducts";
import InfoVentas from "../infoVentas/InfoVentas";

const BoardAdmin = () => {
  const [viewType, setType] = useState("user")
  const [isAdmin, setIsAdmin] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()
  useEffect(() => {
    if (user.roles.includes("RoleADMIN")) return setIsAdmin(true)
    window.alert("No se cuentan con los privilegios necesarios.")
    navigate("/")
    //eslint-disable-next-line
  }, [])

  return (
    isAdmin &&
    (<div className={styles.boardAdmin_container}>
      <LeftPanel setType={setType} />
      {viewType === "user" && <InfoUsers />}
      {viewType === "products" && <InfoProducts />}
      {viewType === "sells" && <InfoVentas/>}
    </div>)
  );
}

export default BoardAdmin;
