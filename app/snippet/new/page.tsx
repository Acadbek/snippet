import { redirect } from 'next/navigation';
import { db } from '../../db'

const SnippetForm = () => {
  const createSnippet = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })

    redirect('/')
  };

  return (
    <form action={createSnippet} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter title"
          name='title'
        />
      </div>
      <div className="mb-6">
        <label htmlFor="code" className="block text-gray-700 font-bold mb-2">
          Code
        </label>
        <textarea
          id="code"
          rows={7}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter code"
          name='code'
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Snippet
        </button>
      </div>
    </form>
  );
};

export default SnippetForm;
