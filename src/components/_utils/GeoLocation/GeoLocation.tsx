import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../../redux/locationStateReducer';

interface StateProps {
  setLocation?: typeof setLocation;
}

const GeoLocation = ({
  setLocation
}: StateProps): React.ReactElement | null => {
  const [content, setContent] = React.useState<React.ReactNode | string>('');

  navigator.permissions
    .query({
      name: 'geolocation'
    })
    .then((result) => {
      if (result.state === 'denied') {
        setContent(<h1>Please allow location access</h1>);
      }
    });

  navigator.geolocation.getCurrentPosition((position) => {
    const payload = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    };
    if (setLocation) setLocation(payload);
  });

  return <>{content}</>;
};

const mapDispatchToProps = {
  setLocation: setLocation
};

export default connect(null, mapDispatchToProps)(GeoLocation);
