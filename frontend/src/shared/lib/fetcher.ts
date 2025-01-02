import { API_URL } from '@/shared/lib/constants';

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchApiOptions<TBody> {
  method?: FetchMethod;
  headers?: Record<string, string>;
  body?: TBody;
  signal?: AbortSignal;
}

interface FetchApiResponse<TResponse> {
  data: TResponse | null;
  error: string | null;
}

export async function fetcher<TResponse, TBody = undefined>(
  url: string,
  options: FetchApiOptions<TBody> = {},
): Promise<FetchApiResponse<TResponse>> {
  const { method = 'GET', headers = {}, body, signal } = options;

  try {
    const response = await fetch(`${API_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        data: null,
        error: `HTTP Error: ${response.status} - ${errorText}`,
      };
    }

    const data: TResponse = await response.json();
    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: (error as Error).message || 'An unknown error occurred',
    };
  }
}
