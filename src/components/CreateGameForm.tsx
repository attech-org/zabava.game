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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Error = styled.p`
  color: red;
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
          <h1>Create game</h1>

          {/* <p>
            <wired-input type="text" pattern="/^\w+$/" onChange={handleInput} />
          </p> */}

          <p>
            <input
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
          </p>

          <ButtonWrapper>
            <StyledLink to={"/room?name=" + input}>
              <wired-button
                {...(isValid ? {} : { disabled: true })}
                onClick={() => (isValid ? setIsOpen(false) : null)}
              >
                Create
              </wired-button>
            </StyledLink>

            <wired-button onClick={() => setIsOpen(false)}>Close</wired-button>
          </ButtonWrapper>
        </Card>
      </wired-dialog>
    </>
  );
};

export default CreateGameForm;
