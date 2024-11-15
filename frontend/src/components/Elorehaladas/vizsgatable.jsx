import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const VizsgaTable = (props) =>{
    const [lejelentkezesBtn, setLejelentkezesBtn] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();
    console.log(props)
    const jelentkezesBtnClick = async (vizsga_id) => {
        try {
            const resp = await axios.post("http://localhost:5000/api/vizsga/jelentkezes", {vizsga_id}, {withCredentials: true})
            const data = await resp.data
            if(data.sikeres === "Success"){
                navigate("/elorehaladas")
                setLejelentkezesBtn(true)
            }
        } catch (err) {
            setError(err.response.data.error || err.response.data.message)
        }
       
    }
    return (
        <>
            <tr>
                {error}
                <td className="id">{props.formData.vizsga_id}</td>
                <td>{props.formData.vizsga_tipus}</td>
                <td>{props.formData.vizsgabiztos_neve}</td>
                <td>{props.formData.vizsga_datuma}</td>
                <td className="btn"> {lejelentkezesBtn ? 
                    <>
                    <button style={{backgroundColor: "darkred"}} ><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button> 
                    </> :
                    <button onClick={() => jelentkezesBtnClick(props.formData.vizsga_id)} ><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> } </td>
            </tr>
        </>
    )
}
export default VizsgaTable