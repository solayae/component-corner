import { useState, useEffect } from "react";

import UserService from "../../services/userService"
import EventBus from "../../common/EventBus";
import NavBar from "../NavBar/NavBar";
const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <>
    <NavBar/>
     <div className="container">
      <header className="jumbotron">
        <h3>{content} - Test</h3>
      </header>
    </div>
    </>
  );
};

export default BoardUser;
