import { Link } from "react-router-dom"
import "../../Css/notFound.css"
import { useEffect } from "react"

const NotFound = () =>{


    useEffect(() =>{
        document.body.style.backgroundColor = 'red';
        return () => {
          document.body.style.backgroundColor = '';
        };
    },[])

    return (
        <>
        <div class="container">
            <h1 className="h1404">404</h1>
            <p className="p404">Az oldal, amit keresel, nem található.</p>
            <p className="p404"><Link to="/" className="a404" >Vissza a kezdőlapra</Link></p>
        </div>
        </>
    )
}
export default NotFound