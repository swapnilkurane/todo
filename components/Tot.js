

function Tot(data) {
    console.log("myman>>", data)
    return(
        <div>
            The total number of Todos listed are: {data.todo.length}
        </div>
    )

}
export default Tot;