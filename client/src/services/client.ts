import { createClient } from "urql";

export const client = createClient({
  url: import.meta.env.API_BASE_URL || "http://localhost:4000/graphql",
  requestPolicy: "cache-and-network",
});
