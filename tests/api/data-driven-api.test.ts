import { test, expect } from "@playwright/test";
import dataDriven from "../../test-data/data-driven-api.json";
import { APICommon } from "../../lib/api-common";
const apiCommon = new APICommon();

dataDriven.map((ele) => {
  test(
    `POST REQUEST - Register user users with email -> ${ele.email} and password -> ${ele.password} stored in a json file`,
    { tag: "@api" },
    async ({ request }) => {
      const response = await request.post("/api/register", {
        data: {
          email: ele.email,
          password: ele.password,
        },
      });
      const respBody = JSON.parse(await response.text());
      console.log(respBody);
      apiCommon.getHeaderValues(response);
      apiCommon.validateResponseCode(response, 200);
      expect(respBody).toHaveProperty("token");
    }
  );
});
