import { useState } from "react";
import shiftCharacters from "./shiftCharacters";
import {
  Button,
  CardContaine,
  Container,
  H2,
  Input,
  Label,
  P,
  Titulo,
} from "./styles";

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [shift, setShift] = useState<number>(0);
  const [outputText, setOutputText] = useState<string>("");

  const handleEncrypt = () => {
    const encryptedText = shiftCharacters(inputText, shift);
    setOutputText(encryptedText);
  };

  const handleDecrypt = () => {
    const decryptedText = shiftCharacters(inputText, -shift);
    setOutputText(decryptedText);
  };

  return (
    <CardContaine>
      <Container>
        <Titulo>Cifrador e Decifrador</Titulo>
        <Label>
          Texto de entrada:
          <Input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Label>
        <Label>
          Shift:
          <Input
            type="number"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
          />
        </Label>
        <Button onClick={handleEncrypt}>Cifrar</Button>
        <Button onClick={handleDecrypt}>Decifrar</Button>
        <H2>Texto de saída:</H2>
        <P>{outputText}</P>
      </Container>
    </CardContaine>
  );
};

export default App;
