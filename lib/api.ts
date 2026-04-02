import axios from "axios";
import type { CreateNoteData, Note } from "@/types/note";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
 
const instance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});
 
export const fetchNotes = async (
  page: number,
  search: string,
): Promise<FetchNotesResponse> => {
  const response = await instance.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search,
    },
  });
  return response.data;
};
 
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await instance.get<Note>(`/notes/${id}`);
  return response.data;
};
 
export const createNote = async (note: CreateNoteData): Promise<Note> => {
  const response = await instance.post<Note>("/notes", note);
  return response.data;
};
 
export const deleteNote = async (id: string): Promise<Note> => {
  const response = await instance.delete<Note>(`/notes/${id}`);
  return response.data;
};