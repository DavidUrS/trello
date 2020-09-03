var cors = require('cors');
const express = require('express');
const { port } = require('./config');
const userRoutes = require('./src/routes/users');
const healthRoutes = require('./src/routes/health');
const valitateAuth = require('./src/middlewares/validateAuth');
const app = express();

app.use(cors());
// app.use(valitateAuth);
app.use(express.json());

app.use('/users', userRoutes);
app.use('/health', healthRoutes);

app.listen(port, () => {
  console.log('Server listen on port', port);
});
