import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;

  wired-button {
    width: 100px;
  }

  wired-input {
    width: calc(400px - 20px);
  }
`;

const Header = styled.h1`
  width: calc(400px - 20px + 4px);
  margin: 10px 0;
  text-align: left;
`;

const InputWrapper = styled.div`
  width: 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 20px;
`;

const JoinGameForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const textInput = React.createRef<HTMLInputElement>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <>
      <wired-button onClick={() => setIsOpen(true)}>Join Room</wired-button>

      <wired-dialog {...(isOpen ? { open: true } : {})}>
        <Card>
          <Header>Join game</Header>

          <InputWrapper>
            <wired-input
              type="text"
              placeholder="enter room name"
              ref={textInput}
              onInput={handleInput}
            />
          </InputWrapper>

          <ButtonWrapper>
            <Button>
              <StyledLink to={"/room?name=" + input}>
                <wired-button onClick={() => setIsOpen(false)}>
                  Join
                </wired-button>
              </StyledLink>
            </Button>

            <Button>
              <wired-button onClick={() => setIsOpen(false)}>
                Close
              </wired-button>
            </Button>
          </ButtonWrapper>
        </Card>
      </wired-dialog>
    </>
  );
};

export default JoinGameForm;
