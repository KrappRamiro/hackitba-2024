import app from "./app";

const PORT = process.env.EXPRESS_PORT ?? 3000;

app.listen(PORT, (): void => console.log(`App is running on port ${PORT}`));
