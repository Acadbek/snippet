"use server"
import { db } from '../db'

export const editSnippet = async (id, code) => {
  await db.snippet.update({
    where: { id },
    data: { code }
  })
}
