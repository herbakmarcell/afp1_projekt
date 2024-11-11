import React from "react";
import "../../Css/elorehaladas.css"
const Elorehaladas = () =>{
    return (
        <>
        <div className="elorehaladasDiv">
            <div className="imgDiv">
                <h1>Előrehaladás</h1>
                <img src="blackCar2.png" alt="Black car" />
            </div>

            <div class="w3-container"  >

        <div class="w3-light-black" >
        <div class="w3-container  w3-center" style={{width:"25%", background: "#fbc304", color: "black", fontWeight: "bold"}} >25%</div>
        </div>

        <div class="w3-light-black"  >
        <div class="w3-container w3-red w3-center" style={{width:"50%", fontWeight: "bold"}}> <span style={{color: "black"}}>50%</span> </div>
        </div>
        <div class="w3-light-black">
        <div class="w3-container w3-blue w3-center" style={{width:"75%", color: "black", fontWeight: "bold"}}> <span style={{color: "black"}} >75%</span> </div>
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
                <button><i className='fas fa-caret-square-down'></i> Vizsgára jelentkezés</button>
            </div>
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
                    <tr>
                        <td className="id">1</td>
                        <td>Elméleti</td>
                        <td>Nincs</td>
                        <td>2024.12.12 12:00</td>
                        <td className="btn"><button><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button></td>
                    </tr>
                    <tr>
                        <td className="id">1111</td>
                        <td>Elméleti</td>
                        <td>Nincs</td>
                        <td>2024.12.12 12:00</td>
                        <td className="btn"><button><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button></td>
                    </tr>
                    <tr>
                        <td className="id">2222222</td>
                        <td>Elméleti</td>
                        <td>Nincs</td>
                        <td>2024.12.12 12:00</td>
                        <td className="btn"><button><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button></td>
                    </tr>
                    <tr>
                        <td className="id">1</td>
                        <td>Elméleti</td>
                        <td>Nincs</td>
                        <td>2024.12.12 12:00</td>
                        <td className="btn"><button><i className="fas fa-sign-in-alt"></i>  Jelentkezés  </button> <button><i className="fas fa-sign-out-alt"></i> Lejelentkezés</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    )
}
export default Elorehaladas