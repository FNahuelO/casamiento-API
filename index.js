import sequelize from "./src/config/sequelize.js";
import { server } from "./src/app.js";

sequelize.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
