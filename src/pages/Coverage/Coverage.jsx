import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";

const Coverage = () => {
  const position = [21.7679, 78.8718];
  const loaderData = useLoaderData();
  const mapRef = useRef(null);

  const handelSearch = (e) => {
    e.preventDefault();

    const searchData = e.target.location.value.toLowerCase();
    const district = loaderData.find( c => c.district.toLowerCase().includes(searchData));

    if(district){
        const cordinate = [district.latitude, district.longitude];
        console.log(district, cordinate)
        mapRef.current.flyTo(cordinate, 14);
    }
  }
  return (
    <div className="p-10 bg-white rounded-2xl space-y-6">
      <h2 className="sectionTitle">We are available in 64 districts</h2>

      <form onSubmit={handelSearch} className="w-sm flex items-center border rounded-full p-2 shadow-sm">
        {/* Search Icon */}
        <IoSearchOutline className="text-2xl text-gray-500 ml-3" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search here"
          name="location"
          className="flex-1 bg-transparent px-3 py-2 outline-none text-sm"
        />

        {/* Button */}
        <button className="btn bg-yellow-300 rounded-full px-8 border-0 text-black font-semibold">
          Search
        </button>
      </form>
      <div className="w-full h-125">
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          className="h-125"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {loaderData.map((data, idx) => (
            <Marker key={idx} position={[data.latitude, data.longitude]}>
              <Popup>
                <strong>{data.city}</strong> <br />{" "}
                {data.covered_area.join(", ")} <br /> {data.phone}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
