import { useState, useEffect } from "react";
import axios from "axios";

const useElorehaladas = (siker) => {
  // Az állapotok létrehozása
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [eu, setEu] = useState(false);
  const [gyak, setGyak] = useState(false);
  const [elmeleti, setElmeleti] = useState(false);

  // API hívás, amit a hook végez
  useEffect(() => {
  
    const elorehaladas = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/tanulok/sajatElorehaladas",
          { withCredentials: true }
        );
        const responseData = await resp.data;
        if (responseData) {
          setData(responseData);
          setGyak(responseData.vizsgak.gyakorlati);
          setEu(responseData.vizsgak.eu);
          setElmeleti(responseData.vizsgak.elmeleti);
        }
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message || "Valami hiba történt");
      }
    };

    elorehaladas();
  }, [siker])

  // A hook visszatérési értéke
  return { data, error, eu, gyak, elmeleti }
};

export default useElorehaladas;