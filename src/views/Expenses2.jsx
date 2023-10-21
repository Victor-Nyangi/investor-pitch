import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Expenses2 = () => {
  const municipalities = [
    "Paris, France",
    "Berlin, Germany",
    "Rome, Italy",
    "Madrid, Spain",
    "Amsterdam, Netherlands",
    "Athens, Greece",
    "Vienna, Austria",
    "Prague, Czech Republic",
    "Dublin, Ireland",
    "Lisbon, Portugal",
  ];

  const provinces = [
    "Tokyo, Japan",
    "Shanghai, China",
    "Mumbai, India",
    "Seoul, South Korea",
    "Bangkok, Thailand",
    "Jakarta, Indonesia",
    "Ankara, Turkey",
    "Hanoi, Vietnam",
    "Islamabad, Pakistan",
    "Riyadh, Saudi Arabia",

  ];

  const cities = [
    "Cairo, Egypt",
    "Lagos, Nigeria",
    "Nairobi, Kenya",
    "Cape Town, South Africa",
    "Casablanca, Morocco",
    "Dakar, Senegal",
    "Addis Ababa, Ethiopia",
    "Accra, Ghana",
    "Tunis, Tunisia",
    "Khartoum, Sudan",
  ];
  const defaultProps = {
    center: {
      lat: -1.3011481982354423,
      lng: 36.79452160567946
    },
    zoom: 11
  };

  const [coordinates, setCoordinates] = useState({
    lat: defaultProps.center.lat,
    lng: defaultProps.center.lng,
  });

  const renderMarker = (map, maps) => {
    const marker = new maps.Marker({
      position: defaultProps.center,
      map,
      title: "Location",
      draggable: true,
      lat: coordinates.lat,
      lng: coordinates.lng,
    });
    marker.addListener("dragend", (e) => {
      const { lat, lng } = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setCoordinates({ lat, lng });
    });
    return marker;
  };
  return (
    <>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            project locations
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select a municipality
            </label>

            <select
              name="municipality"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="sdg1"
            >
              <option value="">-- Select Municipality --</option>
              {municipalities &&
                municipalities.map((municipality, id) => (
                  <option
                    key={id}
                    value={municipality}
                  >{municipality}</option>
                ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select a Province
            </label>

            <select
              name="province"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="province"
            >
              <option value="">-- Select Province --</option>
              {provinces &&
                provinces.map((province, id) => (
                  <option
                    key={id}
                    value={province}
                  >{province}</option>
                ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select a City
            </label>

            <select
              name="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="city"
            >
              <option value="">-- Select City --</option>
              {cities &&
                cities.map((city, id) => (
                  <option
                    key={id}
                    value={city}
                  >{city}</option>
                ))}
            </select>
          </div>
        </div>
        <div>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={({ map, maps }) => {
                renderMarker(map, maps);
              }}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="Location"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
            <span className="ml-1 -mr-2">
              <svg
                className="w-8 h-8 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>


    </>
  )
}

export default Expenses2