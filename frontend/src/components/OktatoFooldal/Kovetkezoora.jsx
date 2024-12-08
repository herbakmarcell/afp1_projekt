import { format } from "date-fns";

const KovetkezoOra = (props) => {
  console.log(props.formData);
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default KovetkezoOra;
