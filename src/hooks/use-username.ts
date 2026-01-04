import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const FIRST_NAMES = [
  "Albus",
  "Minerva",
  "Severus",
  "Remus",
  "Sirius",
  "Nymphadora",
  "Luna",
  "Draco",
  "Hermione",
  "Ronald",
  "Ginevra",
  "Cedric",
  "Fleur",
  "Viktor",
  "Newt",
  "Theseus",
  "Bellatrix",
  "Narcissa",
  "Cornelius",
  "Kingsley",
];

const LAST_NAMES = [
  "Dumbledore",
  "McGonagall",
  "Snape",
  "Lupin",
  "Black",
  "Tonks",
  "Lovegood",
  "Malfoy",
  "Granger",
  "Weasley",
  "Diggory",
  "Delacour",
  "Krum",
  "Scamander",
  "Lestrange",
  "Fudge",
  "Shacklebolt",
  "Longbottom",
  "Bones",
  "Crouch",
];

const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return `${firstName}-${lastName}-${nanoid(4)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUsername(stored);
        return;
      }
      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };
    main();
  }, []);

  return { username };
};
