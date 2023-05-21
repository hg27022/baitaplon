export default class Constant {
  static PORT_SECONDARY = 8080;

  static GenerateToken = {
    ACCESS_EXPIRES_IN: "1d",
    REFRESH_EXPIRES_IN: "10d",
  };

  static OutputType = {
    SUCCESS: "SUCCESS",
    CREATE_SUCCESS: "Created successfully",
    UPDATE_SUCCESS: "Update successfully",
    DELETE_SUCCESS: "Delete successfully",
    LOGOUT_SUCCESS: "Logout successfully",

    WARNING: "WARNING",
    ACCOUNT_ALREADY_EXIST: "This account has already existed",

    ERROR: "ERROR",
    ERROR_USERNAME_OR_PASSWORD: "Incorrect username or password",
    ERROR_PROCESSING_CREATE:"Error in the process of creating, please try again",
    ERROR_PROCESSING_DELETE: "Error in the process of delete, please try again",
    ERROR_REFRESH_TOKEN_VALID: "Refresh token is not valid",
    ERROR_CCCD_ALREADY_EXIT: "Error CCCD already exist",

    NOT_FOUND: "NOT FOUND",
    NOT_FOUND_USERNAME: "Not found username",
    NOT_AUTHENTICATED: "You're not authenticated",
  };

  static HttpStatusCode = {
    OK: 200,
    INSERT_OK: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
  };
}
