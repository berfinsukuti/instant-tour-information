// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
// import "./App.css";

// // Tour data
// const tours = [
//   {
//     name: "Küba Turları THY 29 Nisan 2024",
//     locations: [
//       { day: 1, city: "Havana", lat: 23.1136, lng: -82.3666 },
//       { day: 2, city: "Pinar Del Rio", lat: 22.4175, lng: -83.6987 },
//       { day: 3, city: "Havana", lat: 23.1136, lng: -82.3666 },
//       { day: 4, city: "Trinidad", lat: 21.8000, lng: -79.9833 },
//       { day: 5, city: "Trinidad", lat: 21.8000, lng: -79.9833 },
//       { day: 6, city: "Varadero", lat: 23.1568, lng: -81.2447 },
//       { day: 7, city: "Havana", lat: 23.1136, lng: -82.3666 },
//       { day: 8, city: "Havana", lat: 23.1136, lng: -82.3666 },
//       { day: 9, city: "İstanbul", lat: 41.0082, lng: 28.9784 },
//     ],
//     startDate: "2024-06-03",
//     endDate: "2024-06-12",    
//     guide: "Ahmet Mutlu",
//     capacity: 40,
//   },
//   {
//       name: "JAPONYA KORE TURLARI NRT 12 GÜN HER ŞEY DAHİL",
//       locations: [
//         { day: 1, city: "Tokyo", lat: 35.6895, lng: 139.6917},
//         { day: 2, city: "Tokyo", lat: 35.6895, lng: 139.6917},
//         { day: 3, city: "Tokyo", lat: 35.6895, lng: 139.6917},
//         { day: 4, city: "Tokyo", lat: 35.6895, lng: 139.6917},
//         { day: 5, city: "Tokyo", lat: 35.6895, lng: 139.6917},
//         { day: 6, city: "Osaka", lat: 34.6937, lng: 135.5023 },
//         { day: 7, city: "Osaka", lat: 34.6937, lng: 135.5023 },
//         { day: 8, city: "Osaka", lat: 34.6937, lng: 135.5023 },
//         { day: 9, city: "Seul", lat: 37.5665, lng: 126.9780  },
//         { day: 10, city: "Seul", lat: 37.5665, lng: 126.9780  },
//         { day: 11, city: "Seul", lat: 37.5665, lng: 126.9780  },
//         { day: 12, city: "İstanbul", lat: 41.0082, lng: 28.9784  },
//       ],
//       startDate: "2024-06-10",
//       endDate: "2024-06-22",    
//       guide: "Ahmet Mutlu",
//       capacity: 27,
//   },
// ];

// // Calculate current tour day
// const getCurrentTourDay = (startDate) => {
//   const start = new Date(startDate);
//   const now = new Date();
//   const diffTime = Math.abs(now - start);
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   return diffDays;
// };

// // Custom marker icon
// const customIcon = L.icon({
//   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   shadowSize: [41, 41],
// });

// function App() {
//   const [currentTourDay, setCurrentTourDay] = useState(getCurrentTourDay(tours[0].startDate));
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTourDay(getCurrentTourDay(tours[0].startDate));
//     }, 86400000); // Check once a day

//     return () => clearInterval(interval);
//   }, []);

//   if (currentTourDay > tours[0].locations.length) {
//     return <div>Tur bitmiştir.</div>;
//   }

//   const currentLocation = tours[0].locations[currentTourDay - 1];

//   return (
//     <div className="map-container">
//       <MapContainer center={[23.1136, -82.3666]} zoom={2} style={{ height: "100vh" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {currentTourDay <= tours[0].locations.length && (
//           <Marker position={[currentLocation.lat, currentLocation.lng]} icon={customIcon}>
//             <Popup>
//               <div>
//                 <h3>{tours[0].name}</h3>
//                 <p>Rehber: {tours[0].guide}</p>
//                 <p>Kontenjan: {tours[0].capacity}</p>
//                 <p>Şehir: {currentLocation.city}</p>
//                 <p>Gün: {currentLocation.day}</p>
//                 <img src={`${process.env.PUBLIC_URL}/images/kuba.jpeg`} alt="Tur görseli" style={{ width: "100%", height: "auto" }} />
//               </div>
//             </Popup>
//           </Marker>
          
//         )}
//       </MapContainer>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import tourGroups from "./data/tourGroups";
import "./App.css";

// Varsayılan ikon için L.Icon.Default kullanımı
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const getToday = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const getDayDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const getCurrentLocation = (tour) => {
  const today = getToday();
  const startDate = new Date(tour.startDate);
  const currentDate = new Date(today);
  
  const dayDifference = getDayDifference(startDate, currentDate);
  
  if (dayDifference < 0 || dayDifference >= tour.itinerary.length) {
    return null; // Tur bitmişse veya başlamamışsa null döndür
  }
  
  return { 
    location: tour.itinerary[dayDifference] || null,
    currentDay: dayDifference + 1 // Gün 0'dan başladığı için +1 eklenir
  };
};

const App = () => {
  const today = getToday();
  
  const activeTours = tourGroups.filter(tour => {
    const startDate = new Date(tour.startDate);
    const endDate = new Date(tour.endDate);
    const currentDate = new Date(today);
    
    return currentDate >= startDate && currentDate <= endDate;
  });

  return (
    <div className="App">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {activeTours.map((tour, idx) => {
          const currentInfo = getCurrentLocation(tour);
          
          if (!currentInfo || !currentInfo.location || !currentInfo.location.lat || !currentInfo.location.lng) {
            return null;
          }
          
          return (
            <Marker
              key={idx}
              position={[currentInfo.location.lat, currentInfo.location.lng]}
            >
              <Popup>
                <h2>{tour.name}</h2>
                <p><strong>Rehber:</strong> {tour.guide}</p>
                <p><strong>Şehir:</strong> {currentInfo.location.city}</p>
                <p><strong>Ülke:</strong> {currentInfo.location.country}</p>
                <p><strong>Gün:</strong> {currentInfo.currentDay}</p>
                <img src={tour.image} alt={tour.name} style={{ width: "100%", height: "auto" }} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default App;






