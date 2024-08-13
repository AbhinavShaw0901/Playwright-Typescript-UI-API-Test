import { test, expect } from "@playwright/test";
import apiUsers from "../../test-data/api-users.json";
import { APICommon } from "../../lib/api-common";
import exp from "constants";
const apiCommon = new APICommon();

test.describe.parallel("api tests for update user feature", () => {
  test(
    "PUT REQUEST - Update a user data",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.put("/api/users/2", {
        data: apiUsers.update,
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody.name).toEqual(apiUsers.update.name);
      expect(respBody.job).toEqual(apiUsers.update.job);
    }
  );

  test(
    "PATCH REQUEST - Update a user data",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.patch("/api/users/2", {
        data: apiUsers.update,
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody.name).toEqual(apiUsers.update.name);
      expect(respBody.job).toEqual(apiUsers.update.job);
    }
  );
});
