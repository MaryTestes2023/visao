describe('template spec', () => {
  //visitando a página web
  beforeEach(() => cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'))

  it('verifica o título da aplicação', () => {
    //verificando título da aplicação
    cy.get('#title').contains('CAC TAT')
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

  })
})