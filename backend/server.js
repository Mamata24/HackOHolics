const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/postrequest', async (req, res, next) => {
    //opens the browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    //loads the url
    await page.goto('https://auth.revvsales.com/signin');

    //authentication
    await page.type('#signin-email-field', 'reva.bob@gmail.com');
    await page.click('#signin-email-continue-btn');
    await page.waitForTimeout(1000);
    await page.type('#signin-password-field', 'Mcboatface@10');

    //navigating to landing page
    await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.click('#signin-button-field'), // Clicking the link will indirectly cause a navigation
    ]);

    //navigating to the document editing page
    await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.goto(
            `https://ft4l0l2l.revvsales.com/documents/${req.query.doc_no}`
        ), // Clicking the link will indirectly cause a navigation
    ]);
    await page.waitForTimeout(2000);

    //entering values in the form fields
    await page.focus('.revv-inp');
    await page.keyboard.type(req.query.houseNo, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.doc_no.split('DOC-')[1], { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.keyboard.type(req.query.firstname, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.lastname, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.schedule, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.category, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.description, { delay: 100 });
    await page.keyboard.press('Tab');

    const [button] = await page.$x("//button[contains(., 'Send')]");
    await button.click();

    const [send_email_li] = await page.$$('.btn-send-heading');
    await send_email_li.click();
    await page.waitForTimeout(2000);
    await page.keyboard.type(req.query.email, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.firstname, { delay: 100 });
    await page.keyboard.press('Tab');

    await page.keyboard.type(req.query.lastname, { delay: 100 });
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);

    const [send_doc] = await page.$$('.btn-primary');
    await send_doc.click();

    await page.waitForTimeout(2000);

    // //taking screenshot of the page
    // await page.screenshot({ path: 'login.png' });

    //close the browser. now with the help of doc_no, doc_id and object_id, you can create a magic link of the document using revvsales api's
    await browser.close();
    res.json({ name: 'done' });
});

app.listen(process.env.PORT);
