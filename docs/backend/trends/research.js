// Trend Research Module
// Searches for viral content and analyzes patterns

const SEARCH_QUERIES = [
  // Viral content discovery
  "viral reels this week",
  "trending tiktok sounds today",
  "youtube shorts going viral",
  "viral instagram hooks 2025",
  "linkedin posts going viral",
  
  // Format-specific
  "best carousel posts instagram",
  "viral thread twitter this week",
  "trending reel transitions",
  
  // Hook patterns
  "best hooks for reels",
  "viral video openings",
  "scroll-stopping content",
  
  // Industry crossover (apply to any niche)
  "viral business content",
  "trending educational content",
  "viral storytelling examples"
];

const PLATFORMS = ['instagram', 'tiktok', 'youtube', 'twitter', 'linkedin'];

const HOOK_TYPES = [
  'pattern_interrupt',
  'bold_claim', 
  'question',
  'controversy',
  'relatable_struggle',
  'before_after',
  'list_tease',
  'story_hook',
  'shocking_stat',
  'direct_address'
];

// Analyze a piece of content for patterns
export function analyzeContent(content) {
  const analysis = {
    hook_type: detectHookType(content.title || content.description),
    format: detectFormat(content),
    why_it_works: generateWhyItWorks(content),
    how_to_apply: generateHowToApply(content)
  };
  return analysis;
}

function detectHookType(text) {
  if (!text) return 'unknown';
  const lower = text.toLowerCase();
  
  if (lower.includes('?')) return 'question';
  if (lower.includes('stop') || lower.includes('wait')) return 'pattern_interrupt';
  if (lower.includes('never') || lower.includes('always') || lower.includes('everyone')) return 'bold_claim';
  if (lower.includes('vs') || lower.includes('wrong')) return 'controversy';
  if (lower.includes('struggle') || lower.includes('tired of')) return 'relatable_struggle';
  if (lower.includes('before') || lower.includes('after') || lower.includes('transformation')) return 'before_after';
  if (/\d+\s*(ways|tips|things|secrets)/.test(lower)) return 'list_tease';
  if (lower.includes('story') || lower.includes('happened')) return 'story_hook';
  if (/\d+%|\d+x|\d+\s*(million|billion|thousand)/.test(lower)) return 'shocking_stat';
  if (lower.includes('you') && lower.includes('your')) return 'direct_address';
  
  return 'other';
}

function detectFormat(content) {
  const url = content.url || '';
  if (url.includes('reel') || url.includes('tiktok')) return 'short_video';
  if (url.includes('carousel')) return 'carousel';
  if (url.includes('thread') || url.includes('status')) return 'thread';
  if (url.includes('youtube.com/shorts')) return 'short_video';
  if (url.includes('youtube.com/watch')) return 'long_video';
  return 'post';
}

function generateWhyItWorks(content) {
  const hookType = detectHookType(content.title || content.description);
  
  const reasons = {
    'question': 'Questions create an open loop that viewers want to close',
    'pattern_interrupt': 'Breaks scroll pattern, forces attention',
    'bold_claim': 'Polarizing statements drive engagement (agree or disagree)',
    'controversy': 'Triggers emotional response, people want to weigh in',
    'relatable_struggle': 'Builds connection through shared experience',
    'before_after': 'Visual proof of transformation is compelling',
    'list_tease': 'Curiosity about what\'s on the list, easy to consume',
    'story_hook': 'Humans are wired for narrative, creates investment',
    'shocking_stat': 'Data surprises create shareability',
    'direct_address': 'Personal feel, viewer feels seen'
  };
  
  return reasons[hookType] || 'Strong visual or emotional hook';
}

function generateHowToApply(content) {
  const hookType = detectHookType(content.title || content.description);
  
  const applications = {
    'question': 'TCK version: "Why do 79% of workers feel unprepared for AI?" → then answer with recipe',
    'pattern_interrupt': 'TCK version: "STOP scrolling if you\'ve ever felt intimidated by AI"',
    'bold_claim': 'TCK version: "You don\'t need a CS degree to build apps. I\'ll prove it."',
    'controversy': 'TCK version: "Most AI courses are a waste of money. Here\'s what actually works."',
    'relatable_struggle': 'TCK version: "Tired of AI tutorials that go nowhere? Same."',
    'before_after': 'TCK version: Show "before AI" workflow vs "after recipe" workflow',
    'list_tease': 'TCK version: "5 AI recipes that saved me 10+ hours this week"',
    'story_hook': 'TCK version: "I built this app during my commute. Here\'s how."',
    'shocking_stat': 'TCK version: "56% wage premium for AI skills. Here\'s how to get them."',
    'direct_address': 'TCK version: "You run a business. You have ideas. Let me show you the recipes."'
  };
  
  return applications[hookType] || 'Adapt the hook pattern with AI/cooking angle';
}

// Get today's search queries (rotate through them)
export function getTodayQueries() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Pick 3-4 queries based on day
  const startIdx = (dayOfWeek * 3) % SEARCH_QUERIES.length;
  const queries = [];
  for (let i = 0; i < 4; i++) {
    queries.push(SEARCH_QUERIES[(startIdx + i) % SEARCH_QUERIES.length]);
  }
  
  return queries;
}

export { SEARCH_QUERIES, PLATFORMS, HOOK_TYPES };
