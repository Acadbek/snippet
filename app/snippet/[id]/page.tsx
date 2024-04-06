import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetDetailProps {
  params: { id: 'string' };
}

export default async function SnippetDetail({ params: { id } }: SnippetDetailProps) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) {
    return notFound()
  }

  return (
    <div>
      <div className="flex justify-between items-center my-8">
        <h2 className="text-lg font-semibold mb-2">{snippet.title}</h2>
        <div className="flex gap-4">
          <Link href={`/snippet/${id}/edit`} className="border p-2">Edit</Link>
          <Link href={`/snippet/${id}/delete`} className="border p-2">Delete</Link>
        </div>
      </div>
      <pre className="bg-gray-400 p-4 rounded-sm">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  );
}
