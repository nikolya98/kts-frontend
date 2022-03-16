import QueryString from "qs";

import {
  ApiResponse,
  HTTPMethod,
  IApiStore,
  RequestParams,
  StatusHTTP,
} from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getOptions<ReqT>(params: RequestParams<ReqT>): [RequestInfo, RequestInit] {
    let endpoint: RequestInfo = `${this.baseUrl}${params.endpoint}`;
    const options: RequestInit = {
      method: params.method,
      headers: { ...params.headers },
    };

    if (params.method === HTTPMethod.GET) {
      endpoint = `${endpoint}?${QueryString.stringify(params.data)}`;
    }

    if (params.method === HTTPMethod.POST) {
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json;charset=utf-8",
      };
      options.body = JSON.stringify(params.data);
    }

    return [endpoint, options];
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    try {
      const response = await fetch(...this.getOptions(params));

      if (response.ok) {
        return {
          success: true,
          data: await response.json(),
          status: StatusHTTP.OK,
        };
      }

      return {
        success: false,
        data: await response.json(),
        status: response.status,
      };
    } catch (e) {
      return {
        success: false,
        data: null,
        status: StatusHTTP.UNEXPECTED_ERROR,
      };
    }
  }
}
