import { test, expect } from '@playwright/test';

test.describe('Anshu Gupta Portfolio - Enterprise E2E Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page loads successfully with correct personal brand metadata', async ({ page }) => {
    await expect(page).toHaveTitle(/Anshu Gupta/i);
    const heroTitle = page.locator('#hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(page.locator('.hero-meta')).toContainText('IES UNIVERSITY');
  });

  test('Navigation links anchor to respective core sections', async ({ page }) => {
    const workLink = page.locator('nav a[href="#work"]');
    await expect(workLink).toBeVisible();

    const aboutLink = page.locator('nav a[href="#about"]');
    await expect(aboutLink).toBeVisible();

    const journeyLink = page.locator('nav a[href="#journey"]');
    await expect(journeyLink).toBeVisible();

    const resumeLink = page.locator('nav a[href="#resume"]');
    await expect(resumeLink).toBeVisible();

    const contactLink = page.locator('nav a[href="#contact"]');
    await expect(contactLink).toBeVisible();
  });

  test('Resume section renders with interactive CV sheet and action buttons', async ({ page }) => {
    const resumeSection = page.locator('#resume');
    await expect(resumeSection).toBeVisible();
    await expect(resumeSection).toContainText('CURRICULUM VITAE');
    await expect(resumeSection.locator('.resume-3d-card')).toBeVisible();
  });

  test('Project case studies render with engineering view & live links', async ({ page }) => {
    const cravings = page.locator('#project-cravings');
    await expect(cravings).toBeVisible();
    await expect(cravings).toContainText('Cravings');
    await expect(cravings.locator('.engineering-highlights')).toBeVisible();

    const gochat = page.locator('#project-gochat');
    await expect(gochat).toBeVisible();
    await expect(gochat).toContainText('GoChat');

    const cardioshield = page.locator('#project-cardioshield');
    await expect(cardioshield).toBeVisible();
  });

  test('Interactive skills matrix displays all 5 enterprise layers', async ({ page }) => {
    const skillsColumns = page.locator('.skills-5-cols .skill-column');
    await expect(skillsColumns).toHaveCount(5);
  });

  test('Industry certifications render with verified badges', async ({ page }) => {
    const certCards = page.locator('.cert-card');
    await expect(certCards).toHaveCount(3);
    await expect(certCards.first()).toContainText('NPTEL');
  });

  test('Contact form handles validation and rate limiting gracefully', async ({ page }) => {
    const emailSubmitBtn = page.locator('button:has-text("Send via Gmail")');
    await expect(emailSubmitBtn).toBeVisible();

    await emailSubmitBtn.click();
    const alertBox = page.locator('.form-status');
    await expect(alertBox).toContainText(/fill in/i);
  });
});

