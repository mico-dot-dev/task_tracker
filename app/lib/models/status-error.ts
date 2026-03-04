export class UserExistsError extends Error {
  constructor() {
    super("User already exists");
    this.name = "UserExistsError";
  }
}

export class LoginError extends Error {
  constructor() {
    super("Invalid username or password");
    this.name = "LoginError";
  }
}

export class DatabaseError extends Error {
  constructor() {
    super("Database operation failed");
    this.name = "DatabaseError";
  }
}
