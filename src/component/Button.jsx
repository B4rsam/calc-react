let flag = 0;
let firstInput = "", secondInput = "",output;

const NumButton = (props) => {
    return (
        <button className="numbtn" onClick={() => numInput(props.num)}>{props.num}</button>
    )
}

const FuncButton = (props) => {
    return (
        <button className={props.job} onClick={() => funcInput(props.val)}>{props.val}</button>
    )
}

const CtrlButton = (props) => {
    return (
        <button className={props.job} onClick={() => ctrlInput(props.job)}>{props.val}</button>
    )
}

const numInput = (num) => {
    if (flag === 0)
    {
        firstInput += num;
    }
    else
    {
        secondInput += num;
    }
}

const funcInput = (val) => {
    flag = 1;
    output = firstInput + " " + val;
    console.log(output);
}

const ctrlInput = (job) => {
    console.log(job);
}

export {NumButton,FuncButton,CtrlButton};