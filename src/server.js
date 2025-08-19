import createApp from "./app/app.js"
import { APP_CONFIG } from "./app/appConfigs.js";

const app = createApp(APP_CONFIG)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));