import { useState } from "react"
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import Rating from "../../components/ui/Rating/Rating";
import Toggle from "../../components/ui/Toggle/Toggle";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

const FeedbackForm = () => {

  const [name, setName] = useState<string>('');
  const [stars, setStars] = useState<number>(0);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const steps = [name !== '', stars > 0, isAgreed];
  const completedSteps = steps.filter(Boolean).length;
  const progressValue = Math.round((completedSteps / steps.length) * 100);

  const handleSubmit = () => {
    console.log('Отправлено!', {name, stars, isAgreed});
    alert('Спасибо за отзыв!');    
  }

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
  )
}

export default FeedbackForm;