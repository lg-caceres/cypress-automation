import {BoardPage} from "../page-objects/board.page";
const board = new BoardPage();

describe('Flows in the board', () => {
    // Login 
    before( ()=>{
        const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjU0YjlhYS01NzNkLTRmZmYtYmJjYS05ZTlhZjMzOGEzZTAiLCJ0ZWFtSWQiOiJUN0xFMUtWQkwiLCJpYXQiOjE3MDY4ODUzMjEsImV4cCI6MTcwOTQ3NzMyMX0.GYpjj0qGYKGyLP3MkJj8EayPMgRN3PqTEBX8eMegXWU"
        cy.visit('/',{onBeforeLoad:(window) => {
        window.localStorage.setItem('mb-refresh-jwt',TOKEN)
        }})
    })
    it('Create a new client', () => {
        board.addClient('Luis-Test', 'Luis Caceres', 'This note is for testing');
    });
});


