import { v4 as uuidv4 } from 'uuid';

import Card from '../Card/Card';

const CardList = ({ photos }) => {
  return (
    <>
      {photos.map((el) => (
        <Card key={el.id ? el.id : uuidv4()} photo={el} />
      ))}
    </>
  );
};

export default CardList;
