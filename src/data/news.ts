import { NewsArticle, CategorySlug } from '../types/news';

const newsArticles: NewsArticle[] = [
    {
        id: 1,
        slug: 'russia-launches-drones-ukraine',
        title: 'Russia launches close to 600 drones on Ukraine killing three',
        summary: 'Massive drone attack targets energy infrastructure across the country as winter approaches.',
        content: 'Russia has launched a massive drone attack on Ukraine, targeting energy infrastructure across the country. The attack, which involved close to 600 drones, has resulted in the death of at least three people and caused widespread power outages. Ukrainian officials have condemned the attack as a "terrorist act" and called for increased international support to defend against Russian aggression. The attack comes as winter approaches, raising concerns about the humanitarian impact of the energy shortages.',
        category: 'world',
        tag: 'Ukraine',
        publishedAt: '2025-11-29T10:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop'
    },
    {
        id: 2,
        slug: 'pope-visits-blue-mosque',
        title: "Pope Leo XIV visits Istanbul's Blue Mosque for a brief moment of prayer",
        summary: 'A historic moment as the Pope visits one of the most significant mosques in the Islamic world.',
        content: 'In a gesture of interfaith dialogue and peace, Pope Leo XIV visited the Blue Mosque in Istanbul today. The Pontiff paused for a brief moment of silent prayer alongside the Grand Mufti, emphasizing the importance of unity and understanding between Christians and Muslims. The visit has been hailed as a significant step towards bridging the divide between the two religions.',
        category: 'culture',
        tag: 'No Comment',
        publishedAt: '2025-11-29T11:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1548625361-e88c60eb83fe?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 3,
        slug: 'latest-news-bulletin-nov-29',
        title: 'Latest news bulletin | November 29th, 2025 - Midday',
        summary: 'Catch up on the top stories making headlines around the world this midday.',
        content: 'Here are the top stories for today: Global markets rally on positive economic data; New climate change report warns of irreversible damage; Tech giants announce major AI breakthrough. Stay tuned for more updates throughout the day.',
        category: 'world',
        tag: 'Top News Stories Today',
        publishedAt: '2025-11-29T12:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 4,
        slug: 'us-halts-asylum-decisions',
        title: 'US halts all asylum decisions and pauses visas for Afghan nationals',
        summary: 'The new policy aims to review security procedures and vetting processes.',
        content: 'The United States government has announced a temporary halt on all asylum decisions and a pause on issuing visas for Afghan nationals. The decision comes amidst security concerns and a need to review current vetting procedures. Human rights organizations have criticized the move, arguing that it puts vulnerable individuals at risk.',
        category: 'world',
        tag: 'USA',
        publishedAt: '2025-11-29T09:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1508612761958-e931d843bdd5?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 5,
        slug: 'tech-giants-ai-breakthrough',
        title: 'Tech Giants Announce Major AI Breakthrough',
        summary: 'A consortium of leading tech companies has revealed a new AI model with unprecedented capabilities.',
        content: 'In a joint press conference, CEOs from major tech companies announced the development of a new artificial intelligence model that surpasses all previous benchmarks. The model, named "OmniMind", demonstrates near-human reasoning abilities and is expected to revolutionize industries ranging from healthcare to finance. However, experts warn of the potential ethical implications and the need for robust regulation.',
        category: 'science',
        tag: 'AI',
        publishedAt: '2025-11-28T15:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop'
    },
    {
        id: 6,
        slug: 'green-energy-milestone',
        title: 'Global Renewable Energy Capacity Hits New Record',
        summary: 'Solar and wind power generation have exceeded expectations, marking a turning point in the fight against climate change.',
        content: 'According to the International Energy Agency, global renewable energy capacity has reached a new record high this year. The surge is driven by rapid expansion in solar and wind power projects, particularly in Asia and Europe. This milestone brings the world closer to achieving its climate goals, but experts emphasize that more action is needed to phase out fossil fuels completely.',
        category: 'green',
        tag: 'Environment',
        publishedAt: '2025-11-28T10:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop'
    },
    {
        id: 7,
        slug: 'tourism-boom-post-pandemic',
        title: 'International Tourism Returns to Pre-Pandemic Levels',
        summary: 'Travelers are flocking to popular destinations as restrictions ease and confidence returns.',
        content: 'The tourism industry is experiencing a robust recovery, with international arrivals reaching pre-pandemic levels in many regions. Popular destinations in Europe and Asia are seeing a surge in visitors, boosting local economies. However, concerns about overtourism and its impact on local communities are resurfacing, prompting calls for sustainable tourism practices.',
        category: 'tourism',
        tag: 'Travel',
        publishedAt: '2025-11-27T14:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop'
    },
    {
        id: 8,
        slug: 'healthy-lifestyle-trends',
        title: 'Top Healthy Lifestyle Trends for 2026',
        summary: 'From personalized nutrition to digital detoxes, here are the trends shaping the wellness industry.',
        content: 'As we approach 2026, the wellness industry is evolving with a focus on personalized health and mental well-being. Key trends include DNA-based nutrition plans, digital detox retreats, and the integration of mental health support into daily routines. Consumers are increasingly seeking holistic approaches to health that prioritize balance and sustainability.',
        category: 'health',
        tag: 'Wellness',
        publishedAt: '2025-11-26T09:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop'
    },
    {
        id: 9,
        slug: 'business-market-update',
        title: 'Global Markets React to New Trade Policies',
        summary: 'Investors are cautious as major economies implement new trade tariffs.',
        content: 'Stock markets around the world showed mixed reactions today as new trade tariffs between major economies came into effect. Analysts predict a period of volatility as businesses adjust to the new regulations. The technology and manufacturing sectors are expected to be most affected, while domestic-focused industries may see some benefits.',
        category: 'business',
        tag: 'Economy',
        publishedAt: '2025-11-25T16:00:00Z',
        heroImageUrl: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600&auto=format&fit=crop'
    }
];

export function getLatestArticles(): NewsArticle[] {
    return [...newsArticles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticlesByCategory(category: CategorySlug): NewsArticle[] {
    if (category === 'latest') return getLatestArticles();
    return newsArticles.filter(article => article.category === category);
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
    return newsArticles.find(article => article.slug === slug);
}
