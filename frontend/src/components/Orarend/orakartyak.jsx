import { format } from "date-fns";

const Orak = (props) => {
  return (
    <div className="blackbgc">
      <div key={props.index} className="card">
        <h2 style={{ color: "#333" }}>{props.formData.Orak.cim}</h2>
        <p>
          <strong>Óra eleje: </strong>
          {format(
            new Date(props.formData.Orak.idopont_eleje),
            "yyyy MM dd hh:mm"
          )}
        </p>
        <p>
          <strong>Óra vége: </strong>
          {format(
            new Date(props.formData.Orak.idopont_vege),
            "yyyy MM dd hh:mm"
          )}
        </p>
        <p>
          <strong>Helyszín:</strong> {props.formData.Orak.helyszin}
        </p>
        <p>
          <strong>Név:</strong> {props.formData.Orak.ora_id}
        </p>
        <div className="oraModDiv">
          <button>Módosít</button>
        </div>
      </div>
    </div>
  );
};

export default Orak;
