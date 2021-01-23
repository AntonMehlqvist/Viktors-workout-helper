import React from 'react'
import { ReactComponent as Plus } from '../../../../../../images/icon_plus.svg';
import { ReactComponent as Minus } from '../../../../../../images/icon_minus.svg';

const ExerciseOption = ( { name, currentValue, setOption } ) => {
	return (
    <li className="flex justify-between">
      <p>{name}</p>

      <div className="flex items-center">
        <button onClick={ () => setOption( currentValue - 1 ) }>
          <Minus className="w-8 p-2 border-2 rounded-lg" />
        </button>
				<span className="w-8 text-center">
					{ currentValue }
				</span>
        <button onClick={ () => setOption( currentValue + 1 ) }>
          <Plus className="w-8 p-2 border-2 rounded-lg" />
        </button>
      </div>
    </li>
  );
}

export default ExerciseOption
