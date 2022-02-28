import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const TextArea = () => {

    const { data, setData } = useContext(DataContext);

    const handleChange = (e) => {
        setData(e.target.value);
    };

    return (
        <textarea
            id='editor'
            className='h-96 w-9/12 mx-auto my-10 p-4 text-xl rounded bg-neutral-50'
            placeholder='Write something here...'
            onChange={handleChange}
        >
            {data}
        </textarea>
    );
};
