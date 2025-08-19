import createApp from "./app/app.js"
import { APP_CONFIG } from "./app/appConfigs.js";

const { PORT } = APP_CONFIG;

const app = createApp(APP_CONFIG)


app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));