import { useState } from "react"

const VizsgaTable = (props) =>{
    const [lejelentkezesBtn, setLejelentkezesBtn] = useState(false)
    const jelentkezesBtnClick = () => {
        setLejelentkezesBtn(true)
    }
    return (
        <>
            <tr>
                <td className="id">{props.formData.vizsga_id}</td>
                <td>{props.formData.vizsga_tipus}</td>
                <td>{props.formData.vizsgabiztos_neve}</td>
                <td>{props.formData.vizsga_datuma}</td>
                <td className="btn"><button onClick={jelentkezesBtnClick} ><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> {lejelentkezesBtn && <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button>} </td>
            </tr>
        </>
    )
}
export default VizsgaTable