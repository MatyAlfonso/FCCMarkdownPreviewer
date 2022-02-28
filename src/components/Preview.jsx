import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import Markdown from 'marked-react';

export const Preview = () => {

    const { data } = useContext(DataContext);

    return (
        <div
            id='preview'
            className="dark:text-white my-10 mx-auto p-10 text-xl w-3/5 border-solid border-2 border-white-500 rounded leading-10" 
        >
            <Markdown value={data} breaks={true} gfm={true}/>
        </div>
    );
};
