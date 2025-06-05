const express = require('express');
const router = express.Router();
const User = require('../model/user.schema'); // adjust path to your model

// Helper function to format rankings
const formatRanking = (users, key) => {
    if (!Array.isArray(users)) {
        console.error('Users data is not an array:', users);
        return [];
    }
    return users
        .filter(user => user && typeof user[key] === 'number')
        .sort((a, b) => b[key] - a[key])
        .map((user, index) => ({
            rank: index + 1,
            username: user.username,
            score: user[key]
        }));
};

router.get('/', async (req, res) => {
    try {
        console.log('Fetching rankings...');
        const allUsers = await User.find().lean();
        console.log(`Found ${allUsers.length} users`);

        if (!allUsers || allUsers.length === 0) {
            return res.json({
                leetcodeRank: [],
                devRank: [],
                totalRank: []
            });
        }

        const leetcodeRank = formatRanking(allUsers, 'leetcode');
        const devRank = formatRanking(allUsers, 'development');
        const totalRank = formatRanking(allUsers, 'Totalscore');

        console.log('Successfully formatted rankings');
        res.json({
            leetcodeRank,
            devRank,
            totalRank
        });
    } catch (err) {
        console.error('Error in /rankings route:', err);
        res.status(500).json({
            error: 'Failed to fetch rankings',
            details: err.message
        });
    }
});

module.exports = router;



