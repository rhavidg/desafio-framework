import { BrowserRouter } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Menu from "./components/Menu";
import Routes from "./routes";
import CoreService from "./services/core";
import Context from "./context/filter";

function App() {
  const [users, setUsers] = useState<[string]>();
  const service = { CoreService: new CoreService() };
  const [usuarioAtivo, setUsuarioAtivo] = useState<number>(1);

  const activeUser = useCallback(async (id) => {
    return await setUsuarioAtivo(id);
  }, []);
  const getUsers = useCallback(async () => {
    try {
      const response = await service.CoreService.getUsers();
      await setUsers(
        response.data.map((usuario: any) => {
          return usuario.id;
        })
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={[usuarioAtivo, setUsuarioAtivo]}>
          {users && <Menu users={users} />}
          {usuarioAtivo && <Routes />}
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
