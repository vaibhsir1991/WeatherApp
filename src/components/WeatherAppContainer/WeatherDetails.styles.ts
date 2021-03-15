import styled from '@emotion/styled';

export const getBackgroundColor = (tempInKelvin: number): string => {
  if (tempInKelvin >= 305.15) {
    return '#f77423';
  } else if (tempInKelvin >= 296.15) {
    return '#ffcd00';
  } else {
    return '#283F8F';
  }
};

export const Wrapper = styled.div(
  {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '300px',
    height: '350px',
    marginTop: '32px',
    textAlign: 'center',
    padding: '32px',
    color: 'white'
  },
  (props) => ({ backgroundColor: props.color })
);

export const Icon = styled.i`
  font-size: 8rem;
  margin-bottom: 32px;
`;

export const CityName = styled.p`
  font-size: 2rem;
  margin: 16px 0 32px;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Sperator = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

export const Details = styled.div`
  display: flex;
  text-align: left;
  padding-top: 8px;
`;

export const TempretureDiv = styled.div`
  width: 50%;
  font-size: 6rem;
`;

export const HumidityWindDiv = styled.div`
  width: 50%;
`;

export const HumidityWind = styled.p`
  font-size: 2rem;
  margin: 12px 0;
`;
