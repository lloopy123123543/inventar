export default function (props){
    const {
        type,
        isValid,
        title,
        reference
    } = props
    return(
        <div>
            {title}
            {type === "number" ?
                <input type={"number"} ref={reference}/> :
                <input ref={reference}/>
            }
            {
                isValid === 2 && <div style={{color:"red"}}>Вы указали не верно</div>
            }

        </div>
    )
}