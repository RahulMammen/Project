const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded; // Ensure that `decoded` contains `id`
    console.log(`Authenticated user ID: ${req.user.userId}`);
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token is not valid' });
  }
};


module.exports = authenticateToken;
