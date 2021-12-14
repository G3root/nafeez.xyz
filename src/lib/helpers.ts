import { prisma } from '@/lib';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
export type GuestBookAll = ThenArg<ReturnType<typeof fetchGuestbookEntries>>;

export const fetchGuestbookEntries = async () => {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  });
  return entries;
};

export function jsonResponse(status: number, data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json'
    }
  });
}
