import React, { useState } from "react";
import { Button, Heading, Flex, Input } from "@chakra-ui/react";

const TodoItem = ({
  id,
  title,
  status,
  handleToggle,
  handleDelete,
  handleEdit,
}) => {
  const [editingTitle, setEditingTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditingTitle(title);
  };

  const handleSaveEdit = () => {
    if (editingTitle.trim() !== "") {
      handleEdit(id, editingTitle);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingTitle("");
  };

  return (
    <Flex
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isEditing ? (
        <>
          <Input
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          <Button onClick={handleSaveEdit} colorScheme="blue">
            Save
          </Button>
          <Button onClick={handleCancelEdit} colorScheme="gray">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Heading>
            {title} {" ---> "}
            {status ? "completed" : "Not completed"}
          </Heading>
          <Button onClick={() => handleToggle(id)}>Update Status</Button>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
          <Button onClick={handleEditClick}>Edit</Button>
        </>
      )}
    </Flex>
  );
};

export default TodoItem;
