import classes from "./InfoHolder.module.css";

const InfoHolder = (props) => {
  let data = props.dataInfo;

  return (
    <div className={classes.infoHolder}>
      <div className={classes.info}>
        <h5>IP ADRESS</h5>
        <h3>{data.ip}</h3>
        <span></span>
      </div>
      <div className={classes.info}>
        <h5>LOCATION</h5>
        <h3>
          {data.locationRegion}, {data.locationCountry}
        </h3>
        <span></span>
      </div>
      <div className={classes.info}>
        <h5> TIMEZONE</h5>
        <h3>{data.timezone}</h3>
        <span></span>
      </div>
      <div className={classes.info}>
        <h5>ISP</h5>
        <h3>{data.isp}</h3>
      </div>
    </div>
  );
};

export default InfoHolder;
