import { useContext, useState } from "react";
import { ResumeContext } from "./ResumeProvider";
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

  const openTagEditor = (index?: number) => {
    if (index !== undefined) {
      setCurrentTag(resumeContext.tags[index]);
      setEditingIndex(index);
    } else {
      setCurrentTag("");
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const saveTag = () => {
    if (!currentTag.trim()) return;
    resumeContext.setTags((prev) => {
      if (editingIndex !== null) {
        // Update existing tag
        return prev.map((tag, idx) =>
          idx === editingIndex ? currentTag.trim() : tag
        );
      }
      // Add new tag
      return [...prev, currentTag.trim()];
    });
    setIsModalOpen(false);
    setCurrentTag("");
    setEditingIndex(null);
  };

  const handleDeleteTag = (index: number) => {
    resumeContext.setTags((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <div className="subsidebar">
        {resumeContext.tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <p>{tag}</p>
            <Dustbin onClick={() => handleDeleteTag(index)} />
            <Pen onClick={() => openTagEditor(index)} />
          </div>
        ))}
        <div
          className="tag-item"
          style={{ cursor: "pointer" }}
          onClick={() => openTagEditor()}
        >
          <p>Add Tag</p>
          <Plus />
        </div>
      </div>

      {/* Modal for tag input */}
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Flex direction="column" gap="10px">
            <label>Tag</label>
            <input
              className="input"
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
            />
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
