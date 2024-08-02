const express = require('express');
const router = express.Router();
const UserModel = require('./models/user');

router.post('/update', async (req, res) => {
    const { userId, xp } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.xp = xp;
        // user.problems = problems;
        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/loadxp', async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const xp=user.xp;
        // user.problems = problems;
        // await user.save();
        res.status(200).json(xp);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
