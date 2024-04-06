import { db } from "@/app/db"

export default async function EditSnippets() {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id }
  })
  return (
    <div>Edit</div>
  )
}
