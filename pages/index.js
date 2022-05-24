import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.scss';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleClickOnCharacter = ({ target }) => {
    setInputValue(inputValue += target.innerText);
    inputRef.current.focus();
  }

  const handleClearInput = () => {
    setInputValue('');
    inputRef.current.focus();
  }

  const handleDeleteCharacter = () => {
    if (inputValue.length > 0) {
      setInputValue(inputValue.slice(0, -1));
      inputRef.current.focus();
    }
  }

  const handleResultAccount = () => {
    try {
      const conta = eval(inputValue);

      if (conta !== 0 && !conta) {
        alert('Conta inválida!');
        return;
      }

      setInputValue(conta);

    } catch (e) {
      alert('Conta inválida!');
      setInputValue('');
      inputRef.current.focus();
      return;
    }
  }

  const handleKeyPress = ({ charCode }) => {
    if (charCode === 13) {
      if (inputValue.length === 0) {
        alert ('Você precisa realizar uma conta para visualizar o resultado!')
      } else {
        handleResultAccount();
      }
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <section className={styles.calculatorContainer}>
      <div className={styles.calculatorArea}>
        <input onKeyPress={handleKeyPress} ref={inputRef} value={inputValue} type="text" onChange={({ target }) => setInputValue(target.value)} />

        <div className={styles.calculatorButtons}>
          <button onClick={handleClearInput} className={styles.symbol}>C</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>(</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>)</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>/</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>7</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>8</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>9</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>*</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>4</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>5</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>6</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>+</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>1</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>2</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>3</button>
          <button onClick={handleClickOnCharacter} className={styles.symbol}>-</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>0</button>
          <button onClick={handleClickOnCharacter} className={styles.btnNum}>.</button>
          <button onClick={handleDeleteCharacter} className={styles.btnNum}><RiDeleteBack2Fill /></button>
          <button onClick={handleResultAccount} className={`${styles.equal} ${styles.symbol}`}>=</button>
        </div>
      </div>
    </section>
  )
}

export default Home;
