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

export const Title = styled.h1<{
  size?: string;
  margin?: string;
  color?: string;
}>`
  font-size: ${props => (props.size ? props.size : "28px")};
  font-weight: bold;
  color: ${props => (props.color ? props.color : "#111")};
  margin: ${props => (props.margin ? props.margin : "28px")};
`;

export const Text = styled.p<{ size?: string; color?: string }>`
  color: ${props => (props.color ? props.color : "#111")};
  font-size: ${props => (props.size ? props.size : "16px")};
`;

export const Button = styled.button`
  color: #111;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonBlue = styled.button`
  color: white;
  background-color: #0984e3;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;
