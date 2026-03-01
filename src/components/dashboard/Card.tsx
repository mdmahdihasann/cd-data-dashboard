import React from "react";

export interface CardProps {
  amount: number;
  title: string;
  percentage?: number;
  lak?: string;
}

const Card: React.FC<CardProps> = ({
  amount,
  title,
  percentage = 0,
  lak = ""
}) => {
  return (
    <div className="bg-white h-full w-full shadow-xl rounded-xl border border-gray-100 hover:border-gray-300 transition px-4 py-6">
      <h2 className="text-3xl text-gray-800 font-medium flex items-center gap-2">
        ${amount} {lak && lak}
        {percentage !== 0 && (
          <span className="text-[16px] font-normal text-gray-400">
            ({percentage}%)
          </span>
        )}
      </h2>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
};

export default Card;