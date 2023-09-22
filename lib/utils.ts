import { NextResponse } from 'next/server'


export function stripHTML(text: string): string {
  return text
    .replace(/<\/+p+>/g, ' ')
    .replace(/<\/+figcaption+>/g, ' ')
    .replace(/<\/+li+>/g, '; ')
    .replace(/<\/+h+\d+>/g, ': ')
    .replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')
}

export function getWordCount(text: string): number {
  return stripHTML(text).trim().split(/\s+/).length
}

export function createErrorResponse(
  message: string,
  statusCode: number
): NextResponse {
  const errorResponse = {
    status: statusCode >= 500 ? "error" : "fail",
    message,
  }

  return new NextResponse(JSON.stringify(errorResponse), {
    status: statusCode,
    headers: { "Content-Type": "application/json" },
  })
}
