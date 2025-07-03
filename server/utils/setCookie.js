const makeCookie = (res, accessToken, refresh_Token = null, newRefreshTokenId = null) => {
    try { 

        if (accessToken) {
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 15 * 60 * 1000
            });
        }

        if (refresh_Token && newRefreshTokenId) {
            res.cookie('refreshToken', refresh_Token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.cookie('refreshTokenId', newRefreshTokenId, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
        }
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

export { makeCookie, clearCookie };