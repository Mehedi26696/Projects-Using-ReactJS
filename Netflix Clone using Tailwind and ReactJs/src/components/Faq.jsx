import React,{useState} from 'react'

const Faq = (props) => {
    const [buttonText, setButtonText] = useState(<svg width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">   

        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>   
      
      </svg>);
    const [showText, setShowText] = useState(false)


  const handleClick = () => {
    setButtonText(buttonText === 'X' ? <svg width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">   

        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>   
      
      </svg> : 'X');
    setShowText(!showText);
  };
    
  return (
    <div className='flex flex-col bg-[#2d2d2d] text-3xl text-white font-sans cursor-pointer'>
      <div className=' flex bg-[#2d2d2d] hover:bg-[#414141] h-24 justify-between text-3xl text-white font-bold items-center'>
           
      <div className='ml-5'>{props.ques}</div>
      <button onClick={handleClick} className='mr-5'>{buttonText}</button>
      {/* {showText && <p>{props.hide}</p>} */}
      
      </div>
    <div>
        {showText && (<p className='h-60 m-5 text-[28px]'>{props.hide1}<br></br> <br></br>{props.hide2}</p> )} 
    </div>
    </div>
 
  )
}

export default Faq

 