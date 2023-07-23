import React, { useState } from "react";
import { Button, Input, Flex } from "@chakra-ui/react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");
  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };
  return (
    <div>
      <Flex m={"20px"}>
        <Input
          placeholder="enter task to add"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={onClick}>Add</Button>
      </Flex>
    </div>
  );
};

export default AddTodo;
