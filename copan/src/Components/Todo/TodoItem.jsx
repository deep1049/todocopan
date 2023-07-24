import React, { useState } from "react";
import { Button, Heading, Flex, Input, Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
        justifyContent: "space-between",
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
          <Checkbox isChecked={status} onChange={() => handleToggle(id)} />
          <Heading> {title}</Heading>

          <Button onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </Button>
          <Button onClick={handleEditClick}>Edit</Button>
        </>
      )}
    </Flex>
  );
};

export default TodoItem;
