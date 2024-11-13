const UsersTable = (props) => {
  return (
    <>
      <tr>
        <td className="id">{props.formData.vezeteknev}</td>
        <td>{props.formData.vezeteknev}</td>
        <td>{props.formData.vezeteknev}</td>
        <td>{props.formData.vezeteknev}</td>
        <td className="btn">
          <button>
            <i className="fas fa-sign-in-alt"></i> Jelentkezés{" "}
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
