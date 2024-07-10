import { Page } from '@playwright/test';

export class HelpDesk {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getInput() {
    return this.page
      .getByRole('cell', { name: 'Search the frequently asked' })
      .getByRole('textbox');
  }

  getButton() {
    return this.page.getByRole('button', {
      name: 'Search the frequently asked',
    });
  }

  async searchForQuestion(question: string) {
    await this.getInput().fill(question);
    await this.getButton().click();
  }
}
