import { useContext } from 'react';
import { CommonPageLayoutContext } from './CommonPageLayoutContext';

export const useCommonPageLayoutSettings = () => {
  const CommonPageLayoutSettings = useContext(CommonPageLayoutContext);
  if (!CommonPageLayoutSettings) {
    throw new Error(
      'Please wrap CommonPageLayout usage inside CommonAppBarContextProvider'
    );
  }
  return CommonPageLayoutSettings;
};
