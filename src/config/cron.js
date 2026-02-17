import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) {
        console.log("Self ping success");
      } else {
        console.log("Self ping failed:", res.statusCode);
      }
    })
    .on("error", (e) => console.error("Ping error:", e));
});

export default job;
