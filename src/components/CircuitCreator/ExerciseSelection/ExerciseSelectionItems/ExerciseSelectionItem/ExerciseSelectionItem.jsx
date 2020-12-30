import React, { useState } from 'react'
import { ReactComponent as Minus } from '../../../../../images/icon_minus.svg';
import { ReactComponent as Plus } from '../../../../../images/icon_plus.svg';

const ExerciseSelectionItem = ({
  exercise: { title }
} ) => {
	const [ isSelected, setIsSelected ] = useState( false );
  return (
    <div className="p-4 mb-5 rounded-md shadow-md bg-gray-50">
      <div className="flex justify-between">
        <h4>{title}</h4>

        <button className="w-4" onClick={() => setIsSelected(!isSelected)}>
          {isSelected ? <Minus /> : <Plus />}
        </button>
      </div>

      <div
        className={`${
          isSelected ? 'max-h-96' : 'max-h-0'
        } overflow-hidden transition-all duration-500`}>

      </div>
    </div>
  );
};

export default ExerciseSelectionItem
