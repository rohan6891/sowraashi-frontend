// For static product images, use relative paths from public directory
// For dynamically uploaded images, use API_BASE_URL
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001';

export interface Product {
  id: string;
  name: string;
  category: 'organic' | 'mineral' | 'liquid' | 'granular' | 'specialty' | 'powder' | 'liquids' | 'silk' | 'cotton' | 'designer' | 'bridal' | 'party' | 'casual';
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  usage: string[];
  ingredients: string[];
  safetyTips: string[];
  price: string;
  inStock: boolean;
  application: string;
}

export const products: Product[] = [
  {
    id: 'silk-saree-1',
    name: 'Premium Silk Saree',
    category: 'silk',
    image: '/uploads/1.png',
    shortDescription: 'Elegant silk saree with traditional patterns and rich colors',
    fullDescription: `PREMIUM SILK SAREE COLLECTION:
Exquisite handwoven silk saree featuring traditional motifs and vibrant colors. Perfect for special occasions and celebrations. Made from pure silk with intricate border designs and matching blouse piece.

FEATURES:
- Pure silk fabric
- Traditional handwoven patterns
- Rich color combinations
- Matching blouse piece included
- Perfect for weddings and festivals`,
    features: ['Pure silk fabric', 'Handwoven patterns', 'Traditional motifs', 'Matching blouse piece'],
    usage: ['Perfect for weddings', 'Ideal for festivals', 'Special occasions', 'Cultural events'],
    ingredients: ['100% Pure Silk', 'Natural dyes', 'Gold thread work', 'Traditional weaving'],
    safetyTips: ['Dry clean only', 'Store in cotton cloth', 'Avoid direct sunlight', 'Handle with care'],
    price: '₹8,500',
    inStock: true,
    application: 'Traditional Wear'
  },
  {
    id: 'designer-saree-2',
    name: 'Designer Collection Saree',
    category: 'designer',
    image: '/uploads/2.png',
    shortDescription: 'Contemporary designer saree with modern patterns and elegant finish',
    fullDescription: `DESIGNER COLLECTION SAREE:
Stunning designer saree crafted with modern aesthetics and contemporary patterns. Features unique color combinations and innovative design elements. Perfect for parties and social gatherings.

FEATURES:
- Contemporary design
- Modern color palette
- Innovative patterns
- Premium fabric quality
- Designer blouse piece`,
    features: ['Contemporary design', 'Modern patterns', 'Premium fabric', 'Designer blouse'],
    usage: ['Party wear', 'Social gatherings', 'Corporate events', 'Fashion shows'],
    ingredients: ['Premium fabric blend', 'Modern dyes', 'Designer embellishments', 'Quality finishing'],
    safetyTips: ['Gentle wash recommended', 'Iron on low heat', 'Store properly', 'Avoid harsh chemicals'],
    price: '₹12,000',
    inStock: true,
    application: 'Party Wear'
  },
  {
    id: 'bridal-saree-3',
    name: 'Bridal Special Saree',
    category: 'bridal',
    image: '/uploads/3.png',
    shortDescription: 'Luxurious bridal saree with heavy embroidery and golden work',
    fullDescription: `BRIDAL SPECIAL SAREE:
Magnificent bridal saree designed for your most special day. Features heavy embroidery work, golden threads, and luxurious fabric. Comes with matching accessories and designer blouse.

FEATURES:
- Heavy embroidery work
- Golden thread detailing
- Luxurious fabric
- Matching accessories
- Custom fitting available`,
    features: ['Heavy embroidery', 'Golden thread work', 'Luxurious fabric', 'Matching accessories'],
    usage: ['Wedding ceremonies', 'Bridal occasions', 'Reception parties', 'Special celebrations'],
    ingredients: ['Premium silk', 'Gold threads', 'Heavy embroidery', 'Designer elements'],
    safetyTips: ['Professional cleaning only', 'Careful storage required', 'Handle embroidery gently', 'Avoid moisture'],
    price: '₹25,000',
    inStock: true,
    application: 'Bridal Wear'
  },
  {
    id: 'cotton-saree-4',
    name: 'Pure Cotton Saree',
    category: 'cotton',
    image: '/uploads/4.png',
    shortDescription: 'Comfortable cotton saree perfect for daily wear and casual occasions',
    fullDescription: `PURE COTTON SAREE:
Comfortable and breathable cotton saree ideal for daily wear. Features simple yet elegant patterns with soft colors. Perfect for office wear and casual occasions.

FEATURES:
- 100% pure cotton
- Breathable fabric
- Comfortable wear
- Easy maintenance
- Affordable pricing`,
    features: ['Pure cotton fabric', 'Breathable material', 'Easy maintenance', 'Comfortable fit'],
    usage: ['Daily wear', 'Office wear', 'Casual occasions', 'Home wear'],
    ingredients: ['100% Cotton', 'Natural dyes', 'Soft finishing', 'Quality weaving'],
    safetyTips: ['Machine washable', 'Iron on medium heat', 'Air dry recommended', 'Store in dry place'],
    price: '₹2,500',
    inStock: true,
    application: 'Casual Wear'
  },
  {
    id: 'party-saree-5',
    name: 'Party Wear Saree',
    category: 'party',
    image: '/uploads/5.png',
    shortDescription: 'Glamorous party wear saree with shimmer and contemporary design',
    fullDescription: `PARTY WEAR SAREE:
Glamorous saree designed for parties and social events. Features shimmer work, contemporary patterns, and vibrant colors. Perfect for making a style statement.

FEATURES:
- Shimmer and glitter work
- Contemporary design
- Vibrant colors
- Lightweight fabric
- Easy draping`,
    features: ['Shimmer work', 'Contemporary design', 'Vibrant colors', 'Lightweight fabric'],
    usage: ['Party occasions', 'Social events', 'Celebrations', 'Night functions'],
    ingredients: ['Synthetic blend', 'Shimmer threads', 'Modern dyes', 'Quality finishing'],
    safetyTips: ['Dry clean preferred', 'Avoid rough handling', 'Store carefully', 'Iron on low heat'],
    price: '₹6,500',
    inStock: true,
    application: 'Party Wear'
  },
  {
    id: 'casual-saree-6',
    name: 'Casual Elegant Saree',
    category: 'casual',
    image: '/uploads/6.png',
    shortDescription: 'Elegant casual saree suitable for various occasions and comfortable wear',
    fullDescription: `CASUAL ELEGANT SAREE:
Versatile saree perfect for various occasions. Combines comfort with elegance, featuring subtle patterns and pleasant colors. Ideal for both casual and semi-formal events.

FEATURES:
- Versatile design
- Comfortable fabric
- Subtle patterns
- Pleasant colors
- Easy maintenance`,
    features: ['Versatile design', 'Comfortable fabric', 'Subtle patterns', 'Easy maintenance'],
    usage: ['Casual occasions', 'Semi-formal events', 'Family functions', 'Regular wear'],
    ingredients: ['Quality fabric blend', 'Soft finishing', 'Natural colors', 'Durable weaving'],
    safetyTips: ['Gentle wash', 'Medium heat ironing', 'Proper storage', 'Avoid bleaching'],
    price: '₹4,000',
    inStock: true,
    application: 'Casual Wear'
  },
  {
    id: 'greengro',
    name: 'GREENGRO',
    category: 'liquids',
    image: '/uploads/7.png',
    shortDescription: 'Premium organic growth enhancer for sustainable agriculture',
    fullDescription: `BENEFIT OF GREENGRO:
As liquid fertilizers highly soluble and easily available. Quick response from nitrate, longer lasting from ammonical and sustained feeding from the water- soluble nitrogen in urea. More uniform application, precise dosage of distribution over the area. Solution is rapidly available to plants for a longer period during its growth. Compatible with other fertilizers.

RECOMMENDED DOSAGE:
Foliar Spray 2-4 ml per litre of water
Drip : 500ml/acre.

COMPOSITION:
Urea Ammonium Nitrate(32%) (Liquid)`,
    features: ['100% organic ingredients', 'Promotes root development', 'Improves soil structure', 'Safe for all crops'],
    usage: ['Apply 2-4 kg per acre', 'Mix with soil before planting', 'Reapply every 4-6 weeks', 'Water thoroughly after application'],
    ingredients: ['Organic compost', 'Seaweed extract', 'Humic acid', 'Beneficial microbes'],
    safetyTips: ['Wear gloves when handling', 'Store in cool, dry place', 'Keep away from children', 'Wash hands after use'],
    price: '₹1,250',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'x-spa80',
    name: 'X-SPA80',
    category: 'liquids',
    image: '/uploads/8.png',
    shortDescription: 'nonionic spray adjuvants',
    fullDescription: `BENEFIT OF X-SPA80:
X-spa80 is highly concentrated nonionic wetting agent with 80% active ingredients. As an Sticker - Activator - Spreader, it activates the spray fluid to moisten the plant surface and allows uniform spreading of spray deposits. powerful tool in irrigation with improves the water absorption in soil, it facilitates uniform mixing of powders, pesticides & most liquid fertilizers, it is non corrosive to spray equipment and prevents clogged nozzles. Safe & environment friendly.

RECOMMENDED DOSAGE:
5ml in 15 ltrs. of water - for insecticides, fungicides, foliar spray, plant growth nutrients. 20ml in 15 ltrs.of water herbicides.`,
    features: ['Fast absorption', 'High concentration', 'Balanced NPK ratio', 'Foliar application ready'],
    usage: ['Dilute 1:100 with water', 'Apply every 2-3 weeks', 'Can be used as foliar spray', 'Avoid application during hot sun'],
    ingredients: ['NPK fertilizer', 'Micronutrients', 'Amino acids', 'Growth hormones'],
    safetyTips: ['Use protective equipment', 'Avoid skin contact', 'Store in original container', 'Keep refrigerated after opening'],
    price: '₹1,800',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'silicron',
    name: 'Silicron',
    category: 'liquids',
    image: '/uploads/9.png',
    shortDescription: 'nonionic spray adjuvants',
    fullDescription: `BENEFIT OF SILICRON:
1. Super spreading: acti-silion solution spreads quickly, carrying insecticides into pests and carrying fungicides on those crop canopy, prone to infection by diseases. it assist herbicides to kill weeds uniformly in shorter duration
2. Silicron is useful for faster & enhanced spreading while spraying agrochemicals
3. Silicron can be used effectively in all seasons & for all types of crops
4. Improves rainfastness-due to increased uptake, the solution doesn't wash off even if it rains after few minutes.

COMPOSITION:
Silicone Based Super Spreader`,
    features: ['Silicon enrichment', 'Disease resistance', 'Stress tolerance', 'Improved yield'],
    usage: ['Apply 1-2 kg per acre', 'Mix with irrigation water', 'Apply during early growth', 'Use monthly during growing season'],
    ingredients: ['Soluble silicon', 'Potassium silicate', 'Micronutrients', 'Organic acids'],
    safetyTips: ['Wear protective clothing', 'Avoid inhalation', 'Store in sealed container', 'Keep dry'],
    price: '₹1,450',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'swarna',
    name: 'Swarna',
    category: 'liquids',
    image: '/uploads/1.png',
    shortDescription: 'N.P Complex Fertilizer',
    fullDescription: `BENEFIT OF SWARNA:
Bio availability of N&P nutrients are higher. Excellent liquid phosphatic fertilizer. Suitable for foliar and root application. Can be mixed with other agrochemicals other than Copper, Zinc, Sulphate based compounds.

RECOMMENDED DOSAGE:
Foliar spray : 5ml per litre of water
Root Application : 10 ml per litre of water during the early establishment stage of crop growth.

COMPOSITION:
Ammonium Poly-phosphate (10-34-0) (Liquid)`,
    features: ['Premium organic formula', 'Enhanced crop quality', 'Rich in nutrients', 'Soil conditioning'],
    usage: ['Apply 3-5 kg per acre', 'Work into soil before planting', 'Side-dress growing crops', 'Water thoroughly'],
    ingredients: ['Organic matter', 'Composted manure', 'Rock phosphate', 'Kelp meal'],
    safetyTips: ['Safe for organic farming', 'Store in dry location', 'Keep away from pets', 'Use clean tools'],
    price: '₹1,350',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'wake-up',
    name: 'Wake Up',
    category: 'liquids',
    image: '/uploads/2.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF WAKE UP:
Wake up contains organic constituents like humic, humates & Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to increase permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability & enzyme activity.

RECOMMENDED DOSAGE:
Two soil applications at 1.25 Ltr/ha.
For Foliar Spray: 500ml of Wake up in -200ltr of water

COMPOSITION:
Humates and Fulvates-22% (Liquid)`,
    features: ['Growth stimulation', 'Stress recovery', 'Quick absorption', 'Revitalizing formula'],
    usage: ['Apply to stressed plants', 'Use 1:50 dilution', 'Apply every 7-10 days', 'Avoid over-application'],
    ingredients: ['Growth hormones', 'Amino acids', 'Micronutrients', 'Seaweed extract'],
    safetyTips: ['Follow dilution rates', 'Monitor plant response', 'Store in cool place', 'Use within 6 months'],
    price: '₹1,600',
    inStock: true,
    application: 'Groundnut'
  },
  {
    id: 'rich-roots',
    name: 'Rich Roots',
    category: 'liquids',
    image: '/uploads/3.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF RICH ROOTS:
1. Rich Roots contains organic constituents like humic, humates and Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability and enzyme activity.
2. Humic acids build up organic matter which is required for microbial growth. It stimulates the respiration rates of seeding which leads quicker germination.
3. It also protects plants from chlorosis, enhance photosynthesis, increases vegetative growth which results in higher yields & healthier crops.

RECOMMENDED DOSAGE:
Two soil applications at 5 Ltr/ha.
For Foliar Spray: 500ml of Rich Roots in -200ltr of water

COMPOSITION:
Humates 12.5% (Liquid)`,
    features: ['Root development', 'Beneficial microbes', 'Slow-release formula', 'Soil structure improvement'],
    usage: ['Apply at planting time', 'Work into root zone', 'Use 2-3 kg per acre', 'Water thoroughly'],
    ingredients: ['Phosphorus compounds', 'Mycorrhizal fungi', 'Organic matter', 'Trace elements'],
    safetyTips: ['Avoid contact with stems', 'Water in thoroughly', 'Store in cool, dry place', 'Use before expiration'],
    price: '₹1,400',
    inStock: true,
    application: 'Green Gram'
  },
  {
    id: 'lasya',
    name: 'Lasya',
    category: 'liquids',
    image: '/uploads/4.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF LASYA:
Improves photosynthesis in plants & entire plant will become greenish. It will help to overcome micronutrient deficiency in all crop. Repeated application with 15-20 days interval will keep crop Healthy Better growth. Improves disease resistance in all crops.

RECOMMENDED DOSAGE:
2-3ml / 1Ltr. of Water.

COMPOSITION:
Seaweed Extract - 15%
Organic botanical extract- 10%`,
    features: ['Flower enhancement', 'Color vibrancy', 'Ornamental plant formula', 'Bloom promotion'],
    usage: ['Apply monthly during growing season', 'Use 1-2 kg per 100 sq ft', 'Water after application', 'Reduce in winter'],
    ingredients: ['Phosphorus-rich formula', 'Potassium compounds', 'Micronutrients', 'Organic acids'],
    safetyTips: ['Avoid over-fertilization', 'Monitor plant response', 'Store in sealed container', 'Keep away from children'],
    price: '₹1,550',
    inStock: true,
    application: 'Green Gram'
  },
  {
    id: 'root-booster',
    name: 'Root Booster',
    category: 'powder',
    image: '/uploads/5.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF ROOT BOOSTER:
Improves physical, chemical and biological properties of soil. increases aeration and water holding capacity of soil. improves effectiveness of metallic fungicides.

RECOMMENDED DOSAGE:
Drip irrigation : 1-2 kg/acre / Drenching : 2-3 gm/litre water

COMPOSITION:
Potassium Humate 49% (Powder)`,
    features: ['Advanced root development', 'Soil conditioning', 'Beneficial microorganisms', 'Long-lasting effect'],
    usage: ['Apply at transplanting', 'Work into planting hole', 'Use 1-2 kg per acre', 'Water deeply'],
    ingredients: ['Root stimulants', 'Beneficial bacteria', 'Organic matter', 'Essential nutrients'],
    safetyTips: ['Handle with care', 'Store in moisture-proof container', 'Use clean equipment', 'Follow application rates'],
    price: '₹1,650',
    inStock: true,
    application: 'Paddy'
  },
  {
    id: 'jeevan-plus',
    name: 'JEEVAN PLUS',
    category: 'liquids',
    image: '/uploads/6.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF JEEVAN PLUS:
1. Jeevan Plus contains organic constituents like humic, humates and Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability and enzyme activity.
2. Humic acids build up organic matter which is required for microbial growth. It stimulates the respiration rates of seeding which leads quicker germination.
3. It also protects plants from chlorosis, enhance photosynthesis, increases vegetative growth which results in higher yields & healthier crops.

RECOMMENDED DOSAGE:
Two soil applications at 5 Ltr/ha.
For Foliar Spray: 500ml of Jeevan Plus in -200ltr of water

COMPOSITION:
Humates 12.5% (Liquid)`,
    features: ['Life enhancement', 'Sustainable farming', 'Soil vitality', 'Organic certification'],
    usage: ['Apply 4-6 kg per acre', 'Mix with soil before planting', 'Reapply every 6-8 weeks', 'Maintain soil moisture'],
    ingredients: ['Organic compost', 'Vermicompost', 'Neem cake', 'Rock minerals'],
    safetyTips: ['Safe for organic production', 'Store in dry location', 'Compostable packaging', 'Natural ingredients only'],
    price: '₹1,300',
    inStock: true,
    application: 'Green Gram'
  },
  {
    id: 'g-bor',
    name: 'G-BOR',
    category: 'powder',
    image: '/uploads/7.png',
    shortDescription: 'Micronutrients',
    fullDescription: `BENEFIT OF G-BOR:
1. It Play Vital Role in Proper Development of Roots and Shoots.
2. Germination, Metabolic Process Can Be Improved,
3. Flowering, Tillering and Fruit Formation Will Be Improved,

RECOMMENDED DOSAGE:
Apply 2gms | 1ltrs of water as a foliar application
Crops recommended : paddy, maize, sugarcane, cotton, fruits, all vegetables crop like potato, tomato horticulture crops and plantation crops.

COMPOSITION:
BORON 20%`,
    features: ['Boron enrichment', 'Fruit quality improvement', 'Seed development', 'Deficiency correction'],
    usage: ['Apply 1-2 kg per acre', 'Mix with irrigation water', 'Apply during flowering', 'Use as needed'],
    ingredients: ['Boron compounds', 'Micronutrients', 'Soluble minerals', 'Chelated elements'],
    safetyTips: ['Follow application rates', 'Monitor soil levels', 'Store in sealed container', 'Avoid over-application'],
    price: '₹1,750',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'combi-pro',
    name: 'Combi Pro',
    category: 'powder',
    image: '/uploads/8.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF COMBI PRO:
1. Combi Pro is 100% water soluble formulation containing microelements in chelated form those are needed by crops. these vital nutrients are in readily available form.
2. Combi Pro corrects all deficiencies those occur due to non - availability of micro elements.
3. Combi Pro Helps to increase the uptake of major & secondary nutrients.
4. Combi Pro Helps to plants for healthy & growth. Micronutrients in Combi Pro get completely absorbed by plants & quickly supplied to all plant parts.
5. Combi Pro increase the quality & yield in all crops.
6. Combi Pro Helps to increase the disease resistance power of crops.

RECOMMENDED DOSAGE:
1 to 1.2g / Liter of water

COMPOSITION:
Zn-3.0%. Fe-2.0%. Mn-1.0%. B-0.5%`,
    features: ['Professional formula', 'All-crop suitability', 'Balanced nutrition', 'Customizable application'],
    usage: ['Dilute according to crop', 'Apply every 2-4 weeks', 'Foliar or soil application', 'Adjust for crop stage'],
    ingredients: ['NPK compounds', 'Micronutrients', 'Amino acids', 'Growth regulators'],
    safetyTips: ['Follow professional guidelines', 'Use protective equipment', 'Store properly', 'Monitor crop response'],
    price: '₹2,100',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'sparsha',
    name: 'Sparsha',
    category: 'powder',
    image: '/uploads/9.png',
    shortDescription: 'Micronutrients',
    fullDescription: `BENEFIT OF SPARSHA:
1. Zinc in far more effective than Zinc Sulphate so far as uptake is concerned.
2. Zinc is easily translocated within the plants.
3. Zinc being Chelated is readily absorbed by the roots & assimilated within the plant system. In case of zinc sulphate, zinc when reacts with phosphorus in the soil gets precipitated & hence is not available to plants.
4. Zinc can be easily mixed with N-P-K foliar spraying or any other micronutrients fertilizer without forming any insoluble precipitate.
5. Zinc is environment friendly safe to human beings & plants.

RECOMMENDED DOSAGE:
Soil Application:
Field Crops:
1) Severe Deficiency: 0.5 to 1.0 kg/acre
2) Maintenance: 0.25 to 0.5 kg/acre
Fruit Crops:
Apply: 0.25 to 0.50 kg/acre
Foliar Spray: 50 to 100 grams per 100 liters of water

COMPOSITION:
CHELATED ZINC AS ZN-EDTA (12%Zn)`,
    features: ['Touch-responsive', 'Gentle formula', 'Controlled release', 'Sensitive crop safe'],
    usage: ['Apply gently to soil', 'Use 1-2 kg per acre', 'Monitor plant response', 'Adjust as needed'],
    ingredients: ['Slow-release compounds', 'Organic acids', 'Micronutrients', 'pH stabilizers'],
    safetyTips: ['Handle with care', 'Monitor plant health', 'Store in cool place', 'Follow application guidelines'],
    price: '₹1,850',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'shine-citrus',
    name: 'Shine Citrus',
    category: 'liquids',
    image: '/uploads/1.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF SHINE CITRUS:
1. Shine Citrus will help better utilisation of major nutrients.
2. Shine Citrus will help to increase the immunity power of plants against adverse conditions.
3. Shine Citrus will take part in enzymatic functions and act as a catalytic agent to produce vigorous growth.
4. Shine Citrus will help to increase yield and quality of the farm produce.

RECOMMENDED DOSAGE:
Shine Citrus 3-5ml per 1 litre of water, Depending upon the Crop age & Growth Stages.
* Shine Citrus is recommended for Citrus crops,

COMPOSITION:
Zn-3.0%. Fe-05%. B-0.5%.`,
    features: ['Citrus-specific formula', 'Fruit quality enhancement', 'Disease resistance', 'Abundant production'],
    usage: ['Apply monthly during growing season', 'Spread around drip line', 'Use 2-3 kg per tree', 'Water deeply'],
    ingredients: ['Citrus-specific nutrients', 'Iron compounds', 'Magnesium sulfate', 'Zinc oxide'],
    safetyTips: ['Avoid contact with fruit', 'Water after application', 'Store in cool area', 'Use within 2 years'],
    price: '₹1,900',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'micro',
    name: 'Micro',
    category: 'liquids',
    image: '/uploads/2.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF MICRO STAR:
1. MICRO STAR will help better utilisation of major nutrients.
2. MICRO STAR will help to increase the immunity power of plants against adverse conditions.
3. MICRO STAR will take part in enzymatic functions and act as a catalytic agent to produce vigorous growth.
4. MICRO STAR will help to increase yield and quality of the farm produce.
5. MICRO STAR is recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops.

RECOMMENDED DOSAGE:
500ml of Micro Star in -200ltr of water per acre. A different product among all general liquid with unique quality.

COMPOSITION:
Zn-3.0%.Fe-2.0%. B-1.0%.`,
    features: ['Complete micronutrients', 'Deficiency correction', 'Optimal nutrition', 'Trace element balance'],
    usage: ['Apply 0.5-1 kg per acre', 'Mix with irrigation water', 'Apply during growth stages', 'Use as needed'],
    ingredients: ['Zinc sulfate', 'Iron chelates', 'Manganese compounds', 'Copper sulfate'],
    safetyTips: ['Follow application rates', 'Monitor plant response', 'Store in sealed container', 'Avoid over-application'],
    price: '₹1,600',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'mango-king',
    name: 'Mango King',
    category: 'liquids',
    image: '/uploads/3.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF MANGO KING:
1. Better utilization of major nutrients.
2. Increased immunity power of plants against adverse conditions.
3. Increased yield and quality of farm produce.
4. Participation in enzymatic functions and acting as a catalytic agent for vigorous growth.

RECOMMENDED DOSAGE:
500ml of Mango King in 200 liters of water per acre.
Repeated application with a 15-20 day interval will keep the crop healthy.

COMPOSITION:
Zn-3.0% (Zinc)
Fe-2.0% (Iron)
B-0.5% (Boron)`,
    features: ['Mango-specific formula', 'Tropical fruit support', 'Flowering enhancement', 'Premium quality'],
    usage: ['Apply 3-4 times per year', 'Spread around tree base', 'Use 3-5 kg per tree', 'Water thoroughly'],
    ingredients: ['Tropical fruit nutrients', 'Flowering stimulants', 'Organic matter', 'Beneficial microbes'],
    safetyTips: ['Avoid trunk contact', 'Water deeply after application', 'Store in dry place', 'Follow seasonal timing'],
    price: '₹2,200',
    inStock: true,
    application: 'Mango & Tropical Fruits'
  },
  {
    id: 'green-pro',
    name: 'Green Pro',
    category: 'liquids',
    image: '/uploads/4.png',
    shortDescription: 'straight nitrogenous fertilizer',
    fullDescription: `BENEFIT OF GREEN PRO:
1. Green Pro will help better utilisation of major nutrients.
2. Green Pro will help to increase the immunity power of plants against adverse conditions.
3. Green Pro will take part in enzymatic functions and act as a catalytic agent to produce vigorous growth.
4. Green Pro will help to increase yield and quality of the farm produce.

RECOMMENDED DOSAGE:
Use Green Pro 3-5ml per 1 litre of water, Depending upon the Crop age & Growth Stages.

COMPOSITION:
Zn-3.0%, Fe-1.5%, B-0.5%.`,
    features: ['Professional grade', 'Commercial farming', 'Consistent nutrition', 'Large-scale application'],
    usage: ['Apply 5-8 kg per acre', 'Broadcast application', 'Reapply every 6-8 weeks', 'Maintain soil moisture'],
    ingredients: ['Organic compost', 'Animal manure', 'Rock minerals', 'Beneficial microbes'],
    safetyTips: ['Use appropriate equipment', 'Store in bulk containers', 'Follow safety protocols', 'Monitor crop response'],
    price: '₹1,800',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'green-care',
    name: 'Green Care',
    category: 'liquids',
    image: '/uploads/5.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF GREEN CARE:
1. Green Care will help better utilisation of major nutrients.
2. Green Care will help to increase the immunity power of plants against adverse conditions.
3. Green Care will take part in enzymatic functions and act as a catalytic agent to produce vigorous growth.
4. Green Care will help to increase yield and quality of the farm produce.

RECOMMENDED DOSAGE:
Green Care 3-5ml per 1 litre of water, Depending upon the Crop age & Growth Stages.
Green Care is recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops.

COMPOSITION:
Zn-3.0%. Fe-0.5%. Mn-0.2%. B-0.5%.`,
    features: ['Gentle formula', 'Regular maintenance', 'Stress-free application', 'Consistent nutrition'],
    usage: ['Apply every 2-3 weeks', 'Dilute 1:100 with water', 'Foliar or soil application', 'Adjust for plant type'],
    ingredients: ['Balanced nutrients', 'Organic acids', 'Micronutrients', 'Growth promoters'],
    safetyTips: ['Follow dilution rates', 'Monitor plant health', 'Store in cool place', 'Use clean equipment'],
    price: '₹1,450',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'melon-soil',
    name: 'Melon Soil',
    category: 'powder',
    image: '/uploads/6.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF MELON SOIL +:
1. Improves photosynthesis in plants and entire plants will become greenish.
2. It will overcome micronutrient deficiency in all crops.
3. Application of Melon soil improves and increases uptake of nutrients available in soil.
4. It contains both macro and micro nutrient in a balance proportion.
5. Improve disease resistance in all crops.
6. Required in small quantity but increases yield both qualitative and quantitatively.

RECOMMENDED DOSAGE:
2 to 3 kg Per acre.

COMPOSITION:
Zn-10.0%. Fe-5.0%. Mn-2.0%. B-0.3%.`,
    features: ['Cucurbit-specific formula', 'Sweet fruit enhancement', 'Vine health support', 'Disease resistance'],
    usage: ['Apply at planting', 'Side-dress during growth', 'Use 2-3 kg per 100 sq ft', 'Water regularly'],
    ingredients: ['Cucurbit nutrients', 'Potassium compounds', 'Organic matter', 'Beneficial microbes'],
    safetyTips: ['Avoid fruit contact', 'Water after application', 'Store in dry place', 'Follow application timing'],
    price: '₹1,700',
    inStock: true,
    application: 'Melons & Cucurbits'
  },
  {
    id: 'sun-shine',
    name: 'Sun Shine',
    category: 'liquids',
    image: '/uploads/7.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF SUN SHINE:
1. Sun Shine will help better utilisation of major nutrients.
2. Sun Shine will help to increase the immunity power of plants against adverse conditions.
3. Sun Shine will take part in enzymatic functions and act as a catalytic agent to produce vigorous growth.
4. Sun Shine will help to increase yield and quality of the farm produce.

RECOMMENDED DOSAGE:
Use Sun Shine 3-5 ml per 1 litre of water, Depending upon the Crop age & Growth Stages.
Sun Shine is recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops.

COMPOSITION:
Zn-3.0%. B-0.5%.`,
    features: ['Sun-powered formula', 'Photosynthesis enhancement', 'Vibrant growth', 'Natural compounds'],
    usage: ['Apply in morning hours', 'Use 2-4 kg per acre', 'Reapply every 4-6 weeks', 'Maintain adequate sunlight'],
    ingredients: ['Natural compounds', 'Organic matter', 'Photosynthesis enhancers', 'Beneficial microbes'],
    safetyTips: ['Apply during daylight', 'Ensure adequate sunlight', 'Store in cool place', 'Follow application rates'],
    price: '₹1,550',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'melon-plus',
    name: 'Melon Plus',
    category: 'liquids',
    image: '/uploads/8.png',
    shortDescription: 'Micronutrient Mixture Fertilizers',
    fullDescription: `BENEFIT OF MELON PLUS:
1. Improves photosynthesis in plants and entire plants will become greenish.
2. It will help to overcome micronutrient deficiency in all crops.
3. It contains both macro and micro nutrient along with plant Harmons.
4. Application of Melon plus improves and Increases uptake of nutrients available in soil.
5. Improves disease resistance in all crops.
6. Required in small quantity but increases yield both qualitative and quantitatively.
7. Repeated application with 15-20 days interval will keep crop Healthy better.

RECOMMENDED DOSAGE:
500ml of Melon plus in ~200ltr of water per acre. A different product among all general liquid with unique quality.

COMPOSITION:
Zn-3.0%, Fe-2.0%, Mn-1.0%, B-0.5%`,
    features: ['Enhanced melon formula', 'Maximum yield', 'Quality improvement', 'Advanced nutrition'],
    usage: ['Apply at key growth stages', 'Use 3-4 kg per 100 sq ft', 'Water deeply', 'Monitor fruit development'],
    ingredients: ['Enhanced nutrients', 'Quality promoters', 'Organic matter', 'Beneficial microbes'],
    safetyTips: ['Follow growth stage timing', 'Monitor fruit quality', 'Store properly', 'Use clean equipment'],
    price: '₹1,900',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'super-grow',
    name: 'Super Grow',
    category: 'liquids',
    image: '/uploads/9.png',
    shortDescription: 'nature biostimulants',
    fullDescription: `BENEFIT OF SUPER GROW:
Super Grow contains organic constituents like humic, humates & Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to increase permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient's availability & enzyme activity.

RECOMMENDED DOSAGE:
Two soil applications at 1.25 Ltr/ha.
For Foliar Spray: 500ml of Super Grow in 200ltr of water

COMPOSITION:
Humates and Fulvates-22% (Liquid)`,
    features: ['Organic constituents', 'Humic and fulvic acids', 'Essential trace elements', 'Increased nutrient availability'],
    usage: ['Two soil applications at 1.25 Ltr/ha', 'Foliar spray: 500ml in 200L water', 'Apply during growing season', 'Reapply as needed'],
    ingredients: ['Humates 22%', 'Fulvates', 'Essential trace elements', 'Organic acids'],
    safetyTips: ['Follow recommended dosage', 'Store in cool, dry place', 'Keep away from children', 'Use protective equipment'],
    price: '₹1,500',
    inStock: true,
    application: 'Groundnut'
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'liquids', name: 'Liquids', count: products.filter(p => p.category === 'liquids').length },
  { id: 'powder', name: 'Powder', count: products.filter(p => p.category === 'powder').length },
  { id: 'organic', name: 'Organic', count: products.filter(p => p.category === 'organic').length },
  { id: 'liquid', name: 'Liquid', count: products.filter(p => p.category === 'liquid').length },
  { id: 'granular', name: 'Granular', count: products.filter(p => p.category === 'granular').length },
  { id: 'specialty', name: 'Specialty', count: products.filter(p => p.category === 'specialty').length },
  { id: 'mineral', name: 'Mineral', count: products.filter(p => p.category === 'mineral').length }
];