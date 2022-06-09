import classes from "./AdressTracker.module.css";
import arrowImg from "../images/icon-arrow.svg";
import { useRef } from "react";

const AdressTracker = ({ fetchData, setIsMapLoaded }) => {
  let ipRef = useRef();

  const getIp = (e) => {
    e.preventDefault();
    setIsMapLoaded(false);
    fetchData(ipRef.current.value);
  };

  return (
    <div className={classes.adresstracker}>
      <h1>IP Adress Tracker</h1>
      <form className={classes.inputHolder} onSubmit={getIp}>
        <input ref={ipRef} type="text" placeholder="Search for any IP adress" />
        <button>
          <img alt="arrow" src={arrowImg} />
        </button>
      </form>
    </div>
  );
};

export default AdressTracker;
