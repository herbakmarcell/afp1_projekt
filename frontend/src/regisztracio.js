import { useNavigate } from "react-router-dom";

const RegisztracióFormDiv = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt jönne a regisztrációs logika
    // Mivel most nem releváns, közvetlenül navigálunk a bejelentkezéshez
    navigate("/bejelentkezes");
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
              alt="firstnameIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Vezetéknév" />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
              alt="lastnameIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Keresztnév" />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPNzqYRq287b9xJql_r-MmWqs6thrG9NKig&s"
              alt="permissionIcon"
            />
          </span>
          <input type="text" name="" id="" placeholder="Jogosultság" />
        </div>
        <div className="FormDivElement">
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6Ba0qVTby-k31mhqoRyisNvb2ChdkcV9pA&s"
              alt="calculatoricon"
            />
          </span>
          <input type="number" name="" id="" placeholder="00000000" />
        </div>
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

export default RegisztracióFormDiv;
