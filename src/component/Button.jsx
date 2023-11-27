import '../styles.css'

let flag = 0;
let firstInput = "", secondInput = "",output,disp = "0";

const NumButton = (props) => {
    return (
        <button className="btn numbtn" onClick={() => numInput(props.num)}>{props.num}</button>
    )
}

const FuncButton = (props) => {
    return (
        <button className={`btn funcbtn ${props.job}`} onClick={() => funcInput(props.val)}>{props.val}</button>
    )
}

const CtrlButton = (props) => {
    return (
        <button className={`btn ${props.job}`} onClick={() => ctrlInput(props.job)}>{props.val}</button>
    )
}

const numInput = (num) => {
    if (flag === 0)
    {
        firstInput += num;
        disp = firstInput;
        document.getElementById("resbox").innerHTML = disp;
    }
    else
    {
        secondInput += num;
        disp = disp + secondInput;
        document.getElementById("resbox").innerHTML = disp;
    }
}

const funcInput = (val) => {
    disp = firstInput + " " + val;
    switch(val)
    {
        case "+":
            flag = 1;
            break;
        case "-":
            flag = 2;
            break;
        case "*":
            flag = 3;
            break;
        case "/":
            flag = 4;
            break;
    }
    disp += " ";
    console.log(disp);
    document.getElementById("resbox").innerHTML = disp;
}

const ctrlInput = (job) => {
    if (job === "clr")
    {
        output = firstInput = secondInput = "";
        disp = "0";
        flag = 0;
        document.getElementById("resbox").innerHTML = disp;

    }
    else if (job === "equ")
    {
        switch(flag)
        {
            case 1:
                output = parseInt(firstInput) + parseInt(secondInput);
                break;
            case 2:
                output = parseInt(firstInput) - parseInt(secondInput);
                break;
            case 3:
                output = parseInt(firstInput) * parseInt(secondInput);
                break;
            case 4:
                output = parseInt(firstInput) / parseInt(secondInput);
                break;

        }
        disp += " = " + output;
        console.log(disp); 
        document.getElementById("resbox").innerHTML = disp;
    }
}

export {NumButton,FuncButton,CtrlButton,ctrlInput,disp};