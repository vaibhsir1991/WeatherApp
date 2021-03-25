import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../../redux/actions';

interface DispatchProps {
  setLocation?: typeof setLocation;
}

const GeoLocation = ({
  setLocation
}: DispatchProps): React.ReactElement | null => {
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
    if (setLocation) setLocation(payload);
  });

  return null;
};

const mapDispatchToProps = {
  setLocation: setLocation
};

export default connect(null, mapDispatchToProps)(GeoLocation);
