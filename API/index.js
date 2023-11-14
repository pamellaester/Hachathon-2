const cors = require('cors')
const express = require('express');
const app = express();
const PORT = 8080;

app.use(cors())

app.listen(
    PORT, () =>
    console.log(`it alive on http://localhost:${PORT}`))

app.get('/api', (req, res) => {
    res.json([
        {
            "question": "What action did Israel take in 2005 in hopes of making peace with the Palestinian people?",
            "correct_answer": "Withdrew all citizens and forces from Gaza",
            "incorrect_answers": [
                "Launched a military offensive",
                "Imposed a blockade on Gaza",
                "Annexed parts of the West Bank"
            ]
        },
        {
            "question": "When did Hamas launch the war against Israel, according to the information provided?",
            "correct_answer": "October 7th",
            "incorrect_answers": [
                "October 20th",
                "November 10th",
                "October 29th"
            ]
        },
        {
            "question": "According to U.S. Secretary of Defense Lloyd Austin, how did he describe the Hamas massacre in comparison to ISIS?",
            "correct_answer": "Worse than ISIS",
            "incorrect_answers": [
                "Similar to ISIS",
                "Better than ISIS",
                "No comparison made"
            ]
        },
        {
            "question": "How many people were reportedly murdered at a music festival during the conflict?",
            "correct_answer": "260",
            "incorrect_answers": [
                "300",
                "200",
                "150"
            ]
        },
        {
            "question": "Who took over Gaza from the Palestinian Authority in 2007, leading to a land and sea blockade?",
            "correct_answer": "Hamas",
            "incorrect_answers": [
                "Fatah",
                "Islamic Jihad",
                "Hezbollah"
            ]
        },
        {
            "question": "What did Israel initially stop delivering to Gaza in response to Hamas launching an all-out war?",
            "correct_answer": "Fuel and water",
            "incorrect_answers": [
                "Medical aid",
                "Food supplies",
                "Humanitarian aid"
            ]
        },
        {
            "question": "Who took over Gaza from the Palestinian Authority in 2007, leading to a land and sea blockade?",
            "correct_answer": "Hamas",
            "incorrect_answers": [
                "Fatah",
                "Islamic Jihad",
                "Hezbollah"
            ]
        },
        {
            "question": "What is Hamas?",
            "correct_answer": "a genocidal terrorist group advocating for violence and terrorism, causing unrest in the Israel-Palestine region.",
            "incorrect_answers": [
                "Hamas is a charitable organization dedicated to humanitarian efforts in the Palestinian territories.",
                "Hamas is a peacekeeping force recognized by the international community for its efforts in the region.",
                "Hamas is a secular political party promoting democracy and social justice in the Palestinian territories."
            ]
        },
        {
            "question": "How does Israel's approach to civilian casualties in Gaza differ from Hamas according to the text?",
            "correct_answer": "Israel provides warnings to civilians before striking military targets, while Hamas deliberately invades and massacres innocent people.",
            "incorrect_answers": [
                "Israel intentionally targets civilians during military operations.",
                "Both Israel and Hamas intentionally harm civilians, according to legal and military experts.",
                "Israel militarizes Palestinian cities and neighborhoods, leading to tragic deaths among innocent Palestinians."
            ]
        },
        {
            "question": "Who currently rules Gaza, and what led to their control over the territory?",
            "correct_answer": "Hamas violently took over Gaza from the Palestinian Authority in 2007 after winning elections in 2006.",
            "incorrect_answers": [
                "The Palestinian Authority (PA) gained control after winning elections.",
                "Israel regained control after a unilateral withdrawal in 2005.",
                "Egypt took control to prevent weapons from entering Gaza."
            ]
        }
    ])
});
