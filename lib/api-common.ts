import { expect } from "@playwright/test";
import { APIResponse } from "@playwright/test";

export class APICommon {
  getHeaderValues(response: APIResponse) {
    let headerValues = response.headers();
    for (const key in headerValues) {
      console.log(`${key}: ${headerValues[key]}`);
    }
  }

  validateResponseCode(response: APIResponse, expectedResponseCode: number) {
    expect(response.status()).toBe(expectedResponseCode);
  }
}
