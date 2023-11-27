import { NumButton } from "./Button.jsx";
import '../styles.css'

const NumBox = () => {
    return (
        <div className="numbox">
            <NumButton num="1"/>
            <NumButton num="2"/>
            <NumButton num="3"/>
            <NumButton num="4"/>
            <NumButton num="5"/>
            <NumButton num="6"/>
            <NumButton num="7"/>
            <NumButton num="8"/>
            <NumButton num="9"/>
            <NumButton num="0"/>
        </div>
    )
}

export default NumBox;