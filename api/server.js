var cors = require('cors');
const express = require('express');
const { port } = require('./config');
const userRoutes = require('./src/routes/users');
const healthRoutes = require('./src/routes/health');
const workspaceRoutes = require('./src/routes/workspace');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/health', healthRoutes);
app.use('/workspace', workspaceRoutes);

app.listen(port, () => {
  console.log('Server listen on port', port);
});
