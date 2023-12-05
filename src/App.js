import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Фокус</button>
    </div>
  );
}
export default MyComponent;
//В этом примере хук useRef используется для получения ссылки на DOM-элемент в React. В данном случае, при клике на кнопку "Фокус", фокус будет установлен на текстовое поле, которое было получено с помощью useRef и сохранено в переменной inputRef.