const APPLICATION_PATH = "/";

export default Object.freeze({
  ROOT_PATH: APPLICATION_PATH,
  ACTIVE_LAYOUT: "layout2", //layout1 = vertical, layout2=horizontal
  API_ENDPOINT: "http://localhost:5003",     //local

  LOGIN_PAGE: APPLICATION_PATH + "session/signin", //Nếu là Spring
  HOME_PAGE: APPLICATION_PATH + "dashboard/analytics", //Nếu là Spring
});