import jwt from 'jsonwebtoken';
export const adminAuth = async (req, res, next) => {
    try {
        const access_token = req.headers.authorization;
        console.log("🚀 ~ adminAuth ~ access_token:", access_token);

        if (!access_token || !access_token.startsWith("Bearer")) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        const token = access_token.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        const decoded = jwt.verify(token, process.env.ADMIN_SECRET);
        console.log("🚀 ~ decoded:", decoded);

        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ message: "Forbidden Access" });
        }

        next();
    } catch (error) {
        console.log("🚀 ~ adminAuth ~ error:", error.message);
        return res.status(400).json({ message: "Invalid Token" });
    }
};