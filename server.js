const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Greeting Route
app.get('/greeting/:name', (req, res) => {
    // console.log(req, 'here is req');
    const { name } = req.params;
    const greetings = ["Hello", "What's up", "It's so great to see you"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.send(`<h1>${randomGreeting}, ${name}!</h1>`);
});

// Tip Calculator Route
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const { total, tipPercentage } = req.params;

    // Convert the parameters to numbers
    const totalAmount = parseFloat(total);
    const tipPercent = parseFloat(tipPercentage);

    // Calculate the tip
    const tipAmount = (totalAmount * (tipPercent / 100)).toFixed(2);

    res.send(`<h1>Your tip amount is $${tipAmount}</h1>`);
});

// Magic 8 route
const magic8Response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// app.get('/magic8', (req, res) => {
//     console.log(req.params);  // Log the received parameters
//     // const { total, tipPercentage } = req.params;
//     // req.params.total
//     const { question }= req.params
//     res.send(`<h1>You asked: ${question}</h1>`);
//     // ... rest of the code
// });

app.get('/magic/:question', (req, res) => {
    const { question } = req.params;
    const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
        "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
        "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
        "Don't count on it", "My reply is no", "My sources say no",
        "Outlook not so good", "Very doubtful"
    ];
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    res.send(`<h1>${question}? ${randomResponse}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
