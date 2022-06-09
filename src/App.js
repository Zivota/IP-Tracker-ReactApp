import AdressTracker from "./components/AdressTracker";
import InfoHolder from "./components/InfoHolder";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import classes from "./app.module.css";

const App = () => {
  const [useData, setUseData] = useState({
    ip: "",
    locationRegion: "",
    locationCountry: "",
    timezone: "",
    isp: "",
    position: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const apiKey = "at_tkzJJRf3Isml5Ns4vr50e9L3UKeIo";

  const fetchData = async (defaultIp) => {
    let response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
    );

    if (defaultIp) {
      response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${defaultIp}`
      );
    }

    let data = await response.json();
    setUseData({
      ip: data.ip,
      locationRegion: data.location.city,
      locationCountry: data.location.country,
      timezone: data.location.timezone,
      isp: data.isp,
      position: [parseInt(data.location.lat), parseInt(data.location.lng)],
    });
    setIsLoading(false);
    setIsMapLoaded(true);
    console.log(useData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapLoaded = (
    <MapContainer
      center={useData.position}
      zoom={13}
      scrollWheelZoom={false}
      className={classes.leafletContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={useData.position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );

  const loaded = (
    <>
      <AdressTracker fetchData={fetchData} setIsMapLoaded={setIsMapLoaded} />
      <InfoHolder dataInfo={useData} />
      {isMapLoaded ? mapLoaded : null}
    </>
  );

  const notLoaded = <p> Loading ...</p>;

  return <div className="app"> {isLoading ? notLoaded : loaded} </div>;
};

export default App;
