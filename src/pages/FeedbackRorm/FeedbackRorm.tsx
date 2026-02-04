import { useState } from "react"
import styles from "./FeedbackRorm.module.css"
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import Rating from "../../components/ui/Rating/Rating";
import Toggle from "../../components/ui/Toggle/Toggle";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

const FeedbackForm = () => {

  const [name, setName] = useState<string>('');
  const [stars, setStars] = useState<number>(0);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const steps = [name !== '', stars > 0, isAgreed];
  const completedSteps = steps.filter(Boolean).length;
  const progressValue = Math.round((completedSteps / steps.length) * 100);

  const handleSubmit = () => {
    console.log('Отправлено!', {name, stars, isAgreed});
    setIsSubmitted(true);    
  }

  const handleReset =() => {
    setName('');
    setStars(0);
    setIsAgreed(false);
    setIsSubmitted(false);
  }

  return (
    <div className={styles.form}>
      
      {isSubmitted ? (
        <div key="success" className={styles.submitted}>
          <h2>✔ Спасибо за отзыв!</h2>
          <p>Ваше мнение очень важно для нас.</p>
          <Button onClick={handleReset}>Написать еще раз</Button>
        </div>
      ) : (
        <div key="form" className={styles.formInner}>
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

        <div onClick={() => setStars(stars === 5 ? 0 : 5)} style={{ cursor: 'pointer'}}>
          <Rating value={stars} max={5} onClick={(newValue) => setStars(newValue)}/>
        </div>

        <div style={{ marginTop: '15px'}}>
          <Toggle
          label="Согласен с условиями"
          isChecked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
          />
        </div>        
      </div>

        <Button 
          onClick={handleSubmit}
          disabled={progressValue < 100}
          variant={progressValue === 100 ? 'primary' : 'secondary'}
        >
          Отправить
        </Button>
        </div>
        )}
    </div>
  )
}

export default FeedbackForm;