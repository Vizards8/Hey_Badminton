// AIzaSyAxZU2Dc2ePb2sJz8fwSArjwyeTPs1vZA8
import { Fragment, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Select,
  Space,
  message,
  List,
  Rate,
  Row,
  Col,
  Typography,
} from "antd";
import "./location.css";

const { Option } = Select;

const { Title } = Typography;

const Locations = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default position set to San Francisco, CA
  const [zipcode, setZipcode] = useState("");
  const [radius, setRadius] = useState("1609");
  const [badmintonCourts, setBadmintonCourts] = useState([]);
  const mapRef = useRef(null);

  const handleDropdownChange = (value) => {
    setRadius(value);
  };

  const handleApiLoaded = (map) => {
    mapRef.current = map;
  };

  const handleSearch = () => {
    if (!zipcode) {
      message.error("Please enter a zipcode.");
      return;
    }

    const google = window.google;
    const geocoder = new google.maps.Geocoder();
    const placesService = new google.maps.places.PlacesService(mapRef.current);

    // Convert the zipcode to a LatLng object
    geocoder.geocode({ address: zipcode }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const location = results[0].geometry.location;

        // Define the search request
        const request = {
          location: location,
          radius: radius,
          query: "badminton court",
        };

        // Send the search request
        placesService.textSearch(request, (results, status) => {
          console.log("results: ", results);

          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const locations = results.map((result) => ({
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
              name: result.name,
              address: result.formatted_address,
              rating: result.rating,
            }));
            setBadmintonCourts(locations);
            setMapCenter(locations[0]);
          } else {
            console.error(`Failed to get badminton courts: ${status}`);
          }
        });
      } else {
        console.error(`Failed to get location for ${zipcode}: ${status}`);
      }
    });
  };

  return (
    <Fragment>
      <Title level={2} className="title">
        Find Nearby Badminton Courts
      </Title>
      <div className="search-container">
        <Space>
          <Input
            placeholder="Zip"
            size="large"
            onChange={(e) => setZipcode(e.target.value)}
          />
          <Select
            defaultValue={"Within 1 miles"}
            onChange={handleDropdownChange}
            size="large"
          >
            <Option value="1609">Within 1 miles</Option>
            <Option value="3219">Within 2 miles</Option>
            <Option value="8047">Within 5 miles</Option>
            <Option value="16093">Within 10 miles</Option>
            <Option value="32187">Within 20 miles</Option>
          </Select>
          <Button icon={<SearchOutlined />} size="large" onClick={handleSearch}>
            Search
          </Button>
        </Space>
      </div>
      <Row>
        <Col span={12}>
          <div className="map-container">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAxZU2Dc2ePb2sJz8fwSArjwyeTPs1vZA8",
                language: "en",
                libraries: ["places"],
              }}
              center={mapCenter}
              zoom={9}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
            >
              {badmintonCourts.map((location, index) => (
                <EnvironmentFilled
                  key={index}
                  lat={location.lat}
                  lng={location.lng}
                  style={{ color: "#db4343", fontSize: "16px" }}
                  title={location.name}
                  onClick={() => {
                    mapRef.current.panTo(location);
                  }}
                />
              ))}
            </GoogleMapReact>
          </div>
        </Col>
        <Col span={12}>
          <List
            className="list-container"
            itemLayout="horizontal"
            dataSource={badmintonCourts}
            renderItem={(location) => (
              <List.Item
                onClick={() => {
                  mapRef.current.panTo(location);
                  mapRef.current.setZoom(9);

                  setTimeout(() => {
                    mapRef.current.setZoom(12);
                  }, 1000);
                }}
              >
                <List.Item.Meta
                  title={<a href="#">{location.name}</a>}
                  description={location.address}
                />
                <Rate allowHalf value={location.rating} disabled />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Locations;
