import{
    clickSignUpButton,
    createNewAccount,
    logout,
    sinIn,
    createArticle,
    postComment,
    addToFavorite,

} from '../support/utility/helper/e2e_flow.helper';

const {
    article
} = require("../fixtures/example.json");
let createNewArticle = article;


describe("QA Assessment Test", () => {
    

it("E2E Flow Execution", function () {
    clickSignUpButton();
    createNewAccount();
    logout();
    sinIn();
    createArticle(createNewArticle);
    postComment();
    addToFavorite();
    logout();
});
});