import React, { useState } from 'react'
import { ReactComponent as Minus } from '../../../../../images/icon_minus.svg';
import { ReactComponent as Plus } from '../../../../../images/icon_plus.svg';
import ExerciseOptions from './ExerciseOptions/ExerciseOptions';

const ExerciseSelectionItem = ({
  exercise, exercise: { title }
} ) => {
	const [ isSelected, setIsSelected ] = useState( false );
  return (
    <div className="p-4 mb-5 rounded-md shadow-md bg-gray-50">
      <div className="flex items-center justify-between">
        <h4>{title}</h4>

        <button onClick={() => setIsSelected(!isSelected)}>
          { isSelected ?
						<Minus className="w-8 p-2" /> :
						<Plus className="w-8 p-2" /> }
        </button>
      </div>

      <div
        className={`${
          isSelected ? 'max-h-96' : 'max-h-0'
        } overflow-hidden transition-all duration-500`}>
					<ExerciseOptions exercise={ exercise } />
      </div>
    </div>
  );
};

export default ExerciseSelectionItem
