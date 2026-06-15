import { useState, useEffect } from 'react';

export const useLoopingTypewriter = (phrases, speed = 100) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before clearing
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }
    }, isDeleting ? 50 : speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases, speed]);

  return text;
};