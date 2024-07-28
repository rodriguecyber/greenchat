import connectDb from "./src/config/db";

import app from "./src/config/app";
import env from "./src/config/env";

app.listen(env.PORT, async () => {
  await connectDb()
    .then(() => {
      console.log(`app started successfully on ${env.PORT} `);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
