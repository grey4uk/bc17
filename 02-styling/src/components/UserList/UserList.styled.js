import styled from 'styled-components';

export const UserListComponent = styled.ul`
  list-style: none;
  padding: 20px;
`;

export const UserLi = styled.li`
  background-color: ${(props) =>
    props.status === 'active' ? 'green' : 'red'};
  padding: 10px 0;
  :hover {
    opacity: 0.7;
  }
`;

export const UserText = styled.span`
  font-size: 18px;
`;
