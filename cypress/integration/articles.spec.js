/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
 
    beforeEach(() => {
        //Arrange
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao();
    });

    it('Criar uma nova publicação', () => {
        //Act
        articles.preencherFomrulario();
        articles.submeterPublicacao();

        //Assert
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();
    });
});