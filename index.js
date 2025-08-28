const express = require('express');
const app = express();

app.use((req, res) => {
  res.redirect(301, 'https://www.luminouz.ng' + req.originalUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Redirect app running on port ${PORT}`));
