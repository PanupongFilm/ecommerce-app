const emailTemplate = (otp , purpose) =>{
    const html = `
    <div
        style="background-color: #576da2; padding: 30px; border-radius: 20px; max-width: 470px; margin: auto; font-family: Arial, sans-serif; color: #ffffff !important;">
        <h2
            style="text-align: center; font-size: 27px; margin-bottom: 20px; margin-top: -13px; color: #ffffff !important;">
            🔐 ${purpose === 'verify-email'?'Verify Your Email':'Reset Your Password'}
        </h2>
        <p style="font-size: 17px; color: #ffffff !important;">Please use the OTP below to ${purpose ==='verify-email'?'verify your email address':'reset your password'}:
        </p>

        <div
            style="background-color: #f3f4f6; color: #021a86 !important; font-size: 28px; text-align: center; font-weight: bold; padding: 12px 24px; border-radius: 12px; margin: 20px 0;">
            ${otp}
        </div>

        <p style="font-size: 23px; color: #ffb0b0 !important; font-weight: bold;">* This code will expire in 1 minute
        </p>

        <p style="font-size: 17px; color: #ffffff !important; margin-top: 24px;">
            If you did not request this code, please ignore this email.
        </p>
        <p style="font-size: 17px; color: #ffffff !important;">
            Thank you for using our service ❤️
        </p>

        <div
            style="border-top: 1px solid #ffffff; margin-top: 32px; padding-top: 16px; text-align: center; font-size: 12px; color: #ffffff !important;">
            Sparkko Shop
        </div>
    </div>
        `;
    return html
}

export default emailTemplate ;