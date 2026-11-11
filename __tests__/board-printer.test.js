import { jest } from "@jest/globals";
import { checkIfNoMovesLeft, printBoard } from "../board-printer";

test("checkIfNoMovesLeft returns true for a full board", () => {
  const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft returns false when moves remain", () => {
  const board = [
    ["X", "_", "X"],
    ["O", "X", "O"],
    ["O", "O", "X"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("checkIfNoMovesLeft returns true for an empty board", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("printBoard prints the sample board with row separators", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];

  try {
    printBoard(board);
    expect(consoleSpy.mock.calls).toEqual([
      ["  X  |  _  |  _  "],
      ["================="],
      ["  _  |  X  |  _  "],
      ["================="],
      ["  O  |  O  |  X  "],
      ["================="],
    ]);
  } finally {
    consoleSpy.mockRestore();
  }
});
