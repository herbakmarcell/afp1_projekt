import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const VizsgaTable = (props) =>{
    
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [background, setBackground] = useState({backgroundColor: 'none'})
    const [lejelentkezesBtn, setLejelentkezesBtn] = useState(false)

    const updateButtonState = () => {
        if (props.formData.statusz === 'foglalva') {
            setBackground({ backgroundColor: 'darkred' });
            setLejelentkezesBtn(true);
        } else {
            setBackground({ backgroundColor: 'none' });
            setLejelentkezesBtn(false);
        }
    };

    useState(() => {
        updateButtonState();
    }, [props.formData.statusz]);

    
    const jelentkezesBtnClick = async (vizsga_id) => {
        try {
            const resp = await axios.post("http://localhost:5000/api/vizsga/jelentkezes", {vizsga_id}, {withCredentials: true})
            const data = await resp.data
            
            if(data.sikeres === "Success"){
                
                props.setSiker(prevState => !prevState)
                setBackground({backgroundColor:'darkred'})
                setLejelentkezesBtn(true)
                navigate("/elorehaladas")
                
            }
        } catch (err) {
            setError(err.response.data.error || err.response.data.message)
        }
       
    }


    const leJekentkezesBtnClick = async (vizsga_id) =>{
        
        try {
            const resp = await axios.delete("http://localhost:5000/api/vizsga/lejelentkezes", {
                data: { vizsga_id }, 
                withCredentials: true
            })
            const data = await resp.data
            if(data.message === "Sikeresen lejelentkeztél a vizsgáról."){
                props.setSiker(prevState => !prevState)
                setBackground({backgroundColor: 'none'})
                setLejelentkezesBtn(false)
                navigate("/elorehaladas")
                
            }
        } catch (err) {
            setError(err.response.data.error || err.response.data.message)
        }
    }   

    return (
        <>      
                {error && <td colSpan={5} >{error}</td>}
                
            <tr>
                
                <td className="id">{props.formData.vizsga_id}</td>
                <td>{props.formData.vizsga_tipus}</td>
                <td>{props.formData.vizsgabiztos_neve != null ? props.formData.vizsgabiztos_neve : "Nincsen vizsgabiztos a vizsgán"}</td>
                <td>{props.formData.vizsga_datuma}</td>
                <td className="btn"> 

                    {!lejelentkezesBtn && <button style={background} onClick={() => jelentkezesBtnClick(props.formData.vizsga_id)} ><i className="fas fa-sign-out-alt"></i> Jelentkezés</button> }
                    {lejelentkezesBtn && <button style={background} onClick={() => leJekentkezesBtnClick(props.formData.vizsga_id)} ><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button> }
                   
                    
                    </td>
            </tr>
        </>
    )
}
export default VizsgaTable