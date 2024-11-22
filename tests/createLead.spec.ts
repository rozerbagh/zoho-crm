import { test, expect } from "@playwright/test";
import { LeadsPage } from "../pages/LeadsPage";
const orgId : string = process.env.ORG_ID || "org60034647166";
const customViewId: string = process.env.CUSTOM_VIEW_ID || "809492000000029342";
test.describe("Leads Module Tests", () => {
  test("Create a New Lead", async ({ page }) => {
    const leadsPage = new LeadsPage(page);
    await leadsPage.performLogin("rozerbagh456@gmail.com", "password");
    await leadsPage.navigateToCustomLeads(orgId, customViewId);
    await leadsPage.clickCreateLeadButton()
    await leadsPage.createLead("Rozer Bagh", "rozerbagh456@gmail.com");
    // const leadExists = await page.isVisible("text=Rozer Bagh");
    // expect(leadExists).toBeTruthy();
  });
});
