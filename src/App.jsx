import styled from "styled-components";
import GlobleStyle from "./styles/GlobleStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.div`
  /* background-color: orange; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobleStyle />
      <StyleApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("Chech in")}>Check In</Button>
              <Button
                variations="secondary"
                size="small"
                onClick={() => alert("Chech in")}
              >
                Check out
              </Button>
              <Heading as="h3">Check out</Heading>
            </div>
          </Row>
          <Row>
            <form>
              <Heading as="h3">Form</Heading>
              <Input placeholder="Hello"></Input>
              <Input placeholder="Hello"></Input>
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
