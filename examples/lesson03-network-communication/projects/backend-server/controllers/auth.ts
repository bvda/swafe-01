import * as jwt from 'jsonwebtoken'

const suchSecret = "soC0mplex1tyV3rySecuri7y.Wow!"

export const login = async function(req, res)  {
  const token = await jwt.sign({ 
    id: '',
    user: '',
    role: 'fancy_pants',
  }, suchSecret, { expiresIn: '1m'})
  res.json({ token })
}

export const verifyToken = function(req, res, next) {
  const token = req.get('authorization')
  if (token == null) { 
    res.sendStatus(401)
  }
  
  const auth_parts = token.split(' ')
  try {
    const decoded = jwt.verify(auth_parts[1], suchSecret)
    if(decoded['role'] === 'fancy_pants') {
      next()
    } else {
      res.status(403)
      res.json({
        message: 'not permitted'
      })
    }
  } catch(err) {
    res.status(401)
    res.json({
      message: err.message
    })
  }
}