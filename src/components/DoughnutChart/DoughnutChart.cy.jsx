import React from "react";
import DoughnutChart from "./DoughnutChart";

describe("<DoughnutChart />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DoughnutChart />);
  });
});
