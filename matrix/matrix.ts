class Matrix {
  private readonly matrixString: string;
  private readonly matrix: number[][];

  constructor(matrixString: string) {
    this.matrixString = matrixString;
    this.matrix = this._matrix();
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
  }

  private _matrix(): number[][] {
    return this.matrixString
      .split('\n')
      .map((row) => row.split(' ').map((num) => Number(num)));
  }
}

export default Matrix;
