const login = (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.cookie('token', 'admin', { maxAge: 900000, httpOnly: true });
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
}