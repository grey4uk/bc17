import { PropTypes } from 'prop-types';
import { FaAngellist } from 'react-icons/fa';
import Container from '../Container/Container';
import {
  UserListComponent,
  UserLi,
  UserText,
} from './UserList.styled';

const styles = {
  active: {
    background: 'green',
    color: 'yellow',
  },
  unactive: {
    background: 'red',
    color: 'black',
  },
};

const UserList = ({ users }) => {
  return (
    <Container>
      <UserListComponent>
        {users.map(({ id, name, phone, status }) => (
          <UserLi
            key={id}
            //   style={styles[status]}
            status={status}>
            <FaAngellist />
            <UserText>{name}</UserText>
            <UserText>{phone}</UserText>
          </UserLi>
        ))}
      </UserListComponent>
    </Container>
  );
};

UserList.protoTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['active', 'unactive']),
      //       status: PropTypes.bool.isRequired,
    })
  ),
};

export default UserList;
