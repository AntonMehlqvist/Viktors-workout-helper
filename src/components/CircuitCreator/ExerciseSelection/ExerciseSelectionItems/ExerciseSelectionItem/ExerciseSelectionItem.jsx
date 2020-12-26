import React, { useState } from 'react'
import { ReactComponent as Minus } from '../../../../../images/icon_minus.svg';
import { ReactComponent as Plus } from '../../../../../images/icon_plus.svg';

const ExerciseSelectionItem = ({
  exercise: { title }
} ) => {
	const [ isSelected, setIsSelected ] = useState( false );
  return (
    <div>
      <div className="flex justify-between py-4 border-b-2 border-gray-400">
        <h4>{title}</h4>

        <button
				className="w-4 mr-2"
				onClick={ () => setIsSelected( ! isSelected ) }>
					{isSelected ? <Minus /> : <Plus />}
				</button>
      </div>
    </div>
  );
};

export default ExerciseSelectionItem
