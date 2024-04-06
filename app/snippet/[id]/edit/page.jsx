import { db } from "@/app/db"
import SnippetEditForm from "../../../components/SnippetEditForm"

export default async function EditSnippets(props) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id }
  })
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}
