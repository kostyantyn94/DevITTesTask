import { useState } from "react";

const CensoredText = ({ badWords, children }) => {
  const words = children.split(/\b/); // Разбиваем текст на слова с учетом границ слов
  const [originalWordIndex, setOriginalWordIndex] = useState(null);

  console.log(badWords);

  console.log(words);

  const handleWordClick = (index) => {
    setOriginalWordIndex(index);
  };

  return (
    <div>
      {words.map((word, index) => {
        const lowerWord = word.toLowerCase();
        badWords = badWords.map((word) => word.toLowerCase());
        const censoredWord = badWords.includes(lowerWord)
          ? "*".repeat(word.length)
          : word;
        console.log(censoredWord);
        return (
          <span
            key={index}
            onClick={() => {
              if (badWords.includes(lowerWord)) {
                handleWordClick(index);
              }
            }}
          >
            {censoredWord}
          </span>
        );
      })}
      {originalWordIndex !== null && (
        <div>Original: {words[originalWordIndex]}</div>
      )}
    </div>
  );
};

const App = () => {
  const badWords = ["test", "someBadWord", "VeRy"];
  const someText = "Very long text who containts someBadWord and testWord";

  return (
    <div>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </div>
  );
};

export default App;
