const express=require('express');
const dotenv=require('dotenv')
const cors=require('cors');
const dbConnect=require('./dbConnect');
const { default: mongoose } = require('mongoose');

const app=express();
dotenv.config('./.env');
app.use("*",cors())


//--------------Data Loading-----------------------
// let arr=[
// 	{
// 		"symbol": "IRCTC",
// 		"open": 1022.75,
// 		"lastPrice": 1058,
// 		"chart": "https://nsearchives.nseindia.com/30d/IRCTC-EQ.svg",
// 		"companyName": "Indian Railway Catering And Tourism Corporation Limited"
// 	},
// 	{
// 		"symbol": "VEDL",
// 		"open": 365.55,
// 		"lastPrice": 372.95,
// 		"chart": "https://nsearchives.nseindia.com/30d/VEDL-EQ.svg",
// 		"companyName": "Vedanta Limited",
// 		"industry": "MINING"
// 	},
// 	{
// 		"symbol": "HAL",
// 		"open": 3565,
// 		"lastPrice": 3643,
// 		"chart": "https://nsearchives.nseindia.com/30d/HAL-EQ.svg",
// 		"companyName": "Hindustan Aeronautics Limited"
// 	},
// 	{
// 		"symbol": "BEL",
// 		"open": 231.3,
// 		"lastPrice": 233.6,
// 		"chart": "https://nsearchives.nseindia.com/30d/BEL-EQ.svg",
// 		"companyName": "Bharat Electronics Limited",
// 		"industry": "ELECTRONICS - INDUSTRIAL"
// 	},
// 	{
// 		"symbol": "ABB",
// 		"open": 6650,
// 		"lastPrice": 6742,
// 		"chart": "https://nsearchives.nseindia.com/30d/ABB-EQ.svg",
// 		"companyName": "ABB India Limited",
// 		"industry": "ELECTRICAL EQUIPMENT"
// 	},
// 	{
// 		"symbol": "TATAPOWER",
// 		"open": 431.5,
// 		"lastPrice": 437.75,
// 		"chart": "https://nsearchives.nseindia.com/30d/TATAPOWER-EQ.svg",
// 		"companyName": "Tata Power Company Limited",
// 		"industry": "POWER"
// 	},
// 	{
// 		"symbol": "MOTHERSON",
// 		"open": 118.8,
// 		"lastPrice": 120.5,
// 		"chart": "https://nsearchives.nseindia.com/30d/MOTHERSON-EQ.svg",
// 		"companyName": "Samvardhana Motherson International Limited"
// 	},
// 	{
// 		"symbol": "TRENT",
// 		"open": 4047,
// 		"lastPrice": 4066,
// 		"chart": "https://nsearchives.nseindia.com/30d/TRENT-EQ.svg",
// 		"companyName": "Trent Limited",
// 		"industry": "MISCELLANEOUS"
// 	},
// 	{
// 		"symbol": "DIVISLAB",
// 		"open": 3739,
// 		"lastPrice": 3770.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/DIVISLAB-EQ.svg",
// 		"companyName": "Divi's Laboratories Limited",
// 		"industry": "PHARMACEUTICALS"
// 	},
// 	{
// 		"symbol": "BAJAJ-AUTO",
// 		"open": 8949.05,
// 		"lastPrice": 9074.15,
// 		"chart": "https://nsearchives.nseindia.com/30d/BAJAJ-AUTO-EQ.svg",
// 		"companyName": "Bajaj Auto Limited",
// 		"industry": "AUTOMOBILES - 2 AND 3 WHEELERS"
// 	},
// 	{
// 		"symbol": "TATAMOTORS",
// 		"open": 1014,
// 		"lastPrice": 1020,
// 		"chart": "https://nsearchives.nseindia.com/30d/TATAMOTORS-EQ.svg",
// 		"companyName": "Tata Motors Limited",
// 		"industry": "AUTOMOBILES - 4 WHEELERS"
// 	},
// 	{
// 		"symbol": "JIOFIN",
// 		"open": 370.15,
// 		"lastPrice": 372.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/JIOFIN-EQ.svg",
// 		"companyName": "Jio Financial Services Limited"
// 	},
// 	{
// 		"symbol": "HAVELLS",
// 		"open": 1500.6,
// 		"lastPrice": 1509.6,
// 		"chart": "https://nsearchives.nseindia.com/30d/HAVELLS-EQ.svg",
// 		"companyName": "Havells India Limited",
// 		"industry": "ELECTRICAL EQUIPMENT"
// 	},
// 	{
// 		"symbol": "BAJAJHLDNG",
// 		"open": 8187.95,
// 		"lastPrice": 8190,
// 		"chart": "https://nsearchives.nseindia.com/30d/BAJAJHLDNG-EQ.svg",
// 		"companyName": "Bajaj Holdings & Investment Limited",
// 		"industry": "FINANCE"
// 	},
// 	{
// 		"symbol": "TCS",
// 		"open": 3971,
// 		"lastPrice": 4003.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/TCS-EQ.svg",
// 		"companyName": "Tata Consultancy Services Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "TORNTPHARM",
// 		"open": 2580,
// 		"lastPrice": 2589,
// 		"chart": "https://nsearchives.nseindia.com/30d/TORNTPHARM-EQ.svg",
// 		"companyName": "Torrent Pharmaceuticals Limited",
// 		"industry": "PHARMACEUTICALS"
// 	},
// 	{
// 		"symbol": "BOSCHLTD",
// 		"open": 29951.35,
// 		"lastPrice": 29891.65,
// 		"chart": "https://nsearchives.nseindia.com/30d/BOSCHLTD-EQ.svg",
// 		"companyName": "Bosch Limited",
// 		"industry": "AUTO ANCILLARIES"
// 	},
// 	{
// 		"symbol": "DMART",
// 		"open": 4753.9,
// 		"lastPrice": 4765.85,
// 		"chart": "https://nsearchives.nseindia.com/30d/DMART-EQ.svg",
// 		"companyName": "Avenue Supermarts Limited"
// 	},
// 	{
// 		"symbol": "JINDALSTEL",
// 		"open": 900.95,
// 		"lastPrice": 899.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/JINDALSTEL-EQ.svg",
// 		"companyName": "Jindal Steel & Power Limited",
// 		"industry": "STEEL AND STEEL PRODUCTS"
// 	},
// 	{
// 		"symbol": "NESTLEIND",
// 		"open": 2534.7,
// 		"lastPrice": 2532.9,
// 		"chart": "https://nsearchives.nseindia.com/30d/NESTLEIND-EQ.svg",
// 		"companyName": "Nestle India Limited",
// 		"industry": "FOOD AND FOOD PROCESSING"
// 	},
// 	{
// 		"symbol": "ICICIPRULI",
// 		"open": 625.85,
// 		"lastPrice": 628.05,
// 		"chart": "https://nsearchives.nseindia.com/30d/ICICIPRULI-EQ.svg",
// 		"companyName": "ICICI Prudential Life Insurance Company Limited"
// 	},
// 	{
// 		"symbol": "TATAMTRDVR",
// 		"open": 671,
// 		"lastPrice": 671.6,
// 		"chart": "https://nsearchives.nseindia.com/30d/TATAMTRDVR-EQ.svg",
// 		"companyName": "Tata Motors Limited",
// 		"industry": "AUTOMOBILES - 4 WHEELERS"
// 	},
// 	{
// 		"symbol": "ADANIENSOL",
// 		"open": 1066.15,
// 		"lastPrice": 1065.25,
// 		"chart": "https://nsearchives.nseindia.com/30d/ADANIENSOL-EQ.svg",
// 		"companyName": "Adani Energy Solutions Limited"
// 	},
// 	{
// 		"symbol": "SIEMENS",
// 		"open": 5582.8,
// 		"lastPrice": 5584,
// 		"chart": "https://nsearchives.nseindia.com/30d/SIEMENS-EQ.svg",
// 		"companyName": "Siemens Limited",
// 		"industry": "ELECTRICAL EQUIPMENT"
// 	},
// 	{
// 		"symbol": "COLPAL",
// 		"open": 2660,
// 		"lastPrice": 2656,
// 		"chart": "https://nsearchives.nseindia.com/30d/COLPAL-EQ.svg",
// 		"companyName": "Colgate Palmolive (India) Limited",
// 		"industry": "PERSONAL CARE"
// 	},
// 	{
// 		"symbol": "COALINDIA",
// 		"open": 455,
// 		"lastPrice": 456.3,
// 		"chart": "https://nsearchives.nseindia.com/30d/COALINDIA-EQ.svg",
// 		"companyName": "Coal India Limited",
// 		"industry": "MINING"
// 	},
// 	{
// 		"symbol": "TATACONSUM",
// 		"open": 1144.35,
// 		"lastPrice": 1144.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/TATACONSUM-EQ.svg",
// 		"companyName": "TATA CONSUMER PRODUCTS LIMITED"
// 	},
// 	{
// 		"symbol": "INDUSINDBK",
// 		"open": 1546,
// 		"lastPrice": 1551.5,
// 		"chart": "https://nsearchives.nseindia.com/30d/INDUSINDBK-EQ.svg",
// 		"companyName": "IndusInd Bank Limited",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "NTPC",
// 		"open": 362.5,
// 		"lastPrice": 361.85,
// 		"chart": "https://nsearchives.nseindia.com/30d/NTPC-EQ.svg",
// 		"companyName": "NTPC Limited",
// 		"industry": "POWER"
// 	},
// 	{
// 		"symbol": "M&M",
// 		"open": 2084,
// 		"lastPrice": 2072,
// 		"chart": "https://nsearchives.nseindia.com/30d/M&M-EQ.svg",
// 		"companyName": "Mahindra & Mahindra Limited",
// 		"industry": "AUTOMOBILES - 4 WHEELERS"
// 	},
// 	{
// 		"symbol": "EICHERMOT",
// 		"open": 4310,
// 		"lastPrice": 4305,
// 		"chart": "https://nsearchives.nseindia.com/30d/EICHERMOT-EQ.svg",
// 		"companyName": "Eicher Motors Limited",
// 		"industry": "AUTOMOBILES - 4 WHEELERS"
// 	},
// 	{
// 		"symbol": "MARICO",
// 		"open": 516.7,
// 		"lastPrice": 513.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/MARICO-EQ.svg",
// 		"companyName": "Marico Limited",
// 		"industry": "PERSONAL CARE"
// 	},
// 	{
// 		"symbol": "BAJFINANCE",
// 		"open": 7224,
// 		"lastPrice": 7210,
// 		"chart": "https://nsearchives.nseindia.com/30d/BAJFINANCE-EQ.svg",
// 		"companyName": "Bajaj Finance Limited",
// 		"industry": "FINANCE"
// 	},
// 	{
// 		"symbol": "DLF",
// 		"open": 911.15,
// 		"lastPrice": 908,
// 		"chart": "https://nsearchives.nseindia.com/30d/DLF-EQ.svg",
// 		"companyName": "DLF Limited",
// 		"industry": "CONSTRUCTION"
// 	},
// 	{
// 		"symbol": "ADANIPORTS",
// 		"open": 1350,
// 		"lastPrice": 1347,
// 		"chart": "https://nsearchives.nseindia.com/30d/ADANIPORTS-EQ.svg",
// 		"companyName": "Adani Ports and Special Economic Zone Limited",
// 		"industry": "SHIPPING"
// 	},
// 	{
// 		"symbol": "LICI",
// 		"open": 976,
// 		"lastPrice": 972.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/LICI-EQ.svg",
// 		"companyName": "Life Insurance Corporation Of India"
// 	},
// 	{
// 		"symbol": "GAIL",
// 		"open": 204,
// 		"lastPrice": 201.25,
// 		"chart": "https://nsearchives.nseindia.com/30d/GAIL-EQ.svg",
// 		"companyName": "GAIL (India) Limited",
// 		"industry": "GAS"
// 	},
// 	{
// 		"symbol": "BAJAJFINSV",
// 		"open": 1700,
// 		"lastPrice": 1696,
// 		"chart": "https://nsearchives.nseindia.com/30d/BAJAJFINSV-EQ.svg",
// 		"companyName": "Bajaj Finserv Limited",
// 		"industry": "FINANCE"
// 	},
// 	{
// 		"symbol": "PIDILITIND",
// 		"open": 3000,
// 		"lastPrice": 2985,
// 		"chart": "https://nsearchives.nseindia.com/30d/PIDILITIND-EQ.svg",
// 		"companyName": "Pidilite Industries Limited",
// 		"industry": "CHEMICALS - SPECIALITY"
// 	},
// 	{
// 		"symbol": "BHARTIARTL",
// 		"open": 1226.1,
// 		"lastPrice": 1222.85,
// 		"chart": "https://nsearchives.nseindia.com/30d/BHARTIARTL-EQ.svg",
// 		"companyName": "Bharti Airtel Limited",
// 		"industry": "TELECOMMUNICATION - SERVICES"
// 	},
// 	{
// 		"symbol": "ICICIBANK",
// 		"open": 1103.5,
// 		"lastPrice": 1103,
// 		"chart": "https://nsearchives.nseindia.com/30d/ICICIBANK-EQ.svg",
// 		"companyName": "ICICI Bank Limited",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "HDFCLIFE",
// 		"open": 621,
// 		"lastPrice": 617.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/HDFCLIFE-EQ.svg",
// 		"companyName": "HDFC Life Insurance Company Limited"
// 	},
// 	{
// 		"symbol": "BPCL",
// 		"open": 604.75,
// 		"lastPrice": 601,
// 		"chart": "https://nsearchives.nseindia.com/30d/BPCL-EQ.svg",
// 		"companyName": "Bharat Petroleum Corporation Limited",
// 		"industry": "REFINERIES"
// 	},
// 	{
// 		"symbol": "SRF",
// 		"open": 2645,
// 		"lastPrice": 2629,
// 		"chart": "https://nsearchives.nseindia.com/30d/SRF-EQ.svg",
// 		"companyName": "SRF Limited",
// 		"industry": "TEXTILES - SYNTHETIC"
// 	},
// 	{
// 		"symbol": "LTIM",
// 		"open": 4916,
// 		"lastPrice": 4887,
// 		"chart": "https://nsearchives.nseindia.com/30d/LTIM-EQ.svg",
// 		"companyName": "LTIMindtree Limited"
// 	},
// 	{
// 		"symbol": "SBILIFE",
// 		"open": 1501,
// 		"lastPrice": 1493,
// 		"chart": "https://nsearchives.nseindia.com/30d/SBILIFE-EQ.svg",
// 		"companyName": "SBI Life Insurance Company Limited"
// 	},
// 	{
// 		"symbol": "KOTAKBANK",
// 		"open": 1811,
// 		"lastPrice": 1813,
// 		"chart": "https://nsearchives.nseindia.com/30d/KOTAKBANK-EQ.svg",
// 		"companyName": "Kotak Mahindra Bank Limited",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "RELIANCE",
// 		"open": 2951.75,
// 		"lastPrice": 2937.15,
// 		"chart": "https://nsearchives.nseindia.com/30d/RELIANCE-EQ.svg",
// 		"companyName": "Reliance Industries Limited",
// 		"industry": "REFINERIES"
// 	},
// 	{
// 		"symbol": "SHREECEM",
// 		"open": 25699,
// 		"lastPrice": 25418.95,
// 		"chart": "https://nsearchives.nseindia.com/30d/SHREECEM-EQ.svg",
// 		"companyName": "SHREE CEMENT LIMITED",
// 		"industry": "CEMENT AND CEMENT PRODUCTS"
// 	},
// 	{
// 		"symbol": "IRFC",
// 		"open": 146.7,
// 		"lastPrice": 145.5,
// 		"chart": "https://nsearchives.nseindia.com/30d/IRFC-EQ.svg",
// 		"companyName": "Indian Railway Finance Corporation Limited"
// 	},
// 	{
// 		"symbol": "ADANIENT",
// 		"open": 3210,
// 		"lastPrice": 3215,
// 		"chart": "https://nsearchives.nseindia.com/30d/ADANIENT-EQ.svg",
// 		"companyName": "Adani Enterprises Limited",
// 		"industry": "TRADING"
// 	},
// 	{
// 		"symbol": "BERGEPAINT",
// 		"open": 561.7,
// 		"lastPrice": 556.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/BERGEPAINT-EQ.svg",
// 		"companyName": "Berger Paints (I) Limited",
// 		"industry": "PAINTS"
// 	},
// 	{
// 		"symbol": "PFC",
// 		"open": 405.9,
// 		"lastPrice": 403.05,
// 		"chart": "https://nsearchives.nseindia.com/30d/PFC-EQ.svg",
// 		"companyName": "Power Finance Corporation Limited",
// 		"industry": "FINANCIAL INSTITUTION"
// 	},
// 	{
// 		"symbol": "CHOLAFIN",
// 		"open": 1191.05,
// 		"lastPrice": 1181,
// 		"chart": "https://nsearchives.nseindia.com/30d/CHOLAFIN-EQ.svg",
// 		"companyName": "Cholamandalam Investment and Finance Company Limited",
// 		"industry": "FINANCE"
// 	},
// 	{
// 		"symbol": "TATASTEEL",
// 		"open": 166,
// 		"lastPrice": 163.5,
// 		"chart": "https://nsearchives.nseindia.com/30d/TATASTEEL-EQ.svg",
// 		"companyName": "TATA Steel Limited",
// 		"industry": "STEEL AND STEEL PRODUCTS"
// 	},
// 	{
// 		"symbol": "HEROMOTOCO",
// 		"open": 4509,
// 		"lastPrice": 4450,
// 		"chart": "https://nsearchives.nseindia.com/30d/HEROMOTOCO-EQ.svg",
// 		"companyName": "Hero MotoCorp Limited",
// 		"industry": "AUTOMOBILES - 2 AND 3 WHEELERS"
// 	},
// 	{
// 		"symbol": "DRREDDY",
// 		"open": 6168.9,
// 		"lastPrice": 6093.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/DRREDDY-EQ.svg",
// 		"companyName": "Dr. Reddy's Laboratories Limited",
// 		"industry": "PHARMACEUTICALS"
// 	},
// 	{
// 		"symbol": "ADANIGREEN",
// 		"open": 1907.9,
// 		"lastPrice": 1887,
// 		"chart": "https://nsearchives.nseindia.com/30d/ADANIGREEN-EQ.svg",
// 		"companyName": "Adani Green Energy Limited"
// 	},
// 	{
// 		"symbol": "DABUR",
// 		"open": 507,
// 		"lastPrice": 500.6,
// 		"chart": "https://nsearchives.nseindia.com/30d/DABUR-EQ.svg",
// 		"companyName": "Dabur India Limited",
// 		"industry": "PERSONAL CARE"
// 	},
// 	{
// 		"symbol": "CANBK",
// 		"open": 608.55,
// 		"lastPrice": 606,
// 		"chart": "https://nsearchives.nseindia.com/30d/CANBK-EQ.svg",
// 		"companyName": "Canara Bank",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "BANKBARODA",
// 		"open": 269.8,
// 		"lastPrice": 267.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/BANKBARODA-EQ.svg",
// 		"companyName": "Bank of Baroda",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "HCLTECH",
// 		"open": 1537,
// 		"lastPrice": 1521.3,
// 		"chart": "https://nsearchives.nseindia.com/30d/HCLTECH-EQ.svg",
// 		"companyName": "HCL Technologies Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "APOLLOHOSP",
// 		"open": 6450,
// 		"lastPrice": 6414,
// 		"chart": "https://nsearchives.nseindia.com/30d/APOLLOHOSP-EQ.svg",
// 		"companyName": "Apollo Hospitals Enterprise Limited",
// 		"industry": "MISCELLANEOUS"
// 	},
// 	{
// 		"symbol": "PNB",
// 		"open": 135.6,
// 		"lastPrice": 134.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/PNB-EQ.svg",
// 		"companyName": "Punjab National Bank",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "ATGL",
// 		"open": 957.1,
// 		"lastPrice": 950,
// 		"chart": "https://nsearchives.nseindia.com/30d/ATGL-EQ.svg",
// 		"companyName": "Adani Total Gas Limited"
// 	},
// 	{
// 		"symbol": "HINDALCO",
// 		"open": 609.05,
// 		"lastPrice": 595.95,
// 		"chart": "https://nsearchives.nseindia.com/30d/HINDALCO-EQ.svg",
// 		"companyName": "Hindalco Industries Limited",
// 		"industry": "ALUMINIUM"
// 	},
// 	{
// 		"symbol": "HINDUNILVR",
// 		"open": 2260.9,
// 		"lastPrice": 2234,
// 		"chart": "https://nsearchives.nseindia.com/30d/HINDUNILVR-EQ.svg",
// 		"companyName": "Hindustan Unilever Limited",
// 		"industry": "DIVERSIFIED"
// 	},
// 	{
// 		"symbol": "BRITANNIA",
// 		"open": 4818,
// 		"lastPrice": 4749,
// 		"chart": "https://nsearchives.nseindia.com/30d/BRITANNIA-EQ.svg",
// 		"companyName": "Britannia Industries Limited",
// 		"industry": "FOOD AND FOOD PROCESSING"
// 	},
// 	{
// 		"symbol": "WIPRO",
// 		"open": 475,
// 		"lastPrice": 471.2,
// 		"chart": "https://nsearchives.nseindia.com/30d/WIPRO-EQ.svg",
// 		"companyName": "Wipro Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "HDFCBANK",
// 		"open": 1521,
// 		"lastPrice": 1516.25,
// 		"chart": "https://nsearchives.nseindia.com/30d/HDFCBANK-EQ.svg",
// 		"companyName": "HDFC Bank Limited",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "AXISBANK",
// 		"open": 1079.5,
// 		"lastPrice": 1073,
// 		"chart": "https://nsearchives.nseindia.com/30d/AXISBANK-EQ.svg",
// 		"companyName": "Axis Bank Limited",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "INFY",
// 		"open": 1504,
// 		"lastPrice": 1484.85,
// 		"chart": "https://nsearchives.nseindia.com/30d/INFY-EQ.svg",
// 		"companyName": "Infosys Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "SBICARD",
// 		"open": 747,
// 		"lastPrice": 737,
// 		"chart": "https://nsearchives.nseindia.com/30d/SBICARD-EQ.svg",
// 		"companyName": "SBI Cards and Payment Services Limited"
// 	},
// 	{
// 		"symbol": "ITC",
// 		"open": 435,
// 		"lastPrice": 430.5,
// 		"chart": "https://nsearchives.nseindia.com/30d/ITC-EQ.svg",
// 		"companyName": "ITC Limited",
// 		"industry": "CIGARETTES"
// 	},
// 	{
// 		"symbol": "MCDOWELL-N",
// 		"open": 1198.75,
// 		"lastPrice": 1182.2,
// 		"chart": "https://nsearchives.nseindia.com/30d/MCDOWELL-N-EQ.svg",
// 		"companyName": "United Spirits Limited",
// 		"industry": "BREW/DISTILLERIES"
// 	},
// 	{
// 		"symbol": "ASIANPAINT",
// 		"open": 2890,
// 		"lastPrice": 2853,
// 		"chart": "https://nsearchives.nseindia.com/30d/ASIANPAINT-EQ.svg",
// 		"companyName": "Asian Paints Limited",
// 		"industry": "PAINTS"
// 	},
// 	{
// 		"symbol": "ICICIGI",
// 		"open": 1691,
// 		"lastPrice": 1660.4,
// 		"chart": "https://nsearchives.nseindia.com/30d/ICICIGI-EQ.svg",
// 		"companyName": "ICICI Lombard General Insurance Company Limited"
// 	},
// 	{
// 		"symbol": "SBIN",
// 		"open": 777.25,
// 		"lastPrice": 766.55,
// 		"chart": "https://nsearchives.nseindia.com/30d/SBIN-EQ.svg",
// 		"companyName": "State Bank of India",
// 		"industry": "BANKS"
// 	},
// 	{
// 		"symbol": "ZOMATO",
// 		"open": 195.85,
// 		"lastPrice": 193.7,
// 		"chart": "https://nsearchives.nseindia.com/30d/ZOMATO-EQ.svg",
// 		"companyName": "Zomato Limited"
// 	},
// 	{
// 		"symbol": "CIPLA",
// 		"open": 1423,
// 		"lastPrice": 1399.55,
// 		"chart": "https://nsearchives.nseindia.com/30d/CIPLA-EQ.svg",
// 		"companyName": "Cipla Limited",
// 		"industry": "PHARMACEUTICALS"
// 	},
// 	{
// 		"symbol": "SHRIRAMFIN",
// 		"open": 2519.95,
// 		"lastPrice": 2486,
// 		"chart": "https://nsearchives.nseindia.com/30d/SHRIRAMFIN-EQ.svg",
// 		"companyName": "Shriram Finance Limited"
// 	},
// 	{
// 		"symbol": "NAUKRI",
// 		"open": 6080,
// 		"lastPrice": 5980,
// 		"chart": "https://nsearchives.nseindia.com/30d/NAUKRI-EQ.svg",
// 		"companyName": "Info Edge (India) Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "IOC",
// 		"open": 172.95,
// 		"lastPrice": 170.05,
// 		"chart": "https://nsearchives.nseindia.com/30d/IOC-EQ.svg",
// 		"companyName": "Indian Oil Corporation Limited",
// 		"industry": "REFINERIES"
// 	},
// 	{
// 		"symbol": "LT",
// 		"open": 3749.95,
// 		"lastPrice": 3687,
// 		"chart": "https://nsearchives.nseindia.com/30d/LT-EQ.svg",
// 		"companyName": "Larsen & Toubro Limited",
// 		"industry": "ENGINEERING"
// 	},
// 	{
// 		"symbol": "RECLTD",
// 		"open": 444.05,
// 		"lastPrice": 440.2,
// 		"chart": "https://nsearchives.nseindia.com/30d/RECLTD-EQ.svg",
// 		"companyName": "REC Limited",
// 		"industry": "FINANCIAL INSTITUTION"
// 	},
// 	{
// 		"symbol": "ULTRACEMCO",
// 		"open": 9789.95,
// 		"lastPrice": 9620,
// 		"chart": "https://nsearchives.nseindia.com/30d/ULTRACEMCO-EQ.svg",
// 		"companyName": "UltraTech Cement Limited",
// 		"industry": "CEMENT AND CEMENT PRODUCTS"
// 	},
// 	{
// 		"symbol": "AMBUJACEM",
// 		"open": 623.5,
// 		"lastPrice": 612,
// 		"chart": "https://nsearchives.nseindia.com/30d/AMBUJACEM-EQ.svg",
// 		"companyName": "Ambuja Cements Limited",
// 		"industry": "CEMENT AND CEMENT PRODUCTS"
// 	},
// 	{
// 		"symbol": "TECHM",
// 		"open": 1264.95,
// 		"lastPrice": 1238.55,
// 		"chart": "https://nsearchives.nseindia.com/30d/TECHM-EQ.svg",
// 		"companyName": "Tech Mahindra Limited",
// 		"industry": "COMPUTERS - SOFTWARE"
// 	},
// 	{
// 		"symbol": "GRASIM",
// 		"open": 2297,
// 		"lastPrice": 2255.75,
// 		"chart": "https://nsearchives.nseindia.com/30d/GRASIM-EQ.svg",
// 		"companyName": "Grasim Industries Limited",
// 		"industry": "CEMENT AND CEMENT PRODUCTS"
// 	},
// 	{
// 		"symbol": "JSWSTEEL",
// 		"open": 883.9,
// 		"lastPrice": 863.9,
// 		"chart": "https://nsearchives.nseindia.com/30d/JSWSTEEL-EQ.svg",
// 		"companyName": "JSW Steel Limited",
// 		"industry": "STEEL AND STEEL PRODUCTS"
// 	},
// 	{
// 		"symbol": "TVSMOTOR",
// 		"open": 2097.9,
// 		"lastPrice": 2049.8,
// 		"chart": "https://nsearchives.nseindia.com/30d/TVSMOTOR-EQ.svg",
// 		"companyName": "TVS Motor Company Limited",
// 		"industry": "AUTOMOBILES - 2 AND 3 WHEELERS"
// 	},
// 	{
// 		"symbol": "ONGC",
// 		"open": 271.9,
// 		"lastPrice": 265.6,
// 		"chart": "https://nsearchives.nseindia.com/30d/ONGC-EQ.svg",
// 		"companyName": "Oil & Natural Gas Corporation Limited",
// 		"industry": "OIL EXPLORATION/PRODUCTION"
// 	},
// 	{
// 		"symbol": "GODREJCP",
// 		"open": 1230.15,
// 		"lastPrice": 1200.95,
// 		"chart": "https://nsearchives.nseindia.com/30d/GODREJCP-EQ.svg",
// 		"companyName": "Godrej Consumer Products Limited",
// 		"industry": "PERSONAL CARE"
// 	},
// 	{
// 		"symbol": "TITAN",
// 		"open": 3689.55,
// 		"lastPrice": 3623,
// 		"chart": "https://nsearchives.nseindia.com/30d/TITAN-EQ.svg",
// 		"companyName": "Titan Company Limited",
// 		"industry": "GEMS JEWELLERY AND WATCHES"
// 	},
// 	{
// 		"symbol": "VBL",
// 		"open": 1425,
// 		"lastPrice": 1389.65,
// 		"chart": "https://nsearchives.nseindia.com/30d/VBL-EQ.svg",
// 		"companyName": "Varun Beverages Limited"
// 	},
// 	{
// 		"symbol": "POWERGRID",
// 		"open": 281.5,
// 		"lastPrice": 275.45,
// 		"chart": "https://nsearchives.nseindia.com/30d/POWERGRID-EQ.svg",
// 		"companyName": "Power Grid Corporation of India Limited",
// 		"industry": "POWER"
// 	},
// 	{
// 		"symbol": "ADANIPOWER",
// 		"open": 615,
// 		"lastPrice": 600,
// 		"chart": "https://nsearchives.nseindia.com/30d/ATGL-EQ.svg",
// 		"companyName": "Adani Power Limited",
// 		"industry": "POWER"
// 	},
// 	{
// 		"symbol": "ZYDUSLIFE",
// 		"open": 992.45,
// 		"lastPrice": 965,
// 		"chart": "https://nsearchives.nseindia.com/30d/ZYDUSLIFE-EQ.svg",
// 		"companyName": "Zydus Lifesciences Limited"
// 	},
// 	{
// 		"symbol": "INDIGO",
// 		"open": 3830,
// 		"lastPrice": 3679.95,
// 		"chart": "https://nsearchives.nseindia.com/30d/INDIGO-EQ.svg",
// 		"companyName": "InterGlobe Aviation Limited",
// 		"industry": "TRAVEL AND TRANSPORT"
// 	},
// 	{
// 		"symbol": "MARUTI",
// 		"open": 12660,
// 		"lastPrice": 12269,
// 		"chart": "https://nsearchives.nseindia.com/30d/MARUTI-EQ.svg",
// 		"companyName": "Maruti Suzuki India Limited",
// 		"industry": "AUTOMOBILES - 4 WHEELERS"
// 	},
// 	{
// 		"symbol": "SUNPHARMA",
// 		"open": 1595,
// 		"lastPrice": 1545,
// 		"chart": "https://nsearchives.nseindia.com/30d/SUNPHARMA-EQ.svg",
// 		"companyName": "Sun Pharmaceutical Industries Limited",
// 		"industry": "PHARMACEUTICALS"
// 	}
// ]

// Schema
const stockSchema=new mongoose.Schema({
	symbol:String,
	open:String,
	lastPrice:String,
	chart:String,
	companyName:String,
	industry:String
})
const stock=mongoose.model('stock',stockSchema);


const getDoc=async()=>{
	let arr=await stock.find();
	arr.sort((a,b) => {
		return a.symbol.localeCompare(b.symbol) 
	 }) 
	return arr;
}
const getTopGainers=async()=>{
	let arr=await stock.find();
	arr.sort((a,b) => {
		return a.symbol.localeCompare(b.symbol) 
	 }) 
	 
	
	let topStocks=arr;
	topStocks.sort((a,b)=>{
		const aChange=((a.lastPrice-a.open)*100/a.open);
		const bChange=((b.lastPrice-b.open)*100/b.open);
		return aChange<bChange?1:-1;
	})
	
	let i=0;
	topStocks=topStocks.filter((elem)=>{
		i++;
		return i<=5?elem:null;
	})
	return topStocks;
}
//--------------ROUTES-----------------------
app.get('/',(req,res)=>{
    res.status(200).send('OK from server');
})

app.use('/getAllStocks',async(req,res)=>{
	const arr=await getDoc();
    res.status(200).send(arr);
})

app.use('/getTopGainers',async(req,res)=>{
	const topStocks=await getTopGainers();
    res.status(200).send(topStocks);
})

app.use('/search/:name',async(req,res)=>{
	const arr=await getDoc();
    const term=req.params['name'];
    const search = arr.filter(item =>(item.companyName.toLowerCase().includes(term.toLowerCase())
								|| item.symbol.toLowerCase().includes(term.toLowerCase())));
    res.status(200).send(search);
})

//database connection
dbConnect();


const PORT=process.env.PORT || 4001;
app.listen(PORT,()=>{
    console.log("Listning on port "+PORT);
});