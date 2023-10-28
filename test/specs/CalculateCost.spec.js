const{pages}=require('../po');
describe("Test for calculating cost",()=> {

   // beforeEach(async function () {
  //      await pages('home').open();
  //    });

    it("Calculate estimated cost and send email",async()=>{
      const homePage = pages('home');
      await homePage.open();
      await homePage.topMenu.item('search').click();
      await homePage.topMenu.item('inputSearch').click();
      await homePage.topMenu.item('inputSearch').setValue('Google Cloud Platform Pricing Calculator');
      await browser.keys("\uE007");
      await homePage.search.item('search_result').click();
      const calcPage = pages('calc');
      //await calcPage.open();
      await calcPage.switchFrame('parentFrame');
      await calcPage.switchFrame('instanceFrame');
      const instance = await calcPage.calcForm.input('instances');
      await instance.click();
      await instance.setValue('4');
      const threads = await calcPage.calcForm.input('threadsPerCore');
      await threads.click();
      //await browser.pause(10000);
      const oneThread = await calcPage.calcForm.input('oneThreadPerCore');
      await oneThread.click();
      await browser.pause(10000);
     // await elem2.selectByIndex(0);
      //console.log(await elem2.getValue());
    //  select_option_307
     // await elem2.setValue('');
    })     


})