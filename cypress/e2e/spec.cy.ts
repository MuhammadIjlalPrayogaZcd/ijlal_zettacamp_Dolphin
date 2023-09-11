const username = 'Ijlal'

const password = 'PaSsWoord@Syx'

describe('template spec', () => {
  beforeEach(() => {
    //login
    cy.visit('http://localhost:4200/')

    cy.get('input[data-cy="input-name"]').type(username)
    cy.wait(1000)

    // {enter} causes the form to submit
    cy.get('input[data-cy="input-password"]').type(`${password}`)
    cy.wait(1000)

    cy.get('button[data-cy="btn-login"').click()
    cy.wait(1000)

    cy.get('a[data-cy="text-navbar-profile-name"]').should(
      'contain',
      'Hi,',
      username
    )
    cy.wait(1000)
  })

  it('add some item, complete purchase and logout', () => {
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').click({
      multiple: true,
    })
    cy.wait(1000)

    cy.get('button[data-cy="btn-checkout"]').click()
    cy.wait(1000)

    cy.get('button[data-cy="btn-logout"]').click()
    cy.wait(3000)
  })

  it('add some item, remove item, complete purchase and logout', () => {
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').click({
      multiple: true,
    })
    cy.wait(1000)

    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(3).click()
    cy.wait(1000)

    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(2).click()
    cy.wait(1000)

    cy.get('button[data-cy="btn-remove-item-from-cart"]').eq(3).click()
    cy.wait(1000)

    cy.get('button[data-cy="btn-checkout"]').click()
    cy.wait(1000)

    cy.get('button[data-cy="btn-logout"]').click()
    cy.wait(3000)
  })
})
