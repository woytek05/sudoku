import { get, writable } from "svelte/store";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import { Square } from "../lib/Square";

export const currentRowIndex = writable(0);
export const currentColumnIndex = writable(0);

export const puzzle = writable([]);
export const correctPuzzle = writable([]);

export const usersSudoku = writable({});

export const initializeGame = () => {
    const puzzle = makepuzzle();
    setCorrectPuzzle(generatePuzzleArray(solvepuzzle(puzzle)));
    setPuzzle(generatePuzzleArray(puzzle));

    console.log(getCorrectPuzzle());
};

export const generatePuzzleArray = (numbers: Array<number>) => {
    let puzzleArray = [];
    let it = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[it] === null) {
                puzzleArray.push(new Square(i, j, numbers[it], true));
            } else {
                puzzleArray.push(new Square(i, j, numbers[it], false));
            }
            it++;
        }
    }

    return puzzleArray;
};

export const changeNumber(row: number, col: number) {
    for (let i = 0; i < get(puzzle).length; i++) {
        if (puzzle[i].rowIndex === row && puzzle[i].columnIndex === col) {
            
        }
    }
}

export const moveUp = () => {
    if (get(currentRowIndex) > 0) {
        setCurrentRowIndex(get(currentRowIndex) - 1);
    }
};

export const moveDown = () => {
    if (get(currentRowIndex) < 8) {
        setCurrentRowIndex(get(currentRowIndex) + 1);
    }
};

export const moveLeft = () => {
    if (get(currentColumnIndex) > 0) {
        setCurrentColumnIndex(get(currentColumnIndex) - 1);
    } else if (get(currentColumnIndex) <= 0 && get(currentRowIndex) > 0) {
        setCurrentRowIndex(get(currentRowIndex) - 1);
        setCurrentColumnIndex(8);
    }
};

export const moveRight = () => {
    if (get(currentColumnIndex) < 8) {
        setCurrentColumnIndex(get(currentColumnIndex) + 1);
    } else if (get(currentColumnIndex) >= 8 && get(currentRowIndex) < 8) {
        setCurrentRowIndex(get(currentRowIndex) + 1);
        setCurrentColumnIndex(0);
    }
};

// -------------- SETTERS AND GETTERS --------------

export const setCurrentRowIndex = (CurrentRowIndex: number) => {
    currentRowIndex.set(CurrentRowIndex);
};

export const getCurrentRowIndex = () => {
    return get(currentRowIndex);
};

export const setCurrentColumnIndex = (CurrentColumnIndex: number) => {
    currentColumnIndex.set(CurrentColumnIndex);
};

export const getCurrentColumnIndex = () => {
    return get(currentColumnIndex);
};

export const setUsersSudoku = (UsersSudoku) => {
    usersSudoku.set(UsersSudoku);
};

export const getUsersSudoku = () => {
    return get(usersSudoku);
};

export const setCorrectPuzzle = (CorrectPuzzle) => {
    correctPuzzle.set(CorrectPuzzle);
};

export const getCorrectPuzzle = () => {
    return get(correctPuzzle);
};

export const setPuzzle = (Puzzle) => {
    puzzle.set(Puzzle);
};

export const getPuzzle = () => {
    return get(puzzle);
};
