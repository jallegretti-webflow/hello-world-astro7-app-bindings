import type { APIRoute } from 'astro';

// Reads and updates the session through the destructured `session` context.
export const GET: APIRoute = async ({ session }) => {
  const visits = ((await session?.get('visits')) ?? 0) + 1;
  session?.set('visits', visits);
  return Response.json({ visits });
};
