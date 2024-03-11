import { ReactNode, createContext, useState } from 'react';

export const CommonPageLayoutContext =
  createContext<CommonPageLayoutContextType | null>(null);

export type CommonPageLayoutContextProviderProps = {
  children: ReactNode;
};
export const CommonPageLayoutContextProvider = (
  props: CommonPageLayoutContextProviderProps
) => {
  const [commonPageLayoutSettings, setCommonPageLayoutSettings] =
    useState<CommonPageLayoutSettings>({ title: 'Untitled App' });
  return (
    <CommonPageLayoutContext.Provider
      value={{ commonPageLayoutSettings, setCommonPageLayoutSettings }}
    >
      {props.children}
    </CommonPageLayoutContext.Provider>
  );
};

export type CommonPageLayoutSettings = {
  title: string;
};
export type CommonPageLayoutContextType = {
  commonPageLayoutSettings: CommonPageLayoutSettings;
  setCommonPageLayoutSettings: React.Dispatch<
    React.SetStateAction<CommonPageLayoutSettings>
  >;
};
