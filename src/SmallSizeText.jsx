import './ShinyText.css';

const SmallSizeText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
   <div className="w-[100%] h-full  flex items-center justify-center ">
       <div className="w-1/2 h-full flex items-center justify-center">
       <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className} text-xl text-center tracking-tight relative `}
      style={{ animationDuration }}
    >
      {text}
    </div>
       </div>
   </div>
  );
};

export default SmallSizeText;
