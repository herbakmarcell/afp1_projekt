import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const VizsgaTable = (props) =>{
    const [lejelentkezesBtn, setLejelentkezesBtn] = useState(false)
    const navigate = useNavigate();
    const jelentkezesBtnClick = async (vizsga_id) => {
        setLejelentkezesBtn(true)
        console.log(vizsga_id)
        const resp = await axios.post("http://localhost:5000/api/vizsga/jelentkezes", {vizsga_id}, {withCredentials: true})
        const data = await resp.data
        if(data.sikeres == "Success"){
            navigate("/elorehaladas")
            console.log(data)
        }
    }
    return (
        <>
            <tr>
                <td className="id">{props.formData.vizsga_id}</td>
                <td>{props.formData.vizsga_tipus}</td>
                <td>{props.formData.vizsgabiztos_neve}</td>
                <td>{props.formData.vizsga_datuma}</td>
                <td className="btn"><button onClick={() => jelentkezesBtnClick(props.formData.vizsga_id)} ><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> {lejelentkezesBtn && <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button>} </td>
            </tr>
        </>
    )
}
export default VizsgaTable