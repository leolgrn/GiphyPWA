/* eslint-env mocha */
/* global cy */

describe('SPA API', () => {
    it('Visits app and check all pages', () => {
        cy.visit('/');

        cy.contains('Random Gif').click();
        cy.url().should('include', '/random/gif');

        cy.contains('Random Sticker').click();
        cy.url().should('include', '/random/sticker');

        cy.contains('Search').click();
        cy.url().should('include', '/search');
    });

    it('Displays 25 trending gifs', () => {
        cy.visit('/');
        cy.get('.mansory')
            .find('.v-image__image')
            .should('have.length', 25);
    });

    it('Gets /', () => {
        cy.request('/')
            .its('status')
            .should('eq', 200);
    });

    it('Gets /random/gif', () => {
        cy.request('/#/random/gif')
            .its('status')
            .should('eq', 200);
    });

    it('Gets /random/sticker', () => {
        cy.request('/#/random/sticker')
            .its('status')
            .should('eq', 200);
    });

    it('Gets /search', () => {
        cy.request('/#/search')
            .its('status')
            .should('eq', 200);
    });

    it('Fails with /not-found', () => {
        cy.request({
            url: '/not-found',
            failOnStatusCode: false,
        })
            .its('status')
            .should('eq', 404);
    });
});
