import styles from "./BoardAdmin.module.css"
import LeftPanel from "../LeftPanel/LeftPanel";
import { useState } from "react";
import InfoUsers from "../InfoUsers/InfoUsers";

const BoardAdmin = () => {
  const [viewType, setType] = useState("user")

  return (
    <div className={styles.boardAdmin_container}>
      <LeftPanel setType={setType} />
      {viewType === "user" ? <InfoUsers /> : ""}
    </div>
  );
}

export default BoardAdmin;
