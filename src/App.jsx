import React, { useState, useEffect, useRef } from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import styles from './App.module.scss';
import CreatorInfos from './components/CreatorInfos';

const App = () => {
  let [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleClickOnNum = ({ target }) => {
    setInputValue((inputValue += target.innerText));
    inputRef.current.focus();
  };

  const handleClearInput = () => {
    setInputValue('');
    inputRef.current.focus();
  };

  const handleDeleteNum = () => {
    if (inputValue.length > 0) {
      inputRef.current.focus();
      setInputValue(inputValue.slice(0, -1));
    }
  };

  const handleResultAccount = () => {
    try {
      const conta = eval(inputValue);
      inputRef.current.focus();

      if (conta !== 0 && !conta) {
        alert('Conta inválida!');
        return;
      }

      setInputValue(conta);
    } catch (e) {
      alert('Conta inválida!');
      setInputValue('');
      inputRef.current.focus();
    }
  };

  const handleKeyPress = ({ charCode }) => {
    if (charCode === 13) {
      if (inputValue.length === 0) {
        alert('Você precisa realizar uma conta para visualizar o resultado!');
        return;
      }

      handleResultAccount();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={styles.calculatorContainer}>
      <div className={styles.calculatorArea}>
        <input
          ref={inputRef}
          value={inputValue}
          type="text"
          onKeyPress={handleKeyPress}
          onChange={({ target }) => setInputValue(target.value)}
        />

        <div className={styles.calculatorButtons}>
          <button
            type="button"
            onClick={handleClearInput}
            className={styles.symbol}
          >
            C
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            (
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            )
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            /
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            7
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            8
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            9
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            *
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            4
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            5
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            6
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            +
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            1
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            2
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            3
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.symbol}
          >
            -
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            0
          </button>
          <button
            type="button"
            onClick={handleClickOnNum}
            className={styles.btnNum}
          >
            .
          </button>
          <button
            type="button"
            onClick={handleDeleteNum}
            className={styles.btnNum}
          >
            <RiDeleteBack2Fill />
          </button>
          <button
            type="button"
            onClick={handleResultAccount}
            className={`${styles.equal} ${styles.symbol}`}
          >
            =
          </button>
        </div>
      </div>

      <CreatorInfos />
    </section>
  );
};

export default App;
