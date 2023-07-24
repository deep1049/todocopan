import React, { useState } from "react";
import { Button, Input, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useToast, Box } from "@chakra-ui/react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const onAdd = () => {
    if (text === "") {
      toast({
        title: " Plaese write task In Input Box",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      handleAddTodo(text);
      setText("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };
  return (
    <div>
      <Flex m={"20px"}>
        <Input
          placeholder="Write task to add"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={onAdd}>
          <AddIcon />
        </Button>
      </Flex>
    </div>
  );
};

export default AddTodo;
