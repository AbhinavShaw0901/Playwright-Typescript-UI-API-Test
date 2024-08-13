import { test } from "@playwright/test";
import { APICommon } from "../../lib/api-common";
const apiCommon = new APICommon();

test.describe.parallel("api tests for delete feature", () => {
  test(
    "DELETE REQUEST - Delete a user",
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.delete("/api/users/2", {});
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 204);
    }
  );
});
