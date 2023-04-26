import styles from './Cards.module.css';

export default function Cards() {
    return (

        <div>
            <div className={styles.card}>

                <h2>MOTHERBOARD RANDOM</h2>

                <h4>PRICE: 3422</h4>
            </div>

            <div className={styles.card}>

                <h2>MOUSE RANDOM</h2>

                <h4>PRICE: 23452</h4>
            </div>

            <div className={styles.card}>

                <h2>MONITOR RANDOM</h2>

                <h4>PRICE: 3463</h4>
            </div>


        </div >

    )
}