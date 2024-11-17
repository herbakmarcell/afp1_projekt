import axios from "axios"
import "../../Css/kifizetesek.css"
import { useEffect, useState } from "react"

const Kifizetesek = () => {
    const [error, setError] = useState("")
    const [sikeres, setSikeres] = useState(false)
    const [data, setData] = useState([])
    const [osszeg, setOsszeg] = useState([])
    let sum = 0
   
    useEffect(() => {
        // Hozzáadjuk a 'hatter' osztályt a body-hoz
        document.body.classList.add('hatter');
    
        // Takarítás, amikor a komponens elhagyja az oldalt
        return () => {
          document.body.classList.remove('hatter');
        };
      }, [])


    useEffect(() => {
        const kifizetes = async () => {
            try {
                const resp = await axios.get("http://localhost:5000/api/kifizetes/kifizetesek", { withCredentials: true })
                const data = await resp.data
                if(data){
                    setSikeres(true)
                    setData(data)
                    console.log(data)
                    setOsszeg(data.map(d =>d.osszeg))
                }
            } catch (err) {
                setError(err.response.data.message || err.response.data.message)
            }
        }
        kifizetes()
    }, [])

    return <>
    {<h2 style={{color:"red", textAlign:"center"}} >{error}</h2>}
    {sikeres && <div className="kifizetesek">
            <div className="kifizetes">
                <h2>Kifizetéseim </h2>
            </div>
            <div className="kifizetektable">

                {data.map((d, i) => {
                    return(
                        <div className="item" key={i} >
                            <p>{d.targy}</p>
                            <span className="price">{d.osszeg} Ft</span>
                        </div>
                    )
                })}
                <div className="total">
                    <p >{sum === 0 && osszeg.map(o =>  {
                            sum += o
                    })} {sum === 0 ? " Nincsnenek kifizetéseid" : "Összesen: " +  sum + " Ft"}</p>
                </div>
            </div>
           <div className="fizetesForm">
                <h2>Adatok megadása</h2>
                <form action="">
                    <div className="kozepre">
                    <label htmlFor="kartya">Kártyaszám
                        <input type="number" name="kartya" id="kartya" />
                    </label>
                    </div>
                    
                    <div className="kozepre">
                    <label htmlFor="nev">Név
                        <input type="text" name="nev" id="nev" placeholder="Vezetéknév Keresztnév" />
                    </label>
                    </div>
                    
                    
                    <div className="kozepre">
                    <label htmlFor="kod">CVV kód
                        <input type="number" name="kod" id="kod" placeholder="123" />
                    </label>
                    </div>

                    <div className="kozepre">
                    <label htmlFor="kod">Lejárati dátum
                        <input type="number" name="kod" id="kod" placeholder="123" />
                    </label>
                    </div>
                    
                    <div className="kozepre">
                    
                        <input type="submit" name="kuldes" id="kuldes" className="kuldes" value={"Kifizetés"} />
                    
                    </div>
                </form>
            </div>
        </div>}
        
    </>
}
export default Kifizetesek