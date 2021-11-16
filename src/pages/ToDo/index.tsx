import React, { useEffect, useContext, useState, useCallback } from "react";
import CoreService from "../../services/core";
import Context from "../../context/filter";
import { Container, Wrapper, Card } from "./styles";

interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const service = { CoreService: new CoreService() };
  const [todos, setTodos] = useState<Todo[]>();
  const [activeUser, setActiveUser] = useContext(Context);

  const getTodos = useCallback(async () => {
    try {
      const response = await service.CoreService.getToDos();
      const filteredResponse: Todo[] = response.data.filter((todo: Todo) => {
        return parseInt(todo.userId) === activeUser;
      });
      await setTodos(filteredResponse);
    } catch (err) {
      console.error(err);
    }
  }, [activeUser]);
  useEffect(() => {
    getTodos();
  }, [activeUser]);
  return (
    <>
      <Container>
        <h1>To Do</h1>
        <Wrapper>
          {todos?.map((todo: Todo) => (
            <div className="wrapper">
              <Card>
                <div className="user">User: {todo.userId}</div>
                <div className="title">{todo.title}</div>
                <input type="checkbox" checked={todo.completed} />
              </Card>
            </div>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default ToDo;
