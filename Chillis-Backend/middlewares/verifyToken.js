import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            success: false, message: 'Unauthorized'
        })
    }
    try {
        const decoded = jwt.verify(token.proces.env.JWT_SECRET);
        req.id = decoded.id;
        next();

    } catch (error) {
        return res.status(500).json({
            success: false, message: error.message
        })
    }
}