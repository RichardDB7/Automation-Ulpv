/// <reference types="Cypress" />

describe ('Validate links', function(){

    it('Page open', function(){
        cy.visit('https://unlugarparavos.com/')
        cy.viewport(1200,800)
        cy.get('#menu-1-f4b0246 > .menu-item-home > .elementor-item').click()
        
    })

    it('Validate Blog', function(){
        cy.get('#menu-1-f4b0246 > .menu-item-76 > .elementor-item').click()
        cy.get('.elementor-element-717e8dba > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-717e8dba > .elementor-widget-container > .elementor-heading-title').contains('UN LUGAR PARA VOS')
        cy.get('.elementor-element-e452b98 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-e452b98 > .elementor-widget-container > .elementor-heading-title').contains('Blog')
        cy.get('.elementor-element-124cbd15 > :nth-child(1) > .elementor-top-column > :nth-child(1) > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap').should('be.visible')
        cy.get('.elementor-element-23ab0082 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-23ab0082 > .elementor-widget-container > .elementor-heading-title').contains('Bienvenida al blog')
        cy.get('.elementor-element-6a6e11a8 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-6a6e11a8 > .elementor-widget-container > .elementor-heading-title').contains('Otros Artículos')
    })
    
    it('Validate Products', function(){
        cy.get('#menu-1-2fd82351 > .menu-item-56 > .elementor-item').click()
        cy.get('.elementor-element-6c8ea189 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-6c8ea189 > .elementor-widget-container > .elementor-heading-title').contains('PRODUCTOS PARA VOS')
        cy.get('.elementor-element-11144488 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-11144488 > .elementor-widget-container > .elementor-text-editor > p').contains('Catálogo Miradror 2021')
        cy.get('.elementor-element-ed25ca1 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-ed25ca1 > .elementor-widget-container > .elementor-heading-title').contains('Hablemos de los productos:')
        cy.get('.elementor-element-884ae79 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-33280cb > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').should('be.visible')

        //PRODUCT ONE
        cy.get('.elementor-element-ac7f597 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-ac7f597 > .elementor-widget-container > .elementor-heading-title').contains('DD CREAM❤ HIDRATACIÓN + PROTECCIÓN SOLAR FPS 30')
        cy.get('.elementor-element-7439ee6 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.elementor-element-e0d08ce > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > img').should('be.visible')
        cy.get('.elementor-element-ad3c663 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()

        //PRODUCT TWO
        cy.get('.elementor-element-8b00639 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-8b00639 > .elementor-widget-container > .elementor-heading-title').contains('🌿🌿EVEN MORE ES UN PRODUCTO DE PROTECCIÓN INVISIBLE DE LAS CÉLULAS MADRE')
        cy.get('.elementor-element-c6b3d79 > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.attachment-large').should('be.visible')
        cy.get('.elementor-element-37caacb > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        
        //PRODUCT TREE
        cy.get('.elementor-element-d61fe06 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-d61fe06 > .elementor-widget-container > .elementor-heading-title').contains('LA CRÈME "CUIDADO SUPREMO DE NOCHE": SISTEMA DE REPARACIÓN ESPECÍFICO ADAPTATIVO AL ENVEJECIMIENTO EPIGENÉTICO')
        cy.get('.elementor-element-102021c > .elementor-widget-container > .elementor-text-editor > p').should('be.visible')
        cy.get('.attachment-medium_large').should('be.visible')
        cy.get('.elementor-element-d950395 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()

        //INFO
        cy.get('.elementor-element-141837cd > .elementor-widget-wrap').should('be.visible')
        cy.get('.elementor-element-16f1b97d > .elementor-widget-wrap').should('be.visible')
        cy.get('.elementor-element-55b3ce93 > .elementor-widget-wrap').should('be.visible')

        //FORM
        cy.get('.elementor-element-05b60a4 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
        cy.get('.elementor-element-05b60a4 > .elementor-widget-container > .elementor-heading-title').contains('¿Consultas? ¿Dudas?')
        cy.get('.elementor-element-678dc55c > .elementor-container > .elementor-inner-column > .elementor-widget-wrap').should('be.visible')
        cy.get('#form-field-name').should('be.visible')
        cy.get('#form-field-email').should('be.visible')
        cy.get('#form-field-field_1').should('be.visible')
        cy.get('#form-field-message').should('be.visible')
        cy.get('.elementor-field-type-submit > .elementor-button').should('be.visible')
        cy.get('.elementor-field-type-submit > .elementor-button').click()


        //SOCIAL 
        cy.get('.elementor-social-icons-wrapper').should('be.visible')
        cy.get(':nth-child(1) > .elementor-icon > .fab').should('be.visible')
        cy.get(':nth-child(1) > .elementor-icon > .fab').click()
        cy.get(':nth-child(2) > .elementor-icon > .fab').should('be.visible')
        cy.get(':nth-child(2) > .elementor-icon > .fab').click()
        cy.get(':nth-child(3) > .elementor-icon > .fab').should('be.visible')
        cy.get(':nth-child(3) > .elementor-icon > .fab').click()
        cy.get('.elementor-element-1462e990 > .elementor-widget-container > .elementor-image > .elementor-animation-pulse').should('be.visible')

    })

        it('Validate Personal Info', function(){
            cy.get('#menu-1-2fd82351 > .menu-item-54 > .elementor-item').click()
            

        })
        




})
