type ErrorName = "HTTP_ERROR";

interface CustomErrorFields {
  errorName: ErrorName;
  message: string;
}

export class CustomError {
  errorName: ErrorName;
  message: string;

  constructor({ errorName, message }: CustomErrorFields) {
    this.errorName = errorName;
    this.message = message;
  }
}
