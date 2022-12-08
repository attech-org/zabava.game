import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 300px;

  p {
    margin: 10px 0;
    width: 90%;
  }
  input {
    width: 100%;
  }
  wired-input {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const JoinGameForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <>
      <wired-button onClick={() => setIsOpen(true)}>Join Room</wired-button>

      <wired-dialog {...(isOpen ? { open: true } : {})}>
        <Card>
          <h1>Join game</h1>

          {/* <p>
            <wired-input type="text" pattern="/^\w+$/" onChange={handleInput} />
          </p> */}

          <p>
            <input
              type="text"
              placeholder="enter room name"
              onChange={handleInput}
            />
          </p>

          <ButtonWrapper>
            <StyledLink to={"/room?name=" + input}>
              <wired-button onClick={() => setIsOpen(false)}>Join</wired-button>
            </StyledLink>

            <wired-button onClick={() => setIsOpen(false)}>Close</wired-button>
          </ButtonWrapper>
        </Card>
      </wired-dialog>
    </>
  );
};

export default JoinGameForm;
