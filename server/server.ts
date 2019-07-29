import * as http from 'http';

const server = http.createServer();
server.listen(3300, () => {
    console.log('Server started at port: 330');
})