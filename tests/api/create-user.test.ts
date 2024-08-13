import { test, expect } from "@playwright/test";
import apiUsers from "../../test-data/api-users.json";
import { APICommon } from "../../lib/api-common";
const apiCommon = new APICommon();

test.describe.parallel("api tests for user creation feature", () => {
  test(
    "POST REQUEST - Create a user with email and password",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/users", {
        data: apiUsers.create,
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 201);
      expect(respBody.name).toBe(apiUsers.create.name);
      expect(respBody.job).toBe(apiUsers.create.job);
    }
  );
});
