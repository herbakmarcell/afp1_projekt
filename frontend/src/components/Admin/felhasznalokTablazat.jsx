import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersTable = (props) => {
  console.log(props.formData);
  const tdStyle = {
    animationDelay: `${props.index * 0.3}s`,
  };
  const navigate = useNavigate();

  const btnModosit = async (id) => {
    // e.preventDefault();
    navigate("/felhasznalojogosultsagmodositas", { state: { id: id } });
  };

  const btnTorles = async (felhasznalo_id) => {
    try {
      const resp = await axios.delete(
        "http://localhost:5000/api/users/deleteUser",
        {
          data: { felhasznalo_id },
          withCredentials: true,
        }
      );
      props.onRefresh();
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  };

  const btnAktivra = async (felhasznalo_id) => {
    try {
      const resp = await axios.put(
        "http://localhost:5000/api/users/activateUser",
        {
          felhasznalo_id,
        },
        { withCredentials: true }
      );
      props.onRefresh();
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  };

  return (
    <>
      <tr className="fade-in-row" style={tdStyle}>
        <td className="id" style={tdStyle}>
          {props.formData.vezeteknev}
        </td>
        <td style={tdStyle}>{props.formData.keresztnev}</td>
        <td style={tdStyle}>{props.formData.email}</td>
        <td style={tdStyle}>{props.formData.Jogkorok.jogkor}</td>
        <td style={tdStyle}>{props.formData.aktiv ? "Aktív" : "Inaktív"}</td>
        <td style={{ animationDelay: `${props.index * 0.3}s` }} className="btn">
          <button
            type="submit"
            onClick={() => btnModosit(props.formData.felhasznalo_id)}
          >
            <i className="fas fa-pen"></i> Jogosultság változtatása
          </button>
          {props.formData.aktiv ? (
            <button
              type="submit"
              onClick={() => btnTorles(props.formData.felhasznalo_id)}
            >
              <i className="fas fa-trash"></i> Törlés
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => btnAktivra(props.formData.felhasznalo_id)}
            >
              <i className="fas fa-pen"></i> Engedélyezés
            </button>
          )}
        </td>
      </tr>
    </>
  );
};
export default UsersTable;
