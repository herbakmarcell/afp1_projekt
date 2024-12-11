const OktatoTanuloiLista = (props) => {
  const tdStyle = {
    animationDelay: `${props.index * 0.3}s`,
  };
  return (
    <>
      <div className="fade-in-row" style={tdStyle}>
        <div className="tanuloListaDI">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            alt=""
          />
        </div>
        <div className="tanuloListaInfo">
          <div className="id" style={tdStyle}>
            Név: {props.formData.vezeteknev} {props.formData.keresztnev}
          </div>
          <div style={tdStyle}>E-mail: {props.formData.email}</div>
          <div
            style={{ animationDelay: `${props.index * 0.3}s` }}
            className="btn"
          ></div>
        </div>
      </div>
    </>
  );
};
export default OktatoTanuloiLista;
