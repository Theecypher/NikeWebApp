const Button = ({ text, icon, blackButton }) => {
    return (
      <div>
        {/* <button className="text-[#fff] text-lg bg-red-500 py-3 mt-[30px] mb-[20px] px-10 rounded-[30px] flex items-center justify-center gap-3"> */}
        <button className={blackButton ? "text-[#fff] font-bold text-sm outline-none bg-black py-2 px-6 rounded-[20px]"
        : "text-[#8f8b8b] bg-[#e1e1e1] text-sm py-2 font-bold outline-none px-6 rounded-[20px]" 
        }>
          {text}
          {icon}
        </button>
  
        {/* <button onClick={onClick} className={twMerge('bg-main-blue py-[10px] px-[24px] text-white text-[16px] rounded-[16px] hover:bg-opacity-75', className)}>{children}</button> */}
      </div>
    );
  };
  
  export default Button;
  