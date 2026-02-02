import { useState } from "react"
import ProgressBar from "./ProgressBar";
import Rating from "./Rating";
import Toggle from "./Toggle";
import Input from "./Input";

const FeedbackForm = () => {

  const [name, setName] = useState<string>('');
  const [srars, setStars] = useState<number>(0);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const steps = [name !== '', srars > 0, isAgreed];
  const completedSteps = steps.filter(Boolean).length;
  const progressValue = Math.round((completedSteps / steps.length) * 100);

  return (
    <div style={{ maxWidth: '450px', padding: '20px', border: '1px solid #ddd', borderRadius: '12px'}}>
      <h2>Оставить отзыв</h2>

      <ProgressBar progress={progressValue} label="Заполнение анкеты" />

      <div style={{ marginTop: '20px'}}>
  
        <Input
          label="Ваше имя"
          placeholder="Введите имя:"
          isRequired={true}
          value={name}          
          onChange={setName}
          />

        <p>Ваша оценка:</p>

        <div onClick={() => setStars(5)} style={{ cursor: 'pointer'}}>
          <Rating value={srars} max={5} onClick={(newValue) => setStars(newValue)}/>
        </div>

        <div style={{ marginTop: '15px'}}>
          <Toggle
          label="Согласен с условиями"
          isChecked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
          />
        </div>        
      </div>

      <button
        disabled={progressValue < 100}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '10px',
          backgroundColor: progressValue === 100 ? '#4CAF50' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: progressValue === 100 ? 'pointer' : 'not-allowed',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        Отправить
      </button>
    </div>
  )
}

export default FeedbackForm;