export class Square {
    rowIndex: number;
    columnIndex: number;
    number: number;
    editable: boolean;

    constructor(
        rowIndex: number,
        columnIndex: number,
        number: number,
        editable: boolean
    ) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.number = number;
        this.editable = editable;
    }
}
