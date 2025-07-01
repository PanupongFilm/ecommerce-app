const makeCookie = (res,accessToken, refresh_Token, newRefreshTokenId) => {
    try {

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        });

        res.cookie('refreshToken', refresh_Token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.cookie('refreshTokenId', newRefreshTokenId, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

    } catch (error) {
        console.error("Error from /server/utils/setCookie.js at makeCookie(): " + error);
        throw error;
    }
};

const clearCookie = (res) => {
    try {

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.clearCookie('refreshTokenId');

    } catch (error) {
        console.error("Error from /server/utils/setCookie.js at clearCookie(): " + error);
        throw error;
    }
}

export {makeCookie , clearCookie};