import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  .wrapper {
    margin: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  align-self: flex-start;
  color: #2a2929d8;
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  .title {
    margin-top: 10px;
    align-self: center;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    width: 100%;
    font-size: 1rem;
  }
  .id {
    box-shadow: 0 2px 2px -2px gray;
    padding-bottom: 10px;
  }
`;
