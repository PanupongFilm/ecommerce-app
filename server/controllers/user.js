import { User, validation } from '../models/user.js';

const register = async (req, res) => {
    try {
        const { error } = validation(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const userNameCheck = await User.findOne({ userName: req.body.userName });
        if (userNameCheck) return res.status(409).json({ message: "User name is already taken" });

        const userEmailcheck = await User.findOne({ email: req.body.email });
        if (userEmailcheck) return res.status(409).json({ message: "User with given email already exists" });

        return res.status(202).json({ message: "OTP sent to email. Please verify to complete registration." });

    } catch (error) {
        console.error("Error from /server/controllers/user.js at registerUser controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const completeAccountSetup = async (req, res) => {
    try {
    
        console.log("Data: " + req.user);

        const { error } = validation(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const userNameCheck = await User.findOne({ userName: req.body.userName });
        if (userNameCheck) return res.status(409).json({ message: "User name is already taken" });

        const user = await User.findOne({ _id: req.user._id });
        if (!user) return res.status(404).json({ message: "User not found" });

        user.userName = req.body.userName
        user.password = req.body.password
        await user.save();
        return res.status(200).json({ message: "Account setup completed" });

    } catch (error) {
        console.error("Error from /server/controllers/user.js at completeAccountSetup controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export { register, completeAccountSetup }