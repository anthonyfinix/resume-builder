import { useContext, useState } from "react";
import { ResumeContext } from "./ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import Modal from "./Modal";
import Button from "./Button";
import { Flex } from "./Flex";

const LanguageSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!resumeContext) {
    return <h1>Loading...</h1>;
  }

  const openLanguageEditor = (index?: number) => {
    if (index !== undefined) {
      setCurrentLanguage(resumeContext.languages[index]);
      setEditingIndex(index);
    } else {
      setCurrentLanguage("");
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const saveLanguage = () => {
    if (!currentLanguage.trim()) return;
    resumeContext.setLanguages((prev) => {
      if (editingIndex !== null) {
        // update existing
        return prev.map((lang, idx) =>
          idx === editingIndex ? currentLanguage.trim() : lang
        );
      }
      // add new
      return [...prev, currentLanguage.trim()];
    });
    setIsModalOpen(false);
    setCurrentLanguage("");
    setEditingIndex(null);
  };

  const handleDeleteLanguage = (index: number) => {
    resumeContext.setLanguages((prev) =>
      prev.filter((_, idx) => idx !== index)
    );
  };

  return (
    <>
      <div className="subsidebar">
        {resumeContext.languages.map((lang, index) => (
          <div className="language-item" key={index}>
            <p>{lang}</p>
            <Dustbin onClick={() => handleDeleteLanguage(index)} />
            <Pen onClick={() => openLanguageEditor(index)} />
          </div>
        ))}
        <div
          className="language-item"
          style={{ cursor: "pointer" }}
          onClick={() => openLanguageEditor()}
        >
          <p>Add Language</p>
          <Plus />
        </div>
      </div>

      {/* Simple Modal for language input */}
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Flex direction="column" gap="10px">
            <label>Language</label>
            <input
              className="input"
              type="text"
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
            />
            <Flex justify="flex-end" gap="10px">
              <Button color="alternative" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={saveLanguage}>
                {editingIndex !== null ? "Update" : "Add"}
              </Button>
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default LanguageSidebar;
