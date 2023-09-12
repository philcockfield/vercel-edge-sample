import Pkg from '../../package.json' assert { type: 'json' };

export const runtime = 'edge';

export async function GET(request: Request) {
  const name = Pkg.name;
  const version = Pkg.version;
  return HttpResponse.json(200, { name, version });
}

const HttpResponse = {
  json(status: number, data: any) {
    const json = JSON.stringify(data || {});
    return new Response(json, { status, headers: { 'Content-Type': 'application/json' } });
  },
} as const;
