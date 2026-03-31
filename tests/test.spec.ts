import {test, expect,Page} from "@playwright/test"

test ('user successfully purchase R29 vodacom bundle', async ({page}) => {

    await page.goto ('https://quality-engineering-labs.vercel.app/payment.html')
    await page.getByTestId ('input-phone').fill ('0721234567')
    await page. getByTestId ('select-product').selectOption ('Bundle')
    await page. getByTestId ('select-provider').selectOption ('Vodacom')
    await page. getByTestId ('quick-R29').click()
    await page. getByTestId ('check-terms').check()
    await page.getByRole ('button',{name: 'Process Sale'}). click()
    await expect(page.getByText ('Sale Processed Successfully!')).toBeVisible()
    await page. getByTestId ('receipt-ref').click()
  
}


)