import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
   <div className="w-full h-full  flex items-center justify-center">
   <div
  className={`shiny-text ${disabled ? 'disabled' : ''} ${className} text-8xl font-medium text-center tracking-tight `}
  style={{ animationDuration }}
>
  {text}
</div>
</div>
  );
};

export default ShinyText;
