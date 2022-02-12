require("expect-webdriverio");
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const ContractPage = require('../pageobjects/contract.page')
const ContractDetailPage = require('../pageobjects/contractDetail.page')
const Seniority = require("../pageobjects/models/seniority");
const Currency = require("../pageobjects/models/currency");
const Cycle = require("../pageobjects/models/cycle");
const Residence = require("../pageobjects/models/residence");
const Province = require("../pageobjects/models/province");
const dateFormat = require("dateformat");

const CONTRACT_NAME = "Contract Name";
const JOB_TITLE = "Software QA Engineer";
const SENIORITY = Seniority.PRINCIPAL;
const SCOPE = "Testing Scope";
const SPECIAL_CLAUSE = "Test special clause";
const RESIDENCE = Residence.USA;
const PROVINCE = Province.Alabama;
const AMOUNT = 1000;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

describe('Deel App', () => {
    beforeEach("Login", async () => {
        await LoginPage.open();
        await LoginPage.login('bekobako@bako.com', 'Bekobako321*.');
        await HomePage.verifyHeaderIsDisplayed();
      });

    it('should create a Fixed Rate contract', async () => {
        await HomePage.clickCreateAContract();
        await ContractPage.clickFixedRate();
        await ContractPage.setContractName(CONTRACT_NAME)
        await ContractPage.setContractorTaxResidence(RESIDENCE);
        await ContractPage.selectProvince(PROVINCE);
        await ContractPage.setJobTitle(JOB_TITLE);
        await ContractPage.selectSeniority(SENIORITY);
        await ContractPage.setScopeOfWork(SCOPE);
        await ContractPage.setYesterdayAsStartDate();
        await ContractPage.clickNextButton();
        await ContractPage.selectCurrency(Currency.GBP.name);
        await ContractPage.setRate(AMOUNT);
        await ContractPage.selectCycle(Cycle.WEEKLY);
        await ContractPage.clickNextButton();
        await ContractPage.clickNextButton();
        await ContractPage.addSpecialClause(SPECIAL_CLAUSE);
        await ContractPage.clickNextButton();
        await ContractPage.clickCreateContract();

        //Verification & Validation
        await expect(ContractDetailPage.title).toHaveText(CONTRACT_NAME);
        await expect(ContractDetailPage.startDate).toHaveText(
            dateFormat(yesterday, "mmm dS, yyyy")
          );
        await expect(ContractDetailPage.contractType).toHaveText("Fixed rate");
        await expect(ContractDetailPage.jobTitle).toHaveText(JOB_TITLE);
        await expect(ContractDetailPage.seniorityLevel).toHaveText(SENIORITY);
        await expect(ContractDetailPage.rate).toHaveTextContaining(
            Currency.GBP.symbol
        );
        await expect(ContractDetailPage.rate).toHaveTextContaining(
            AMOUNT.toLocaleString("en-US")
        );
        await expect(ContractDetailPage.cycle).toHaveTextContaining(
        Cycle.WEEKLY
        );
        await expect(ContractDetailPage.scopeOfWork).toHaveText(SCOPE);
        await expect(ContractDetailPage.country).toHaveText(
        `${PROVINCE} (${RESIDENCE})`
        );
        await expect(ContractDetailPage.specialClause).toHaveText(SPECIAL_CLAUSE);
    });
});