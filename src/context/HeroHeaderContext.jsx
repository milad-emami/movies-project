import React, { createContext, useState } from "react";

export const HeroHeaderContext = createContext(
  "../../assets/images/movies-bg.jpg"
);

export default function HeroHeaderProvider({ children }) {
  const [backgroundImg, setBackgroundImg] = useState(
    "../../assets/images/movies-bg.jpg"
  );
  return (
    <HeroHeaderContext.Provider value={[backgroundImg, setBackgroundImg]}>
      {children}
    </HeroHeaderContext.Provider>
  );
}
