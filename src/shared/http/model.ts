// Define interfaces
export interface Response<T = any> {
  status: number;
  data: Partial<T>;
  debugMessage?: string;
  message: string;
  error: boolean;
}

export interface createHttpClientProps {
  PrefixUrl: any;
}

export interface OptionRequest {
  directPrefixUrl?: string;
}

export interface PostMethodPayload {
  [key: string]: string | number;
}

export interface HttpClient {
  post: (endpoint: string, payload: PostMethodPayload, option?: OptionRequest) => Promise<Response<any>>;
  get: (endpoint: string, option?: OptionRequest) => Promise<Response<any>>;
}
