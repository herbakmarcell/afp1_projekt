const UsersTable = (props) => {
  const tdStyle = {
    animationDelay: `${props.index * 0.3}s`,
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
          <button>
            <i className="fas fa-sign-in-alt"></i> Jogosultság változtatása{" "}
          </button>{" "}
          {/* {lejelentkezesBtn && (
            <button>
              <i className="fas fa-sign-out-alt"></i> Lejelentkezés
            </button>
          )}{" "} */}
        </td>
      </tr>
    </>
  );
};
export default UsersTable;
