import { useState } from 'react';

export const useToggle = _ => {
    const [ editorIsVisible, setEditorIsVisible ] = useState(false);
    const toggle = _ => setEditorIsVisible(!editorIsVisible);
    return { editorIsVisible, toggle }
}
