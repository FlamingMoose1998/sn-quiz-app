import "@servicenow/sdk/global";
import { UiPage } from "@servicenow/sdk/core";
import page from "../../client/index.html";

export const x_0221_quiz_app_import = UiPage({
  $id: Now.ID["quiz-import-page"],
  endpoint: "x_0221_quiz_app_import.do",
  html: page,
  direct: true,
});
