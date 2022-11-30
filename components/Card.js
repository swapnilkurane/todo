import styles from './Card.module.css'
const Card = (todo) => {
    console.log("cards>>>>", todo)

    return (
        <div className={styles.carddi}>
            <div className={styles.cardHeaderWrapper}>
                <h1 className={styles.cardHeader}>
                </h1>
            </div>
        </div>
    )
}
export default Card; 