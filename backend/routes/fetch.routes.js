const express = require("express");
const Routes = express.Router();
// Ensure node-fetch is installed

const leetcoderating = (easy, med, hard) => {
    return Math.min(1500, (2 * easy + 5 * med + 10 * hard));
};

const otherparms = (collegeTierNum, dev, projects, csfundemt) => {
    let sum1 = 0;
    if (collegeTierNum === 1) {
        sum1 += 250;
    } else if (collegeTierNum === 2) {
        sum1 += 200;
    } else {
        sum1 += 100;
    }
    if (dev) {
        sum1 += 400;
    } else {
        sum1 += 150;
    }
    if (projects) {
        sum1 += 400;
    } else {
        sum1 += 100;
    }
    if (csfundemt) {
        sum1 += 450;
    } else {
        sum1 += 100;
    }
    return sum1;
};

Routes.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const {
            leetcode,
            collegeTier,
            knowDevelopment,
            haveProjects,
            haveCsFundamentals
        } = req.body;

        // Convert collegeTier string to number
        let collegeTierNum = 3;
        if (collegeTier === "tier1") collegeTierNum = 1;
        else if (collegeTier === "tier2") collegeTierNum = 2;

        // Booleans are already booleans from frontend
        const dev = !!knowDevelopment;
        const projects = !!haveProjects;
        const csfundemt = !!haveCsFundamentals;

        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcode}`);
        const data = await response.json();
        if (!data) {
            return res.status(404).json({
                message: "No data found for the provided Leetcode username",
            });
        }
        const leetcodeeasyproblems = data.easySolved || 0;
        const leetcodemediumsolved = data.mediumSolved || 0;
        const leetcodehardsolved = data.hardSolved || 0;

        const rating = leetcoderating(leetcodeeasyproblems, leetcodemediumsolved, leetcodehardsolved);
        const other = otherparms(collegeTierNum, dev, projects, csfundemt);

        const totalelo = (1.3 * rating + 0.7 * other);
        let elopercntage = (totalelo / 3000) * 100;
        if (elopercntage === 100) {
            elopercntage = 99.98;
        }
        console.log(
            `the leetcode performance is ${rating}\n the othermatrix is ${other} \n the total elo is ${totalelo}\n the percentage scored is ${elopercntage}`
        );
        res.json({ rating,leetcodeeasyproblems, leetcodemediumsolved,leetcodehardsolved,other, totalelo, elopercntage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = Routes;