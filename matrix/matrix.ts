class Matrix {
  private readonly matrixData: string;
  private readonly matrix: number[][];

  constructor(matrixData: string) {
    this.matrixData = matrixData;
    this.matrix = this.create2dArrayFromMatrixData();
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.transposeMatrix();
  }

  private create2dArrayFromMatrixData(): number[][] {
    return this.matrixData
      .split('\n')
      .map((row) => row.split(' ').map((num) => Number(num)));
  }

  private transposeMatrix(): number[][] {
    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
  }
}

export default Matrix;
