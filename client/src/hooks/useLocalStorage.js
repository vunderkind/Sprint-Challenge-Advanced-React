import { useState } from "react";

  export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {

      //here we say item = the key we pass localStorage
      const item = window.localStorage.getItem(key);
      
      return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };
      
    return [storedValue, setValue];
    // if we invoke this on useDarkMode, 
    // a. storedValue will be = 'dark-mode'
    // b. setValue will be = `true` or `false`

    
  };

  // 1. You use localStorage to hold data you want to pass elsewhere without losing it with each refresh
  //2. So we use localStorage in a useLocalStorage custom hook to hold the valuues of 
  //   darkmode which we pass to NavBar to toggle the className.
  //3. in useLocalStorage, we define the logic
  //What is the logic? 
  //basic useState logic. 

  
