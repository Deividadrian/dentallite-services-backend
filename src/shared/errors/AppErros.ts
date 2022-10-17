class AppError {
  public readonly message: string; // Atributo de somente leitura
  public readonly statusCode: number; // Atributo de somente leitura

  constructor(message: string, statusCode = 400) { // statusCode já definido com o valor 400
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
