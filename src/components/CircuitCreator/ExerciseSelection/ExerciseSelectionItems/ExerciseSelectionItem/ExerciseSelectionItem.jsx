import React, { useState } from 'react'
import { ReactComponent as Minus } from '../../../../../images/icon_minus.svg';
import { ReactComponent as Plus } from '../../../../../images/icon_plus.svg';

const ExerciseSelectionItem = ({
  exercise: { title }
} ) => {
	const [ isSelected, setIsSelected ] = useState( false );
  return (
    <div className="py-4 border-b-2 border-gray-400">
      <div className="flex justify-between">
        <h4>{title}</h4>

        <button className="w-4 mr-2" onClick={() => setIsSelected(!isSelected)}>
          {isSelected ? <Minus /> : <Plus />}
        </button>
      </div>

      <div className={ `${ isSelected ? 'h-max' : 'h-0' } overflow-hidden` }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        dolores molestiae aliquid obcaecati neque sit, debitis omnis soluta ab
        hic facilis quibusdam consectetur voluptas vero? Provident, laudantium
        esse? Dolore iure dolores necessitatibus nesciunt illum odio blanditiis
        quas voluptates. Expedita ratione illum magnam cumque doloremque nobis
        ipsum iure veritatis, quasi doloribus?
      </div>
    </div>
  );
};

export default ExerciseSelectionItem
