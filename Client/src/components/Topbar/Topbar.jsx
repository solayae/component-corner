import styles from "./Topbar.module.css";
import favorite from "./assets/favorite-icon.png";
import cart from "./assets/cart-icon.png";
import login from "./assets/login-icon.png";

import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import logoCC from "../../assets/image/logo.jpg";
import imageFilter from "../../assets/image/filtrar.png";

const Topbar = ({ setFilters, filterDisplay, setFilterDisplay }) => {
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  const [triggerPopUpSignUp, setTriggerPopUpSignUp] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];

  let categories = allProducts.map((e) => e.category);
  categories = [...new Set(categories)];

  useEffect(() => {
    console.log("render");
  }, []);

  // muestra y oculta el filtro en modo responsive
  const viewFilters = () => {
    filterDisplay.display==='none' ? setFilterDisplay({display:'flex'}) : setFilterDisplay({display:'none'})
  };

  // Obtén la longitud del array original
  let length = categories.length;
  const handleClick = (e) => {
    setFilters([e]);
    setPage(0);
    navigate("/home");
  };

  // Divide el array en dos partes iguales
  let firstColumn = categories.slice(0, length / 2);
  let secondColumn = categories.slice(length / 2);

  return (
    <nav className={styles.topbar}>
      <div className={styles.row2}>
        <Link to={"/"}>
          <div className={styles.logo}>
            <img src={logoCC} alt="logo not found" />
          </div>
        </Link>
        <div className={styles.searchContainer}>
          <SearchBar
            setResults={setResults}
            input={input}
            setInput={setInput}
          />
          <SearchResults
            results={results}
            setResults={setResults}
            setInput={setInput}
            input={input}
          />
        </div>
        <div className={styles.icons}>
          <div className={styles.favorite}>
            {" "}
            <img src={favorite} alt="favorite-icon" />
            <div className={styles.badge}>0</div>
          </div>
          <div className={styles.cart}>
            <img src={cart} alt="cart-icon" />
            <div className={styles.badge}>0</div>
          </div>
          <div className={styles.login}>
            <Login trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
            <img
              src={login}
              onClick={() => setTriggerPopUp(true)}
              alt="login-icon"
            />
          </div>

          <div className={styles.login}>
            <SignUp
              trigger={triggerPopUpSignUp}
              setTrigger={setTriggerPopUpSignUp}
            />
            <AiOutlineForm
              style={{ fontSize: "1.3em" }}
              onClick={() => setTriggerPopUpSignUp(true)}
            />
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <Link to={"/home"} className={styles.about}>
          HOME
        </Link>
        <div className={styles.categories}>
          <div className={styles.dropdown}>
            <a className={styles.about}>CATEGORIAS</a>
            <div className={styles.dropdownContent}>
              <div className={styles.column}>
                {firstColumn.map((e) => (
                  <button
                    onClick={() => {
                      handleClick(e);
                    }}
                    href="#"
                    key={e}
                  >
                    {e}
                  </button>
                ))}
              </div>
              <div className={styles.column}>
                {secondColumn.map((e) => (
                  <button
                    onClick={() => {
                      handleClick(e);
                    }}
                    href="#"
                    key={e}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href="#" className={styles.about}>
          SOBRE NOSOTROS
        </a>
        <a href="#" className={styles.about}>
          PEDIDO
        </a>
        <img
          src={imageFilter}
          className={styles.ocultarFiltros}
          id="FILTER"
          onClick={() => viewFilters()}
        />
      </div>
    </nav>
  );
};

Topbar.propTypes = {
  setFilters: PropTypes.func,
  setPage: PropTypes.func,
};
export default Topbar;
