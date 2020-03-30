import React, { useState } from 'react';

const useSelect = (initialState, options) => {

    //initial state of our custom hook
    const [ stateCategories, setState ] = useState(initialState);
    console.log(stateCategories + ' from use select')

    const SelectNews = () => (
        <select
            className='browser-default'
            value={stateCategories}
            onChange={e => setState(e.target.value)}
        >
            {
                options.map(option =>( 
                    <option key={option.value} value={option.value}>{option.label}</option>    
                ))
            }

        </select>
    );

    return [stateCategories, SelectNews]
}

export default useSelect;
