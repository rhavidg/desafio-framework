import styled from "styled-components";

export const Container = styled.div`
  background: #dbe6f6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dfa198,
    #eff6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d46e5e,
    #dbe6f6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  a {
    color: #fff;
    text-decoration: none;
  }
  @media screen and (max-width: 490px) {
    flex-direction: column;
  }
  h4 {
    color: rgba(0, 0, 0, 0.6);
    padding-right: 10px;
  }
  select {
    margin-top: 5px;
  }
  border-bottom: 1.5px solid #4e4d4d86;
  border-radius: 5px;
`;

export const Item = styled.div`
  background-color: transparent;

  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  select {
    border-radius: 3px;
    display: inline-block;
    overflow: hidden;
    border: 1px solid color: rgba(0, 0, 0, 0.6);
  }
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 20px;
`;
