import { test, expect } from "@playwright/test";
import apiUsers from "../../test-data/api-users.json";
import { APICommon } from "../../lib/api-common";
const apiCommon = new APICommon();

test.describe.parallel("api tests for user registration feature", () => {
  test(
    "POST REQUEST - Register a user with email and password",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/register", {
        data: apiUsers.login.user3,
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody.id).toBe(8);
      expect(respBody).toHaveProperty("token");
    }
  );
  test(
    "POST REQUEST - Unsuccessful Registration",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/register", {
        data: {
          email: "sydney@fife",
        },
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 400);
      expect(respBody.error).toBe("Missing password");
    }
  );
});
