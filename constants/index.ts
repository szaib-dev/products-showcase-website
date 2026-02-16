
// CATEGORY 
// lib/constants.ts

export interface Category {
  id: string;
  name: string;
  products: string[]; // Array of Product IDs
  imageUrl: string;
  description?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  cPrice: number; // Current Price
  dPrice: number; // Discounted/Original Price
  description: string;
  images: string[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  bgImage: string;
}

export interface Carousal {
  id: string;
  numberAt: number;
  image: string;
  description: string;
  bgImage: string;
}

// --- SAMPLE DATA ---

export const CATEGORIES: Category[] = [
  { id: 'cat1', name: 'Toys & Games', imageUrl: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=500', products: ['p1', 'p2', 'p3', 'p4', 'p21', 'p22', 'p23', 'p24', 'p25', 'p26', 'p27', 'p28', 'p29', 'p30', 'p31', 'p32', 'p33', 'p34', 'p91', 'p92', 'p93', 'p94', 'p95', 'p96'] },
  { id: 'cat2', name: 'Home & Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=500', products: ['p5', 'p6', 'p7', 'p8', 'p35', 'p36', 'p37', 'p38', 'p39', 'p40', 'p41', 'p42', 'p43', 'p44', 'p45', 'p46', 'p47', 'p72', 'p97', 'p98', 'p99', 'p100', 'p101', 'p102'] },
  { id: 'cat3', name: 'Beauty & Personal Care', imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500', products: ['p9', 'p10', 'p11', 'p12', 'p48', 'p49', 'p50', 'p51', 'p52', 'p53', 'p73', 'p74', 'p75', 'p76', 'p77', 'p78', 'p79', 'p80', 'p103', 'p104', 'p105', 'p106', 'p107', 'p108'] },
  { id: 'cat4', name: 'Automotive Accessories', imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500', products: ['p13', 'p14', 'p15', 'p16', 'p54', 'p55', 'p56', 'p57', 'p58', 'p59', 'p60', 'p61', 'p62', 'p81', 'p82', 'p83', 'p84', 'p85', 'p109', 'p110', 'p111', 'p112', 'p113', 'p114'] },
  { id: 'cat5', name: 'Health & Household', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500', products: ['p17', 'p18', 'p19', 'p20', 'p63', 'p64', 'p65', 'p66', 'p67', 'p68', 'p69', 'p70', 'p71', 'p86', 'p87', 'p88', 'p89', 'p90', 'p115', 'p116', 'p117', 'p118', 'p119', 'p120'] },
];

export const COMPANIES: Company[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `comp${i + 1}`,
  name: `Affirma Distributing ${i + 1}`,
  logo: 'https://cdn-icons-png.flaticon.com/512/3176/3176363.png',
  description: 'Leading B2B supplier for high-quality commercial goods.',
  bgImage: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format`,
}));

export const CAROUSAL_ITEMS: Carousal[] = [
  { id: 'car1', numberAt: 1, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&w=1200', description: 'Big Holiday Sale', bgImage: '#007FFF' },
  { id: 'car2', numberAt: 2, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&w=1200', description: 'Wholesale Excellence', bgImage: '#333' },
  { id: 'car3', numberAt: 3, image: 'https://images.unsplash.com/photo-1534452203294-49c8913c7c7c?auto=format&w=1200', description: 'New Arrivals', bgImage: '#FF5733' },
  { id: 'car4', numberAt: 4, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=1200', description: 'Tech Gadgets', bgImage: '#2ECC71' },
  { id: 'car5', numberAt: 5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&w=1200', description: 'Best Sellers', bgImage: '#9B59B6' },
];

export const PRODUCTS: Product[] = [
  // Toys & Games
  

  // Toys & Games (Affirma Distributors)
  { 
    id: 'p21', 
    categoryId: 'cat1', 
    name: 'Sonic The Hedgehog Metal Sonic Stuffed Plush', 
    cPrice: 12, 
    dPrice: 18, 
    description: 'Detailed Metal Sonic plush for fans of all ages. Soft and durable materials for a comfortable feel. Great for play, display, or as part of a collection. Perfect gift for Sonic the Hedgehog enthusiasts.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/SonicTheHedgehogMetalSonicStuffedPlush_1_800x.png?v=1725043006'] 
  },
  { 
    id: 'p22', 
    categoryId: 'cat1', 
    name: 'Sonic The Hedgehog Plush Doll, Silver 98960', 
    cPrice: 10, 
    dPrice: 15, 
    description: 'Plush doll featuring Silver the Hedgehog from Sonic the Hedgehog. Soft and huggable, perfect for cuddling or display. Detailed design captures Silver\'s iconic look. Ideal for fans, children, and collectors of all ages.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/SonicTheHedgehogPlushDoll_Silver98960_400x.png?v=1725274490'] 
  },
  { 
    id: 'p23', 
    categoryId: 'cat1', 
    name: 'LEGO Technic BMW M 1000 RR Motorcycle Model Kit 42130', 
    cPrice: 180, 
    dPrice: 230, 
    description: 'Detailed LEGO Technic BMW M 1000 RR model designed for adult builders and collectors. Features realistic suspension, steering, gearbox functions, and authentic superbike details. Includes display stand for showcasing the completed motorcycle.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/LEGOTechnicBMWM1000RRMotorcycleModelKit42130_AdvancedBuild_DisplayCollectibleforAdults_1_800x.png?v=1763480953'] 
  },
  { 
    id: 'p24', 
    categoryId: 'cat1', 
    name: 'LEGO Star Wars Millennium Falcon 75257', 
    cPrice: 130, 
    dPrice: 170, 
    description: 'Build the iconic Millennium Falcon from Star Wars: The Rise of Skywalker with this detailed 1,351-piece LEGO set. Includes 7 minifigures: Finn, Chewbacca, Lando Calrissian, Boolio, C-3PO, R2-D2 and D-O. Features rotating gun turrets, spring-loaded shooters, and opening cockpit.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/LEGOStarWarsMillenniumFalcon75257with7Minifigures-RiseofSkywalker_4_800x.png?v=1763479639'] 
  },
  { 
    id: 'p25', 
    categoryId: 'cat1', 
    name: 'BANDAI One Piece Card Game Booster Box Four Emperors', 
    cPrice: 85, 
    dPrice: 110, 
    description: 'Official BANDAI One Piece Card Game Four Emperors booster box. Features powerful characters including Luffy, Shanks, Blackbeard, and Kaido. Contains 24 sealed booster packs with collectible trading cards. Perfect for competitive players and passionate collectors.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/BANDAIOnePieceCardGameBoosterBoxFourEmperors_1_400x.png?v=1762789775'] 
  },
  { 
    id: 'p26', 
    categoryId: 'cat1', 
    name: 'BANDAI One Piece Card Game Master and Student Bonds (OP-12) Booster Box', 
    cPrice: 78, 
    dPrice: 100, 
    description: 'Official BANDAI One Piece Card Game Master and Student Bonds (OP-12) booster box. Contains 24 sealed Japanese booster packs. Introduces new characters and themes highlighting mentor-student relationships. Features stunning artwork and powerful new gameplay mechanics.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/BANDAIOnePieceCardGameMasterandStudentBonds_OP-12_BoosterBoxJapanese_24Packs_2_353x.png?v=1762788968'] 
  },
  { 
    id: 'p27', 
    categoryId: 'cat1', 
    name: 'BANDAI One Piece Card Game The Best Vol.2 (PRB-02) Booster Box', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'Official BANDAI One Piece Card Game The Best Vol.2 (PRB-02) booster box. Contains 10 sealed Japanese booster packs with premium collectible cards. Features iconic characters and powerful reprints from previous sets. Great for enhancing decks and completing collections.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/BANDAIOnePieceCardGameTheBestVol.2_PRB-02_BoosterBoxJapanese_10Packs_3_353x.png?v=1762788384'] 
  },
  { 
    id: 'p28', 
    categoryId: 'cat1', 
    name: 'BANDAI One Piece Card Game OP-10 Royal Blood Box (24 Packs)', 
    cPrice: 75, 
    dPrice: 95, 
    description: 'Official BANDAI One Piece Card Game OP-10 Royal Blood booster box. Contains 24 sealed booster packs with collectible trading cards. Features new characters, artwork, and strategies from the One Piece universe. Ideal for expanding your deck and enhancing gameplay.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/BANDAIOnePieceCardGameOP-10RoyalBloodBox_24Packs_3_353x.png?v=1762787470'] 
  },
  { 
    id: 'p29', 
    categoryId: 'cat1', 
    name: 'Mould King RC Bulldozer Technique Building Set', 
    cPrice: 95, 
    dPrice: 130, 
    description: 'App-controlled 2.4G RC bulldozer construction vehicle building set. DIY engineering model with functional engines and realistic movement. Technique-style building blocks designed for advanced builders. Remote and app control for interactive and immersive play.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/MouldKingRCBulldozerTechniqueBuildingSet_AppControlledEngineeringModel_400x.png?v=1770658903'] 
  },
  { 
    id: 'p30', 
    categoryId: 'cat1', 
    name: 'POP MART The Monsters Big into Energy Vinyl Plush Pendant Blind Box', 
    cPrice: 8, 
    dPrice: 12, 
    description: 'Blind box collectible from POP MART The Monsters Big into Energy series. Random vinyl plush pendant design for surprise unboxing fun. High-quality materials suitable for display or decoration. Single box packaging perfect for gifting or personal collection.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/POPMARTTheMonstersBigintoEnergyVinylPlushPendantBlindBox_500x.png?v=1770658094'] 
  },
  { 
    id: 'p31', 
    categoryId: 'cat1', 
    name: 'Legends Series Venom Collectible Action Figure', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Highly detailed collectible action figure inspired by the iconic character Venom. Premium design and craftsmanship for an authentic look. Includes 3 unique accessories to enhance display and play options. Features multiple points of articulation for dynamic posing.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/LegendsSeriesVenomCollectibleActionFigure-PremiumDesignwith3Accessories_1_500x.png?v=1723837047'] 
  },
  { 
    id: 'p32', 
    categoryId: 'cat1', 
    name: '3-Pack Light-Up Toy Swords – Motion FX Sound & Colorful Blades', 
    cPrice: 15, 
    dPrice: 22, 
    description: 'Includes 3 light-up sabers in different colors, each with motion-sensitive FX sound effects. Perfect for Halloween costumes, birthday gifts, and galaxy warrior roleplay. Durable construction suitable for kids while staying lightweight and safe. Batteries included.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/3-PackLight-UpToySwords_MotionFXSound_ColorfulBladesforKids_GalaxyAdventures_1_500x.png?v=1751386668'] 
  },
  { 
    id: 'p33', 
    categoryId: 'cat1', 
    name: 'Microscope for Kids – STEM Educational Science Kit', 
    cPrice: 10, 
    dPrice: 15, 
    description: 'Mini pocket handheld microscope that introduces kids to science and discovery. High-quality magnification lets children explore plants, insects, rocks, and everyday objects up close. Built-in LED light for clear viewing. Perfect STEM gift for ages 5–12.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/dcfe4d2ea7990b9c156702116e531fac-removebg-preview_500x.png?v=1758045998'] 
  },
  { 
    id: 'p34', 
    categoryId: 'cat1', 
    name: 'NINJAGO Lloyd\'s Hydro Mech Building Kit', 
    cPrice: 8, 
    dPrice: 12, 
    description: 'Exciting building kit featuring Lloyd\'s Hydro Mech for underwater adventures. Includes NINJAGO Lloyd minifigure equipped with a sword for battle. Mech is fully articulated with poseable limbs for action-packed play. Provides hours of creative fun.', 
    images: ['https://www.affirmadistributors.us/cdn/shop/files/NINJAGOLloyd_sHydroMechBuildingKit-UnderwaterPlaysetwithNINJAGOLloydandMech_1_500x.png?v=1723837898'] 
  },

  // Home & Kitchen (Affirma Distributors)
  { 
    id: 'p35', 
    categoryId: 'cat2', 
    name: 'TIMEMORE Coffee Scale Basic 2.0', 
    cPrice: 36, 
    dPrice: 48, 
    description: 'Electronic espresso scale with timer, designed for precise coffee brewing. Measures up to 2000 grams for accurate measurements. Features a built-in timer for perfect brewing control. Compact and sleek design fits any coffee setup.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/TIMEMORE_Coffee_Scale_Basic_2.0_Electronic_Espresso_Scale_with_Timer_-_2000_Grams.png?v=1724770675'] 
  },
  { 
    id: 'p36', 
    categoryId: 'cat2', 
    name: 'MIU Fish Spatula Stainless Steel', 
    cPrice: 14.99, 
    dPrice: 19.99, 
    description: 'Flexible stainless steel blade for easy flipping and lifting, especially delicate foods like fish. Slotted design allows excess oil or liquid to drain while serving. Polished metal finish adds durability and corrosion resistance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71ckTkLbKnL._AC_SL1500_-removebg-preview.png?v=1745494142'] 
  },
  { 
    id: 'p37', 
    categoryId: 'cat2', 
    name: 'Rechargeable Toaster-Inspired LED Lamp', 
    cPrice: 14, 
    dPrice: 20, 
    description: 'Unique toaster-inspired design, combining functionality and charm for a playful night light. Vibrant, color-changing LED light provides a soft, warm glow, perfect for bedrooms and living rooms. USB rechargeable for convenience.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/490b8dc79df76df8074549633bb946ad-removebg-preview_1.png?v=1733818600'] 
  },
  { 
    id: 'p38', 
    categoryId: 'cat2', 
    name: 'Spina Salad Spinner', 
    cPrice: 12.99, 
    dPrice: 17.99, 
    description: 'Easy-to-use salad spinner for efficient drying and washing of greens. Non-scratch nylon colander that is gentle on produce. Features a collapsible handle for space-saving storage. Durable and practical kitchen essential.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/SpinaEasy-To-UseSaladSpinnerNon-Scratch_NylonSpinningColanderLettuceSpinnerColanderwithCollapsibleHandleWhite_Green.png?v=1723911947'] 
  },
  { 
    id: 'p39', 
    categoryId: 'cat2', 
    name: 'Star Projector Galaxy Night Light', 
    cPrice: 18.99, 
    dPrice: 25.99, 
    description: 'Projects vivid stars and colorful nebula clouds across walls and ceilings, creating a mesmerizing cosmic atmosphere. Cute astronaut design with timer and remote control. Perfect for kids room decor, Christmas, and birthdays.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/0b8a8922aaa596b673550a898430f2e9-removebg-preview.png?v=1757963816'] 
  },
  { 
    id: 'p40', 
    categoryId: 'cat2', 
    name: 'Organic Acacia Wood Cutting & Serving Board', 
    cPrice: 14.99, 
    dPrice: 21.99, 
    description: 'Premium cutting and chopping board crafted from durable organic acacia wood. Natural grain finish provides a rustic, elegant look for kitchen and dining use. Built-in handles for easy carrying and serving.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/OrganicAcaciaWoodCutting_ServingBoardwithHandles_MultipurposeKitchenPlatter_1.png?v=1756843875'] 
  },
  { 
    id: 'p41', 
    categoryId: 'cat2', 
    name: 'Modern Farmhouse Lantern Decor', 
    cPrice: 20, 
    dPrice: 28, 
    description: 'Elegant black metal design adds a rustic yet modern touch to any space. Built-in LED candle creates a warm, cozy glow without open flame. Includes timer for automatic flickering candle operation. Perfect for living room, home, indoor, outdoor, and fireplace.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/615_8VlGfpL._AC_SL1500_-removebg-preview.png?v=1758138072'] 
  },
  { 
    id: 'p42', 
    categoryId: 'cat2', 
    name: 'Memory Foam Travel Neck Pillow', 
    cPrice: 17, 
    dPrice: 24, 
    description: 'Ergonomically designed travel pillow made with premium memory foam to provide optimal neck support and comfort. Relieves pressure and helps maintain proper alignment during long flights and car journeys. Available in Black, Grey, and Light Grey.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/MemoryFoamTravelNeckPillowAirplane_CarSupport_BlackGreyLightGrey_1.png?v=1756585791'] 
  },
  { 
    id: 'p43', 
    categoryId: 'cat2', 
    name: 'Decorative Knob Covers Red Peppermint 12 Pack', 
    cPrice: 14, 
    dPrice: 19, 
    description: 'Festive red peppermint themed knob covers designed for holiday decorating. Includes 12 stretchy covers that easily fit over most cabinet and drawer knobs. Adds a cheerful Christmas touch to kitchens, bathrooms, and other rooms.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/DecorativeKnobCoversRedPeppermint12PackStretchOverHardwareChristmasHolidayDecorations_1.png?v=1760128101'] 
  },
  { 
    id: 'p44', 
    categoryId: 'cat2', 
    name: 'Christmas Gnomes Decorations 3 Piece Set', 
    cPrice: 17.99, 
    dPrice: 24.99, 
    description: 'Adorable handmade Swedish style Christmas gnomes with built in LED lights. Set includes three plush gnomes perfect for festive home decoration. Crafted from soft, high quality fabric with fine attention to detail.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ChristmasGnomesDecorationsIndoorGiftPlushwithLight3PieceSet_1.png?v=1760020285'] 
  },
  { 
    id: 'p45', 
    categoryId: 'cat2', 
    name: 'Christmas Tree Ornaments 30 Piece Set', 
    cPrice: 25, 
    dPrice: 34, 
    description: 'Festive set of 30 Christmas tree ornaments in classic red, green, and white colours. Shatterproof design ensures safety, durability, and long lasting use. Includes a mix of matte, shiny, and glitter finishes for a beautiful tree display.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ChristmasTreeOrnaments30PieceSetRedGreenWhiteShatterproofBaublesforHolidayDecoration_1.png?v=1759949817'] 
  },
  { 
    id: 'p46', 
    categoryId: 'cat2', 
    name: 'Christmas Tree Ornaments Velvet Balls Pack of 15', 
    cPrice: 26, 
    dPrice: 35, 
    description: 'Elegant velvet Christmas tree ornaments in a pack of 15 pieces. Includes a mix of multicolor green, brown, and neutral tones for a modern festive look. Shatterproof design ensures safety and durability.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ChristmasTreeOrnamentsVelvetBallsPackof15ShatterproofXmasBulbsMulticolorGreenBrownNeutral_1.png?v=1759949117'] 
  },
  { 
    id: 'p47', 
    categoryId: 'cat2', 
    name: 'Advent Calendar Fishing Christmas Countdown', 
    cPrice: 20, 
    dPrice: 28, 
    description: 'Includes 24 unique fishing lures and accessories to celebrate the countdown to Christmas. Each door reveals a new lure, making every day an exciting surprise. Perfect gift for fishermen, adult men, and teen boys.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/81lGg0qCOFL._AC_SL1500_-removebg-preview.png?v=1758384586'] 
  },

  // Beauty & Personal Care (Affirma Distributors)
  { 
    id: 'p48', 
    categoryId: 'cat3', 
    name: 'Wet Brush-Pro Detangler Hairbrush Purple', 
    cPrice: 12, 
    dPrice: 16, 
    description: 'Ultra-soft IntelliFlex bristles glide through tangles, reducing pain and breakage by 45%. Ergonomic rubberized EasyGrip handle with finger rests ensures comfort and control. SofTips on bristles protect the scalp and hair.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/WetBrushProDetanglerHairBrushPink_1.png?v=1754512539'] 
  },
  { 
    id: 'p49', 
    categoryId: 'cat3', 
    name: 'Hollister Wave Eau De Toilette For Him 100ml', 
    cPrice: 35, 
    dPrice: 48, 
    description: 'A 100ml Eau de Toilette designed for men who enjoy fresh, ocean-inspired fragrances. Opens with crisp notes of yuzu, grapefruit, and bamboo leaf for an energizing start. Heart notes of lavender, cypress, and sage add depth.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Hollister_Wave_Eau_de_Toilette_for_Him_Fresh_Scent_in_a_100_ml_Bottle_2.png?v=1754409778'] 
  },
  { 
    id: 'p50', 
    categoryId: 'cat3', 
    name: 'Klorane Strengthening Shampoo with Quinine & Edelweiss', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Strengthening shampoo formulated to combat hair thinning and hair loss. Enriched with quinine and organic edelweiss extract to fortify and revitalise tired, weakened hair. Helps stimulate the scalp and promote healthy growth. 400ml bottle.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/KloraneStrengtheningShampoowithQuinine_OrganicEdelweiss_400ml_1.png?v=1756247434'] 
  },
  { 
    id: 'p51', 
    categoryId: 'cat3', 
    name: 'ELEMIS Pro-Collagen Super Serum Elixir 15ml', 
    cPrice: 85, 
    dPrice: 110, 
    description: 'Advanced anti-ageing serum designed to smooth, firm, and revitalise the skin. Pro-Collagen Renewal Serum helps improve skin elasticity and reduce visible fine lines. Super Elixir delivers a concentrated dose of marine and plant actives.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ElemisProCollagenSerums_Renewal_SuperElixir_RoseMicroSerum_15ml_30ml_1.png?v=1756246457'] 
  },
  { 
    id: 'p52', 
    categoryId: 'cat3', 
    name: 'L\'Occitane Shea Butter Liquid Soap Verbena 500ml', 
    cPrice: 30, 
    dPrice: 42, 
    description: 'Gentle liquid soap enriched with shea butter to cleanse while maintaining skin\'s natural moisture balance. Fresh verbena fragrance leaves hands and body delicately scented with citrusy notes. Vegan formula suitable for daily use.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/L_OCCITANESheaVerbenaLiquidSoap_Hands_Body_300ml_1.png?v=1756236677'] 
  },
  { 
    id: 'p53', 
    categoryId: 'cat3', 
    name: 'RoC Multi Correxion Anti-Sagging Face Cream 50ml', 
    cPrice: 28, 
    dPrice: 38, 
    description: 'Rich anti-ageing cream developed to target sagging and loss of firmness in mature skin. Helps visibly lift and tighten the face and neck area with continued use. Intensely hydrating formula with hyaluronic acid to restore elasticity.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/RoCMultiCorrexionFirm_LiftRichCream_Face_Neck_50ml_1.png?v=1756233563'] 
  },

  // Automotive Accessories (Affirma Distributors)
  { 
    id: 'p54', 
    categoryId: 'cat4', 
    name: 'Motorcraft FL2016 Oil Filter', 
    cPrice: 18.99, 
    dPrice: 24.99, 
    description: 'Genuine OEM Motorcraft oil filter designed for Ford, Lincoln, and Mercury vehicles. Efficiently captures contaminants to protect your engine. Model number FL2016 ensures reliable and consistent oil filtration.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_FL2016_Oil_Filter.png?v=1724859014'] 
  },
  { 
    id: 'p55', 
    categoryId: 'cat4', 
    name: 'Polaris Drive Belt 3211180 OEM CVT Belt', 
    cPrice: 119.99, 
    dPrice: 155, 
    description: 'Designed for RZR XP 1000, XP 4 1000, Trail S & S 1000 Premium Ultimate, General XP 1000, and more. OEM performance CVT belt for reliable power transmission. Runs cooler to reduce wear and extend belt life.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PolarisDriveBeltforRZRXP1000_XP41000_TrailS_S1000PremiumUltimate_GeneralXP1000_XP41000ModelsandMore_RunsCooler_OEMPerformanceCVTBelt_NoClutchRecalibration-3211180_1.png?v=1735755101'] 
  },
  { 
    id: 'p56', 
    categoryId: 'cat4', 
    name: 'Can-Am Premium Drive Belt 422280656', 
    cPrice: 50, 
    dPrice: 68, 
    description: 'Designed for optimal performance and durability in demanding off-road conditions. Precision-engineered to provide smooth power transfer and maximum efficiency for Maverick and Defender models. Made from high-quality materials to resist heat and wear.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71Qhg8ZnP2L._AC_SL1500_-removebg-preview.png?v=1740565685'] 
  },
  { 
    id: 'p57', 
    categoryId: 'cat4', 
    name: 'AISIN WPT-190 Engine Water Pump with Gaskets', 
    cPrice: 149.99, 
    dPrice: 195, 
    description: 'New engine water pump with gaskets for reliable coolant circulation. Compatible with Lexus CT200h and various Toyota Prius models. Ensures optimal engine temperature regulation and performance with precision engineering.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/AISINWPT-190NewEngineWaterPumpwithGaskets-CompatiblewithSelectLexusCT200hToyotaPrius_PriusC_PriusPlug-In_PriusV.png?v=1754344888'] 
  },
  { 
    id: 'p58', 
    categoryId: 'cat4', 
    name: 'Polaris 3211186 Drive Belt OEM CVT Belt', 
    cPrice: 109.99, 
    dPrice: 142, 
    description: 'High-performance OEM CVT drive belt designed for Polaris Ranger XP 1000, Crew XP 1000, RZR RS1, XP & XP 4 Turbo, XP & XP 4 1000, Xpedition ADV, and more. Built for superior durability and reliable power delivery.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PolarisDriveBeltforRangerXP1000_CrewXP1000_RZRRS1_XP_XP4Turbo_XP_XP41000_XpeditionADV_XPandMore_RunsCooler_OEMPerformanceCVTBelt_NoClutchRecalibration-3211186_1.png?v=1729095628'] 
  },
  { 
    id: 'p59', 
    categoryId: 'cat4', 
    name: 'FA2031 Ford Motorcraft Air Filter', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Genuine OEM Ford Motorcraft air filter designed specifically for 2020-2022 6.7L Ford Powerstroke Diesel Trucks. Provides superior filtration to protect the engine from contaminants and maintain optimal airflow.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/FA2031_Ford_Motorcraft_Air_Filter_for_2020-2022_6.7L_Ford_Powerstroke_Diesel_Trucks.png?v=1724860538'] 
  },
  { 
    id: 'p60', 
    categoryId: 'cat4', 
    name: 'Motorcraft FD-4647 Fuel Filter', 
    cPrice: 39, 
    dPrice: 52, 
    description: 'Genuine OEM replacement fuel filter designed for 2017-2024 Ford Super Duty trucks equipped with the 6.7L Powerstroke diesel engine. Includes both engine-mounted and frame-mounted filters for complete protection.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/MotorcraftFD-4647FuelFilter_OEMProtectionfor6.7LPowerstroke_1.png?v=1747221088'] 
  },
  { 
    id: 'p61', 
    categoryId: 'cat4', 
    name: 'Polaris Drive Belt 3211202 OEM CVT Belt', 
    cPrice: 119.99, 
    dPrice: 155, 
    description: 'Designed for Pro XP, Pro XP 4, Turbo S, Turbo S 4, Turbo R, Turbo R 4, XP Turbo, XP 4 Turbo, and more. OEM performance CVT belt for reliable power delivery and longevity. Runs cooler for reduced wear.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PolarisRZRDriveBeltforProXP_ProXP4_TurboS_TurboS4_TurboR_TurboR4_XPTurbo_XP4TurboModelsandMore_RunsCooler_OEMPerformanceCVTBelt_NoClutchRecalibration-3211202_4.png?v=1725347224'] 
  },
  { 
    id: 'p62', 
    categoryId: 'cat4', 
    name: 'Motorcraft DG511 Ignition Coil', 
    cPrice: 20.99, 
    dPrice: 28, 
    description: 'Designed for Ford, Lincoln, and Mercury vehicles. OEM-quality replacement for reliable performance. Enhances engine efficiency and reduces misfires. Built with high-grade materials for durability.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_DG511_Ignition_Coil.png?v=1724861377'] 
  },

  // Health & Household (Affirma Distributors)
  { 
    id: 'p63', 
    categoryId: 'cat5', 
    name: 'Oral-B Io Ultimate Clean Replacement Brush Heads', 
    cPrice: 20, 
    dPrice: 28, 
    description: 'Advanced cleaning performance designed with Oral-B iO technology to remove plaque effectively and deliver a dentist-like clean every day. Ultimate Clean bristles with firm, high-precision angles for thorough cleaning. Pack of 2, Black.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Oral-BIoUltimateCleanReplacementBrushHeadsBlack-Packof2.png?v=1763135998'] 
  },
  { 
    id: 'p64', 
    categoryId: 'cat5', 
    name: 'Facial Massager Red Light Therapy', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Uses gentle red-light wavelengths to stimulate collagen production, reduce fine lines, and improve skin elasticity. Multi-function massage combines soothing vibration with light therapy. Perfect gift for birthdays, Christmas, and Mother\'s Day.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/01c65b2d2377c98c524afcf64e2ad24a-removebg-preview.png?v=1757962049'] 
  },
  { 
    id: 'p65', 
    categoryId: 'cat5', 
    name: 'Heating Pad For Back Pain Relief', 
    cPrice: 20, 
    dPrice: 28, 
    description: 'Large electric heating pad designed to relieve back pain, muscle tension, and cramps. Provides soothing, even heat for targeted comfort and relaxation. Features multiple heat settings and an auto shut-off for safety.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Heating_Pad_For_Back_Pain_Relief_and_Cramps_With_Auto_Shut_Off.png?v=1761663670'] 
  },
  { 
    id: 'p66', 
    categoryId: 'cat5', 
    name: 'Chakra Tree of Life Crystal Tree', 
    cPrice: 19, 
    dPrice: 26, 
    description: 'Beautiful handcrafted Chakra Tree of Life made with natural crystals and gemstones. Symbolises growth, balance, and positive energy for the home or workspace. Each branch features healing stones aligned with the seven chakras.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ChakraTreeofLifeCrystalTreewithHealingStonesPositiveEnergyHomeOfficeDecorSpiritualGiftforWomen_1.png?v=1759953254'] 
  },
  { 
    id: 'p67', 
    categoryId: 'cat5', 
    name: 'Red & Infrared Light Therapy Lamp', 
    cPrice: 65, 
    dPrice: 85, 
    description: 'Dual wavelength therapy lamp with 660nm red light and 850nm near-infrared light for targeted skin and body care. Designed to help improve skin tone, reduce inflammation, and support muscle recovery.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Red_InfraredLightTherapyLamp_660nm_850nmLEDDeviceforFaceandBodyWellness_1.png?v=1751923935'] 
  },
  { 
    id: 'p68', 
    categoryId: 'cat5', 
    name: 'Apple Red Party Pack Paper Plates 50 Ct', 
    cPrice: 7, 
    dPrice: 10, 
    description: 'Pack includes 50 durable paper plates in a vibrant apple red color, perfect for any celebration. Sturdy construction holds up to full meals, snacks, or desserts without leaking or folding. Ideal for parties, picnics, and events.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/AppleRedBigPartyPackPaperPlates_50Ct_3.png?v=1750708782'] 
  },
  { 
    id: 'p69', 
    categoryId: 'cat5', 
    name: 'Due North Foot Rubz Hand & Back Massage Ball', 
    cPrice: 4.58, 
    dPrice: 7, 
    description: 'Versatile massage ball designed to relieve pain from plantar fasciitis, sore feet, and tight muscles. Helps improve circulation and reduce tension in hands, back, and other sore areas. Textured surface for deep tissue stimulation.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/DueNorthFootRubzHand_BackMassageBall-RelievePainfromPlantarFasciitis_TightMuscles_SoreFeet-MassageTool_1.png?v=1738397027'] 
  },
  { 
    id: 'p70', 
    categoryId: 'cat5', 
    name: 'Due North Foot Rubz Foot Massage Roller', 
    cPrice: 10.24, 
    dPrice: 15, 
    description: 'Compact and lightweight foot massage roller designed for effective pain relief and relaxation. Unique textured surface stimulates circulation and targets pressure points for deep massage. Helps relieve plantar fasciitis and sore feet.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/DueNorthFootRubzFootMassageRoller_0.4Pound_MultiColored_DNFM1_2.png?v=1738396047'] 
  },
  { 
    id: 'p71', 
    categoryId: 'cat5', 
    name: '2PCS Anxiety Relief Breathing Necklaces', 
    cPrice: 13, 
    dPrice: 18, 
    description: 'Stylish breathing necklaces designed to promote relaxation and reduce anxiety. Helps regulate breathing patterns for stress relief and mindfulness. Dual-purpose as a stop-smoking aid and calming tool. Set of 2 in Black and Silver.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/2PCSAnxietyReliefBreathingNecklaces_StopSmoking_CalmingTool_Black_Silver_2.png?v=1735222946'] 
  },

  // Home & Kitchen (Affirma Distributors - Additional)
  { 
    id: 'p72', 
    categoryId: 'cat2', 
    name: 'Portable Bladeless Neck Fan', 
    cPrice: 20, 
    dPrice: 28, 
    description: 'Innovative bladeless design provides safe, comfortable cooling around the neck. Hands-free wearable fan, perfect for travel, workouts, commuting, office, or outdoor use. Lightweight and ergonomic build for extended wear without discomfort. Available in White and Black.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PortableBladelessNeckFanHandsFreeWearable_White_Black_2.png?v=1756583076'] 
  },

  // Beauty & Personal Care (Affirma Distributors - Additional)
  { 
    id: 'p73', 
    categoryId: 'cat3', 
    name: 'Redken Color Extend Magnetics Conditioner 500ml', 
    cPrice: 28, 
    dPrice: 38, 
    description: 'Protects and extends vibrancy of color-treated hair with RCT Protein Complex. Strengthens hair from root to tip, reducing breakage and split ends. Enhances shine for a radiant, salon-fresh finish after every use.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/RedkenColorExtendMagneticsConditioner_500ml_2.png?v=1754427444'] 
  },
  { 
    id: 'p74', 
    categoryId: 'cat3', 
    name: 'L\'Occitane Cherry Blossom Hand Cream 75ml', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Delicate cherry blossom fragrance with floral and fruity notes for a luxurious feel. Enriched with shea butter to deeply moisturise and nourish dry hands. 98% readily biodegradable formula supports eco-conscious beauty routines. Vegan and cruelty-free.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/L_OccitaneCherryBlossomHandCream-SheaButterEnriched_Vegan_98_Biodegradable_Floral_FruityScent_4.png?v=1754422634'] 
  },
  { 
    id: 'p75', 
    categoryId: 'cat3', 
    name: 'La Roche-Posay Anthelios UVMune 400 SPF50 50ml', 
    cPrice: 32, 
    dPrice: 42, 
    description: 'High-performance tinted facial sunscreen offering very high broad-spectrum protection (UVA, UVB and ultra-long UVA). Lightweight, fast-absorbing fluid that hydrates without greasiness. Ideal for dry and sensitive skin types.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/LaRoche_PosayAntheliosUVMune400HydratingTintedSunscreenSPF50_50ml_2.png?v=1753997819'] 
  },
  { 
    id: 'p76', 
    categoryId: 'cat3', 
    name: 'Estee Lauder Advanced Night Repair Eye Complex 15ml', 
    cPrice: 55, 
    dPrice: 72, 
    description: 'Intensive eye cream targeting multiple signs of aging around the delicate eye area. Helps minimize visible effects of fatigue, including fine lines, puffiness, dryness, and under-eye dark circles. Powered by Chronolux Power Signal Technology.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/EsteeLauderAdvancedNightRepairEyeSuperchargedComplex_15ml.png?v=1753733951'] 
  },
  { 
    id: 'p77', 
    categoryId: 'cat3', 
    name: 'Clinique Almost Lipstick Black Honey 1.9g', 
    cPrice: 18, 
    dPrice: 24, 
    description: 'Sheer buildable tint that suits every skin tone. Lightweight balm-like texture that glides smoothly and feels comfortable all day. Delivers a natural your-lips-but-better finish with a soft shine. Universally flattering shade.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/CliniqueAlmostLipstickinBlackHoney1_2.png?v=1763823885'] 
  },
  { 
    id: 'p78', 
    categoryId: 'cat3', 
    name: 'Olaplex No. 4 Bond Maintenance Shampoo', 
    cPrice: 28, 
    dPrice: 38, 
    description: 'Bond-building shampoo designed to repair, strengthen, and protect damaged hair. Patented OLAPLEX Bond Building Technology helps rebuild broken bonds from within. Gently cleanses while reducing frizz, split ends, and breakage.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/OlaplexNo.4BondMaintenanceShampoo_1.png?v=1763755786'] 
  },
  { 
    id: 'p79', 
    categoryId: 'cat3', 
    name: 'K18 Leave-In Repair Hair Mask 50ml', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'Leave-in hair repair mask designed to help restore and strengthen damaged hair. Works to improve softness, smoothness, and elasticity. Lightweight formula that absorbs quickly without buildup. Suitable for all hair types needing repair and renewal.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71wCdxmA9tL._SL1500_-removebg-preview_1.png?v=1763547253'] 
  },
  { 
    id: 'p80', 
    categoryId: 'cat3', 
    name: 'Sol De Janeiro Hair & Body Fragrance Mist 90ml', 
    cPrice: 25, 
    dPrice: 34, 
    description: 'Hair and body fragrance mist featuring the Cheirosa 76 scent for a refreshing daily fragrance. Suitable for use on both hair and skin. Lightweight mist ideal for everyday wear and quick refresh. Easy spray application for on-the-go use.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/61Wh7mGBe2L._SL1500_-removebg-preview.png?v=1763400915'] 
  },

  // Automotive Accessories (Affirma Distributors - Additional)
  { 
    id: 'p81', 
    categoryId: 'cat4', 
    name: 'Motorcraft Fuel Filter FD-4641', 
    cPrice: 44.99, 
    dPrice: 58, 
    description: 'Genuine OEM Motorcraft fuel filter designed for optimal fuel filtration in Ford vehicles. Effectively removes contaminants to protect your engine and fuel system. Helps maintain fuel efficiency and engine performance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_Fuel_Filter_FD-4641.png?v=1724860137'] 
  },
  { 
    id: 'p82', 
    categoryId: 'cat4', 
    name: 'Toyota Fuel Cap 77300-06040', 
    cPrice: 15, 
    dPrice: 20, 
    description: 'Genuine Toyota part for a secure fit and reliable performance. Ensures proper sealing to prevent fuel leaks and maintain fuel system pressure. Made from durable materials for long-lasting use. Model number 77300-06040.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Toyota_Fuel_Cap_-_77300-06040.png?v=1724498683'] 
  },
  { 
    id: 'p83', 
    categoryId: 'cat4', 
    name: 'OBD2 Scanner Diagnostic Tool', 
    cPrice: 26, 
    dPrice: 35, 
    description: 'Diagnoses and clears check engine light codes quickly and accurately. Supports Mode 6 and Mode 8 for advanced diagnostic functions. Performs I/M readiness checks for emission testing. Displays live data and freeze frame data.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/OBD2ScannerDiagnosticTool_CheckEngineCodeReaderwithReset_Mode6_Mode8_IMReadiness_1.png?v=1747779080'] 
  },
  { 
    id: 'p84', 
    categoryId: 'cat4', 
    name: 'Motorcraft FA-1902 Air Filter', 
    cPrice: 21.99, 
    dPrice: 28, 
    description: 'Genuine OEM Motorcraft air filter designed for select Ford, Lincoln, and Mercury vehicles. Provides superior protection by trapping dust, dirt, and other contaminants. Ensures optimal airflow to the engine for peak performance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_FA-1902_Air_Filter.png?v=1724858370'] 
  },
  { 
    id: 'p85', 
    categoryId: 'cat4', 
    name: 'Genuine Mopar Thermostat Housing', 
    cPrice: 50, 
    dPrice: 65, 
    description: 'Authentic Mopar Thermostat Housing designed to regulate engine temperature and ensure efficient cooling. Direct OEM replacement, engineered for a precise fit and compatibility with Mopar vehicles. Made from high-quality, durable materials.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/GenuineMoparThermostatHousing_4.png?v=1742340816'] 
  },

  // Health & Household (Affirma Distributors - Additional)
  { 
    id: 'p86', 
    categoryId: 'cat5', 
    name: 'HEYCHY Percussion Massage Gun', 
    cPrice: 100, 
    dPrice: 130, 
    description: 'Powerful deep tissue percussion massager designed to relieve muscle stiffness and soreness. Features both heat and cold therapy modes for customised recovery. 12mm amplitude delivers strong percussive power to penetrate deep muscle layers.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/HEYCHY_Percussion_Massage_Gun_With_Heat_and_Cold_Therapy_12mm_Amplitude.png?v=1761664277'] 
  },
  { 
    id: 'p87', 
    categoryId: 'cat5', 
    name: 'MEGAComfort Anti-Fatigue Mat Insole', 
    cPrice: 25, 
    dPrice: 34, 
    description: 'Designed with patented dual-layer 100% memory foam for superior shock absorption and cushioning. Helps reduce foot, back, and leg pain during long hours of standing or walking. Built-in arch support promotes natural foot alignment and better posture.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/MEGAComfortPersonalAnti-FatigueMatInsole_1.png?v=1748032437'] 
  },
  { 
    id: 'p88', 
    categoryId: 'cat5', 
    name: 'Sellstrom Reusable Banded Earplugs', 
    cPrice: 4.35, 
    dPrice: 7, 
    description: 'High-quality reusable earplugs designed for industrial, construction, and workplace safety. 25dB noise reduction rating (NRR) helps protect ears from loud environments. Flexible band design allows for a secure fit while resting comfortably. Hi-Vis Green/Blue.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/SellstromReusableBandedEarplugsforWork-WorkSafetyHearingProtection-25dB-Hi-VisGreenBlue_2.png?v=1738577226'] 
  },
  { 
    id: 'p89', 
    categoryId: 'cat5', 
    name: 'Muscle Release & Deep Tissue Massage Tool', 
    cPrice: 24.99, 
    dPrice: 34, 
    description: 'Designed for targeted muscle relief and deep tissue massage, perfect for alleviating tension and soreness. Ergonomically crafted to reach deep muscle layers, providing effective self-massage or partner-assisted therapy. Ideal for athletes and active individuals.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/MuscleRelease_DeepTissueMassageTool.png?v=1727190372'] 
  },
  { 
    id: 'p90', 
    categoryId: 'cat5', 
    name: 'Rapid Relief Back Support Brace with Hot/Cold Therapy', 
    cPrice: 14.50, 
    dPrice: 20, 
    description: 'Back support brace with integrated hot/cold therapy for pain relief. Adjustable design for a custom, comfortable fit. Unisex adult size to accommodate various body types. Provides targeted support and relief for back pain.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/wefaedqed.png?v=1723809467'] 
  },

  // Toys & Games (Affirma Distributors - Batch 3)
  { 
    id: 'p91', 
    categoryId: 'cat1', 
    name: 'Umbreon Plush All Star Collection', 
    cPrice: 10.50, 
    dPrice: 15, 
    description: 'Soft and huggable plush toy featuring the popular dark-themed character Umbreon. Made from high-quality materials for durability and comfort. Ideal for fans, children, and collectors of all ages. Adds a sleek and stylish touch to any collection.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PP122_All_Star_Collection_Umbreon_Plush_Brown_a_7745a2ae-88c1-44ef-a6d1-64468721139f.png?v=1725267689'] 
  },
  { 
    id: 'p92', 
    categoryId: 'cat1', 
    name: 'LEGO Speed Champions Fast & Furious Dodge Charger R/T', 
    cPrice: 25, 
    dPrice: 34, 
    description: 'Authentic LEGO Speed Champions replica of the 1970 Dodge Charger R/T from Fast & Furious. Features classic muscle car details, including the supercharger sticking through the hood. Includes a Dominic Toretto minifigure for action-packed role play.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/LEGOSpeedChampions76912Fast_Furious1970DodgeChargerRT_3.png?v=1762524721'] 
  },
  { 
    id: 'p93', 
    categoryId: 'cat1', 
    name: 'Black Cat Plush Toy Pillow Kawaii Cushion', 
    cPrice: 15, 
    dPrice: 22, 
    description: 'Adorable black cat plush toy pillow featuring a cute and kawaii design, perfect for cat lovers and fans of all ages. Made from soft, high-quality materials, offering a comfortable and cozy cushion for cuddling or resting. Versatile plush pillow for home decor.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71E-C-6B-TL._AC_SL1500_-ai-brush-removebg-xqomtl2r_1.png?v=1729015323'] 
  },
  { 
    id: 'p94', 
    categoryId: 'cat1', 
    name: 'BattleTech Inner Sphere Battle Lance Force Pack', 
    cPrice: 16.99, 
    dPrice: 24, 
    description: 'Expand your BattleTech gameplay with the Inner Sphere Battle Lance Force Pack. Includes four unique BattleMechs to add to your arsenal and enhance your tactical abilities on the battlefield. Great for strategy and tabletop gaming enthusiasts.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/BattleTech-_Inner_Sphere-_Battle_Lance-_Force_Pack.png?v=1724439949'] 
  },
  { 
    id: 'p95', 
    categoryId: 'cat1', 
    name: 'LEGO BrickHeadz Lady Liberty Statue of Liberty', 
    cPrice: 12, 
    dPrice: 18, 
    description: 'Buildable LEGO BrickHeadz figure featuring the iconic Lady Liberty/Statue of Liberty, perfect for fans of architecture and history. Includes high-quality LEGO pieces designed for easy assembly and creative building. Features authentic details.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/LEGO-40367-Brickheadz-LadyLibertyStatueofLiberty-93_2.png?v=1729007202'] 
  },
  { 
    id: 'p96', 
    categoryId: 'cat1', 
    name: 'Cartoon Bubble Crab Singing Toy', 
    cPrice: 17, 
    dPrice: 24, 
    description: 'Adorable cartoon crab toy that blows bubbles and sings cheerful tunes. Perfect for interactive play during bath time or mummy-and-me fun sessions. Easy-to-use design with bubble solution included for instant entertainment. Lightweight and portable.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Cartoonbubblecrabsingingtoyformummyfuntime_1.png?v=1732657692'] 
  },

  // Home & Kitchen (Affirma Distributors - Batch 3)
  { 
    id: 'p97', 
    categoryId: 'cat2', 
    name: 'Wood Phone Docking Station Desk Organizer', 
    cPrice: 19.99, 
    dPrice: 28, 
    description: 'Stylish wooden docking station designed to keep daily essentials organized. Features compartments for phone, wallet, watch, keys, glasses, and accessories. Ideal for use on desks, dressers, or nightstands to reduce clutter. Perfect gift for husband or dad.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/WoodPhoneDockingStationforMenDeskorNightstandOrganizerKeyHolderWalletWatchStandGiftforHusbandDad_1.png?v=1759951840'] 
  },
  { 
    id: 'p98', 
    categoryId: 'cat2', 
    name: 'Unicorn Studded Venti Tumbler with Straw', 
    cPrice: 23, 
    dPrice: 32, 
    description: 'Features a vibrant unicorn design with studded detailing. Venti size for ample drink capacity. Includes a reusable straw for convenience. Made from durable, high-quality materials. Keeps beverages cold or hot for extended periods.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/UnicornStuddedVentiTumblerwithStraw.png?v=1723760618'] 
  },
  { 
    id: 'p99', 
    categoryId: 'cat2', 
    name: 'Ryobi Handheld Vacuum Cleaner 18V', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'Cordless handheld vacuum cleaner powered by the Ryobi 18V ONE+ battery system. Delivers powerful suction with up to 29 Air Watts and a flow rate of 1000 L/min. Features a 600ml collector for efficient dust and debris pickup.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Ryobi-HandheldVacuumCleaner18V-29AW-1000Lmin-0.85m3min-Collector600ml-RHV18-0_1.png?v=1747318114'] 
  },
  { 
    id: 'p100', 
    categoryId: 'cat2', 
    name: 'Ankou 3300ml Airtight Pop Cereal Container', 
    cPrice: 38, 
    dPrice: 50, 
    description: 'Generous 3300ml capacity accommodates a variety of dry foods such as cereal, flour, spaghetti, rice, and more. Innovative one-button pop-up lid design allows for effortless, one-handed opening and closing. BPA-free and food-safe materials.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Ankou3300mlAirtightPopCerealContainer_LargeCapacityFoodStorageSolution_1.png?v=1747312900'] 
  },
  { 
    id: 'p101', 
    categoryId: 'cat2', 
    name: 'Crevice Cleaning Brush Set Pack of 6', 
    cPrice: 10, 
    dPrice: 14, 
    description: 'Deep cleaning brush designed for narrow gaps and tight crevices. Ideal for kitchen, toilet, bathroom, and window grooves. Stiff bristles remove dirt, grime, and buildup effectively. Ergonomic handle for comfortable grip and easy control.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/CreviceCleaningBrushSet_Kitchen_Bathroom_WindowGapCleaner_Packof6_3.png?v=1768404934'] 
  },
  { 
    id: 'p102', 
    categoryId: 'cat2', 
    name: '5PCS Non-Scratch Wire Dishcloths', 
    cPrice: 9, 
    dPrice: 13, 
    description: 'Set of 5 reusable wire dishcloths for wet and dry cleaning. Non-scratch wire design removes tough grease and grime safely. Lint-free and quick-drying for streak-free cleaning. Suitable for dishes, cookware, sinks, and countertops.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/5PCSMultipurposeNon-ScratchWireDishcloths_ReusableKitchenCleaningRags.png?v=1767960586'] 
  },

  // Beauty & Personal Care (Affirma Distributors - Batch 3)
  { 
    id: 'p103', 
    categoryId: 'cat3', 
    name: 'NESTI DANTE Romantica Rose & Peony Soap Pack of 6', 
    cPrice: 24, 
    dPrice: 32, 
    description: 'Enriched with shea butter to deeply moisturise and soften all skin types. Made with pure vegetable oils using triple-milled techniques for a rich, creamy lather. Vegan-friendly and cruelty-free. Pack of 6 beautifully wrapped 250g soap bars.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/NestiDanteRomanticaCollectionSoapSet_6x150g_2.png?v=1754425915'] 
  },
  { 
    id: 'p104', 
    categoryId: 'cat3', 
    name: 'Adore Semi-Permanent Hair Colour Black Velvet', 
    cPrice: 8, 
    dPrice: 12, 
    description: 'Rich, velvety black hue for a bold, sophisticated look. Ammonia-free, peroxide-free, and alcohol-free formula for gentle coloring. Infused with aloe vera and hydrolyzed collagen to nourish and hydrate hair. Enhances shine leaving hair soft and silky.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/AdoreShiningSemi-PermanentHairColor_120BlackVelvet_1.png?v=1754416033'] 
  },
  { 
    id: 'p105', 
    categoryId: 'cat3', 
    name: 'Bed Head by TIGI Manipulator Hair Putty', 
    cPrice: 18, 
    dPrice: 24, 
    description: 'Versatile texturizing hair putty designed for both men and women. Helps create definition, volume, and separation for a wide range of styles. Strong flexible hold that keeps hair in place without stiffness. Adds texture and body for messy or structured looks.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/BedHeadbyTigiManipulatorTexturizingHairPuttyforMenandWomen_1.png?v=1764613502'] 
  },
  { 
    id: 'p106', 
    categoryId: 'cat3', 
    name: 'Bioderma Hydrabio H2O Micellar Water 500ml', 
    cPrice: 18, 
    dPrice: 25, 
    description: 'Cleansing micellar water that removes makeup and impurities gently. Hydrates and soothes sensitive skin. Alcohol-free, non-irritating formula. Suitable for daily use on face and eyes. Large 500ml bottle ideal for long-term use.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/BiodermaHydrabioH2OMicellarWater_500ml_2.png?v=1766599382'] 
  },
  { 
    id: 'p107', 
    categoryId: 'cat3', 
    name: 'Vichy Liftactiv Vitamin C Brightening Serum 20ml', 
    cPrice: 30, 
    dPrice: 40, 
    description: 'Enriched with Vitamin C to boost skin radiance. Helps reduce fine lines and dullness. Lightweight, fast-absorbing formula suitable for sensitive skin. Dermatologist-tested for daily use. 20ml concentrated serum.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/VichyLiftactivSupremeVitaminCBrighteningSerum20ml.png?v=1766396696'] 
  },
  { 
    id: 'p108', 
    categoryId: 'cat3', 
    name: 'Lancome Le Stylo Waterproof Eyeliner Chocolat', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Waterproof eyeliner pencil designed for long-wearing eye definition. Shade 03 Chocolat offers a rich deep brown color for softer everyday looks. Creamy glide-on formula that applies smoothly without tugging. Blendable texture suitable for smudging or precise lines.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/LancomeLeStyloWaterproofEyeliner03ChocolatWaterproofEyeliner_1.png?v=1765555361'] 
  },

  // Automotive Accessories (Affirma Distributors - Batch 3)
  { 
    id: 'p109', 
    categoryId: 'cat4', 
    name: 'Polaris 3211169 Drive Belt OEM CVT for Ranger 570', 
    cPrice: 65.99, 
    dPrice: 85, 
    description: 'Polaris OEM Drive Belt designed for Ranger 570, Crew 570, XP 570, Crew XP 570-6, 570 EPS, 570 Full-Size, 500, 2x4, ETX, and more. High performance CVT belt ensures smooth and efficient power transfer. Runs cooler for extended belt life.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PolarisDriveBeltforRanger570_Crew570_XP570_CrewXP570-6_570EPS_570Full-Size_500_2x4_ETXModelsandMore_RunsCooler_OEMPerformanceCVTBelt_NoClutchRecalibration-3211169_3.png?v=1741732438'] 
  },
  { 
    id: 'p110', 
    categoryId: 'cat4', 
    name: 'Can-Am OEM Belt Drive 422280366', 
    cPrice: 84.99, 
    dPrice: 110, 
    description: 'Genuine Can-Am OEM drive belt designed for optimal performance. Engineered for durability, reliability, and smooth power transfer. Made from high-quality materials to resist heat, wear, and stretching. Ensures precise fit and long-lasting performance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71mOyMmQm9L._AC_SL1500___1_-removebg-preview.png?v=1740570079'] 
  },
  { 
    id: 'p111', 
    categoryId: 'cat4', 
    name: 'Motorcraft Oil Filter FL2051S', 
    cPrice: 14.99, 
    dPrice: 20, 
    description: 'Genuine OEM Motorcraft oil filter designed for Ford, Lincoln, and Mercury vehicles. Efficiently traps harmful contaminants to protect your engine. Built with durable materials for reliable oil filtration and consistent performance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_-_Oil_Filter_FL2051S.png?v=1724859493'] 
  },
  { 
    id: 'p112', 
    categoryId: 'cat4', 
    name: 'Motorcraft FD4625AA OEM Ford Fuel Filter', 
    cPrice: 39, 
    dPrice: 52, 
    description: 'Genuine OEM Motorcraft fuel filter designed for precise fit and superior performance in Ford 6.7L Powerstroke diesel engines. Provides exceptional filtration to remove contaminants, ensuring clean fuel delivery and protecting critical engine components.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/MotorcraftFD4625AAOEMFordFuelFilter_3.png?v=1763476041'] 
  },
  { 
    id: 'p113', 
    categoryId: 'cat4', 
    name: 'Mopar 5149062AA Engine Oil Pressure Switch', 
    cPrice: 24, 
    dPrice: 32, 
    description: 'Genuine Mopar engine oil pressure switch for reliable performance. Accurately monitors engine oil pressure to protect the engine. Designed for precise fit and compatibility with Mopar vehicles. Durable construction ensures long-lasting operation.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Mopar5149062AAEngineOilPressureSwitch_2.png?v=1769626358'] 
  },
  { 
    id: 'p114', 
    categoryId: 'cat4', 
    name: 'Polaris 3211077 Drive Belt for Ranger Sportsman', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'High-quality drive belt designed for Polaris ATVs and UTVs from 1985-2015. Compatible with models like Ranger, Sportsman 500, 450, 425, 400, and 350. Durable construction ensures optimal power transfer and long-lasting performance.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Polaris3211077DriveBelt1985-2015335RangerSportsman500450425400350_1.png?v=1741637973'] 
  },

  // Health & Household (Affirma Distributors - Batch 3)
  { 
    id: 'p115', 
    categoryId: 'cat5', 
    name: 'Electric Trimmer for Women 2-in-1 Shaver', 
    cPrice: 17.50, 
    dPrice: 24, 
    description: 'Versatile 2-in-1 design with dual heads for precise trimming and shaving. Ideal for bikini line, underarms, legs, and other sensitive areas. Gentle, hypoallergenic blades for smooth, irritation-free shaving. Compact and lightweight for easy handling.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ElectricTrimmerforWomen_2in1WomenElectricShaverDualHeadBikiniTrimmer_1.png?v=1740556456'] 
  },
  { 
    id: 'p116', 
    categoryId: 'cat5', 
    name: '20oz Paper Bowl Medium Count', 
    cPrice: 5.11, 
    dPrice: 8, 
    description: 'Sturdy 20-ounce paper bowl perfect for serving medium-sized portions. Made from recycled materials, making it an eco-friendly choice. Great for various dishes and events. Convenient and disposable for easy cleanup.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/20OZ_PPR_BOWL_MD_CT_REB.png?v=1723549241'] 
  },
  { 
    id: 'p117', 
    categoryId: 'cat5', 
    name: 'Anxiety Relief Necklace Stainless Steel', 
    cPrice: 11, 
    dPrice: 16, 
    description: 'Crafted from durable, high-quality stainless steel for long-lasting use and a sleek, modern appearance. Designed to support breathing exercises to help reduce anxiety and promote a calm, focused mind. Perfect for daily wear and stress management.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/AnxietyReliefNecklace_YourStylishSolutiontoStress_2.png?v=1736446180'] 
  },
  { 
    id: 'p118', 
    categoryId: 'cat5', 
    name: '12 Pcs Wire Miracle Cleaning Dishcloths', 
    cPrice: 15, 
    dPrice: 20, 
    description: 'Crafted with wire material to effectively remove stubborn grime, grease, and residue. Gentle on surfaces while tough on dirt, making it safe to use on a variety of kitchenware without scratching. Ideal for cleaning dishes, cookware, and stovetops.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/12PCSWireDishwashingRagMultipurposeWireMiracleCleaningCloths_WireMiracleCleaningClothsNonScratchWireDishclothandDishclothsforKitchen_WireDishclothforRemovingGrime_1.png?v=1731357631'] 
  },
  { 
    id: 'p119', 
    categoryId: 'cat5', 
    name: 'Gabby\'s Dollhouse Party Favor Bags Pack of 8', 
    cPrice: 7.24, 
    dPrice: 10, 
    description: 'Pack of 8 party favor bags featuring Gabby\'s Dollhouse design. Includes a variety of colors: blue, green, and yellow. Made from durable kraft paper, ideal for holding small treats and goodies. Perfect for themed parties and celebrations.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/AmscanGabby_sDollhousePartyFavorBagsPackof8BlueGreen_YellowKraftTreatBags_2.png?v=1723497506'] 
  },
  { 
    id: 'p120', 
    categoryId: 'cat5', 
    name: 'THE HONEY POT Herbal Overnight Pads 12 Count', 
    cPrice: 8, 
    dPrice: 12, 
    description: 'Infused with natural herbs like lavender and aloe, designed to soothe and comfort during your period. Specifically crafted for overnight use, providing extra absorbency and coverage. Made with organic cotton for a soft, gentle feel.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/71lrq6NugtL._AC_SL1500-removebg-preview.png?v=1730751335'] 
  },
  { 
    id: 'p130', 
    categoryId: 'cat1', 
    name: 'Giant Plush Teddy Bear', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'Soft and cuddly companion for kids.', 
    images: ['https://plus.unsplash.com/premium_photo-1702830272114-5432fd35c414?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p131', 
    categoryId: 'cat1', 
    name: 'Remote Control Car', 
    cPrice: 30, 
    dPrice: 40, 
    description: 'High-speed RC car with 2.4GHz control.', 
    images: ['https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?q=80&w=800'] 
  },
  { 
    id: 'p133', 
    categoryId: 'cat1', 
    name: 'LEGO Building Set', 
    cPrice: 85, 
    dPrice: 100, 
    description: 'Creative building blocks for all ages.', 
    images: ['https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800'] 
  },
  { 
    id: 'p134', 
    categoryId: 'cat1', 
    name: 'Strategy Board Game', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Challenging multiplayer strategy game.', 
    images: ['https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=800'] 
  },
  
  // Home & Kitchen
  { 
    id: 'p135', 
    categoryId: 'cat2', 
    name: 'Stainless Steel Knife Set', 
    cPrice: 120, 
    dPrice: 150, 
    description: 'Professional grade kitchen knives.', 
    images: ['https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=800'] 
  },
  { 
    id: 'p136', 
    categoryId: 'cat2', 
    name: 'Non-Stick Frying Pan', 
    cPrice: 45, 
    dPrice: 55, 
    description: 'Eco-friendly non-stick coating.', 
    images: ['https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800'] 
  },
  { 
    id: 'p137', 
    categoryId: 'cat2', 
    name: 'Electric Coffee Maker', 
    cPrice: 90, 
    dPrice: 110, 
    description: 'Programmable drip coffee machine.', 
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800'] 
  },
  { 
    id: 'p138', 
    categoryId: 'cat2', 
    name: 'Mixing Bowl Set', 
    cPrice: 20, 
    dPrice: 30, 
    description: 'Set of 5 nesting stainless steel bowls.', 
    images: ['https://images.unsplash.com/photo-1686472950413-9647efea07d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  
  // Beauty & Personal Care
  { 
    id: 'p139', 
    categoryId: 'cat3', 
    name: 'Hydrating Face Serum', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Hyaluronic acid for glowing skin.', 
    images: ['https://plus.unsplash.com/premium_photo-1764599500228-4f617bc70cc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p140', 
    categoryId: 'cat3', 
    name: 'Matte Liquid Lipstick', 
    cPrice: 15, 
    dPrice: 20, 
    description: 'Long-lasting vibrant lip color.', 
    images: ['https://images.unsplash.com/photo-1752327091756-b24f2764b653?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p141', 
    categoryId: 'cat3', 
    name: 'Sandalwood Body Wash', 
    cPrice: 12, 
    dPrice: 18, 
    description: 'Refreshing organic body wash.', 
    images: ['https://images.unsplash.com/photo-1669212408959-fdde3b2ed6a2?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p142', 
    categoryId: 'cat3', 
    name: 'Professional Hair Dryer', 
    cPrice: 65, 
    dPrice: 80, 
    description: 'Ionic technology for frizz-free hair.', 
    images: ['https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800'] 
  },

  // Automotive
  { 
    id: 'p143', 
    categoryId: 'cat4', 
    name: 'Performance Engine Oil', 
    cPrice: 40, 
    dPrice: 50, 
    description: 'Full synthetic oil for modern engines.', 
    images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800'] 
  },
  { 
    id: 'p144', 
    categoryId: 'cat4', 
    name: 'Portable Car Vacuum', 
    cPrice: 35, 
    dPrice: 45, 
    description: 'Powerful suction for vehicle interiors.', 
    images: ['https://images.unsplash.com/photo-1768387666361-0d2319d716e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p145', 
    categoryId: 'cat4', 
    name: 'Leather Seat Covers', 
    cPrice: 150, 
    dPrice: 200, 
    description: 'Universal fit premium leather protectors.', 
    images: ['https://images.unsplash.com/photo-1564842505181-8862a3b9b173?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p146', 
    categoryId: 'cat4', 
    name: 'Dashboard Camera', 
    cPrice: 80, 
    dPrice: 110, 
    description: '4K resolution with night vision.', 
    images: ['https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?q=80&w=800'] 
  },

  // Health
  { 
    id: 'p147', 
    categoryId: 'cat5', 
    name: 'Digital Blood Pressure Monitor', 
    cPrice: 55, 
    dPrice: 70, 
    description: 'Accurate home health monitoring.', 
    images: ['https://media.istockphoto.com/id/2236973526/photo/digital-device-measuring-blood-pressure-and-pulse-ideal-for-personal-health-and-hypertension.webp?a=1&b=1&s=612x612&w=0&k=20&c=l-XvxRUl8JbKbqG9S7p-UBHrXU9qcnwXe0AdN6z9-Eo='] 
  },
  { 
    id: 'p148', 
    categoryId: 'cat5', 
    name: 'Multivitamin Supplements', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Daily essential nutrients for adults.', 
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800'] 
  },
  { 
    id: 'p149', 
    categoryId: 'cat5', 
    name: 'Yoga Mat (Eco-friendly)', 
    cPrice: 35, 
    dPrice: 45, 
    description: 'High-density padding for workouts.', 
    images: ['https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800'] 
  },
  { 
    id: 'p150', 
    categoryId: 'cat5', 
    name: 'First Aid Kit (100 pcs)', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Emergency medical supplies for home/travel.', 
    images: ['https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800'] 
  },  
];

export const PRODUCTS_LIST: Product[] = [
  // Toys & Games
 { 
    id: 'p51', 
    categoryId: 'cat3', 
    name: 'ELEMIS Pro-Collagen Super Serum Elixir 15ml', 
    cPrice: 85, 
    dPrice: 110, 
    description: 'Advanced anti-ageing serum designed to smooth, firm, and revitalise the skin. Pro-Collagen Renewal Serum helps improve skin elasticity and reduce visible fine lines. Super Elixir delivers a concentrated dose of marine and plant actives.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/ElemisProCollagenSerums_Renewal_SuperElixir_RoseMicroSerum_15ml_30ml_1.png?v=1756246457'] 
  },
  { 
    id: 'p52', 
    categoryId: 'cat3', 
    name: 'L\'Occitane Shea Butter Liquid Soap Verbena 500ml', 
    cPrice: 30, 
    dPrice: 42, 
    description: 'Gentle liquid soap enriched with shea butter to cleanse while maintaining skin\'s natural moisture balance. Fresh verbena fragrance leaves hands and body delicately scented with citrusy notes. Vegan formula suitable for daily use.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/L_OCCITANESheaVerbenaLiquidSoap_Hands_Body_300ml_1.png?v=1756236677'] 
  },
  { 
    id: 'p53', 
    categoryId: 'cat3', 
    name: 'RoC Multi Correxion Anti-Sagging Face Cream 50ml', 
    cPrice: 28, 
    dPrice: 38, 
    description: 'Rich anti-ageing cream developed to target sagging and loss of firmness in mature skin. Helps visibly lift and tighten the face and neck area with continued use. Intensely hydrating formula with hyaluronic acid to restore elasticity.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/RoCMultiCorrexionFirm_LiftRichCream_Face_Neck_50ml_1.png?v=1756233563'] 
  },

  // Automotive Accessories (Affirma Distributors)
  { 
    id: 'p54', 
    categoryId: 'cat4', 
    name: 'Motorcraft FL2016 Oil Filter', 
    cPrice: 18.99, 
    dPrice: 24.99, 
    description: 'Genuine OEM Motorcraft oil filter designed for Ford, Lincoln, and Mercury vehicles. Efficiently captures contaminants to protect your engine. Model number FL2016 ensures reliable and consistent oil filtration.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/Motorcraft_FL2016_Oil_Filter.png?v=1724859014'] 
  },
    { 
    id: 'p88', 
    categoryId: 'cat5', 
    name: 'Sellstrom Reusable Banded Earplugs', 
    cPrice: 4.35, 
    dPrice: 7, 
    description: 'High-quality reusable earplugs designed for industrial, construction, and workplace safety. 25dB noise reduction rating (NRR) helps protect ears from loud environments. Flexible band design allows for a secure fit while resting comfortably. Hi-Vis Green/Blue.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/SellstromReusableBandedEarplugsforWork-WorkSafetyHearingProtection-25dB-Hi-VisGreenBlue_2.png?v=1738577226'] 
  },
  { 
    id: 'p55', 
    categoryId: 'cat4', 
    name: 'Polaris Drive Belt 3211180 OEM CVT Belt', 
    cPrice: 119.99, 
    dPrice: 155, 
    description: 'Designed for RZR XP 1000, XP 4 1000, Trail S & S 1000 Premium Ultimate, General XP 1000, and more. OEM performance CVT belt for reliable power transmission. Runs cooler to reduce wear and extend belt life.', 
    images: ['https://cdn.shopify.com/s/files/1/0662/7278/8665/files/PolarisDriveBeltforRZRXP1000_XP41000_TrailS_S1000PremiumUltimate_GeneralXP1000_XP41000ModelsandMore_RunsCooler_OEMPerformanceCVTBelt_NoClutchRecalibration-3211180_1.png?v=1735755101'] 
  },
  
  
];