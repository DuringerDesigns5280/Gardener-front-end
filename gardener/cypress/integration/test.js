describe('gardner', () => {
    it('should go to the home page', () => {
        cy.visit('localhost:3000')
    })
    it('should visit the plants page', () => {
        cy.visit('localhost:3000')
        cy.get('a').eq(2).click()
    })
    it('should visit my Login', () => {
        cy.visit('localhost:3000')
        cy.get('a').eq(0).click()
    })
})
