import React, { useState, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import { KeyboardReactInterface } from 'react-simple-keyboard/build/interfaces';
import 'react-simple-keyboard/build/css/index.css';

const QwertzKeyboard = () => {
  const [input, setInput] = useState('');
  const [layoutName, setLayoutName] = useState<'default' | 'shift'>('default');
  const keyboardRef = useRef<KeyboardReactInterface | null>(null);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName((prev) => (prev === 'default' ? 'shift' : 'default'));
    }
  };

  return (
    <div className="space-y-4">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          keyboardRef.current?.setInput(e.target.value);
        }}
        className="border px-4 py-2 w-full rounded"
        placeholder="Geben Sie Text ein..."
        onFocus={() => keyboardRef.current?.setInput(input)}
      />

      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        layout={{
          default: [
            '^ 1 2 3 4 5 6 7 8 9 0 ß ´ {bksp}',
            'q w e r t z u i o p ü + #',
            'a s d f g h j k l ö ä {enter}',
            '{shift} y x c v b n m , . - {shift}',
            '{space}'
          ],
          shift: [
            '° ! " § $ % & / ( ) = ? ` {bksp}',
            'Q W E R T Z U I O P Ü * \'',
            'A S D F G H J K L Ö Ä {enter}',
            '{shift} Y X C V B N M ; : _ {shift}',
            '{space}'
          ]
        }}
        display={{
          '{bksp}': '⌫',
          '{enter}': '⏎',
          '{shift}': '⇧',
          '{space}': '␣'
        }}
        theme="hg-theme-default"
        buttonTheme={[
          {
            class: 'bg-gray-100 text-black hover:bg-gray-200 rounded px-1 py-1',
            buttons: '1 2 3 4 5 6 7 8 9 0 q w e r t z u i o p a s d f g h j k l y x c v b n m'
          },
          {
            class: 'bg-blue-500 text-white hover:bg-blue-600 rounded',
            buttons: '{enter} {shift} {bksp}'
          },
          {
            class: 'bg-gray-300 text-black px-4',
            buttons: '{space}'
          }
        ]}
      />
    </div>
  );
};

export default QwertzKeyboard;
