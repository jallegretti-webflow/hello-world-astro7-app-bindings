import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ session }) => {
  const previous = (await session?.get<number>("apiCalls")) ?? 0;
  const apiCalls = previous + 1;
  await session?.set("apiCalls", apiCalls);

  return new Response(
    JSON.stringify({
      apiCalls,
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
};
