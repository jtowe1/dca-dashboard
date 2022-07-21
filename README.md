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
Event,Date,Timezone,USD,Unit Count,BTC Price
purchase,2021-03-18 16:51:02+00,UTC,50.00,0.00083946,59562.10
purchase,2021-03-25 17:03:14+00,UTC,50.00,0.00097714,51169.74
purchase,2021-04-01 17:13:07+00,UTC,50.00,0.00085221,58670.98
```

Note: If you use the Swan Bitcoin DCA service, the csv you can download is already in this format.


### Run the app
`npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<img width="1601" alt="Screen Shot 2022-07-21 at 6 36 32 PM" src="https://user-images.githubusercontent.com/62212326/180326686-0193bf9d-79ab-480d-b6ec-6a8dab37d38a.png">

<img width="1603" alt="Screen Shot 2022-07-21 at 6 36 21 PM" src="https://user-images.githubusercontent.com/62212326/180326654-bba80820-a1d4-4585-8955-b6a61b255977.png">

