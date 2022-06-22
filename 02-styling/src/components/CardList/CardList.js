import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Card from '../Card/Card';
import Container from '../Container/Container';

const CardList = ({ photos }) => {
  return (
    <Container>
      {photos.map((el) => (
        <Card key={el.id ? el.id : uuidv4()} photo={el} />
      ))}
    </Container>
  );
};

CardList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
