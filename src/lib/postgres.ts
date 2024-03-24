import postgres from "postgres";

export const sql = postgres('postegresql://docker:docker@localhost:5432/shortlinks');