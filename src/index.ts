/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config();

import { server } from './app';
import log from './logger';

function startServer() {
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, "0.0.0.0", () => {
    log.info(`Server running 🤖🚀 at http://0.0.0.0:${PORT}/`);
  });
}

setImmediate(startServer);

export default server;
