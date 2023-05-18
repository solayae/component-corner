import coders from './Coders';
import styles from './About.module.css';
import { LinkedIn } from 'iconoir-react';
import { GitHub } from 'iconoir-react';

export default function About() {
  return ( 
    <>
      <h1 className={styles.title}>Component Corner Team</h1>
      <section className={styles.section}>
        {coders.data.map((data) => (
          <div key={data.id} className={styles.cardCoder}>
            <figure className={styles.containerImg}>
                <img src={data.img} alt='Descripción de la imagen' />
            </figure>
            <div className={styles.coderName}>
              <p>{data.name}</p>
              <div className={styles.coderLinks}>
                <a href={data.linkedin}>
                  <LinkedIn color='black' height={30} width={30} />
                </a>
                <a href={data.github}>
                  <GitHub color='black' height={30} width={30} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

