import { useContext, useState } from "react";
import { ResumeContext } from "../Provider/ResumeProvider";
import { Dustbin, Pen, Plus } from "./icons";
import Modal from "./Modal";
import Button from "./Button";
import { Flex } from "./Flex";

const LanguageSidebar = () => {
  const resumeContext = useContext(ResumeContext);
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Early return if context is null
  if (!resumeContext) {
    return <h1>Loading...</h1>;
  }

  const { state, dispatch } = resumeContext;

  const openLanguageEditor = (index?: number) => {
    if (index !== undefined) {
      setCurrentLanguage(state.languages[index]);
      setEditingIndex(index);
    } else {
      setCurrentLanguage("");
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const saveLanguage = () => {
    if (!currentLanguage.trim()) return;

    let newList: string[];
    if (editingIndex !== null) {
      // Update existing index
      newList = state.languages.map((lang, idx) =>
        idx === editingIndex ? currentLanguage.trim() : lang
      );
    } else {
      // Add new to the end
      newList = [...state.languages, currentLanguage.trim()];
    }

    dispatch({ type: "UPDATE_LANGUAGES", payload: newList });
    
    setIsModalOpen(false);
    setCurrentLanguage("");
    setEditingIndex(null);
  };

  const handleDeleteLanguage = (index: number) => {
    const newList = state.languages.filter((_, idx) => idx !== index);
    dispatch({ type: "UPDATE_LANGUAGES", payload: newList });
  };

  return (
    <>
      <div className="subsidebar">
        {state.languages.map((lang, index) => (
          <div className="language-item" key={index}>
            <p>{lang}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Pen onClick={() => openLanguageEditor(index)} />
              <Dustbin onClick={() => handleDeleteLanguage(index)} />
            </div>
          </div>
        ))}
        <div
          className="language-item add-btn"
          style={{ cursor: "pointer" }}
          onClick={() => openLanguageEditor()}
        >
          <p>Add Language</p>
          <Plus />
        </div>
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Flex direction="column" gap="15px">
            <h3 style={{ margin: 0 }}>{editingIndex !== null ? "Edit Language" : "Add Language"}</h3>
            <Flex direction="column">
              <label style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Language Name</label>
              <input
                className="input"
                type="text"
                placeholder="e.g. English, French, etc."
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                autoFocus // User experience tip: Focus the input when modal opens
              />
            </Flex>
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