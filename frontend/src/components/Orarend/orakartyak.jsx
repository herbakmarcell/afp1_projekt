import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Orak = (props) => {
  const navigate = useNavigate();
  const btnModosit = (e) => {
    e.preventDefault();
    navigate("/oraModositas", { state: props.formData });
  };

  const btnTorles = async (e) => {
    e.preventDefault();
    const ora_id = props.formData.Orak.ora_id;
    try {
      const resp = await axios.delete(
        "http://localhost:5000/api/orarend/oraTorles",
        {
          data: { ora_id },
          withCredentials: true,
        }
      );
      props.onRefresh();
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  };

  console.log(props);
  return (
    <div className="blackbgc">
      <div key={props.index} className="card">
        <h2 style={{ color: "#333" }}>{props.formData.Orak.cim}</h2>
        <p>
          <strong>Óra eleje: </strong>
          {format(
            new Date(props.formData.Orak.idopont_eleje),
            "yyyy MM dd HH:mm"
          )}
        </p>
        <p>
          <strong>Óra vége: </strong>
          {format(
            new Date(props.formData.Orak.idopont_vege),
            "yyyy MM dd HH:mm"
          )}
        </p>
        <p>
          <strong>Helyszín:</strong> {props.formData.Orak.helyszin}
        </p>
        <p>
          {props.user.user.jogkor_id === 1 ? (
            <>
              <strong>Név:</strong> {props.formData.Tanar.vezeteknev}{" "}
              {props.formData.Tanar.keresztnev}
            </>
          ) : props.user.user.jogkor_id === 2 ? (
            <>
              <strong>Név:</strong> {props.formData.Tanulo.vezeteknev}{" "}
              {props.formData.Tanulo.keresztnev}
            </>
          ) : props.user.user.jogkor_id === 4 ? (
            <>
              <strong>Tanár neve:</strong> {props.formData.Tanar.vezeteknev}{" "}
              {props.formData.Tanar.keresztnev}
              <br />
              <strong>Tanuló neve:</strong> {props.formData.Tanulo.vezeteknev}{" "}
              {props.formData.Tanulo.keresztnev}
            </>
          ) : (
            ""
          )}
        </p>
        {props.user.user.jogkor_id === 2 ? (
          <div className="oraModDiv">
            <button type="submit" onClick={btnModosit}>
              <i className="fas fa-pen"></i>
            </button>
            <button type="submit" onClick={btnTorles}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Orak;
