import styles from './PopUp.module.css';

export default function PopUp(props) {

    return (props.trigger) ? (
        <div className={styles.popUp}>
            <div className={styles.popUpInner}>
                <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>

        </div>
    ) : "";
}