import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 15px 50px;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 30px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-left: 15px;
    font-size: 20px;

    :hover {
      color: red;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;

const Logo = styled.img`
    color: #000;
`

export { Container, Menu, Logo };