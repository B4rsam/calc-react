import { FuncButton,CtrlButton } from "./Button"

const FuncBox = () => {
    return (
        <div className="funcbox">
            <FuncButton job="sum" val="+"/>
            <FuncButton job="sub" val="-"/>
            <FuncButton job="mul" val="*"/>
            <FuncButton job="div" val="/"/>
            <CtrlButton job="equ" val="="/>
            <CtrlButton job="clr" val="C"/>
        </div>
       
    )
}

export default FuncBox;