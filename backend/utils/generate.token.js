import jwt from "jsonwebtoken";

export const accessToken = (userId) => {
    return jwt.sign({id: userId} , process.env.ACCESS_SECRET , {expiresIn: '10m'})
}

export const refreshToken = (userId) => {
    return jwt.sign({id: userId} , process.env.REFRESH_SECRET , {expiresIn: '10m'})
}