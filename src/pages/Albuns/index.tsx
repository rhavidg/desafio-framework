import React, { useCallback, useEffect, useState, useContext } from "react";
import { Card, Container, Wrapper } from "./styles";
import CoreService from "../../services/core";
import Context from "../../context/filter";

interface Album {
  userId: string;
  id: number;
  title: string;
}

const Albuns: React.FC = () => {
  const service = { CoreService: new CoreService() };
  const [albuns, setAlbuns] = useState<Album[]>();
  const [activeUser, setActiveUser] = useContext(Context);
  const getAlbuns = useCallback(async () => {
    try {
      const response = await service.CoreService.getAlbuns();
      const filteredResponse: Album[] = response.data.filter((album: Album) => {
        return parseInt(album.userId) === activeUser;
      });
      await setAlbuns(filteredResponse);
    } catch (err) {
      console.error(err);
    }
  }, [activeUser]);
  useEffect(() => {
    getAlbuns();
  }, [activeUser]);
  return (
    <>
      <Container>
        <h1>Albums</h1>
        <Wrapper>
          {albuns?.map((album: Album) => (
            <div className="wrapper">
              <Card>
                <div className="id">User: {album.userId}</div>
                <div className="title">{album.title}</div>
              </Card>
            </div>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Albuns;
