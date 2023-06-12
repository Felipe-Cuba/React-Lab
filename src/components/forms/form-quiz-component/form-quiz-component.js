import { useState } from 'react';
import './form-quiz-component.css';

export default function FormQuizComponent() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('digitando');

  if (status === 'sucesso') {
    return <h1>Está correto!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('enviando');
    try {
      await handleForm(answer);
      setStatus('sucesso');
    } catch (err) {
      setStatus('digitando');
      setError(err);
    }
  }

  function handleInputChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Quiz da cidade</h2>
      <p>Em qual cidade há um outdoor que transforma ar em água potável?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputText"
          value={answer}
          onChange={handleInputChange}
          disabled={status === 'enviando'}
        />

        <button
          className="submitButton"
          disabled={answer.length === 0 || status === 'enviando'}
        >
          Enviar
        </button>
        {error !== null && <p className="Erro">{error.message}</p>}
      </form>
    </>
  );
}

function handleForm(resposta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let wrongAnswer = resposta.toLowerCase() !== 'lima';
      if (wrongAnswer) {
        reject(
          new Error('Boa tentativa, mas resposta errada. Tente novamente!')
        );
      } else {
        resolve();
      }
    }, 1500);
  });
}
