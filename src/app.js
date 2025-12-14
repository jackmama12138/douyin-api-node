const express = require('express');
const app = express();

app.use(express.json());

// 统一前缀，例如 /api 或 /api/v1
const apiRouter = require('./routers');
app.use('/api', apiRouter);


const PORT = 4000;
app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
