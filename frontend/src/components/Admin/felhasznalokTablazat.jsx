import { useNavigate } from "react-router-dom";

const UsersTable = (props) => {
  const tdStyle = {
    animationDelay: `${props.index * 0.3}s`,
  };

  const navigate = useNavigate();

  const btnModosit = async (id) => {
    // e.preventDefault();
    navigate("/felhasznalojogosultsagmodositas", { state: { id: id } });
  };

  return (
    <>
      <tr className="fade-in-row" style={tdStyle}>
        <td className="id" style={tdStyle}>
          {props.formData.vezeteknev}
        </td>
        <td style={tdStyle}>{props.formData.keresztnev}</td>
        <td style={tdStyle}>{props.formData.email}</td>
        <td style={tdStyle}>
          {props.formData.jogkor_id == 1
            ? "tanuló"
            : props.formData.jogkor_id == 2
            ? "oktató"
            : props.formData.jogkor_id == 3
            ? "vizsgabiztos"
            : "admin"}
        </td>
        <td style={{ animationDelay: `${props.index * 0.3}s` }} className="btn">
          <button
            type="submit"
            onClick={() => btnModosit(props.formData.felhasznalo_id)}
          >
            <i className="fas fa-sign-in-alt"></i> Jogosultság változtatása
          </button>
        </td>
      </tr>
    </>
  );
};
export default UsersTable;
