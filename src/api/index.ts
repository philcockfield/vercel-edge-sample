import { DEFAULTS } from '../common.js';
export const runtime = 'edge';

/**
 * Sample
 */
export async function GET(request: Request) {
  const payload = {
    foo: DEFAULTS.foo,
  };
  return HttpResponse.json(200, payload);
}

/**
 * Helpers
 */
const HttpResponse = {
  json(status: number, data: any) {
    const json = JSON.stringify(data || {});
    return new Response(json, { status, headers: { 'Content-Type': 'application/json' } });
  },
};
