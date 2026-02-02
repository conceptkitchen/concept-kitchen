// Email Welcome Sequence
// Based on: ~/clawd/concept-kitchen/email-welcome-sequence.md

export const welcomeSequence = [
  {
    step: 1,
    delayDays: 0, // Instant
    subject: "Your guide is here 🍳",
    previewText: "The skill that makes AI actually useful.",
    html: `
<p>Hey!</p>

<p>Here's the guide you asked for:</p>

<p><strong><a href="{{download_url}}">Download: How to Ask for What You Want →</a></strong></p>

<p>Quick tip: Start with the cheat sheet on the last page. Screenshot it. Use it before your next request — AI or human.</p>

<p>The whole thing takes about 10 minutes to read. But the cheat sheet alone will change how you communicate.</p>

<p>Try it today. See what happens.</p>

<p>— RJ<br>The Concept Kitchen</p>

<p><em>P.S. Hit reply and tell me what you're working on. I read every email.</em></p>
    `.trim()
  },
  {
    step: 2,
    delayDays: 2,
    subject: "The one thing most people skip",
    previewText: "It takes 10 seconds and changes everything.",
    html: `
<p>Hey —</p>

<p>Did you try the guide yet?</p>

<p>If you did, you probably noticed the framework: Context, Specifics, Constraints, Example.</p>

<p>Most people skip the first one. <strong>Context.</strong></p>

<p>They jump straight to "write me an email" or "give me ideas" — and wonder why the output is garbage.</p>

<p>Here's the fix:</p>

<p>Before your next request, spend 10 seconds adding one sentence of context.</p>

<p>Not this:</p>
<blockquote>"Write me an email about the project delay."</blockquote>

<p>This:</p>
<blockquote>"I'm a project manager. My team is stressed. Write me an email about the project delay that's direct but doesn't make them feel like they failed."</blockquote>

<p>One sentence. Changes everything.</p>

<p>Try it today.</p>

<p>— RJ</p>

<p><em>P.S. If you haven't opened the guide yet, here it is again: <a href="{{download_url}}">Download →</a></em></p>
    `.trim()
  },
  {
    step: 3,
    delayDays: 4,
    subject: "How I got here (no CS degree)",
    previewText: "I ran a restaurant pop-up. Now I build AI apps.",
    html: `
<p>Hey —</p>

<p>Quick story.</p>

<p>A few years ago, I ran a restaurant pop-up. No culinary school. I just hired a consultant, found a good chef, and learned the recipes that worked.</p>

<p>Before that, I was employee #30 at a YC startup called Magic. I scaled from there to Director of Operations. Trained hundreds of people. Helped open international offices.</p>

<p>No CS degree. No formal training.</p>

<p>Then AI happened.</p>

<p>Same approach: Find what works. Learn the recipes. Build things.</p>

<p>I've now won 10+ hackathons (solo, most of them). Built healthcare apps. Cybersecurity tools. Workforce development platforms.</p>

<p>Still no CS degree.</p>

<p>The point isn't me. The point is: <strong>you don't need permission or credentials to build things.</strong></p>

<p>You just need recipes that work and the willingness to try.</p>

<p>That's what The Concept Kitchen is about.</p>

<p>More soon.</p>

<p>— RJ</p>
    `.trim()
  },
  {
    step: 4,
    delayDays: 6,
    subject: "Another recipe for you",
    previewText: "This one saves me hours every week.",
    html: `
<p>Hey —</p>

<p>Here's a recipe I use constantly:</p>

<p><strong>The Brain Dump → Action Plan</strong></p>

<p>When I'm overwhelmed, I open ChatGPT and say:</p>

<blockquote>"I'm going to brain dump everything on my mind. Don't respond until I say 'done.' Then organize it into: (1) urgent tasks, (2) can wait, (3) someday/maybe. Be ruthless about what's actually urgent."</blockquote>

<p>Then I just ramble. Everything in my head. Work stuff, personal stuff, random thoughts.</p>

<p>When I type "done" — it organizes everything.</p>

<p>10 minutes of chaos becomes a clear action plan.</p>

<p>Try it next time your brain feels full.</p>

<p>— RJ</p>

<p><em>P.S. Want more recipes like this? I share them in Kitchen Notes, my weekly newsletter. You're already on the list — just keep an eye out.</em></p>
    `.trim()
  },
  {
    step: 5,
    delayDays: 8,
    subject: "What's next?",
    previewText: "Three ways to keep cooking.",
    html: `
<p>Hey —</p>

<p>You've had the guide for a week now.</p>

<p>If you've tried the framework — even once — you've already seen the difference clear communication makes.</p>

<p>Here's how to keep going:</p>

<p><strong>1. Follow along on Instagram</strong><br>
I share quick tips, recipes, and behind-the-scenes of what I'm building.<br>
→ <a href="https://instagram.com/the_concept.kitchen">@the_concept.kitchen</a></p>

<p><strong>2. Stay on this list</strong><br>
I send Kitchen Notes with new recipes, tools, and ideas. Not daily. Not even weekly sometimes. Just when I have something worth sharing.</p>

<p><strong>3. Reply to this email</strong><br>
Tell me what you're building or trying to figure out. I read everything.</p>

<p>That's it. No pitch. No course to sell (yet 😉).</p>

<p>Just keep cooking.</p>

<p>— RJ</p>
    `.trim()
  }
];

// Get email for a specific step
export function getEmailForStep(step) {
  return welcomeSequence.find(e => e.step === step);
}

// Replace template variables
export function renderEmail(email, variables = {}) {
  let html = email.html;
  for (const [key, value] of Object.entries(variables)) {
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }
  return {
    ...email,
    html
  };
}
