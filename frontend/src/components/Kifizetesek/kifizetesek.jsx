import "../../Css/kifizetesek.css"
import { useState } from "react"

const Kifizetesek = () => {
    

    return <>
        <div className="kifizetesek">
            <div className="kifizetes">
                <h2>Kifizetéseim </h2>
            </div>
            <div className="kifizetektable"   >
                <div className="item" style={{backgroundColor:"green"}} >
                    <p>Elméleti vizsga</p>
                    <span className="price">50000 Ft</span>
                </div>
                <div className="item">
                    <p>Elméleti vizsga</p>
                    <span className="price">50000 Ft</span>
                </div>
                <div className="item">
                    <p>Elméleti valmi valami</p>
                    <span className="price">1000000000 Ft</span>
                </div>
                <div className="total">
                    <p >Összesen: 1200000 Ft</p>
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
        </div>
    </>
}
export default Kifizetesek