import { DataProvider } from './context/DataContext';

import { TextArea } from './components/TextArea';
import { Preview } from './components/Preview';
import { Title } from './components/Title';


function App() {
  return (
    <DataProvider>
      <div className='flex flex-col dark:bg-slate-900 h-full'>
        <Title />
        <TextArea />
        <Preview />
      </div>
    </DataProvider>
  );
}

export default App;
