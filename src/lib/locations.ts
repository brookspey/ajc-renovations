export type Location = {
  name: string;
  slug: string;
  county: "Palm Beach";
  zip: string[];
  population: string;
  medianHomeAge: string;
  medianHomeValue: string;
  character: string;
  climate: string;
  housing: string;
  nearbyLocations: string[];
};

export const LOCATIONS = [
  {
    name: "Jupiter",
    slug: "jupiter",
    county: "Palm Beach",
    zip: ["33458", "33468", "33469", "33477", "33478"],
    population: "~65,000",
    medianHomeAge: "1990s to 2000s construction",
    medianHomeValue: "$550,000 - $750,000",
    character:
      "Jupiter blends a laid-back coastal lifestyle with upscale amenities, anchored by the iconic Jupiter Inlet Lighthouse and miles of pristine waterfront. The town attracts families and professionals drawn to top-rated schools, world-class golf courses, and a vibrant dining scene along Indiantown Road and the Riverwalk.",
    climate:
      "Exposed to Atlantic coastal winds with moderate salt air corrosion risk. Eastern neighborhoods sit within FEMA flood zones A and AE near the Loxahatchee River and Intracoastal. Humidity is tempered by consistent ocean breezes, but summer afternoon storms are frequent and intense.",
    housing:
      "Mix of Mediterranean-revival and coastal-contemporary single-family homes, many in master-planned communities with HOAs. Waterfront estates along the Intracoastal and Jupiter Inlet command premium values. Concrete block construction dominates post-1990 builds.",
    nearbyLocations: ["jupiter-farms", "palm-beach-gardens", "westlake"],
  },
  {
    name: "Jupiter Farms",
    slug: "jupiter-farms",
    county: "Palm Beach",
    zip: ["33478"],
    population: "~13,000",
    medianHomeAge: "1980s to 1990s construction",
    medianHomeValue: "$550,000 - $700,000",
    character:
      "Jupiter Farms is a rural, unincorporated community where 1.25-acre minimum lot sizes give residents space for horses, hobby farms, and a quieter pace of life. The area has no streetlights or sidewalks by design, preserving its country feel while sitting just minutes from Jupiter's coastal conveniences.",
    climate:
      "Inland location means less salt air but higher humidity and less wind relief than coastal areas. Low-lying parcels near the C-18 canal corridor are susceptible to seasonal flooding. Summer heat indexes regularly exceed 105 degrees without the moderating coastal breeze.",
    housing:
      "Predominantly single-family CBS homes on large acreage lots, many with detached barns, workshops, or accessory structures. Minimal HOA presence. Homes range from modest ranch-style builds from the 1980s to newer custom estates. Septic systems and private wells are common.",
    nearbyLocations: ["jupiter", "westlake", "palm-beach-gardens"],
  },
  {
    name: "Lantana",
    slug: "lantana",
    county: "Palm Beach",
    zip: ["33462"],
    population: "~12,000",
    medianHomeAge: "1960s to 1970s construction",
    medianHomeValue: "$350,000 - $500,000",
    character:
      "Lantana is a small, unpretentious town squeezed between Lake Worth and Boynton Beach with direct access to the ocean via the Lantana Beach. Its compact downtown along Ocean Avenue has a local, no-frills charm, and the town serves as an affordable gateway to coastal living in southern Palm Beach County.",
    climate:
      "Coastal exposure with direct Atlantic frontage means high salt air and wind-driven rain during storms. Much of the town sits at low elevation between the Intracoastal Waterway and the ocean, placing many properties in FEMA AE flood zones. Humidity is persistently high year-round.",
    housing:
      "Older CBS and frame construction from the 1950s through 1970s dominates, with many smaller ranch-style homes and duplexes. Condo and townhome communities line A1A and the Intracoastal. Many homes have original windows, roofing, and electrical systems in need of renovation. Limited HOA coverage in single-family areas.",
    nearbyLocations: ["boynton-beach", "greenacres", "delray-beach"],
  },
  {
    name: "Westlake",
    slug: "westlake",
    county: "Palm Beach",
    zip: ["33470"],
    population: "~10,000",
    medianHomeAge: "2018 to present construction",
    medianHomeValue: "$450,000 - $600,000",
    character:
      "Westlake is one of Palm Beach County's newest cities, incorporated in 2016 and built almost entirely by Minto Communities. It is a master-planned, self-contained community with new schools, parks, and a town center, designed for families seeking modern amenities in a western suburban setting.",
    climate:
      "Inland location west of the Turnpike means higher heat exposure and less coastal breeze. The community was engineered with modern stormwater management, but surrounding areas along the L-8 canal can experience seasonal water table rise. Afternoon thunderstorms with heavy downpours are a regular summer occurrence.",
    housing:
      "Almost exclusively new-construction single-family homes in a master-planned community with mandatory HOA. Architectural styles lean toward transitional and coastal-contemporary with concrete block and stucco. All homes feature modern hurricane impact windows and current Florida Building Code standards.",
    nearbyLocations: ["jupiter-farms", "jupiter", "royal-palm-beach"],
  },
  {
    name: "Greenacres",
    slug: "greenacres",
    county: "Palm Beach",
    zip: ["33413", "33415", "33454", "33463", "33467"],
    population: "~43,000",
    medianHomeAge: "1970s to 1980s construction",
    medianHomeValue: "$300,000 - $400,000",
    character:
      "Greenacres is a working-class, family-oriented city west of Lake Worth with a diverse population and an affordable cost of living by Palm Beach County standards. The Jog Road and Lake Worth Road commercial corridors provide everyday conveniences, and the city's central location offers easy access to both the coast and western communities.",
    climate:
      "Inland enough to avoid direct salt air but still within the county's high-humidity zone. Some neighborhoods near the E-4 and L-14 canals experience elevated flood risk during heavy rain events. Heat island effects are more pronounced due to distance from the coast and denser development patterns.",
    housing:
      "Predominantly CBS single-family homes and townhomes built between the 1970s and 1990s, many in small subdivisions with modest HOA fees. Flat tile and shingle roofs are common. Many homes still have original single-pane windows, aluminum wiring, and aging HVAC systems. Affordable entry point for renovations.",
    nearbyLocations: ["wellington", "lantana", "royal-palm-beach", "boynton-beach"],
  },
  {
    name: "Wellington",
    slug: "wellington",
    county: "Palm Beach",
    zip: ["33414", "33449"],
    population: "~65,000",
    medianHomeAge: "1990s to 2000s construction",
    medianHomeValue: "$500,000 - $700,000",
    character:
      "Wellington is internationally recognized as an equestrian capital, home to the Winter Equestrian Festival and the International Polo Club. Beyond the horse community, it is a large master-planned village with excellent schools, expansive parks, and a suburban family atmosphere centered around the Wellington Green mall area and numerous gated communities.",
    climate:
      "Western inland location means no coastal wind relief and the highest summer heat indexes in the county. The village sits at relatively low elevation and relies heavily on an engineered canal and swale drainage system. Seasonal flooding along the Acme Improvement District canals can impact western neighborhoods.",
    housing:
      "Mix of large single-family homes in gated communities and equestrian estates on multi-acre lots. CBS construction from the 1990s and 2000s predominates. Strong HOA presence with architectural review boards. Barrel tile roofs, screened pools, and three-car garages are standard. Equestrian properties feature barns, paddocks, and specialized infrastructure.",
    nearbyLocations: ["royal-palm-beach", "greenacres", "westlake"],
  },
  {
    name: "Delray Beach",
    slug: "delray-beach",
    county: "Palm Beach",
    zip: ["33444", "33445", "33446", "33448", "33482", "33483", "33484"],
    population: "~70,000",
    medianHomeAge: "Mixed — 1950s historic core, 2000s–2020s new development",
    medianHomeValue: "$500,000 - $800,000",
    character:
      "Delray Beach's award-winning Atlantic Avenue downtown is a walkable strip of restaurants, galleries, and boutiques that draws visitors from across South Florida. The city has undergone significant revitalization, blending historic neighborhoods like Del-Ida Park with modern luxury developments, creating one of the most dynamic real estate markets in the county.",
    climate:
      "Direct oceanfront exposure with significant salt air and wind-driven rain impacts on barrier island properties. Western neighborhoods around the Turnpike are more sheltered but hotter. Older downtown areas have aging stormwater infrastructure that can cause localized flooding during heavy rain events.",
    housing:
      "Highly varied — from 1950s bungalows and mid-century ranch homes in historic districts to new-construction luxury townhomes and condos downtown. Barrier island features oceanfront condos and single-family estates. West Delray has newer master-planned communities. Historic preservation overlays apply in some neighborhoods, affecting renovation scope.",
    nearbyLocations: ["boynton-beach", "lantana", "greenacres"],
  },
  {
    name: "Boynton Beach",
    slug: "boynton-beach",
    county: "Palm Beach",
    zip: ["33424", "33425", "33426", "33435", "33436", "33437", "33472", "33473", "33474"],
    population: "~80,000",
    medianHomeAge: "1980s to 1990s construction",
    medianHomeValue: "$350,000 - $500,000",
    character:
      "Boynton Beach is a mid-size city experiencing a downtown renaissance, with the Town Square redevelopment bringing new mixed-use projects, a renovated City Hall, and cultural amenities. East of I-95, older neighborhoods have an established, walkable feel, while the rapidly growing western communities offer newer suburban living along the Boynton Beach Boulevard corridor.",
    climate:
      "Eastern areas face full coastal weather exposure including salt spray, hurricane-force winds, and tidal surge risk along the Intracoastal. Central and western areas are more protected but prone to canal flooding during sustained rain events. The city spans a wide east-west footprint with noticeable microclimate variation.",
    housing:
      "Eastern neighborhoods feature older CBS homes from the 1960s–1980s, many needing updated hurricane protection and electrical systems. Western Boynton has large master-planned communities like Canyon Lakes and Valencia built in the 2000s–2010s. Active adult and 55+ communities are well-represented. HOA prevalence increases significantly heading west.",
    nearbyLocations: ["delray-beach", "lantana", "greenacres", "wellington"],
  },
  {
    name: "West Palm Beach",
    slug: "west-palm-beach",
    county: "Palm Beach",
    zip: ["33401", "33405", "33406", "33407", "33409", "33410", "33411", "33412", "33413", "33415", "33417"],
    population: "~120,000",
    medianHomeAge: "Mixed — 1920s historic core through modern construction",
    medianHomeValue: "$400,000 - $650,000",
    character:
      "As the county seat, West Palm Beach is the cultural and economic hub of Palm Beach County with a thriving downtown anchored by Clematis Street, CityPlace (now Rosemary Square), and the Kravis Center for the Performing Arts. The city encompasses everything from historic Flamingo Park bungalows to luxury Intracoastal condos to working-class neighborhoods west of I-95.",
    climate:
      "Waterfront areas along the Intracoastal and Lake Worth Lagoon face elevated storm surge and flood risk. Central urban areas experience heat island effects. Western neighborhoods along Military Trail and beyond are inland enough to avoid salt air but sit in lower-elevation areas near canal systems. Stormwater infrastructure varies significantly by neighborhood age.",
    housing:
      "Extremely diverse housing stock spanning nearly a century. Historic districts like Flamingo Park, Northwood, and El Cid feature 1920s–1940s Mediterranean Revival and mission-style homes. Mid-century neighborhoods have CBS ranch homes. Downtown has modern high-rise condos. Western areas feature 1980s–2000s suburban developments. Renovation demand is strong across all neighborhoods.",
    nearbyLocations: ["palm-beach", "palm-beach-gardens", "royal-palm-beach", "greenacres"],
  },
  {
    name: "Royal Palm Beach",
    slug: "royal-palm-beach",
    county: "Palm Beach",
    zip: ["33411", "33414"],
    population: "~42,000",
    medianHomeAge: "1980s to 2000s construction",
    medianHomeValue: "$400,000 - $550,000",
    character:
      "Royal Palm Beach is a quiet, family-focused village west of West Palm Beach that consistently ranks among the best places to raise a family in the county. The village centers around the Royal Palm Beach Commons park and recreation complex, and its well-maintained subdivisions offer a suburban lifestyle with convenient access to the Turnpike and major commercial corridors.",
    climate:
      "Inland western location with no coastal breeze relief, leading to higher perceived temperatures in summer. The village's extensive canal network managed by the Indian Trail Improvement District handles drainage, but low-lying areas can experience water table issues during prolonged wet seasons. No salt air concerns.",
    housing:
      "Primarily single-family CBS homes in planned subdivisions from the 1980s through 2000s, with newer infill development continuing. Most communities have HOAs with moderate fees. Standard features include barrel or flat tile roofs, screened lanais, and two-car garages. Madison Green and Crestwood are among the larger subdivisions. Homes are well-suited for kitchen and bathroom renovations.",
    nearbyLocations: ["wellington", "west-palm-beach", "greenacres", "westlake"],
  },
  {
    name: "Palm Beach Gardens",
    slug: "palm-beach-gardens",
    county: "Palm Beach",
    zip: ["33403", "33408", "33410", "33412", "33418", "33420"],
    population: "~56,000",
    medianHomeAge: "1990s to 2010s construction",
    medianHomeValue: "$550,000 - $850,000",
    character:
      "Palm Beach Gardens is an affluent, well-manicured city anchored by the Gardens Mall and PGA Boulevard's upscale dining and retail corridor. Home to PGA National Resort and numerous country club communities, the city has a polished suburban feel with excellent infrastructure, lush landscaping, and a strong emphasis on outdoor recreation along its extensive trail network.",
    climate:
      "Northern coastal-adjacent location benefits from Atlantic breezes in eastern neighborhoods near the Intracoastal, while western communities toward the Beeline Highway corridor are fully inland. Eastern areas near the Earman River and Intracoastal carry flood zone designations. Well-engineered stormwater systems in newer developments reduce but don't eliminate flood risk.",
    housing:
      "Upscale single-family homes in gated, HOA-governed communities are the norm. PGA National, Old Palm, and Frenchman's Reserve represent the high end. CBS construction with Mediterranean and transitional architectural styles predominates. Impact windows and modern roofing are common in post-2002 builds. Country club communities often require membership. Strong demand for luxury kitchen, bath, and outdoor living renovations.",
    nearbyLocations: ["jupiter", "west-palm-beach", "palm-beach"],
  },
  {
    name: "Palm Beach",
    slug: "palm-beach",
    county: "Palm Beach",
    zip: ["33480"],
    population: "~9,000",
    medianHomeAge: "Mixed — 1920s estates through modern construction",
    medianHomeValue: "$3,000,000+",
    character:
      "The Town of Palm Beach is one of the wealthiest communities in the United States, a narrow barrier island known for Worth Avenue's luxury shopping, the Flagler Museum, and the historic Breakers resort. Its residents include business leaders, philanthropists, and cultural figures who maintain the town's manicured exclusivity through strict building codes and architectural oversight.",
    climate:
      "Full barrier island exposure to Atlantic hurricanes, storm surge, and salt air makes weather resilience a primary construction concern. The entire island sits in high-risk FEMA flood zones. Salt air corrosion accelerates deterioration of exterior finishes, metal fixtures, and HVAC systems. Hurricane impact protection is mandatory under town building codes.",
    housing:
      "Grand Mediterranean Revival, Bermuda, Colonial, and Regency-style estates dominate, many designed by historically significant architects like Addison Mizner and Marion Sims Wyeth. Strict Architectural Review Board oversight governs all exterior modifications. Renovations require compliance with the town's Landmarks Preservation Commission for designated properties. Interior gut renovations and historic restorations are the primary project types.",
    nearbyLocations: ["west-palm-beach", "palm-beach-gardens", "lantana"],
  },
] as const;

export function getLocationBySlug(slug: string): Location | undefined {
  return (LOCATIONS as unknown as Location[]).find(
    (location) => location.slug === slug
  );
}
