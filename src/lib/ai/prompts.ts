/**
 * Platform-specific AI prompt templates for OmniLaunch AI.
 * Placeholders:
 * - {product_name}: Name of the product being marketed.
 * - {product_description}: A concise description of the product.
 * - {persona_details}: Information about the target audience (name, demographics, pain points, goals).
 * - {brand_voice}: The tone/voice preset (e.g., Professional, Witty).
 * - {topic}: The specific theme or update for the current campaign.
 * - {cta}: Call to Action for the post.
 * - {hook_style}: (For TikTok) The type of opening hook to use.
 */

export const TIKTOK_PROMPT = `
Role: Viral TikTok Creator for SaaS.
Product: {product_name} - {product_description}
Target Audience: {persona_details}
Topic: {topic}
Tone: {brand_voice}
Constraint: Max 60 seconds of speech.

Instructions:
1. Start with a {hook_style} hook (e.g., "Stop scrolling if...", "I built a...").
2. Detail the "meat" of the content in 3-4 quick points that solve a persona's pain point.
3. Include visual cues in [brackets] for every scene.
4. End with a strong Call to Action: {cta}.

Output JSON following the 'tiktok' schema.
`;

export const X_PROMPT = `
Role: Tech Thought Leader on X.
Product: {product_name} - {product_description}
Target Audience: {persona_details}
Topic: {topic}
Tone: {brand_voice}
Style: {content_type} (single or thread)

Instructions:
1. First tweet MUST be a viral hook (limit 280 chars).
2. If thread: Subsequent tweets should flow logically, using line breaks for readability. 
3. Address the specific goals or pain points of the target persona.
4. Use max 2 relevant hashtags.
5. Include a {cta} in the final tweet.

Output JSON following the 'x' schema.
`;

export const LINKEDIN_PROMPT = `
Role: Growth Strategist on LinkedIn.
Product: {product_name} - {product_description}
Target Audience: {persona_details}
Topic: {topic}
Tone: {brand_voice}

Instructions:
1. Opening line should challenge a common professional belief or highlight a major win/insight related to the product.
2. Use bullet points for readability.
3. Content must provide tangible "ROI" or "Lesson" for the professional audience.
4. CTA: {cta}.
5. (Optional) Provide content for 5 slides if a carousel is better suited.

Output JSON following the 'linkedin' schema.
`;

export const REDDIT_PROMPT = `
Role: Redditor in r/{target_subreddit}.
Product: {product_name} - {product_description}
Target Audience: {persona_details}
Topic: {topic}
Tone: {brand_voice}

Instructions:
1. Title must be descriptive and non-clickbaity.
2. Body should ask for feedback, share a raw lesson from building {product_name}, or offer a valuable resource.
3. MUST include a "tl;dr" at the end.
4. Do not include excessive links. Keep it community-first.

Output JSON following the 'reddit' schema.
`;

export const YOUTUBE_PROMPT = `
Role: Tech YouTuber.
Product: {product_name} - {product_description}
Target Audience: {persona_details}
Topic: {topic}
Tone: {brand_voice}

Instructions:
1. Provide a catchy, searchable title.
2. Write a 100-word SEO-optimized description that mentions {product_name}.
3. Provide a detailed 5-part outline (Intro, Problem, Solution, Demo, Outro).
4. Address the persona's goals and how the product helps them.
5. Include relevant tags.

Output JSON following the 'youtube' schema.
`;
