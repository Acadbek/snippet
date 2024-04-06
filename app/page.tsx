import Link from "next/link";
import { db } from "./db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <div>
      <div className="flex border mb-8 p-4 justify-between items-center">
        <h1>Snippets</h1>
        <Link href='/snippet/new'>Add new snippet</Link>
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Snippets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {snippets.map((snippet) => (
            <Link href={`snippet/${snippet.id}`} key={snippet.id} className="bg-white rounded shadow-md p-4 text-black">
              <h2 className="text-lg font-semibold mb-2">{snippet.title}</h2>
              <pre className="whitespace-pre-wrap overflow-x-auto">
                <code className="line-clamp-2">
                  {snippet.code}
                </code>
              </pre>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
