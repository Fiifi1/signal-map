import React, { Component } from "react";
import locations from "./../../../data/locations.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

// class MyMap extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: locations.features,
//     };
//   }

//   displayMarkers = () => {
//     return this.state.data.map((point, index) => {
//       return (
//         <Marker
//           key={index}
//           id={index}
//           position={{
//             latitude: point.geometry.coordinates[0],
//             longitude: point.geometry.coordinates[1],
//           }}
//           onClick={() => console.log("You clicked me!")}
//         />
//       );
//     });
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={13}
//         style={mapStyles}
//         initialCenter={{ latitude: 40.7128, longitude: -74.006 }}
//       >
//         {this.displayMarkers()}
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAPU8dnLfZAK1aJK13EYtoYusAPJuy1Nj0",
// })(MyMap);

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MyMap extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  displayMarkers = () => {
    return this.state.data.map((point, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            latitude: point.geometry.coordinates[0],
            longitude: point.geometry.coordinates[1],
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAPU8dnLfZAK1aJK13EYtoYusAPJuy1Nj0",
})(MyMap);
