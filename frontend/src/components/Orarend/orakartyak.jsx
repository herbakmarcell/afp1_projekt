import axios from "axios";
import { format, subHours } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Toast } from "primereact/toast";

const Orak = (props) => {
  const navigate = useNavigate();
  const btnModosit = (e) => {
    e.preventDefault();
    navigate("/oraModositas", { state: props.formData });
  };

  const toast = useRef(null);
  const toastCenter = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Sikeres törlés",
      detail: "Az óra törölve lett",
      life: 2000,
    });
  };

const ora_eleje_datum = () =>{
    // Az időpont, amit formázni szeretnél
  const dateString = props.formData.Orak.idopont_eleje;  // Ezt az időpontot kivonjuk
  const date = new Date(dateString);  // Átalakítjuk a dátumot Date objektummá

  // 1 óra kivonása
  const updatedDate = subHours(date, 1);

  // A formázott dátum
  const formattedDate = format(updatedDate, 'yyyy MM dd HH:mm');

  return formattedDate  // A kivont dátum
}

const ora_vege_datum = () =>{
  // Az időpont, amit formázni szeretnél
  const dateString = props.formData.Orak.idopont_vege;  // Ezt az időpontot kivonjuk
  const date = new Date(dateString);  // Átalakítjuk a dátumot Date objektummá

  // 1 óra kivonása
  const updatedDate = subHours(date, 1);

  // A formázott dátum
  const formattedDate = format(updatedDate, 'yyyy MM dd HH:mm');

  return formattedDate  // A kivont dátum
}

  const showError = (props) => {
    const errorMess = props;
    toastCenter.current.show({
      severity: "error",
      summary: "HIBA!",
      detail: errorMess,
      life: 2000,
    });
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
      showSuccess();
      setTimeout(() => {
        props.onRefresh();
      }, 1000);
    } catch (error) {
      console.error("Hiba történt:", error);
      showError(error.response.data.err);
    }
  };

  console.log(props);
  return (
    <div className="blackbgc">
      <Toast ref={toast} />
      <Toast ref={toastCenter} position="center" />
      <div key={props.index} className="card">
        {console.log(ora_eleje_datum())}
        
        <h2 style={{ color: "#333" }}>{props.formData.Orak.cim}</h2>
        <p>
          <strong>Óra eleje: </strong>
          {ora_eleje_datum()}
        </p>
        <p>
          <strong>Óra vége: </strong>
          { ora_vege_datum()}
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
