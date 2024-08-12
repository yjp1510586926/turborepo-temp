import empty from '@/assets/imgs/empty.png';
import React from 'react';

interface EmptyProps {
  errText: string;
}

const Empty: React.FC<EmptyProps> = ({ errText }) => {
  return (
    <div className="flex md:pt-[35px] pt-[75px] pb-[65px] flex-col justify-center items-center">
      <img src={empty} className="w-[140px] h-[165px]" alt="empty" />
      <span className="text-[20px] text-center text-[#fff] mt-[20px]">{errText}</span>
    </div>
  );
};

export default Empty;
