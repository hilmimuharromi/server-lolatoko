import app from "../app"
import http from "http"
const server = http.createServer(app)
const env = process.env.NODE_ENV || 'development'

switch (env) {
    case 'development':
        require('dotenv').config({ path: process.cwd() + '/.env' })
        break;
    case 'test':
        require('dotenv').config({
            path: process.cwd() + './.env.test'
        })
        break;
    default:
        break;
}



server.listen(process.env.PORT, () => {
    console.log('listening on port' + process.env.PORT);
})