import React, {ComponentType,} from 'react';
import {useReducer, useState} from './hooks'

const App: ComponentType = () => {
    const [count1, setState] = useState(() => 0);
    const [count2, dispatch] = useReducer((prevState: number, action: 'inc' | 'dec') => {
        switch(action) {
            case 'inc': return prevState + 1;
            default: return prevState - 1;
        }
    }, 0)

    return (
        <div>
            <button onClick={() => setState(count1 - 1)}>dec</button>
            <p>{count1}</p>
            <button onClick={() => setState(count1 + 1)}>inc</button>
            <hr />
            <button onClick={() => dispatch('dec')}>dec</button>
            <p>{count2}</p>
            <button onClick={() => dispatch('inc')}>inc</button>
        </div>
    );
};

export default App;