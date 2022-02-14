import * as qs from "qs";
import fetch from "cross-fetch";
import { ApiResponse, IApiStore, RequestParams, StatusHTTP } from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    const url = `${this.baseUrl}${params.endpoint}?${qs.stringify(
      params.data
    )}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        return {
          success: true,
          data: await response.json(),
          status: StatusHTTP.Ok,
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
