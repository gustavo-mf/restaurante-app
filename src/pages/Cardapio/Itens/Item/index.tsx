import styles from './Item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src='' alt="img" />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2></h2>
          <p></p>
        </div>

        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>aaa</div>
          <div className={styles.item__porcao}>bbb</div>
          <div className={styles.item__qtdpessoas}>ccc</div>
          <div className={styles.item__valor}>ddd</div>
        </div>
      </div>
    </div>
  );
}