import RefreshToken from "../models/refreshToken.js";


const makeRefreshToken = (req,userId) => {

    const refresh_Token = RefreshToken.generateRefreshToken();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    return {
        token: refresh_Token,
        userId: userId,
        expiresAt: expiresAt,
        ipAddress: ipAddress,
        userAgent: userAgent
    }
};

export default makeRefreshToken;