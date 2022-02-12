const Page = require('./page');

class ContractDetailPage extends Page {
    get title() {
      return $("h1");
    }
    get contractType() {
      return $("[data-qa=contract-type]");
    }
    get jobTitle() {
      return $("[data-qa=job-title]");
    }
    get seniorityLevel() {
      return $("[data-qa=seniority-level]");
    }
    get rate() {
      return $("[data-qa=rate]");
    }
    get cycle() {
      return $("[data-qa=rate] div");
    }
    get scopeOfWork() {
      return $("[data-qa=dpa-row-undefined-value]");
    }
    get specialClause() {
      return $("//div[@data-qa='dpa-row-special-clause-value']/div[2]");
    }
    get country() {
      return $("[data-qa=contractors-country]");
    }
    get startDate() {
      return $("[data-qa=contractors-start-date]");
    }
  }
  
  module.exports = new ContractDetailPage();
  