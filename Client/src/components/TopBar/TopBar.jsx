import Styles from './TopBar.module.css';
const TopBar = () => {
  return (
    <div className={Styles.container}>
      <div>
        <img src="https://i.imgur.com/3Rl14iv.png" alt="Component Corner" />
      </div>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
      </div>
    </div>
  );
};
export default TopBar;
