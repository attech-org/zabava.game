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
`;

const Header = styled.h1`
  width: calc(400px - 20px + 4px);
  margin: 10px 0;
  text-align: left;
`;

const Input = styled.input`
  width: calc(400px - 20px - 2 * 5px);
  margin: 10px 0 5px 0;
  padding: 10px 5px;
`;

const Error = styled.p`
  color: red;
`;

interface StyledLinkProps {
  isValid: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: black;
  pointer-events: ${(props) => (props.isValid ? "auto" : "none")};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 20px;
`;

const CreateGameForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const roomNameRegex = /^\w+$/;

  const isValid = roomNameRegex.test(input);

  return (
    <>
      <wired-button onClick={() => setIsOpen(true)}>Create Room</wired-button>

      <wired-dialog {...(isOpen ? { open: true } : {})}>
        <Card>
          <Header>Create game</Header>
          {/* <wired-input type="text" onChange={handleInput} /> */}

          <div>
            <Input
              type="text"
              placeholder="enter room name"
              pattern="/^\w+$/"
              onChange={handleInput}
            />
            {!isValid && (
              <Error>
                Only latin character, numbers and undescore allowed!
              </Error>
            )}
          </div>

          <ButtonWrapper>
            <Button>
              <StyledLink isValid={isValid} to={"/room?name=" + input}>
                <wired-button
                  {...(isValid ? {} : { disabled: true })}
                  onClick={() => (isValid ? setIsOpen(false) : null)}
                >
                  Create
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

export default CreateGameForm;
