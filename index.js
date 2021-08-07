const express = require('express');
const coinsInfo = require('./coins');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/coins', (req, res) => {
    res.status(501).send('not implemented');
});

app.get('/coins/:id', (req, res) => {
    res.status(501).send('not implemented');
});

app.delete('/coins/:id', (req, res) => {
    res.status(501).send('not implemented');
});

app.post('/coins', (req, res) => {
    // get query coins
    const queryCoins = req.body.coins.reduce((acc, curr) => acc+ "," + curr);
    // get dates
    const selectedDate = req.body.date;
    const date = new Date();
    const now = (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    // get data from api
    const promiseSelectedDate = coinsInfo.getPrices(queryCoins, selectedDate);
    const promiseNow= coinsInfo.getPrices(queryCoins, now);

    if(promiseSelectedDate === null || promiseNow === null) {
        res.status(500).send("internal error");
        return;
    }

    const dataPromise = promiseSelectedDate.then((selectedDateResponse) => {
        promiseNow.then((nowResponse) => {
            const selectedDateMap = selectedDateResponse.data;
            const nowDateMap = nowResponse.data;

            const resultMap = {};

            for (const [key, prevValue] of Object.entries(selectedDateMap)) {
                const currValue = nowDateMap[key];
                const diff = ((currValue - prevValue) / prevValue) * 100;
                resultMap[key] = diff.toFixed(3) + "%";
            };

            res.json(resultMap);
        })
    });
});

app.listen(port, () => { console.log("Server started!") });
