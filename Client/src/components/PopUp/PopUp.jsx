import styles from './PopUp.module.css';

export default function PopUp(props) {

    return (props.trigger) ? (
        <div className={styles.popUp}>
            <div className={styles.popUpInner}>
                <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>X</button>
                <form>
                    <h2>Log in</h2>
                    <div className={styles.formElement}>
                        <label for="email">Email</label>
                        <input type="text" id='email' placeholder='Enter email' />
                    </div>
                    <div className={styles.formElement}>
                        <label for="password">Password</label>
                        <input type="password" id='password' placeholder='Enter password' />
                    </div>
                    <div className={styles.formElement}>
                        <button>Sign In</button>
                    </div>

                </form>
            </div>

        </div>
    ) : "";
}