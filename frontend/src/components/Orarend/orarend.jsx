import React, { useContext, useEffect, useState } from "react";
import "../../Css/naptar.css";
import axios from "axios";
import Orak from "./orakartyak.jsx";
import AuthContext from "../../AuthContext.jsx";

const Calendar = (props) => {
  const [data, setData] = useState([]);
  const [hiba, setHiba] = useState("");
  const { user } = useContext(AuthContext);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const users = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:5000/api/orarend/orarendLekeres",
        { withCredentials: true }
      );
      const adat = resp.data;
      if (adat) {
        setData(adat);
        console.log(adat);
      }
    } catch (error) {
      console.log(error);
      setHiba(error.response.data.err);
    }
  };

  useEffect(() => {
    users();
  }, [props.orarendFrissites]);

  // Handle dynamic items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1000) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4); // Adjust as needed for larger screens
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Set initial value
    handleResize();

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="orarendCardsDiv">
        {currentItems.map((formData, index) => (
          <Orak
            key={index}
            formData={formData}
            index={index}
            user={user}
            onRefresh={users}
          />
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
