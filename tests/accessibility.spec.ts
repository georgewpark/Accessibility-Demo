import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('homepage', () => {
  test('should not have any automatically detectable WCAG 2.2 A or AA failures', async ({
    page
  }) => {
    await page.goto('./')

    const wcagScanResults = await new AxeBuilder({ page })
      .withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
        'wcag22a',
        'wcag22aa'
      ])
      // .include('header')
      // .exclude('footer')
      // .withRules('image-alt')
      // .disableRules('color-contrast')
      .analyze()

    // Expect no WCAG violations
    expect(wcagScanResults.violations).toEqual([])
  })

  test('should follow common accessibility best practice (excluding WCAG 2.2 failures)', async ({
    page
  }) => {
    await page.goto('./')

    const bestPractiseScanResults = await new AxeBuilder({ page })
      .withTags(['best-practice'])
      .analyze()

    // Expect no best practise violations
    expect(bestPractiseScanResults.violations).toEqual([])
  })
})
