/// <reference types="cypress" />

const faker = require('faker');
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFomrulario() {
    //Preencher formulário do artigo
    cy.get(el.inputTitle).type('Agilizei title');
    cy.get(el.inputDescription).type('Cypress');
    cy.get(el.textAreaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type('cypress');

    }  

    submeterPublicacao() {
    //Submeter o artigo
        cy.get(el.buttonSubmit).click();
    
    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        });
        
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.status).to.eq(200)
        });
        
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.status).to.eq(200)
        });
    }
}

export default new Articles();