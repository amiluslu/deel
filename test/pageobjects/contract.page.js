const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContractPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fixedRateOption() {
        return $(".heap-start-fixed-contract [class='mt-9']");
    }

    get contractNameInput(){
        return $("input[name='name']");
    }

    get contractorTaxResidenceInput(){
        return $("[data-qa=contractor-tax-residence] input");
    }

    get taxProvinceInput() {
        return $("[data-qa=contractor-tax-residence-province] input");
    }

    get jobTitleInput() {
        return $("[name='jobTitle']");
    }

    get senioritySelector() {
        return $("[data-qa=selector-seniority-level] input[type=text]");
    }

    get scopeOfWorkInput() {
        return $("[name='scope']");
    }
    
    get nextButton() {
        return $("button=next");
    }
    
    get calendarInput() {
        return $(".deel-ui__calendar-input-container__input");
    }

    get yesterdayButton() {
        return $(
          "//*[contains(@class,'react-calendar__tile--active')]/preceding-sibling::*[1]"
        );
    }

    get currencySelector() {
        return $("[data-qa=currency-select] input[type=text]");
    }

    get rateInput() {
        return $("[name='rate']");
    }

    get cycleSelector() {
        return $("[data-qa=cycle-select] input[type=text]");
    }

    get specialClauseButton() {
        return $("[data-qa=special-clause-card] button");
    }

    get specialClauseInput() {
        return $("[data-qa=special-clause-card] textarea");
    }

    get createContractButton() {
        return $("button=create contract");
    }

    async clickFixedRate(){
        await this.fixedRateOption.waitForClickable();
        await this.fixedRateOption.click();
    }

    async setContractName(contractName){
        await this.contractNameInput.setValue(contractName);
    }

    async setContractorTaxResidence(country){
        await this.contractorTaxResidenceInput.setValue(country +"\n");
    }

    async setJobTitle(jobTitle) {
        await this.jobTitleInput.setValue(jobTitle);
    }
    
    async selectSeniority(seniority) {
        await this.senioritySelector.setValue(seniority +"\n");
    }

    async selectProvince(province) {
        await this.taxProvinceInput.setValue(province + "\n");
    }

    async setScopeOfWork(scope) {
        await this.scopeOfWorkInput.setValue(scope);
    }

    async clickNextButton() {
        await this.nextButton.click();
    }

    async setYesterdayAsStartDate() {
        await this.calendarInput.click();
        await this.yesterdayButton.click();
    }

    async selectCurrency(currency) {
        await this.currencySelector.setValue(currency + "\n");
    }

    async setRate(rate) {
        await this.rateInput.setValue(rate);
    }

    async selectCycle(cycle) {
        await this.cycleSelector.setValue(cycle + "\n");
    }

    async addSpecialClause(clause) {
        await this.specialClauseButton.click();
        await this.specialClauseInput.setValue(clause);
    }

    async clickCreateContract() {
        await this.createContractButton.click();
    }
}

module.exports = new ContractPage();
