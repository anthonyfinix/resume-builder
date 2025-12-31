import { useContext, useState } from "react";
import { ResumeContext } from "../Provider/ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import Modal from "./Modal";
import Button from "./Button";
import { Flex } from "./Flex";

const TagSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!resumeContext) {
    return <h1>Loading...</h1>;
  }

  const { state, dispatch } = resumeContext;
  // Accessing from our new JSON Resume structure
  const skillsList = state.skills.keywords;

  const openTagEditor = (index?: number) => {
    if (index !== undefined) {
      setCurrentTag(skillsList[index]);
      setEditingIndex(index);
    } else {
      setCurrentTag("");
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const saveTag = () => {
    const trimmedTag = currentTag.trim();
    if (!trimmedTag) return;

    let newList: string[];
    if (editingIndex !== null) {
      // Update existing
      newList = skillsList.map((tag, idx) =>
        idx === editingIndex ? trimmedTag : tag
      );
    } else {
      // Add new
      newList = [...skillsList, trimmedTag];
    }

    // Dispatching to the new Reducer action
    dispatch({ type: "UPDATE_SKILLS", payload: newList });
    
    setIsModalOpen(false);
    setCurrentTag("");
    setEditingIndex(null);
  };

  const handleDeleteTag = (index: number) => {
    const newList = skillsList.filter((_, idx) => idx !== index);
    dispatch({ type: "UPDATE_SKILLS", payload: newList });
  };

  return (
    <>
      <div className="subsidebar">
        {skillsList.map((tag, index) => (
          <div className="tag-item" key={index}>
            <p>{tag}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Pen onClick={() => openTagEditor(index)} />
              <Dustbin onClick={() => handleDeleteTag(index)} />
            </div>
          </div>
        ))}
        <div
          className="tag-item add-btn"
          style={{ cursor: "pointer" }}
          onClick={() => openTagEditor()}
        >
          <p>Add Skill Tag</p>
          <Plus />
        </div>
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Flex direction="column" gap="15px">
            <h3 style={{ margin: 0 }}>{editingIndex !== null ? "Edit Skill" : "Add Skill"}</h3>
            <Flex direction="column">
              <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Skill Name</label>
              <input
                className="input"
                type="text"
                placeholder="e.g. React, TypeScript, Figma"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                autoFocus
                // Allows saving by pressing Enter
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveTag();
                }}
              />
            </Flex>
            <Flex justify="flex-end" gap="10px">
              <Button color="alternative" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={saveTag}>
                {editingIndex !== null ? "Update" : "Add"}
              </Button>
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default TagSidebar;