import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from 'redux/actions';

interface Props {
  setLocation?: typeof setLocation;
  latitude: number;
  longitude: number;
}

const GeoLocation = (props: Props): React.ReactElement | null => {
  navigator.permissions
    .query({
      name: 'geolocation'
    })
    .then((result) => {
      if (result.state === 'denied') {
        alert('Please allow location access or enter `?city=name` in URL');
      }
    });

  navigator.geolocation.getCurrentPosition((position) => {
    const payload = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };
    if (props.setLocation) props.setLocation(payload);
    console.log(props.latitude, props.longitude);
  });

  return null;
};

const mapStateToProps = (state: {
  location: { latitude: any; longitude: any };
}) => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude
});

const mapDispatchToProps = {
  setLocation: setLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocation);
