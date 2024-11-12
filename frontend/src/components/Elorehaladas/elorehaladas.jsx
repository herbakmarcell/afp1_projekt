import React, { useEffect, useState } from "react";
import "../../Css/elorehaladas.css"
import VizsgaTable from "./vizsgatable.jsx";
import axios from 'axios'
const Elorehaladas = () =>{

    const [vizsgaBtn, setVizsgaBtn] = useState(false)
    const [data, setData] = useState([])
    
    useEffect(() =>{
        //TODO: 
        //ide kerül majd akkor az, hogy beolvassuk a előrehaladást és megnézzük, hogy a gyakorlati vizsgánál 30-e az óraszám... 
    },[])

    const vizsgaBtnClick = () => {

        const vizsga = async () => {
            try {
                const resp = await axios.get("http://localhost:5000/api/vizsga/vizsgak")
                const data = resp.data
                if(data){
                    //setVizsgaBtn(true)
                    setData(data)
                }
            } catch (error) {
                console.log(error)
            }

        }
        vizsga()

        setVizsgaBtn(true)
    }   

    return (
        <>
        <div className="elorehaladasDiv">
            <div className="imgDiv">
                <h1>Előrehaladás</h1>
                <img src="blackCar2.png" alt="Black car" />
            </div>

            <div className="w3-container"  >

        <div className="w3-light-black" >
        <div className="w3-container  w3-center" style={{width:"25%", background: "#fbc304", color: "black", fontWeight: "bold"}} >25%</div>
        </div>

        <div className="w3-light-black"  >
        <div className="w3-container w3-red w3-center" style={{width:"50%", fontWeight: "bold"}}> <span style={{color: "black"}}>50%</span> </div>
        </div>
        <div className="w3-light-black">
        <div className="w3-container w3-blue w3-center" style={{width:"75%", color: "black", fontWeight: "bold"}}> <span style={{color: "black"}} >75%</span> </div>
        </div>
        </div>
            <div className="vizsgaBtn">
                <div className="btn">
                    <div className="euBtn"> <p> <i className="fas fa-medkit"></i>  Eü vizsga</p></div>
                    <div className="elmeletiBtn"><p><i className="fas fa-book-open"></i> Elméleti vizsga</p></div>
                    <div className="gyakorlatiBtn"><p><i className="fas fa-car"></i> Gyakorlati vizsga</p></div>
                </div>
            </div>
            <div className="vizsgaJelentkezes">
                <button onClick={vizsgaBtnClick} ><i className='fas fa-caret-square-down'></i> Vizsgára jelentkezés</button>
            </div>
            
            {vizsgaBtn && <>
                <div className="vizsgaTable">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Vizsga Típusa</th>
                        <th>Vizsgabiztos</th>
                        <th>Vizsga időpontja</th>
                        <th className="jelentkezes">Jelentkezés</th>
                    </tr>
                   {data.map((formData) => {(
                        <VizsgaTable formData={formData}  />
                   )})}
                    </tbody>
                </table>
            </div>
            </>}
            
        </div>
        </>
    )
}
export default Elorehaladas