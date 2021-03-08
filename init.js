import "./db"
import app from "./app";

const PORT = 4000;

const handleListning = () => 
    console.log(`✔ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListning);