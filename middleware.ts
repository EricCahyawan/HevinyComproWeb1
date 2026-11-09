import { next } from '@vercel/edge';
import { errorPage, getRequestAction } from './src/seoRouting';

export default function middleware(request: Request): Response {
  const action = getRequestAction(new URL(request.url));
  if (action.kind === 'redirect') {
    return new Response(null, { status: 301, headers: { Location: action.location } });
  }
  if (action.kind === 'error') {
    return new Response(request.method === 'HEAD' ? null : errorPage(action.status), {
      status: action.status,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, follow',
      },
    });
  }
  return next();
}
