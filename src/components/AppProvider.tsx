import { createContext, FC, ReactElement, useMemo, useState } from "react";

export type selectedMenuType =
  | "basicInformation"
  | "workExperience"
  | "education"
  | "language"
  | "tag";

export type AppContextType = {
  selectedMenu: selectedMenuType | null;
  setSelectedMenu: (item: selectedMenuType | null) => void;
};
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<null | AppContextType>(null);

const AppProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState<null | selectedMenuType>(
    null
  );
  const data = useMemo(
    () => ({ selectedMenu, setSelectedMenu }),
    [selectedMenu, setSelectedMenu]
  );
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppProvider;
