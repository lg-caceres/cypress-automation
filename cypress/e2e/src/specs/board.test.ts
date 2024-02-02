import { BoardPage } from "../page-objects/board.page";
const board = new BoardPage();

describe("Flows in the board", () => {
  // Login
  before(() => {
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjU0YjlhYS01NzNkLTRmZmYtYmJjYS05ZTlhZjMzOGEzZTAiLCJ0ZWFtSWQiOiJUN0xFMUtWQkwiLCJpYXQiOjE3MDY5MTA0MjIsImV4cCI6MTcwOTUwMjQyMn0.UvgqL018ZdQqp10acdV_DXBJkoo1fbu5hIKIty-46xQ";
    cy.visit("/", {
      onBeforeLoad: (window) => {
        window.localStorage.setItem("mb-refresh-jwt", TOKEN);
      },
    });
  });
  it("Create a new client", () => {
    board.addClient("Luis-Test1", "Luis Caceres", "This note is for testing");
  });
});
