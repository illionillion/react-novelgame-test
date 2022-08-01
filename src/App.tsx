import { useContext } from 'react';
import TextDialog, { context,} from './components/textdialog';

function App() {
  return (
    <div className="App">
      <TextDialog>
          Hello World!
          I am Web Developer.
      </TextDialog>
      <div>{`${useContext(context)}`}</div>
    </div>
  );
}

export default App;
