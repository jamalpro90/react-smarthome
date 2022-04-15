import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 64px;
`;

export const Link = styled.p`
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1<{ size?: string }>`
  font-size: ${props => (props.size ? props.size : "28px")};
  font-weight: bold;
  color: white;
  width: fit-content;
`;

export const Button = styled.button`
  color: #222;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
