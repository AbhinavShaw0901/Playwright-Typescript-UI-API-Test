import { test, expect, APIResponse } from "@playwright/test";
import { APICommon } from "../../lib/api-common";
import apiUsers from "../../test-data/api-users.json";
const apiCommon = new APICommon();
test.describe.parallel("api tests for login feature", () => {
  test("GET REQUEST - List all users", { tag: "@api" }, async ({ request }) => {
    const response: APIResponse = await request.get("/api/users?page=1", {
      data: {
        page: 1,
      },
    });
    const respBody = JSON.parse(await response.text());
    const data = respBody.data;
    apiCommon.getHeaderValues(response);
    apiCommon.validateResponseCode(response, 200);
    for (let i = 0; i < data.length; i++) {
      expect(data[i].id).toBe(i + 1);
      expect(data[i]).toHaveProperty("email");
      console.log(`id : ${data[i].id}`);
      console.log(`email : ${data[i].email}`);
    }
  });
  test(
    "GET REQUEST - List a single user",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.get("/api/users/2", {});
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody.data.id).toBe(2);
      expect(respBody.data.email).toBe(apiUsers.login.user2.email);
      expect(respBody).toHaveProperty("support");
    }
  );
});
