const visibleNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Service', path: '/service' },
  { label: 'Our App', path: '/our-app' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

const discoverNav = [
  { label: 'Career', path: '/career' },
  { label: 'Team', path: '/team' },
  { label: 'Blogs', path: '/blog' },
];

describe('Gupio.in Navbar Route Test', () => {
  const baseUrl = 'https://www.gupio.in';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  visibleNav.forEach((nav) => {
    it(`Clicking '${nav.label}' updates route to ${nav.path}`, () => {
      cy.contains('a', nav.label).click();
      cy.url().should('include', nav.path);
    });
  });

  discoverNav.forEach((item) => {
    it(`Clicking 'Discover Gupio > ${item.label}' updates route to ${item.path}`, () => {
      cy.contains('a', 'Discover Gupio')
        .parent()
        .trigger('mouseover');

      cy.get('ul.dropdown-menu').invoke('show');

      cy.contains('a', item.label).click();

      cy.url().should('include', item.path);
    });
  });
});
