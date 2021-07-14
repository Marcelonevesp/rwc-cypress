/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
    // Acessar a página de login
    login.acessarLogin()

    //Preencer o formulário
    login.preencherFormulario()

    //Submeter o formulário de login
    login.submeterFormulario()

    // Verificação
    
    });
});