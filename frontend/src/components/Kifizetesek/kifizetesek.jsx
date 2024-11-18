import axios from "axios"
import "../../Css/kifizetesek.css"
import { useEffect, useState } from "react"

const Kifizetesek = () => {
    const [error, setError] = useState("")
    const [sikeres, setSikeres] = useState(false)
    const [data, setData] = useState([])
    const [osszeg, setOsszeg] = useState([])
    const [kifizetve, setKifizetve] = useState([])
    const [formData, setFormData] = useState([{
        "kartya": 0,
        "nev": "",
        "kod": 0
    }])
    const [formError, setFormError] = useState([{}])

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
                if (data) {
                    setData(data)
                    console.log(data)
                    setOsszeg(data.map(d => {
                        if(d.kifizetve === false){
                            return d.osszeg
                        }else{
                            return 0
                        }
                    }))
                    setSikeres(true)
                }
            } catch (err) {
                setError(err.response.data.message || err.response.data.message)
            }
        }
        kifizetes()
    }, [kifizetve])


    const formDataHandler = (e) =>{
        const {name, value} = e.target
        setFormData(prevData =>({
           ...prevData,
           [name]: value 
        }))
    }

    const kifizetesBtn = (e) => {
        e.preventDefault()

        if(formData.map(f => f.kartya === null)){
            setFormError(prevError =>({
                ...prevError,
                error: "Nem jó kártyaszámot adott meg"
            }))
        }else
        if(formData.map(f => f.kod === null)){
            setFormError(prevError =>({
                ...prevError,
                error: "Nem adott meg kódot"
            }))
        }

        const kifizetes = async () => {
            try {
                const resp = await axios.put("http://localhost:5000/api/kifizetes/vegrehajtas", {},{ withCredentials: true })
                const data = resp.data
                setKifizetve(true)
            }
            catch (err) {
                console.log(err.response)
            }
        }
        kifizetes()
    }



    

    return <>
        {console.log(osszeg)}
        {<h2 style={{ color: "red", textAlign: "center" }} >{error}</h2>}
        {sikeres && <div className="kifizetesek">
            <div className="kifizetes">
                <h2>Kifizetéseim </h2>
            </div>
            <div className="kifizetektable">
                {data.map((d, i) => {
                    if(d.kifizetve === true){
                        return (
                            <div className="item" key={i} style={{background: "green" }}  >
                                <p>{d.targy}</p>
                                <span className="price">{d.osszeg} Ft</span>
                            </div>
                        )
                    }else{
                        return (
                        
                            <div className="item" key={i}  >
                                <p>{d.targy}</p>
                                <span className="price">{d.osszeg} Ft</span>
                            </div>
                        )
                    }
                    
                })}
                <div className="total">
                    
                        {osszeg.map(o =>  {
                            if(o > 0){
                                sum += o
                            }
                        })}
                        {sum === 0 ? <p>Nincs kifizetéseid</p> : <p>Összesen:   {sum} Ft</p>}
                </div>
            </div>
            <div className="fizetesForm">
                <h2>Adatok megadása</h2>
                {<h4 style={{color:"red"}} >{formError.error}</h4>}
                <form action="" >
                    <div className="kozepre">
                        <label htmlFor="kartya">Kártyaszám
                            <input type="number" name="kartya" id="kartya" 
                            onChange={formDataHandler}
                            />
                        </label>
                    </div>

                    <div className="kozepre">
                        <label htmlFor="nev">Név
                            <input type="text" name="nev" id="nev" placeholder="Vezetéknév Keresztnév"
                            onChange={formDataHandler}
                            />
                        </label>
                    </div>


                    <div className="kozepre">
                        <label htmlFor="kod">CVV kód
                            <input type="number" name="kod" id="kod"
                            onChange={formDataHandler} 
                            placeholder="123" />
                        </label>
                    </div>

                    <div className="kozepre">
                        <label htmlFor="kod">Lejárati dátum
                            <input type="number" name="kod" id="kod" 
                            onChange={formDataHandler}
                            placeholder="123" />
                        </label>
                    </div>

                    <div className="kozepre">

                        <input type="submit" name="kuldes" id="kuldes" className="kuldes" value={"Kifizetés"} onClick={kifizetesBtn} />

                    </div>
                </form>
            </div>
        </div>}

    </>
}
export default Kifizetesek