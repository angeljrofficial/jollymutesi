import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypingEffect = ({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse ml-1 text-primary">|</span>
    </span>
  );
};

export default TypingEffect;
