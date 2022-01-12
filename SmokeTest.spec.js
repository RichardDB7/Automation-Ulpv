/// <reference types="Cypress" />

const { should } = require("chai")


    beforeEach(() => {
        cy.fixture('datos_prueba.json').then (function(datos){
        this.datos_prueba=datos
        cy.visit(this.datos_prueba.url)
        cy.viewport(1200, 800)
       
    })

   
    })   

    describe ('Test landing page', function(){

    it('Validate primary elements', function(){
        
        

        cy.get('.elementor-element-14415d33 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
        cy.get('.elementor-element-12c6a8c3 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-5709b1ba > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').contains('Rosa@unlugarparavos.com')
        cy.get('.elementor-element-4e71159 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').contains('1165566852')
        cy.get('.elementor-element-3c1644d4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').contains('Agustin Alvarez')
        cy.get('.elementor-element-3396a886 > :nth-child(1) > .elementor-top-column > :nth-child(1) > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap').should('be.visible')
        cy.get('.elementor-element-3e0241c8 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-3e0241c8 > .elementor-widget-container > .elementor-heading-title').contains('Hola, Soy Rosa')
        cy.get('.elementor-element-a730233 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-a730233 > .elementor-widget-container > .elementor-heading-title').contains('BIENVENIDA A TU LUGAR')
        cy.get('.elementor-element-445d9ab3 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-78be2b39 > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').should('be.visible')


        cy.get('.elementor-nav-menu--main').should('be.visible')
        cy.get('#menu-1-f4b0246 > .menu-item-home > .elementor-item').should('be.visible')
        cy.get('#menu-1-f4b0246 > .menu-item-76 > .elementor-item').should('be.visible')
        cy.get('#menu-1-f4b0246 > .menu-item-56 > .elementor-item').should('be.visible') 
        cy.get('#menu-1-f4b0246 > .menu-item-54 > .elementor-item').should('be.visible')
    })

   
    it('Validate main body', function(){
        cy.get('.joinchat__button__open').should('be.visible')
        cy.get('.elementor-element-63a8adc6 > .elementor-background-overlay').should('be.visible')
        cy.get('.elementor-element-5709b1ba > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible')
        cy.get('.elementor-element-4e71159 > .elementor-widget-wrap').should('be.visible')
        cy.get('.elementor-element-3c1644d4 > .elementor-widget-wrap').should('be.visible')


           
    })

    it('Validate products', function(){
        cy.get('.elementor-element-78be2b39 > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').should('be.visible')
        cy.get('.elementor-element-78be2b39 > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').contains('Servicios Profesionales')
        cy.get('.elementor-element-2da910ed > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-2da910ed > .elementor-widget-container > .elementor-heading-title').contains('CONSULTANOS , ESTAMOS PARA AYUDARTE')

        //CARD ONE
        cy.get('.elementor-element-598d6d7c > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-598d6d7c > .elementor-widget-container > .elementor-heading-title').contains('Productos De Calidad Internacional')
        cy.get('.elementor-element-3b8d2fea > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-3b8d2fea > .elementor-widget-container > .elementor-heading-title').contains('TU CONSULTA NO MOLESTA')
        cy.get('.elementor-element-237b83f8 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-4731d64 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
        cy.get('.elementor-element-42755f2c > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')

        //CARD TWO
        cy.get('.elementor-element-5f6d0694 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-5f6d0694 > .elementor-widget-container > .elementor-heading-title').contains('Masajes Reflexologicos')
        cy.get('.elementor-element-6991bf47 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-6991bf47 > .elementor-widget-container > .elementor-heading-title').contains('CONSULTA POR TU SESIÓN')
        cy.get('.elementor-element-6d70072b > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
        cy.get('.elementor-element-41ea6e20 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')
        
        //CARD TREE
        cy.get('.elementor-element-0d4dfbc > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-0d4dfbc > .elementor-widget-container > .elementor-heading-title').contains('Cosmética Profesional')
        cy.get('.elementor-element-a18049c > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-a18049c > .elementor-widget-container > .elementor-heading-title').contains('CONSULTA POR TU SESÍON')
        cy.get('.elementor-element-46359ae > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
        cy.get('.elementor-element-91e1423 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')

        //CARD FOUR
        cy.get('.elementor-element-73a68c70 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-73a68c70 > .elementor-widget-container > .elementor-heading-title').contains('Masajes Holísticos')
        cy.get('.elementor-element-4e74d415 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-4e74d415 > .elementor-widget-container > .elementor-heading-title').contains('CONSULTA POR TU SESÍON')
        cy.get('.elementor-element-69573c3f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
        cy.get('.elementor-element-5eddbec1 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')
        

    })

    it('Validate child', function(){
        cy.get('.elementor-element-57aecc53 > :nth-child(2)').should('be.visible')
        cy.get('.elementor-element-58eabb4d > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-58eabb4d > .elementor-widget-container > .elementor-heading-title').contains('Conversatorio sobre Cosmiatria y Holística')
        cy.get('.elementor-element-1c0cc79b > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-1c0cc79b > .elementor-widget-container > .elementor-heading-title').contains('JULIO 2021. MARTES A CONFIRMAR 6:00PM')
        cy.get('.elementor-element-297b02b4 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-297b02b4 > .elementor-widget-container > .elementor-text-editor > p').contains('Participá con Rosa de una charla sobre cosmiatría, y masajes holísitcos, recibí toda la informacion sobre como mejorar tu belleza y calidad de vida.')
        cy.get('.elementor-element-1cb31c74 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible')
    })

    it('Validate map', function(){
        cy.get('.elementor-element-652e55f3 > .elementor-column-gap-default > .elementor-top-column > :nth-child(1) > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap').should('be.visible')
        cy.get('iframe').should('be.visible')
    })

    it('Validate Form', function(){
        cy.get('.elementor-element-c17502b > :nth-child(3) > .elementor-top-column > :nth-child(1)').should('be.visible')
        cy.get('.elementor-element-e44d61e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible')
        cy.get('.elementor-element-c10319e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible')
        cy.get('.elementor-element-2e18da2 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content').should('be.visible')
        cy.get('.elementor-element-2e18da2 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content').should('be.visible')
        cy.get('#form-field-name').should('be.visible')
        cy.get('#form-field-name').type(this.datos_prueba.name)
        cy.get('#form-field-email').should('be.visible')
        cy.get('#form-field-email').type(this.datos_prueba.email)
        cy.get('#form-field-field_1').should('be.visible')
        cy.get('#form-field-field_1').select(2)    
        cy.get('#form-field-message').should('be.visible')
        cy.get('#form-field-message').type(this.datos_prueba.body)
        cy.get('.elementor-field-type-submit > .elementor-button').should('be.visible')
        cy.get('.elementor-field-type-submit > .elementor-button').click()
        cy.get('.elementor-message').should('contain.text','El Mensaje Ha Sido Enviado Con Éxito')

    })

    it('Validate Social', function(){
        cy.get('.elementor-social-icons-wrapper').should('be.visible')
        cy.get(':nth-child(1) > .elementor-icon > .fab').should('be.visible')
        cy.get(':nth-child(2) > .elementor-icon > .fab').should('be.visible')
        cy.get(':nth-child(3) > .elementor-icon > .fab').should('be.visible')

    })
    
    it('Validate Footer', function(){
        cy.get('.elementor-element-d185133 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-59f85bdc > .elementor-widget-container > .elementor-image').should('be.visible')
        cy.get('.elementor-element-59f85bdc > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').should('be.visible')
        

    })




})
