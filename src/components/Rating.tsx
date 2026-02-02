type RatingProps = {
  value: number;
  max: number;
};

const Rating = ({ value, max = 5}: RatingProps) => {
  return (
    <div role="img" aria-label={`Rating: ${value} out of ${max} star}`}>
      {Array.from({length: max}).map((_, index)=> {
        const isFilled = index < value;
        return(
          <span
          key={index}
          style={{
            color: isFilled ? '#FFD700' : '#CCC',
            fontSize: '26px'
          }}
          >
            {isFilled ? '★' : '☆' }
          </span>
        )
      })}

    </div>
  )
}

export default Rating;

