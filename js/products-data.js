/**
 * JOHNTECH VENDORS LTD - Master Data Store
 * Contains Products, Blog Articles, and Website Settings.
 * Supports localStorage persistence with seamless API synchronization.
 */

const DEFAULT_PRODUCTS = [
  {
    "id": "prod_oil_20l",
    "name": "Salad ATM (Cooking Oil Dispenser)",
    "category": "Oil ATM",
    "categorySlug": "oil-atm",
    "solutionType": "Vending & Dispensing",
    "price": 29000,
    "badge": "Top Seller",
    "featured": true,
    "description": "Smart cooking oil dispenser starting from 20 litres. Perfect for retail kiosks and supermarkets to dispense salad oil by monetary value.",
    "imageUrl": "assets/catalogue/3c8fd046-c22f-4671-ba8d-edf8e432f049-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/3c8fd046-c22f-4671-ba8d-edf8e432f049-removebg-preview%20(1).png",
    "specs": {
      "Capacity": "From 20 Litres",
      "Pump": "Oil-Specific Pump",
      "Dispensing": "Monetary Dispensing",
      "Footprint": "Compact Footprint"
    },
    "priceFormatted": "From KSh 29,000",
    "oldPrice": null
  },
  {
    "id": "prod_oil_50l",
    "name": "Cooking Oil ATM (Salad ATM) 40/50 Liters",
    "category": "Oil ATM",
    "categorySlug": "oil-atm",
    "solutionType": "Vending & Dispensing",
    "price": 38000,
    "badge": "Commercial Capacity",
    "featured": false,
    "description": "Heavy-duty commercial cooking oil ATM with 40-50L capacity. Designed for busy grocery retail outlets and supermarkets with heavy customer turnover. Equipped with anti-drip pneumatic dispensing nozzle, tamper-proof sales audit, and temperature-controlled heating jacket.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621767578_IMG_20250913_121345.jpg",
    "fallbackUrl": "assets/products/oil-atm-20l.jpg",
    "specs": {
      "Capacity": "40 / 50 Liters",
      "Dispensing": "Programmable KSh / Liters",
      "Material": "Stainless Steel",
      "Protection": "Password Protected Sales Audit"
    },
    "priceFormatted": "KSh 38,000"
  },
  {
    "id": "prod_ro_250lph",
    "name": "Reverse Osmosis Machine (250lph) 2 in 1 Set Up",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Tap Water / Municipal"
    ],
    "price": 298000,
    "badge": "Compact RO",
    "featured": false,
    "description": "250 LPH 2-in-1 reverse osmosis system tailored for small to mid-sized commercial water refilling shops treating borehole water.",
    "imageUrl": "assets/catalogue/6f5dbaa8-9af5-4ead-8dff-bd9de8d6eef3.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/6f5dbaa8-9af5-4ead-8dff-bd9de8d6eef3.jpg",
    "specs": {
      "Flow Rate": "250 LPH Flow Rate",
      "Configuration": "2-in-1 Configuration",
      "Application": "Borehole Specialist",
      "Investment": "Cost-Effective Start"
    },
    "priceFormatted": "KSh 298,000",
    "oldPrice": "KSh 330,000"
  },
  {
    "id": "prod_ro_500lph",
    "name": "Reverse Osmosis Machine (500LPH) 2IN1 Set Up",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Tap Water / Municipal"
    ],
    "price": 410000,
    "badge": "Most Popular",
    "featured": true,
    "description": "Commercial 2-in-1 reverse osmosis setup delivering 500 LPH. Perfect for purifying salty borehole water and high-hardness water sources.",
    "imageUrl": "assets/catalogue/0cc00287-ecf0-43f4-922e-c3ab0a151c97.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/0cc00287-ecf0-43f4-922e-c3ab0a151c97.jpg",
    "specs": {
      "Output": "500 LPH Output",
      "Configuration": "2-in-1 Setup",
      "Storage": "Stainless Tank & Stand",
      "Water Source": "Borehole Water"
    },
    "priceFormatted": "KSh 410,000",
    "oldPrice": "KSh 430,000"
  },
  {
    "id": "prod_ro_500lph_stand",
    "name": "Reverse Osmosis Machine (500LPH) 3IN1 Set Up",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Tap Water / Municipal"
    ],
    "price": 430000,
    "badge": "Station Model",
    "featured": false,
    "description": "Turnkey 3-in-1 reverse osmosis plant with 500 LPH output, pre-treatment media columns, overhead holding tank, and bottle rinser station.",
    "imageUrl": "assets/catalogue/b79c0dd7-8d85-4cef-b382-dc48e06e1643.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/b79c0dd7-8d85-4cef-b382-dc48e06e1643.jpg",
    "specs": {
      "Output": "500 LPH Output",
      "Plant Type": "3-in-1 Complete Plant",
      "Pre-treatment": "Pre-treatment Vessels",
      "Rinser": "Overhead Tank & Rinser"
    },
    "priceFormatted": "KSh 430,000",
    "oldPrice": "KSh 480,000"
  },
  {
    "id": "prod_ro_750lph",
    "name": "Reverse Osmosis Machine (750lph) (Stand)",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Water Softener / Fluoride"
    ],
    "price": 510000,
    "badge": "High Output",
    "featured": false,
    "description": "Industrial-grade 750 litres per hour reverse osmosis system mounted on a heavy-duty stainless frame for purifying borehole water.",
    "imageUrl": "assets/catalogue/1bf55650-b15e-4cd3-97be-14389b8f556e.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/1bf55650-b15e-4cd3-97be-14389b8f556e.jpg",
    "specs": {
      "Flow Rate": "750 LPH Flow Rate",
      "Frame": "Rigid Stand Skid",
      "Pump": "High Pressure Booster",
      "Control": "Full Instrumentation"
    },
    "priceFormatted": "KSh 510,000",
    "oldPrice": "KSh 530,000"
  },
  {
    "id": "prod_ro_1000lph",
    "name": "Reverse Osmosis Machine (1000LPH) Stand",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Water Softener / Fluoride"
    ],
    "price": 630000,
    "badge": "Industrial Heavy Duty",
    "featured": false,
    "description": "High-output 1,000 litres per hour commercial reverse osmosis plant mounted on a robust stainless stand for purifying borehole and hard water.",
    "imageUrl": "assets/catalogue/ef93bfeb-097d-4b64-b82e-31e60bbe1194.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/ef93bfeb-097d-4b64-b82e-31e60bbe1194.jpg",
    "specs": {
      "Flow Rate": "1,000 LPH Capacity",
      "Frame": "Stainless Steel Frame",
      "Water Type": "Borehole / Hard Water",
      "Rejection": "High TDS Rejection"
    },
    "priceFormatted": "KSh 630,000",
    "oldPrice": "KSh 650,000"
  },
  {
    "id": "prod_ro_1500lph",
    "name": "Industrial Reverse Osmosis Machine 1,500 LPH (Stand)",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Water Softener / Fluoride"
    ],
    "price": 850000,
    "badge": "Bottling Plant Tier",
    "featured": false,
    "description": "High-capacity 1,500 LPH reverse osmosis water manufacturing unit. Engineered for commercial water packaging and bottling plants, beverage production, and commercial agricultural irrigation.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774627437487_IMG-20260219-WA0027.jpg",
    "fallbackUrl": "assets/products/ro-500lph.jpg",
    "specs": {
      "Flow Rate": "1,500 LPH",
      "Pumps": "Dual High-Pressure Pumps",
      "Standards": "KEBS & WHO Drinking Standards"
    },
    "priceFormatted": "KSh 850,000"
  },
  {
    "id": "prod_ro_2000lph",
    "name": "Industrial Reverse Osmosis Plant 2,000 LPH",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Water Softener / Fluoride"
    ],
    "price": 1200000,
    "badge": "Maximum Output",
    "featured": false,
    "description": "Enterprise-grade 2,000 LPH water desalination and purification plant. Built on an all-stainless steel frame with CIP chemical cleaning port, online TDS monitoring, and multi-stage pre-filtration.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774627620121_IMG-20260219-WA0030.jpg",
    "fallbackUrl": "assets/products/ro-500lph.jpg",
    "specs": {
      "Flow Rate": "2,000 Liters/Hour (48,000 L/Day)",
      "Application": "Factories, Bottling Lines, Communities"
    },
    "priceFormatted": "KSh 1,200,000"
  },
  {
    "id": "prod_ultra_filtration",
    "name": "Ultrafiltration 3-in-1 Setup",
    "category": "Ultra Filtration",
    "categorySlug": "ultra-filtration",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Tap Water / Municipal",
      "Ultrafiltration"
    ],
    "price": 210000,
    "badge": "Pure Water Tech",
    "featured": true,
    "description": "Complete 3-in-1 ultrafiltration package featuring purification skid, overhead stainless steel tank, and bottle rinser sink.",
    "imageUrl": "assets/catalogue/ec09f20c-6a97-4fe9-a2ee-daffb6e0100c-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/ec09f20c-6a97-4fe9-a2ee-daffb6e0100c-removebg-preview%20(1).png",
    "specs": {
      "Package": "3-in-1 Package",
      "Setup": "Turnkey Setup",
      "Plumbing": "Complete Plumbing",
      "Tier": "Commercial Ready"
    },
    "priceFormatted": "KSh 210,000",
    "oldPrice": "KSh 230,000"
  },
  {
    "id": "prod_water_cabinet",
    "name": "Water Vending Machine (Full Cabinet)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 120000,
    "badge": "Business Starter",
    "featured": true,
    "description": "All-in-one free-standing water ATM kiosk cabinet. Includes integrated storage tank, UV sterilization, digital flow meter, coin validator, and secure tamper-proof cash box. Ready for immediate plug-and-play retail operation.",
    "imageUrl": "assets/products/water-atm-cabinet.jpg",
    "fallbackUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774619081259_IMG-20260225-WA0013.jpg",
    "specs": {
      "Enclosure": "Powder-coated / Stainless Steel",
      "Dispensing": "Multi-coin / GSM Smart Pay Ready",
      "Sterilization": "Built-in UV Lamp"
    },
    "priceFormatted": "KSh 120,000"
  },
  {
    "id": "prod_water_1tap_auto_cab",
    "name": "One Tap Automatic Water Vending Machine (Cabinet Design)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 75000,
    "badge": "Automated Kiosk",
    "featured": false,
    "description": "Upright cabinet design with automated digital control and keypad for refilling already purified water accurately.",
    "imageUrl": "assets/catalogue/7fbfe3e3-f5f8-4d5c-8de4-17b56f00a0ad-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/7fbfe3e3-f5f8-4d5c-8de4-17b56f00a0ad-removebg-preview%20(1).png",
    "specs": {
      "Dispensing": "1 Automatic Tap",
      "Design": "Cabinet Design",
      "Control": "Digital Keypad",
      "Chamber": "Enclosed Filling Chamber"
    },
    "priceFormatted": "KSh 75,000",
    "oldPrice": "KSh 90,000"
  },
  {
    "id": "prod_water_1tap_auto_table",
    "name": "One Tap Automatic Water Vending Machine (Table Design)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 75000,
    "badge": "Compact Countertop",
    "featured": false,
    "description": "Compact table design with swan-neck tap and digital keypad for automated dispensing of purified drinking water.",
    "imageUrl": "assets/catalogue/e219229c-c54e-4d1d-a058-f05efc551118-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/e219229c-c54e-4d1d-a058-f05efc551118-removebg-preview%20(1).png",
    "specs": {
      "Taps": "1 Automatic Tap",
      "Design": "Tabletop Setup",
      "Control": "Digital PLC Keypad",
      "Basin": "Stainless Basin"
    },
    "priceFormatted": "KSh 75,000",
    "oldPrice": "KSh 80,000"
  },
  {
    "id": "prod_water_2tap_manual",
    "name": "Two Taps Manual Water Vending Machine",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 95000,
    "badge": "Dual Tap Value",
    "featured": false,
    "description": "Dual-tap hygienic water refilling station station with food-grade sanitary faucets and stainless drip tray. Allows two customers to refill 10L/20L bottles concurrently.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621871696_WhatsApp%20Image%202026-01-10%20at%2010.06.17%20AM.jpeg",
    "fallbackUrl": "assets/products/water-atm-cabinet.jpg",
    "specs": {
      "Taps": "2 Manual Food-Grade Taps",
      "Housing": "Hygienic Stainless Steel Front"
    },
    "priceFormatted": "KSh 95,000"
  },
  {
    "id": "prod_water_wall_mount",
    "name": "Wall Mount Water Vending Machine",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 85000,
    "badge": "Wall Space Saver",
    "featured": false,
    "description": "Slimline wall-mounted water vending ATM that bolts securely onto shop exterior or interior walls. Connects directly to backroom pure water storage tanks without consuming floor space.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622295097_IMG20230706174734.jpg",
    "fallbackUrl": "assets/products/water-atm-cabinet.jpg",
    "specs": {
      "Mounting": "Wall Bracket Heavy Duty",
      "Dispensing": "Digital Micro-Controller"
    },
    "priceFormatted": "KSh 85,000"
  },
  {
    "id": "prod_water_1tap_manual_table",
    "name": "One Tap Manual Water Vending Machine (Table Design)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 65000,
    "badge": "Budget Friendly",
    "featured": false,
    "description": "Table design water vending machine for refilling already purified water. Compact and ideal for shops, kiosks, and retail refill stations.",
    "imageUrl": "assets/catalogue/da0fd7d7-3665-4a78-97f3-941838ef557b-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/da0fd7d7-3665-4a78-97f3-941838ef557b-removebg-preview%20(1).png",
    "specs": {
      "Dispensing": "1 Manual Tap",
      "Design": "Tabletop Compact",
      "Footprint": "Compact Footprint",
      "Basin": "Stainless Basin"
    },
    "priceFormatted": "KSh 65,000",
    "oldPrice": "KSh 70,000"
  },
  {
    "id": "prod_milk_50l",
    "name": "Milk ATM (Capacity From 50Ltrs)",
    "category": "Milk ATM",
    "categorySlug": "milk-atm",
    "solutionType": "Milk Processing",
    "price": 65000,
    "badge": "Shop Starter",
    "featured": false,
    "description": "Automated commercial milk vending machine with food-grade sanitary pump, precise digital calibration, and cooling preservation from 50L capacity.",
    "imageUrl": "assets/catalogue/939eaab0-9fb3-49e1-b8e6-ff36a7c82885-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/939eaab0-9fb3-49e1-b8e6-ff36a7c82885-removebg-preview%20(1).png",
    "specs": {
      "Capacity": "From 50 Litres",
      "Material": "Food-Grade Stainless",
      "Metering": "Accurate Digital Metering",
      "Security": "Password Protected"
    },
    "priceFormatted": "From KSh 65,000",
    "oldPrice": null
  },
  {
    "id": "prod_milk_100l",
    "name": "Smart Milk ATM 100 Liters",
    "category": "Milk ATM",
    "categorySlug": "milk-atm",
    "solutionType": "Milk Processing",
    "price": 75000,
    "badge": "Best Seller",
    "featured": true,
    "description": "Kenya's most popular commercial milk ATM. Houses a 100-liter sanitary stainless tank with automatic agitation paddle to prevent cream separation, digital accounting, and easy CIP (Clean-In-Place) sanitization.",
    "imageUrl": "assets/products/milk-atm-100l.jpg",
    "fallbackUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621240784_281bff9ec978323b44b49822be3390a6_4.jpeg",
    "specs": {
      "Capacity": "100 Liters",
      "Chilling": "Digital Thermostat (<4°C)",
      "Agitator": "Automatic Timer-driven Agitator",
      "Dispensing": "Custom Coin / Value"
    },
    "priceFormatted": "KSh 75,000"
  },
  {
    "id": "prod_milk_150l",
    "name": "Smart Milk ATM 150 Liters",
    "category": "Milk ATM",
    "categorySlug": "milk-atm",
    "solutionType": "Milk Processing",
    "price": 90000,
    "badge": "High Capacity",
    "featured": false,
    "description": "150-liter capacity smart refrigerated milk dispenser built for high-volume dairy bars, mini-marts, and neighborhood cooperatives. Durable stainless casing and digital bookkeeping.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621435114_FB_IMG_1737663145957.jpg",
    "fallbackUrl": "assets/products/milk-atm-100l.jpg",
    "specs": {
      "Capacity": "150 Liters",
      "Cooling": "Heavy-Duty Chiller Compressor",
      "Cleaning": "Automatic Cleaning Port"
    },
    "priceFormatted": "KSh 90,000"
  },
  {
    "id": "prod_milk_200l",
    "name": "Smart Milk ATM 200 Liters",
    "category": "Milk ATM",
    "categorySlug": "milk-atm",
    "solutionType": "Milk Processing",
    "price": 110000,
    "badge": "Supermarket Tier",
    "featured": false,
    "description": "Large 200-liter commercial milk dispenser suited for supermarkets and high-traffic dairy cooperatives. Fast automated flow rate, airtight hygienic seal, and tamper-resistant audit memory.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621584586_IMG_20250912_181655.jpg",
    "fallbackUrl": "assets/products/milk-atm-100l.jpg",
    "specs": {
      "Capacity": "200 Liters",
      "Compressor": "Industrial Embraco / Danfoss",
      "Insulation": "Polyurethane High-Density Foam"
    },
    "priceFormatted": "KSh 110,000"
  },
  {
    "id": "prod_pasteurizer_100l",
    "name": "Milk Pasteurizer (From 100 Liters Capacity)",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 150000,
    "badge": "Dairy Standard",
    "featured": false,
    "description": "Batch milk pasteurizer with stainless steel heating elements, digital temperature controller, and electric motor agitator from 100L.",
    "imageUrl": "assets/catalogue/d6cb3b3d-1751-4fdf-aaa6-e8903911277a.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/d6cb3b3d-1751-4fdf-aaa6-e8903911277a.jpg",
    "specs": {
      "Capacity": "From 100 Litres",
      "Heating": "Electric Heating",
      "Controller": "Digital Temp Controller",
      "Valve": "Sanitary Drain Valve"
    },
    "priceFormatted": "From KSh 150,000",
    "oldPrice": null
  },
  {
    "id": "prod_pasteurizer_150l",
    "name": "Batch Milk Pasteurizer 150 Liters",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 210000,
    "badge": "Dairy Standard",
    "featured": false,
    "description": "150L stainless steel double-walled pasteurizing tank. Fast heating cycle up to 65°C - 75°C followed by accelerated cold-water cooling to kill pathogenic bacteria without compromising milk taste and nutritional value.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625079957_IMG-20260219-WA0020.jpg",
    "fallbackUrl": "assets/products/milk-pasteurizer-100l.jpg",
    "specs": {
      "Capacity": "150 Liters",
      "Material": "AISI 304 Food-Grade Stainless",
      "Temperature": "Automatic Digital Thermostat"
    },
    "priceFormatted": "KSh 210,000"
  },
  {
    "id": "prod_pasteurizer_200l",
    "name": "Batch Milk Pasteurizer 200 Liters",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 250000,
    "badge": "Cooperative Tier",
    "featured": false,
    "description": "200-liter commercial pasteurizer unit with heavy-duty gear reduction agitator motor, sanitary butter-fly valve outlet, and double insulation jacket.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625435347_IMG-20260125-WA0005.jpg",
    "fallbackUrl": "assets/products/milk-pasteurizer-100l.jpg",
    "specs": {
      "Capacity": "200 Liters",
      "Heating": "12 kW 3-Phase / Single Phase",
      "Cooling Jacket": "High-Efficiency Chilled Water In/Out"
    },
    "priceFormatted": "KSh 250,000"
  },
  {
    "id": "prod_pasteurizer_400l",
    "name": "Commercial Milk Pasteurizer 400 Liters",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 400000,
    "badge": "Commercial Plant",
    "featured": false,
    "description": "High-volume 400-liter commercial dairy pasteurizing vessel. Engineered for cooperatives, commercial yogurt/cheese production, and dairy bottling plants.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625772081_IMG-20251029-WA0052.jpg",
    "fallbackUrl": "assets/products/milk-pasteurizer-100l.jpg",
    "specs": {
      "Capacity": "400 Liters",
      "Automation": "Semi-Automated Heating/Holding/Cooling Cycle"
    },
    "priceFormatted": "KSh 400,000"
  },
  {
    "id": "prod_pasteurizer_500l",
    "name": "Commercial Milk Pasteurizer 500 Liters",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 480000,
    "badge": "Factory Tier",
    "featured": false,
    "description": "500-liter industrial milk pasteurization tank with triple jacket wall, mineral wool thermal insulation, and pneumatic CIP washing ball.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625906224_WhatsApp%20Image%202025-12-02%20at%2012.58.38%20PM%20(1).jpeg",
    "fallbackUrl": "assets/products/milk-pasteurizer-100l.jpg",
    "specs": {
      "Capacity": "500 Liters",
      "Heating Power": "18 kW - 24 kW",
      "Insulation": "50mm Ceramic / Glass Wool"
    },
    "priceFormatted": "KSh 480,000"
  },
  {
    "id": "prod_pasteurizer_1000l",
    "name": "Industrial Milk Pasteurizer 1,000 Liters",
    "category": "Milk Pasteurizer",
    "categorySlug": "milk-pasteurizer",
    "solutionType": "Milk Processing",
    "price": 840000,
    "badge": "Dairy Plant Flagship",
    "featured": false,
    "description": "Large 1,000-liter industrial batch pasteurizer system with programmable cycle logic, variable speed frequency drive agitator, and steam or electric heat options.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774626588217_WhatsApp%20Image%202025-12-02%20at%2012.58.40%20PM.jpeg",
    "fallbackUrl": "assets/products/milk-pasteurizer-100l.jpg",
    "specs": {
      "Capacity": "1,000 Liters",
      "Power": "3-Phase Industrial Grid",
      "Sanitation": "CIP Spray Ball Integrated"
    },
    "priceFormatted": "KSh 840,000"
  },
  {
    "id": "prod_packaging_table",
    "name": "Stainless Steel Sanitary Packaging Table",
    "category": "Packaging Table",
    "categorySlug": "accessories",
    "solutionType": "Accessories",
    "price": 16000,
    "badge": "Food Grade",
    "featured": false,
    "description": "Commercial heavy-duty food-grade AISI 304 stainless steel packaging and bottle preparation table. Built for hygienic washing, bottle capping, and labeling in water refilling and dairy shops.",
    "imageUrl": "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622427576_FB_IMG_1753642639408.jpg",
    "fallbackUrl": "assets/hero-machine.jpg",
    "specs": {
      "Material": "Heavy Gauge 304 Stainless Steel",
      "Surface": "Sanitary Mirror Finish",
      "Dimensions": "Customizable Length"
    },
    "priceFormatted": "KSh 16,000"
  },
  {
    "id": "prod_water_2tap_auto",
    "name": "Two Taps (Automatic) Water Vending Machine",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 110000,
    "priceFormatted": "KSh 110,000",
    "oldPrice": "KSh 125,000",
    "badge": "Dual Tap Auto",
    "featured": false,
    "description": "Dual-tap automatic water vending machine with twin digital micro-controllers for refilling already purified water at higher customer traffic.",
    "imageUrl": "assets/catalogue/771ebeb8-5452-4307-8928-385d8d8321e6-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/771ebeb8-5452-4307-8928-385d8d8321e6-removebg-preview%20(1).png",
    "specs": {
      "Taps": "2 Automatic Taps",
      "Control": "Twin Digital Controllers",
      "Housing": "Stainless Steel Enclosure",
      "Flow": "Fast Dispensing"
    }
  },
  {
    "id": "prod_water_refill_300l_2tap",
    "name": "Water Refilling with a 300Ltrs Holding Tank (Automatic 2 Taps)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 125000,
    "priceFormatted": "KSh 125,000",
    "oldPrice": "KSh 130,000",
    "badge": "300L Tank Included",
    "featured": false,
    "description": "Water refilling station equipped with a 300-litre stainless steel overhead holding tank and 2 automatic taps for already purified water.",
    "imageUrl": "assets/catalogue/986a5a9a-4f11-4108-a111-391d6ac48711-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/986a5a9a-4f11-4108-a111-391d6ac48711-removebg-preview%20(1).png",
    "specs": {
      "Storage": "300L Holding Tank",
      "Taps": "2 Automatic Taps",
      "Flow": "Gravity / Pump Flow",
      "Material": "Food-Grade Stainless"
    }
  },
  {
    "id": "prod_water_2tap_auto_rinser",
    "name": "Two Taps (Automatic) Water Vending Machine with Rinser",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 105000,
    "priceFormatted": "KSh 105,000",
    "oldPrice": "KSh 115,000",
    "badge": "With Rinser Sink",
    "featured": false,
    "description": "Two taps automatic water vending setup featuring an integrated side bottle rinser sink for refilling already purified water hygienically.",
    "imageUrl": "assets/catalogue/f441795e-d390-4504-b780-b2d114c2f052-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/f441795e-d390-4504-b780-b2d114c2f052-removebg-preview%20(1).png",
    "specs": {
      "Taps": "2 Automatic Taps",
      "Rinser": "Bottle Rinser Sink",
      "Metering": "Digital Price/Volume Metering",
      "Hygiene": "Hygiene Ready"
    }
  },
  {
    "id": "prod_water_500l_tank_manual",
    "name": "Water Vending Machine with 500 Liters Holding Tank (Manual)",
    "category": "Water Vending Machine",
    "categorySlug": "water-vending",
    "solutionType": "Vending & Dispensing",
    "price": 130000,
    "priceFormatted": "KSh 130,000",
    "oldPrice": "KSh 140,000",
    "badge": "500L Tank Included",
    "featured": false,
    "description": "Heavy-duty manual water vending station fitted with a 500-litre stainless storage tank and bottle washing station for high-capacity refilling.",
    "imageUrl": "assets/catalogue/bd4f1436-407e-4b8c-bf92-258c51eeee7d-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/bd4f1436-407e-4b8c-bf92-258c51eeee7d-removebg-preview%20(1).png",
    "specs": {
      "Storage": "500L Storage Tank",
      "Taps": "Manual Dispensing Taps",
      "Rinser": "Bottle Rinser Attached",
      "Grade": "Commercial Grade"
    }
  },
  {
    "id": "prod_uf_1000lph_standalone",
    "name": "Ultrafiltration Machine 1000 Liters Per Hour (Stand Alone)",
    "category": "Ultra Filtration",
    "categorySlug": "ultra-filtration",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Tap Water / Municipal",
      "Ultrafiltration"
    ],
    "price": 200000,
    "priceFormatted": "KSh 200,000",
    "oldPrice": "KSh 210,000",
    "badge": "1000 LPH Plant",
    "featured": false,
    "description": "High-capacity 1,000 LPH standalone ultrafiltration plant engineered for purifying municipal and tap water to crystal clarity.",
    "imageUrl": "assets/catalogue/a5f39086-a438-4d79-bf8b-6600a63bd46c.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/a5f39086-a438-4d79-bf8b-6600a63bd46c.jpg",
    "specs": {
      "Capacity": "1,000 LPH Flow Rate",
      "Mounting": "Standalone Skid",
      "Feed Water": "Municipal / Tap Water",
      "Stages": "Multi-stage Filtration"
    }
  },
  {
    "id": "prod_uf_500lph_standalone",
    "name": "Ultrafiltration Machine 500 Liters Per Hour (Stand Alone)",
    "category": "Ultra Filtration",
    "categorySlug": "ultra-filtration",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Tap Water / Municipal",
      "Ultrafiltration"
    ],
    "price": 170000,
    "priceFormatted": "KSh 170,000",
    "oldPrice": "KSh 185,000",
    "badge": "500 LPH Plant",
    "featured": false,
    "description": "Efficient 500 LPH standalone ultrafiltration system. Retains beneficial natural minerals while removing all bacteria, turbidity, and suspended solids.",
    "imageUrl": "assets/catalogue/694997a3-8c71-4df0-ae2e-a7c9d784d110.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/694997a3-8c71-4df0-ae2e-a7c9d784d110.jpg",
    "specs": {
      "Capacity": "500 LPH Capacity",
      "Mounting": "Standalone Skid",
      "Instrumentation": "Pressure Gauges",
      "Metering": "Flow Meters"
    }
  },
  {
    "id": "prod_uf_without_tank",
    "name": "Ultrafiltration Machine without Holding Tank",
    "category": "Ultra Filtration",
    "categorySlug": "ultra-filtration",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Tap Water / Municipal",
      "Ultrafiltration"
    ],
    "price": 170000,
    "priceFormatted": "KSh 170,000",
    "oldPrice": "KSh 190,000",
    "badge": "Direct Flow UF",
    "featured": false,
    "description": "Ultrafiltration machine without overhead tank, designed for purifying municipal water / Maji ya kanjo. Includes bottle rinser sink.",
    "imageUrl": "assets/catalogue/3818f4fa-fe31-4cae-8dd2-95056f508dd0-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/3818f4fa-fe31-4cae-8dd2-95056f508dd0-removebg-preview%20(1).png",
    "specs": {
      "Water Source": "Purifies Municipal Water",
      "Flow Mode": "Direct Flow",
      "Rinser": "Bottle Rinser Sink",
      "Design": "Compact Design"
    }
  },
  {
    "id": "prod_uf_with_tank",
    "name": "Ultrafiltration Machine (with Holding Tank)",
    "category": "Ultra Filtration",
    "categorySlug": "ultra-filtration",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Tap Water / Municipal",
      "Ultrafiltration"
    ],
    "price": 198000,
    "priceFormatted": "KSh 198,000",
    "oldPrice": "KSh 210,000",
    "badge": "With Storage Tank",
    "featured": false,
    "description": "Complete ultrafiltration system for municipal water and fresh water, equipped with overhead stainless storage tank and bottle rinser station.",
    "imageUrl": "assets/catalogue/44850816-4afc-4817-a8e2-1414424bed03-removebg-preview (1).png",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/44850816-4afc-4817-a8e2-1414424bed03-removebg-preview%20(1).png",
    "specs": {
      "Water Source": "Fresh / Municipal Water",
      "Storage": "Integrated Tank",
      "Rinser": "Bottle Rinser Sink",
      "Format": "Turnkey Station"
    }
  },
  {
    "id": "prod_ro_3000lph",
    "name": "Reverse Osmosis Machine (3000lph)",
    "category": "Reverse Osmosis",
    "categorySlug": "reverse-osmosis",
    "solutionType": "Commercial Purification",
    "purificationTags": [
      "Borehole / High TDS",
      "Water Softener / Fluoride"
    ],
    "price": 1500000,
    "priceFormatted": "KSh 1,500,000",
    "oldPrice": "KSh 1,700,000",
    "badge": "Factory Tier Plant",
    "featured": false,
    "description": "Heavy industrial 3,000 litres per hour high-volume reverse osmosis water treatment system for packaging plants, factories, and institutions.",
    "imageUrl": "assets/catalogue/45d3df9d-9feb-47fb-b07c-a315d0110648.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/45d3df9d-9feb-47fb-b07c-a315d0110648.jpg",
    "specs": {
      "Capacity": "3,000 LPH Industrial",
      "Membranes": "Multi-Membrane Array",
      "Pump": "Heavy-Duty Vertical Pump",
      "Operation": "Continuous Duty"
    }
  },
  {
    "id": "prod_milk_chiller_100l",
    "name": "Milk Chiller (From 100 Liters Capacity)",
    "category": "Milk Chillers",
    "categorySlug": "milk-chillers",
    "solutionType": "Milk Processing",
    "price": 250000,
    "priceFormatted": "From KSh 250,000",
    "oldPrice": null,
    "badge": "Commercial Chiller",
    "featured": false,
    "description": "Rapid cooling commercial milk chiller starting from 100L capacity with condensing cooling unit and internal food-grade agitator.",
    "imageUrl": "assets/catalogue/ae457c6c-d21e-455f-8277-af890d1ee3fe.jpg",
    "fallbackUrl": "https://simonwairimu-hash.github.io/JOHNTECH-VENDORS-PRODUCTS-CATALOGUE/images/ae457c6c-d21e-455f-8277-af890d1ee3fe.jpg",
    "specs": {
      "Capacity": "From 100 Litres",
      "Cooling": "Rapid Cooling",
      "Agitator": "Stainless Agitator",
      "Condenser": "Condenser Unit Attached"
    }
  }
];

// Add priceFormatted
const DEFAULT_PRODUCTS_FORMATTED = DEFAULT_PRODUCTS.map(p => ({
  ...p,
  priceFormatted: "KSh " + p.price.toLocaleString()
}));

// DEFAULT BLOGS
const DEFAULT_BLOGS = [
  {
    id: "blog_water_business_kenya",
    title: "How to Start a Highly Profitable Water Vending Business in Kenya: Step-by-Step Guide",
    slug: "how-to-start-water-vending-business-kenya",
    category: "Water Purification",
    date: "October 2025",
    author: "Eng. John Maina (Lead Technical Specialist)",
    imageUrl: "assets/industries/commercial.jpg",
    excerpt: "Discover the startup cost, machine selection (RO vs Ultra-filtration), licensing requirements from KEBS and public health, and how to reach daily break-even within 3 months.",
    content: `The demand for clean, pure drinking water in Kenya is at an all-time high. Rapid urban expansion in Nairobi, Ruiru, Kiambu, Nakuru, Eldoret, and Mombasa has made water refill stations one of the most lucrative and resilient retail ventures.

### 1. Water Source Analysis & Testing
Before choosing a water purification machine, you must test your raw water source. Borehole water often contains high Total Dissolved Solids (TDS), salinity, and fluoride, which strictly requires a **Commercial Reverse Osmosis (RO) Machine**. Tap or municipal council water has lower TDS and can often be treated using a **Commercial Ultra-Filtration (UF) System**.

### 2. Equipment Selection
- **Reverse Osmosis Machine (500 LPH)**: Produces up to 12,000 liters daily. Ideal for serving estates, schools, and offices.
- **Automated Water Vending ATM**: Allows automated 24/7 coin or token dispensing with zero pilferage.
- **Stainless Steel Packaging Table**: For sanitizing 20-liter refill bottles and labeling.

### 3. Regulatory Approvals & KEBS Licensing
You will need a County Business Permit, Food Hygiene & Medical examination certificates for operators, and sample testing certification by KEBS (Kenya Bureau of Standards). Johntech Vendors LTD assists clients throughout the water testing and machine commissioning phase.

### 4. Profit Projections
Selling 1,500 liters of purified water daily at KSh 5 per liter brings in KSh 7,500 daily (KSh 225,000 gross monthly). With operating costs for electricity and filters under KSh 45,000, net monthly profitability routinely exceeds KSh 180,000.`
  },
  {
    id: "blog_oil_atm_profits",
    title: "Cooking Oil ATM Business in Kenya: Why Supermarkets and Estates Are Switching to Automated Dispensing",
    slug: "cooking-oil-atm-business-kenya-profitability",
    category: "Oil ATMs",
    date: "September 2025",
    author: "Commercial Operations Team",
    imageUrl: "assets/products/oil-atm-20l.jpg",
    excerpt: "Why the kadogo economy makes Salad Cooking Oil ATMs an unstoppable cash generator for retail shops, eliminating messy bottle spills and maximizing profits.",
    content: `The 'kadogo economy' has transformed how essential commodities are purchased in Kenya. Most urban households purchase cooking oil in small, flexible daily amounts ranging from KSh 10 to KSh 100 rather than expensive 2-liter pre-packaged bottles.

### Advantages of a Smart Cooking Oil ATM
1. **Zero Oil Spillage & Dripping**: Manual ladles and jugs spill oil and cause unsanitary mess. Johntech ATMs feature anti-drip solenoid valves that stop immediately when the dispensed volume is achieved.
2. **Internal Heating Regulation**: Vegetable cooking oil solidifies when ambient temperatures drop below 20°C in July and August. Our machines have thermostatically controlled heating jackets to keep the oil fluid.
3. **Password-Protected Sales Audit**: Digital memory tracks every cent dispensed. Staff cannot tamper with volume or pocket cash unnoticed.

### Expected Return on Investment (ROI)
A 20-liter Salad ATM costs approximately KSh 30,000. Purchasing a 20-liter jerrycan of cooking oil wholesale at KSh 3,800 and dispensing it in retail at KSh 260/liter yields KSh 5,200 per jerrycan — a KSh 1,400 net gain per 20 liters. High-traffic shops vending two jerrycans daily recoup their initial machine investment within 3 to 4 weeks!`
  },
  {
    id: "blog_ro_vs_uf_comparison",
    title: "Reverse Osmosis (RO) vs Ultra-Filtration (UF): Which Machine Should You Buy for Your Water Station?",
    slug: "reverse-osmosis-vs-ultra-filtration-comparison",
    category: "Technical Guide",
    date: "August 2025",
    author: "Water Treatment Engineering Dept",
    imageUrl: "assets/products/ro-500lph.jpg",
    excerpt: "Understand the key differences in filtration pore size, mineral retention, reject wastewater, and cost between Commercial RO and Ultrafiltration systems.",
    content: `A frequent question from new water kiosk entrepreneurs is whether to invest in a Reverse Osmosis (RO) machine or an Ultra-Filtration (UF) unit. Both provide clean drinking water, but operate on very different principles.

### Commercial Reverse Osmosis (RO)
- **Pore Size**: 0.0001 microns.
- **Filtration**: Removes 99.8% of all dissolved minerals, salt, heavy metals, fluoride, and hardness.
- **Best For**: Borehole water, brackish water, high TDS water (>300 ppm), or mineral bottling plants.
- **Wastewater**: Produces a reject concentrate stream (approx 25% - 40%).

### Ultra-Filtration (UF)
- **Pore Size**: 0.01 microns.
- **Filtration**: Removes bacteria, cysts, pathogens, sediment, and turbidity while **preserving natural minerals** (calcium, magnesium).
- **Best For**: Municipal tap water, low-TDS river water, or pre-treated supply.
- **Wastewater**: Zero wastewater in continuous flow mode.

**Verdict**: If your source is borehole or high mineral water, choose Reverse Osmosis. If your source is tap water with low TDS that only needs sterilization and particle filtration, Ultra-Filtration is more economical.`
  }
];

// DEFAULT SETTINGS
const DEFAULT_SETTINGS = {
  companyName: "Johntech Vendors LTD",
  tagline: "SMART SOLUTIONS • SUSTAINABLE TOMORROW",
  phone: "0790 825018",
  phoneDisplay: "+254 790 825 018",
  whatsapp: "254790825018",
  email: "johntechsolutionsvendors@gmail.com",
  emailAlt: "sales@johntechvendors.co.ke",
  address: "Ruiru, Kihunguro behind Shell Petro Station, Along Thika Superhighway, Nairobi - Kenya",
  workingHours: "Mon - Sat: 8:00 AM – 6:00 PM (Emergency Support on Call)",
  heroTitle: "Smart Automated Solutions That Power Profitable Businesses",
  heroSubtitle: "We design and deliver affordable essential commodity vending systems and commercial water purification solutions, helping businesses, institutions and communities access the essentials — sustainably and efficiently.",
  heroTag: "Automated Vending & Water Purification Solutions",
  heroImage: "assets/hero-machine.jpg",
  statInstallations: 1248,
  statSatisfaction: 98,
  statPartners: 12,
  facebook: "https://www.facebook.com/profile.php?id=61575245954134",
  instagram: "https://www.instagram.com/accounts/edit/",
  tiktok: "https://www.tiktok.com/@johntech_vendors?_r=1&_t=ZS-9ANpF2CGKhQ"
};

// DATA STORE API
const DataStore = {
  getProducts: function() {
    try {
      const stored = localStorage.getItem('johntech_products');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length >= DEFAULT_PRODUCTS_FORMATTED.length) return parsed;
      }
    } catch(e) { console.error('Error loading products from storage', e); }
    return DEFAULT_PRODUCTS_FORMATTED;
  },

  saveProducts: function(products) {
    try {
      localStorage.setItem('johntech_products', JSON.stringify(products));
      // Notify server if online
      fetch('/api/save-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(products)
      }).catch(() => {});
    } catch(e) { console.error('Error saving products', e); }
  },

  getBlogs: function() {
    try {
      const stored = localStorage.getItem('johntech_blogs');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch(e) { console.error('Error loading blogs from storage', e); }
    return DEFAULT_BLOGS;
  },

  saveBlogs: function(blogs) {
    try {
      localStorage.setItem('johntech_blogs', JSON.stringify(blogs));
      fetch('/api/save-blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogs)
      }).catch(() => {});
    } catch(e) { console.error('Error saving blogs', e); }
  },

  getSettings: function() {
    try {
      const stored = localStorage.getItem('johntech_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') return { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch(e) { console.error('Error loading settings from storage', e); }
    return DEFAULT_SETTINGS;
  },

  saveSettings: function(settings) {
    try {
      localStorage.setItem('johntech_settings', JSON.stringify(settings));
      fetch('/api/save-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      }).catch(() => {});
    } catch(e) { console.error('Error saving settings', e); }
  },

  resetAll: function() {
    localStorage.removeItem('johntech_products');
    localStorage.removeItem('johntech_blogs');
    localStorage.removeItem('johntech_settings');
  },

  syncWithServer: async function() {
    try {
      const [prodRes, blogRes, setRes] = await Promise.allSettled([
        fetch('/data/products.json?v=' + Date.now()),
        fetch('/data/blogs.json?v=' + Date.now()),
        fetch('/data/settings.json?v=' + Date.now())
      ]);

      let updated = false;

      if (prodRes.status === 'fulfilled' && prodRes.value.ok) {
        const prods = await prodRes.value.json();
        if (Array.isArray(prods) && prods.length > 0) {
          localStorage.setItem('johntech_products', JSON.stringify(prods));
          window.PRODUCTS_DATA = prods;
          updated = true;
        }
      }

      if (blogRes.status === 'fulfilled' && blogRes.value.ok) {
        const blogs = await blogRes.value.json();
        if (Array.isArray(blogs) && blogs.length > 0) {
          localStorage.setItem('johntech_blogs', JSON.stringify(blogs));
          window.BLOGS_DATA = blogs;
          updated = true;
        }
      }

      if (setRes.status === 'fulfilled' && setRes.value.ok) {
        const settings = await setRes.value.json();
        if (settings && typeof settings === 'object') {
          localStorage.setItem('johntech_settings', JSON.stringify(settings));
          window.SITE_SETTINGS = { ...DEFAULT_SETTINGS, ...settings };
          updated = true;
        }
      }

      if (updated && typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('johntech:data-updated'));
      }
    } catch(e) {
      console.warn('Server sync skipped, using local cache', e);
    }
  }
};

// Auto-sync in browser
if (typeof window !== 'undefined') {
  DataStore.syncWithServer();
}

// Export for browser and node
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = DataStore.getProducts();
  window.BLOGS_DATA = DataStore.getBlogs();
  window.SITE_SETTINGS = DataStore.getSettings();
  window.DataStore = DataStore;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DEFAULT_PRODUCTS: DEFAULT_PRODUCTS_FORMATTED,
    DEFAULT_BLOGS,
    DEFAULT_SETTINGS,
    DataStore
  };
}
