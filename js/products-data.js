/**
 * JOHNTECH VENDORS LTD - Master Data Store
 * Contains Products, Blog Articles, and Website Settings.
 * Supports localStorage persistence with seamless API synchronization.
 */

const DEFAULT_PRODUCTS = [
  // 1. OIL ATMS
  {
    id: "prod_oil_20l",
    name: "Cooking Oil ATM (Salad ATM) 20 Liters",
    category: "Oil ATM",
    categorySlug: "oil-atm",
    solutionType: "Vending & Dispensing",
    price: 30000,
    badge: "Top Seller",
    featured: true,
    description: "High-precision automated vegetable cooking oil dispenser tailored for retail shops and mini-supermarkets. Features digital volume calibration from as low as KSh 10, temperature-regulated heating to prevent oil solidification during cold weather, password-protected sales tracking, and food-grade stainless steel piping.",
    imageUrl: "assets/products/oil-atm-20l.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621674495_e488901859c355de3eb9694f2d4b6f8c_0.jpeg",
    specs: { "Capacity": "20 Liters", "Dispensing": "From KSh 10", "Material": "AISI 304 Stainless Steel", "Control": "Digital PLC + Keypad", "Heater": "Automated Thermostat" }
  },
  {
    id: "prod_oil_50l",
    name: "Cooking Oil ATM (Salad ATM) 40/50 Liters",
    category: "Oil ATM",
    categorySlug: "oil-atm",
    solutionType: "Vending & Dispensing",
    price: 38000,
    badge: "Commercial Capacity",
    featured: false,
    description: "Heavy-duty commercial cooking oil ATM with 40-50L capacity. Designed for busy grocery retail outlets and supermarkets with heavy customer turnover. Equipped with anti-drip pneumatic dispensing nozzle, tamper-proof sales audit, and temperature-controlled heating jacket.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621767578_IMG_20250913_121345.jpg",
    fallbackUrl: "assets/products/oil-atm-20l.jpg",
    specs: { "Capacity": "40 / 50 Liters", "Dispensing": "Programmable KSh / Liters", "Material": "Stainless Steel", "Protection": "Password Protected Sales Audit" }
  },

  // 2. REVERSE OSMOSIS SYSTEMS
  {
    id: "prod_ro_250lph",
    name: "Commercial Reverse Osmosis Machine 250 LPH",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Tap Water / Municipal"],
    price: 310000,
    badge: "Compact RO",
    featured: false,
    description: "Compact commercial Reverse Osmosis system generating 250 liters of ultra-pure drinking water per hour. Eliminates up to 99.8% of dissolved minerals, salts, fluoride, and microbial contaminants. Ideal for restaurants, medium clinics, water kiosks, and corporate offices.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774618193966_IMG-20260313-WA0002.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "250 Liters/Hour", "Feed Water": "Tap or Low-TDS Borehole", "Membranes": "High Rejection RO Membranes", "Frame": "Stainless Steel Skid" }
  },
  {
    id: "prod_ro_500lph",
    name: "Commercial Reverse Osmosis Machine 500 LPH",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Tap Water / Municipal"],
    price: 410000,
    badge: "Most Popular",
    featured: true,
    description: "The gold standard for commercial water refilling stations in Kenya. Produces 500 liters/hour of crystal-clean drinking water. Comes equipped with dual pressure gauges, stainless steel multi-stage pump, sediment and activated carbon pre-filtration columns, and automated flush cycles.",
    imageUrl: "assets/products/ro-500lph.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774618107648_IMG-20260324-WA0017.jpg",
    specs: { "Flow Rate": "500 Liters/Hour (12,000 L/Day)", "Rejection Rate": ">99%", "Pump": "Stainless Steel Vertical Multistage", "Frame": "Powder-coated / SS Skid" }
  },
  {
    id: "prod_ro_500lph_stand",
    name: "Reverse Osmosis Machine 500 LPH (Stand Skid Model)",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Tap Water / Municipal"],
    price: 410000,
    badge: "Station Model",
    featured: false,
    description: "Robust standalone skid-mounted 500 LPH reverse osmosis purification unit. Ergonomically configured for easy technician maintenance, filter cartridge replacement, and integrated chemical dosing for hard borehole water.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774755241223_IMG-20260323-WA0021.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "500 LPH", "Mounting": "Free-Standing Ergonomic Skid", "Pre-treatment": "Sand + Carbon Vessel Skid" }
  },
  {
    id: "prod_ro_750lph",
    name: "Commercial Reverse Osmosis Machine 750 LPH (Stand)",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Water Softener / Fluoride"],
    price: 550000,
    badge: "High Output",
    featured: false,
    description: "Industrial water treatment plant delivering 750 LPH. Perfect for medium water bottling operations, food processing facilities, schools, and hospitals requiring consistent pure water day and night.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622200282_FB_IMG_1752767177470.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "750 Liters/Hour", "Recovery Rate": "50% - 75%", "Controls": "Digital TDS & Flow Display" }
  },
  {
    id: "prod_ro_1000lph",
    name: "Industrial Reverse Osmosis Machine 1,000 LPH (Stand)",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Water Softener / Fluoride"],
    price: 700000,
    badge: "Industrial Heavy Duty",
    featured: false,
    description: "Heavy-duty 1,000 LPH industrial Reverse Osmosis plant. Capable of treating complex borehole water with high salinity and conductivity. Full automated PLC panel with conductivity meter, pressure switches, and auto-backwash.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622117976_FB_IMG_1726170463631.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "1,000 Liters/Hour (24,000 L/Day)", "Membrane Housing": "FRP / Stainless 304", "Automation": "Fully Automated Micro-controller" }
  },
  {
    id: "prod_ro_1500lph",
    name: "Industrial Reverse Osmosis Machine 1,500 LPH (Stand)",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Water Softener / Fluoride"],
    price: 850000,
    badge: "Bottling Plant Tier",
    featured: false,
    description: "High-capacity 1,500 LPH reverse osmosis water manufacturing unit. Engineered for commercial water packaging and bottling plants, beverage production, and commercial agricultural irrigation.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774627437487_IMG-20260219-WA0027.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "1,500 LPH", "Pumps": "Dual High-Pressure Pumps", "Standards": "KEBS & WHO Drinking Standards" }
  },
  {
    id: "prod_ro_2000lph",
    name: "Industrial Reverse Osmosis Plant 2,000 LPH",
    category: "Reverse Osmosis",
    categorySlug: "reverse-osmosis",
    solutionType: "Commercial Purification",
    purificationTags: ["Borehole / High TDS", "Water Softener / Fluoride"],
    price: 1200000,
    badge: "Maximum Output",
    featured: false,
    description: "Enterprise-grade 2,000 LPH water desalination and purification plant. Built on an all-stainless steel frame with CIP chemical cleaning port, online TDS monitoring, and multi-stage pre-filtration.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774627620121_IMG-20260219-WA0030.jpg",
    fallbackUrl: "assets/products/ro-500lph.jpg",
    specs: { "Flow Rate": "2,000 Liters/Hour (48,000 L/Day)", "Application": "Factories, Bottling Lines, Communities" }
  },

  // 3. ULTRA FILTRATION
  {
    id: "prod_ultra_filtration",
    name: "Commercial Ultra Filtration Machine",
    category: "Ultra Filtration",
    categorySlug: "ultra-filtration",
    solutionType: "Commercial Purification",
    purificationTags: ["Tap Water / Municipal", "Ultrafiltration"],
    price: 210000,
    badge: "Pure Water Tech",
    featured: true,
    description: "Advanced hollow-fiber membrane ultrafiltration machine. Delivers crystal clear drinking water by retaining beneficial minerals while removing 99.99% of bacteria, cysts, turbidity, and suspended solids without generating wastewater.",
    imageUrl: "assets/products/ultra-filtration.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774617389520_IMG-20260326-WA0002.jpg",
    specs: { "Technology": "Hollow Fiber 0.01 Micron", "Recovery": "95%+ Zero Waste", "Mineral Retention": "Preserves Natural Electrolytes" }
  },

  // 4. WATER VENDING MACHINES & ATMS
  {
    id: "prod_water_cabinet",
    name: "Water Vending Machine (Full Cabinet)",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 120000,
    badge: "Business Starter",
    featured: true,
    description: "All-in-one free-standing water ATM kiosk cabinet. Includes integrated storage tank, UV sterilization, digital flow meter, coin validator, and secure tamper-proof cash box. Ready for immediate plug-and-play retail operation.",
    imageUrl: "assets/products/water-atm-cabinet.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774619081259_IMG-20260225-WA0013.jpg",
    specs: { "Enclosure": "Powder-coated / Stainless Steel", "Dispensing": "Multi-coin / GSM Smart Pay Ready", "Sterilization": "Built-in UV Lamp" }
  },
  {
    id: "prod_water_1tap_auto_cab",
    name: "One Tap Automatic Water Vending Machine (Cabinet)",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 105000,
    badge: "Automated Kiosk",
    featured: false,
    description: "Enclosed single-tap automated water ATM with digital control panel, accurate coin acceptance, and automated container rinsing faucet. Ideal for high-traffic street corners, estate shops, and water stations.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621963544_IMG_20250927_143244.jpg",
    fallbackUrl: "assets/products/water-atm-cabinet.jpg",
    specs: { "Taps": "1 Automatic Dispenser", "Flow Accuracy": "±1%", "Payment": "Coin & Digital Token" }
  },
  {
    id: "prod_water_1tap_auto_table",
    name: "One Tap Automatic Water Vending Machine (Tabletop)",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 105000,
    badge: "Compact Countertop",
    featured: false,
    description: "Compact tabletop automated water vending machine designed to sit directly on shop counters and dispensing bars. Takes up minimal retail footprint while providing full automated digital coin sales.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622117976_FB_IMG_1726170463631.jpg",
    fallbackUrl: "assets/products/water-atm-cabinet.jpg",
    specs: { "Design": "Space-Saving Countertop Tabletop", "Taps": "1 Automatic Tap", "Audit": "Daily Digital Sales Counter" }
  },
  {
    id: "prod_water_2tap_manual",
    name: "Two Taps Manual Water Vending Machine",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 95000,
    badge: "Dual Tap Value",
    featured: false,
    description: "Dual-tap hygienic water refilling station station with food-grade sanitary faucets and stainless drip tray. Allows two customers to refill 10L/20L bottles concurrently.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621871696_WhatsApp%20Image%202026-01-10%20at%2010.06.17%20AM.jpeg",
    fallbackUrl: "assets/products/water-atm-cabinet.jpg",
    specs: { "Taps": "2 Manual Food-Grade Taps", "Housing": "Hygienic Stainless Steel Front" }
  },
  {
    id: "prod_water_wall_mount",
    name: "Wall Mount Water Vending Machine",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 85000,
    badge: "Wall Space Saver",
    featured: false,
    description: "Slimline wall-mounted water vending ATM that bolts securely onto shop exterior or interior walls. Connects directly to backroom pure water storage tanks without consuming floor space.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622295097_IMG20230706174734.jpg",
    fallbackUrl: "assets/products/water-atm-cabinet.jpg",
    specs: { "Mounting": "Wall Bracket Heavy Duty", "Dispensing": "Digital Micro-Controller" }
  },
  {
    id: "prod_water_1tap_manual_table",
    name: "One Tap Manual Water Vending Machine (Tabletop)",
    category: "Water Vending Machine",
    categorySlug: "water-vending",
    solutionType: "Vending & Dispensing",
    price: 80000,
    badge: "Budget Friendly",
    featured: false,
    description: "Economical single-tap manual countertop water refilling unit. Low capital investment for retail shop owners starting out in water distribution.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622295097_IMG20230706174734.jpg",
    fallbackUrl: "assets/products/water-atm-cabinet.jpg",
    specs: { "Design": "Tabletop Compact", "Operation": "Manual Food-Grade Lever" }
  },

  // 5. MILK ATMS
  {
    id: "prod_milk_50l",
    name: "Smart Milk ATM 50 Liters",
    category: "Milk ATM",
    categorySlug: "milk-atm",
    solutionType: "Milk Processing",
    price: 65000,
    badge: "Shop Starter",
    featured: false,
    description: "Hygienic refrigerated milk ATM featuring an insulated AISI 304 food-grade stainless steel milk tank. Dispenses exact amounts from KSh 10 upwards, keeping milk chilled below 4°C to prevent spoilage.",
    imageUrl: "assets/products/milk-atm-100l.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621378838_FB_IMG_1738083302772.jpg",
    specs: { "Capacity": "50 Liters", "Cooling": "Integrated Refrigeration Unit", "Pump": "Food-grade Peristaltic / Impeller", "Tank": "AISI 304 Stainless" }
  },
  {
    id: "prod_milk_100l",
    name: "Smart Milk ATM 100 Liters",
    category: "Milk ATM",
    categorySlug: "milk-atm",
    solutionType: "Milk Processing",
    price: 75000,
    badge: "Best Seller",
    featured: true,
    description: "Kenya's most popular commercial milk ATM. Houses a 100-liter sanitary stainless tank with automatic agitation paddle to prevent cream separation, digital accounting, and easy CIP (Clean-In-Place) sanitization.",
    imageUrl: "assets/products/milk-atm-100l.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621240784_281bff9ec978323b44b49822be3390a6_4.jpeg",
    specs: { "Capacity": "100 Liters", "Chilling": "Digital Thermostat (<4°C)", "Agitator": "Automatic Timer-driven Agitator", "Dispensing": "Custom Coin / Value" }
  },
  {
    id: "prod_milk_150l",
    name: "Smart Milk ATM 150 Liters",
    category: "Milk ATM",
    categorySlug: "milk-atm",
    solutionType: "Milk Processing",
    price: 90000,
    badge: "High Capacity",
    featured: false,
    description: "150-liter capacity smart refrigerated milk dispenser built for high-volume dairy bars, mini-marts, and neighborhood cooperatives. Durable stainless casing and digital bookkeeping.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621435114_FB_IMG_1737663145957.jpg",
    fallbackUrl: "assets/products/milk-atm-100l.jpg",
    specs: { "Capacity": "150 Liters", "Cooling": "Heavy-Duty Chiller Compressor", "Cleaning": "Automatic Cleaning Port" }
  },
  {
    id: "prod_milk_200l",
    name: "Smart Milk ATM 200 Liters",
    category: "Milk ATM",
    categorySlug: "milk-atm",
    solutionType: "Milk Processing",
    price: 110000,
    badge: "Supermarket Tier",
    featured: false,
    description: "Large 200-liter commercial milk dispenser suited for supermarkets and high-traffic dairy cooperatives. Fast automated flow rate, airtight hygienic seal, and tamper-resistant audit memory.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774621584586_IMG_20250912_181655.jpg",
    fallbackUrl: "assets/products/milk-atm-100l.jpg",
    specs: { "Capacity": "200 Liters", "Compressor": "Industrial Embraco / Danfoss", "Insulation": "Polyurethane High-Density Foam" }
  },

  // 6. MILK PASTEURIZERS
  {
    id: "prod_pasteurizer_100l",
    name: "Batch Milk Pasteurizer 100 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 180000,
    badge: "Dairy Standard",
    featured: false,
    description: "Double-jacketed 100L batch milk pasteurizer. Features electric heating elements, geared sanitary motor agitator, digital temperature controller, and dual cold water circulation cooling jacket. Complies with Kenya Dairy Board regulations.",
    imageUrl: "assets/products/milk-pasteurizer-100l.jpg",
    fallbackUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774624849603_IMG-20260223-WA0003.jpg",
    specs: { "Capacity": "100 Liters", "Heating": "Electric Elements (6 kW / 9 kW)", "Agitator": "Motor-driven SS Blade", "Standards": "KEBS & KDB Food Grade" }
  },
  {
    id: "prod_pasteurizer_150l",
    name: "Batch Milk Pasteurizer 150 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 210000,
    badge: "Dairy Standard",
    featured: false,
    description: "150L stainless steel double-walled pasteurizing tank. Fast heating cycle up to 65°C - 75°C followed by accelerated cold-water cooling to kill pathogenic bacteria without compromising milk taste and nutritional value.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625079957_IMG-20260219-WA0020.jpg",
    fallbackUrl: "assets/products/milk-pasteurizer-100l.jpg",
    specs: { "Capacity": "150 Liters", "Material": "AISI 304 Food-Grade Stainless", "Temperature": "Automatic Digital Thermostat" }
  },
  {
    id: "prod_pasteurizer_200l",
    name: "Batch Milk Pasteurizer 200 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 250000,
    badge: "Cooperative Tier",
    featured: false,
    description: "200-liter commercial pasteurizer unit with heavy-duty gear reduction agitator motor, sanitary butter-fly valve outlet, and double insulation jacket.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625435347_IMG-20260125-WA0005.jpg",
    fallbackUrl: "assets/products/milk-pasteurizer-100l.jpg",
    specs: { "Capacity": "200 Liters", "Heating": "12 kW 3-Phase / Single Phase", "Cooling Jacket": "High-Efficiency Chilled Water In/Out" }
  },
  {
    id: "prod_pasteurizer_400l",
    name: "Commercial Milk Pasteurizer 400 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 400000,
    badge: "Commercial Plant",
    featured: false,
    description: "High-volume 400-liter commercial dairy pasteurizing vessel. Engineered for cooperatives, commercial yogurt/cheese production, and dairy bottling plants.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625772081_IMG-20251029-WA0052.jpg",
    fallbackUrl: "assets/products/milk-pasteurizer-100l.jpg",
    specs: { "Capacity": "400 Liters", "Automation": "Semi-Automated Heating/Holding/Cooling Cycle" }
  },
  {
    id: "prod_pasteurizer_500l",
    name: "Commercial Milk Pasteurizer 500 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 480000,
    badge: "Factory Tier",
    featured: false,
    description: "500-liter industrial milk pasteurization tank with triple jacket wall, mineral wool thermal insulation, and pneumatic CIP washing ball.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774625906224_WhatsApp%20Image%202025-12-02%20at%2012.58.38%20PM%20(1).jpeg",
    fallbackUrl: "assets/products/milk-pasteurizer-100l.jpg",
    specs: { "Capacity": "500 Liters", "Heating Power": "18 kW - 24 kW", "Insulation": "50mm Ceramic / Glass Wool" }
  },
  {
    id: "prod_pasteurizer_1000l",
    name: "Industrial Milk Pasteurizer 1,000 Liters",
    category: "Milk Pasteurizer",
    categorySlug: "milk-pasteurizer",
    solutionType: "Milk Processing",
    price: 840000,
    badge: "Dairy Plant Flagship",
    featured: false,
    description: "Large 1,000-liter industrial batch pasteurizer system with programmable cycle logic, variable speed frequency drive agitator, and steam or electric heat options.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774626588217_WhatsApp%20Image%202025-12-02%20at%2012.58.40%20PM.jpeg",
    fallbackUrl: "assets/products/milk-pasteurizer-100l.jpg",
    specs: { "Capacity": "1,000 Liters", "Power": "3-Phase Industrial Grid", "Sanitation": "CIP Spray Ball Integrated" }
  },

  // 7. ACCESSORIES & PACKAGING
  {
    id: "prod_packaging_table",
    name: "Stainless Steel Sanitary Packaging Table",
    category: "Packaging Table",
    categorySlug: "accessories",
    solutionType: "Accessories",
    price: 16000,
    badge: "Food Grade",
    featured: false,
    description: "Commercial heavy-duty food-grade AISI 304 stainless steel packaging and bottle preparation table. Built for hygienic washing, bottle capping, and labeling in water refilling and dairy shops.",
    imageUrl: "https://whatsapp1.johntechvendorsltd.co.ke/uploads/ad_1774622427576_FB_IMG_1753642639408.jpg",
    fallbackUrl: "assets/hero-machine.jpg",
    specs: { "Material": "Heavy Gauge 304 Stainless Steel", "Surface": "Sanitary Mirror Finish", "Dimensions": "Customizable Length" }
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
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
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
