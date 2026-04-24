import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function main() {
  const blogs = [
    {
      title: 'Why Kenya Is the Top Real Estate Investment Destination in East Africa',
      excerpt: 'With a booming economy, a growing middle class, and world-class infrastructure, Kenya offers unmatched opportunities for property investors seeking strong returns.',
      content: `Kenya has rapidly become the most attractive real estate market in East Africa, drawing attention from local and international investors alike. Here's why smart money is flowing into Kenyan property.

## A Thriving Economy

Kenya's GDP has consistently grown at 5–6% annually, making it the economic powerhouse of the region. Nairobi, often called the "Silicon Savannah," hosts the regional headquarters of major multinational corporations, the United Nations, and leading tech companies. This economic vitality directly fuels demand for premium residential and commercial property.

## Strategic Location & Connectivity

Jomo Kenyatta International Airport is the busiest in East Africa, connecting Kenya to global markets. The Standard Gauge Railway links Nairobi to Mombasa, while ongoing expressway projects have dramatically improved intra-city commutes. For investors, connectivity means accessibility — and accessibility drives property value.

## Rising Demand for Luxury Housing

Kenya's high-net-worth population is expanding. According to Knight Frank's Wealth Report, Kenya's millionaire population is projected to grow by over 40% in the next decade. This demographic demands spacious villas in Karen, modern penthouses in Westlands, and gated estates in Runda — all of which you can find listed on Kejalux.com.

## Favourable Legal Framework

Kenya allows foreigners to hold leasehold property (up to 99 years), and the 2010 constitution strengthened property rights significantly. The digitisation of land records through the National Land Information Management System (NLIMS) has improved transparency and reduced fraud.

## Rental Yields That Outperform

Nairobi's prime residential areas deliver gross rental yields of 5–7%, outperforming many global cities. Areas like Kilimani, Kileleshwa, and Lavington are particularly attractive for buy-to-let investors targeting the expatriate and corporate-housing segment.

## Infrastructure-Led Growth

The Nairobi Expressway, Lamu Port, and multiple new mixed-use developments are creating entirely new investment corridors. Early movers who acquire property along these growth axes stand to benefit from significant capital appreciation.

## The Bottom Line

Whether you're a diaspora investor, a local entrepreneur diversifying your portfolio, or an international buyer seeking African exposure, Kenya's real estate market offers a compelling combination of yield, growth, and lifestyle. Start your property search on Kejalux.com to explore thousands of verified listings across Kenya.`,
      coverImage: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1600&q=80',
      isPublished: true
    },
    {
      title: 'Apartment Living in Nairobi: The Smart Investment for Modern Professionals',
      excerpt: 'From Kilimani to Westlands, luxury apartments in Nairobi offer high rental returns, low maintenance, and a lifestyle that matches global standards.',
      content: `Apartment living in Nairobi has evolved far beyond basic flats. Today's developments rival anything in Dubai or London — and the investment case is stronger than ever.

## Why Apartments?

Urban density is increasing. Nairobi's population is projected to exceed 6 million by 2030, and land scarcity in prime areas means vertical living is the future. For investors, this translates to sustained demand and limited supply — the classic recipe for appreciation.

## Prime Locations for Apartment Investment

**Kilimani** — The heartbeat of modern Nairobi. Walking distance to offices, restaurants, and entertainment. Two-bedroom apartments here command rents of KES 80,000–150,000 per month.

**Westlands** — A commercial and diplomatic hub with 24/7 energy. Studio and one-bedroom units are popular with young professionals and short-stay corporate tenants.

**Kileleshwa** — Leafy, quiet, and increasingly upscale. Three-bedroom apartments attract families and senior executives seeking a balance of space and convenience.

**Lavington** — A prestige address with established infrastructure. Larger units here cater to diplomats and regional directors.

## The Numbers

A well-located two-bedroom apartment in Kilimani purchased at KES 12–18M can generate annual rental income of KES 960,000–1,800,000, delivering gross yields of 7–10%. Factor in annual capital appreciation of 4–6%, and total returns comfortably beat most fixed-income instruments.

## Amenities That Add Value

Modern Nairobi apartments come equipped with features that drive both tenant satisfaction and rental premiums:

- 24/7 security with CCTV and biometric access
- Backup generators and borehole water
- Rooftop pools, gyms, and co-working spaces
- Smart home integration
- Covered parking with EV charging points

## Short-Stay & Airbnb Potential

Nairobi is a major conference and business travel destination. Furnished apartments in Westlands and Kilimani can generate 30–50% higher income through short-stay platforms compared to traditional long-term leases.

## Getting Started

On Kejalux.com, you can search and compare apartment listings by location, price, size, and amenities. Whether you're buying your first investment property or expanding a portfolio, our marketplace connects you with verified sellers and agents who can guide you to the right unit.`,
      coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      isPublished: true
    },
    {
      title: 'Finding Your Dream Home in Kenya: A Guide for High-Net-Worth Buyers',
      excerpt: 'From colonial-era mansions in Muthaiga to contemporary villas in Karen, Kenya offers extraordinary homes for discerning buyers who refuse to compromise.',
      content: `Buying a home in Kenya is more than a transaction — it's a statement about how you want to live. For discerning buyers, Kenya's luxury residential market offers diversity, craftsmanship, and value that few global markets can match.

## Understanding Kenya's Premium Neighbourhoods

**Karen** — Named after author Karen Blixen, this sprawling suburb offers half-acre to five-acre plots with mature gardens, equestrian culture, and absolute privacy. Ideal for families who want space, nature, and a prestigious address.

**Runda** — Nairobi's most exclusive gated community. Homes here are set behind security barriers in a serene, embassy-adjacent environment. Expect contemporary architecture, extensive landscaping, and diplomatic neighbours.

**Muthaiga** — Old-money Nairobi. Tree-lined avenues, historic estates, and proximity to the Muthaiga Country Club make this the address of choice for Kenya's establishment families and senior diplomats.

**Kiambu Road Corridor** — The new frontier of luxury. Modern gated communities like Five Star Meadows and Rosslyn offer brand-new villas with smart home features at prices 20–30% below Karen and Runda equivalents.

**Nyali, Mombasa** — For those seeking coastal luxury, Nyali offers beachfront villas with ocean views, tropical gardens, and a relaxed pace of life just minutes from Mombasa's international airport.

## What to Expect at Different Price Points

**KES 25M – 50M** — Contemporary 3–4 bedroom townhouses in gated communities along Kiambu Road or in Lavington. Modern finishes, shared amenities, and good security.

**KES 50M – 100M** — Standalone 4–5 bedroom villas in Karen or Runda with private gardens, DSQ, and borehole. Often architect-designed with premium materials.

**KES 100M+** — Bespoke mansions on large plots with swimming pools, entertainment pavilions, staff quarters, and panoramic views. These are legacy properties built to impress across generations.

## The Buying Process

1. **Search online** — Use Kejalux.com to browse listings filtered by location, budget, bedrooms, and property style
2. **Shortlist & compare** — Save your favourite properties and compare them side by side
3. **Contact agents** — Reach out to verified listing agents directly through the platform
4. **Viewing & due diligence** — Physical inspections, title searches, and legal verification
5. **Negotiation & offer** — Work with your chosen agent on price and terms
6. **Legal completion** — Conveyancing, stamp duty payment, and title transfer
7. **Handover** — Move into your new home

## Why Search on Kejalux.com

Kejalux.com aggregates luxury listings from top agents and developers across Kenya into one platform. With verified photos, real pricing, and direct agent contact, you spend less time searching and more time viewing the homes that matter.`,
      coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      isPublished: true
    },
    {
      title: '5 Reasons International Investors Are Choosing Kenyan Real Estate',
      excerpt: 'From diaspora buyers to global fund managers, international capital is pouring into Kenya\'s property market. Here\'s what\'s driving the trend.',
      content: `Kenya is no longer just an emerging market curiosity — it's a serious destination for international real estate capital. Here are five reasons global investors are taking notice.

## 1. Currency Diversification

For diaspora Kenyans and international investors, Kenyan real estate provides a hedge against home-currency volatility. Property values in prime Nairobi areas have shown resilience even during global downturns, and rental income in KES provides a steady local-currency cash flow.

## 2. Demographic Tailwinds

Kenya's population is young, urbanising, and growing. With a median age of 20 and urbanisation rates of 4% annually, the structural demand for housing — especially quality housing — will only intensify over the coming decades.

## 3. Technology-Enabled Transactions

Gone are the days when buying property in Kenya required weeks on the ground. Virtual tours, digital conveyancing, and mobile money transfers have made it possible to acquire, manage, and earn from Kenyan property remotely. Kejalux.com features virtual property tours and connects international buyers with verified agents who offer remote transaction support.

## 4. Lifestyle & Retirement Appeal

Nairobi's year-round temperate climate, world-class healthcare (especially at Nairobi Hospital and Aga Khan University Hospital), international schools, and vibrant cultural scene make it an increasingly popular retirement and second-home destination for global professionals.

## 5. Competitive Entry Prices

Compared to equivalent properties in Lagos, Johannesburg, or Accra, Nairobi offers significantly better value per square metre in the luxury segment. A 4-bedroom villa in Karen at KES 80M (approximately USD 600,000) would cost multiples of that in comparable African luxury suburbs.

## How to Get Started as an International Buyer

- **Search on Kejalux.com** — filter by location, price, property type, and investment potential
- **Define your investment thesis** — rental yield, capital appreciation, personal use, or a combination
- **Connect with verified agents** — contact listing professionals directly through the platform
- **Complete due diligence remotely** — work with legal partners recommended by your agent
- **Close and manage** your investment with property management partners in-country

Kenya's real estate market rewards early movers and informed investors. Start your search on Kejalux.com today.`,
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      isPublished: true
    }
  ];

  for (const blog of blogs) {
    const slug = slugify(blog.title);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (!existing) {
      await prisma.blogPost.create({
        data: { ...blog, slug }
      });
      console.log(`Created: ${blog.title}`);
    } else {
      console.log(`Skipped (exists): ${blog.title}`);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
