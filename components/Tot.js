import styles from "../styles/Home.module.css"

function Tot(data) {
    return(
        <div className={styles.bot}>
            The total number of Todos listed are: {data.todo.length}
        </div>
    )
}
export default Tot;