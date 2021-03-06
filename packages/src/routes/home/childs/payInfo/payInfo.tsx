import * as React from 'react';
import { Container } from './payInfo.styled';
type IPayInfoProps = {
  location: {
    name: string;
    start: string;
    end: string;
  };
  calculatePrice: string;
};
const PayInfo = ({ location, calculatePrice }: IPayInfoProps) => {
  return (
    <Container>
      <div className="movie-time">
        <span>{location.name}</span>
        <span>
          {location.start} | {location.end}
        </span>
      </div>
      <div className="movie-total">
        <span>Tổng cộng</span>
        <span>{calculatePrice}</span>
      </div>
    </Container>
  );
};
export default React.memo(PayInfo);
