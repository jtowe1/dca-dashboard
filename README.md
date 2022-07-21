# Bitcoin Dollar Cost Average Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### Setup the project

```bash
git clone https://github.com/jtowe1/dca-dashboard.git
cd dca-dashboard
npm install
```

### Setup the data
The site expects a csv file to be here
`public/data/transfers.csv`

And have this structure
```csv
Event,Date,Timezone,Status,USD,Unit Count,Asset Type,BTC Price
purchase,2021-03-18 16:51:02+00,UTC,settled,50.00,0.00083946,BTC,59562.10
purchase,2021-03-25 17:03:14+00,UTC,settled,50.00,0.00097714,BTC,51169.74
purchase,2021-04-01 17:13:07+00,UTC,settled,50.00,0.00085221,BTC,58670.98
```

Note: If you use the Swan Bitcoin DCA service, the csv you can download is already in this format.


### Run the app
`npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<img width="1618" alt="Screen Shot 2022-07-21 at 5 46 22 PM" src="https://user-images.githubusercontent.com/62212326/180320895-e8475e34-4148-477c-9608-a57690de86d1.png">

<img width="1625" alt="Screen Shot 2022-07-21 at 5 45 56 PM" src="https://user-images.githubusercontent.com/62212326/180320921-89e80e69-c692-4340-aaa5-5adcfb0d9582.png">

