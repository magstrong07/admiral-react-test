import React from 'react';
import { FileUploader, T, Label, Link } from '@admiral-ds/react-ui';
import AttachFileOutlineURL, {
  ReactComponent as AttachFileOutline,
} from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

function App() {
  return (
    <div>
      <T as="h2" font="Additional/L-bold">
        Welcome to React App <AttachFileOutline height="48px" />
      </T>
      <h3>Date : {new Date().toDateString()}</h3>
      <Label>ui-kit label</Label>
      <Link>hehe</Link>
      <FileUploader />
      <img src={AttachFileOutlineURL} alt="Attach" />
    </div>
  );
}

export default App;
