import { useLocalStorage } from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  
    const Default = () => {
        return document.body.classList.add("dark-mode");
    };
  
    const enabled =
      typeof enabledState !== 'undefined' ? enabledState : Default;
  
    useEffect(
      () => {
        const className = 'dark-mode';
        const element = window.document.body;
        if (!enabled) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      },
      [enabled] 
    );
  
    // Return enabled state and setter
    console.log([enabled, setEnabledState])
    return [enabled, setEnabledState];
  }