/// <reference types="cypress"/>

context('Finances Teste qa', () => {

    beforeEach(() => {
       cy.visit('https://dev-finance.netlify.app/')
       cy.get('#data-table tbody tr').should('have.length', 0) 
    });
    it('Cadastrar entradas', () => {
        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com o cypress
       // - adicionar as asserções que precisamos

       
       cy.get('#transaction .button').click()
       cy.get('#description').type('Mesada') // id
       cy.get('[name=amount]').type(50)
       cy.get('[type=date]').type('2025-07-09')
       cy.get('button').contains('Salvar').click()

       cy.get('#data-table tbody tr').should('have.length', 1)
    });

    it('Cadastrar saídas', () => {
      cy.visit('https://dev-finance.netlify.app/')
      cy.get('#transaction .button').click()
      cy.get('#description').type('Comida') // id
      cy.get('[name=amount]').type(-10)
      cy.get('[type=date]').type('2025-07-09')
      cy.get('button').contains('Salvar').click()

       cy.get('#data-table tbody tr').should('have.length', 1)  
    });

    //Cadastrar saídas
    //Remover entradas e saídas
});