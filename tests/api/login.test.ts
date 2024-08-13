import { test, expect } from "@playwright/test";
import apiUsers from "../../test-data/api-users.json";
import { APICommon } from "../../lib/api-common";
const apiCommon = new APICommon();

test.describe.parallel("api tests for login feature", () => {
  test(
    "POST REQUEST - Login as a valid user",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/login", {
        data: apiUsers.login.user5,
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody).toHaveProperty("token");
    }
  );
  test(
    "POST REQUEST - Login as an invalid user",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/login", {
        data: {
          email: "test@gmail.com",
          // no password
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
