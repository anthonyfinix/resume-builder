import { createContext, FC, ReactElement, useEffect, useMemo, useReducer, useRef } from "react";
import initialState, { ResumeState, STORAGE_KEY, loadSavedState } from "./initialState";
import { Education, Experience } from "../types";

type Action =
  | { type: 'UPDATE_BASICS'; payload: Partial<ResumeState['basics']> }
  | { type: 'UPDATE_EXPERIENCE'; payload: Experience[] }
  | { type: 'UPDATE_EDUCATION'; payload: Education[] }
  | { type: 'UPDATE_SKILLS'; payload: string[] }
  | { type: 'UPDATE_LANGUAGES'; payload: string[] };

export type ResumeContextType = {
  state: ResumeState;
  dispatch: React.Dispatch<Action>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
};


function resumeReducer(state: ResumeState, action: Action): ResumeState {
  switch (action.type) {
    case 'UPDATE_BASICS':
      return { ...state, basics: { ...state.basics, ...action.payload } };
    case 'UPDATE_EXPERIENCE':
      return { ...state, work: action.payload };
    case 'UPDATE_EDUCATION':
      return { ...state, education: action.payload };
    case 'UPDATE_SKILLS':
      return { ...state, skills: { keywords: action.payload } };
    case 'UPDATE_LANGUAGES':
      return { ...state, languages: action.payload };
    default:
      return state;
  }
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

const ResumeProvider:FC<{ children: ReactElement }> = ({ children }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(resumeReducer, initialState, loadSavedState);
useEffect(() => {
  const handler = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, 1000);
  return () => clearTimeout(handler);
}, [state]);
  const value = useMemo(() => ({ state, dispatch, resumeRef }), [state]);
    return <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
}
export default ResumeProvider;