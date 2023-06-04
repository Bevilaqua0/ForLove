import { useRef, useState } from "react";
import emoji from "./assets/emoji.png";
import health from "./assets/health.png";

function App() {
  var noButtonTranslate = 0
  const noButton = useRef()
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const answers = [
    "Você está disposta a responder algumas perguntas?",
    "Você responderá com total sinceridade?",
    "Tem certeza de que deseja continuar?",
    "Namora comigo? 💍"
  ]

  const handleYesAnswerButton = () => {
    setCurrentAnswer(currentAnswer + 1)
  }
  const handleNoAnswerButton = () => {
    const maxVerticalPosition = 80;
    const minVerticalPosition = -80;
    const randomVerticalPosition = Math.floor(Math.random() * (maxVerticalPosition - minVerticalPosition + 1)) + minVerticalPosition;
  
    if (noButtonTranslate === 0) {
      noButton.current.style.transform = `translate( 80px, ${randomVerticalPosition}px)`;
      noButtonTranslate = 1;
    } else {
      noButton.current.style.transform = `translate(-80px, ${randomVerticalPosition}px)`;
      noButtonTranslate = 0;
    }

  }
  


  return (
    <div className="flex flex-col w-full min-h-screen items-center pt-14">
      <img src={emoji} alt="" width={200} />

      <div className="flex flex-col mt-10 min-w-full items-center">
        <p className="text-sms font-semibold break-words" align="center">{answers[currentAnswer]}</p>

        <div className="flex mt-10 gap-4">
          {currentAnswer < answers.length ? (
            <>
              <button
                onClick={handleYesAnswerButton}
                className="bg-tertiary text-secondary font-bold px-6 py-2 rounded border-primary border-r-2 border-b-2 active:bg-secondary active:color-tertiary transition-colors duration-300 outline-none"
              >
                Sim
              </button>

              {currentAnswer === answers.length - 1 && (
                <button
                  ref={noButton}
                  onClick={handleNoAnswerButton}
                  className="bg-tertiary text-secondary font-bold px-6 py-2 rounded border-primary border-r-2 border-b-2 active:bg-secondary active:text-tertiary transition-colors duration-300 outline-none"
                >
                  Não
                </button>
              )}

            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="font-semibold" align="center">"
                <b>Te amarei de Janeiro a Janeiro, até o mundo acabar"</b>
              </p>

              <p align="center">Te amo muito, você é e sempre será o amor da minha vida</p>

              <img src={health} alt="" width={200} />

              <p className="mt-10">Seu homem  🤍</p>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
