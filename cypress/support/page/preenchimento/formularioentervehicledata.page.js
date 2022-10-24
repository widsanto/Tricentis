class formularioentervehicledata {

  ClickPickMake(){
    cy.contains("Make").should("be.visible");
    cy.contains("Cylinder Capacity [ccm]").should("be.visible");
    cy.get("#cylindercapacity").click().type("1000");
    cy.contains("Engine Performance [kW]").should("be.visible");
    cy.get("#engineperformance").click().type("150");
    cy.contains("Date of Manufacture").should("be.visible");
    cy.get("#dateofmanufacture").click().type("05/05/1990");
    cy.contains('Number of Seats').should("be.visible");
    cy.contains('Right Hand Drive').should("be.visible");
    cy.get(':nth-child(7) > .group > :nth-child(1)').click();
    cy.contains('Payload [kg]').should("be.visible");
    cy.get('#payload').click().type("50")
     
    
    
  }
 
}

export default new formularioentervehicledata();
