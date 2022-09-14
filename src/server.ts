import 'dotenv/config'
import "express-async-errors"
import app from './Config/AppServer'

app.listen(8001, () => console.log("Connected to port 8001"))

export default app;