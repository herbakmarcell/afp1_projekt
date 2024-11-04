import { useNavigate } from "react-router-dom";

const BejelentkezesForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt jönne a bejelentkezési logika (auth)
    // Mivel most nem releváns, közvetlenül navigálunk
    navigate("/fooldal");
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <Email />
        <Jelszo />
        <div className="FormDivElement">
          <input type="submit" value="Bejelentkezés" />
        </div>
      </form>
    </div>
  );
};

const Email = () => {
  return (
    <div className="FormDivElement">
      <span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10sXUPcODWCwePZ-wEWZx1BoczFgid58tug&s"
          alt="emailIcon"
        />
      </span>
      <input type="email" name="" id="" placeholder="E-mail" />
    </div>
  );
};

const Jelszo = () => {
  return (
    <div className="FormDivElement">
      <span>
        <img
          src="https://img.freepik.com/premium-vector/free-vector-padlock-icon-lock-locked_901408-572.jpg"
          alt="lockIcon"
        />
      </span>
      <input type="password" name="" id="" placeholder="********" />
    </div>
  );
};

export default BejelentkezesForm;
