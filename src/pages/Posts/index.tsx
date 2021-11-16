import React, { useCallback, useState, useContext, useEffect } from "react";
import CoreService from "../../services/core";
import Context from "../../context/filter";
import { Card, Container, Wrapper } from "./styles";

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const service = { CoreService: new CoreService() };
  const [posts, setPosts] = useState<Post[]>();
  const [activeUser, setActiveUser] = useContext(Context);

  const getPosts = useCallback(async () => {
    try {
      const response = await service.CoreService.getPosts();
      const filteredResponse: Post[] = response.data.filter((post: Post) => {
        return parseInt(post.userId) === activeUser;
      });
      await setPosts(filteredResponse);
    } catch (err) {
      console.error(err);
    }
  }, [activeUser]);
  useEffect(() => {
    getPosts();
  }, [activeUser]);
  return (
    <>
      <Container>
        <h1>Posts</h1>
        <Wrapper>
          {posts?.map((post: Post) => (
            <div className="wrapper">
              <Card>
                <div className="user">User: {post.userId}</div>
                <div className="title">{post.title}</div>
                <div className="text">{post.body}</div>
              </Card>
            </div>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Posts;
