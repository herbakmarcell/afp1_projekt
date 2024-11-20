import axios from "axios"
import "../../Css/kifizetesek.css"
import { useEffect, useState } from "react"

const Kifizetesek = () => {
    const [error, setError] = useState("")
    const [sikeres, setSikeres] = useState(false)
    const [data, setData] = useState([])
    const [osszeg, setOsszeg] = useState([])
    const [kifizetve, setKifizetve] = useState([])
    const [formData, setFormData] = useState({
        "kartya": "",
        "nev": "",
        "kod": "",
        "lejaratiDatum" : ""
    })
    const [formError, setFormError] = useState({
        "kartya": "",
        "nev": "",
        "kod": "",
        "lejaratiDatum": 0     
    })
   

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
                        if (d.kifizetve === false) {
                            return d.osszeg
                        } else {
                            
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


    const formDataHandler = (e) => {
        const { name, value } = e.target

        let ertekek = value

        if(name === "kartya"){
            ertekek = ertekek.replace(/(\d{4})(?=\d)/g, '$1 ');
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: ertekek
        }))
    }

    const kifizetesBtn = (e) => {
        e.preventDefault()

        const errors = { kartya: "", nev: "", kod: "", lejaratiDatum : "" }
        
        if (formData.kartya === 0 || formData.kartya === null) {
            errors.kartya = "A kártyaszám nem lehet üres."
        }else{
            if(formData.kartya.replace(/\s+/g, "").length < 8){
                errors.kartya = `A kártyaszám túl rövid (${formData.kartya.replace(/\s+/g, "").length}) 8 karakter az elfogadott. `
            }
            else if(formData.kartya.replace(/\s+/g, "").length !== 8){
                errors.kartya = "A kártyaszám nem 8 karakter"
            }
        }
        if (formData.nev === "") {
            errors.nev = "A név mező értéke nem lehet üres."
        }else{
            if(!formData.nev.includes(" ")){
                errors.nev = "Nincs vezezéknév vagy keresztnév megadva."
            }
        }
        if (formData.kod < 3 || formData.kod === null) {
            errors.kod = "A CVV kód nem megfelelő."
        }else if(formData.kartya > 3){
            errors.kod = "A CVV kód nem lehet 3-nál hosszabb."
        }
        
        if(formData.lejaratiDatum === null || formData.lejaratiDatum === 0){
            errors.lejaratiDatum = "Nem adott meg lejárati dátumot."
        }
         if(formData.lejaratiDatum != null){
            const today = new Date().toISOString("YYYY-MM-DD").split('T')[0]
            const inputDatum = formData?.lejaratiDatum
            const datumFormatum = inputDatum
            
            if(datumFormatum < today){
                errors.lejaratiDatum = "A kártya lejárati dátuma nem lehet kisebb mint a mai dátum"
            }

                
        }
        
        

        setFormError(errors)


        const kifizetes = async () => {
            try {
                const resp = await axios.put("http://localhost:5000/api/kifizetes/vegrehajtas", {}, { withCredentials: true })
                const data = resp.data
                setKifizetve(true)
                
            }
            catch (err) {
                setError(err.response.data.message || err.response.data.message)
            }
        }
        if (!Object.values(errors).some((error) => error !== '')) {
            // Ha nincs hiba
            setFormData({
                "kartya": "",
                "nev": "",
                "kod": "",
                "lejaratiDatum" : ""
            })
            setFormError({
                "kartya": "",
                "nev": "",
                "kod": "",
                "lejaratiDatum" : ""
            })
            kifizetes()
        }
    }

    return <>
        
        {<h2 style={{ color: "red", textAlign: "center" }} >{error}</h2>}
        {sikeres && <div className="kifizetesek">
            <div className="kifizetes">
                <h2>Kifizetéseim </h2>
            </div>
            <div className="kifizetektable">
                {data.map((d, i) => {
                    if (d.kifizetve === true) {
                        return (
                            <div className="item" key={i} style={{ background: "green" }}  >
                                <p>{d.targy}</p>
                                <span className="price">{d.osszeg} Ft</span>
                            </div>
                        )
                    } else {
                        return (

                            <div className="item" key={i}  >
                                <p>{d.targy}</p>
                                <span className="price">{d.osszeg} Ft</span>
                            </div>
                        )
                    }

                })}
                <div className="total">

                    {osszeg.map(o => {
                        if (o > 0) {
                            sum += o
                        }
                    })}
                    {sum === 0 ? <p>Nincs kifizetéseid</p> : <p>Összesen:   {sum} Ft</p>}
                </div>
            </div>
            <div className="fizetesForm">
                <h2>Adatok megadása</h2>
                {formError.nev && <h4 style={{ color: "red" }}>{formError.nev}</h4>}
                {formError.kod && <h4 style={{ color: "red" }}>{formError.kod}</h4>}
                {formError.kartya && <h4 style={{ color: "red" }}>{formError.kartya}</h4>}
                {formError.lejaratiDatum !== 0 && <h4 style={{ color: "red" }}>{formError.lejaratiDatum}</h4>}
                <form action="" >
                    <div className="kozepre">
                        <label htmlFor="kartya">Kártyaszám
                            <input type="text" name="kartya" id="kartya"
                                onChange={formDataHandler}
                                value={formData.kartya}
                                placeholder="0000 0000"
                            />
                        </label>
                    </div>

                    <div className="kozepre">
                        <label htmlFor="nev">Név
                            <input type="text" name="nev" id="nev" placeholder="Vezetéknév Keresztnév"
                                onChange={formDataHandler}
                                value={formData.nev}
                            />
                        </label>
                    </div>


                    <div className="kozepre">
                        <label htmlFor="kod">CVV kód
                            <input type="number" name="kod" id="kod"
                                onChange={formDataHandler}
                                placeholder="123" 
                                value={formData.kod}
                                />
                                
                        </label>
                    </div>

                    <div className="kozepre">
                        <label htmlFor="kod">Lejárati dátum
                            <input type="date" name="lejaratiDatum" id="lejaratiDatum"
                                onChange={formDataHandler}
                                placeholder="YYYY.MM.DD" 
                                value={formData.lejaratiDatum}
                                />
                        </label>
                    </div>

                    <div className="kozepre">
                    <input type="button" name="kuldes" id="kuldes" className="kuldes" value={"Kifizetés"} onClick={kifizetesBtn} />

                    </div>
                </form>
            </div>
        </div>}

    </>
}
export default Kifizetesek