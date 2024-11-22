import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage"
export class LeadsPage extends BasePage {
  private createLeadButton: Locator;
  constructor(page: Page) {
    super(page);
    this.createLeadButton = page.locator('[aria-label="Create Lead"]');
  }

  async navigateToCustomLeads(orgId: string, customViewId: string) {
    const url = `/crm/${orgId}/tab/Leads/create`;
    await this.page.goto(url);
  }

  async createLead(name: string, email: string) {
    console.log(name, email);
    await this.page.fill("#Crm_Leads_FIRSTNAME_LInput", name);
    await this.page.fill("#Crm_Leads_EMAIL_LInput", email);
    // await this.page.click("#createLeadButton");
  }
  
  async clickCreateLeadButton() {
    console.log(this.createLeadButton);
    // await this.createLeadButton.click();
  }
  async deleteLead(leadId: string) {
    await this.page.click(`#deleteLeadButton-${leadId}`);
  }
}
