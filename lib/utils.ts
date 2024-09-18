import { NextResponse } from 'next/server'
import { parseISO, format } from 'date-fns'

export enum Weekdays {
  'Mon.' = 1,
  'Tue.',
  'Wed.',
  'Thu.',
  'Fri.',
  'Sat.',
  'Sun.',
}

export const defaultKeywords: string[] = [
  'pixelshredder', 'pixel-shredder', 'pixel shredder', 'pixel', 'shredder', 'mike devine', 'mike', 'devine'
]

export function formatDate(dateString: string, dateFormat: string = 'LLLL d, yyyy'): string {
  const date = parseISO(dateString)
  return format(date, dateFormat)
}

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
