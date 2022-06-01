import { test, expect } from '@playwright/test';

test.describe('Smart Link', () => {
  const spotifyURL = 'https://open.spotify.com/track/6ApesLSI24F5b9m9DsPZCS';
  const appleMusicURL = 'https://music.apple.com/us/album/citadela/1620610721';
  const youtubeMusicURL = 'https://music.youtube.com/watch?v=J_TpZ6DU-Mk';

  test.beforeEach(async({ page }) => {
    await page.goto('/');
  });

  test.describe('when the user enters valid data and submits the form', () => {
    test('successfully creates smart link', async({ page }) => {
      await page.locator('data-testid=add-streaming').click();
      await page.locator('input[name="services\\.0\\.url"]').fill(spotifyURL);

      await page.locator('data-testid=add-streaming').click();
      await page.locator('select[name="services\\.1\\.name"]').selectOption('Apple Music');
      await page.locator('input[name="services\\.1\\.url"]').fill(appleMusicURL);

      await page.locator('data-testid=add-streaming').click();
      await page.locator('select[name="services\\.2\\.name"]').selectOption('YT Music');
      await page.locator('input[name="services\\.2\\.url"]').fill(youtubeMusicURL);

      await page.locator('data-testid=create-link').click();

      await expect(page).toHaveURL('http://localhost:8080/#/eyJzZXJ2aWNlcyI6W3sibmFtZSI6IlNwb3RpZnkiLCJ1cmwiOiJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNkFwZXNMU0kyNEY1YjltOURzUFpDUyJ9LHsibmFtZSI6IkFwcGxlIE11c2ljIiwidXJsIjoiaHR0cHM6Ly9tdXNpYy5hcHBsZS5jb20vdXMvYWxidW0vY2l0YWRlbGEvMTYyMDYxMDcyMSJ9LHsibmFtZSI6IllUIE11c2ljIiwidXJsIjoiaHR0cHM6Ly9tdXNpYy55b3V0dWJlLmNvbS93YXRjaD92PUpfVHBaNkRVLU1rIn1dfQ==');
      await expect(page.locator('data-testid=link-0')).toHaveAttribute('href', spotifyURL);
      await expect(page.locator('data-testid=link-1')).toHaveAttribute('href', appleMusicURL);
      await expect(page.locator('data-testid=link-2')).toHaveAttribute('href', youtubeMusicURL);
      await expect(page).toHaveScreenshot();
    });
  });

  test.describe('when the user removes streaming from the list', () => {
    test('removes streaming from the list', async({ page }) => {
      await page.locator('data-testid=add-streaming').click();
      await page.locator('data-testid=remove-streaming-0').click();

      await expect(page.locator('input[name="services\\.0\\.name"]')).not.toBeVisible();
      await expect(page.locator('input[name="services\\.0\\.url"]')).not.toBeVisible();
      await expect(page.locator('data-testid=remove-streaming-0')).not.toBeVisible();
    });

    test('disables submit button', async({ page }) => {
      await page.locator('data-testid=add-streaming').click();
      await page.locator('data-testid=remove-streaming-0').click();

      await expect(page.locator('data-testid=create-link')).toBeDisabled();
    });
  });

  test.describe('when the user enters invalid data and submits the form', () => {
    test.describe('when user does not enter url', () => {
      test('renders correct errors', async({ page }) => {
        await page.locator('data-testid=add-streaming').click();
        await page.locator('data-testid=create-link').click();

        await expect(page.locator('data-testid=url-field-0')).toHaveText('Required');
      });
    });

    test.describe('when the user enters invalid urls', () => {
      test('renders correct errors', async({ page }) => {
        await page.locator('data-testid=add-streaming').click();
        await page.locator('input[name="services\\.0\\.url"]').fill('https://example.com');

        await page.locator('data-testid=add-streaming').click();
        await page.locator('select[name="services\\.1\\.name"]').selectOption('Apple Music');
        await page.locator('input[name="services\\.1\\.url"]').fill('https://example.com');

        await page.locator('data-testid=add-streaming').click();
        await page.locator('select[name="services\\.2\\.name"]').selectOption('YT Music');
        await page.locator('input[name="services\\.2\\.url"]').fill('https://example.com');

        await page.locator('data-testid=create-link').click();

        await expect(page.locator('data-testid=url-field-0')).toHaveText('Invalid Spotify URL');
        await expect(page.locator('data-testid=url-field-1')).toHaveText('Invalid Apple Music URL');
        await expect(page.locator('data-testid=url-field-2')).toHaveText('Invalid YT Music URL');
      });
    });
  });
});
