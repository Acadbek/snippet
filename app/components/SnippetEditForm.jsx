'use client';

import { Editor } from '@monaco-editor/react'
import { useState } from 'react';
import * as actions from '../actions'

export default function SnippetEditForm({ snippet }) {
  const [code, setCode] = useState(snippet.code)

  const handleChange = (value) => setCode(value)

  const change = actions.editSnippet.bind(null, snippet.id, code)

  return (
    <div>
      <Editor
        height="40vh"
        theme='vs-dark'
        language='javascript'
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleChange}
      />
      <form action={change}>
        <button>save</button>
      </form>
    </div>
  )
}
