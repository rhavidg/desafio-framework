import React, { useCallback, useContext } from "react";
import { Container, Content, Item } from "./styles";
import { Link } from "react-router-dom";
import Context from "../../context/filter";
interface MenuProps {
  users: [string];
}
const Menu: React.FC<MenuProps> = ({ users }) => {
  const [activeUser, setActiveUser] = useContext(Context);
  return (
    <>
      <Container>
        <Content>
          <Link to="/to-do">
            <Item>
              <h4>TO-DO</h4>
            </Item>
          </Link>
          <Item>
            <Link to="/albuns">
              <h4>ALBUMS</h4>
            </Link>
          </Item>
          <Link to="/posts">
            <Item>
              <h4>POSTS</h4>
            </Item>
          </Link>
          <Item>
            <select
              onChange={(event) => setActiveUser(parseInt(event.target.value))}
            >
              {users?.map((id) => {
                return <option value={parseInt(id)}>Usuário {id}</option>;
              })}
            </select>
          </Item>
        </Content>
      </Container>
    </>
  );
};

export default Menu;
