/// <reference types="Cypress" />
export let txtCreatedPassword: string;
export let txtCreatedEmail: string;
const currDate = new Date().toLocaleDateString("en-US", { month: '2-digit', day: '2-digit' });
const txtUsername = "test_username" + '_' + currDate + '_' + (Math.floor(Math.random() * 10000000)).toString();
const txtEmail = "test_email" + '_' + currDate + '_' + (Math.floor(Math.random() * 10000000)).toString() + '@mailinator.com';
const txtPaasword = "test_password" + '_' + currDate + '_' + (Math.floor(Math.random() * 10000000)).toString();
txtCreatedEmail = txtEmail;
txtCreatedPassword = txtPaasword;
const loginUrl = 'https://demo.realworld.io/#/'
const lnkSignUp = 'a[href*="#/register"]';
const txaUserName = 'input[placeholder="Username"]'
const txaEmail = 'input[placeholder="Email"]';
const txaPassword = 'input[placeholder="Password"]';
const btnSignUpSubmit = 'button[type="submit"]';
const lnkSetting = 'a[href*="#/settings"]';
const btnLogout = 'button.btn-outline-danger';
const lnkSignIn = 'li a[href*="#/login"]';
const lnkNewArticle = 'a[href*="#/editor"]';
const txaArticleTitle = 'input[placeholder="Article Title"]';
const txaAboutArticle = 'input[placeholder]';
const txaArticleDescription = 'textarea[placeholder="Write your article (in markdown)"]';
const txaTags = 'input[placeholder="Enter tags"]';
const btnPublishArticle = 'button[type=button]';
const txaCommentTextArea = 'textarea[placeholder="Write a comment..."]';
const btnPostComment = 'button[type=submit]';
const txtLableComment = 'p.card-text';
const lnkClickUsername = 'a.author.ng-binding';
const lblGlobalFeed = 'div div div  ul li a.nav-link';
const btnFavorite = 'button.btn.btn-sm.btn-outline-primary';
const btnFavoriteEnabled = 'favorite-btn button.btn.btn-sm.btn-primary';
const lblTagsFilter = 'a.tag-default';
const lblTagName = 'a.nav-link.active.ng-binding';
const lnkFilterArticle = 'a[href="#/article/Create-a-new-implementation-1"]';
const btnFollowAuthor = 'button.btn.btn-sm.action-btn.ng-binding.btn-outline-secondary';
const btnFollowAuthorEnabled = 'button.btn.btn-sm.action-btn.ng-binding.btn-secondary';
const btnHome = 'li a[href="#/"]'

export function clickSignUpButton(){
    cy.visit(loginUrl);
    cy.get(lnkSignUp).click();
}

export function createNewAccount(){
    cy.get(txaUserName).type(txtUsername);
    cy.get(txaEmail).type(txtEmail);
    cy.get(txaPassword).type(txtPaasword);
    cy.get(btnSignUpSubmit).click();
}

export function logout(){
    cy.get(lnkSetting).click();
    cy.get(btnLogout).click();
}

export function sinIn(){
    cy.get(lnkSignIn).click();
    cy.get(txaEmail).type(txtCreatedEmail);
    cy.get(txaPassword).type(txtCreatedPassword);
    cy.get(btnSignUpSubmit).click();
}

export function createArticle(data: string){
    cy.get(lnkNewArticle).click();
    cy.get(txaArticleTitle).type(data['title']);
    cy.wait(2000);
    cy.get(txaAboutArticle).eq(1).type(data['aboutArticle']);
    cy.get(txaArticleDescription).type(data['articleDescription']);
    cy.get(txaTags).type(data['tags']);
    cy.get(btnPublishArticle).click();

}

export function postComment() {
    cy.get(txaCommentTextArea).type("Adding comment to my article");
    cy.get(btnPostComment).click();
    cy.get(txtLableComment).should('have.text','Adding comment to my article');
}

export function addToFavorite() {
    cy.get(lnkClickUsername).first().click();
    bonusPoints();
    cy.get(lblGlobalFeed).eq(1).click();
    cy.get(btnFavorite).first().click();
    cy.get(btnFavoriteEnabled).should('have.class','btn btn-sm btn-primary');
}

export function bonusPoints() {
    cy.get(lblTagsFilter).first().click();
    cy.get(lblTagName).should(($a) => {
        const text = $a.text()
        expect(text).to.include('implementations');
      });
    cy.get(lnkFilterArticle).click();
    cy.get(btnPostComment);
    cy.get(txaCommentTextArea).type("Adding comment to filter by Tag article");
    cy.get(btnPostComment).click();
    cy.get(btnFavorite).first().click();
    cy.get(btnFavoriteEnabled,{timeout:10000}).eq(0).should('have.contain.text','Unfavorite Article');
    cy.get(btnFollowAuthor).first().click();
    cy.get(btnFollowAuthorEnabled).first().should('have.contain.text','Unfollow');
    cy.get(btnHome).last().click();

}