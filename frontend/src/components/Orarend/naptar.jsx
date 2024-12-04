import React, { useContext, useEffect, useState } from "react";
import "../../Css/naptar.css";
import axios from "axios";
import Orak from "./orakartyak";
import AuthContext from "../../AuthContext.jsx";

const Calendar = () => {
  const [data, setData] = useState([]);
  const [hiba, setHiba] = useState("");
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    const users = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/orarend/orarendLekeres",
          { withCredentials: true }
        );
        const adat = resp.data;
        if (adat) {
          //setVizsgaBtn(true)
          setData(adat);
          console.log(adat);
        }
      } catch (error) {
        console.log(error);
        setHiba(error.response.data.err);
      }
    };
    users();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="orarendMainDiv">
      {hiba && (
        <>
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {hiba}
          </p>
          <img src={nolesson} style={{ width: "70%" }} alt="" />
        </>
      )}
      <div className="orarendCardsDiv">
        {currentItems.map((formData, index) => (
          <Orak key={index} formData={formData} index={index} user={user} />
        ))}
      </div>

      <div className="naptarButtonDiv">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Előző
        </button>
        <span style={{ margin: "0 8px" }}>
          {currentPage}. oldal a(z) {totalPages}-ból
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Következő
        </button>
      </div>
    </div>
  );
};

export default Calendar;
