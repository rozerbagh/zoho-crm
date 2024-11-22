import { Page } from "@playwright/test";

export default class LeadsPage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    const url = `https://accounts.zoho.in/signin`;
    await this.page.goto(url);
  }

  async performLogin(name: string, email: string) {
    await this.navigateToLoginPage();
    console.log(name, email);
    await this.page.fill("#Crm_Leads_FIRSTNAME_LInput", name);
    await this.page.fill("#Crm_Leads_EMAIL_LInput", email);
    // await this.page.click("#createLeadButton");
  }

  async performLogout() {}
}
