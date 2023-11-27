let flag = 0;

const NumButton = (props) => {
    return (
        <button className="numbtn">{props.num}</button>
    )
}

const FuncButton = (props) => {
    return (
        <button className={props.job}>{props.val}</button>
    )
}

const CtrlButton = (props) => {
    return (
        <button className={props.job}>{props.val}</button>
    )
}

function numInput() {
    let firstInput, secondInput;
    if (flag === 0)
    {
        console.log("numinput");
    }
    else
    {

    }
}

export {NumButton,FuncButton,CtrlButton};