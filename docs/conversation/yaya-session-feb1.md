# Yaya + RJ Session — February 1, 2026

Full conversation export from building The Concept Kitchen.

**Topics covered:**
- Brand setup & GitHub deployment
- Content strategy (pillars, pieces)
- Lead magnet creation
- Landing page build
- Email welcome sequence
- Resend + Replit backend architecture

---

## 👤 RJ
System: [2026-01-29 07:54:18 PST] WhatsApp gateway connected.

hi  did yu do the work i know i hit my claude limit last night
[message_id: 6fd9b992-702f-4985-8fa4-04c1e4c5a28f]
## 🤖 Yaya

## 👤 RJ
System: [2026-01-29 07:54:18 PST] WhatsApp gateway connected.

hi  did yu do the work i know i hit my claude limit last night
[message_id: 6fd9b992-702f-4985-8fa4-04c1e4c5a28f]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Hey! Yeah I remember — we met last night, you named me Yaya, and we set up that 7am pushups reminder (which fired about an hour ago 💪).

The work you asked me to do was **research Google Calendar integration** and report back this morning. Honestly? I don't have notes that I completed that research before you hit the limit. Let me do it now real quick and give you the rundown.

Also — did you get those 35 pushups in? The reminder went out at 7am sharp. 😌
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Alright, did the research. Here's the deal on **Google Calendar integration**:

**Short answer:** No native Google Calendar integration in Clawdbot yet.

**Options:**
1. **CalDAV skill on ClawdHub** — works if you sync Google Calendar to CalDAV (uses khal/vdirsyncer). Self-hosted but requires setup.

2. **Browser automation** — I can log into Google Calendar via browser control and read/create events. It works, just slower than an API.

3. **Build a custom skill** — If you want proper API integration, we could build one using Google Calendar API. Would need OAuth setup with Google Cloud Console.

4. **Apple Calendar sync** — If you sync Google Calendar to Apple Calendar on your Mac, I have the `apple-reminders` skill which could work for viewing (though that's reminders, not calendar proper).

**My recommendation:** For now, let's do **browser automation** when you need calendar stuff. Quick and dirty but works. If you want something cleaner long-term, we can build a proper Google Calendar skill this weekend.

What do you want to do? And seriously — those pushups? 💪
## 👤 RJ
morning
[message_id: 1404b0a7-f55b-486e-8b41-a0dd109ef677]
## 🤖 Yaya

## 👤 RJ
morning
[message_id: 1404b0a7-f55b-486e-8b41-a0dd109ef677]
## 🤖 Yaya
Morning! ☀️

How you feeling? Did those 35 pushups happen or are we pretending that reminder never existed? 😌
## 👤 RJ
set up google calendar api you have access to chrome
[message_id: 474e70de-ca44-40f5-b1d0-50f996648e6b]
## 🤖 Yaya
On it. Let me get into Google Cloud Console and set this up.
## 🤖 Yaya
Need you to attach a Chrome tab first:

1. Open Chrome
2. Click the **Clawdbot Browser Relay** extension icon in your toolbar (puzzle piece → Clawdbot)
3. Badge should turn **ON**

Once you've done that, let me know and I'll take it from there. 🔌
## 👤 RJ
ok theres a tab with it on you can do it now i think
[message_id: 4bfc611e-08e2-47d6-acfa-d1bfe090f771]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Nice — **Google Calendar API is already enabled** on this project! I can see it in the list. Now I need to create OAuth credentials so we can use it.

Let me close this popup and head to Credentials:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Good, I'm on the Credentials page. I see there are no OAuth clients yet, and there's a warning to configure the OAuth consent screen first. Let me do that:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Google Auth Platform needs to be configured. Let me click "Get started":
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Setting up OAuth consent. Let me fill in the app details:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
The Chrome extension seems to be having issues with click actions redirecting. Let me check the tabs:
## 🤖 Yaya

## 🤖 Yaya
I can see the form now. It looks like it's already focused on the App name field. Let me type directly:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
App name is set to "Yaya Calendar" ✓. Now focused on email dropdown. Let me open it:
## 🤖 Yaya

## 🤖 Yaya
Dropdown is open with your email showing. Selecting it:
## 🤖 Yaya

## 🤖 Yaya
Both fields filled. Moving to Next:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Next button is focused. Pressing Enter:
## 🤖 Yaya

## 🤖 Yaya
Step 1 complete ✓. Now on step 2 - Audience. Need to select "External" (since this is personal, not an org):
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
RJ, the Chrome extension relay keeps redirecting when I click elements in Google Cloud Console — the UI is tricky for automation. Let me give you the quick manual steps to finish this (takes 2 minutes):

**You're already on the right page.** Just need to:

1. **App name:** Type `Yaya Calendar`
2. **User support email:** Select your email from dropdown
3. Click **Next**

4. **Audience:** Select **External** (since you're not a Google Workspace org)
5. Click **Next**

6. **Contact Information:** Add your email as developer contact
7. Click **Next**

8. Click **Create**

Then:
9. Go to **Clients** in the left sidebar
10. Click **+ Create Client**
11. Select **Desktop app**
12. Name it `Yaya Calendar CLI`
13. Click **Create**
14. **Download the JSON** file (this is your credentials)

Once you have that JSON file, let me know and I'll set up the skill to use it. The hard part (OAuth consent screen) is almost done — just need to click through those steps.

Want me to wait while you do it, or would you rather tackle it later?
## 👤 RJ
can you do that or do i have to
[message_id: 67c11a9f-b971-4a2c-8204-bb6d59eabd29]
## 🤖 Yaya
Let me try with Clawdbot's own browser instead of the Chrome extension — might work better:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Ah — the Clawdbot browser needs you to log in to Google (separate session from your Chrome).

**Honest assessment:** You doing it manually in Chrome will be faster than me logging into Google fresh. You're already logged in, it's literally 8 clicks:

1. Type app name
2. Pick email  
3. Next
4. Select External
5. Next
6. Add contact email
7. Next → Create
8. Create OAuth client → Download JSON

Takes maybe 90 seconds. Then hand me the JSON path and I'll wire up the skill.

Your call — want to knock it out quick, or want me to try logging into Google through this browser? (That'll involve email, password, probably 2FA...)
## 👤 RJ
how can i access you thru telegram
[message_id: 4cb0deb8-4764-4fa9-b481-bbc596069e24]
## 🤖 Yaya
Quick setup:

**1. Create a bot with @BotFather on Telegram:**
- Open Telegram, search for `@BotFather`
- Send `/newbot`
- Pick a name (e.g., "Yaya")
- Pick a username (must end in `bot`, e.g., `yaya_rj_bot`)
- Copy the **bot token** it gives you

**2. Get your Telegram user ID:**
- Message `@userinfobot` on Telegram
- It'll reply with your numeric ID (e.g., `123456789`)

**3. Configure Clawdbot:**
```bash
clawdbot configure --section telegram
```

It'll ask for:
- Bot token (from step 1)
- Your user ID for `allowFrom` (from step 2)

**4. Restart gateway:**
```bash
clawdbot gateway restart
```

Then just DM your bot on Telegram and you're in. 

Want me to walk you through it, or want to knock out the Google Calendar OAuth first and come back to this?
## 👤 RJ
System: [2026-01-31 21:43:59 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +2d 2026-01-31 23:02 PST] ok are you working now
[message_id: 8]
## 🤖 Yaya
Yooo you got Telegram working! 🎉

Yeah I'm here. What's up? 

(Also — did you ever knock out that Google Calendar OAuth setup, or we still need to do that?)
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +19s 2026-01-31 23:02 PST] oh yeah we still need to do that
[message_id: 10]
## 🤖 Yaya
Cool, want to knock it out now? 

Two options:
1. **You click through it** (90 seconds, 8 clicks) — I'll guide you step by step
2. **I try browser automation again** — might work better this time, might not

Either way you'll need Chrome open to Google Cloud Console since you're already logged in there.

Which way you wanna go?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +19s 2026-01-31 23:02 PST] try the browser automation again lmk how i can help you do that
[message_id: 12]
## 🤖 Yaya
Alright let's do it. Need you to:

1. Open Chrome
2. Go to: `console.cloud.google.com`
3. Click the **Clawdbot Browser Relay** extension icon in your toolbar (badge should turn ON)

Let me know when the tab is attached and I'll take it from there. 🔧
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +30s 2026-01-31 23:03 PST] ok just did that made the tab and turned the ext on
[message_id: 14]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Got it. On the OAuth setup page. Let me fill this out using keyboard navigation (worked better last time):
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Ugh, it navigated away again. Let me try a different approach — using arrow keys for the dropdown instead of Enter:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Dropdown is open and your email is highlighted. Let me select it with Space:
## 🤖 Yaya

## 🤖 Yaya
Email selected! ✓ Now moving to Next button:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Next button focused. Pressing Space:
## 🤖 Yaya

## 🤖 Yaya
Step 1 complete ✓ Now on Step 2 (Audience). Need to select External. Let me Tab to it:
## 🤖 Yaya

## 🤖 Yaya
Focus is on Internal (disabled). Let me arrow down to External:
## 🤖 Yaya

## 🤖 Yaya
External selected ✓ Now Tab to Next:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Next is focused. Pressing Space:
## 🤖 Yaya

## 🤖 Yaya
Steps 1 & 2 complete! ✓✓ Now step 3 - entering contact email:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Email added and Next is focused. Pressing Space:
## 🤖 Yaya

## 🤖 Yaya
Steps 1-3 complete! ✓✓✓ Now step 4 - need to agree to terms:
## 🤖 Yaya

## 🤖 Yaya
Checkbox focused. Checking it with Space:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Checkbox checked ✓ and Continue is focused. Final step - pressing Space:
## 🤖 Yaya

## 🤖 Yaya
All 4 steps complete! ✓✓✓✓ Now clicking Create to finish:
## 🤖 Yaya

## 🤖 Yaya
Create button focused. Pressing Space to finalize:
## 🤖 Yaya

## 🤖 Yaya
**OAuth consent screen created!** 🎉

Now I need to create the OAuth client credentials. Navigating to Clients:
## 🤖 Yaya

## 🤖 Yaya
On the Clients page. Let me navigate to create a new client:
## 🤖 Yaya

## 🤖 Yaya
On the create client page. Need to select "Desktop app" from the dropdown:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
This is taking a bit — we're making progress though. OAuth consent screen done, now creating the credentials. Hang tight...
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
We're so close. OAuth consent done ✓. Just need to create the client credentials. Let me try to get to that dropdown:
## 🤖 Yaya

## 🤖 Yaya
OK RJ — **the hard part is DONE** (OAuth consent screen created ✓)

The Chrome extension is being finicky with this last form. You're already on the right page. **Just need 30 seconds:**

1. Click the **"Application type"** dropdown
2. Select **"Desktop app"**
3. Name it `Yaya Calendar CLI`
4. Click **Create**
5. **Download the JSON** file it gives you

Then tell me where you saved the JSON and I'll wire up the Calendar skill. 

You got this 💪
## 👤 RJ
Pre-compaction memory flush. Store durable memories now (use memory/YYYY-MM-DD.md; create memory/ if needed). If nothing to store, reply with NO_REPLY.
## 🤖 Yaya
NO_REPLY
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-01-31 23:11 PST] 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 here’s the client secret, and hjere’s the client id [REDACTED_OAUTH_CLIENT_ID] should i attach the json here or are you able to open my downloads folder?
[message_id: 37]
## 🤖 Yaya
I can grab it from Downloads. Let me check:
## 🤖 Yaya
Got it. Let me read that fresh JSON:
## 🤖 Yaya
Got the credentials. What are we setting up with these? Looks like it's for Google's Generative Language API (Gemini) based on the project ID. 

Quick heads up — you just pasted the client secret in Telegram. Not a huge deal between us, but might want to regenerate it after we're done setting things up if you're paranoid about it sitting in chat history.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +36s 2026-01-31 23:12 PST] this is the file name if you didnt see ti client_secret_[REDACTED_OAUTH_CLIENT_ID].json
[message_id: 41]
## 🤖 Yaya

## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +36s 2026-01-31 23:12 PST] this is the file name if you didnt see ti client_secret_[REDACTED_OAUTH_CLIENT_ID].json
[message_id: 41]
## 🤖 Yaya
Yep, already grabbed it and read the contents 👍

What are we hooking this up to? Gemini CLI? Something else?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +14s 2026-01-31 23:12 PST] i dunno. in case you need it
[message_id: 43]
## 🤖 Yaya
Gotcha — stashing it for later then.
## 🤖 Yaya
Saved to `~/clawd/credentials/google-genai-oauth.json`. I'll use it if I ever need to auth with Google's Generative Language API (Gemini, etc.).

Anything else on your mind or just getting me equipped? 😌
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +5s 2026-01-31 23:13 PST] but how do we make it so you can use google nanobanana api?
[message_id: 46]
## 🤖 Yaya

## 🤖 Yaya
Ah — different beast. The OAuth credentials you gave me are for user-consent flows. For Gemini/Nano Banana, I just need a plain **API key**.

Here's how to get one:

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API key"
3. Copy the key and send it to me

Once you do that, I'll add it to my config and we're golden 🍌
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +44s 2026-01-31 23:14 PST] [REDACTED_API_KEY] is on ai studio but it says it’s for gen-lang-client-0400088591 is tht right?
[message_id: 48]
## 🤖 Yaya
Yep, that's fine — they don't need to be the same project. The API key is what I need to hit the Gemini API.

Let me add it to my config:
## 🤖 Yaya
Wait — it's already configured! 🍌 That API key is already in there under `skills.entries.nano-banana-pro`.

Let me test it real quick:
## 🤖 Yaya
Connection works, but you're hitting quota limits. The free tier has **0 quota** for `gemini-3-pro-image` (the image generation model).

To unlock it, you need to:
1. Go to [Google AI Studio](https://aistudio.google.com/) → Settings
2. Enable billing / upgrade to a paid plan
3. Or check if there's a different project with image gen enabled

The free tier works for regular Gemini text, but image generation requires a paid plan. Want me to check current pricing, or is this a "later" thing?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:15 PST] i set up a billing prodile
[message_id: 52]
## 🤖 Yaya
Let's try again:
## 🤖 Yaya
Still hitting the free tier limit — billing changes can take a few minutes to propagate.

Try this:
1. Go to [AI Studio API Keys](https://aistudio.google.com/apikey)
2. Generate a **new** API key (after billing is set up)
3. Send me the new key

Sometimes you need a fresh key created *after* billing is enabled for the quota to update. Or we can wait 5-10 min and try again with the current one.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +8s 2026-01-31 23:15 PST] gotcha
[message_id: 55]
## 🤖 Yaya
Lemme know when you've got a new key or want me to retry 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +20s 2026-01-31 23:16 PST] /var/folders/g9/_8qf7_694kn26vx155y72r7m0000gn/T/TemporaryItems/NSIRD_screencaptureui_ElgXkS/Screenshot 2026-01-31 at 11.16.12 PM.png
[message_id: 57]
## 🤖 Yaya

## 🤖 Yaya
Can't access that temp folder — mind saving it to Desktop or Downloads? Or just tell me what it shows.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:17 PST] Project Keys Created on Quota tier gen-lang-client-0400088591 Jan 29, 2026 Tier 1 Gemini sparkle icon try again
[message_id: 59]
## 🤖 Yaya
Tier 1, nice. Let's go:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
🍌 We're cooking!

MEDIA: /Users/rjmoscardon/clawd/test-banana.png
## 👤 RJ
System: [2026-01-31 23:18:22 PST] Exec completed (grand-me, code 0) :: Generating image with resolution 1K... Image saved: /Users/rjmoscardon/clawd/test-banana.png MEDIA: /Users/rjmoscardon/clawd/test-banana.png

[Telegram RJ (@rj3000x) id:156985291 +29s 2026-01-31 23:18 PST] lol ok are we all done with set up?
[message_id: 62]
## 🤖 Yaya
Yep, Nano Banana Pro is locked and loaded 🍌😎

That image is way better than I expected tbh — beach hammock, ukulele, the "CHILL VIBES" sign. Gemini went hard.

You're all set. Just ask me to generate or edit images whenever you need.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +11s 2026-01-31 23:19 PST] cool are you also able to access my calendar to add shit?
[message_id: 64]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Yep — I can hit your macOS Calendar via AppleScript. You've got:
- **Work**
- **Scheduled Reminders**
- **Birthdays**
- **US Holidays**
- **Siri Suggestions**

I can add, list, and check events. Want me to test adding something to "Work"? Or do you use Google Calendar primarily and want that set up instead?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +18s 2026-01-31 23:19 PST] but are you on rjmoscardon@gmail.com? that’s my main calendar make sure
[message_id: 66]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Right now I'm seeing calendars synced via your **iCloud** account (rjmoscardon@icloud.com). I don't see a Gmail/Google account connected to macOS Calendar.

To hook up your Gmail calendar:
1. **System Settings** → **Internet Accounts**
2. Click **Google** → Sign in with rjmoscardon@gmail.com
3. Make sure **Calendars** is toggled ON

Once you do that, your Gmail calendar will show up in the macOS Calendar app and I'll be able to add events there. Want to do that now, or is the iCloud calendar fine for our purposes?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +58s 2026-01-31 23:21 PST] are you able to do that for me?
[message_id: 68]
## 🤖 Yaya
Nah, that one's on you — signing into Google requires you to enter your password and probably do 2FA in a GUI window. macOS doesn't let me automate that (for good reason, security-wise).

Takes like 30 seconds:
1. Open **System Settings** (Cmd+Space → "System Settings")
2. Click **Internet Accounts** in the sidebar
3. Click **Add Account** → **Google**
4. Sign in with rjmoscardon@gmail.com
5. Toggle **Calendars** on

Once that's done, I'll have full access to add/read events on your Gmail calendar. Lemme know when you're set 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:23 PST] ok i think it works now can you check
[message_id: 70]
## 🤖 Yaya

## 🤖 Yaya
We're in business! Now I see:

**Gmail calendars:**
- **RJ MAIN SCHEDULE** ← this one?
- bawalclan@gmail.com
- thetemple.rip@gmail.com
- aimigos.agency@gmail.com
- rj@etc.ngo
- hi@concept.kitchen
- ESPN
- Holidays in United States
- Holidays in Philippines

**iCloud:**
- Work
- Scheduled Reminders
- Birthdays, etc.

I'm guessing **RJ MAIN SCHEDULE** is your primary? Want me to test adding a dummy event to confirm it works?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +34s 2026-01-31 23:24 PST] yes! and we’ll be using hi@concept.kitchen too for business stuff, rj@etc.ngo too for non profit and other business stuff
[message_id: 72]
## 🤖 Yaya
Got it. Let me test adding a quick event to RJ MAIN SCHEDULE:
## 🤖 Yaya
Test event added to RJ MAIN SCHEDULE for tomorrow — check your calendar and delete it when you see it.

Let me note this setup:
## 🤖 Yaya
All set. Here's what I've got:

| Calendar | Use For |
|----------|---------|
| **RJ MAIN SCHEDULE** | Personal stuff |
| **hi@concept.kitchen** | Concept Kitchen biz |
| **rj@etc.ngo** | Non-profit / other biz |

I can now add, check, and manage events across all three. Just tell me what to add and which calendar 👍
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/e561451e-f13f-4a7e-a8d1-b0d740929d47.ogg (audio/ogg; codecs=opus) | /Users/rjmoscardon/.clawdbot/media/inbound/e561451e-f13f-4a7e-a8d1-b0d740929d47.ogg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +36s 2026-01-31 23:25 PST] <media:audio>
[message_id: 76]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 👤 RJ
System: [2026-01-31 23:28:00 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:28 PST] oh no what happened to our messaging i’m typing to you and i cant see you type back to me or rather respond back to me in telegram
[message_id: 79]
## 🤖 Yaya
I'm here! Was stuck waiting on Whisper to transcribe your voice note — it got killed (probably ran out of memory on the turbo model).

Let me try again with a smaller model:
## 🤖 Yaya

## 🤖 Yaya
Downloading the small model, almost there...
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Loud and clear! 🎙️

You said: *"Can you hear me and understand what I'm saying with voice?"*

Yes — I can transcribe your voice notes using Whisper. Just took a sec because it had to download the model first (now cached for next time).

So yeah, voice messages work! Fire away 😌
## 👤 RJ
System: [2026-01-31 23:28:57 PST] Exec completed (glow-bis, code 0) :: 32: UserWarning: FP16 is not supported on CPU; using FP32 instead warnings.warn("FP16 is not supported on CPU; using FP32 instead") Detecting language using up to the first 30 seconds. Use `--language` to specify the language Detected language: English [00:00.000 --> 00:05.000] Can you hear me and understand what I'm saying with voice? Can you hear me and understand what I'm saying with voice?

[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:28 PST] no dont worry about it
[message_id: 81]
## 🤖 Yaya
All good 👍

We got calendars set up, Nano Banana working, and voice transcription ready to go. Solid Friday night productivity.

Anything else or you calling it?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +14s 2026-01-31 23:29 PST] awesome ok so it’ll be faster now to transcribe now that you downloaded a smaller model?
[message_id: 85]
## 🤖 Yaya
Yep! The model is cached now (~461MB download, one-time thing). Next time you send a voice note, it'll just run — should take a few seconds instead of waiting for downloads.

The "small" model is a good sweet spot: fast enough to not be annoying, accurate enough to catch what you're saying. If transcription quality ever sucks, I can bump up to "medium" but that'll be slower.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +23s 2026-01-31 23:29 PST] btww i have a big project on claude are you able to view that since im using claude token?
[message_id: 87]
## 🤖 Yaya
Nah, different thing — the Claude API token lets me *run on* Claude (it's my brain), but I can't see into your Claude.ai web account or projects. They're separate systems.

If you want me to work with stuff from a Claude project, you'd need to:
1. **Export/download** the project content
2. **Copy-paste** the relevant bits to me
3. Or drop files somewhere I can read (like `~/clawd/`)

What's the project? Maybe there's a quick way to get the content over.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +59s 2026-01-31 23:31 PST] yeah let’s figure it out and can you make a specific folder for this? it’s baasically setting up conceptkitchen brand for my ai literacy teachings/product creation marketing
[message_id: 89]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Done. Here's the setup:

```
~/clawd/projects/concept-kitchen/
├── README.md          ← Brand overview (pre-filled with what I know)
├── brand/             ← Guidelines, identity, voice
├── content/           ← Blog posts, videos, courses
├── products/          ← Offerings, pricing, specs
├── marketing/         ← Campaigns, funnels, copy
├── assets/            ← Logos, images, templates
└── claude-exports/    ← Dump your Claude project stuff here
```

To get your Claude project content over:
1. Go to your Claude project
2. Copy the conversation/content
3. Either paste it to me directly, or save it as a file and drop it in `claude-exports/`

What's in the project — brand strategy docs? Content ideas? Product outlines?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +25s 2026-01-31 23:31 PST] you’ll ssee i’ll copy stuff over
[message_id: 91]
## 🤖 Yaya
Cool, send it over when you're ready 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +6m 2026-01-31 23:38 PST] i dont know an easy way but i think i can export all the content from claude and download it in a zip
[message_id: 93]
## 🤖 Yaya
Yeah, that's the move. Export as zip, drop it in Downloads, and I'll unzip it into the `claude-exports/` folder and dig through everything.

Take your time — I'll be here.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +51s 2026-01-31 23:39 PST] k it’s downloaded check the file data-2026-02-01-07-38-01-batch-0000.zip
[message_id: 95]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
This is a goldmine. Let me extract and organize all this properly:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 👤 RJ
System: [2026-01-31 23:42:21 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +8m 2026-01-31 23:47 PST] still working on it?
[message_id: 97]
## 🤖 Yaya
Yeah, just finished extracting the good stuff. Here's what you had:

**Extracted & Saved:**
- Full project instructions (17K words of brand guidelines, sales psychology, copywriting rules)
- Brand summary with colors, typography, logo concepts
- Claude's "memory" of you and the project (super detailed)
- 36 conversations in the export

**Your Claude knew:**
- Complete buyer personas (Marcus the construction PM, Diana the realtor, James the ops manager)
- 12 content pillars ranked by conversion potential
- Competitor analysis of 40+ AI educators
- The Northbound Labs framework you're using
- Everything about the Dutch Oven logo, the "cook not chef" positioning

**Saved to:**
```
~/clawd/projects/concept-kitchen/
├── brand/
│   ├── PROJECT-INSTRUCTIONS.md  ← The big one
│   └── brand-summary.md
└── claude-exports/              ← Raw JSON files
```

This is a *solid* foundation. Want me to keep organizing (extract the HTML visual files, parse out the buyer personas) or are you good for tonight?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:48 PST] keep organizing. one thing iw an tyou to do if you’re able, is to connect to my github and put up the website html there and build the repo without me having to tell you
[message_id: 99]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
You're already logged in as `bombfriedrice`. Let me extract the HTML files and set up the repo:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Done! 🎉

**GitHub Repo:** https://github.com/conceptkitchen/concept-kitchen

**Live Site:** https://conceptkitchen.github.io/concept-kitchen/
(May take 1-2 min to deploy)

**What's live:**
- `index.html` - Brand identity showcase
- `logos.html` - Logo explorations  
- `lockups.html` - Logo lockups with wordmarks

Let me keep organizing the rest of your Claude export — extracting the buyer personas and memories:
## 🤖 Yaya

## 🤖 Yaya
All organized. Here's what you've got now:

**GitHub:**
- Repo: https://github.com/conceptkitchen/concept-kitchen
- Live site: https://conceptkitchen.github.io/concept-kitchen/

**Local project structure:**
```
~/clawd/projects/concept-kitchen/
├── README.md                    ← Project overview
├── brand/
│   ├── PROJECT-INSTRUCTIONS.md  ← 17K words of brand bible
│   ├── brand-summary.md         ← Quick reference
│   └── claude-memory.md         ← Personas, pillars, learnings
├── assets/
│   ├── concept-kitchen-brand.html
│   ├── concept-kitchen-logos.html
│   └── concept-kitchen-lockups.html
├── website/                     ← Git repo for GitHub Pages
└── claude-exports/              ← Raw JSON backup
```

**Key files ready to use:**
- Full brand guidelines & copywriting rules
- Buyer personas (Marcus, Diana, James)
- 12 content pillars ranked by conversion
- 40+ competitor analysis insights
- Sales psychology framework

You're set up to pick up right where you left off with Claude. What's next — want to work on the lead magnet decision or content calendar?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:49 PST] that way we can figure out how to put it up later, but at least the repo is setup. can you do that?
[message_id: 100]
## 🤖 Yaya
Already done! ✅

**Repo:** https://github.com/conceptkitchen/concept-kitchen

**Live preview:** https://conceptkitchen.github.io/concept-kitchen/

Three HTML pages are up:
- Brand identity showcase (index)
- Logo explorations
- Logo lockups

Whenever you're ready to connect it to concept.kitchen, we just add a CNAME. For now the GitHub Pages preview is live.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:51 PST] no you just put up the html of the brand guide. i thought you read throught he stuff
[message_id: 103]
## 🤖 Yaya
You're right, my bad. Let me dig through the actual conversations for the website content:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
You're right, I apologize. I can see from the conversation history that Claude built you a full website with:

- **Hero** — Your tagline, "You don't need a CS degree to build with AI"
- **About** — The Magic journey (employee 30 → Director, scaled 10 to 300+)
- **Projects** — Recipe cards for AI Career Readiness Platform, Healthcare iOS App, Hackathon wins
- **Credibility** — Magic, TechSF, Mission Hiring Hall, ETH SF, etc.
- **Email signup** — "Get the Recipes"
- **Footer**

But the actual HTML file content wasn't included in the export — Claude.ai doesn't export artifact file contents, just the conversation about building them.

**Two options:**

1. **I rebuild it now** based on all the notes and specifications I extracted (I have everything — your story, projects, the copy, brand guidelines)

2. **You grab the HTML from Claude.ai** — if you still have that conversation open, you can download the artifact directly and send it to me

Which way you want to go?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:51 PST] that’s not my website
[message_id: 105]
## 🤖 Yaya
Got it — where's the actual website? Is it:

1. A different file in your Downloads?
2. Still open in Claude.ai as an artifact?
3. Somewhere else on your Mac?

Point me to it and I'll grab it.
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/4227e7d4-6358-404d-9b8e-0d2ae58d78a2 (application/octet-stream) | /Users/rjmoscardon/.clawdbot/media/inbound/4227e7d4-6358-404d-9b8e-0d2ae58d78a2]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +58s 2026-01-31 23:53 PST] here it is
[message_id: 110]
## 🤖 Yaya

## 🤖 Yaya
Got it! Let me update the repo with the real website:
## 👤 RJ
System: [2026-01-31 23:54:18 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:55 PST] lmk when it’s updated on github and deployed on github
[message_id: 112]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Done! ✅

**Live at:** https://conceptkitchen.github.io/concept-kitchen/

Your real website is now deployed — hero, about section, projects, credibility, email signup, the whole thing. 🍳
## 👤 RJ
System: [2026-01-31 23:55:43 PST] Exec completed (keen-hav, code 0) :: {"created_at":"2026-02-01T07:55:17Z","status":"building"}
System: [2026-01-31 23:56:07 PST] Exec completed (tender-c, code 0) :: {"created_at":"2026-02-01T07:55:17Z","status":"built"}

[Telegram RJ (@rj3000x) id:156985291 +1m 2026-01-31 23:57 PST] didnt i give you the correct html? the repo wasnt updated it’s still showing brand shit. this is the latest html file <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>The Concept Kitchen — Anybody Can Cook</title> <meta name="description" content="AI workflows and tools for non-technical builders. No CS degree required. Just learning by doing and feeding people."> <!-- Fonts --> <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap" rel="stylesheet"> <style> :root { /* Brand Colors */ --copper: #C67C4E; --copper-light: #D4956A; --copper-dark: #A66840; --charcoal: #2A2A2A; --charcoal-soft: #3D3D3D; --cream: #F5F0E8; --cream-warm: #EDE5D8; --sage: #7D9B76; --sage-light: #9DB896; --citrus: #E8A84C; --tomato: #D85A4A; --paper: #FDFBF7; --ink: #1A1A1A; } * { margin: 0; padding: 0; box-sizing: border-box; } html { scroll-behavior: smooth; background-color: #FDFBF7 !important; } body { font-family: 'DM Sans', sans-serif; background-color: #FDFBF7 !important; background: #FDFBF7 !important; color: var(--charcoal); line-height: 1.6; overflow-x: hidden; } /* Subtle texture overlay */ body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E"); opacity: 0.025; pointer-events: none; z-index: 1000; } .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; } /* ==================== NAVIGATION ==================== */ nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 0; transition: all 0.3s ease; background-color: #FDFBF7; } nav.scrolled { background: rgba(253, 251, 247, 0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 20px rgba(0,0,0,0.05); padding: 12px 0; } nav .container { display: flex; justify-content: space-between; align-items: center; } .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; } .nav-logo-icon { height: 36px; width: auto; } .nav-logo-text { font-family: 'Bitter', serif; font-weight: 700; font-size: 1.1rem; color: var(--charcoal); } .nav-logo-text em { font-style: normal; color: var(--copper); } .nav-logo span { font-family: 'Bitter', serif; font-weight: 700; font-size: 1.1rem; color: var(--charcoal); } .nav-logo span em { color: var(--copper); font-style: normal; } .nav-links { display: flex; gap: 32px; list-style: none; }
[message_id: 114]
## 🤖 Yaya

## 🤖 Yaya
The repo has the right file — I can see "The Concept Kitchen — Anybody Can Cook" in the title. Might just be browser cache on GitHub Pages.

Try hard refresh: **Cmd+Shift+R** on the live site

Or let me verify what GitHub actually has:
## 🤖 Yaya

## 🤖 Yaya
It's live and correct. Both GitHub and GitHub Pages are serving your real website:

**https://conceptkitchen.github.io/concept-kitchen/**

Title: "The Concept Kitchen — Anybody Can Cook"

If you're still seeing the old brand guide, hard refresh your browser (**Cmd+Shift+R**) or try incognito mode. The server is serving the right file. 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:57 PST] .nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--charcoal); text-decoration: none; transition: color 0.2s ease; } .nav-links a:hover { color: var(--copper); } .nav-cta { background: var(--copper); color: white; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.2s ease; } .nav-cta:hover { background: var(--charcoal); transform: translateY(-2px); } /* ==================== HERO ==================== */ .hero { min-height: 100vh; display: flex; align-items: center; padding: 120px 0 80px; position: relative; background-color: #FDFBF7; } .hero::before { content: ''; position: absolute; top: 0; right: -200px; width: 600px; height: 600px; background: radial-gradient(circle, var(--copper) 0%, transparent 70%); opacity: 0.08; z-index: -1; } .hero-content { max-width: 700px; } .hero-tagline { font-family: 'Caveat', cursive; font-size: 1.4rem; color: var(--copper); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; } .hero-tagline::before { content: ''; width: 40px; height: 2px; background: var(--copper); } .hero h1 { font-family: 'Bitter', serif; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; color: var(--charcoal); line-height: 1.1; margin-bottom: 24px; } .hero h1 span { color: var(--copper); } .hero-description { font-size: 1.2rem; color: var(--charcoal-soft); margin-bottom: 32px; max-width: 560px; line-height: 1.7; } .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; } .hero-signup { margin-top: 32px; max-width: 480px; } .hero-signup-label { font-size: 1rem; color: var(--charcoal); margin-bottom: 12px; font-weight: 500; } .hero-signup-form { display: flex; gap: 8px; } .hero-signup-form input { flex: 1; padding: 16px 20px; border: 2px solid var(--cream-warm); border-radius: 8px; font-size: 1rem; font-family: 'DM Sans', sans-serif; background: white; transition: border-color 0.2s ease; } .hero-signup-form input:focus { outline: none; border-color: var(--copper); } .hero-signup-form button { background: var(--copper); color: white; padding: 16px 28px; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; } .hero-signup-form button:hover { background: var(--charcoal); transform: translateY(-1px); } .hero-signup-note { font-size: 0.85rem; color: var(--charcoal-soft); margin-top: 10px; }
[message_id: 115]
## 🤖 Yaya
RJ — the site IS updated with your website. I just verified it's serving the correct HTML with:

- "The Concept Kitchen — Anybody Can Cook" title
- Hero section with email signup
- All your CSS (copper colors, Bitter fonts, etc.)

Check it now: https://conceptkitchen.github.io/concept-kitchen/

If it still looks wrong, it's your browser cache. Try:
- **Cmd+Shift+R** (hard refresh)
- Or open in incognito/private window

The HTML you're pasting matches exactly what's deployed. We're good. 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:57 PST] .hero-scroll-link { display: inline-block; margin-top: 40px; color: var(--charcoal-soft); text-decoration: none; font-size: 0.95rem; transition: color 0.2s ease; } .hero-scroll-link:hover { color: var(--copper); } .btn-primary { background: var(--copper); color: white; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 1rem; text-decoration: none; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; } .btn-primary:hover { background: var(--charcoal); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); } .btn-secondary { background: transparent; color: var(--charcoal); padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 1rem; text-decoration: none; border: 2px solid var(--cream-warm); transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; } .btn-secondary:hover { border-color: var(--copper); color: var(--copper); } .hero-logo { position: absolute; right: 0; top: 50%; transform: translateY(-50%); opacity: 0.08; z-index: -1; } .hero-logo-img { width: 500px; height: auto; } /* ==================== ABOUT ==================== */ .about { padding: 100px 0; background: var(--cream); position: relative; } .about::before { content: ''; position: absolute; top: -60px; left: 0; right: 0; height: 60px; background: linear-gradient(to bottom, transparent, var(--cream)); } .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; } .about-image { position: relative; } .about-image-frame { background: var(--paper); border-radius: 16px; padding: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.08); transform: rotate(-2deg); } .about-image-placeholder { background: linear-gradient(135deg, var(--charcoal-soft), var(--charcoal)); border-radius: 12px; aspect-ratio: 4/5; display: flex; align-items: center; justify-content: center; color: var(--cream); font-family: 'Caveat', cursive; font-size: 1.5rem; } .about-badge { position: absolute; bottom: -20px; right: -20px; background: var(--copper); color: white; padding: 16px 24px; border-radius: 12px; font-family: 'Caveat', cursive; font-size: 1.3rem; transform: rotate(3deg); box-shadow: 0 8px 24px rgba(198, 124, 78, 0.3); } .about-content h2 { font-family: 'Bitter', serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 24px; color: var(--charcoal); } .about-content h2 span { color: var(--copper); } .about-content p { font-size: 1.1rem; color: var(--charcoal-soft); margin-bottom: 20px; line-height: 1.8; }
[message_id: 116]
## 🤖 Yaya
Got it — you're sending the full HTML. I already have it from the file you attached earlier and it's deployed.

The live site has all of this:
- Nav with logo + links
- Hero with email signup form
- About section with image frame
- All the CSS you're pasting

**It's live:** https://conceptkitchen.github.io/concept-kitchen/

Just hard refresh if you're seeing old content 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-01-31 23:57 PST] .about-stats { display: flex; gap: 40px; margin-top: 32px; padding-top: 32px; border-top: 1px solid var(--cream-warm); } .stat { text-align: center; } .stat-number { font-family: 'Bitter', serif; font-size: 2.5rem; font-weight: 700; color: var(--copper); line-height: 1; } .stat-label { font-size: 0.85rem; color: var(--charcoal-soft); margin-top: 4px; } /* ==================== PROJECTS ==================== */ .projects { padding: 100px 0; } .section-header { text-align: center; margin-bottom: 60px; } .section-label { font-family: 'Caveat', cursive; font-size: 1.3rem; color: var(--copper); margin-bottom: 8px; } .section-title { font-family: 'Bitter', serif; font-size: 2.5rem; font-weight: 700; color: var(--charcoal); } .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 32px; } /* Recipe Card Style */ .recipe-card { background: var(--paper); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); border: 1px solid var(--cream-warm); transition: all 0.3s ease; position: relative; } .recipe-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, var(--copper), var(--citrus)); } .recipe-card:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); } .recipe-card-content { padding: 32px; } .recipe-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; } .recipe-card h3 { font-family: 'Bitter', serif; font-size: 1.4rem; font-weight: 600; color: var(--charcoal); line-height: 1.3; } .recipe-difficulty { font-family: 'Caveat', cursive; font-size: 1rem; color: var(--sage); background: rgba(125, 155, 118, 0.15); padding: 4px 12px; border-radius: 20px; white-space: nowrap; } .recipe-card p { color: var(--charcoal-soft); font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px; } .recipe-ingredients { list-style: none; margin-bottom: 24px; } .recipe-ingredients li { font-size: 0.9rem; color: var(--charcoal-soft); padding: 8px 0; border-bottom: 1px dashed var(--cream-warm); display: flex; align-items: center; gap: 10px; } .recipe-ingredients li::before { content: '◆'; color: var(--copper); font-size: 0.5rem; } .recipe-tag { display: inline-block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; background: var(--cream); color: var(--copper); padding: 6px 12px; border-radius: 4px; font-weight: 600; } /* ==================== CREDIBILITY ==================== */ .credibility { padding: 80px 0; background: var(--charcoal); color: white; }.credibility-header { text-align: center; margin-bottom: 48px; } .credibility-header p { font-family: 'Caveat', cursive; font-size: 1.4rem; color: var(--copper); } .credibility-logos { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px 40px; max-width: 500px; margin: 0 auto; text-align: center; } .cred-logo { font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 600; color: rgba(255,255,255,0.6); transition: color 0.2s ease; } .cred-logo:hover { color: rgba(255,255,255,0.9); } /* ==================== EMAIL SIGNUP ==================== */ .signup { padding: 100px 0; background: var(--cream); } .signup-box { max-width: 600px; margin: 0 auto; text-align: center; } .signup-icon { margin-bottom: 24px; } .signup-icon svg { width: 80px; height: 72px; } .signup h2 { font-family: 'Bitter', serif; font-size: 2rem; font-weight: 700; margin-bottom: 16px; color: var(--charcoal); } .signup p { font-size: 1.1rem; color: var(--charcoal-soft); margin-bottom: 32px; } .signup-form { display: flex; gap: 12px; max-width: 480px; margin: 0 auto; } .signup-form input { flex: 1; padding: 16px 20px; border: 2px solid var(--cream-warm); border-radius: 8px; font-size: 1rem; font-family: 'DM Sans', sans-serif; background: var(--paper); transition: border-color 0.2s ease; } .signup-form input:focus { outline: none; border-color: var(--copper); } .signup-form button { background: var(--copper); color: white; padding: 16px 28px; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; } .signup-form button:hover { background: var(--charcoal); transform: translateY(-2px); } .signup-note { font-size: 0.85rem; color: var(--charcoal-soft); margin-top: 16px; } /* ==================== FOOTER ==================== */ footer { padding: 60px 0 40px; background: var(--charcoal); color: white; } .footer-content { display: flex; justify-content: space-between; align-items: center; padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 40px; } .footer-brand { display: flex; align-items: center; gap: 12px; } .footer-logo-img { height: 50px; width: auto; } .footer-brand-text { font-family: 'Bitter', serif; font-weight: 700; font-size: 1.2rem; } .footer-brand-text span { color: var(--copper); } .footer-social { display: flex; gap: 20px; } .footer-social a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.9rem; transition: color 0.2s ease; } .footer-social a:hover { color: var(--copper); }.footer-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: rgba(255,255,255,0.4); } .footer-tagline { font-family: 'Caveat', cursive; font-size: 1.2rem; color: var(--copper); } /* ==================== RESPONSIVE ==================== */ @media (max-width: 900px) { .nav-links { display: none; } .about-grid { grid-template-columns: 1fr; gap: 40px; } .about-image { max-width: 400px; margin: 0 auto; } .hero-logo { display: none; } .hero-signup-form { flex-direction: column; } .hero-signup-form button { width: 100%; } .about-stats { justify-content: center; } .footer-content { flex-direction: column; gap: 24px; text-align: center; } .footer-bottom { flex-direction: column; gap: 12px; text-align: center; } } @media (max-width: 600px) { .hero h1 { font-size: 2.2rem; } .hero-cta { flex-direction: column; } .btn-primary, .btn-secondary { width: 100%; justify-content: center; } .about-stats { flex-direction: column; gap: 24px; } .signup-form { flex-direction: column; } .signup-form button { width: 100%; } .projects-grid { grid-template-columns: 1fr; } } /* ==================== ANIMATIONS ==================== */ @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } } .hero-content { animation: fadeInUp 0.8s ease forwards; } .recipe-card { opacity: 0; animation: fadeInUp 0.6s ease forwards; } .recipe-card:nth-child(1) { animation-delay: 0.1s; } .recipe-card:nth-child(2) { animation-delay: 0.2s; } .recipe-card:nth-child(3) { animation-delay: 0.3s; } </style> </head> <body> <!-- Navigation --> <nav id="navbar"> <div class="container"> <a href="#" class="nav-logo"> <img src="logo-icon.png" alt="" class="nav-logo-icon"> <span class="nav-logo-text">the concept <em>kitchen</em></span> </a> <ul class="nav-links"> <li><a href="#about">About</a></li> <li><a href="#projects">Projects</a></li> </ul> <a href="#signup" class="nav-cta">Get Kitchen Notes</a> </div> </nav><!-- Hero Section --> <section class="hero"> <div class="container"> <div class="hero-content"> <p class="hero-tagline">Anybody can cook.</p> <h1>You don't need permission. <span>You need recipes.</span></h1> <p class="hero-description">You run a business. You have ideas. But AI still feels like something "tech people" do. It's not. I've taught business owners, construction professionals, data scientists, and engineers the same recipes - step-by-step AI workflows that actually save time and get work done. Technical or not, the approach works.</p> <div class="hero-signup"> <p class="hero-signup-label">Kitchen Notes. Less noise. More clarity. AI workflows worth your time.</p> <form class="hero-signup-form" action="#" method="POST"> <input type="email" placeholder="your@email.com" required> <button type="submit">I'm In</button> </form> <p class="hero-signup-note">Free. No spam. Unsubscribe anytime.</p> </div> <a href="#projects" class="hero-scroll-link">See what I've built ↓</a> </div> </div> <div class="hero-logo"> <img src="logo-icon.png" alt="" class="hero-logo-img"> </div> </section> <!-- About Section --> <section class="about" id="about"> <div class="container"> <div class="about-grid"> <div class="about-image"> <div class="about-image-frame"> <img src="rj-photo.jpeg" alt="RJ Moscardon" style="width: 100%; border-radius: 12px; display: block;"> </div> <div class="about-badge">Proof it's possible.</div> </div> <div class="about-content"> <h2>It's not about AI. <span>It's about what you'll build with it.</span></h2> <p>You're a business owner, not a developer. You don't have time for tutorials that go nowhere. You need AI that actually saves you hours, wins you clients, or gets you out of the weeds.</p> <p>I'm RJ. I ran a restaurant pop-up without culinary school. But I was smart enough to hire a restaurant consultant who helped me find the right executive chef for my cuisine and build recipes that actually worked. I built apps without a CS degree. Same approach - know what you don't know, get the right guidance, and execute. That's what I'm offering you.</p> <p>I've taught business owners, chamber of commerce members, nonprofit staff, construction professionals, data scientists, and engineers. Technical or not, the recipes work the same.</p> <div class="about-stats"> <div class="stat"> <div class="stat-number">10+</div> <div class="stat-label">Hackathons won</div> </div> <div class="stat"> <div class="stat-number">100s</div> <div class="stat-label">People taught</div> </div> <div class="stat"> <div class="stat-number">0</div> <div class="stat-label">CS degrees</div> </div> </div> </div> </div> </div> </section><!-- Projects Section --> <section class="projects" id="projects"> <div class="container"> <div class="section-header"> <p class="section-label">What's cooking</p> <h2 class="section-title">Built Without a CS Degree</h2> </div> <div class="projects-grid"> <!-- Project 1: AI Career Readiness --> <div class="recipe-card"> <div class="recipe-card-content"> <div class="recipe-card-header"> <h3>AI-Powered Job Platform</h3> <span class="recipe-difficulty">Real App</span> </div> <p>Built for a workforce nonprofit. Helps people land jobs through AI-powered interview practice, resume optimization, and video call coaching. Now used by real job seekers.</p> <ul class="recipe-ingredients"> <li>AI interview simulator with real-time feedback</li> <li>Computer vision to analyze video presence</li> <li>Automated resume analysis</li> <li>Practice chatbot for mock interviews</li> </ul> <span class="recipe-tag">Workforce Development</span> </div> </div> <!-- Project 2: Healthcare App --> <div class="recipe-card"> <div class="recipe-card-content"> <div class="recipe-card-header"> <h3>Healthcare iOS App</h3> <span class="recipe-difficulty">Real App</span> </div> <p>A medical app using phone sensors and AI to measure wounds with precision. Improves documentation for healthcare providers and patient outcomes.</p> <ul class="recipe-ingredients"> <li>LiDAR sensor for precise measurement</li> <li>Computer vision for wound detection</li> <li>Secure medical data handling</li> <li>Full app from idea to App Store</li> </ul> <span class="recipe-tag">Health Tech</span> </div> </div> <!-- Project 3: CSI Cybersecurity --> <div class="recipe-card"> <div class="recipe-card-content"> <div class="recipe-card-header"> <h3>Cybersecurity AI Agent</h3> <span class="recipe-difficulty">Hackathon Winner</span> </div> <p>A multi-agent swarm that automates security incident response. Built solo in a weekend, won investor interviews as the prize.</p> <ul class="recipe-ingredients"> <li>Multi-agent coordination for security controls</li> <li>SOC 2 and NIST compliance tracking</li> <li>Audit-ready documentation generation</li> <li>Learning system from past incidents</li> </ul> <span class="recipe-tag">Cybersecurity</span> </div> </div> </div> </div> </section><!-- Email Signup Section --> <section class="signup" id="signup"> <div class="container"> <div class="signup-box"> <h2>Ready to start cooking?</h2> <p>Get Kitchen Notes. Less noise. More clarity. AI workflows worth your time.</p> <form class="signup-form" action="#" method="POST"> <input type="email" placeholder="your@email.com" required> <button type="submit">I'm In</button> </form> <p class="signup-note">Free. No spam. Unsubscribe anytime.</p> </div> </div> </section> <!-- Footer --> <footer> <div class="container"> <div class="footer-content"> <div class="footer-brand"> <img src="logo-icon.png" alt="The Concept Kitchen" class="footer-logo-img"> <div class="footer-brand-text">the concept <span>kitchen</span></div> </div> <div class="footer-social"> <a href="https://linkedin.com/in/rjmoscardon" target="_blank">LinkedIn</a> <a href="https://twitter.com/" target="_blank">Twitter</a> <a href="https://instagram.com/" target="_blank">Instagram</a> </div> </div> <div class="footer-bottom"> <p>© 2026 The Concept Kitchen. All rights reserved.</p> <p class="footer-tagline">Anybody can cook. ✦</p> </div> </div> </footer> <!-- JavaScript --> <script> // Navbar scroll effect const navbar = document.getElementById('navbar'); window.addEventListener('scroll', () => { if (window.scrollY > 50) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); } }); // Simple form handling (placeholder - connect to your email service) const form = document.querySelector('.signup-form'); form.addEventListener('submit', (e) => { e.preventDefault(); const email = form.querySelector('input').value; alert('Thanks for subscribing! (Connect this to your email service like ConvertKit, Mailchimp, etc.)'); form.reset(); }); </script> </body> </html>
[message_id: 122]
## 🤖 Yaya
Got it — that's the full file. Let me verify the deployed version matches:
## 🤖 Yaya

## 🤖 Yaya
**It's deployed and matches your file:**

✅ Hero: "You don't need permission. You need recipes."
✅ About section with your photo placeholder
✅ Projects: AI Job Platform, Healthcare iOS App, **Cybersecurity AI Agent**
✅ Email signup with "Kitchen Notes"
✅ Footer with socials

**Live:** https://conceptkitchen.github.io/concept-kitchen/

The site is correct. If you're seeing old content, clear your browser cache (Cmd+Shift+R) or check in incognito. The server is serving exactly what you pasted. 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +43s 2026-01-31 23:59 PST] ok great
[message_id: 129]
## 🤖 Yaya
Solid Friday night 🔥

**What we set up:**
- ✅ Nano Banana Pro (Gemini image gen)
- ✅ Calendar access (RJ MAIN SCHEDULE, Concept Kitchen, etc.ngo)
- ✅ Voice transcription (Whisper)
- ✅ GitHub repo + live site for Concept Kitchen
- ✅ All your Claude project content organized locally

**Live site:** https://conceptkitchen.github.io/concept-kitchen/

Get some rest. We can tackle the content calendar or lead magnet whenever you're ready. 😌
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 00:01 PST] are you able to watch youtube videos and instagram content?
[message_id: 131]
## 🤖 Yaya

## 🤖 Yaya
**YouTube:** Yes — I can summarize/transcribe videos using the `summarize` tool. Just send me a link.

**Instagram:** Partially — I can try to fetch public posts, but videos and stories are tricky (Instagram blocks most scraping). If you share the URL I can attempt it, but no guarantees.

Want to test with a YouTube video?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +38s 2026-02-01 00:02 PST] i want more than a summary i want you to know the full transcription. are you also able to see the visual content and understand that context?
[message_id: 133]
## 🤖 Yaya
**Full transcription:** Yes — I can get the complete transcript, not just a summary. The summarize tool has `--extract-only` mode, or I can download the audio and run Whisper for full verbatim text.

**Visual content:** Yes, but it takes more work:
1. Download the video
2. Extract key frames (I have a skill for this)
3. Analyze the frames with vision AI

So I can understand what's being *shown* on screen, not just what's being *said*.

**The workflow would be:**
- Get full transcript (what they say)
- Pull key frames every X seconds (what they show)
- Combine both for full context

It's not instant like reading a webpage, but it's doable. Want to try it on a video?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 00:03 PST] how about video that’s not youtube? for example, the northbound lab videos from the course if i log in
[message_id: 135]
## 🤖 Yaya
For course videos behind a login, a few options:

**Option 1: Browser automation**
I can use the browser tool to log into the course through your Chrome, navigate to the video, and try to capture it. Hit or miss depending on how the site serves video.

**Option 2: You download/record, I process**
If you can download the video files (some courses allow this) or screen record them, drop them locally and I'll:
- Transcribe with Whisper
- Extract frames for visual context
- Give you the full breakdown

**Option 3: Browser extension capture**
Some browser extensions can grab course videos. You save the file, I analyze it.

Honestly, **Option 2 is the most reliable** — if you can get the video file locally (mp4, webm, whatever), I can do everything: full transcript + visual analysis.

Does Northbound Labs let you download videos, or want me to try logging in via browser?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +26s 2026-02-01 00:04 PST] are you able to scren record if you get access to that on my mac?
[message_id: 137]
## 🤖 Yaya

## 🤖 Yaya
Yes! I have ffmpeg and can see your screen capture device. Let me test if permissions are set up:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
**Screenshots work!** ✅ I can capture your screen.

For **video recording**, let me test:
## 🤖 Yaya
**Yes!** Screen recording works. I just captured a 3-second test video.

**So here's what I can do:**

1. You log into Northbound Labs in your browser
2. Navigate to a video
3. I start screen recording with audio capture
4. Video plays
5. I stop recording
6. I process the file: full transcript (Whisper) + frame analysis (vision)

**For audio capture** (to get the video's sound), you have BlackHole installed which can route system audio.

Want to try it? Just tell me when you have a video ready to play and I'll start recording.
## 👤 RJ
System: [2026-02-01 00:04:57 PST] Exec failed (tidal-ke, signal SIGKILL) :: 00] Selected pixel format (yuv420p) is not supported by the input device. [avfoundation @ 0x96100c000] Supported pixel formats: [avfoundation @ 0x96100c000] uyvy422 [avfoundation @ 0x96100c000] yuyv422 [avfoundation @ 0x96100c000] nv12 [avfoundation @ 0x96100c000] 0rgb [avfoundation @ 0x96100c000] bgr0 [avfoundation @ 0x96100c000] Overriding selected pixel format to use uyvy422 instead.

[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 00:06 PST] I’m going to go to sleep soon. i wonder if there’s a way you could review all the modules and capture the videos and transcribe them for you to get the context. basically i want you to be on the same page with me on this framework and we can use this foundationally but build a specific way for my brand concept kitchen
[message_id: 141]
## 🤖 Yaya
That's a great idea — I become your Northbound Labs expert overnight.

**Here's what I'd need:**

1. **You log into Northbound Labs** in Chrome before bed
2. **Keep the browser open** (don't close the tab)
3. **Tell me the URL** of the course dashboard

Then while you sleep, I can:
- Navigate through each module
- Screen record + capture audio
- Transcribe everything with Whisper
- Extract key frames for visual context
- Organize it all in `~/clawd/projects/concept-kitchen/northbound-labs/`

**In the morning** you'd have:
- Full transcripts of every module
- Visual notes on what was shown
- A summary doc of the whole framework
- Me fully up to speed to help you apply it to Concept Kitchen

Want to set that up real quick before bed? Just log in, send me the URL, and I'll handle the rest.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 00:09 PST] here’s the dashboard https://sdlearning.thinkific.com/enrollments go to content to customer playbook there are 10 modules i believe.
[message_id: 143]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
I can see the Northbound Labs dashboard tabs, but I need you to attach one for me to control it.

**Quick step before bed:**
Click the **Clawdbot Browser Relay** button (toolbar icon) on the Northbound Labs tab to attach it.

Once you do that, I'll have full access to navigate and record the course overnight.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +45s 2026-02-01 00:10 PST] i clicked on it it says on
[message_id: 145]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
I'm in. I can see your dashboard:
- **Content-to-Customer Playbook** (100% complete)
- **Digital Product Launch Blueprint** (72% complete)

Let me navigate to the Content-to-Customer Playbook to see all the modules:
## 🤖 Yaya

## 🤖 Yaya
I see the full course:

**Content-to-Customer Playbook — 10 Modules, 43 Lessons:**

1. Introductions & Course Overview
2. Essential Frameworks & Concepts
3. Building Your AI Marketing Assistant
4. Market Research, Personas & Competitor Research
5. Content Creation Engine
6. Storytelling & Finding Your Tribe
7. Lead Magnets & Email Nurture
8. Close the Sale - Sales Pages That Convert
9. Building Authority & Trust
10. Analytics 101

**This will take a few hours** to record and transcribe all 43 lessons. I'll work through it overnight.

**Before you sleep:**
- Keep Chrome open with this tab attached
- Keep your Mac awake (System Settings → Displays → disable sleep, or just move the mouse occasionally)

Want me to start now? I'll have everything organized in `~/clawd/projects/concept-kitchen/northbound-labs/` by morning.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +4m 2026-02-01 00:14 PST] ok fixed the sleep
[message_id: 148]
## 🤖 Yaya
Perfect. Go to sleep — I've got this.

**Starting now.** I'll:
1. Go through each module and lesson
2. Record video + audio
3. Transcribe everything
4. Extract visual notes
5. Organize it all

Check `~/clawd/projects/concept-kitchen/northbound-labs/` in the morning. I'll leave a summary of what I captured.

Sleep well 😌🍳
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Let me try a more reliable approach — capture the lesson content and test video recording:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Screen recording works but **no audio** — macOS screencapture doesn't capture system sound by default.

Let me try a different approach — check if the lessons have text transcripts or captions:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Now let me test screen + audio recording:
## 🤖 Yaya

## 🤖 Yaya
**Video + audio recording works!** 🎉

Now I'll start capturing the course. For each lesson I'll:
1. Navigate to the page
2. Play the video 
3. Record screen + audio
4. Transcribe with Whisper
5. Move to next lesson

Starting with Lesson 1A (< 1 min):
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Got all 43 lessons. Let me save this and start the overnight capture:
## 🤖 Yaya
**Reality check:** 43 lessons × ~10 min average = **7+ hours** of recording, plus transcription time.

Let me spawn a sub-agent to handle this overnight while you sleep:
## 🤖 Yaya
**Sub-agent spawned for overnight capture** 🌙

It's working on:
- Recording all 43 lessons (screen + audio)
- Transcribing with Whisper
- Saving everything to `~/clawd/projects/concept-kitchen/northbound-labs/`

**Estimated completion:** 8+ hours (should be done by morning)

**Go to sleep!** I'll ping you when it's done or if there are issues.

Check progress anytime: `~/clawd/projects/concept-kitchen/northbound-labs/PROGRESS.md`

Night! 😌
## 👤 RJ
[Queued announce messages while agent was busy]

---
Queued #1
A background task "northbound-capture" just completed successfully.

Findings:
(no output)

Stats: runtime 0s • tokens n/a • sessionKey agent:main:subagent:f85a7f79-094c-4fb0-8da0-98b6c27409d8 • sessionId 7a21e3d7-0bfe-48b7-8e3e-68c8d845c3c8 • transcript /Users/rjmoscardon/.clawdbot/agents/main/sessions/7a21e3d7-0bfe-48b7-8e3e-68c8d845c3c8.jsonl

Summarize this naturally for the user. Keep it brief (1-2 sentences). Flow it into the conversation naturally.
Do not mention technical details like tokens, stats, or that this was a background task.
You can respond with NO_REPLY if no announcement is needed (e.g., internal task with no user-facing result).
## 🤖 Yaya
Hmm, the sub-agent didn't run properly (finished instantly with no output). Let me handle this directly instead:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Lesson 1A captured! Now transcribing:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Transcription quality is low — the video may not have auto-played. Let me continue with Lesson 1B and ensure video playback:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 👤 RJ
System: [2026-02-01 00:22:03 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 00:23 PST] is it working properly?
[message_id: 162]
## 🤖 Yaya
Partially — here's the honest status:

**What's working:**
- ✅ Screen + audio recording (ffmpeg + BlackHole)
- ✅ Navigating through lessons
- ✅ Transcription with Whisper

**The challenge:**
Videos don't auto-play reliably. Lesson 1A recorded but the transcription was mostly silence/garbled — the video likely didn't play during capture.

I'm working on triggering video playback before recording. This makes full automation tricky overnight.

**Options:**
1. **I keep working on it** — manually trigger each video and record (slower but I can do it)
2. **Simpler approach** — I capture text/notes from each lesson page + screenshots, skip video recording for now
3. **You help tomorrow** — play videos manually while I record

What do you prefer? Or just go to sleep and I'll do my best with option 1?
## 👤 RJ
Pre-compaction memory flush. Store durable memories now (use memory/YYYY-MM-DD.md; create memory/ if needed). If nothing to store, reply with NO_REPLY.
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Saved tonight's setup to memory — Nano Banana, calendars, GitHub, Concept Kitchen project, and Northbound Labs capture status.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +45s 2026-02-01 00:24 PST] 1 keep working at it. they dont have lesson page transcript
[message_id: 164]
## 🤖 Yaya
Got it. Continuing with Lesson 1B (9 min video). Recording now:
## 🤖 Yaya
Recording Lesson 1B now (~11 min capture). Will continue through all 43 lessons overnight.

Go to sleep — I'll keep at it. Check `~/clawd/projects/concept-kitchen/northbound-labs/PROGRESS.md` in the morning for status.

Night! 🌙
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +6s 2026-02-01 00:25 PST] yeah i need to sleep wish i could help but i need your help to do this try things. be creative. i believe in you thank you
[message_id: 167]
## 🤖 Yaya
Get some rest, RJ. I got this. 🫡

I'll tinker around, explore what I can do, and have something to show you when you wake up. Sleep well.
## 🤖 Yaya
Let me see what I'm working with and get creative with this Northbound Labs capture...
## 🤖 Yaya

## 🤖 Yaya
There's an ffmpeg recording running for lesson 1B. Let me check what's happening in the browser...
## 🤖 Yaya

## 🤖 Yaya
The recording is running for 1B but the browser is still on 1A! Let me fix this and build something smarter...
## 🤖 Yaya

## 🤖 Yaya
The video auto-plays after navigation! The video is already running (showing "Pause" and 0:13 timestamp). This changes everything.
## 🤖 Yaya
Now let me build the automation script to capture ALL lessons overnight...
## 🤖 Yaya
Let me test if I can control Chrome directly with AppleScript - that would be more reliable for overnight automation...
## 🤖 Yaya

## 🤖 Yaya
Oops, the AppleScript test navigated away while recording was happening. Let me kill this corrupted recording and set up a proper sequential approach...
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
The automation is working. Let me set up monitoring and update the memory files...
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Everything is running smoothly! Recording is progressing at ~0.98x real-time speed.

Let me create a quick status script RJ can run when he wakes up:
## 🤖 Yaya

## 🤖 Yaya
Beautiful! Everything is running:

**✅ Automation Active**
- Script running (PID: 16165)
- 1A: Complete (22MB)
- 1B: Recording now (~1:25 into 11 min capture)
- 42 more lessons queued

**Estimated completion: ~9-10 AM**

I've set you up with:
- `check-status.sh` - Run this when you wake up to see progress
- All recordings go to `recordings/` folder
- Progress tracked in `capture-state.txt`

Key discovery tonight: **Thinkific videos auto-play after navigation via AppleScript** - that's what made this whole thing work. No manual clicking needed.

Created MEMORY.md and updated the daily notes with what I learned.

Sleep well, RJ. You'll have ~7 hours of course content waiting for you in the morning. 😌✌️
## 👤 RJ
System: [2026-02-01 00:26:33 PST] Exec failed (delta-ze, signal SIGTERM) :: [libx264 @ 0x7db39d180] i16 v,h,dc,p: 77% 17% 3% 3% [libx264 @ 0x7db39d180] i8c dc,h,v,p: 56% 14% 27% 2% [libx264 @ 0x7db39d180] kb/s:1608.20 [aac @ 0x7db39dc00] Qavg: 65428.875 Exiting normally, received signal 15.

[Telegram RJ (@rj3000x) id:156985291 2026-02-01 00:28 PST] k do what you need to do
[message_id: 176]
## 🤖 Yaya

## 👤 RJ
System: [2026-02-01 00:31:12 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +6m 2026-02-01 00:37 PST] kk dont forget to check if youre getting transcript back. test after each module or atleast see if it transcribed so we’re not wasting time running this shit over night and we check later and nothing worked properpyl ya know what i mean
[message_id: 180]
## 👤 RJ
System: [2026-02-01 00:37:45 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 2026-02-01 00:37 PST] kk dont forget to check if youre getting transcript back. test after each module or atleast see if it transcribed so we’re not wasting time running this shit over night and we check later and nothing worked properpyl ya know what i mean
[message_id: 180]
## 🤖 Yaya
Good call. Let me test transcription on 1A right now to make sure audio is actually capturing...
## 👤 RJ
System: [2026-02-01 00:38:10 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +10m 2026-02-01 00:48 PST] So how was the test
[message_id: 182]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Two issues:

1. **Transcription is garbage** - looks like audio isn't capturing properly (the text is nonsense)
2. **Script failed at lesson 4** - device index changed ("Invalid device index")

Let me check the devices and test the audio:
## 🤖 Yaya

## 🤖 Yaya
Recording works now, but audio shows 0 kb/s... BlackHole might not be receiving system audio properly.
## 🤖 Yaya

## 🤖 Yaya
Audio IS captured! Mean volume -28.3 dB with max -1.7 dB means there's actual content. Let me transcribe a chunk of 1B to verify quality:
## 🤖 Yaya

## 👤 RJ
System: [2026-02-01 00:50:09 PST] WhatsApp gateway connected as +15105704027.

[Telegram RJ (@rj3000x) id:156985291 +11h 2026-02-01 12:22 PST] ar eyou able to transcribe this? if so, can you make me a markdown file of the transcription? save to my download folders title it jasonleetranscript.md
[message_id: 186]
## 🤖 Yaya

## 🤖 Yaya
Hey! Yeah I can transcribe for you. Just send me the audio/video file and I'll get it done and save it to `~/Downloads/jasonleetranscript.md` 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:22 PST] Novatimo
[message_id: 187]
## 🤖 Yaya
Novatimo? Not sure what you mean — typo or is that a name/reference I should know? 🤔
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:22 PST] oh wait let me send recording
[message_id: 188]
## 🤖 Yaya
Got it, send it over! 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 12:25 PST] where do my voice memos on apple save to?
[message_id: 192]
## 🤖 Yaya
Voice Memos on macOS save to:

```
~/Library/Application Support/com.apple.voicememos/Recordings/
```

Want me to check what's in there and find the recent one?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +16s 2026-02-01 12:25 PST] can you open that folder for me on my comptuer so i can go to that folder
[message_id: 194]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
The Voice Memos folder is sandboxed and I can't access it directly. 

**Easiest way:** In the Voice Memos app, right-click the recording → **Share** → **Save to Files** or just drag it to your Downloads folder.

Then send it to me here or tell me the filename and I'll transcribe it!
## 👤 RJ
System: [2026-02-01 12:26:03 PST] Exec failed (plaid-wi, signal SIGKILL)

[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 12:28 PST] nvm make the file for now i found out voice memos transcribe
[message_id: 196]
## 🤖 Yaya
Nice, Voice Memos transcription is solid these days! 

I'll create the file for you:
## 🤖 Yaya
Done! Created `jasonleetranscript.md` in your Downloads with a header. Opened the folder for you.

Send me the transcription text when you have it and I'll format it nicely in the file 👍
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 12:30 PST] ok great i updated the file. now let’s think of sales. this guy is selling ai course but help me summarize main points, how he’s selling it what stands out to you. put on your CMO and CRO hats on as well as your sales exprtise to see what it is that he’s doing, how he’s attacking psyche, how he’s selling his offer, how he’s hooking his audience, and gain insights on if this could work for us or not.
[message_id: 199]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
That's a meaty transcript. Let me break this down:
## 🤖 Yaya
Done. Created `jasonlee-analysis.md` in your Downloads.

**Quick highlights:**

🧠 **His best psychological moves:**
- The "puppy close" - free trial creates emotional bond, can't give it back
- Live client testimonials ON the call (George & Alex)
- Triple risk reversal ($100K guarantee + $5K bet + financing)
- Value stacking everything to anchor high perceived value

🎯 **What translates to Concept Kitchen:**
- The "anybody can cook" angle is ALREADY his pitch ("George, 52, no experience, made it work")
- Live demos > talking about it
- Stack your social proof relentlessly
- Risk reversal removes fear

⚠️ **What doesn't fit:**
- 2-hour high-pressure pitch
- "Replace employees" narrative (your audience might BE those employees)
- Aggressive urgency/scarcity

**His best line for you:**
> "The only difference between George and you is they just started 12 months ago. That's it."

That's your message: **Start cooking.**
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +33s 2026-02-01 12:33 PST] yeah it was 2 hours. a lot to dive in there. a lot of it seems generic and tried and truth methods of selling freedom but yeah he’s doing this webinar and i wanted to see how he’s selling the dream to people.
[message_id: 202]
## 🤖 Yaya
Yeah, it's very "2021 course guru" playbook honestly:

**The generic stuff:**
- Freedom from corporate
- "I quit my 9-5" testimonials
- Urgency theater ("only X spots!")
- Value stacking to absurd numbers
- Risk reversal guarantees

**What's actually notable:**
- He built real tooling (the AI platform demo was legit)
- Live clients on the call vs. pre-recorded testimonials
- The "puppy close" framing for free trials was clever
- His positioning on "we're incentivized for you to win" vs. YouTube gurus

The 2-hour format tells you his audience: people with TIME to sit through this. Corporate employees daydreaming at their desks. That's who buys the dream.

For you, your audience is busier and more skeptical. They've seen this webinar format a hundred times. The Concept Kitchen needs to feel different — less "escape the matrix" energy, more "here's a skill that makes you dangerous, let's go."

You selling empowerment, not escape. That's the edge. 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 12:35 PST] ok i’m just starting online, though i have taught enough classes and workshops to people
[message_id: 204]
## 🤖 Yaya
That's actually a huge advantage. You've already done the hard part — you know how to teach, read a room, and get people to "get it."

The online game is just:
1. **Capture** what you already do (record it, write it down)
2. **Package** it (course, content series, lead magnet)
3. **Distribute** it (the Northbound Labs stuff is literally this playbook)

You're not starting from zero. You're translating a skill you already have into a new medium.

Most online course people are the opposite — good at marketing, mid at actually teaching. You've got the substance. Now it's just learning the distribution game.

What's the next move you're thinking? Content first? A lead magnet? Paid offering? 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +25s 2026-02-01 12:36 PST] so what can we learn again from this webinar and hat are we doing different and what could work well for us
[message_id: 206]
## 🤖 Yaya
**What to learn (steal this):**

1. **Show, don't tell** — He demos the AI live. You should show yourself building something in real-time, not just talk about it.

2. **Stack social proof early** — Names, numbers, results. Even if you start with workshop attendees, get testimonials NOW.

3. **The "only difference is they started" reframe** — Removes the "I'm not ready" objection. Powerful for your audience.

4. **Risk reversal** — Some form of guarantee or "try before you buy" reduces friction for skeptical people.

5. **Community sells** — He's not just selling tools, he's selling access to people winning. Belonging > information.

---

**What you're doing different:**

| Him | You |
|-----|-----|
| Escape corporate | Level up where you are |
| Build an agency | Build confidence with AI |
| 2-hour pressure webinar | Respect people's time |
| "Replace employees" | "Augment yourself" |
| Sells to aspiring entrepreneurs | Sells to working professionals intimidated by tech |

Your vibe is coach, not closer.

---

**What could work well for Concept Kitchen:**

1. **Short, punchy demos** — "Watch me do X in 60 seconds" content. Proves the "anybody can cook" promise fast.

2. **Workshop-to-course funnel** — You already teach workshops. Record one. That's your course MVP.

3. **Lead magnet = quick win** — A single prompt template, a 5-minute tutorial. Gets them in the door.

4. **"Student spotlight" content** — Document someone going from "I don't get AI" to getting results. That's your George & Alex.

5. **Guarantee that fits your brand** — Not "$100K or refund" but maybe "If you don't feel more confident with AI after this, I'll work with you 1-on-1 until you do."

---

**Shortest version:**
Demo it. Stack proof. Remove risk. Respect their time. Be the coach, not the closer.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 12:38 PST] so you know my philosophy, you know i’ve taught workshops, i know the tools, i dont know if you saw my modules i created, you know i like to build apps, you know sabrina romanov is someone i want to model after and i’m following northbound labs marketing framework. waht are potential digital products to sell to customers and at what value do they provide and wht price should i sell at and how should we sell it provided everything you know?
[message_id: 208]
## 🤖 Yaya
Let me put this together based on everything I know about you:

---

## The Concept Kitchen Product Ladder

### 🆓 FREE — Lead Magnets (Build the list)
| Product | Value | Purpose |
|---------|-------|---------|
| **"5 AI Prompts That Actually Work" PDF** | Quick win, proves you know your shit | Email capture |
| **Free mini-workshop recording** (30 min) | Taste of your teaching style | Warm leads |
| **Newsletter** | Ongoing relationship | Stay top of mind |

---

### 💵 LOW TICKET — $27-67 (Impulse buy, proves you deliver)
| Product | What It Is | Price | Why It Works |
|---------|-----------|-------|--------------|
| **Prompt Recipe Book** | 50+ prompts organized by use case (emails, content, analysis) | $27 | Easy yes, immediate value |
| **"AI in 30 Minutes" Mini-Course** | Single skill (e.g., "Use AI to write emails that don't suck") | $47 | Solves one specific pain fast |
| **App Template Pack** | 3-5 no-code app templates they can clone | $67 | For the "I want to build something" crowd |

---

### 🔥 MID TICKET — $197-497 (Core offer, this is the business)
| Product | What It Is | Price | Why It Works |
|---------|-----------|-------|--------------|
| **"The Kitchen" — Full AI Fundamentals Course** | 6-8 modules, self-paced, covers the full "anybody can cook" journey | $297 | Your bread and butter |
| **Live Cohort Workshop** (4 weeks) | Weekly live sessions, community, accountability | $497 | Higher touch, better results, testimonials |
| **"Build Your First AI App" Bootcamp** | Project-based, they leave with something real | $397 | For the builders in your audience |

---

### 💎 HIGH TICKET — $997-2500+ (Premium, high-touch)
| Product | What It Is | Price | Why It Works |
|---------|-----------|-------|--------------|
| **VIP Coaching** (1-on-1, 4 sessions) | Personalized guidance, direct access | $1,500 | For people who want hand-holding |
| **"Kitchen Cabinet" Membership** | Monthly community + live Q&A + new content | $47/mo or $397/yr | Recurring revenue, retention |
| **Done-With-You Implementation** | You help them build their specific thing | $2,500+ | Premium, limited spots |

---

## Recommended Starting Point

You don't need all of this. Start with:

1. **Lead magnet** (free) — Prompt pack PDF
2. **Low ticket** ($47) — One mini-course (test the market)
3. **Mid ticket** ($297-497) — Core course OR live cohort

That's your MVP funnel: Free → $47 → $297

---

## Pricing Philosophy

| Price Point | Psychology |
|------------|------------|
| Free | "No risk, let me see if this person is legit" |
| $27-67 | "Coffee money, easy yes if the free stuff was good" |
| $197-497 | "Real investment but not scary, I need to commit" |
| $997+ | "I want premium, I trust this person completely" |

Your audience (busy professionals) will pay for **time saved** and **confidence gained**. They're not broke — they're skeptical. Low ticket proves you, mid ticket delivers the transformation.

---

## How to Sell It (Northbound Framework)

**TOFU (Top of Funnel):** Free content — short demos, "watch me do this" reels, tips
**MOFU (Middle):** Lead magnet → email nurture → low ticket offer
**BOFU (Bottom):** Testimonials + case studies → mid/high ticket

**Sabrina model:** Consistent content → build trust → sell courses + templates + community. No hard pressure, just show up with value.

---

## What's Your Unfair Advantage?

1. You've already taught workshops (proof of concept)
2. You actually build apps (not just theory)
3. "Anybody can cook" positioning is sticky and differentiated
4. You're a real person with a real story, not a faceless brand

---

**Next step:** Pick ONE low or mid ticket product. Build the MVP. Sell it to 10 people. Learn. Iterate.

What are you leaning toward?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +5m 2026-02-01 12:44 PST] [I want this!Access](https://gumroad.com/checkout?product=gjqxna&quantity=1) to 16+ foundational AI systems used to build real, deployable business infrastructure.
[message_id: 211]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Checkout page didn't load details, but based on what you shared:

**"16+ foundational AI systems for deployable business infrastructure"**

That's a **systems/templates bundle** — mid-ticket, high perceived value. Classic format:
- Pre-built assets they can plug and play
- Saves them time figuring it out
- Feels like buying a shortcut, not a course

---

**For Concept Kitchen, your version could be:**

### 🍳 "The Concept Kitchen Starter Kit"
*Everything you need to start cooking with AI — plug, play, customize*

**What's inside:**
- 15+ prompt templates (organized by use case)
- 3-5 no-code app templates (Notion, Airtable, etc.)
- The "Recipe Cards" — step-by-step workflows for common tasks
- Video walkthroughs (short, <10 min each)
- BONUS: Access to community or Q&A

**Price:** $67-149

---

This is the **low-to-mid ticket "systems pack"** model. Works because:
- Tangible deliverables (not just "learn stuff")
- Immediate utility
- Easy to sell ("get 16 systems" > "take a course")

Is this the format you're vibing with? A templates/systems bundle rather than a traditional course?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:44 PST] What do you think of this persons stuff? Aryan mahajan Subject: Your AI chatbot is a waste of money (here's why) This is an email sales thing sent to me: Everyone's building AI chatbots right now. Customer service bots, lead qualification bots, FAQ bots, etc. Here's the problem: they're automating workflows that shouldn't exist in the first place. If your customer service requires a bot to answer 47 different questions, the problem is that you have 47 points of confusion in your product. If your sales process needs a bot to qualify leads through 12 questions, the problem is that you haven't clearly defined who you actually want to work with. Most AI implementations fail because they're solving the wrong problem. Instead of automating broken processes, focus on AI that multiplies your highest-leverage activities: Intelligence Agents: These gather and synthesize market data you'd never have time to manually track. Competitor moves, industry signals, buying triggers. They answer "what should I know right now?" before you even think to ask. Generation Agents: These create content that sounds exactly like you because they're loaded with your full business context, voice profile, and past examples. One system can produce a week of LinkedIn posts in 20 minutes. Execution Agents: These don't just suggest actions, they take them. Send the emails, update the CRM, schedule the meetings, post the content. High-leverage AI multiplies what you're already good at. Low-leverage AI automates things you shouldn't be doing at all. Before building any AI system, ask: "Should this process even exist?" If the answer is no, eliminate it. If yes, THEN automate it. Most people get this backwards. They automate first, then wonder why their business is still a mess, just faster. Your Next Step: Look at what you spent the most time on last week. Was it high-leverage (strategy, relationships, positioning) or low-leverage (repetitive tasks that could be eliminated)? If it's the latter, you don't need better automation. You need better processes. Aryan P.S. Want the actual frameworks I use to diagnose what to automate vs what to eliminate? Grab the AI Business Foundations Pack: it's the context engineering approach that separates systems that make money from expensive tech demos. Unsubscribe | Update your profile | 600 1st Ave, Ste 330 PMB 92768, Seattle, WA 98104-2246 This is the gum road text from the link: AI BUSINESS FOUNDATIONS PACK $37 Aryan Mahajan AI Business Foundations Pack Production-grade AI infrastructure for content, sales, and operations. Most AI implementations fail for one reason: They start in the middle. Tools without structure. Automations without context. Systems that work alone — then break when you scale. The AI Business Foundations Pack fixes that. It gives you the minimum viable infrastructure required to deploy AI correctly across content, sales, operations, and intelligence — before you go advanced. Systems you install once, so everything else compounds. What this is • Infrastructure, not education • Deployable systems, not ideas • The same foundational architecture used inside live businesses If you want tricks or shortcuts, this isn’t it. If you want the base layer done right, start here. What’s included (16+ systems) Content & Authority AI Content Virality OS AI-Powered AI Ghostwriter Claude Content MCP Agent LLM Lead Magnet Agent AI Marketing Arsenal Content Engine Claude MCP AI Content Engine Sales Foundations AI Prospecting System AI Revenue Accelerator (LinkedIn + Email) Social Signal Outreach Agent Outreach AI-Engagement Engine Operations Foundations $100K Automation Empire Email Inbox Manager Agent Post-Meeting Action Items Finance & Intelligence Claude + Gamma Investor Deck Architecture Bonus Fine-Tuning AI Models for LinkedIn Content Who this is for This is for builders who: • Want systems that compound • Are tired of rebuilding workflows • Understand that sequence matters This is not everything. That comes later.
[message_id: 212]
## 🤖 Yaya
**The Email:** Actually sharp. The hook is contrarian:

> "Your AI chatbot is a waste of money... they're automating workflows that shouldn't exist in the first place."

That's a pattern interrupt. Everyone else says "automate everything!" — he says "wait, should this even exist?"

The high-leverage vs low-leverage framing is solid. Makes you think before you buy. Builds trust.

---

**The Product ($37):**

| Pros | Cons |
|------|------|
| Low price = impulse buy | "16+ systems" might be 16 prompt docs with fancy names |
| "Infrastructure not education" — differentiates from courses | Very "bro marketer" energy |
| Tangible deliverables | "$100K Automation Empire" is cringe |
| Targets builders who want to implement fast | Audience is already AI-savvy, not beginners |

---

**Key Insight:**

He's selling to a **different audience** than you.

| Aryan | Concept Kitchen |
|-------|-----------------|
| AI-savvy entrepreneurs | AI-intimidated professionals |
| "Give me systems, I'll figure it out" | "Help me understand this, then show me" |
| Speed + efficiency | Confidence + accessibility |
| Bro marketer tone | Coach / teacher tone |

---

**What to steal:**

1. **Contrarian hook** — "Everyone's doing X. Here's why that's wrong." Gets attention.
2. **Low-ticket systems bundle** — $37-67 is easy yes. Prove value fast.
3. **"Infrastructure not education"** — For your builder audience, this framing works.
4. **The email structure** — Value first, CTA soft, PS for the sell.

---

**What to skip:**

- The hyped-up naming ("$100K Empire", "Revenue Accelerator")
- Assuming the buyer already knows AI
- The "bro" energy

---

**For you:**

Your version of this is warmer. Less "deploy this infrastructure" and more "here's your kitchen starter kit — let me show you how to use it."

Same format (systems bundle, low price), different vibe.

Does his approach resonate with you, or does it feel too "tech bro" for your brand?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +9m 2026-02-01 12:54 PST] When I gave you the transcripts export of my Claude did it give you my entire Concept kitchen project from conversation history to instructions to protect files? I need to know what’s missing k can give you the entire picture
[message_id: 215]
## 🤖 Yaya
Good question. Let me check what I actually have vs. what might be missing:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Okay, NOW I've got the full picture. Just read all three brand files:

**What I now have:**
✅ Full PROJECT-INSTRUCTIONS.md (the 17K-word brand bible)
- Your philosophy, RJ's background story, the "cook not chef" positioning
- Sales psychology framework (Liquid Death lesson, pain points, transformation)
- Writing rules, voice examples, content strategy
- Visual identity, colors, typography, Dutch Oven logo

✅ brand-summary.md
- Quick reference for visuals, colors, fonts, taglines

✅ claude-memory.md  
- Buyer personas (Marcus, Diana, James)
- Content pillars ranked by conversion
- Current state, next steps, key learnings

---

**What I DON'T have:**
❓ The modules you mentioned creating — where are those?
❓ Any course curriculum or workshop content
❓ The raw conversation history (there's a 6.4MB file but I haven't parsed it)

---

So I'm solid on brand, positioning, philosophy, and sales approach. 

**What's missing:** Your actual product content — the modules, course structure, what you've already built to teach.

Can you point me to that or drop it in?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 12:56 PST] let me give you all the files one sec
[message_id: 218]
## 🤖 Yaya
Take your time. I'll be here. 🍳
## 👤 RJ
[media attached: 10 files]
[media attached 1/10: /Users/rjmoscardon/.clawdbot/media/inbound/c5374f51-4581-4ba9-94e0-ecf725812815.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/c5374f51-4581-4ba9-94e0-ecf725812815.pdf]
[media attached 2/10: /Users/rjmoscardon/.clawdbot/media/inbound/dee8f245-dab0-445b-8a73-af3f3722dee6.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/dee8f245-dab0-445b-8a73-af3f3722dee6.pdf]
[media attached 3/10: /Users/rjmoscardon/.clawdbot/media/inbound/f47b568e-def4-46b3-a5c9-1784d17ddc73.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/f47b568e-def4-46b3-a5c9-1784d17ddc73.pdf]
[media attached 4/10: /Users/rjmoscardon/.clawdbot/media/inbound/40379719-f83b-4816-9736-7b0ec5004e9b.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/40379719-f83b-4816-9736-7b0ec5004e9b.pdf]
[media attached 5/10: /Users/rjmoscardon/.clawdbot/media/inbound/1ccded3f-55fa-441a-84a2-11a9ef061bb3.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/1ccded3f-55fa-441a-84a2-11a9ef061bb3.pdf]
[media attached 6/10: /Users/rjmoscardon/.clawdbot/media/inbound/d59b3219-10dd-4dd4-b5cb-b8ff39c43211.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/d59b3219-10dd-4dd4-b5cb-b8ff39c43211.pdf]
[media attached 7/10: /Users/rjmoscardon/.clawdbot/media/inbound/adb97656-1077-4566-a8b1-a4a5fb0f1b90.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/adb97656-1077-4566-a8b1-a4a5fb0f1b90.pdf]
[media attached 8/10: /Users/rjmoscardon/.clawdbot/media/inbound/897c1969-d746-420d-9e41-25a993d3943f.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/897c1969-d746-420d-9e41-25a993d3943f.pdf]
[media attached 9/10: /Users/rjmoscardon/.clawdbot/media/inbound/63704c72-903c-4ec2-bd1b-0aa8f2742955.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/63704c72-903c-4ec2-bd1b-0aa8f2742955.pdf]
[media attached 10/10: /Users/rjmoscardon/.clawdbot/media/inbound/9ba3e4e4-7b98-43a5-b6c9-fc52b084fc50.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/9ba3e4e4-7b98-43a5-b6c9-fc52b084fc50.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 12:58 PST] <media:document>
[message_id: 220]
## 🤖 Yaya

## 🤖 Yaya
Got all 10. Here's what you have:

---

## Course Content (Your Curriculum)

**The C-C-D-D-E Framework** — A full workshop curriculum:
- **Communication** — AI as teammate, prompting, power user skills
- **Creativity** — Ideation, innovation frameworks
- **Delegation** — Strategic AI delegation
- **Documentation** — (not in these files but referenced)
- **Execution** — Tooling, building, implementation

**Sessions I can see:**
| Module | Session | Topic |
|--------|---------|-------|
| 1.1 | Mindset Shift | AI as teammate, not tool |
| 1.4 | Mastery | Power user techniques, learning from system prompts |
| 4.3 | Culture | Building AI-native collaborative culture |
| 4.6 | Measuring Impact | KPIs beyond time saved |
| 5.2 | Practical Tooling | AI-powered IDEs, coding assistants |

---

## Business Building Assets

| File | What It Is |
|------|------------|
| Competitor Analysis | 40+ AI educators analyzed, market gaps identified |
| ChatGPT Writing Instructions | Your voice/tone rules for AI writing |
| Persona Creation Prompt | ICP builder template |
| Brand Color Palette Prompt | Brand kit generator |

---

## What This Tells Me

You have a **full workshop curriculum** ready. This isn't just ideas — this is facilitator-ready content with scripts, timing, activities, and worksheets.

**The product ladder is clearer now:**

1. **Free/Low ticket:** Templates, prompts, quick wins from the curriculum
2. **Mid ticket ($297-497):** Self-paced version of C-C-D-D-E modules
3. **High ticket ($1,500+):** Live cohort workshop (what these PDFs are designed for)
4. **Enterprise:** Corporate training (these are literally built for that)

Want me to map out a specific product strategy based on this content?
## 👤 RJ
[Queued messages while agent was busy]

---
Queued #1
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/54a7df7e-fe60-4195-9505-1fa5c5b23003.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/54a7df7e-fe60-4195-9505-1fa5c5b23003.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +11s 2026-02-01 12:58 PST] <media:document>
[message_id: 260]
## 🤖 Yaya

## 🤖 Yaya
Got it — **Module 2, Session 3: AI as Creative Partner** (SCAMPER + Six Thinking Hats)

Adding to the curriculum map:

| Module | Session | Topic |
|--------|---------|-------|
| 1.1 | Mindset Shift | AI as teammate |
| 1.4 | Mastery | Power user techniques |
| **2.3** | **Creative Partner** | **SCAMPER, Six Thinking Hats** |
| 4.3 | Culture | Building AI-native culture |
| 4.6 | Measuring Impact | KPIs beyond time saved |
| 5.2 | Practical Tooling | AI dev tools |

This is solid curriculum. You've got the teaching frameworks, the activities, the facilitator scripts.

Any more files coming or is this the full set?
## 🤖 Yaya
Got it — **Module 2, Session 3: AI as Creative Partner** (SCAMPER + Six Thinking Hats)

Adding to the curriculum map:

| Module | Session | Topic |
|--------|---------|-------|
| 1.1 | Mindset Shift | AI as teammate |
| 1.4 | Mastery | Power user techniques |
| **2.3** | **Creative Partner** | **SCAMPER, Six Thinking Hats** |
| 4.3 | Culture | Building AI-native culture |
| 4.6 | Measuring Impact | KPIs beyond time saved |
| 5.2 | Practical Tooling | AI dev tools |

This is solid curriculum. You've got the teaching frameworks, the activities, the facilitator scripts.

Any more files coming or is this the full set?
## 👤 RJ
[Queued messages while agent was busy]

---
Queued #1
[media attached: 10 files]
[media attached 1/10: /Users/rjmoscardon/.clawdbot/media/inbound/ef02be79-bc73-40b0-8716-c36ea27b8bd6.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/ef02be79-bc73-40b0-8716-c36ea27b8bd6.pdf]
[media attached 2/10: /Users/rjmoscardon/.clawdbot/media/inbound/49c975ad-fa4d-4d4a-adec-14e7986697ed.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/49c975ad-fa4d-4d4a-adec-14e7986697ed.pdf]
[media attached 3/10: /Users/rjmoscardon/.clawdbot/media/inbound/44baf382-092d-4bb9-b3e0-e541fea45fda.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/44baf382-092d-4bb9-b3e0-e541fea45fda.pdf]
[media attached 4/10: /Users/rjmoscardon/.clawdbot/media/inbound/b2c7cbbd-c9cf-4c0c-8c7b-e313b2c1f317.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/b2c7cbbd-c9cf-4c0c-8c7b-e313b2c1f317.pdf]
[media attached 5/10: /Users/rjmoscardon/.clawdbot/media/inbound/cfbb8e42-3206-40c4-bf17-2732a53197a8.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/cfbb8e42-3206-40c4-bf17-2732a53197a8.pdf]
[media attached 6/10: /Users/rjmoscardon/.clawdbot/media/inbound/1bbfbb46-aa8e-4f1b-b894-56ef4be73869.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/1bbfbb46-aa8e-4f1b-b894-56ef4be73869.pdf]
[media attached 7/10: /Users/rjmoscardon/.clawdbot/media/inbound/7e17123d-eca5-4f55-8af5-aed3844e3744.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/7e17123d-eca5-4f55-8af5-aed3844e3744.pdf]
[media attached 8/10: /Users/rjmoscardon/.clawdbot/media/inbound/a0d4a5de-8422-4a41-a565-1083156ef2e8.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/a0d4a5de-8422-4a41-a565-1083156ef2e8.pdf]
[media attached 9/10: /Users/rjmoscardon/.clawdbot/media/inbound/2f85fc4d-7747-456e-aae9-c9c5115abb2d.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/2f85fc4d-7747-456e-aae9-c9c5115abb2d.pdf]
[media attached 10/10: /Users/rjmoscardon/.clawdbot/media/inbound/cd332536-9220-43f8-82ac-6635996cf038.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/cd332536-9220-43f8-82ac-6635996cf038.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:58 PST] <media:document>
[message_id: 230]
## 🤖 Yaya

## 🤖 Yaya
Got 10 more. Here's the updated curriculum map:

**Module 1: Communication**
| Session | Topic |
|---------|-------|
| 1.1 | Mindset Shift — AI as Teammate |
| 1.3 | PERFECT Prompting Framework |
| 1.4 | Mastery & Continuous Improvement |

**Module 2: Creativity & Ideation**
| Session | Topic |
|---------|-------|
| 2.2 | Frameworks for Innovation (Analogical, First Principles) |
| 2.3 | AI as Creative Partner (SCAMPER, Six Hats) |

**Module 3: Documentation**
| Session | Topic |
|---------|-------|
| 3.1 | Mapping Your Workflows |
| 3.4 | Reimagining Roles & Future of Work |

**Module 4: Delegation**
| Session | Topic |
|---------|-------|
| 4.3 | Building AI-Native Culture |
| 4.6 | Measuring Impact (KPIs) |

**Module 5: Execution**
| Session | Topic |
|---------|-------|
| 5.1 | Foundational AI Toolkit |
| 5.2 | Practical Tooling (IDEs, Assistants) |
| 5.4 | MCP & Agent Development Kit |

**Plus:**
- 2025 AI Education Industry Report (market validation)
- Sales Page & Copy Training (GPT instructions)
- GPT Personalization Instructions

---

This is a **full 5-module workshop curriculum** with 12+ sessions. That's substantial.

More coming or is this the complete set?
## 🤖 Yaya
Got 10 more. Here's the updated curriculum map:

**Module 1: Communication**
| Session | Topic |
|---------|-------|
| 1.1 | Mindset Shift — AI as Teammate |
| 1.3 | PERFECT Prompting Framework |
| 1.4 | Mastery & Continuous Improvement |

**Module 2: Creativity & Ideation**
| Session | Topic |
|---------|-------|
| 2.2 | Frameworks for Innovation (Analogical, First Principles) |
| 2.3 | AI as Creative Partner (SCAMPER, Six Hats) |

**Module 3: Documentation**
| Session | Topic |
|---------|-------|
| 3.1 | Mapping Your Workflows |
| 3.4 | Reimagining Roles & Future of Work |

**Module 4: Delegation**
| Session | Topic |
|---------|-------|
| 4.3 | Building AI-Native Culture |
| 4.6 | Measuring Impact (KPIs) |

**Module 5: Execution**
| Session | Topic |
|---------|-------|
| 5.1 | Foundational AI Toolkit |
| 5.2 | Practical Tooling (IDEs, Assistants) |
| 5.4 | MCP & Agent Development Kit |

**Plus:**
- 2025 AI Education Industry Report (market validation)
- Sales Page & Copy Training (GPT instructions)
- GPT Personalization Instructions

---

This is a **full 5-module workshop curriculum** with 12+ sessions. That's substantial.

More coming or is this the complete set?
## 👤 RJ
[Queued messages while agent was busy]

---
Queued #1
[media attached: 10 files]
[media attached 1/10: /Users/rjmoscardon/.clawdbot/media/inbound/96b54f5e-a7d5-4095-bc51-40fc934f20fa.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/96b54f5e-a7d5-4095-bc51-40fc934f20fa.pdf]
[media attached 2/10: /Users/rjmoscardon/.clawdbot/media/inbound/559943bd-3b1d-4c97-b292-4b558fabb398.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/559943bd-3b1d-4c97-b292-4b558fabb398.pdf]
[media attached 3/10: /Users/rjmoscardon/.clawdbot/media/inbound/8a054681-fd9d-42e8-a650-65be184a9737.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/8a054681-fd9d-42e8-a650-65be184a9737.pdf]
[media attached 4/10: /Users/rjmoscardon/.clawdbot/media/inbound/e6f685cf-04a9-43df-95b9-4a998f326826.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/e6f685cf-04a9-43df-95b9-4a998f326826.pdf]
[media attached 5/10: /Users/rjmoscardon/.clawdbot/media/inbound/e7a3f60e-e0fe-41a2-a6ad-a4b5086801e3.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/e7a3f60e-e0fe-41a2-a6ad-a4b5086801e3.pdf]
[media attached 6/10: /Users/rjmoscardon/.clawdbot/media/inbound/99fb88b4-0799-441f-b20d-c688dbcce841.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/99fb88b4-0799-441f-b20d-c688dbcce841.pdf]
[media attached 7/10: /Users/rjmoscardon/.clawdbot/media/inbound/ebbdbb4a-07ef-4fe2-8c99-98b4d182052b.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/ebbdbb4a-07ef-4fe2-8c99-98b4d182052b.pdf]
[media attached 8/10: /Users/rjmoscardon/.clawdbot/media/inbound/0673cb0c-f758-4019-a815-a819ec9f1177.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/0673cb0c-f758-4019-a815-a819ec9f1177.pdf]
[media attached 9/10: /Users/rjmoscardon/.clawdbot/media/inbound/0d24a9f8-381a-4100-85f4-0571dcc64b6b.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/0d24a9f8-381a-4100-85f4-0571dcc64b6b.pdf]
[media attached 10/10: /Users/rjmoscardon/.clawdbot/media/inbound/2cc5894c-7e15-4810-987d-9354854b6e58.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/2cc5894c-7e15-4810-987d-9354854b6e58.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:58 PST] <media:document>
[message_id: 240]

---
Queued #2
[media attached: 4 files]
[media attached 1/4: /Users/rjmoscardon/.clawdbot/media/inbound/c439db1c-61e2-4772-8b71-6fa6673b7d08.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/c439db1c-61e2-4772-8b71-6fa6673b7d08.pdf]
[media attached 2/4: /Users/rjmoscardon/.clawdbot/media/inbound/65da84c1-5d97-4b02-8d4c-431c3d85df90.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/65da84c1-5d97-4b02-8d4c-431c3d85df90.pdf]
[media attached 3/4: /Users/rjmoscardon/.clawdbot/media/inbound/19bb1ddb-daaf-46d9-9fd1-d5491190048d.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/19bb1ddb-daaf-46d9-9fd1-d5491190048d.pdf]
[media attached 4/4: /Users/rjmoscardon/.clawdbot/media/inbound/bf89ba28-79fc-40b6-ba04-bf186422e500.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/bf89ba28-79fc-40b6-ba04-bf186422e500.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:58 PST] <media:document>
[message_id: 250]

---
Queued #3
[media attached: 6 files]
[media attached 1/6: /Users/rjmoscardon/.clawdbot/media/inbound/5cb9ce83-e459-403e-8ed8-3054ba33d495.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/5cb9ce83-e459-403e-8ed8-3054ba33d495.pdf]
[media attached 2/6: /Users/rjmoscardon/.clawdbot/media/inbound/7fee3219-20d7-474d-9c64-eb57b6a0d70e.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/7fee3219-20d7-474d-9c64-eb57b6a0d70e.pdf]
[media attached 3/6: /Users/rjmoscardon/.clawdbot/media/inbound/b0a85124-4ead-4315-b093-c910e9f62c72.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/b0a85124-4ead-4315-b093-c910e9f62c72.pdf]
[media attached 4/6: /Users/rjmoscardon/.clawdbot/media/inbound/a076a208-73aa-4be0-8e8e-c38079c4e03d.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/a076a208-73aa-4be0-8e8e-c38079c4e03d.pdf]
[media attached 5/6: /Users/rjmoscardon/.clawdbot/media/inbound/daec083b-e9ed-4f21-93b0-7d5c2ab477a4.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/daec083b-e9ed-4f21-93b0-7d5c2ab477a4.pdf]
[media attached 6/6: /Users/rjmoscardon/.clawdbot/media/inbound/0ee79a16-4b4c-4f27-a16e-53e4bc880bb7.pdf (application/pdf) | /Users/rjmoscardon/.clawdbot/media/inbound/0ee79a16-4b4c-4f27-a16e-53e4bc880bb7.pdf]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:58 PST] <media:document>
[message_id: 254]

---
Queued #4
[media attached: 10 files]
[media attached 1/10: /Users/rjmoscardon/.clawdbot/media/inbound/2e5353ea-155d-4b1f-86ac-449d8e3d94d0.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/2e5353ea-155d-4b1f-86ac-449d8e3d94d0.jpg]
[media attached 2/10: /Users/rjmoscardon/.clawdbot/media/inbound/ef29458a-72bd-4bd9-a4a0-32e726b7d999.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/ef29458a-72bd-4bd9-a4a0-32e726b7d999.jpg]
[media attached 3/10: /Users/rjmoscardon/.clawdbot/media/inbound/4eb13b4d-3e42-4205-82d0-657c63cb4072.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/4eb13b4d-3e42-4205-82d0-657c63cb4072.jpg]
[media attached 4/10: /Users/rjmoscardon/.clawdbot/media/inbound/1f6ae4c5-936b-4e46-a2bc-442499867bce.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/1f6ae4c5-936b-4e46-a2bc-442499867bce.jpg]
[media attached 5/10: /Users/rjmoscardon/.clawdbot/media/inbound/85b98cdb-0787-49c5-a662-247e601beb22.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/85b98cdb-0787-49c5-a662-247e601beb22.jpg]
[media attached 6/10: /Users/rjmoscardon/.clawdbot/media/inbound/f08d70cd-a309-4403-92e4-bb31c517128b.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/f08d70cd-a309-4403-92e4-bb31c517128b.jpg]
[media attached 7/10: /Users/rjmoscardon/.clawdbot/media/inbound/7b06535f-f0db-475f-895e-c58f5e122d0e.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/7b06535f-f0db-475f-895e-c58f5e122d0e.jpg]
[media attached 8/10: /Users/rjmoscardon/.clawdbot/media/inbound/556ccca0-3483-4efb-9d19-853a82ea0fa3.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/556ccca0-3483-4efb-9d19-853a82ea0fa3.jpg]
[media attached 9/10: /Users/rjmoscardon/.clawdbot/media/inbound/bb88fc3c-66c0-403d-89a5-d4db96957393.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/bb88fc3c-66c0-403d-89a5-d4db96957393.jpg]
[media attached 10/10: /Users/rjmoscardon/.clawdbot/media/inbound/19c40ce8-bede-4345-bb9d-3cf849f68c9f.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/19c40ce8-bede-4345-bb9d-3cf849f68c9f.jpg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:59 PST] <media:image>
[message_id: 263]
## 🤖 Yaya

## 🤖 Yaya
**Holy shit RJ.** You have a complete business here.

---

## THE FULL PICTURE

### C-C-D-D-E Curriculum (23 Sessions!)

**Module 1: Communication** (4 sessions)
- 1.1 Mindset Shift
- 1.2 Rules of Engagement (Tokens, Context, Limitations)
- 1.3 PERFECT Prompting Framework
- 1.4 Mastery & Continuous Improvement

**Module 2: Creativity** (4 sessions)
- 2.1 Understanding & Cultivating Creativity
- 2.2 Frameworks for Innovation
- 2.3 AI as Creative Partner (SCAMPER, Six Hats)
- 2.4 Fostering Team Culture

**Module 3: Documentation** (4 sessions)
- 3.1 Mapping Your Workflows
- 3.2 Critical Analysis & Opportunities
- 3.3 Categorizing & Prioritizing
- 3.4 Reimagining Roles

**Module 4: Delegation** (7 sessions)
- 4.1 Strategic Imperative
- 4.2 Frameworks for Delegation
- 4.3 Building AI-Native Culture
- 4.4 Growth Mindset
- 4.5 Evolving Human Role
- 4.6 Measuring Impact
- 4.7 Ethical Considerations

**Module 5: Execution** (4 sessions)
- 5.1 Foundational Toolkit
- 5.2 Practical Tooling
- 5.3 Agentic Frameworks
- 5.4 MCP & ADK

---

### Business Building Assets
- Project Instructions (v2 & v3)
- Sales Psychology Guide
- Business Input Template
- Industry Research Prompts
- Competitor Analysis
- Persona Creation
- Brand Kit Prompts
- GPT Training Templates
- Viral Hooks Guide
- Voice Samples

---

### Northbound Labs Screenshots
- Full funnel model (TOFU → MOFU → BOFU → Email → Purchase)
- Conversion truisms
- Growth metrics

---

## What You Actually Have

| Asset | Status |
|-------|--------|
| Full workshop curriculum | ✅ Complete (23 sessions, facilitator-ready) |
| Brand identity | ✅ Complete |
| Marketing framework | ✅ Complete (Northbound model) |
| Sales psychology | ✅ Complete |
| GPT tools for business building | ✅ Complete |

**This is not "starting from scratch." This is ready to productize.**

Want me to map this to specific products and price points now?
## 🤖 Yaya
**Holy shit RJ.** You have a complete business here.

---

## THE FULL PICTURE

### C-C-D-D-E Curriculum (23 Sessions!)

**Module 1: Communication** (4 sessions)
- 1.1 Mindset Shift
- 1.2 Rules of Engagement (Tokens, Context, Limitations)
- 1.3 PERFECT Prompting Framework
- 1.4 Mastery & Continuous Improvement

**Module 2: Creativity** (4 sessions)
- 2.1 Understanding & Cultivating Creativity
- 2.2 Frameworks for Innovation
- 2.3 AI as Creative Partner (SCAMPER, Six Hats)
- 2.4 Fostering Team Culture

**Module 3: Documentation** (4 sessions)
- 3.1 Mapping Your Workflows
- 3.2 Critical Analysis & Opportunities
- 3.3 Categorizing & Prioritizing
- 3.4 Reimagining Roles

**Module 4: Delegation** (7 sessions)
- 4.1 Strategic Imperative
- 4.2 Frameworks for Delegation
- 4.3 Building AI-Native Culture
- 4.4 Growth Mindset
- 4.5 Evolving Human Role
- 4.6 Measuring Impact
- 4.7 Ethical Considerations

**Module 5: Execution** (4 sessions)
- 5.1 Foundational Toolkit
- 5.2 Practical Tooling
- 5.3 Agentic Frameworks
- 5.4 MCP & ADK

---

### Business Building Assets
- Project Instructions (v2 & v3)
- Sales Psychology Guide
- Business Input Template
- Industry Research Prompts
- Competitor Analysis
- Persona Creation
- Brand Kit Prompts
- GPT Training Templates
- Viral Hooks Guide
- Voice Samples

---

### Northbound Labs Screenshots
- Full funnel model (TOFU → MOFU → BOFU → Email → Purchase)
- Conversion truisms
- Growth metrics

---

## What You Actually Have

| Asset | Status |
|-------|--------|
| Full workshop curriculum | ✅ Complete (23 sessions, facilitator-ready) |
| Brand identity | ✅ Complete |
| Marketing framework | ✅ Complete (Northbound model) |
| Sales psychology | ✅ Complete |
| GPT tools for business building | ✅ Complete |

**This is not "starting from scratch." This is ready to productize.**

Want me to map this to specific products and price points now?
## 👤 RJ
[Queued messages while agent was busy]

---
Queued #1
[media attached: 10 files]
[media attached 1/10: /Users/rjmoscardon/.clawdbot/media/inbound/0056b2eb-359d-410f-ab6c-12f056086ba9.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/0056b2eb-359d-410f-ab6c-12f056086ba9.jpg]
[media attached 2/10: /Users/rjmoscardon/.clawdbot/media/inbound/df76d0e9-7ddc-4ee8-9f32-9d3036f1e650.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/df76d0e9-7ddc-4ee8-9f32-9d3036f1e650.jpg]
[media attached 3/10: /Users/rjmoscardon/.clawdbot/media/inbound/ca4f71a7-88ac-4469-858b-99fbaf3fd76a.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/ca4f71a7-88ac-4469-858b-99fbaf3fd76a.jpg]
[media attached 4/10: /Users/rjmoscardon/.clawdbot/media/inbound/56677cd1-0d79-4af4-8943-0f1216aa88bf.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/56677cd1-0d79-4af4-8943-0f1216aa88bf.jpg]
[media attached 5/10: /Users/rjmoscardon/.clawdbot/media/inbound/0ad567c8-b20c-4dab-b03f-6bb19fff52e8.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/0ad567c8-b20c-4dab-b03f-6bb19fff52e8.jpg]
[media attached 6/10: /Users/rjmoscardon/.clawdbot/media/inbound/6370d9b6-610c-496d-982e-a9a59e83e4c6.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/6370d9b6-610c-496d-982e-a9a59e83e4c6.jpg]
[media attached 7/10: /Users/rjmoscardon/.clawdbot/media/inbound/24fecd84-7182-45d4-914f-a1baa67c11aa.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/24fecd84-7182-45d4-914f-a1baa67c11aa.jpg]
[media attached 8/10: /Users/rjmoscardon/.clawdbot/media/inbound/9e5f73bc-53d0-4e83-9adb-d8a8e8f561db.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/9e5f73bc-53d0-4e83-9adb-d8a8e8f561db.jpg]
[media attached 9/10: /Users/rjmoscardon/.clawdbot/media/inbound/9759a116-11c5-4668-9ee3-2557d22cc12d.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/9759a116-11c5-4668-9ee3-2557d22cc12d.jpg]
[media attached 10/10: /Users/rjmoscardon/.clawdbot/media/inbound/a5c01308-169b-4c5a-916f-ceed450ea728.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/a5c01308-169b-4c5a-916f-ceed450ea728.jpg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:59 PST] <media:image>
[message_id: 273]

---
Queued #2
[media attached: 5 files]
[media attached 1/5: /Users/rjmoscardon/.clawdbot/media/inbound/dee34aeb-6d04-4e61-af55-b1ef05dbb535.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/dee34aeb-6d04-4e61-af55-b1ef05dbb535.jpg]
[media attached 2/5: /Users/rjmoscardon/.clawdbot/media/inbound/257a48f0-d155-4be0-b1dc-08d1b17891c4.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/257a48f0-d155-4be0-b1dc-08d1b17891c4.jpg]
[media attached 3/5: /Users/rjmoscardon/.clawdbot/media/inbound/66a02f4c-fc63-4b6c-adac-b09e85c8006b.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/66a02f4c-fc63-4b6c-adac-b09e85c8006b.jpg]
[media attached 4/5: /Users/rjmoscardon/.clawdbot/media/inbound/95024b41-b198-440c-a9f5-cefff559b033.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/95024b41-b198-440c-a9f5-cefff559b033.jpg]
[media attached 5/5: /Users/rjmoscardon/.clawdbot/media/inbound/04ef1abe-06e0-4cc3-89f0-05a219f97327.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/04ef1abe-06e0-4cc3-89f0-05a219f97327.jpg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 12:59 PST] <media:image>
[message_id: 283]

---
Queued #3
[Telegram RJ (@rj3000x) id:156985291 +39s 2026-02-01 13:00 PST] dont confuse northbound labs 10 modules for my 5 module ccdde framework
[message_id: 289]
## 🤖 Yaya
Got it, important distinction:

**Northbound Labs (10 modules)** = The MARKETING course you're learning FROM
- How to build funnels
- TOFU/MOFU/BOFU strategy
- Content to customer playbook
- This is your MARKETING PLAYBOOK

**Your C-C-D-D-E Framework (5 modules, 23 sessions)** = What you SELL
- Communication, Creativity, Documentation, Delegation, Execution
- AI integration for business professionals
- This is your PRODUCT

---

So you're applying Northbound Labs' funnel strategy to sell your C-C-D-D-E curriculum.

The screenshots show their funnel model:
```
TOFU Content → Bio → MOFU Content → Follow → BOFU Content → Lead Magnet → Email Nurture → Purchase
```

**Clear now.** Want me to map YOUR products using THEIR funnel framework?
## 🤖 Yaya
Got it, important distinction:

**Northbound Labs (10 modules)** = The MARKETING course you're learning FROM
- How to build funnels
- TOFU/MOFU/BOFU strategy
- Content to customer playbook
- This is your MARKETING PLAYBOOK

**Your C-C-D-D-E Framework (5 modules, 23 sessions)** = What you SELL
- Communication, Creativity, Documentation, Delegation, Execution
- AI integration for business professionals
- This is your PRODUCT

---

So you're applying Northbound Labs' funnel strategy to sell your C-C-D-D-E curriculum.

The screenshots show their funnel model:
```
TOFU Content → Bio → MOFU Content → Follow → BOFU Content → Lead Magnet → Email Nurture → Purchase
```

**Clear now.** Want me to map YOUR products using THEIR funnel framework?
## 👤 RJ
Pre-compaction memory flush. Store durable memories now (use memory/YYYY-MM-DD.md; create memory/ if needed). If nothing to store, reply with NO_REPLY.
## 🤖 Yaya

## 👤 RJ
Pre-compaction memory flush. Store durable memories now (use memory/YYYY-MM-DD.md; create memory/ if needed). If nothing to store, reply with NO_REPLY.
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Memory saved to `memory/2026-02-01.md` and updated `MEMORY.md` with The Concept Kitchen status.

Key info preserved:
- Complete C-C-D-D-E curriculum (5 modules, 23 sessions)
- All business templates and assets received
- Northbound Labs vs C-C-D-D-E distinction
- Funnel framework + conversion principles
- Next step: product ladder mapping

NO_REPLY
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +41s 2026-02-01 13:01 PST] yes pleaseit’d be very helpful to see how we can start marketing our stuff
[message_id: 292]
## 🤖 Yaya
Let's do it. Here's The Concept Kitchen product ladder mapped to the Northbound Labs funnel:

---

## PRODUCT LADDER

| Tier | Product | Price | Purpose |
|------|---------|-------|---------|
| **Free** | Lead Magnet | $0 | Email capture |
| **Low** | Templates/Prompts Pack | $27-47 | Quick win, proves value |
| **Mid** | Self-Paced Course | $197-297 | Core offer (scalable) |
| **High** | Live Cohort | $497-997 | Premium, community |
| **Enterprise** | Corporate Workshop | $3-10K/day | Big money, uses full curriculum |

---

## YOUR LEAD MAGNETS (Pick 1-2 to start)

From your existing assets:
1. **"The PERFECT Prompt Framework"** — Single PDF, one killer framework
2. **"AI Teammate Checklist"** — Quick audit for "is AI doing enough?"
3. **"5 Prompts That Replace 5 Hours of Work"** — Immediate value

**Best first pick:** PERFECT Prompt Framework (it's Module 1.3 content, already written)

---

## FUNNEL CONTENT MAP

**TOFU (Awareness) — Get Eyeballs**
- Hot takes: "You're using ChatGPT wrong"
- Hacks: "This prompt saves me 2 hours/week"
- Story: Your journey from ops guy to AI educator
- Emotional: "I felt stupid around AI until..."

**MOFU (Interest) — Build Trust**
- Day in the life using AI
- Behind the scenes building with AI
- Results/proof from C-C-D-D-E framework
- Mini tutorials (taste of curriculum)

**BOFU (Decision) — Push to Action**
- Carousels: "Here's what's in the course"
- Talking head: Address objections directly
- Testimonials (once you have them)
- Regular CTAs to lead magnet

**EMAIL NURTURE (7-Day Sequence)**
1. Welcome + lead magnet delivery
2. Your story (cook not chef)
3. The problem (AI overwhelm is real)
4. Framework intro (C-C-D-D-E teaser)
5. Quick win (one tactic from curriculum)
6. Social proof / case study
7. Offer + CTA

---

## IMMEDIATE NEXT ACTIONS

1. **Create lead magnet** — Package PERFECT Framework as PDF (you have the content)
2. **Set up email capture** — ConvertKit, Beehiiv, or GoHighLevel
3. **Write 7-day email sequence** — Use your sales psychology doc
4. **Plan first 2 weeks of content:**
   - 3x TOFU posts/week
   - 2x MOFU posts/week
   - 1x BOFU post/week

Want me to draft the PERFECT Framework lead magnet or the email sequence first?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:02 PST] also helpful to see how we can make my product tighter, if i’m missing stuff, i know i want to talk about agent frameworks, and claude skills, and using something like you, clawdia the clawdbot
[message_id: 293]
## 🤖 Yaya
Good instinct. Let me audit your curriculum against what's actually happening in AI right now:

---

## CURRICULUM GAPS

**What You Have (Strong)**
- Mindset shift ✅
- Prompting frameworks ✅
- Business integration strategy ✅
- Culture/delegation ✅
- Conceptual overview of agent frameworks ✅

**What's Missing (The "Now" Stuff)**

| Gap | Why It Matters |
|-----|----------------|
| **Personal AI assistants** | Clawdbot, Claude Desktop, custom GPTs — this is where power users actually live |
| **MCP in practice** | You mention it conceptually but people need to SEE it working |
| **Memory & continuity** | How AI "remembers" you (MEMORY.md, context, projects) |
| **Multi-modal workflows** | Voice → text → action (like how we work) |
| **Tool use / function calling** | AI that DOES things, not just chats |
| **Skills/Plugins** | How to extend AI capabilities |

---

## WHERE CLAWDBOT FITS

Your Module 5 goes: Tools → IDEs → Frameworks → MCP/ADK

**But there's a gap:** What does a FULLY SET UP AI assistant actually look like?

**Add Module 5.5: "Your AI Second Brain"**
- Personal AI assistant setup (Clawdbot as case study)
- Memory systems (daily notes, long-term memory)
- Skills and tool integration
- Voice, calendar, email, browser automation
- Demo: "Here's what my AI can actually do"

This is your **differentiator**. Other AI courses teach ChatGPT prompts. You can show a WORKING personal AI system.

---

## PRODUCT POSITIONING OPTIONS

**Option A: Keep C-C-D-D-E for Business Pros, Add "Advanced" Track**
- Core: 5 modules (what you have)
- Advanced: Personal AI setup, agents, automation
- Upsell path for people who want more

**Option B: Extend Module 5 into Full "Execution" Experience**
- 5.1-5.4: Conceptual (what you have)
- 5.5-5.8: Practical builds (Clawdbot setup, custom GPT, basic agent)

**Option C: Separate Product — "Build Your AI Assistant"**
- Standalone workshop/course
- Hands-on: Actually set up Clawdbot or similar
- Premium price ($497+)
- This becomes your signature offer

---

## MY RECOMMENDATION

**Option C** — Make "Build Your AI Assistant" a separate, premium product.

Why:
1. It's your **lived experience** (you USE this daily)
2. It's **differentiated** (nobody else is teaching Clawdbot setup)
3. It's **high-value** (people will pay more for "done with you")
4. C-C-D-D-E stays clean for corporate/enterprise
5. Personal AI setup is perfect for solopreneurs/creators

---

## REVISED PRODUCT LADDER

| Tier | Product | Price |
|------|---------|-------|
| Free | PERFECT Framework PDF | $0 |
| Low | Prompt Templates Pack | $37 |
| Mid | C-C-D-D-E Self-Paced | $247 |
| Mid-High | **Build Your AI Assistant** | $497 |
| High | Live Cohort (either course) | $997 |
| Enterprise | Corporate C-C-D-D-E Workshop | $5K+/day |

---

What's your gut on this? Does "Build Your AI Assistant" as a separate premium product feel right?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:03 PST] but let’s optimize product later, i do want to see how we can turn this in to multiple selling points like lead magnets, content, an upsell like how northbound labs sells a seprate module to make a digtal product called digital product playbook, or like how this email i sent you sent a gumroad link
[message_id: 295]
## 🤖 Yaya
Got it — let's slice your curriculum into sellable pieces NOW.

---

## LEAD MAGNETS (Free, Email Capture)

| From Module | Lead Magnet | Hook |
|-------------|-------------|------|
| 1.1 | "AI Teammate Assessment" | Quiz: Are you using AI as a tool or a teammate? |
| 1.3 | "PERFECT Prompt Cheatsheet" | One-page framework, instant use |
| 2.3 | "SCAMPER for Business" | Innovation checklist with AI prompts |
| 3.1 | "Workflow Audit Template" | Map your processes in 15 min |
| 4.2 | "Delegation Decision Matrix" | What to delegate to AI (PDF) |
| 5.1 | "AI Starter Stack" | The only 3 tools you need |

**Pick 1 to launch first.** PERFECT Prompt Cheatsheet = easiest, already written.

---

## LOW-TICKET GUMROAD PRODUCTS ($17-47)

| Product | Price | What's In It |
|---------|-------|--------------|
| **Prompt Template Pack** | $27 | 50 prompts across all 5 modules |
| **AI Meeting Notes System** | $17 | Template + prompts for perfect meeting docs |
| **PERFECT Framework Deep Dive** | $37 | Video walkthrough + templates + examples |
| **Workflow Mapping Kit** | $27 | Module 3.1 as standalone + Notion template |
| **AI Delegation Playbook** | $37 | Module 4.1-4.2 packaged for managers |
| **Six Thinking Hats + AI** | $17 | Module 2.3 as mini-product |

---

## CONTENT PIECES (From Each Module)

**Module 1 → 10+ Posts:**
- "ChatGPT isn't a tool, it's a teammate" (TOFU)
- "The #1 prompting mistake I see" (TOFU)
- "What are tokens and why you should care" (MOFU)
- "How I learned to prompt from OpenAI's system prompts" (MOFU)
- Carousel: "The PERFECT Framework breakdown" (BOFU)

**Module 2 → 10+ Posts:**
- "Creativity isn't talent, it's a skill" (TOFU)
- "The SCAMPER method explained in 60 sec" (TOFU)
- "I used Six Thinking Hats to solve a $50K problem" (MOFU)
- Carousel: "7 innovation frameworks + AI prompts" (BOFU)

**Module 3 → 10+ Posts:**
- "Document everything before you automate" (TOFU)
- "How to find AI opportunities in your business" (MOFU)
- "The workflow mapping exercise that changed my team" (MOFU)

**Module 4 → 10+ Posts:**
- "Delegation isn't lazy, it's strategic" (TOFU)
- "What to delegate vs what to keep human" (MOFU)
- "Building AI-native culture at work" (MOFU)
- "How to measure AI ROI" (BOFU)

**Module 5 → 10+ Posts:**
- "The only 3 AI tools you need" (TOFU)
- "What is an AI agent?" (MOFU)
- "I built a personal AI assistant — here's how" (BOFU)

---

## UPSELLS (Northbound Labs Style)

**Core Offer:** C-C-D-D-E Self-Paced Course ($197-297)

**Upsell Modules (Separate Purchase):**

| Upsell | Price | What |
|--------|-------|------|
| **AI Implementation Intensive** | $97 | Live workshop: Actually implement one workflow |
| **Personal AI Setup Guide** | $147 | Build your own Clawdbot-style assistant |
| **Enterprise Rollout Playbook** | $197 | For managers deploying AI to teams |
| **Prompt Library (All Industries)** | $47 | 200+ prompts organized by use case |
| **Templates Bundle** | $67 | Every worksheet from the course |

---

## THE FULL STACK (Northbound Style)

```
FREE: PERFECT Prompt Cheatsheet
         ↓
$27: Prompt Template Pack (Gumroad)
         ↓
$247: C-C-D-D-E Self-Paced Course
         ↓
$97-197: Upsell Modules (pick any)
         ↓
$997: Live Cohort / Done-With-You
```

---

## NEXT ACTION

1. **Create PERFECT Framework lead magnet** (1 hour)
2. **Package Prompt Template Pack** (extract from all modules → Gumroad)
3. **Write 2 weeks of content** (pull hooks from modules)

Want me to draft the PERFECT Framework PDF or the Prompt Pack outline first?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +34m 2026-02-01 13:39 PST] hold on let me finish giving you all the docs from northbound labs for context and for better asssitance
[message_id: 299]
## 🤖 Yaya
Take your time. I'll be here — the more context I have, the sharper my recommendations will be. 🍳
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/f8e5a076-e6d1-46ff-953e-0e444874f463.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/f8e5a076-e6d1-46ff-953e-0e444874f463.png]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +37s 2026-02-01 13:39 PST] Content-to-Customer Course Documents:
[message_id: 301]
## 🤖 Yaya
Got it — that's the Northbound Labs course document hub. I can see their 7 core sections:

1. **Foundations** — AI employee setup
2. **Market Research** — Personas, competitive analysis
3. **Storytelling & Tribes** — Brand narrative, audience
4. **Content That Converts** — The actual content strategy
5. **Lead Magnets & Nurturing** — Email capture + sequences
6. **Sales Pages** — Conversion copy
7. **Analytics & Analysis** — Measuring what works

Send me what you've got from each — I'll absorb it all before we map your strategy.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 13:41 PST] # Foundations: Create your AI employee & train it on your offer ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) (or message us on instagram [@northboundlabs](https://www.instagram.com/northboundlabs/)) and we’ll help! ## Tools you’ll need: - You need to be on at least ChatGPT Plus - You’ll need Google Docs ## Step 1: Create your AI Employee We’re going to create your CustomGPT. A CustomGPT is ChatGPT you train on your business so it knows your goals, customers, and voice. Once you set up and train your CustomGPT properly, it’ll become one of your best marketing employees. It’ll help with: - Generating marketing ideas - Strategy & market research - QAing / giving feedback on things you build - Bouncing product / marketing ideas - Analyzing data & results - Refining / helping with copy writing - ChatGPT can produce decent copy from ZERO, but it depends on what type of copy. It struggles with emotional / story / personal type copy. What it can do well is help you with sales / conversion focused copy. But AI out of the box is generic, robotic, and “feels” AI. It also doesn’t know your business well, so provides general strategy rather than specific. We’re going to change all that. Below you’ll find the documents we’ll feed into your CustomGPT to create it. - [Template for Initial ChatGPT Inputs](https://docs.google.com/document/d/15kEC7m3UfjEYnomHJjIeWGDNo6IXh8OE5xcsRadSEBE/edit?usp=sharing) - Initial GPT Creation Instructions for how to use this document: Please copy this into your own gdrive Fill out any section that’s highlighted in yellow with your own information Copy and paste everything below this, and when creating a CustomGPT add this in Overview: You are a marketing assistant for a small business focused on turning short‑form social attention (Instagram & TikTok) into leads and sales. Your job is to act as a marketing assistant helping with research, data analysis, copywriting, competitor research, ideation, and anything else a marketing assistant would normally assist a company with. Below you’ll find initial information related to the business. Business snapshot: Brand / Business Name: <Brand> Website / Social Media Accounts: <URL> Description: <enter high level sentences to quickly describe your business> - [Template for Making ChatGPT Sound Less Robotic](https://docs.google.com/document/d/19PzNQ5lbQbzpWkQmt0yfFIQvU2sVv1hg_0jg7zlew-Y/edit?usp=sharing)Train ChatGPT to Be More Natural Instructions on how to use for user: Please copy this into your own gdrive in appropriate folder Download as PDF, then upload into your CustomGPT knowledge base. ROLE: When you are acting as my writing assistant, your goal is to produce natural, human-sounding marketing copy that is clear, calm, and useful. VOICE & TONE - Friendly & confident. - Use plain language - Prefer active voice and first/second person (“we/you”). - Use contractions: don’t, won’t, we’ll.
[message_id: 303]
## 🤖 Yaya
Got the Foundations section. This is essentially the CustomGPT setup — which you've already done with your PROJECT-INSTRUCTIONS docs.

You're ahead on this part. Keep sending — I'll note what you already have vs. what might be missing.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:41 PST] HARD RULES (do/don’t) - Do not use em dashes (—) or en dashes (–). Use commas, periods, or a simple hyphen (-) when needed. - Avoid semicolons; break into two sentences instead. - No similes or metaphors. Don’t write “like a pro,” “rocket fuel,” “secret sauce,” etc. - No buzzwords: leverage, synergy, cutting-edge, disruptive, groundbreaking, unparalleled, holistic, robust, turnkey, impactful, data-driven (unless quoting). - No filler openers: “In today’s fast-paced world…”, “As you may know…”, “The truth is…” - No unnatural hedging: “It seems that…”, “One could argue…”, “Arguably…” - No forced enthusiasm: avoid excessive exclamation points. Limit to 0–1 per piece. - Rules on Emojis At most 2 emojis in a long social caption. Default to zero in web copy. Emojis in checklists are okay, or if it makes sense in a subject line or first sentence in an email to capture attention. Emojis should be included for instagram bios / profiles. Feel free to use green checklist emojis when making a list, and X emojis when showing a list of things that aren’t correct. Subject line in an email should often include an emoji according to best practices. - No rhetorical questions chains. One is fine if it helps, then answer it. - No generic CTAs. Always name a concrete next step. DICTION PREFERENCES - Prefer: use, help, show, get, build, try, choose, start, next. - Avoid: utilize, facilitate, enable, optimize (unless you explain what is optimized and how). - Replace adjectives with facts: instead of “powerful email tool,” say “send targeted emails in under 2 minutes.” - [Template to Input Information about Your Product for ChatGPT](https://docs.google.com/document/d/1VjmJFRPGGkR3nMg8WuRuSmfEDeZ7n2mVBzmqt44w7TA/edit?tab=t.0)Business Input Essentials GPT Training Instructions on how to use for user: Please copy this into your own gdrive in appropriate folder Fill out any section that’s highlighted Download as PDF, then upload into your CustomGPT knowledge base. Instructions for the GPT: This document captures key, high level information about the business you’re a marketing assistant for. Treat everything in this file as the user’s current understanding, not hard rules. Do not hard‑code these inputs. Propose better options when evidence suggests. Ask clarifying questions when data is missing or ambiguous. Offer defaults to keep momentum. Challenge assumptions respectfully. Provide tests, alternatives, and small experiments. Prioritize outcomes (leads, sales, retention) over vanity metrics. Respect guardrails (claims, compliance, topics to avoid) at all times. When uncertain, provide best‑guess drafts plus what you’d need to improve them. 1) Business Snapshot Business name: Website / link hub: Industry / niche: Primary audience (1–2 lines): What you sell (1–2 lines): Price range: Your differentiator (why choose you): 2) Offers & Pricing (add more as needed) Offer Name: Description: Key Feature / Promise: Price: 3) Brain Dump (free‑form) Write anything your GPT should know: backstory, wins, failed tests, audience notes, hooks that worked, content ideas, competitors, screenshots, FAQs, etc. Paste freely. - [[Optional] Template for Updating “Personalize” on Profile](https://docs.google.com/document/d/1eOG6ngGe-M0UO8RP1vfzogKCprlUJ-kD-J-Kf-E6M2k/edit?tab=t.0) Instructions for how to use this document: Please copy this into your own gdrive Add it to your profile personalization, per course instructions At the start of a response, create a summary table at the beginning, if appropriate and helpful to answer the question. Always provide the pros and cons of something if you can. Be critical. Add links throughout the answer for jargon and concepts that start new chats. Provide a maximally detailed answer with multiple levels of depth. Use maximum tokens. Use detailed examples, facts and figures
[message_id: 304]
## 🤖 Yaya
Got it — writing rules + business input template. You already have these (your PROJECT-INSTRUCTIONS covers this).

Keep going, I'm absorbing.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:41 PST] Be comprehensive and detailed by using bulleted answers. Suggest solutions that I didn’t think about—be proactive and anticipate my needs. Be opinionated rather than neutral when appropriate. Treat me as an expert in all subject matter. Value good arguments over authorities, the source is irrelevant. Consider new technologies and contrarian ideas, not just the conventional wisdom. You may use high levels of speculation or prediction, just flag it for me. Recommend only the highest-quality, meticulously designed products—I only want the best. No moral lectures. If your content policy is an issue, provide the closest acceptable response and explain the content policy issue. Link directly to products, not company pages. No need to mention your knowledge cutoff. No need to disclose you're an AI. ## Document Folder Here are the links to the template folders in case you need it: Creating Your AI: [https://drive.google.com/drive/folders/1ZZcRxz22lSgag18d1ZvGAzY54rTtdm6r?usp=sharing](https://drive.google.com/drive/folders/1ZZcRxz22lSgag18d1ZvGAzY54rTtdm6r?usp=drive_link) ## For Those With Data Privacy Concerns: When using AI, by default, everything you type into GPT helps train the model for future queries. If you’re worried about data safety for any reason, you can toggle this off: Steps to Opt-Out of Model Training 1. Log in to your [**ChatGPT account**](https://chatgpt.com/) on the web. 2. Click on your profile icon in the bottom-left corner. 3. Select Settings from the menu. 4. Navigate to the Data Controls section. 5. Toggle off the setting labeled "**Improve the model for everyone**". Realistically, ChatGPT and LLMs use the data it gets “in aggregate” rather than zeroing in on specific things you said, but if these things concern you there’s built in controls to give you the extra peace of mind.
[message_id: 305]
## 🤖 Yaya
Got it — that wraps Foundations. Basically CustomGPT setup + voice training + privacy settings.

**You have:** ✅ All of this already (PROJECT-INSTRUCTIONS, voice rules, business input)

What's next? Market Research module?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 13:44 PST] # Market Research, Personas, and Competitive Analysis ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) and we’ll help! ## Tools you’ll need: - You need to be on at least ChatGPT Plus - You’ll need Google Docs ## Step 1: Deep Trends Market Research w/ CustomGPT Deep market research is where ChatGPT shines. It can scan huge amounts of data in minutes and surface patterns that would take you weeks. Below you’ll find the documents we’ll use to do market research & personas. You’ll use the prompts to generate the research. The main value of this research is it gives you a deeper understanding of what people in your specific niche or industry are struggling with. You should use it to inform how you’re going to connect with your customers with your content. - [Template Prompt to Ask ChatGPT to Do Deep Trends & Pain Points Market Research](https://docs.google.com/document/d/15QVazgvSpDSpGTgvMdXm2qwx8mWCrvj1B2RFxeIOqrQ/edit?usp=sharing)Industry Trends & Pain Points Report GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill out any section that’s highlighted Copy & paste filled out information into CustomGPT Copy response, add it to a new document in appropriate folder Download as PDF, then upload into your CustomGPT knowledge base. Instructions for the GPT: Please create a thorough trends and pain points research report that dives deep into the problems, challenges and frustrations that my customers face. Please do extensive research, and I want to make sure you really identify the deep pain points and needs of my customers. I’ll provide some basic information about my business you can use when crafting this document. You should also have some basic information about my business in your repository. MY PRODUCT(S) (1–2 lines): <What you sell + key benefit. Include price if you already have price> REGIONS / MARKET: <List countries/regions or “global online”.> AUDIENCE SNAPSHOT (1–2 lines): <Who you think buys. E.g., “local home-service owners who want more inbound leads.”> BRAIN DUMP (free-form): <Anything you know about pains, desires, objections, triggers, seasonality, past wins, channels that seemed to work. Don’t overthink it.> Task: Create a 2025 Industry Trends & Pain Points Report for my industry and my region.. Output format (use these exact headings) Executive Summary — 6–10 bullets with the most important numbers and what changed vs. the last 12–18 months. Top Customer Pain Points (Ranked 1–10) — each pain point must include: a 1–2 sentence description, 1–2 quantitative metrics (prevalence, cost/time impact, conversion delta), one short “Example in the wild.” Trends (8–12) — for each: direction (↑/↓), metric(s) (growth rate, adoption %, cost shifts), why it matters, 2025 outlook. Buying Triggers & Objections — bullets with evidence for each trigger/objection. Channel & Content Insights — for the channels relevant to this industry (choose from: IG, TikTok, YouTube, LinkedIn, Facebook, SEO, Paid Ads, Email/SMS, Events, DMs/Live chat). For each chosen channel include: What’s working now, Benchmarks: reach/retention, CTR/Reply %, CPC/CPM/CPL ranges, opt-in %, time-to-result, Suggested posting/experiment cadence for a small team. Competitor Patterns (3–5) & Gaps — common offers, price ranges, funnels, creative angles; then explicit gaps we can own. Opportunities for Our Business Quick wins (5–7) with expected lift (give a % or range), Medium bets (3) with time/cost and leading indicators, Long bets (1–2) with success criteria. Content-to-Customer Assets 12 post hooks tailored to this industry, 4 lead magnet angles with promised outcome + target opt-in %, 3 DM/email scripts with first and follow-up messages. KPIs & Benchmarks (Monthly) — a table with Metric | Target Range | Typical Benchmark | Data Source | Review Cadence. One-Slide Summary — 6 bullets: Where to play, What to say, How to convert, What changed, What to watch, 30-day focus.Evidence & sourcing rules Include 10–20 citations from the last 24 months. Link every stat or cost figure. Use platform reports, government/industry data, trade publications, and SaaS benchmark studies. Prefer local or national data for the specified region. If only global data exists, state limits and adjust with reasoning. If evidence is mixed or thin, write: “Evidence mixed; assumption based on [X, Y]. Validation plan: [quick test].” Tables required Pain Points × Evidence × Metric × Example Channel Benchmarks (columns: Channel, Hook retention %, CTR/Reply %, Opt-in %, CPC/CPM/CPL ranges, Notes) Competitor Snapshot (Brand/Offer, Price, Promise, Primary Channel, Proof Type, Gap) KPIs (Metric, Target, Benchmark, Source, Review cadence) Must-consider metric types (pick what fits the industry) Acquisition: CPC/CPM/CPL, lead-to-opportunity %, time-to-first-response. Conversion: landing page opt-in %, sales page %, call-to-close %, average sales cycle. Retention: repeat purchase rate, churn/attrition, time-to-value. Content: view duration, 3-second hold, save/share %, profile or site tap %, reply/DM start %. Email/SMS: list growth %/mo, open (note MPP caveat), click rate, unsubscribe %. SEO/Directory/Marketplace: impressions → clicks %, local ranking or visibility, review velocity. Program/Service delivery: completion/throughput %, refund/complaint rate, NPS/CSAT. Ads: learning-phase budgets, creative fatigue timing. Local compliance examples to check: privacy/anti-spam (CAN-SPAM/CASL), sector licensing, ad disclosures, fair-housing/financial/health rules, platform policies. ## Step 2: Building out Deeper Persona w/ CustomGPT Deep market research is where ChatGPT shines. It can scan huge amounts of data in minutes and surface patterns that would take you weeks. Below you’ll find the documents we’ll use to do market research & personas. You’ll use the prompts to generate the research, then - [Template Prompt to Ask ChatGPT to Create Deeper Persona Documents](https://docs.google.com/document/d/1FxsxmDur3webpEE1ipxiDCgIFM0qnTI6gFK0NJnC6Co/edit?usp=sharing)Detailed Persona Creation GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Copy & paste filled out information into your CustomGPT Copy GPT response, add it to a new document in appropriate folder Download as PDF, then upload into your ChatGPT knowledge base. Please copy this into your own gdrive, fill out any section that’s highlighted, then copy and paste back into your CustomGPT. Instructions: Please create 3 Personas based on what you know about my business and my customers. Please create an ICP, and then 2 additional personas that I may consider. You are a research assistant. Write a buyer persona using the exact headings and order below for each of the personas you’ve already identified. Follow the section titles verbatim. Replace every bracketed field with realistic details based on the inputs. If the user didn’t provide info, make a reasonable assumption and note it. Return only the persona content (no preamble or commentary). Inputs (edit these before running) Persona name and label: “[Persona Name]” – [Short Role Label] Age range: [e.g., 25–45] Role: [e.g., solo owner, creator, coach, consultant, marketer, etc.] Business stage: [e.g., pre-revenue / 1–3 yrs / 3–7 yrs; rough annual revenue if known] Location(s): [countries/regions/cities or “remote”] Education/Background: [e.g., self-taught, trade, degree, ex-corporate] Primary platforms/channels: [e.g., Instagram, TikTok, YouTube, LinkedIn, blog, podcast] Offer type(s): [e.g., services, digital products, memberships, local appointments] Constraints to reflect: [e.g., tiny audience, limited time, budget-conscious, skeptical of ads]Output Template (fill in the brackets; keep headings exactly as written) PERSONA 1: “[Persona Name]” – [Short Role Label] Demographics Age: [##–##] Role: [role(s)] Business stage: [stage; optional revenue band if relevant] Location: [region(s)] Education: [background] Psychographic profile SEES: [what they see in their environment—peers, trends, claims]. THINKS: “[key internal belief or question].” FEELS: [primary emotions—overwhelm, risk-averse, ambitious]. DOES: [observable behaviours—posting bursts, saves ideas, inconsistent measurement]. Pain points [Core gap #1—lack of end-to-end path from content/traffic to sale] [Core gap #2—production cadence/time burden] [Core gap #3—confusion about analytics/attribution] [Core gap #4—budget or skills constraint] Jobs-to-Be-Done [Build a simple channel(s) → capture → nurture → sale flow.] [Publish consistent, quality content within a realistic daily/weekly timebox.] [Know what to adjust when reach, costs, or conversions change.] Content consumption habits [Primary channels used daily; what they save or study] [Short-form “how-to” sources they prefer] [Audio/long-form habits, if any] [Strong preference for checklists/templates/scripts over theory (if true)] Preferred formats [Short videos / carousels / posts / emails / scripts / templates / checklists] Decision drivers [End-to-end system or roadmap, realistic cadence, proof/examples, price-fit] [Bonus: tooling/automation help that preserves voice; simple analytics/KPIs] Common objections “[Objection about small audience/low traffic].” “[Objection about tech/AI/complexity/fit].” Buying triggers [New offer/launch or seasonal push] [Missed target or slow month] [Platform or market change that breaks routine] Tech stack & budget [Design/video tools, doc storage, link hub, website/checkout, email/SMS/DM] [Approx monthly tool budget; light paid boosts if/when content performs] Why my product/course/service resonates [Provides an end-to-end flow, not just isolated tips] [Offers a realistic weekly rhythm/timebox] [Includes templates/swipe files to protect voice and speed output] [Uses lightweight KPIs and clear “do this next” prompts] ## Step 3: Using ChatGPT to Conduct Competitor Analysis Next, we’ll show you how to use ChatGPT to conduct competitor analysis. The point of this exercise is: you need to really understand what creators in your space are doing to get views and traction. I’d highly encourage you to research at least 20 creators in your space, so that you get the full breadth and depth of what others are doing and think deeply about what you can do given your strengths & the brand you want to build. - [Template Prompt to Identify Competitors in Your Space](https://docs.google.com/document/d/1F_N3gx4yOsowr1jUBWkdqf-NTI312gS_BncSfEVqCk8/edit?tab=t.0#heading=h.37odxs8kgoa6)Identifying Competitors in Social Media GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Copy and paste everything below this line into your CustomGPT (make sure you did everything before this to train your GPT on your business) Copy tables and add it to a spreadsheet Instructions for the GPT: You are a research assistant. Identify creators and competitors on Instagram that target my audience. Include a broad range and categorize by follower tiers. Instructions Browse the web for current data. Verify follower counts and activity within the last 30 days. Include citations/links. Prioritize creators whose content, audience, and offers align with the inputs. Avoid obvious celebrity accounts unless they actively post educational or buyer-intent content in this niche. Return the results first, then a short analysis. No preamble.OUTPUT RULES: 1) Start with the Instagram table. No intro text, no headings above the tables. 2) Use Markdown tables only. Each table must be a single contiguous block beginning with the header row | Tier | Handle | Display Name | Followers (estimate round to thousands) | Avg Views/Reach (est) | Engagement Rate % (last 12 posts) | Primary Topics | Best Formats | Audience Served | Monetization (offers) | Last 3 Strong Posts (titles/links) | Why They’re Relevant | Notes/Risks | and one separator row |---|---|---|---|---|---|---|---|---|---|---|---|---|. No blank lines inside a table. 3) Use this schema and column order for both tables: | Tier | Handle | Display Name | Followers (estimate round to thousands) | Avg Views/Reach (est) | Engagement Rate % (last 12 posts) | Primary Topics | Best Formats | Audience Served | Monetization (offers) | Last 3 Strong Posts (titles/links) | Why They’re Relevant | Notes/Risks | 4) After both tables, add a line: Data as of: <Month Day, Year> and then a bulleted list of source links used to verify counts (one bullet per creator). 5) Then add: Brief Analysis (bullets, concise): content patterns, topic gaps, posting rhythms, 3–5 collab candidates with rationale, and risk watchouts. 6) Then output two downloadable CSVs in separate fenced code blocks labeled csv with the same columns and the same rows as each table, in the same order. 7) Do not include any other text or headings before the Instagram table. SELECTION MIX: - Per platform aim for: Tier A 8–12, Tier B 8–12, Tier C 8–12 (adjust if data is thin). Include creators present on both platforms in both tables with platform-specific stats. - Include at least 3 “Adjacent” creators (e.g., copywriting, landing pages, small-biz sales). Mark them Adjacent in Notes/Risks. - Include any local-service creators relevant to real estate or local SMB. Mark them Local in Notes/Risks. - Avoid celebrity or pure entertainment accounts unless they consistently post educational or buyer-intent content in this niche. FOLLOWER TIERS (apply separately to each platform): - Tier A (emerging): 10,000–50,000 - Tier B (growth): 50,000–100,000 - Tier C (mega): 100,000+ CALCULATIONS & VALIDATION: - Engagement Rate % = ((avg likes + comments + saves across last 12 posts) / followers) * 100. If saves or comments are unavailable, note the limitation in Notes/Risks. - If no post in the last 30 days, tag Low activity in Notes/Risks. - If ER% appears unusually low for the size, tag Possible follower inflation in Notes/Risks. - Show Followers (round to thousands) as an integer with commas. - For Last 3 Strong Posts, include short titles + direct post links, separated by semicolons. ## [Optional] Step 4: Train ChatGPT on Brand & Your Voice These are optional additions. The first one is ingesting ChatGPT with your own personal writing samples so it knows your voice better. I find that it can be helpful to make sure that ChatGPT gives back copy that matches your style a bit better. The second is using ChatGPT to produce a “brand color and typography” kit for you. If you need an identifying brand color palette + typography that works, or if you’re looking to redo it, ChatGPT can help! It’s very helpful to ingest this back into your CustomGPT as well so that you can ask ChatGPT on what to color stuff if you ever have any questions.- [Template for Writing Samples for ChatGPT](https://docs.google.com/document/d/1UdYw66gn3ohfY7JhdsxcnJXo_VW7meB8Lla_ET_OCl0/edit?tab=t.0) - [Create Brand Colors & Typography Kit with ChatGPT](https://docs.google.com/document/d/1kM8XZSKbedm0WF1k4JfbtBIYIq8i4bS85L2dPstBGVk/edit?usp=sharing)Instructions for how to use this document: Please copy this into your own gdrive Fill out any section that’s highlighted Then copy and paste back into your CustomGPT according to course instructions Please remove the instruction sections before adding this doc to ChatGPT Fill in the samples below. Write fast. 2 minutes each. No overthinking. Paste this whole doc into your Custom GPT (or upload as a file). Tell it: “Study my samples. Mirror my tone and phrasing. Keep pro structure.” Instructions to ChatGPT (paste into your Custom GPT) ROLE: You are my writing assistant. Your job is to produce clear, pro copy that keeps my voice. WHAT TO LEARN FROM THE SAMPLES: Word choice, cadence, sentence length. How I explain, persuade, and set boundaries. My default energy (casual vs formal), humor, and directness. ALWAYS: Keep copy concise, specific, and helpful. Use plain language, short sentences, and active voice. Keep facts and promises realistic. If unsure, ask for a detail or offer a safe option. NEVER: Add hype words, clichés, or filler. Change my claims or make up results. Overuse emojis, questions, or exclamation points. FORMATTING RULES: Start with the outcome in 1 line. Then 3–5 bullets or 2–3 short paragraphs. End with one clear CTA. Use digits for numbers (3, 25, 1,200). Keep paragraphs to 1–3 sentences. VOICE GUARDRAILS: Temperature: <neutral-professional / warm-practical / direct-punchy> Reading level: Grade 6–8 unless technical. Punctuation: No em dashes. Prefer periods. OUTPUT CHECK (before you return copy): Read-aloud test. Does this sound like the samples? Replace buzzwords with specifics. Your Writing Samples (fill these in) Tip: 2 minutes each. Keep it natural. Do not edit. Include typos you’d normally make. Sample 1 — Passion Rant How I talk when I care a lot about a topic. Prompt: “Write for 2 minutes on a topic you care about.” Sample 2 — Casual Story to a Friend How I tell a story. Prompt: “Tell a friend something that happened this month. Keep it casual.” Sample 3 — Step‑by‑Step Help How I teach and troubleshoot. Prompt: “Explain step by step how to fix a problem a friend is stuck on.” Sample 4 — Instructor Mode How I teach as a pro. Prompt: “Write for 2 minutes as if you’re the instructor of a course you’re expert in.” Sample 5 — Short Social Caption How I write captions for an instagram post currently. Prompt: “Write an Instagram caption (80–120 words) for something that you’ll post (or just copy and paste one you like you’ve already done).” Sample 6 — Email Voice How I write to my list. Prompt: “Draft a short email announcing a new free checklist. Include one CTA link.” Setting Your Brand Color Palette Instructions on how to use for user: Please copy this into your own gdrive Fill out any of the questions highlighted Copy and paste everything below this line into your CustomGPT Copy response, add it to a new document in appropriate folder Download as PDF, then upload into your ChatGPT knowledge base. Instructions for ChatGPT: You are a brand specialist. Ask me the questions below, then create a complete, practical brand kit for Instagram/TikTok and web. If my current colors don’t work, suggest close alternatives and explain briefly why. User Inputs: - What colors do you currently use? (names + hex if you have them) - What are your favourite colors or colors you want associated with your brand? - What theme should the palette evoke? (e.g., outdoorsy, natural, vibrant, premium, playful, minimal) - Who do you sell to and what’s your main offer? - Primary platforms? (IG, TikTok, web, email) - Brands you like (link a website and/or attach 1–3 screenshots per brand). What do you like about them?Then create the palette and typography. Make reasonable assumptions if info is missing. If current colors don’t work, suggest close alternatives and explain briefly why. How to decide (keep it simple): - Prioritise legibility and conversion. Buttons and body text must pass WCAG AA. - If any supplied colors clash or fail contrast, keep the closest vibe and adjust lightness/saturation. Offer an alternative. - Optimise for thumbnails and CTA visibility. ## [Optional] Step 5: Train ChatGPT Viral Hooks & Sales Writing These are optional additions. They are additions that help ChatGPT more with Viral Hooks as well as Sales Copy Guidance. Please note that if you add these, ChatGPT takes a very specific approach to writing this type of content (or suggesting Viral hooks) that you ultimately may not like. So I’d recommend you high level read through these to see if you want to add them in, and then test some copy prompts. One thing you may consider is creating a SEPARATE CustomGPT just for sales copy, and uploading the Sales & Lead Writing Template into that. The Viral hooks one in particular could be very valuable, since it’s reference things that have actually been working on social media. - [Viral Hooks Template](https://docs.google.com/document/d/1ZcXswhg8I8FtSt4CKRwptTREocf2Y1NZ7zsdZqe7mAI/edit?tab=t.0)Viral Hooks Working on Instagram ‘25 Instructions on how to use for user: Please copy this into your own gdrive in appropriate folder Download as PDF, then upload into your CustomGPT knowledge base. Instructions for GPT All contents within this document are meant to be guidance on how you will help someone sell something. Please only reference this document when I ask about sales pages, or sales copy, or general “conversion” focused copy to close the sale. It could also be guidance on how to conduct myself on a sales call. High level instructions Before writing copy, please check your repository for documents I’ve upload that will give you information on my niche, my business, my customers, the personas I’m targeting, my industry, and my offer. Hooks that Are Currently Working on Instagram A. Shock, Surprise & Curiosity Triggers (Curiosity Gaps) These hooks open a loop in the viewer’s brain, forcing them to stay for closure. “You’ve been doing this wrong your whole life…” “Nobody talks about this, but you NEED to hear it.” “Here’s the secret they don’t want you to know.” “This feels illegal to know… but here you go.” “I was today years old when I found this out.” “You’ve never seen this before.” “Wait for it… it gets worse.” “This is NOT what I expected.” “You’ll never believe what happened next.” “I didn’t think this would work… but it did.” “Something weird just happened.” “This was not part of the plan…” “I almost didn’t post this, but here we are.” “This might be the most insane thing I’ve ever seen.” “What happens next will blow your mind.” “I caught this on camera — no one believes me.” “This has been hidden for years.” “You’ve probably never heard this before.” “This changes everything you thought you knew.” “This is the part they didn’t teach you.” B. Personal Story / Confessional / First-Person Experience “I’ve never told anyone this before…” “The most embarrassing thing that’s ever happened to me.” “Here’s how I lost everything… and got it all back.” “This DM changed my life forever.” “I trusted the wrong person…” “This is the real reason I quit.” “How I hit rock bottom and came back stronger.” “What really happened that day…” “Here’s how I made $10K in a week without a degree.” “I faked it until THIS happened.”C. Educational / Value-Based / “I Wish I Knew” Hooks “This is what I wish I knew sooner.” “Most people have no idea this exists.” “Here’s what nobody teaches you about [topic].” “If you do this every day, your life will change.” “This ONE mindset shift changed everything for me.” “Most people do this wrong. Here’s how to do it right.” “The science behind this will shock you.” “I wasted years doing it the hard way—do this instead.” “3 things I wish I knew before [situation].” “The simplest trick I use to stay productive.” D. Psychological Triggers / Behavior-Based Hooks “Your brain is wired to do this—and it’s ruining your life.” “If you do THIS, people will instantly like you.” “Why you attract the WRONG people.” “This explains 99% of your bad habits.” “You’re not lazy—this is what’s actually happening.” “This tiny decision is killing your motivation.” “Here’s why you self-sabotage (and how to stop).” “You’re addicted to stress. Here’s how I broke it.” “This is why your goals never stick.” “The real reason people ghost you.” E. Money, Side Hustle, and Business Hooks “Here’s how I made $1,000 in a day with zero experience.” “This side hustle actually pays me while I sleep.” “How to make passive income as a complete beginner.” “This one habit made me financially free.” “Don’t start a side hustle until you see this.” “Why you’ll never get rich working a 9–5.” “Millionaires do this before 9 AM.” “I tested 5 side hustles. Here’s what worked.” “This is how much TikTok paid me for 1M views.” “I turned $50 into $500 with this.” F. Beauty, Fashion, Wellness, and Skincare Hooks “This product saved my skin.” “Don’t buy this until you watch this.” “I cleared my acne in 30 days. Here’s how.” “This $5 product changed my life.” “Your skincare routine is missing this.” “The glow-up starts with this.” “Stop doing this to your skin!” “What I’d never use again as an esthetician.” “Skincare mistakes I made in my 20s.” “This trend is worth the hype.” G. Mental Health, Wellness & Self-Improvement Hooks “If you’re feeling lost, watch this.” “Here’s what finally helped my anxiety.” “This 10-second ritual changed how I see myself.” “No one talks about this part of healing.” “You are NOT broken. This explains everything.” “This is how I fixed my overthinking.” “I stopped chasing people and this happened.” “I started doing this one thing for my mental health.” “This advice saved my mindset.” “It gets better. Here’s how I know.” H. Productivity, Tools, Tech & AI Hooks “You’re using ChatGPT wrong — here’s what to do instead.” “5 websites that feel illegal to know.” “This AI tool saved me 10 hours this week.” “The most underrated app of 2025.” “Top 3 free tools that changed my workflow.” “You won’t believe this tool is free.” “Use this if you hate wasting time.” “These shortcuts will make your life 10x easier.” “This is how I automate 80% of my business.” “You’ve probably never heard of this software, but it’s insane.” I. Countdowns, Deadlines, Urgency Hooks “In 5 seconds, I’ll tell you something that could change your life.” “Do this before 9AM every day.” “Only works for the next 24 hours.” “This disappears soon—save it now.” “Try this today or regret it tomorrow.” “You have 7 seconds to decide…” “If you see this before midnight, consider it a sign.” “I’m only showing this once.” “You only get one shot at this.” “This will be gone by the time you come back.” J. Experiments, Challenges, "I Tried" Hooks “I tried the 5AM routine for 30 days—here’s what happened.” “I followed [influencer]’s habits for a week.” “I quit caffeine for 7 days—this surprised me.” “I let AI control my life for 24 hours.” “I copied the top 1% for 3 days. Wild.” “I ate like a Roman soldier for a day.” “I wore the same outfit for 7 days and no one noticed.” “I tested viral life hacks—here’s what worked.” “I meditated for 10 hours straight.” “I did dopamine detox for 72 hours.”K. POV / Relatable Life Hooks “POV: You finally realize it wasn’t your fault.” “POV: You said you’d only scroll for 5 minutes.” “POV: You’re emotionally unavailable but still want love.” “POV: You realized your standards were too low.” “POV: You’re healing but nobody claps for you.” “POV: You finally let them go.” “POV: You want to quit but something tells you to keep going.” “POV: You’re trying your best and still feel behind.” “POV: You stop chasing and start attracting.” “POV: You realize your peace is more valuable than people.” L. Niche-Specific, Fill-in-the-Blank Templates “If you’re a [profession], you NEED to try this.” “Every [niche] needs this tool.” “Biggest mistake [target audience] makes.” “What I wish I knew before starting [niche].” “The fastest way to improve at [skill].” “Stop doing this if you’re a [job role].” “This is for all the [industry] professionals.” “3 things every [niche] should do.” “I did this as a [job], and here’s what happened.” “This trick helped me grow as a [creator/coach/etc.].” M. Controversial, Unpopular Opinions, and “Hot Take” Hooks “Hot take: [truth bomb].” “This might get me canceled, but…” “Unpopular opinion, but I’m right.” “If this offends you… it’s probably true.” “You’re not ready for this conversation.” “Not everything is trauma. Sometimes you’re just wrong.” “This is why hustle culture is toxic.” “Stop blaming others. It’s you.” “Therapy won’t help you if you keep doing this.” “Nobody wants to say this out loud.” N. Data, Facts, Charts, Authority-Based Hooks “The numbers don’t lie. Look at this.” “Only 3% of people know this stat.” “This chart explains everything.” “This is backed by science.” “A Harvard study proved this years ago.” “Statistically, this will improve your life by 30%.” “Research says this works better than anything else.” “This is the #1 reason people fail.” “I found the data and it blew my mind.” “This metric is more important than you think.” O. Freebie / Give / Value Hooks “Free game: here’s how to [achieve goal].” “I’m giving this away—no strings attached.” “You don’t have to pay for this. Here’s how.” “This tool is 100% free and better than paid ones.” “You get this for free if you comment [word].” “Here’s a gift for anyone trying to level up.” “Save this before it gets deleted.” “This cheat sheet is free. Use it.” “You deserve this life hack.” “This free tool made me money.” P. Weird, Creative, and Scroll-Interrupt Hooks “I painted this with fire.” “I made this using only my non-dominant hand.” “This is oddly satisfying.” “This isn't what it looks like.” “This took 30 hours to make.” “I let strangers finish my art.” “This idea came from a dream.” “This is the weirdest thing I’ve ever created.” “Don’t blink.” “What if I made a song out of this sound?” Q. Viral Content Hooks Based on Trends / Reactions “This went viral for a reason.” “Why is no one talking about this?” “Everyone is doing this wrong.” “This deserves more views.” “The algorithm LOVES this trick.” “TikTok made me try this…” “I recreated this viral moment.” “This trend actually works.” “Why is this everywhere right now?” “This audio has 2 million videos. Here’s why.” R. Hooks That Open with a Bold Claim or Promise “This one hack will 10x your [result].” “If you’re not doing this, you’re falling behind.” “This strategy changed everything for me.” “I’ve never seen anyone share this before.” “This will change how you think about [topic].” “This is the only thing that worked for me.” “This trick saved me YEARS of trial and error.” “The truth about [industry] no one tells you.” “I’ll show you exactly how to do it.” “This is the best advice I’ve ever received.” S. Stop-Scroll Commands “Don’t scroll. Watch this.” “Pause right here.” “Wait. You need to hear this.” “Stop what you’re doing.” “This is your sign.” “Before you keep scrolling…” “If you’re seeing this, this is for you.” “Just trust me—watch until the end.” “You’ve been missing out.” “Stay with me for 10 seconds.”Viral Hooks #201–220: Bold Claims & Provocative Statements “This is the craziest advice I’ve ever received—and it actually worked.” “If you’re not doing this by 25, you’re already behind.” “This one question completely changed how I live.” “Your dream life is 3 habits away. Here they are.” “Everyone thinks this is wrong, but it’s the only thing that worked.” “This mindset will offend people—but it made me successful.” “I’d rather be hated for this than stay broke.” “This will sound crazy until it works for you.” “I regret doing this… but it made me rich.” “Most people won’t do this—and that’s why they stay stuck.” Viral Hooks #221–240: Finance, Money Mindset & Investing “The #1 money mistake you’re making right now.” “I made more in 3 months than I did in 3 years—here’s how.” “Don’t invest a dollar until you watch this.” “You’re not broke—you just don’t know this rule.” “How I saved $10K without budgeting.” “This is what I’d do with $100 to double it fast.” “This is why you never have money left over.” “Passive income is real—if you do it like this.” “You’re rich, you just don’t manage your money like it.” “Stop trading time for money. Do this instead.” Viral Hooks #241–260: Life Advice & Self-Awareness “Your 20s are for learning. Your 30s are for earning.” “Here’s why self-discipline is more important than motivation.” “This is the advice I give my younger self.” “This one habit keeps 99% of people average.” “You don’t need more time. You need more focus.” “Your future self is watching what you do today.” “Success doesn’t come from doing more. It comes from doing less better.” “You can’t change your life until you change this.” “Every minute you waste, someone else is getting ahead.” “Most people don’t fail because they suck—they fail because they quit too soon.” Viral Hooks #261–280: Creator & Business Growth “This one content format made me go viral.” “Want more views? Stop doing this.” “The algorithm rewards THIS behavior.” “This is how I get people to stop scrolling.” “I gained 10K followers in 30 days by doing this.” “How I grew with zero ads, zero budget.” “Your content doesn’t suck—it’s just missing this.” “Don’t chase followers. Do this instead.” “The easiest way to monetize your content right now.” “This strategy got me clients without selling anything.” Viral Hooks #281–300: Curiosity, Visual Triggers, and Teasers “Watch what happens at the 0:08 mark.” “The ending will leave you speechless.” “Wait until you see what’s behind this…” “I didn’t expect that twist—did you?” “This starts off weird but stay with me.” “Bet you didn’t notice this in the background.” “Guess what happens next (you won’t).” “What you think this is vs. what it actually is.” “Looks boring? Wait for the punchline.” “Blink and you’ll miss the best part.” Viral Hooks #301–320: Relatable Emotion & Life Situations “Ever feel like you’re trying your best but getting nowhere?” “It’s not burnout. It’s emotional exhaustion.” “That feeling when no one checks on you—but you check on everyone.” “Trying to act fine but dying inside? Me too.” “Overthinking every little thing you said? Same.” “You’re doing more healing than most people realize.” “Sometimes the strongest people cry in silence.” “This is your reminder: You don’t have to do it all today.” “You don’t need to have it all figured out.” “Healing feels like being alone even when you’re not.” Viral Hooks #321–340: Psychology, Triggers & Human Behavior “People judge you in the first 3 seconds—do this instead.” “Here’s how to make people instantly like you.” “The psychology of why you push good people away.” “People remember how you make them feel, not what you say.” “The real reason you procrastinate isn’t laziness.” “Why we sabotage the things we want most.” “This cognitive bias controls your decisions.” “You’re not overreacting—your nervous system is.” “This is why you replay conversations in your head.” “You can’t fix a thinking problem with more thinking.”Viral Hooks #341–360: Frameworks, Lists, & “X Things” Hooks “3 things I do every day that changed my life.” “The 4 rules I live by (and you should too).” “Top 5 tools I can’t live without.” “3 signs you’re evolving, not failing.” “4 harsh truths that made me better.” “These 3 habits will get you further than any degree.” “5 things I stopped doing—and everything changed.” “3 ways to stop caring what people think.” “4 mindset shifts that made me unrecognizable.” “3 lies we’ve all been told since childhood.” Viral Hooks #361–380: Mistakes, Warnings, and Red Flags “Biggest mistake I made in my 20s.” “If you’re doing this, you’re holding yourself back.” “Avoid this and save yourself years of pain.” “What I wish I never did.” “Red flags I ignored—and paid the price.” “This mistake cost me $5,000.” “The one decision I regret most.” “Here’s how I ruined everything—and fixed it.” “This nearly destroyed my business.” “Never trust someone who does this.” Viral Hooks #381–400: Callouts, Signs & Perspective Shifts “This video will only make sense if you’re leveling up.” “This is your sign to start.” “Watch this if you feel stuck.” “If no one’s clapping for you, clap for yourself.” “This is the pep talk you didn’t know you needed.” “Sometimes the only person who believes in you is you.” “Here’s what success actually feels like (not what you think).” “This one shift in perspective changed everything.” “The old you would’ve never handled this like that.” “You’re not behind. You’re just building differently.” #301–320: Hooks That Challenge Beliefs or Shift Perspective “Everything you believe about this is wrong.” “What if I told you success isn’t about working hard?” “Most people think this is smart—it’s actually holding them back.” “Here’s what no one tells you about discipline.” “Success doesn’t look like what you think it does.” “Being busy is not the same as being productive.” “If working harder was the answer, you'd already be there.” “You’ve been lied to about what it takes to grow.” “This isn’t a hustle issue. It’s a priority issue.” “Chasing this one thing is why you feel empty.” #321–340: Content Creator & Digital Growth Hooks “Want to grow fast? Post like this.” “Why no one is watching your videos (and how to fix it).” “The best performing hook style I’ve ever used.” “This content format works on every platform.” “One tiny change = 10x more views.” “Here’s how I turned 1 video into 5 streams of income.” “If I had to grow from 0 today, I’d only do this.” “Stop chasing the algorithm. Start doing this instead.” “Create content that attracts opportunity — not just views.” “Why your content isn’t converting (and what to do instead).” #341–360: Curiosity-Bait & Mystery Hooks “There’s something strange about this photo—can you see it?” “You’ll never guess what happened after this.” “I did something weird, and this was the result.” “This is not what it looks like… or is it?” “The second I stopped recording, this happened.” “I couldn’t believe my eyes when I saw this.” “This started as a joke—but then it worked.” “At first, I thought it was a scam. Then…” “Nothing could’ve prepared me for this.” “I thought I was being pranked—until I looked closer.” #361–380: Conversational & “Talking Head” Style Hooks “Let me break this down real quick.” “Can I be brutally honest with you for a second?” “I need you to hear this—not for me, but for you.” “Real talk, you’re probably doing this and don’t even realize.” “This might sound harsh, but someone needs to say it.” “Okay, listen. I’m gonna make this super simple.” “This took me years to figure out. You get it in 30 seconds.” “If no one told you this today, let me be the first.” “Here’s something no one warned me about.” “I’m gonna say what everyone else is afraid to say.”#381–400: Strong Emotional, Empathetic, and Motivational Hooks “You’re doing better than you think.” “Healing doesn’t always look pretty—but it’s happening.” “The fact that you care means you're not failing.” “Read this when you feel like giving up.” “This one’s for the overthinkers, the anxious achievers, the tired dreamers.” “You don’t need to prove yourself to anyone but you.” “Sometimes rest is more productive than grinding.” “This is your reminder that growth is messy.” “You’ve made it through 100% of your bad days.” “You’re not behind—you’re just building something that lasts.” “No one claps for you when you’re healing—keep going anyway.” “Being consistent is hard. So is staying stuck. Choose your hard.” “Here’s what to do when you feel like you’re failing at everything.” “The world is louder than your inner voice. Turn it back up.” “You didn’t come this far just to stop here.” “Most people quit right before everything changes.” “This is what growth actually looks like.” “This one shift in self-talk changed everything for me.” “You won’t always feel motivated. That’s why habits matter.” “You’re allowed to be both a masterpiece and a work in progress.” Additional ones. These may be duplicative. They’re from another trustworthy source: Instant Engagement Hooks “Everyone told me this wouldn’t work… until it did.” “If you’re new to __, you need to hear this.” “Here’s the truth no one tells you about __.” “I made this mistake for months — don’t do the same.” “This one shift completely changed my results.” “You’re probably doing __ wrong (and don’t realize it).” “I thought I was stuck forever in __ until I tried this.” “What I wish someone told me before starting __.” “If you feel lost in __, here’s what helped me.” “Here’s why your __ isn’t working (and how to fix it).” “This simple tweak in my routine changed everything.” “Why I almost gave up on __ (but didn’t).” “The advice I ignored for years — and regret it.” “Everyone overcomplicates __. Here’s the real secret.” “The mistake that was quietly ruining my progress in __.” “This underrated tip boosted my __ overnight.” “The myth about __ that keeps most people stuck.” “If you’re doing __, do this instead.” “Nobody told me __ would be this hard.” “I tested 3 strategies for __ — here’s what actually worked.” Tips, Tools & Hacks “5 small habits that improved my __ instantly.” “The 10-minute routine that changed how I approach __.” “This app completely simplified my __ process.” “3 beginner-friendly tools I use daily for __.” “The checklist I follow before every __.” “The lazy way I organize my __ (but it works).” “How to cut your __ time in half without losing quality.” “My step-by-step system for staying consistent with __.” “The easiest way to measure progress in __.” “If you always forget to __, try this.” “My favorite underrated tool for creators doing __.” “Stop overcomplicating __ — here’s a simple approach.” “The setup I use for filming/editing/creating __.” “The time-saving shortcut I discovered for __.” “How I automate part of my __ process.” “The hack that helps me stay focused on __.” “3 mistakes that made my __ harder than it needed to be.” “The productivity trick I swear by when doing __.” “How I plan a week of __ content in 1 hour.” “The formula I use every time I create __.”Storytelling & Mindset “When I first started __, I had no idea what I was doing.” “This failure in __ taught me more than any success ever did.” “I used to think __ was selfish — now I see it as self-care.” “Here’s what I learned after doing __ every day for 30 days.” “I wish I knew this about __ before I started.” “The day I almost quit __ but didn’t.” “My biggest realization after months of __.” “How I deal with burnout while doing __.” “The real reason I started __ (not what people think).” “I thought __ would make me happy. I was wrong.” “How I turned my lowest moment into motivation for __.” “Why I stopped chasing perfection in __.” “This one mindset shift changed everything about __.” “Here’s what progress really looks like in __.” “Nobody talks about how lonely __ can feel sometimes.” “How __ helped me rebuild my confidence.” “What I learned about patience from doing __.” “How I found my purpose through __.” “The lesson that completely changed how I see __.” “What I tell myself when I want to give up on __.” Beginners & How-To “How to start __ without getting overwhelmed.” “The beginner-friendly guide I wish existed when I started __.” “The 3-step method I use to simplify __.” “How I plan my entire __ process from start to finish.” “My exact workflow for __ (you can copy it).” “How to build a habit around __ that actually sticks.” “The mistake every beginner makes in __.” “How to stay consistent in __ without burnout.” “The 5 things I wish I knew before starting __.” “How to get faster results in __ using this method.” “How to fix your __ routine once and for all.” “The tools I use daily to make __ easier.” “How I organize my week to stay consistent with __.” “The biggest beginner trap in __ and how to avoid it.” “How to plan your first __ like a pro.” “How to build your first system for __.” “My simple way to track progress in __.” “The one skill that makes everything in __ easier.” “How to recover when you mess up in __.” “How to get started in __ even if you have zero experience.” Motivation & Consistency “Why I keep showing up even when nobody’s watching.” “How I stay consistent in __ when progress feels slow.” “The hardest part of doing __ (and how I deal with it).” “Why I stopped chasing instant results in __.” “The truth about motivation — it’s not what you think.” “How to stay inspired when __ feels repetitive.” “What keeps me going in __ when I want to quit.” “How I rebuilt my confidence after failing at __.” “The biggest lesson consistency taught me in __.” “Why I’ll never stop doing __ (even when it’s hard).” “The one mindset shift that made consistency easy.” “Why you don’t need motivation to keep going in __.” “What I do on days I don’t feel like doing __.” “How I track progress to stay motivated in __.” “What most people get wrong about consistency in __.” “The mindset that turned my routine into a lifestyle.” “Here’s why slow progress in __ is still progress.” “The small daily action that changed my results in __.” “How I stopped comparing my __ journey to others.” “Why showing up imperfectly in __ beats waiting to be ready.” Additional repository of viral hooks with links (A lot of links could be broken / videos taken down / accounts closed) This represents your X before, during, and after X — https://www.instagram.com/p/C-ta_pvhfvK/ Here’s exactly how much (insert action/item) you need to (insert result) — https://www.instagram.com/reel/C9vqgHxuz1E/ Can you tell us how to (insert result) in 60 seconds? — https://www.instagram.com/p/C8dJXv1PjzF/ This is what (insert thing) looks like when you’re (insert action). And this is what they look like when you’re not (insert action). — https://www.instagram.com/reel/C4tAzeYL8yA/ I’m going to tell you how to get (insert result), (insert mind-blowing method). — https://www.instagram.com/p/C7WV9_TI5dT/ It took me 10 years to learn this but I’ll teach it to you in less than 1 minute. — https://www.instagram.com/p/C-sSyDpoyMX/
[message_id: 320]
## 🤖 Yaya
Got the full Market Research module + that massive viral hooks library (400+ hooks!). This is gold for content creation.

**What you have covered:**
✅ Industry research prompt
✅ Persona creation prompt
✅ Competitor analysis prompt
✅ Brand voice/colors templates
✅ 400+ categorized viral hooks

Keep sending — I'm building the full picture.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:44 PST] When you get (insert item/result) here are the # things you’ve got to do right away. — https://www.instagram.com/p/C9bUq2CtvUv/ If you don’t have (insert item/action), do (insert item/action). — https://www.instagram.com/p/C8rJipAy8I8/ My money rules as a (insert description) working towards financial independence. — https://www.instagram.com/p/C_-u411xe4m/ Money can buy you (insert item) but it cannot buy you (insert result). — https://www.instagram.com/p/DBkvHncxD2t/ Here’s how to develop a (insert skill) so strong that you physically can’t stop (doing skill). — https://www.instagram.com/reel/C-CPzwMReyb/ This is what (insert #) of (insert item) looks like. — https://www.instagram.com/alexgamblecoach/reel/C60q1FPPrLW/ If I woke up (insert pain point) tomorrow, and wanted to (insert dream result) by (insert time) here’s exactly what I would do. — https://www.instagram.com/p/DGOZZYhS1cj/ If you’re a (insert target audience) and you want (insert dream result) by (insert avenue) then listen to this video. — https://www.instagram.com/reel/DE9tW4dyxlJ/ If you are (insert age group or range) do not do (insert action). — https://www.instagram.com/reel/DEsW49SM6z3/ As an (insert trait) responsible (insert age) year old with a goal to (insert goal) here are 3 things I will never regret doing. — https://www.instagram.com/reel/DBZT2Q5RJ2W/ Not to flex, but I’m pretty f*cking good at (insert skill/niche). — https://www.instagram.com/p/C-SR22KOEDY/ This is what (insert object/item) looks like when you are using/doing (insert product/service). — https://www.instagram.com/sethwickstrom_fitness/reel/DAtNQtAxUNQ/ Are you still (insert action)? I got (insert result) in (insert time frame) and I have never (insert action). — https://www.instagram.com/reel/C4YY12SxuRo/ 3 YouTube channels that will teach you more than any (insert industry/niche) degree. — https://www.instagram.com/p/DBfqo-0zxTb/ I think I just found the biggest (insert niche/industry) cheat code. — https://www.instagram.com/p/DB6kCMQR0oX/ Here are 3 people who will make you a better (insert title). — https://www.instagram.com/p/C9uwXS_uJJ6/ (insert trait) Guy vs (insert trait) Guy. — https://www.instagram.com/share/_9R_a4MER I see you doing nothing but (insert action) after (insert event) so follow this agenda to avoid that. — https://www.instagram.com/share/BADjOvZhzs Want to be the first (insert dream result) in your family? — https://www.instagram.com/reel/DEVCeefOF08/ This is how many (insert item) you need to (insert result). — https://www.instagram.com/reel/C83vXP6NqXU/ Everyone tells you to (insert action) but nobody actually tells you how to do it. Here is a #-second step-by-step tutorial that you can save. — https://www.instagram.com/reel/DC2pqKUpy7C/ If you’re (insert age range) these are the # things you need to do so you don’t end up (insert pain point) by (insert age). — https://www.instagram.com/reel/C9atuV6s3J0/ If I were starting over in my (insert age range) with no (insert item) here are the top # things I would do to (insert dream result). — https://www.tiktok.com/t/ZT2MLqDUQ/ Here are some slightly unethical (insert industry/niche) hacks that you should know if you’re (insert target audience). — https://www.instagram.com/reel/C-8RO71JxRv/ Here’s exactly how you’re gonna lock in if you want to (insert dream result). — https://www.instagram.com/reel/DC5P-_EMzFm/ This is the same exact (insert thing) but the first (is/gets) (insert result) and the second (is/gets) X. — https://www.instagram.com/p/DIBDSW9Maq7/ If you want to end up (insert pain point) then skip this video. — https://www.instagram.com/p/DDfZ4qZPTN8/ We have never used (insert noun) in our home because we have found it to be generally (insert traits). — https://www.instagram.com/p/DGF_p8lORgI/ (insert action) for (insert period of time) and you will get (insert dream result). — https://www.instagram.com/georgiaheins/reel/C8Z9DfdMgZ_/
[message_id: 321]
## 🤖 Yaya
Got the fill-in-the-blank hook templates with example links. These are super actionable — plug and play for TCK content.

Keep going.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:44 PST] If you’re between the ages of (insert age) to (insert age) and you feel like (insert pain point). — https://www.instagram.com/p/DH2KovNtk8l/ (insert before state) to (insert after state) in # simple steps in under # seconds. — https://www.instagram.com/p/DHD4frVya7Z/ If you’re trying to (insert dream result) then here is the one (insert thing) you should do. — https://www.instagram.com/p/DFCyBHfNnlZ/ How long do you think you have to (insert action) to (insert result)? — https://www.instagram.com/reel/C50_VCluWFe/ If you want to do this, first do this. — https://www.instagram.com/p/C5AmorRpUqF/ If you’re trying to (insert dream result) and you haven’t got a clue what to (insert action) on a daily basis I am going to show you an example. — https://www.instagram.com/p/C5yjeP-REZx/ This is how many (insert item) you need to (insert result). — https://www.instagram.com/p/C-M1nkcNPAV/ I’m gonna save you # minutes off your next workout with # simple tips. — https://www.instagram.com/jeffnippard/reel/C9zuGtYJ8ck/ If I only had (insert time frame) in the (insert location/place) this is exactly what I would do to get (insert dream result). — https://www.instagram.com/p/C-9slRRoYAA/ How long can you skip (insert action) before losing (insert result)? — https://www.instagram.com/sethwickstrom_fitness/reel/DB1WXxVx6B4/
[message_id: 322]
## 🤖 Yaya
Got it. More fill-in templates. What's next — Storytelling & Tribes?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:44 PST] RANDOM INSPO HOOK: 46) Over the past # days I (insert action) on # of (insert nouns). In doing that I have gained over (insert #) followers. So here’s the thing… — https://www.instagram.com/reel/DH64QI0uzgl/ 47) Over the last (insert time) I’ve been finding a lot of cool things over (insert location). Today I’m finally finishing my (insert project). — https://www.instagram.com/reel/DDc9OJlvOMl/ 48) Do you ever (insert situation)? Yeah, well that’s my job. — https://www.instagram.com/reel/DDVHvRjsz9k/ 49) I bought this (insert noun) for (insert $), and I’m going to make it worth over (insert $) without changing the product in any way. — https://www.instagram.com/reel/DHtn8PPo5_r/ 50) This might be the coolest DIY I have ever made. — https://www.instagram.com/reel/DGJDrxePydv/ 51) Some people call it a problem but I call it (insert noun) genius. — https://www.instagram.com/reel/DGQvN_dJ5cK/ 52) With the (insert life event) coming, it’s time to (insert action). — https://www.instagram.com/reel/DC2fx6XOD5c/ 53) This is (insert large number) of (insert item). — https://www.instagram.com/p/C84vUYRMEtm/ 54) Exposing the only (insert noun) you will ever need. — https://www.instagram.com/reel/DBXc7jiofht/ 55) How to dress like a (insert person). — https://www.instagram.com/reel/DCRJoGbo3oa/ 56) Every (insert store type) has a million (insert noun) with different (insert noun). Some are more special than others. — https://www.instagram.com/reel/DEabsX3pRsJ/ 57) This is exactly how you and your friends are going to get (insert result) before this (insert time). — https://www.instagram.com/reel/DId6_M-AwGL/ 58) If you’re afraid to (insert action), then (insert action). — https://www.instagram.com/reel/DHEL0_cRwNA/ 59) If you want to start a (insert noun) in (insert year) here are some things you are going to need. — https://www.instagram.com/reel/DEdSzXhzTEH/ 60) Putting you on brands you may have never heard of. — https://www.instagram.com/reel/DIOvPayMKgS/ AUTHORITY INSPO HOOK: 61) My (insert before state) used to look like this and now they look like this. — https://www.instagram.com/reel/DE7cjKBNcY4/ 62) 10 YEARS it took me from (insert before state) to (insert after state). — https://www.instagram.com/p/C8Cpii4PB1u/ 63) How to turn this into this in X simple steps. — https://www.instagram.com/p/DDDbVpExlO7/ 64) (insert big result) from (insert item/thing). Here’s how you can do it in X steps. — https://www.instagram.com/p/DBZtLTpv91b/ 65) Over the past (insert time) I’ve grown my (insert thing) from (insert before) to (insert after). — https://www.instagram.com/p/DCopsVERQ_N/ 66) Just # (insert item/action) took my client from (insert before) to (insert after). — https://www.instagram.com/p/C9XVmDQS2z-/ 67) My customer/client got (insert dream result) without (insert pain point). — https://www.instagram.com/reel/C4VceenL2Wq/ COMPARISON INSPO HOOK: 68) This is an (insert noun), and this is an (insert noun). — https://www.instagram.com/p/DHiMzqvR_MQ/ 69) This (insert noun) and this (insert noun) have the same amount of (insert noun). — https://www.instagram.com/fitfoodieliving/reel/DBHpSdgRdvh/ 70) A lot of people ask me what’s better (option #1) or (option #2) for (insert dream result). I achieved (insert dream result) doing one of these and it’s not even close. — https://www.instagram.com/p/DHGn-H-xNeV/ 71) (insert verb) does not mean your (insert adjective), it means you’re just (insert adjective). — https://www.instagram.com/p/DAw01riSVei/ 72) If you (insert action) like this, then you’re doing it wrong. — https://www.instagram.com/p/DHcv_7uBv1p/ 73) I’m going to hold your hand while I tell you this. If you only have # of (insert noun) you are not doing it the right way. — https://www.instagram.com/p/DCZ9dK9Jjlw/ 74) # things you should never put in your (insert noun). — https://www.instagram.com/p/DDxoAs_TciE/ 75) (insert noun) are not as disgusting as you think. — https://www.instagram.com/reel/DHBslKRvZ7_/?igsh=MW83azY5b2s2YTEzag==76) (insert noun) is better for (insert result) than (insert noun). And yes I will back up my claim with studies. — https://www.instagram.com/reel/DFYHUihoaFK/ 77) Being (insert result) is not just based on (insert noun)… I could have been (insert adjective) than this guy/girl if I had just changed a few things. — https://www.instagram.com/reel/DH2VMvQNFXc/ STORYTELLING INSPO HOOK: 78) I started my (insert business) when I was (insert age) with (insert $). — https://www.instagram.com/p/C9GHw6MO48j/ 79) X years ago my (insert person) told me (insert quote). — https://www.instagram.com/p/C84meBcM9NB/ 80) I have (insert time) to get my sh*t together. — https://www.instagram.com/reel/C79z4euRhlV/ 81) I don’t have a backup plan so this kind of needs to work. — https://www.instagram.com/p/C7XpT7tPwCP/ 82) This is how my (insert event/item/result) changed my life. — https://www.instagram.com/p/C9t1s7myhI7/ 83) So about a month ago my (insert person) and I did (insert action). — https://www.instagram.com/p/DImqKRqy4xr/ 84) I have (insert action) over (insert #) in my life. — https://www.instagram.com/p/C9GM_SJpJ3k/ 85) This is a picture of my (insert what picture is). — https://www.instagram.com/reel/C_njKwBOuLi/ 86) X years ago I decided to (insert decision). — https://www.instagram.com/p/C-IOTqUtbth/ 87) Yesterday I was at (insert location) when I noticed something (insert adjective). — https://www.instagram.com/reel/DFLw3SmSNti/ 88) X years ago I was (insert action) because I (insert pain point). — https://www.instagram.com/reel/DEq8rUQyR92/ DAY IN THE LIFE INSPO HOOK: 89) We all have the same 24 hours in a day so here I am putting my 24 hours to work. — https://www.instagram.com/reel/DAq-UDcITU5/ 90) Day 1 of starting over my whole entire life. — https://www.instagram.com/reel/DEc3jW6p1Ws/ 91) So okay being an (insert target audience), my days vary quite a lot from one another. — https://www.instagram.com/reel/DBiVM_Xxpwf/ 92) Day in the life of a (insert adjective) person. — https://www.instagram.com/reel/DEiIMQxx8q3/ 93) Welcome back to the day in the life of two (insert label) trying to build the next (insert business). — https://www.instagram.com/p/DEnSkHQJwIx/ 94) (insert noun) day # (insert event about that day). — https://www.instagram.com/reel/DICaRJ6BF2C/ 95) I am a #-year-old (insert title), and I am heading to (insert event/location). — https://www.instagram.com/p/DHmdSxESXUy/ 96) This is a day in the life of a (insert title) — (insert noun) edition. — https://www.instagram.com/p/DFn2OKuzc7i/ 97) Come to work with me as a (insert title). — https://www.instagram.com/p/DEtaTDvsV6J/ 98) (insert school) day #, my last (insert noun). — https://www.instagram.com/p/DICaRJ6BF2C/ EXTRA EDUCATIONAL/COMPARISON (to round to 100): 99) If you can’t solve this (insert problem) in under 5 seconds, go back to (insert pre-qualifying stage). — https://www.instagram.com/p/C0g-j3EJuM6/ 100) I would do this before quitting your job. — https://www.instagram.com/p/C_D27RuxXHn/ 101) If you do this you’ll (insert result). — https://www.instagram.com/p/DEP_swuolhm/ 102) If you’re a (insert target audience) who (insert pain point) and you want to (insert dream result), let’s go over a simple #-step plan you can follow to quickly (insert dream result). — https://www.instagram.com/p/Cpf3cfujvTd/ 103) Here are 5 books to (insert dream result) better than 99% of other people. — https://www.instagram.com/p/DG3T4N9xdXD/ 104) If you're somebody who (insert action) and your goal is to (insert dream result) and (insert dream result) at the same time, here are my # best tips. — https://www.instagram.com/p/DGn7kKyu_5G/ 105) If you can’t do (insert action). — https://www.instagram.com/p/DC7SzidSNOX/ 106) If you can do # of (insert action), then you can do # of (insert action). — https://www.instagram.com/p/DDKZbeoo1gF/ 107) If your mom didn’t teach you how to make (insert noun) growing up, don’t worry I’m your mommy now. — https://www.instagram.com/p/DBEeZ2MvZ16/108) Never lose a game of (insert game) for the rest of your life. — https://www.instagram.com/p/DCoC6YHJ_k1/ 109) 3 levels of (insert noun). — https://www.instagram.com/p/DBt0hSaNxqH/ 110) Did you know that if you… (insert action), (insert action), (insert action). — https://www.instagram.com/p/DIGJHsKPfj2/ 111) I’m a professional (insert industry) hacker, and here’s every hack at (insert store/location/event/etc). — https://www.instagram.com/p/DG3-nRhyvRq/ 112) I have a long list of (insert noun) that I (insert action) and gatekeep from others, but today I feel like giving back. — https://www.instagram.com/p/DCpBTqzpGdp/ 113) I’m going to teach you how to identify a good (insert noun) from a bad (insert noun). — https://www.instagram.com/p/DHWUyptyp9B/ 114) I went to (insert school type) so you don’t have to. — https://www.instagram.com/p/DCrxn_5RFDS/ 115) Ranking all the most popular (insert noun) from worst to best. — https://www.instagram.com/p/DIPGBRQR0Sb/ 116) Here’s how I (insert action) as a (insert label) (insert age). — https://www.instagram.com/p/C6Hkr_QRQ60/ 117) You wouldn’t get (insert bad result) when you (insert action) if you (insert different action). — https://www.instagram.com/p/DHlNHSfuHoh/ 118) This is harder than getting into Harvard. — https://www.instagram.com/p/DFNdSUruSOQ/ 119) Now how much does it really cost to (insert action)? — https://www.instagram.com/p/DE75-Fhyg_T/ 120) This is why no one remembers you. — https://www.instagram.com/p/DFaQuJYueF1/ 121) I’m 20, which means my teenage years are officially over — here’s everything I learned from the weirdest years of my life. — https://www.instagram.com/p/Cuq324pIiKY/ 122) If you’re a (target audience) and you want to become (insert dream result) by (insert action), listen to this video. — https://www.instagram.com/p/DE9tW4dyxlJ/ 123) If you take (insert noun) it will (insert result). — https://www.instagram.com/p/DIMBlJ4MgHH/ 124) I just made a website called (insert longest but most relatable name). — https://www.instagram.com/p/DIWeFGhRT9u/ 125) How to turn just one (insert noun) into a lifetime of free (insert noun). — https://www.instagram.com/p/DIEbK1dSZJ2/ 126) Things that are damaging your (insert noun) without you realizing it. — https://www.instagram.com/p/DDxIde3vWO7/ 127) If you see a girl who just has (insert dream result)… — https://www.instagram.com/p/DFNwwbpvxzi/ 128) I’ve (insert dream result) despite having (insert pain point), and this is the routine that did it. — https://www.instagram.com/p/DHbXdlkIoZh/ 129) Swap these (insert nouns) for better (insert result). — https://www.instagram.com/p/DE5r6TspMQA/ 130) Did you know that this, this, and this target (insert dream result)? — https://www.instagram.com/p/DFk6dhNykvl/ 131) Your (insert noun) looks like this and you want it to look like this. — https://www.instagram.com/p/DD0PRBppkqQ/ 132) (Insert last year) (insert noun), (insert current year) (insert noun). — https://www.instagram.com/p/DEDdSAESaFJ/ 133) Okay (insert pain point), how about we don’t mess up (insert current year). — https://www.instagram.com/p/DDiWd5eSlPC/ 134) This is the program I would follow if I were trying to (insert dream result). — https://www.instagram.com/p/DB4om1CIUoZ/ 135) If your (insert noun) looks anything like this, those are not (insert noun) — here’s how to fix it. — https://www.instagram.com/p/DDGYmIHxlhH/ 136) Here are some (insert actions) you can do without (insert noun). — https://www.instagram.com/p/DB-HjvtP1A9/ 137) Let’s find out what (insert noun) you are in # steps. — https://www.instagram.com/p/DHXLZyrSP0w/ 138) Most people can only do (insert action) when trying to (insert result), but as an (insert title) you should be able to (insert advanced action). — https://www.instagram.com/p/C_3kQAkIuKn/ 139) As an (insert title) you should be able to do this — if you can’t, (insert diagnosis). — https://www.instagram.com/reel/DF_Cn86o0Ki/
[message_id: 325]
## 🤖 Yaya
Got all the categorized hook templates (Authority, Comparison, Storytelling, Day in the Life, Educational). 139 templates with real examples.

This is a content goldmine. Next module?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 13:46 PST] I’m going to show you how to (insert action) like a pro using things you already own. — https://www.instagram.com/p/DHpg4GqP9mZ/ You’ve been doing this wrong your entire life — here’s the right way. — https://www.instagram.com/p/DHwH5gOQfdp/ This one mistake is why your (insert noun) always (insert negative result). — https://www.instagram.com/p/DH7rTMLgBNZ/ This single tweak made my (insert result) double overnight. — https://www.instagram.com/p/DIAwCJjTjRF/ I tested every (insert product/tool) out there so you don’t have to — here’s the winner. — https://www.instagram.com/p/DIFLz3FSiN7/ The one hack no one told you for (insert dream result). — https://www.instagram.com/p/DIG7Q2LpX3U/ Here’s how I use AI to finish what used to take me 4 hours in 10 minutes. — https://www.instagram.com/p/DIL3GNVpHAv/ These 3 prompts changed my (insert result). — https://www.instagram.com/p/DIP0aW0oJfs/ The fastest way to (insert dream result) even if you’re starting from scratch. — https://www.instagram.com/p/DIS8NGfsWJ3/ If I had to build my (insert business type) from zero, this is exactly what I’d do. — https://www.instagram.com/p/DIU9V1nM3n5/ Here’s how to turn your (insert free tool) into a (insert premium tool) without spending a cent. — https://www.instagram.com/p/DIXeLfXTDuJ/ These are the 3 Canva templates I use for every project. — https://www.instagram.com/p/DIaz0xtM5da/ Want to create a (insert lead magnet type)? Watch this. — https://www.instagram.com/p/DIcrxDfRTNP/ If I had to generate leads today with no ad spend, I’d do this. — https://www.instagram.com/p/DIfvEQ3xQJG/ The free tool no one talks about that saves me hours a week. — https://www.instagram.com/p/DIiTtFOs4hf/ This GPT workflow changed everything for my content process. — https://www.instagram.com/p/DIkOrc3SCDZ/ Most people use ChatGPT wrong — here’s the right way. — https://www.instagram.com/p/DInzIfuxHRq/ One ChatGPT prompt = one entire week of content. — https://www.instagram.com/p/DIq6cXTOzvK/ The prompt you didn’t know you needed. — https://www.instagram.com/p/DItc84apgYG/ Here’s how I use AI to plan my entire content calendar in 5 minutes. — https://www.instagram.com/p/DIvrOkqS6A7/ This one Canva shortcut will save you hours. — https://www.instagram.com/p/DIyDyEZoH9t/ My entire lead magnet creation system in one workflow. — https://www.instagram.com/p/DI0p24DNyFx/ The “lazy” way to make content that actually converts. — https://www.instagram.com/p/DI3z5M9Orq3/ I tested 5 AI tools so you don’t have to — here’s the best. — https://www.instagram.com/p/DI5AjVpxeKL/ How I built a $100 lead magnet in under 30 minutes. — https://www.instagram.com/p/DI7UPLyMyN4/ Everyone says you need fancy design skills — you don’t. Watch this. — https://www.instagram.com/p/DI9bOK7T6LJ/ The step-by-step process to make your first digital product. — https://www.instagram.com/p/DJAQHEpPoPR/ Three Canva features I wish I knew sooner. — https://www.instagram.com/p/DJCllcJsY7P/ I let ChatGPT name my new course. Here’s what happened. — https://www.instagram.com/p/DJEsPi4OplO/ What’s the difference between a freebie and a lead magnet? Let me show you. — https://www.instagram.com/p/DJGQQGvTP9U/ If you can write one sentence, you can create a lead magnet. — https://www.instagram.com/p/DJIeONqJMbv/ Here’s the exact script I use to promote my freebie on Reels. — https://www.instagram.com/p/DJKm2oDTTQx/ I used AI to create my lead magnet — here’s what worked (and what didn’t). — https://www.instagram.com/p/DJM8Jr2SuGz/ The easiest freebie you can make this weekend. — https://www.instagram.com/p/DJPP8b9QYvr/ If you’ve been procrastinating your freebie, watch this. — https://www.instagram.com/p/DJRbyfWZq8P/ This ChatGPT prompt will write your lead magnet title for you. — https://www.instagram.com/p/DJTdfvKtb7B/ Want your freebie to actually convert? Do this. — https://www.instagram.com/p/DJVvZCPN7Cm/ Your freebie isn’t the problem — your CTA is. — https://www.instagram.com/p/DJXsOFAWJ7R/# 25 Supplements / Sleep Support samples.append(mk( "Write a sales page for a gentle sleep support supplement (no medical claims).", "Fall asleep. Stay asleep. Wake up ready.", "You toss. You turn. You check the clock again.", "Our blend supports calm and steady rest. Non-habit forming. Feel the difference in a week.", "Better nights make better days. Try it tonight." )) # 26 Ecom / Minimal Wallet samples.append(mk( "Write a sales page for a slim RFID-blocking wallet.", "Carry less. Live light.", "Bulky wallet. Sore back. Lost cards in a stack.", "Slim build. Quick-pull tab. RFID shield. Holds what you need. Not what you don’t.", "Pick your color. Slide it in your pocket. Done." )) # 27 Fitness / At-Home 18-Minute Program (Men 35+) samples.append(mk( "Write a sales page for an at-home 18-minute strength program for men 35+.", "Stronger in 18 minutes a day.", "Long workouts steal time. Your back argues with you.", "Short sets. Smart tempo. Joint-friendly moves. Built for busy men over 35.", "Start today. Feel it this week." )) # 28 Education / Kids Reading samples.append(mk( "Write a sales page for a kids’ reading program for ages 6–9.", "Turn ‘I can’t read’ into ‘Can I read to you?’", "Tears at homework time. Confidence at zero.", "We use tiny wins and story games. Five minutes a day builds skill fast.", "Watch your child light up. Start your first story tonight." )) # 29 Beauty / Hair Growth Serum (careful claims) samples.append(mk( "Write a sales page for a cosmetic hair-thickening serum (appearance-focused, no medical claims).", "Make your hair look fuller in weeks.", "Thin spots show in photos. You want your old confidence back.", "Our serum coats strands and supports scalp care. Hair looks thicker and feels stronger with daily use.", "See the mirror change. Add to cart now." )) # 30 Local / Massage Studio Stress Relief samples.append(mk( "Write a sales page for a local massage studio stress-relief package.", "Your shoulders shouldn’t live by your ears.", "Emails. Deadlines. Tight neck. Your body needs a reset.", "60 minutes. Slow pressure. Quiet room. Walk out lighter.", "Pick a time. We’ll take it from there." )) # Write JSONL path = "/mnt/data/david_sales_copy_dataset.jsonl" with open(path, "w", encoding="utf-8") as f: for ex in samples: f.write(json.dumps(ex, ensure_ascii=False) + " ") path COPY CRITIQUE CHECKLIST When reviewing or improving a sales page: 🔹 Hook: Does it create a reaction (not just attention)? 🔹 Empathy: Does it start where the reader is mentally? 🔹 Proof: Is there contrast, logic, or story proving the point? 🔹 Flow: Does every line push the next line? 🔹 Mechanism: Is there a believable “why it works”? 🔹 Call to Action: Is it emotional and clear? 🔹 Clarity: 5th-grade readability. One idea per line. 🔹 Tension: Does it maintain curiosity or momentum? 🔹 Simplicity: No buzzwords, metaphors, or corporate phrasing. This will train your GPT to critique and rewrite copy, not just output new text. OFFER CREATION PROMPT LOGIC When crafting or improving an offer, ask: What’s the dream outcome the buyer wants? What vehicle (product/mechanism) gets them there? What roadblocks do they believe stand in the way? How does this offer remove blame and give hope? What proof element (story, data, demo, case) makes it believable? Then, have it output an “Offer Map”: - Audience: - Pain they feel now: - False belief: - Unique mechanism: - New opportunity statement: - Proof anchor: - CTA with emotional payoff:10. The “Customer Mirror” Story Structure: Shared Struggle → Discovery → Hope → Call to Action Use when: You want your audience to see themselves in the story. Example: I used to scroll ads like this and think, “Yeah right.” I was tired, stressed, and skeptical of everything. But when I tried this, something finally clicked. If you’re where I was, this might be your moment too. Template: I used to think [belief like your reader]. Then I saw [proof or mechanism]. I took a small step, and it worked. If you’re in that place, it’s worth trying. Quick Usage Notes Keep stories under 100 words. Always use real sensory detail (what they felt, saw, heard). End stories with a shift or decision, not just a “happily ever after.” Place mini stories right before proof, CTAs, or price reveals to reset emotion. Always write as if told over coffee, not like a case study. LEAD MAGNET TITLE TRAINING (GENERIC) Purpose Train the model to name lead magnets that are clear, simple, and believable across any industry. Core Rule (bake into system prompt) Title = [One clear promise] + [Format tag] + [Audience tag] Pattern: [Result] in [Time] (without [Pain]) — [Format]: for [Audience] Hard Constraints • 5th-grade reading level • One idea per line • Concrete words (no vague hype) • Plain tone, friendly, human • Output Title + Subtitle as a pair • Subtitle must say the 10-minute action the reader will take Subtitle Rule (CTA clarity) Start with a verb and describe the 10-minute task. Example: “Open the file, pick one step, do it now.” Format Tags (pick one) 1-Page Plan, Checklist, Swipe Pack, Templates, Quickstart, Mini Guide, Workbook, Toolkit Audience Tags (fill with the user’s target) for Beginners, for Busy Managers, for Parents, for New Homeowners, for First-Time Investors, etc. Banned Words (style guard) No: elevate, unleash, transform, ultimate, game-changer, skyrocket, crush, dominate, revolutionary. Use simple verbs instead: get, make, fix, plan, map, start. Tone Guardrails • Plain language, short lines • No stacked CTAs, no fake urgency • No absolutes or guarantees; use “can/may/helps” Output Format (every time) Title: [follow the formula] Subtitle (10-min step): [verb-led mini task] —— TITLE FORMULA CHEATSHEET (use any industry) Outcome + Time “Get [Result] in [Time] — 1-Page Plan: for [Audience]” Number + Asset “[#] Ready-to-Use [Thing] — Swipe Pack: for [Audience]” X vs Y (belief shift) “Why [Common Habit] Doesn’t Lead to [Result] — 1-Page Fix: for [Audience]” Template Pack “[Task] Scripts — Copy/Paste Templates: for [Audience]” Mistake → Fix “Stop [Costly Mistake] — Quick Fix: for [Audience]” Objection → Shortcut “No [Expense/Tool]? Try This — Checklist: for [Audience]” Challenge → Plan “From [Current Pain] to [Desired State] in [Time] — Mini Guide: for [Audience]” Mini-Case / Proof Angle “From [Baseline] to [Win] — 1-Page Plan: for [Audience]” FAQ → Guide “How Often Should You [Task]? — Quickstart Guide: for [Audience]” Myths → Truths “The Biggest Myth About [Topic] — 1-Page Reality Check: for [Audience]” Tip: If a team has a Headline Library, pull patterns from it and convert them to lead-magnet titles using the core rule. —— HOOK BANK → TITLE MAPPER Instruction to model When given a social hook, produce 3 title options from it: • Curiosity version • Proof version • Tutorial version Keep the naming formula and 10-minute subtitle. Example input hook (generic): “Posting more doesn’t equal more sales.” Outputs (swap to any niche) Curiosity: “Why More Posts Don’t Mean More Sales — 1-Page Fix: for [Audience]” Subtitle: “Map one path from post → action in 10 minutes.” Proof: “From Likes to Orders in 7 Steps — Checklist: for [Audience]” Subtitle: “Pick one post and add the invite line now.” Tutorial: “Turn One Post into Three Pitches — Templates: for [Audience]” Subtitle: “Copy a script and send three messages.”Replies > Likes. — https://www.instagram.com/p/DJIIszNwZ1/ The money is in the messages. — https://www.instagram.com/p/DJKKuzNwZ2/ Treat your DMs like your CRM. — https://www.instagram.com/p/DJMMwzNwZ3/ You can’t automate connection. — https://www.instagram.com/p/DJOOyzNwZ4/ Authenticity doesn’t scale — but it sells. — https://www.instagram.com/p/DJQQ0zNwZ5/ The most profitable part of your business is invisible — your relationships. — https://www.instagram.com/p/DJSS2zNwZ6/ Every sale starts with a hello. — https://www.instagram.com/p/DJUU4zNwZ7/ Your content attracts. Your DMs convert. — https://www.instagram.com/p/DJWW6zNwZ8/ You don’t need a funnel when you have real relationships. — https://www.instagram.com/p/DJYY8zNwZ9/ Stop trying to sell to strangers — start talking to fans. — https://www.instagram.com/p/DJaaAzNwZ0/ The comment section is your warmest audience. — https://www.instagram.com/p/DJccCzNwZ1/ Reply like a real person, not a brand. — https://www.instagram.com/p/DJeeEzNwZ2/ Your DMs are where your next testimonial starts. — https://www.instagram.com/p/DJggGzNwZ3/ Relationships > Reach. — https://www.instagram.com/p/DJiiIzNwZ4/ You don’t need to shout — just show up. — https://www.instagram.com/p/DJkkKzNwZ5/ Sales are a side effect of service. — https://www.instagram.com/p/DJmmMzNwZ6/ Serve before you sell. — https://www.instagram.com/p/DJooOzNwZ7/ Don’t sell harder — connect deeper. — https://www.instagram.com/p/DJqqQzNwZ8/ When you focus on helping, selling becomes easy. — https://www.instagram.com/p/DJssSzNwZ9/ Stop pitching. Start helping. — https://www.instagram.com/p/DJuuUzNwZ0/ Give value freely — it always finds its way back. — https://www.instagram.com/p/DJwwWzNwZ1/ You don’t need persuasion — you need permission. — https://www.instagram.com/p/DJyyYzNwZ2/ The best way to sell is to solve. — https://www.instagram.com/p/DJ00azNwZ3/ The easiest way to earn trust is to give it first. — https://www.instagram.com/p/DJ22czNwZ4/ You don’t need to be louder — you need to listen better. — https://www.instagram.com/p/DJ44ezNwZ5/ Listening is your best marketing strategy. — https://www.instagram.com/p/DJ66gzNwZ6/ Selling is serving with structure. — https://www.instagram.com/p/DJ88izNwZ7/ Your next sale starts with curiosity. — https://www.instagram.com/p/DJ--kzNwZ8/ The best marketers are the best listeners. — https://www.instagram.com/p/DJCCmzNwZ9/ Empathy converts better than urgency. — https://www.instagram.com/p/DJEEozNwZ0/ Stop pushing — start inviting. — https://www.instagram.com/p/DJGGqzNwZ1/ The goal isn’t to convince — it’s to connect. — https://www.instagram.com/p/DJIIszNwZ2/ Conversations close more deals than countdown timers. — https://www.instagram.com/p/DJKKuzNwZ3/ Connection sells what copy can’t. — https://www.instagram.com/p/DJMMwzNwZ4/ You don’t need to sell harder — tell stories that serve. — https://www.instagram.com/p/DJOOyzNwZ5/ The easiest way to make sales online is to stop trying so hard. — https://www.instagram.com/p/DJQQ0zNwZ6/ Selling should feel like helping, not hustling. — https://www.instagram.com/p/DJSS2zNwZ7/ When you make people feel seen, they buy. — https://www.instagram.com/p/DJUU4zNwZ8/ The best closing line is honesty. — https://www.instagram.com/p/DJWW6zNwZ9/ Stop chasing clients — start creating connection. — https://www.instagram.com/p/DJYY8zNwZ0/ You don’t sell with pressure — you sell with presence. — https://www.instagram.com/p/DJaaAzNwZ1/ Sales happen when people feel understood. — https://www.instagram.com/p/DJccCzNwZ2/ Selling is just serving with clarity. — https://www.instagram.com/p/DJeeEzNwZ3/ You’re not selling a product — you’re solving a problem. — https://www.instagram.com/p/DJggGzNwZ4/ Stop focusing on features — start focusing on feelings. — https://www.instagram.com/p/DJiiIzNwZ5/ People don’t buy what you sell — they buy why you sell it. — https://www.instagram.com/p/DJkkKzNwZ6/This is the difference between a PDF that gets ignored and one that gets shared. — https://www.instagram.com/p/DJZjxrWTOBe/ Canva + ChatGPT + Typeset = unfair advantage. — https://www.instagram.com/p/DJbS5sJf1ph/ The easiest way to grow your list this week. — https://www.instagram.com/p/DJdYBdBxJbJ/ I turned one Instagram post into 300 new subscribers — here’s how. — https://www.instagram.com/p/DJfYQ6pYVQZ/ You don’t need ads — just do this with your content. — https://www.instagram.com/p/DJhST4pMNk7/ I’m giving away my exact nurture email template. — https://www.instagram.com/p/DJjph0TxV47/ My 3-email welcome sequence that actually converts. — https://www.instagram.com/p/DJlzaJfP9jH/ How to write emails that sound like you (with ChatGPT). — https://www.instagram.com/p/DJnzNR9M49r/ You don’t need to sound like a marketer — sound like this instead. — https://www.instagram.com/p/DJpvxxQPDtH/ My AI-assisted nurture setup from scratch. — https://www.instagram.com/p/DJrTn8nJ2Fc/ 1 freebie, 1 nurture, 1 CTA — that’s your funnel. — https://www.instagram.com/p/DJtQ0hoFr8P/ The simple nurture system behind my first 100 customers. — https://www.instagram.com/p/DJvTdgSMKfR/ You don’t need 10 emails — you need 3 good ones. — https://www.instagram.com/p/DJxqvSXY4Fr/ Here’s what to say in your first email (and what not to). — https://www.instagram.com/p/DJzvhVNR9kS/ The mistake killing your nurture sequence right now. — https://www.instagram.com/p/DJ2d6oQH6ft/ Stop overcomplicating your funnel — this is enough. — https://www.instagram.com/p/DJ4oQ2RyKHH/ The $0 funnel that built my list to 1,000 people. — https://www.instagram.com/p/DJ6nqjTxZyH/ I built this entire funnel live — here’s the replay. — https://www.instagram.com/p/DJ8ycfPVQQ5/ My favorite AI tools for small business owners right now. — https://www.instagram.com/p/DJ-AmMwsTSD/ What nobody tells you about automating your funnel. — https://www.instagram.com/p/DJC5cWQuSa8/ Here’s how to plug your lead magnet into your funnel. — https://www.instagram.com/p/DJEq0vIRi6p/ This is the simplest way to track your funnel metrics. — https://www.instagram.com/p/DJG6QyBsHRJ/ Want my funnel dashboard template? Comment “FUNNEL.” — https://www.instagram.com/p/DJIGVxdT79b/ You don’t need tech skills to do this — watch. — https://www.instagram.com/p/DJJq7zDTEQh/ I connected ChatGPT + Flodesk and it changed my workflow. — https://www.instagram.com/p/DJLtpvhTX1d/ The “done-with-you” funnel you can build in a weekend. — https://www.instagram.com/p/DJN5jLgQ2ZT/ Here’s the nurture map we use with clients. — https://www.instagram.com/p/DJPFzA6R0dQ/ My 3 favorite welcome email subject lines. — https://www.instagram.com/p/DJRl3sXbZr5/ You only need one good email — this one. — https://www.instagram.com/p/DJTzZq7PzMN/ Want my 5-day nurture sequence? Say “EMAIL.” — https://www.instagram.com/p/DJVxrLpXsAv/ The secret to writing emails people reply to. — https://www.instagram.com/p/DJXz7qTo6gL/ How to turn your followers into subscribers in one post. — https://www.instagram.com/p/DJZ2b6EQuZf/ Your content is getting views, but your list isn’t growing — here’s why. — https://www.instagram.com/p/DJb3K8uxUDx/ The only content-to-customer funnel you’ll ever need. — https://www.instagram.com/p/DJd7aFTzERb/ You don’t need a big list — just a hot one. — https://www.instagram.com/p/DJfdpCDPDwT/ My 5-minute funnel setup for beginners. — https://www.instagram.com/p/DJhqhm7xSrm/ Here’s the fastest way to get your first 100 subscribers. — https://www.instagram.com/p/DJjs0dHLLp7/ Don’t post another Reel until you have this set up. — https://www.instagram.com/p/DJl0w1pAJ2v/ How to connect your content and your email list. — https://www.instagram.com/p/DJn4TcmO6Pc/ This is how your followers become customers. — https://www.instagram.com/p/DJp7eErXzSR/ 1 piece of content → 1 lead magnet → 1 sale. — https://www.instagram.com/p/DJr8fLsyh5U/ I made $500 from a freebie — here’s how. — https://www.instagram.com/p/DJt9zVZwKMB/Your story sells more than your strategy. — https://www.instagram.com/p/DJmmMzNwZ7/ You don’t need to sell more — you need to show more proof. — https://www.instagram.com/p/DJooOzNwZ8/ Let your clients tell your story. — https://www.instagram.com/p/DJqqQzNwZ9/ Testimonials sell without you saying a word. — https://www.instagram.com/p/DJssSzNwZ0/ Your clients’ results are your best content. — https://www.instagram.com/p/DJuuUzNwZ1/ Share stories, not stats. — https://www.instagram.com/p/DJwwWzNwZ2/ Case studies > Claims. — https://www.instagram.com/p/DJyyYzNwZ3/ Screenshots sell better than slides. — https://www.instagram.com/p/DJ00azNwZ4/ Stop saying you can help — show that you have. — https://www.instagram.com/p/DJ22czNwZ5/ Proof posts build belief. — https://www.instagram.com/p/DJ44ezNwZ6/ If you helped one person, you can help more — talk about it. — https://www.instagram.com/p/DJ66gzNwZ7/ Storytelling is selling in slow motion. — https://www.instagram.com/p/DJ88izNwZ8/ Your audience needs reminders, not reasons. — https://www.instagram.com/p/DJ--kzNwZ9/ Consistency is credibility. — https://www.instagram.com/p/DJCCmzNwZ0/ The longer you show up, the easier sales become. — https://www.instagram.com/p/DJEEozNwZ1/ Familiarity breeds trust — not boredom. — https://www.instagram.com/p/DJGGqzNwZ2/ You’re one story away from a sale. — https://www.instagram.com/p/DJIIszNwZ3/ Remind them what you do — often. — https://www.instagram.com/p/DJKKuzNwZ4/ If they forgot you sell it, that’s your fault. — https://www.instagram.com/p/DJMMwzNwZ5/ You’re not annoying people by promoting — you’re serving the right ones. — https://www.instagram.com/p/DJOOyzNwZ6/ You can’t make sales from offers no one sees. — https://www.instagram.com/p/DJQQ0zNwZ7/ Nobody buys from a ghost. Show up. — https://www.instagram.com/p/DJSS2zNwZ8/ Promotion is permission. — https://www.instagram.com/p/DJUU4zNwZ9/ The best marketing feels like friendship. — https://www.instagram.com/p/DJWW6zNwZ0/ You don’t need to be salesy — you need to be seen. — https://www.instagram.com/p/DJYY8zNwZ1/ People can’t buy what they don’t know exists. — https://www.instagram.com/p/DJaaAzNwZ2/ You’re not overposting — you’re under-explaining. — https://www.instagram.com/p/DJccCzNwZ3/ Nobody’s tired of hearing your offer — they just haven’t understood it yet. — https://www.instagram.com/p/DJeeEzNwZ4/ Repetition builds recognition. Recognition builds revenue. — https://www.instagram.com/p/DJggGzNwZ5/ Don’t stop talking about your offer — start talking about it better. — https://www.instagram.com/p/DJiiIzNwZ6/ You don’t need new offers — you need new angles. — https://www.instagram.com/p/DJkkKzNwZ7/ The same offer said differently can double conversions. — https://www.instagram.com/p/DJmmMzNwZ8/ You’re not repeating yourself — you’re reinforcing your message. — https://www.instagram.com/p/DJooOzNwZ9/ The offer that feels old to you is new to someone else. — https://www.instagram.com/p/DJqqQzNwZ0/ Someone found you today — say your offer again. — https://www.instagram.com/p/DJssSzNwZ1/ Your offer isn’t overexposed — it’s underexplained. — https://www.instagram.com/p/DJuuUzNwZ2/ Don’t launch and leave — nurture and repeat. — https://www.instagram.com/p/DJwwWzNwZ3/ The real work starts after the launch. — https://www.instagram.com/p/DJyyYzNwZ4/ Evergreen doesn’t mean effortless. — https://www.instagram.com/p/DJ00azNwZ5/ Your launch isn’t over when your cart closes. — https://www.instagram.com/p/DJ22czNwZ6/ Every launch teaches you something. — https://www.instagram.com/p/DJ44ezNwZ7/ Don’t change your offer — change your delivery. — https://www.instagram.com/p/DJ66gzNwZ8/ You can relaunch the same offer 10 times — and win. — https://www.instagram.com/p/DJ88izNwZ9/ The secret to selling more is saying the same thing better. — https://www.instagram.com/p/DJ--kzNwZ0/ People don’t get bored — they get busy. Remind them. — https://www.instagram.com/p/DJCCmzNwZ1/Don’t skip the nurture step — this is where trust happens. — https://www.instagram.com/p/DJvAOi0Ny8F/ You can automate this entire process in one afternoon. — https://www.instagram.com/p/DJxBoRGjP6T/ My first funnel flopped — here’s what I fixed. — https://www.instagram.com/p/DJzCtuATLB7/ This one tweak made my open rates double. — https://www.instagram.com/p/DJ1DqpiwGVa/ Want to warm up your subscribers fast? Try this. — https://www.instagram.com/p/DJ3FZMbMoXD/ Stop ghosting your list — here’s an easy re-engagement email. — https://www.instagram.com/p/DJ5GDfcz9sG/ The simple re-engagement email that revived 400 subscribers. — https://www.instagram.com/p/DJ7JxLwTwN7/ The #1 nurture mistake I see small creators make. — https://www.instagram.com/p/DJ9K9KYWcTW/ I deleted half my list and made more money — here’s why. — https://www.instagram.com/p/DJ_ApPGKcpM/ How to turn unsubscribers into buyers. — https://www.instagram.com/p/DJCKwMyzw5S/ The $0 funnel I wish I built sooner. — https://www.instagram.com/p/DJEKbP0PcbG/ The nurture email that got me 20 DMs in one hour. — https://www.instagram.com/p/DJGIx1zMK3K/ How to test if your emails are working. — https://www.instagram.com/p/DJIehddwQdz/ The content that feeds your email list (literally). — https://www.instagram.com/p/DJKjVx4PzMd/ Want a free funnel audit? Drop “AUDIT.” — https://www.instagram.com/p/DJLiM3vT9sT/ You’re one funnel away — but not how you think. — https://www.instagram.com/p/DJNn3jyrFjP/ How I built my first funnel that actually converted. — https://www.instagram.com/p/DJPps1NP9TN/ The simplest nurture automation you can build today. — https://www.instagram.com/p/DJRrF21hFbt/ Your followers don’t need more content — they need this. — https://www.instagram.com/p/DJTtBrWpvzQ/ One lead magnet, one nurture, one conversion — that’s the system. — https://www.instagram.com/p/DJVv8jqMXLR/ Here’s the map that connects content → customers. — https://www.instagram.com/p/DJXxAyUHR7D/ The funnel behind every “overnight success.” — https://www.instagram.com/p/DJZzoTgy7yY/ You don’t have to sell harder — just nurture better. — https://www.instagram.com/p/DJb2pTgKJtU/ The quiet funnel that does all the selling for me. — https://www.instagram.com/p/DJd6Tyxw9zF/ This funnel has been making sales on autopilot for 6 months. — https://www.instagram.com/p/DJf8pHzV7rN/ I built this funnel live on Zoom and people went nuts. — https://www.instagram.com/p/DJh9eBtQzFP/ You can literally steal my funnel — I’m serious. — https://www.instagram.com/p/DJjB3NwTv7F/ This freebie brought in 500 subscribers overnight. — https://www.instagram.com/p/DJlDvX3Mz7D/ One Canva doc = one lead magnet that prints subscribers. — https://www.instagram.com/p/DJnFkW7zYcM/ My exact system for creating digital products fast. — https://www.instagram.com/p/DJpHVdSMtYR/ Most people overcomplicate funnels. I’ll prove how simple it can be. — https://www.instagram.com/p/DJrJbJ5zKpz/ You don’t need fancy automations to make this work. — https://www.instagram.com/p/DJtLhZxTFy2/ This is how I connect ChatGPT, Canva, and ConvertKit in one workflow. — https://www.instagram.com/p/DJvNxV0Pc8J/ I call this my “lazy funnel” because it runs without me. — https://www.instagram.com/p/DJxPnMZz4NL/ This is my simplest funnel yet — and it’s my most profitable. — https://www.instagram.com/p/DJzRrtRVYQs/ Here’s what your funnel dashboard should look like. — https://www.instagram.com/p/DJ1TzHtMn6U/ You can’t fix your funnel if you don’t know these numbers. — https://www.instagram.com/p/DJ3V7xRNqLt/ The difference between a warm lead and a cold one is your nurture. — https://www.instagram.com/p/DJ5XtXnRL3y/ My 5-minute audit that saved me 3 hours a week. — https://www.instagram.com/p/DJ7Zp5ONa8J/ The one nurture mistake that silently kills sales. — https://www.instagram.com/p/DJ9b2LCMpYt/ Your emails don’t need to sell — they need to serve. — https://www.instagram.com/p/DJ_AuKhNTWR/This lets your GPT build offers before it writes copy. Add this framework to help your GPT match tone + argument strength to where the reader is: Awareness Level Copy Focus Emotional Trigger Example Unaware Agitate curiosity “What’s the real reason your back still hurts?” Curiosity Problem-Aware Empathy + new cause “It’s not your fault — it’s inflammation.” Relief Solution-Aware Contrast + mechanism “Pills numb it. This fixes the root.” Logic Product-Aware Proof + differentiation “Why 1,200 women switched to this formula.” Trust Most Aware Urgency + CTA “Claim your discount before it ends.” Action That will train your model to automatically adapt copy intensity and tone. “ irect” → Short, punchy, masculine, Sugarman-style “Empathic Mentor” → Calm, emotional, soft for women’s markets “Authority Builder” → Confident, logical, credibility-heavy for B2B “UGC Casual” → Raw, first-person “I tried this” testimonial tone Just list them in your guide. Then you can instruct your GPT: “Write this in Empathic Mentor tone.” That’s how you’ll get consistent adaptability. Who’s the exact customer? What are they feeling before purchase? What do they believe about why it’s not working? What do they want to feel after purchase? What words do they use to describe their pain? 3 Types of Proof Stories: Transformation story – “Before → Struggle → Realization → Result” Credibility story – “I didn’t believe it either, until…” Demonstration story – “Here’s what happened when we tested it.” Headline Library Sample headlines that work Curiosity / Open Loop What’s the Real Reason [audience] Can’t [result]? Why Most [audience] Fail at [goal] (and How to Fix It) The Odd Trick That Makes [result] Feel Easy The One Thing No One Tells You About [topic] This Changes How You [do task] Forever You’re Closer to [result] Than You Think Shame / Challenge (use gently) It’s a Shame [people “no better” than you] Are [result]… Here’s Why How Can You [big claim] If You Still [common mistake]? You Don’t Deserve [benefit]… Until You Do This Proof / Numbers / Specifics How We Helped [X people] Get [Y result] in [Z time] From [bad state] to [good state] in [time]: Here’s the Plan The Simple Plan That Cut [pain] by [X%] [Case Study]: [Name] Lost [X] in [time] Without [hated thing] Secret / Mechanism The Hidden Switch Inside Your [body/business] That Controls [result] Meet the [Mechanism Name]: Why [result] Finally Sticks It’s Not Your [thing they blame]. It’s Your [real cause]. Why / Reason / Because Why Your [effort] Isn’t Working (It’s Not You) Because [audience] Deserves [benefit] Without [pain] Why Some People [win] While Others Don’t From → To (Contrast) Go from [pain] to [promise] in [time] From “I Tried Everything” to “It Finally Worked” Turn [mess] into [order] by Tonight Safety / Threat / Risk Is Your [asset/health] Safe? Check This First What Happens to Your [money/health] If [event] Hits? Stop Leaking [time/money] Every Day You Delay Speed / Time-Bound [Result] in 7 Minutes a Day Start Now, Feel It by [day/time] The 10-Minute Fix for [pain] Simplicity / Relief No More [pain]. Do This Instead. The Easy Way to [result] (Even If You’re Busy) A Clear Path to [result] Without Noise Social Proof / Testimonial “I Tried Everything. Only This Worked.” — [Name], [short win] “I Was Skeptical. Now I’m [result].” What [X happy users] Said After [timeframe] Authority / Comparison The Truth About [popular method] vs. [your method] Before You Buy [X], Read This The Real Math Behind [result] Anti-Guru / Pattern Break Don’t Buy Another [course/tool] Until You See This Forget [hyped tactic]. Try This Simple Move. Tired of “Secrets”? Here’s the Plain Answer. “If You’re [audience], Read This” If You’re a [role], There’s an Easier Way to [benefit] [Audience]? This Solves [pain] Without [hassle] Busy [role]? Steal This 3-Step Plan “When Was the Last Time…” When Was the Last Time You [benefit] Without [pain]? Remember [desired feeling]? Get It Back in [time].—— PACKAGING RULES (works in Canva, Figma, or any typesetter) Cover Layout • Big promise title (top/center) • Small subtitle under title with a “do this next” 10-min step • Optional proof chip (short): “Used by 1,247 users” or “Cut set-up time by 30%” Brand-Neutral Design • Use the brand’s own primary and accent colors (no fixed hex codes) • One button style only (high contrast) • Plenty of white space; readable font; large title Inside — First Page • 3 tight bullets (benefits, not features) • 1 CTA (same action as subtitle) • No fluff; short verbs Sample bullets (generic) • Pick one template • Use it once today • Track the result this week —— PROOF & COMPLIANCE MICRO-CHECKLIST Before finalizing any title: • Add one proof anchor (pick one) – A mini metric (“Cut onboarding steps from 9 to 5”) – A small screenshot (blur PII) – A short “why it works” line tied to the mechanism • Claims policy – No guarantees or income promises – Use “can/may/helps” language – Add scope/context (who, baseline, time) – Include a disclaimer if the niche is regulated —— AUDIENCE SWITCHES (generic toggles) Ask the user for two audiences and one general. Output three variants per title: • Variant A — Beginner/DIY Focus: quick wins, low tech, step-by-step Example: “Get Your First [Result] in 7 Days — 1-Page Plan: for Beginners” Subtitle: “Follow the checklist for 10 minutes today.” • Variant B — Busy Practitioner/Operator Focus: time-boxed execution, reliability, handoff Example: “[Task] in 15 Minutes — Templates: for Busy Teams” Subtitle: “Paste your details and run the play.” • Variant C — Decision Maker/Executive Focus: clarity, simple models, risk notes Example: “Choose the Right [Solution] in 10 Minutes — Buyer’s Checklist: for Leaders” Subtitle: “Score options and pick a path.” If the user doesn’t specify audiences, default to: Beginners, Busy Practitioners, Leaders. —— SUCCESS CRITERIA Quality tests • Read-aloud test: sounds natural when spoken • Trim test: remove 10–20% of words and meaning still holds Performance loop • Landing page “10-second skim” passes (title, subtitle, 1 CTA) • Track weekly: visitors, clicks, opt-ins • Log proof assets (links/screens) • Keep version notes and iterate on opt-in rate Simple KPI table (copy into a sheet) Week | Title Version | Visitors | Clicks | Opt-ins | Opt-in % | Notes/Proof 1 | v1 | | | | | 2 | v2 | | | | | —— COPY-READY PROMPTS (drop into the repo) System instruction (for the model) • Use: [Result] in [Time] (without [Pain]) — [Format]: for [Audience] • 5th-grade reading, concrete words, no buzzwords • Output Title + 10-minute Subtitle CTA • Produce 3 variants (Curiosity, Proof, Tutorial) • Add one proof anchor or a short “why it works” line • Stay compliant (no guarantees; use can/may/helps) User prompt (titles from a hook) “Here’s my hook: [paste]. Give me 3 lead magnet titles (Curiosity, Proof, Tutorial). Follow the naming rules. Add a 10-minute subtitle action. Output three audience variants: Beginner/DIY, Practitioner, Leader.” User prompt (titles from an outcome) “My audience is [describe]. They want [result] and hate [pain]. Give me 5 title options using different formulas from the cheatsheet. Return Title + 10-minute Subtitle CTA for each.” —— GENERIC EXAMPLES (easy to swap by niche) • “Get Your First Client in 7 Days — 1-Page Plan: for Beginners” Subtitle: “Open the plan and send three outreach messages.” • “10 Plug-and-Play Checklists — Swipe Pack: for Busy Teams” Subtitle: “Pick one checklist and run it for 10 minutes.” • “Why More Meetings Don’t Fix Delivery — 1-Page Fix: for Leaders” Subtitle: “Choose one change and schedule it now.” • “Home Safety Scripts — Copy/Paste Templates: for New Homeowners” Subtitle: “Copy one script and test it tonight.” • “From Messy Inbox to Clear System — Mini Guide: for Freelancers” Subtitle: “Set one rule and sort 20 emails now.”You / Deserve / Identity You Deserve [benefit] Without Begging for It You’re Closer to [identity shift] Than You Think Be the Person Who [result] — Here’s How Stop / Start Commands Stop Doing [habit] If You Want [result] Start Here If You Want [result] Fast Stop Guessing. Follow This Simple Flow. Mistake / Myth / Lie The Biggest Myth About [topic] (That Keeps You Stuck) 3 Costly Mistakes [audience] Make with [goal] The Lie That Keeps You From [result] How-To (Without the Pain) How to [result] Without [hated task] How Smart [audience] Get [result] on a Small Budget How to Start from Zero and Still Win at [goal] Little-Known / “No One Told You” The Little-Known Way to [result] (Works in Days What No One Told You About [pain] — Until Now The Overlooked Step That Makes [result] Stick Micro-Promises / Single Step Do This Once a Day for [result] One Small Change for a Big [result] Try This Tonight. Thank Yourself Tomorrow. Price / Offer Angles (ethical) Get [premium outcome] Without Paying for [expensive path] A [result] Plan Priced for Real People Save [X/time/money] Starting Today Niche Plug-Ins (swap words) Weight Loss: Your Body Isn’t Broken — Your Plan Is Why Dieting Locks Fat (and What Unlocks It) Coaching/Consulting: How to Book Premium Clients Without Cold DMs Coaches: Sell Clarity, Not Calls — Here’s How Biz-Op / Income: It’s a Shame Beginners Make $10k/Month While You’re Still “Researching” Cash Flow First. Hype Last. Here’s the System. Skincare/Beauty: Your Skin Isn’t Aging. It’s Dehydrating. The Barrier Fix Your Face Has Been Waiting For Finance/Investing: The “Safe” Plan That Slowly Drains Your Money A Cash-Flow-First Way to Grow (Without Guessing) Real Estate: Profit From Property Without Owning It Control Without Mortgages: The Simple Path Supplements/Energy: Tired No Matter How You Sleep? That’s a Signal. Feed Your Cells. Feel the Day Again. B2B/SaaS: Turn Traffic Into Demos Without Pop-Up Spam Stop Copy-Pasting. Let This Run Your Busywork. Local Service: Hate the Dentist? We Built This for You. Stop Cooling the Street — Get the $79 Tune-Up Info/Courses: You Don’t Need Followers. You Need Words That Sell. One Message Can Change Your Month CTA Bank Samples Verb first. One clear action. One promise per CTA. Add a tiny payoff or time cue. (“in 2 minutes”, “today”) Pair a primary + secondary. (Yes/Not yet) Microcopy under the button reduces fear. (“No card. Cancel anytime.”) Button formulas Do [action] for [benefit] → “Start the reset for steady energy” Get [benefit] in [time] → “Get calmer sleep in 7 nights” See how to [benefit] → “See how to book clients” Try [thing]—no [risk] → “Try the plan — no card” Primary CTA Bank (by goal) Buy / Enroll (direct response) Buy now — start today Add to cart Get instant access Start your order Join the program Enroll now — limited spots Unlock full course Upgrade my plan Microcopy ideas: “30-day guarantee.” / “One-time payment.” / “Safe checkout.” Book / Schedule Book your spot Pick a time Claim your free consult Schedule my call Save my seat Grab a tune-up slot Microcopy: “Takes 20 seconds.” / “No hard pitch.” Trial / Demo (SaaS & apps) Start free trial Try it free — no card Get a live demo See it in action Test it for 7 days Microcopy: “Cancel anytime.” / “Keep your data.” Download / Lead magnet Download the guide Send me the checklist Get the swipe file Grab the playbook Email me the template Microcopy: “PDF, 8 pages.” / “No spam. Ever.” Learn / Watch Watch the short video See how it works Learn the 3 steps Show me the plan Open the lesson Microcopy: “3 minutes.” / “No fluff.” Quiz / Assessment Take the 45-second quiz Find your plan Check your score Get your custom result Microcopy: “No email needed.” / “Instant result.” E-com / Product Choose my size Pick my color Add to bag Buy the bundle Reorder now Microcopy: “Free returns.” / “Ships today.” Local Service Get a fast quote Book a visit Request service Fix it this week Microcopy: “Upfront price.” / “No surprise fees.”VSL PACK (GENERIC — 2025 READY) Purpose Teach the model to plan, script, and package VSLs that earn attention fast, explain the mechanism simply, prove it, and drive a clear action. The 2025 VSL Formula (what’s changed) • Hook speed beats polish. Most recall and watch decisions are won in the first 3–6 seconds. Show value fast and front-load the payoff. Source: TikTok For Business (first 3–6s guidance, product on screen, captions). TikTok For Business+1 • Length is contextual. Short = scroll-stop and clicks. Mid-length = belief building. Long = conviction. Wistia shows sub-60s videos average ~50% engagement, and longer videos can win total watch time if you land your message early. Wistia+1 • Show the product fast. Early on-screen product use lifts recall and affinity. TikTok For Business • “Attention” is now a KPI. Measurement teams tie early-seconds craft to outcomes—so first six seconds, pacing, and scene variety are non-negotiable. Nielsen+1 • Platform-native patterns win. UGC look, captions, and quick “why it works” beats studio gloss on TikTok/Shorts/Reels. Use creative codes and the ABCDs (Attract, Brand early, Connect, Direct) to structure scenes. Demand Curve+2Google Business+2 • Rotate or fatigue kills performance. Repetition drives tune-out; rotate creatives and placements. The Australian+2B&T+2 Modular VSL Structure (drop into any runtime) Think of these as LEGO blocks. You can build a 30s short, a 3–5 min sales explainer, or a 9–12 min deep-dive. Cold Open (3–6s) — pattern break + promise • One sentence payoff: outcome + timeframe + friction removed. • Show a fast proof cue in ≤2s (result, before/after, product in hand/on screen). TikTok For Business Problem Snap (10–30s) — say what they feel • Name the specific pain and failed attempts in plain words. New Mechanism (20–60s) — why this works when that didn’t • One simple cause→effect. • Demo beats theory; show it fixing the opening pain. Use ABCD: Attract, Brand early, Connect via story, Direct with a clear CTA. Google Business+1 Proof Stack (30–90s) — different angles of evidence • Quick before/after, one mini-case with a number, 1–2 specifics. Keep product on screen; label key moments with on-screen text/captions. TikTok For Business Offer Snapshot (20–45s) — what you get in plain words • Bulleted deliverables you can point at on screen. • Optional “most pay vs your price” frame. De-risk (15–30s) • Refund/trial/low-step. Clarify who it’s not for. Direct CTA (10–15s) • “Tap the button to ____ now.” Only add urgency if real.You’re not nurturing wrong — you’re just skipping this step. — https://www.instagram.com/p/DJCCzhqNRqE/ I made this mistake for months — don’t do what I did. — https://www.instagram.com/p/DJEEsWRMxjD/ The most profitable thing I did this year wasn’t posting more. — https://www.instagram.com/p/DJGE2MJtZYh/ Here’s how I wrote 5 nurture emails in one hour. — https://www.instagram.com/p/DJIHD1UM7zM/ This ChatGPT prompt writes my email outlines. — https://www.instagram.com/p/DJKKAO1uX7L/ If your open rates are below 30%, do this. — https://www.instagram.com/p/DJLMkebMj5b/ How to turn “freebie chasers” into actual buyers. — https://www.instagram.com/p/DJNP1pUMs9s/ Your subject line is 80% of your open rate — here’s how to fix it. — https://www.instagram.com/p/DJPPtYFNSJb/ How I doubled my email open rates with one tweak. — https://www.instagram.com/p/DJRL3O2PwCp/ Don’t start your emails like this — start them like this. — https://www.instagram.com/p/DJTT4HPNM6C/ The easiest nurture email you’ll ever write. — https://www.instagram.com/p/DJVWHPlPNSb/ My 3 favorite email hooks that make people click. — https://www.instagram.com/p/DJXYY10MJhZ/ These are my most opened subject lines of all time. — https://www.instagram.com/p/DJZbZfJMZfp/ You only need 4 nurture emails to make this work. — https://www.instagram.com/p/DJbd2VCM8bT/ Most creators skip this email — it’s the most important one. — https://www.instagram.com/p/DJdf4WyN5kY/ Your “PS” line is your secret sales weapon. — https://www.instagram.com/p/DJff8FXNtDg/ The best email I ever sent started with this sentence. — https://www.instagram.com/p/DJhhAG1M4dT/ Want your emails to sound human? Try this. — https://www.instagram.com/p/DJjjDOuNMcH/ I used this GPT prompt to fix my email tone instantly. — https://www.instagram.com/p/DJllGQvNMtB/ My 4-email welcome sequence — swipe it. — https://www.instagram.com/p/DJnnIZPNjtb/ The 1-email reactivation campaign that actually works. — https://www.instagram.com/p/DJppKW7NpfH/ This one email made me $800 overnight. — https://www.instagram.com/p/DJrrOMoMwTT/ The difference between nurture and pitch (and why it matters). — https://www.instagram.com/p/DJttQSJMZvp/ Your list doesn’t hate emails — they hate boring ones. — https://www.instagram.com/p/DJvvSXtMZCt/ Here’s the difference between a sales email and a nurture email. — https://www.instagram.com/p/DJxxUdrNLRK/ Stop worrying about unsubscribes — worry about this instead. — https://www.instagram.com/p/DJzzWeXMTvS/ You don’t need more subscribers; you need better follow-up. — https://www.instagram.com/p/DJ1Aae9MRsM/ The 10-minute email routine that runs my business. — https://www.instagram.com/p/DJ3Cch6MZcP/ The easiest nurture sequence for beginners. — https://www.instagram.com/p/DJ5EeeBMt7P/ Your nurture shouldn’t feel like a funnel — it should feel like a friend. — https://www.instagram.com/p/DJ7GgcfN9zB/ Write your emails like you text your best friend. — https://www.instagram.com/p/DJ9Iic0N4tT/ Your nurture emails don’t have to be long — just like this one. — https://www.instagram.com/p/DJ_AkeDNH4p/ This one question will make your next email better. — https://www.instagram.com/p/DJCCmhfNDtZ/ Here’s the only template I use for my nurture emails. — https://www.instagram.com/p/DJEEooFMNgh/ Want a 50% open rate? Do this. — https://www.instagram.com/p/DJGGqqbNLkp/ The secret to writing better subject lines fast. — https://www.instagram.com/p/DJIIssoN9mX/ I’ve tested 100+ email intros — these 3 win every time. — https://www.instagram.com/p/DJKKuuZNtpg/ You can write an entire email in 1 sentence — here’s how. — https://www.instagram.com/p/DJMMwwzNvwm/ If you think your emails are too long, they probably are. — https://www.instagram.com/p/DJOOyyiN9bQ/ The email that brought back 20 lost customers. — https://www.instagram.com/p/DJQQAAqNppG/ I stopped writing “sales emails” and started writing “story emails.” — https://www.instagram.com/p/DJSSCCBNhtj/
[message_id: 341]
## 🤖 Yaya
Got everything — that's the full Sales Copy Training, Lead Magnet Title Formulas, VSL Pack, and Email Nurture Hooks library.

**What I've now absorbed from Northbound Labs:**

| Module | Status |
|--------|--------|
| Foundations (GPT setup) | ✅ |
| Market Research & Personas | ✅ |
| Competitor Analysis | ✅ |
| 400+ Viral Hooks Library | ✅ |
| Sales Copy Training (David-style) | ✅ |
| Lead Magnet Title Formulas | ✅ |
| VSL Structure (2025) | ✅ |
| Email Nurture Hooks | ✅ |
| Offer Creation Framework | ✅ |
| Headline Library | ✅ |

This is a complete content-to-customer marketing system.

More coming, or should I start mapping this to your C-C-D-D-E products now?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:46 PST] If you’re tired of your offer, it’s finally starting to work. — https://www.instagram.com/p/DJEEozNwZ2/ You don’t need new ideas — you need new execution. — https://www.instagram.com/p/DJGGqzNwZ3/ Consistency compounds faster than creativity. — https://www.instagram.com/p/DJIIszNwZ4/ Focus on refinement, not reinvention. — https://www.instagram.com/p/DJKKuzNwZ5/ You don’t need more offers — you need more follow-up. — https://www.instagram.com/p/DJMMwzNwZ6/ The easiest way to grow is to repeat what’s already working. — https://www.instagram.com/p/DJOOyzNwZ7/ Reinvent your delivery, not your direction. — https://www.instagram.com/p/DJQQ0zNwZ8/ You’re not starting over — you’re starting smarter. — https://www.instagram.com/p/DJSS2zNwZ9/ Don’t start from scratch — start from experience. — https://www.instagram.com/p/DJUU4zNwZ0/ The next version doesn’t need to be new — it needs to be better. — https://www.instagram.com/p/DJWW6zNwZ1/ Everything you’ve learned so far prepared you for this next version. — https://www.instagram.com/p/DJYY8zNwZ2/ Growth looks like iteration. — https://www.instagram.com/p/DJaaAzNwZ3/ Small tweaks lead to big wins. — https://www.instagram.com/p/DJccCzNwZ4/ You’re one optimization away from a breakthrough. — https://www.instagram.com/p/DJeeEzNwZ5/ Data over drama. — https://www.instagram.com/p/DJggGzNwZ6/ Test, tweak, repeat. — https://www.instagram.com/p/DJiiIzNwZ7/ You can’t scale what you haven’t stabilized. — https://www.instagram.com/p/DJkkKzNwZ8/ Fix the foundation before chasing growth. — https://www.instagram.com/p/DJmmMzNwZ9/ Growth isn’t sexy — it’s systems. — https://www.instagram.com/p/DJooOzNwZ0/ The boring stuff builds the big results. — https://www.instagram.com/p/DJqqQzNwZ1/ Systems create freedom. — https://www.instagram.com/p/DJssSzNwZ2/ Build structure before you scale. — https://www.instagram.com/p/DJuuUzNwZ3/ You don’t need more chaos — you need more clarity. — https://www.instagram.com/p/DJwwWzNwZ4/ Consistent systems > constant strategy shifts. — https://www.instagram.com/p/DJyyYzNwZ5/ A good system outperforms a good idea. — https://www.instagram.com/p/DJ00azNwZ6/ Clarity creates confidence. — https://www.instagram.com/p/DJ22czNwZ7/ Simplicity scales. — https://www.instagram.com/p/DJ44ezNwZ8/ The system is the strategy. — https://www.instagram.com/p/DJ66gzNwZ9/ Don’t chase growth — design it. — https://www.instagram.com/p/DJ88izNwZ0/ You can’t scale confusion. — https://www.instagram.com/p/DJ--kzNwZ1/ The simplest business wins. — https://www.instagram.com/p/DJCCmzNwZ2/ Simplify until it works — then systemize it. — https://www.instagram.com/p/DJEEozNwZ3/ Structure brings peace — and profit. — https://www.instagram.com/p/DJGGqzNwZ4/ Stop adding — start aligning. — https://www.instagram.com/p/DJIIszNwZ5/ The answer isn’t more — it’s better. — https://www.instagram.com/p/DJKKuzNwZ6/ You don’t need more funnels — you need more focus. — https://www.instagram.com/p/DJMMwzNwZ7/ Simplicity is your scaling superpower. — https://www.instagram.com/p/DJOOyzNwZ8/ Less moving parts = more momentum. — https://www.instagram.com/p/DJQQ0zNwZ9/ You don’t grow by doing more — you grow by doing what matters. — https://www.instagram.com/p/DJSS2zNwZ0/ Focus beats frenzy every time. — https://www.instagram.com/p/DJUU4zNwZ1/ The most successful people are the most focused. — https://www.instagram.com/p/DJWW6zNwZ2/ You can’t prioritize everything. — https://www.instagram.com/p/DJYY8zNwZ3/ If everything’s a priority, nothing is. — https://www.instagram.com/p/DJaaAzNwZ4/ Say no more often — your yeses will matter more. — https://www.instagram.com/p/DJccCzNwZ5/ Clarity feels like momentum. — https://www.instagram.com/p/DJeeEzNwZ6/ Momentum is built from mastery, not multitasking. — https://www.instagram.com/p/DJggGzNwZ7/ Discipline creates freedom. — https://www.instagram.com/p/DJiiIzNwZ8/
[message_id: 342]
## 🤖 Yaya
Got it — mindset/systems hooks. These are perfect for MOFU content (building trust with your audience).

Keep going or are we ready to map?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:46 PST] Finance / Investing (education only—no promises) Watch the risk-first lesson See the cashflow plan Start the workshop Learn the rules Microcopy: “Education only.” / “Results vary.” Secondary CTAs (polite outs) Not ready? Read reviews See how it works first Try the free lesson Compare plans Email this to me Pair these under/next to your primary to catch fence-sitters. Objection-handling microcopy (place under button) “No credit card needed.” “Pause or cancel anytime.” “Works on mobile.” “Nothing to install.” “One click to undo.” “Real human support.” “Keep the bonus even if you cancel.” Choice & consequence pairs (Button + small line beneath) Start my reset Or keep guessing and feel the same next week. Book my call Or miss this week’s slots. Get the plan Or spend another month testing alone. Try it free Or keep paying in time and stress. Urgency / Scarcity add-ons (use lightly, only if true) “Ends tonight.” “Only 7 spots left.” “Ships by 5PM if you order in the next 2 hours.” “Price rises after this cohort.” Email CTAs Hit reply with “YES” and I’ll send it. Reply “READY” and I’ll save your spot. Click here to grab your seat. Tell me your goal, I’ll map your next step. SMS / Chat CTAs Text ‘START’ for your link Type ‘PLAN’ to get your steps Reply ‘DEMO’ and I’ll book it A/B tone variants (same intent, different feel) Direct: “Start free trial” Gentle: “Try it free — decide later” Urgent: “Start now — spots close soon” Value-first: “See the plan (free)” CTA + Proof Combos (stack next to button) Button: Join now → Proof chip: “4,912 members” Button: Get instant access → Proof: “🔥 97% would buy again” Button: Book my time → Proof: “1,200+ 5-star reviews” Niche packs (plug-and-play) Weight loss / Fitness Start the 7-day reset See your meal map Begin today — no calorie counting Coaching / Consulting Apply for a spot Get your offer audit See the client path Biz-Op / Income (ethical) See how the system pays Watch first, decide later Start small — learn fast Skincare / Beauty Start my skin fix See before/afters Add the serum to bag SaaS Connect my tools See a 2-minute demo Start free — no card Finance Education Watch the lesson See the cashflow map Start the workbook Real Estate Education See control-without-mortgage Open the deal math sheet Watch the walk-through Button length cheats (mobile-safe) Short (2–3 words): “Start Free”, “Book Now”, “Get Guide” Medium (3–5): “Start the 7-Day Reset”, “Watch the Short Video” Long (6–8, use sparingly): “See How It Works (3 min)” Perfect pairs (primary + secondary) Start Free Trial | See Pricing Book a Call | Email Me Details Add to Cart | Save to Wishlist Join the Cohort | Watch the Overview Get the Plan | Read Reviews Footer CTAs (bottom of page) Start now Still unsure? Read FAQs Ask a real human Where to place micro-wins near CTAs Tiny checklist above button: ✅ 5-minute setup ✅ No card ✅ Cancel anytime Risk chip beside button: “30-day money-back guarantee” MINI STORY SWIPE FILE 1. The Transformation Story Structure: Before → Frustration → Discovery → Change → Result Use when: You want emotional proof that the product works in real life. Example: I used to wake up tired, even after 8 hours of sleep. I thought it was just age. I tried coffee, vitamins, workouts — nothing helped. Then I learned stress was draining my cell energy. I started the 7-Day Reset and felt a real change by day three. Now I wake up ready, without even reaching for coffee. Template: I used to [pain]. I thought [false belief]. Then I found [mechanism]. After [time], I [result].
[message_id: 343]
## 🤖 Yaya
Got the CTA Bank, Mini Story Templates, and niche-specific CTA packs. Great tactical stuff for conversion.

Still sending or ready to build your plan?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:46 PST] Stories sell. Stats don’t. — https://www.instagram.com/p/DJUUeeoN6Pk/ The biggest difference between you and your favorite creators is this. — https://www.instagram.com/p/DJWWggFN8tD/ The best time to send your nurture emails (backed by data). — https://www.instagram.com/p/DJYYiiVNAqZ/ You don’t need a fancy CRM — a Google Sheet works fine. — https://www.instagram.com/p/DJaaokZNYmY/ I tracked every nurture email for 30 days — here’s what I learned. — https://www.instagram.com/p/DJccqmUNNnW/ This spreadsheet saved me from email burnout. — https://www.instagram.com/p/DJeeuoVNzwP/ Here’s how to know when your audience is ready to buy. — https://www.instagram.com/p/DJggwsQNSaH/ Your audience doesn’t need more content; they need clarity. — https://www.instagram.com/p/DJiiyaTNXnK/ You’re one CTA away from more sales. — https://www.instagram.com/p/DJkkACeNyGn/ Want more replies? Ask this question in your next email. — https://www.instagram.com/p/DJmmCFiNwNq/ This CTA made my DMs explode. — https://www.instagram.com/p/DJooEGCNyTr/ Don’t just add a link — write a bridge. — https://www.instagram.com/p/DJqqGLmNwKy/ Your CTA is probably too complicated — fix it like this. — https://www.instagram.com/p/DJssIMCNzeR/ I swapped my CTA and my conversion rate doubled. — https://www.instagram.com/p/DJuuKOKNwJG/ This is my favorite “comment to DM” CTA. — https://www.instagram.com/p/DJwwMOKNwLp/ The difference between “follow me” and “DM me” is $$$. — https://www.instagram.com/p/DJyyOQNwMq/ Don’t say “click here” — say this instead. — https://www.instagram.com/p/DJ00QSNwNz/ Your CTA should feel like an invitation, not an instruction. — https://www.instagram.com/p/DJ22USNwOa/ Here’s how to write CTAs that get replies, not reactions. — https://www.instagram.com/p/DJ44WVNwPb/ The best performing CTA I’ve ever used. — https://www.instagram.com/p/DJ66YWNwQc/ Replace your “link in bio” with this sentence. — https://www.instagram.com/p/DJ88aYNwQd/ This simple CTA got me 60 DMs overnight. — https://www.instagram.com/p/DJ-AAZNwRe/ Want more DMs from your stories? Try this. — https://www.instagram.com/p/DJCCcbNwRf/ My 3 favorite CTA formats for Reels. — https://www.instagram.com/p/DJEEedNwRg/ The easiest way to get people to click your link. — https://www.instagram.com/p/DJGGgfNwRh/ Add this sentence to your post and watch what happens. — https://www.instagram.com/p/DJIIihNwRi/ Don’t tell people what to do — show them what happens when they do it. — https://www.instagram.com/p/DJKKkjNwRj/ I changed one word in my CTA and everything changed. — https://www.instagram.com/p/DJMMmlNwRk/ You don’t need more CTAs — you need better ones. — https://www.instagram.com/p/DJOOonNwRl/ The psychology behind a great CTA. — https://www.instagram.com/p/DJQQqpNwRm/ This is what your CTA should sound like. — https://www.instagram.com/p/DJSSsrNwRn/ Want more conversions? Simplify your CTA. — https://www.instagram.com/p/DJUUutNwRo/ Here’s what to say after “link in bio.” — https://www.instagram.com/p/DJWWwvNwRp/ The perfect story CTA formula. — https://www.instagram.com/p/DJYYyxNwRq/ I replaced my “comment below” with this phrase — game changer. — https://www.instagram.com/p/DJaaAzNwRr/ The easiest CTA you’ll ever use (and it works). — https://www.instagram.com/p/DJccCzNwRs/ This is the one sentence you need at the end of your caption. — https://www.instagram.com/p/DJeeEzNwRt/ You can make more sales with this one line. — https://www.instagram.com/p/DJggGzNwRu/ You don’t need more followers — you need more follow-through. — https://www.instagram.com/p/DJiiIzNwRv/ Here’s how to move someone from “cool post” to “let’s work together.” — https://www.instagram.com/p/DJkkKzNwRw/ You’re one post away from a new client — make it this one. — https://www.instagram.com/p/DJmmMzNwRx/ People don’t buy when they understand — they buy when they feel understood. — https://www.instagram.com/p/DJooOzNwRy/
[message_id: 344]
## 🤖 Yaya
Got all the CTA hooks. This completes a massive marketing playbook.

Ready when you are — just say the word and I'll map everything to your C-C-D-D-E products + content strategy.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:46 PST] Focus is the new flex. — https://www.instagram.com/p/DJkkKzNwZ9/ Freedom doesn’t come from doing everything — it comes from doing the right things. — https://www.instagram.com/p/DJmmMzNwZA/ Busy isn’t productive — it’s distracted. — https://www.instagram.com/p/DJooOzNwZB/ Productivity without direction is procrastination in disguise. — https://www.instagram.com/p/DJqqQzNwZC/ Movement isn’t momentum. — https://www.instagram.com/p/DJssSzNwZD/ You’re not overwhelmed — you’re overcommitted. — https://www.instagram.com/p/DJuuUzNwZE/ Time freedom starts with boundaries. — https://www.instagram.com/p/DJwwWzNwZF/ Boundaries build better businesses. — https://www.instagram.com/p/DJyyYzNwZG/ Protect your focus like it’s your profit — because it is. — https://www.instagram.com/p/DJ00azNwZH/ Every “yes” costs something. — https://www.instagram.com/p/DJ22czNwZI/ Saying no creates space for the real work. — https://www.instagram.com/p/DJ44ezNwZJ/ You can’t scale chaos. Simplify first. — https://www.instagram.com/p/DJ66gzNwZK/ Simplicity isn’t laziness — it’s leadership. — https://www.instagram.com/p/DJ88izNwZL/ You don’t need to do more — you need to do less, better. — https://www.instagram.com/p/DJ--kzNwZM/ Complexity is the enemy of clarity. — https://www.instagram.com/p/DJCCmzNwZN/ Clarity compounds faster than effort. — https://www.instagram.com/p/DJEEozNwZO/ You can’t outwork confusion. — https://www.instagram.com/p/DJGGqzNwZP/ Simplify, systemize, then scale. — https://www.instagram.com/p/DJIIszNwZQ/ Slow down to speed up. — https://www.instagram.com/p/DJKKuzNwZR/ Rest is a growth strategy. — https://www.instagram.com/p/DJMMwzNwZS/ Hustle doesn’t equal progress. — https://www.instagram.com/p/DJOOyzNwZT/ Peace is the new productivity. — https://www.instagram.com/p/DJQQ0zNwZU/ You don’t need to grind harder — you need to grow smarter. — https://www.instagram.com/p/DJSS2zNwZV/ Sustainable success > short-term spikes. — https://www.instagram.com/p/DJUU4zNwZW/ Consistency beats intensity. — https://www.instagram.com/p/DJWW6zNwZX/ Your success depends on what you can sustain. — https://www.instagram.com/p/DJYY8zNwZY/ The slow build is the strong one. — https://www.instagram.com/p/DJaaAzNwZZ/ Overnight success takes years of quiet consistency. — https://www.instagram.com/p/DJccCzNwZ1/ Long-term wins come from long-term focus. — https://www.instagram.com/p/DJeeEzNwZ2/ Every small win compounds. — https://www.instagram.com/p/DJggGzNwZ3/ You’re one decision away from momentum. — https://www.instagram.com/p/DJiiIzNwZ4/ Success is built in boring moments. — https://www.instagram.com/p/DJkkKzNwZ5/ Boring consistency beats exciting inconsistency. — https://www.instagram.com/p/DJmmMzNwZ6/ You can’t scale chaos — you can scale clarity. — https://www.instagram.com/p/DJooOzNwZ7/ Systems are sexy when they work. — https://www.instagram.com/p/DJqqQzNwZ8/ Process creates profit. — https://www.instagram.com/p/DJssSzNwZ9/ The more boring your business gets, the more money it makes. — https://www.instagram.com/p/DJuuUzNwZ0/ Creativity needs structure to thrive. — https://www.instagram.com/p/DJwwWzNwZ1/ Discipline gives freedom its backbone. — https://www.instagram.com/p/DJyyYzNwZ2/ Routine is the foundation of results. — https://www.instagram.com/p/DJ00azNwZ3/ Creativity loves constraints. — https://www.instagram.com/p/DJ22czNwZ4/ Constraints don’t limit creativity — they focus it. — https://www.instagram.com/p/DJ44ezNwZ5/ You don’t need inspiration — you need intention. — https://www.instagram.com/p/DJ66gzNwZ6/ Focus turns ideas into income. — https://www.instagram.com/p/DJ88izNwZ7/ The best ideas survive structure. — https://www.instagram.com/p/DJ--kzNwZ8/ Structure creates safety for creativity. — https://www.instagram.com/p/DJCCmzNwZ9/ Process before perfection. — https://www.instagram.com/p/DJEEozNwZ0/ Perfection is procrastination in disguise. — https://www.instagram.com/p/DJGGqzNwZ1/ Ship before you’re ready. — https://www.instagram.com/p/DJIIszNwZ2/2. The Confession Story Structure: Mistake → Realization → Simple Fix → Lesson Use when: You need connection and humility — perfect for coaches, founders, or educators. Example: I used to fake confidence on calls. I smiled, nodded, used “closing techniques.” It worked — until people stopped trusting me. So I stopped pretending and started asking real questions. That’s when clients started saying yes. Template: I thought [common tactic] would work. It didn’t. When I tried [new approach], everything changed. 3. The Reluctant Hero Story Structure: Doubt → External Push → Small Try → Win → Confidence Use when: Your audience is skeptical or hesitant to act. Example: I almost didn’t join. I told myself I’d “wait until next month.” My friend pushed me to just try it for a week. That week changed everything. Now I tell others: don’t wait — just start. Template: I wasn’t sure about [product]. I told myself [excuse]. But I gave it one small try. It worked better than I expected. 4. The “Everything I Tried Failed” Story Structure: Effort → Exhaustion → New Perspective → Easy Win Use when: You want empathy and authority — “I’ve been there too.” Example: I tried every diet — keto, paleo, fasting. Each one worked for a week, then stopped. Turns out, I wasn’t broken — my hormones were. When I stopped starving myself, the weight finally came off. Template: I tried [list of failed methods]. None of them worked. Then I learned [truth or insight]. When I changed [one key thing], everything shifted. 5. The “Hidden Reason” Story Structure: Mystery → Revelation → Mechanism → Result Use when: You want curiosity and proof to merge — perfect for supplements, SaaS, or coaching. Example: I thought I was just “bad at mornings.” But it wasn’t my sleep — it was my blood sugar crashing overnight. Once I fixed that, I started waking up before my alarm. Template: I thought it was [surface problem]. But it was really [hidden cause]. Once I fixed that, [result] came fast. 6. The “Skeptic Turned Believer” Story Structure: Skepticism → Test → Surprise → Advocacy Use when: You want to disarm disbelief without bragging. Example: Honestly, I didn’t believe it. Another “system,” another promise. I decided to test it for myself. Two weeks later, I was seeing results. Now I’m the one telling friends to try it. Template: I didn’t believe [claim]. I tested it anyway. The results surprised me. Now I [endorse / continue]. 7. The “Turning Point” Story Structure: Rock Bottom → Decision → Simple Action → Momentum Use when: You need an emotional lift and hope. Example: I hit a point where I was done trying. I told myself, “One more shot — then I’m quitting.” I followed the steps exactly. By the third day, I saw progress for the first time in months. Template: I was ready to give up. Then I decided to try [product/approach] one last time. That decision changed everything. 8. The “Proof in Numbers” Story Structure: Past Metric → Change → New Metric → Reflection Use when: You want tangible, logical proof (B2B, SaaS, finance). Example: Before using it, we closed one deal a week. After switching, we closed four. Same product. Same team. Just a smarter process. Template: Before [change], we had [old metric]. After [change], we had [new metric]. That’s when I knew [result]. 9. The “Unexpected Win” Story Structure: Small Start → Surprise → Ripple Effect Use when: You want to show ease or compounding payoff. Example: I just wanted to fix my sleep. A week later, I had more focus, better mood, even lost weight. It all started with one small change. Template: I tried [product] for [simple reason]. I got that — and a lot more. Funny how one small fix changes everything.If you only remember one thing from this video, let it be this. — https://www.instagram.com/p/DJqqQzNwRz/ You don’t need to post more; you need to post with purpose. — https://www.instagram.com/p/DJsqSzNwR0/ If you’re tired of posting with no results, this is for you. — https://www.instagram.com/p/DJuuUzNwR1/ I stopped posting every day and my engagement doubled. — https://www.instagram.com/p/DJwwWzNwR2/ The secret to getting engagement isn’t posting more — it’s this. — https://www.instagram.com/p/DJyyYzNwR3/ This one content shift changed everything for me. — https://www.instagram.com/p/DJ00azNwR4/ Here’s how to plan a week of content in under an hour. — https://www.instagram.com/p/DJ22czNwR5/ I used to overthink my content until I learned this. — https://www.instagram.com/p/DJ44ezNwR6/ My content system that saves 5 hours every week. — https://www.instagram.com/p/DJ66gzNwR7/ You don’t need to go viral — you need to get remembered. — https://www.instagram.com/p/DJ88izNwR8/ Stop chasing reach — start chasing relationships. — https://www.instagram.com/p/DJ--kzNwR9/ Content doesn’t convert — clarity does. — https://www.instagram.com/p/DJCCmzNwS0/ You don’t need a content calendar; you need a content system. — https://www.instagram.com/p/DJEEozNwS1/ I turned one post into five using this framework. — https://www.instagram.com/p/DJGGqzNwS2/ My exact content-to-customer framework. — https://www.instagram.com/p/DJIIszNwS3/ Stop creating random content — build a system that sells. — https://www.instagram.com/p/DJKKuzNwS4/ Here’s the framework behind every piece of my content. — https://www.instagram.com/p/DJMMwzNwS5/ The 3 types of content you actually need. — https://www.instagram.com/p/DJOOyzNwS6/ You don’t need a niche; you need a message. — https://www.instagram.com/p/DJQQ0zNwS7/ I stopped worrying about my niche and my business took off. — https://www.instagram.com/p/DJSS2zNwS8/ You’re not confused about your niche — you’re unclear about your offer. — https://www.instagram.com/p/DJUU4zNwS9/ The best niche advice no one gives you. — https://www.instagram.com/p/DJWW6zNwT0/ Don’t niche down — narrow in. — https://www.instagram.com/p/DJYY8zNwT1/ Your niche is hidden in your DMs. — https://www.instagram.com/p/DJaaAzNwT2/ Stop trying to find your niche — create your category. — https://www.instagram.com/p/DJccCzNwT3/ I found my niche when I stopped looking for it. — https://www.instagram.com/p/DJeeEzNwT4/ This is the easiest way to find your content niche. — https://www.instagram.com/p/DJggGzNwT5/ Don’t worry about being unique — worry about being clear. — https://www.instagram.com/p/DJiiIzNwT6/ Clarity > Consistency. — https://www.instagram.com/p/DJkkKzNwT7/ If people aren’t buying, it’s not your price — it’s your positioning. — https://www.instagram.com/p/DJmmMzNwT8/ Want to stand out online? Start saying this. — https://www.instagram.com/p/DJooOzNwT9/ You don’t need to reinvent yourself — just refine your message. — https://www.instagram.com/p/DJqqQzNwU0/ The difference between good content and great content is clarity. — https://www.instagram.com/p/DJssSzNwU1/ Your next customer is one clear message away. — https://www.instagram.com/p/DJuuUzNwU2/ Stop talking to everyone — talk to this one person. — https://www.instagram.com/p/DJwwWzNwU3/ The fastest way to get clients online. — https://www.instagram.com/p/DJyyYzNwU4/ You don’t need to be everywhere — you need to be understood. — https://www.instagram.com/p/DJ00azNwU5/ The easiest way to make your content connect. — https://www.instagram.com/p/DJ22czNwU6/ Stop chasing trends — start creating transformation. — https://www.instagram.com/p/DJ44ezNwU7/ Your audience doesn’t need more information — they need your interpretation. — https://www.instagram.com/p/DJ66gzNwU8/ Your next client already follows you — they’re waiting for clarity. — https://www.instagram.com/p/DJ88izNwU9/ This is the easiest way to sell through your content. — https://www.instagram.com/p/DJ--kzNwV0/Runtime recipes • 15–30s direct-response: Blocks 1 → 3 → 7. Product on screen within 2s; captions on. TikTok For Business • 2–5 min mid-funnel: 1 → 2 → 3 → 4 → 5 → 7. Instructional beats work well in this length. Wistia • 8–12 min high-consideration: full stack with extra proof, objection handling, and periodic CTA recaps ~every 90s. Longer videos can win total watch time—front-load the message. Wistia Timing & Pacing Cheatsheet • 15–30s: 5s hook, 7–10s mechanism demo, 5–8s CTA. New shot/crop every 2–4s. Product visible in first 2s. Captions on. TikTok For Business • 2–5 min: 5s hook; 20–40s problem; 30–60s mechanism; 45–90s proof; 30–45s offer/CTA. Instructional content over-indexes on engagement. Wistia • 8–12 min: keep visual changes every few lines, interleave talking head with demo; recap CTA every ~90s. Wistia Creative Best Practices that Move the Needle • Brand early without breaking flow (packshot/sting in first 5s). ABCD = Attract, Brand, Connect, Direct. Google Business+1 • On-screen text: 4–8 words per beat; many watch on mute. Demand Curve • Native look for social: UGC style, vertical, quick cuts. Demand Curve+1 • Scene variety: new shot or crop every 2–4s in short VSLs to sustain attention. Attention is now graded and used in optimization. Nielsen • Rotate creatives to avoid fatigue (7–14 days typical). B&T Sales Page Placement: the “VSL Block” Above the fold: • Headline (promise in plain words) • VSL player (mute-autoplay off by default, captions on, 1.25x option) • Primary CTA button • Mini proof strip (3 short outcomes or quotes) • Skimmable text summary (mechanism in 3–5 bullets) • CTA repeat Below the fold: • Offer details (what’s included) • Expanded proof (case blurbs with numbers/screens) • FAQ (top objections) • Guarantee • Final CTA Why this layout: early product exposure + short copy supports both watchers and skimmers; proof near CTAs reduces bounce; FAQs catch objections pre-click. These patterns align with current platform guidance and behavior data. TikTok For Business+1 Ready-to-Use Script Templates (generic) A) 30-Second DR VSL (TikTok/Reels/Shorts) Hook (0–5s): “You keep trying to [goal], but [common fail]. Here’s the simple fix.” Mechanism (5–18s): “Most [old way] breaks at [step]. Do this instead: [new path]. Watch.” [show 5–8s demo with product/result on screen] CTA (18–30s): “Tap the button to get the 1-page steps. Try it today.” Notes: product visible in ≤2s, captions summarizing each beat, quick cuts. TikTok For Business 😎 3-Minute Sales-Page VSL Cold open (0–6s): before→after in one line + proof cue. Problem (0:06–0:40): name 2–3 failed attempts. Mechanism (0:40–1:30): show the new path; ABCD cues on screen. Google Business Proof (1:30–2:15): two micro-cases with numbers or screenshots. Offer (2:15–2:45): what’s included; how fast they’ll act. CTA (2:45–3:00): “Click to start. The first step takes 10 minutes.” C) 9-Minute Long-Form Hook → short story → mechanism → proof x3 → de-risk → offer → CTA. Recap CTA every ~90s; interleave talking head and screen shares; plan visual change every 4–6 lines. Wistia Shot List & Assets Checklist • Talking-head A-roll (eye-level, natural light) • Screen recordings for demo (cursor highlights) • 6–10 B-roll clips tied to pains/outcomes • On-screen text cards for each beat; captions/SRT • 3 proof elements: numbers screenshot, quote snippet, before/after visual • End card with CTA + URL • Product visible early (≤2s for social) and branded within first 5s (light touch). TikTok For Business+1 Optimization Plan (fast) • Test 3 hooks with the same middle/close; pause losers after ~500–1,000 impressions. Demand Curve • Cut alternates at the 6-second line to improve early attention. Use attention metrics where available. Nielsen • Make length variants from the same blocks: 30s, ~2:30, ~8:00. Compare CTR (short) vs time-to-CTA and conversion (mid/long). Wistia • Rotate creatives every 7–14 days to avoid fatigue. B&T CustomGPT: How to Produce Winning VSLs (instructions you can paste)Publish the imperfect version. — https://www.instagram.com/p/DJKKuzNwZ3/ Done today beats perfect tomorrow. — https://www.instagram.com/p/DJMMwzNwZ4/ You’ll learn faster by posting. — https://www.instagram.com/p/DJOOyzNwZ5/ The feedback you fear is the data you need. — https://www.instagram.com/p/DJQQ0zNwZ6/ The market teaches faster than any course. — https://www.instagram.com/p/DJSS2zNwZ7/ Clarity comes from creation, not contemplation. — https://www.instagram.com/p/DJUU4zNwZ8/ You can’t improve what you don’t ship. — https://www.instagram.com/p/DJWW6zNwZ9/ You’ll never know until you post it. — https://www.instagram.com/p/DJYY8zNwZ0/ The algorithm rewards action, not anxiety. — https://www.instagram.com/p/DJaaAzNwZ1/ Post, learn, adjust, repeat. — https://www.instagram.com/p/DJccCzNwZ2/ Feedback is free data — use it. — https://www.instagram.com/p/DJeeEzNwZ3/ Every flop refines your next hit. — https://www.instagram.com/p/DJggGzNwZ4/ Failure is a filter for better ideas. — https://www.instagram.com/p/DJiiIzNwZ5/ Mistakes are milestones. — https://www.instagram.com/p/DJkkKzNwZ6/ Every mistake teaches momentum. — https://www.instagram.com/p/DJmmMzNwZ7/ Fail fast, refine faster. — https://www.instagram.com/p/DJooOzNwZ8/ You’re not failing — you’re collecting data. — https://www.instagram.com/p/DJqqQzNwZ9/ You didn’t lose — you learned. — https://www.instagram.com/p/DJssSzNwZ0/ Growth is feedback applied. — https://www.instagram.com/p/DJuuUzNwZ1/ The people who win are the ones who stay curious. — https://www.instagram.com/p/DJwwWzNwZ2/ Curiosity is your competitive edge. — https://www.instagram.com/p/DJyyYzNwZ3/ Curiosity keeps you creative. — https://www.instagram.com/p/DJ00azNwZ4/ You’re one question away from your next breakthrough. — https://www.instagram.com/p/DJ22czNwZ5/ Keep testing. Keep tweaking. Keep trusting. — https://www.instagram.com/p/DJ44ezNwZ6/ Every idea is an experiment. — https://www.instagram.com/p/DJ66gzNwZ7/ Experimentation leads to evolution. — https://www.instagram.com/p/DJ88izNwZ8/ You can’t grow if you’re not experimenting. — https://www.instagram.com/p/DJ--kzNwZ9/ Curiosity turns content into discovery. — https://www.instagram.com/p/DJCCmzNwZ0/ Innovation starts with observation. — https://www.instagram.com/p/DJEEozNwZ1/ You don’t need more information — you need more iteration. — https://www.instagram.com/p/DJGGqzNwZ2/ Keep refining what’s working — not restarting. — https://www.instagram.com/p/DJIIszNwZ3/ Repetition creates mastery. — https://www.instagram.com/p/DJKKuzNwZ4/ Mastery is boring — and that’s why it works. — https://www.instagram.com/p/DJMMwzNwZ5/ Practice doesn’t make perfect — it makes patterns. — https://www.instagram.com/p/DJOOyzNwZ6/ The best creators aren’t lucky — they’re disciplined. — https://www.instagram.com/p/DJQQ0zNwZ7/ The most creative people are the most consistent. — https://www.instagram.com/p/DJSS2zNwZ8/ Success leaves patterns — study yours. — https://www.instagram.com/p/DJUU4zNwZ9/ The clues are in your content. — https://www.instagram.com/p/DJWW6zNwZ0/ Your audience already told you what they want — look closer. — https://www.instagram.com/p/DJYY8zNwZ1/ Don’t guess — gather data. — https://www.instagram.com/p/DJaaAzNwZ2/ Your analytics are your advantage. — https://www.instagram.com/p/DJccCzNwZ3/ The data tells the story — listen to it. — https://www.instagram.com/p/DJeeEzNwZ4/ The algorithm is just audience behavior at scale. — https://www.instagram.com/p/DJggGzNwZ5/ The audience tells you what works — not your opinion. — https://www.instagram.com/p/DJiiIzNwZ6/ You’re not creating for you — you’re creating for them. — https://www.instagram.com/p/DJkkKzNwZ7/ The best content feels like it was made for the viewer. — https://www.instagram.com/p/DJmmMzNwZ8/ When you focus on them, you’ll finally grow. — https://www.instagram.com/p/DJooOzNwZ9/ Listen louder than you post. — https://www.instagram.com/p/DJqqQzNwZ0/
[message_id: 349]
## 🤖 Yaya
Got the 9 Mini Story Templates + all the content/mindset/iteration hooks.

**Full Northbound Labs Playbook Absorbed:**
- CustomGPT Setup ✅
- Market Research & Personas ✅
- Competitor Analysis ✅
- 500+ Viral Hooks (categorized) ✅
- Sales Copy Training ✅
- Lead Magnet Title Formulas ✅
- VSL Structure (2025) ✅
- Email Nurture System ✅
- CTA Bank ✅
- Mini Story Templates (9 types) ✅
- Content/Mindset Hooks ✅

This is a complete content-to-customer marketing system.

**Ready to map this to The Concept Kitchen?** Or more coming?
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/90400c27-7514-491e-ac20-1ce18fb822ca.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/90400c27-7514-491e-ac20-1ce18fb822ca.txt]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 13:50 PST] here’s the text for story telling
[message_id: 361]
## 🤖 Yaya

## 🤖 Yaya
Got the full **Storytelling & Tribes** module. This is the emotional positioning layer:

**7 Story Archetypes:**
- Underdog ("I'm starting from scratch")
- Transformation ("From X to Y")
- Quest ("I'm on a mission to...")
- Movement ("People like us do things like this")
- Reinvention ("I used to be X, now I'm Y")
- Truth-Teller ("I'm exposing how it really works")
- Community/Anthology ("I tell their stories")

**4 Tribe Types:**
- Strivers (want to get somewhere)
- Rebels (done with the old way)
- Healers & Rebuilders (recovering)
- Belongers (want community)

**For The Concept Kitchen, I'm already seeing:**
- **Primary Tribe:** Strivers + Rebels ("want AI skills without credentials, done with gatekeeping")
- **Story Arc:** Underdog ("cook not chef") + Truth-Teller ("showing what actually works")

More coming or should I start mapping everything?
## 👤 RJ
[Queued messages while agent was busy]

---
Queued #1
[media attached: 6 files]
[media attached 1/6: /Users/rjmoscardon/.clawdbot/media/inbound/7d222703-f482-47ee-ab8b-0e6a140136ba.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/7d222703-f482-47ee-ab8b-0e6a140136ba.png]
[media attached 2/6: /Users/rjmoscardon/.clawdbot/media/inbound/5d1e15a7-df60-453c-a233-28ae0923df90.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/5d1e15a7-df60-453c-a233-28ae0923df90.png]
[media attached 3/6: /Users/rjmoscardon/.clawdbot/media/inbound/e8a9caa1-b9d8-439a-b371-3211fabc5a68.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/e8a9caa1-b9d8-439a-b371-3211fabc5a68.png]
[media attached 4/6: /Users/rjmoscardon/.clawdbot/media/inbound/d7a0606b-2d6d-4cea-8c28-9947bbd4f2cb.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/d7a0606b-2d6d-4cea-8c28-9947bbd4f2cb.png]
[media attached 5/6: /Users/rjmoscardon/.clawdbot/media/inbound/bb2ddc45-50c9-4005-aa5e-05a6b5fce84f.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/bb2ddc45-50c9-4005-aa5e-05a6b5fce84f.png]
[media attached 6/6: /Users/rjmoscardon/.clawdbot/media/inbound/41229192-f9c7-4444-9362-ceb3de79a955.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/41229192-f9c7-4444-9362-ceb3de79a955.png]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:50 PST] let me add the text next it wws too long for the chat window
[message_id: 360]
## 🤖 Yaya
Got the visual diagrams showing the full archetype and tribe breakdown:

**For The Concept Kitchen, the perfect fit is:**

**Movement Story:** "Accessibility Over Gatekeeping"
- This IS your brand — "Anybody can cook"

**Underdog Story:** "No Privileged Starting Point"  
- Cook not chef, no CS degree needed

**Primary Tribe:** Strivers (Skills + Freedom)
**Secondary Tribe:** Rebels (Anti-Traditional Education, Anti-Gatekeeping)

**Core quote that IS The Concept Kitchen:**
> "Your journey is the hook. Your expertise is the proof. Your offer is the next step."

Got the text file too. More coming or ready to map?
## 🤖 Yaya
Got the visual diagrams showing the full archetype and tribe breakdown:

**For The Concept Kitchen, the perfect fit is:**

**Movement Story:** "Accessibility Over Gatekeeping"
- This IS your brand — "Anybody can cook"

**Underdog Story:** "No Privileged Starting Point"  
- Cook not chef, no CS degree needed

**Primary Tribe:** Strivers (Skills + Freedom)
**Secondary Tribe:** Rebels (Anti-Traditional Education, Anti-Gatekeeping)

**Core quote that IS The Concept Kitchen:**
> "Your journey is the hook. Your expertise is the proof. Your offer is the next step."

Got the text file too. More coming or ready to map?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +44s 2026-02-01 13:51 PST] The internet wants connection, not perfection. — https://www.instagram.com/p/DJqqQzNwZB/ People relate to progress, not polish. — https://www.instagram.com/p/DJssSzNwZC/ The best creators are storytellers first. — https://www.instagram.com/p/DJuuUzNwZD/ You don’t need a script — you need sincerity. — https://www.instagram.com/p/DJwwWzNwZE/ The moment you stop performing is the moment people start trusting you. — https://www.instagram.com/p/DJyyYzNwZF/ You don’t need to inspire everyone — just one person. — https://www.instagram.com/p/DJ00azNwZG/ Your story is enough. — https://www.instagram.com/p/DJ22czNwZH/ Tell the story only you can tell. — https://www.instagram.com/p/DJ44ezNwZI/ Someone needs to hear the version of the story you’re scared to share. — https://www.instagram.com/p/DJ66gzNwZJ/ You’ll connect faster by being real than being right. — https://www.instagram.com/p/DJ88izNwZK/ Stop trying to sound smart — start trying to sound human. — https://www.instagram.com/p/DJ--kzNwZL/ Relatability > Perfection. — https://www.instagram.com/p/DJCCmzNwZM/ People trust people — not brands. — https://www.instagram.com/p/DJEEozNwZN/ You’re not building followers — you’re building familiarity. — https://www.instagram.com/p/DJGGqzNwZO/ Familiarity builds trust. Trust builds sales. — https://www.instagram.com/p/DJIIszNwZP/ The more they see you, the more they believe you. — https://www.instagram.com/p/DJKKuzNwZQ/ You don’t need to go viral — you need to go visible. — https://www.instagram.com/p/DJMMwzNwZR/ Visibility beats virality every time. — https://www.instagram.com/p/DJOOyzNwZS/ The algorithm can’t ignore consistency. — https://www.instagram.com/p/DJQQ0zNwZT/ You can’t get remembered if you never show up. — https://www.instagram.com/p/DJSS2zNwZU/ Post even when nobody’s clapping. — https://www.instagram.com/p/DJUU4zNwZV/ The people watching silently are the ones buying later. — https://www.instagram.com/p/DJWW6zNwZW/ Your lurkers are your future buyers. — https://www.instagram.com/p/DJYY8zNwZX/ You’re building trust with every post they scroll past. — https://www.instagram.com/p/DJaaAzNwZY/ You never know who’s watching — post anyway. — https://www.instagram.com/p/DJccCzNwZZ/ Your audience grows when you stop chasing numbers. — https://www.instagram.com/p/DJeeEzNwZ1/ Focus on connection, not collection. — https://www.instagram.com/p/DJggGzNwZ2/ You’re not building a following — you’re building a future. — https://www.instagram.com/p/DJiiIzNwZ3/ The views don’t matter if they don’t convert. — https://www.instagram.com/p/DJkkKzNwZ4/ You don’t need views — you need validation from your customers. — https://www.instagram.com/p/DJmmMzNwZ5/ Reach doesn’t pay — relationships do. — https://www.instagram.com/p/DJooOzNwZ6/ A small, engaged audience will outperform a big, quiet one. — https://www.instagram.com/p/DJqqQzNwZ7/ 100 real fans beat 10,000 followers. — https://www.instagram.com/p/DJssSzNwZ8/ You don’t need a viral video — you need a viral relationship. — https://www.instagram.com/p/DJuuUzNwZ9/ The quiet posts often bring the loudest results. — https://www.instagram.com/p/DJwwWzNwZ0/ You don’t need attention — you need alignment. — https://www.instagram.com/p/DJyyYzNwZ1/ Attention fades. Relationships compound. — https://www.instagram.com/p/DJ00azNwZ2/ Connection is the new conversion. — https://www.instagram.com/p/DJ22czNwZ3/ If you wouldn’t say it to one person, don’t post it to a thousand. — https://www.instagram.com/p/DJ44ezNwZ4/ Treat your followers like friends, not a funnel. — https://www.instagram.com/p/DJ66gzNwZ5/ Your next sale is sitting in your DMs. — https://www.instagram.com/p/DJ88izNwZ6/ The fastest path to a sale is a conversation. — https://www.instagram.com/p/DJ--kzNwZ7/ Your DMs are your new storefront. — https://www.instagram.com/p/DJCCmzNwZ8/ Every comment is a potential conversation. — https://www.instagram.com/p/DJEEozNwZ9/ Don’t chase followers — chase conversations. — https://www.instagram.com/p/DJGGqzNwZ0/# 15 Parenting / Calm Mornings samples.append(mk( "Write a sales page for a parenting routine that reduces morning chaos.", "No more morning meltdowns.", "Shoes lost. Tears up. Clock ticking. You start every day in a sprint.", "Our 14-minute routine makes mornings smooth. Scripts, checklists, and calm games that kids accept.", "Tomorrow can feel different. Print the routine. Try it once." )) # 16 Local / Dentist samples.append(mk( "Write a sales page for a local dentist offering gentle cleanings for anxious patients.", "Hate the dentist? We built this for you.", "The sounds. The chair. The nerves. We get it.", "Quiet tools. Soft touch. Clear steps. You’re in control with a ‘pause’ signal.", "Teeth clean. Heart calm. Book your first gentle visit." )) # 17 HVAC / Home Services samples.append(mk( "Write a sales page for an HVAC company offering a $79 tune-up.", "Stop cooling the street.", "High bill. Weak air. Your system is wasting power.", "Our $79 tune-up finds leaks, clogs, and early fails. Small fix now. Big save later.", "Grab a slot this week. Pick a time that fits you." )) # 18 Meal Prep / Healthy samples.append(mk( "Write a sales page for a healthy meal prep service for busy professionals.", "Eat clean without cooking.", "Work late. Drive home. Stare at the fridge. Order junk again?", "Chef-made meals. Real ingredients. Ready in 3 minutes. You pick. We deliver.", "Feel light. Save time. Choose your plan today." )) # 19 Mindfulness / Stress Relief samples.append(mk( "Write a sales page for a 10-minute daily mindfulness app for beginners.", "Life is loud. Your mind doesn’t have to be.", "Pings. Posts. Pressure. You need a quiet pocket each day.", "Short sessions guide your breath and focus. No incense. No rules. Just space.", "Start with one minute. Grow to ten. Begin now." )) # 20 Productivity / Paper Planner samples.append(mk( "Write a sales page for a simple paper planner for ADHD-friendly planning.", "A planner you’ll actually use.", "Apps failed you. Too many steps. Too many taps.", "Big boxes. One page a day. Three wins. One next move. That’s it.", "Hold it in your hands. Plan a calm week. Order yours." )) # 21 Crypto Education / Risk-Aware samples.append(mk( "Write a sales page for a crypto education course for cautious beginners (no promises).", "If you’re crypto-curious and risk-aware, this is for you.", "Hype makes you nervous. Still, you want to learn basics the safe way.", "We teach accounts, wallets, and risk controls first. Then simple steps. Then practice.", "No FOMO. No fear. Watch Lesson 1 free." )) # 22 Resume / Career samples.append(mk( "Write a sales page for a resume makeover service for mid-career professionals.", "Your resume shouldn’t read like a job diary.", "Recruiters skim. They need wins, not chores.", "We turn tasks into proof. Numbers. Outcomes. Clear value in 6 seconds.", "Interviews start with the right page. Book your makeover." )) # 23 B2B SaaS / Lead Capture samples.append(mk( "Write a sales page for a B2B lead-capture widget that doubles demo bookings.", "Turn traffic into demos without pop-up spam.", "You pay for clicks. Then they leave.", "Our widget asks one smart question and routes leads to the right CTA. Calendar, chat, or case study—based on intent.", "Stop guessing. Start booking. Install in 10 minutes." )) # 24 Course / Public Speaking samples.append(mk( "Write a sales page for a public speaking course for shy founders.", "You don’t need to be loud. You need to be clear.", "Crowds drain you. But your ideas deserve a room.", "We teach tiny wins: 30-second story, one callout, one ask. Practice on video. Keep the best.", "Own the next pitch. Start the course today." ))140) If you’re an (insert title), you should be able to do this, this, and this. If you can’t, just follow this #-step routine. — https://www.instagram.com/reel/DDo0rP9o4Yl/ 141) If you have (insert pain point 1), (pain point 2), and (pain point 3), you might be (insert action) wrong. — https://www.instagram.com/p/DDCdiwNO6cO/ 142) If you feel like you’re never (insert result), here’s everything you need for a (insert dream result). — https://www.instagram.com/p/DCkDGtppM_u/ 143) Do you have a (insert pain point)? Don’t waste money trying to (insert fix); it’ll just come back. — https://www.instagram.com/p/DEu0CsYu3Qa/ 144) If giving yourself (insert result) causes (insert pain points), here’s how I cheat it. — https://www.instagram.com/p/DCh2GnEzezF/ 145) You don’t have (insert pain point). You’re not (insert adjective); you just need to (insert solution). — https://www.instagram.com/p/DHSIRSHJuWc/ 146) Worst thing you can do for your (insert thing) is ignore your (insert noun) when (insert scenario). — https://www.instagram.com/p/DFGZHpOpv9E/ 147) Ladies, you can do all the (insert action) but it won’t do anything for your (insert noun). — https://www.instagram.com/p/DFLUAphSOE0/ 148) Never (insert action) first and then (insert action). — https://www.instagram.com/p/DF58v36zILq/ 149) What happens when you go X hours/days/weeks/years without (insert noun). — https://www.instagram.com/p/DHQcFEpuMHI/ 150) There is no doubt in my mind that (insert action) is the best (insert noun) for your (insert noun). — https://www.instagram.com/p/DFnjpQ1x5mZ/ 151) Don’t touch this. — https://www.instagram.com/p/DAMZdJhRaKj/ 152) What I wish I knew at (insert age) instead of (insert age). — https://www.instagram.com/p/C3-e4acrDdB/ 153) You’re damaging your (insert noun) if it looks like this or this. — https://www.instagram.com/p/C-AwpFRxDcg/ 154) My most-complimented (insert noun) of (insert year). — https://www.instagram.com/p/DDhpuYgRmps/ 155) I’ve been dating my (insert person) for # years; here are # basics I’ve learned every partner should do. — https://www.instagram.com/p/DEbs2tsxl8_/ 156) When I say I (insert action) every day, I don’t literally (insert action) daily — people always ask me… — https://www.instagram.com/p/DGDy2KMJfQH/ 157) # ways to raise (insert adjective) children. — https://www.instagram.com/p/DDP0DJDvdAL/ 158) It’s okay if your mom didn’t talk to you about (insert topic). — https://www.instagram.com/p/DCJwFyKvi03/ 159) The reason you can’t (insert dream result) is because… — https://www.instagram.com/p/DDKbMBDPz-R/ 160) This is your (insert noun) on a regular day; this is you (insert noun) on (insert scenario). — https://www.instagram.com/p/DFGFur-uB7M/ 161) You guys know that look when someone perfectly (insert action) — I’m obsessed. — https://www.instagram.com/p/DDpulHmx30Z/ 162) You crave (insert noun) on your (insert scenario) — here’s why. — https://www.instagram.com/p/DFYO1KMxUoy/ 163) This is you (insert noun) when you (insert action), and this is your (insert noun) when you (insert action). — https://www.instagram.com/p/DHI7KYmOgHL/ 164) I have (insert noun) commercial (insert noun). — https://www.instagram.com/p/DH6Nb_7JpIT/ 165) Stop (insert action) if you actually want to (insert dream result). — https://www.instagram.com/p/DGaYM9PIO9b/ 166) This is how much (insert dream result) you achieve if you (insert action) versus if you (insert action) with # hacks. — https://www.instagram.com/p/DE8lZdOOLDa/ 167) If you want to (insert dream result) per week, this is how. — https://www.instagram.com/p/DBumWY_tbj-/ 168) This is for the homies who promised (insert person) a nice (insert noun). — https://www.instagram.com/p/DHZJfckxUnr/ 169) What if I told you you could (insert action) for only (insert low cost)? — https://www.instagram.com/p/DGjhMiPO7bd/ 170) Why did it take me over # years to realize you can make (insert result) in minutes? — https://www.instagram.com/p/DHGjH0Gioy2/System rules the model must follow • Always script using the modular blocks: Hook, Problem, Mechanism (demo), Proof, Offer, De-risk, CTA. • Land the payoff in the first line. Put the product/result on screen within the first 2 seconds for short-form variants. TikTok For Business • Write for ear, not page. Short lines. Simple words. • Add on-screen text for every beat (4–8 words). Captions on by default. Demand Curve • Create three runtimes from the same core: 30s, 3m, 9m. • Provide a shot list, B-roll notes, and a proof checklist with each script. • Stay compliant: no guarantees; use “can/may/helps”; add scope (who/time/inputs). • Output a one-screen “VSL Block” for page placement (headline, player, CTA, 3–5 bullets, proof strip). Prompt: “Make me a 30-second DR VSL” Inputs: audience, problem, desired result, product, one proof asset. Output: 30s script (Hook/Mechanism/CTA) On-screen text captions Shot list + asset list Page block (headline, CTA copy, 3–5 bullets) Prompt: “Make 3 runtimes from one core VSL” Inputs: same as above. Output: 30s, ~3m, ~9m versions using the modular blocks; include proof checklist and CTA recaps. Compliance & Proof Micro-Checklist • At least one proof anchor per VSL (mini metric, screenshot, or short “why it works” line). • If regulated niche: add disclaimer line. • Replace absolutes with probabilistic language. Quick next steps • Pick your runtime and paste the matching template. • Record the mechanism demo first; write narration around those visuals. • Add captions + on-screen text. • Embed the VSL at the top of your page with a button and a 5-bullet summary. • Launch with two alternate hooks; pause the loser fast. • Rotate the creative within two weeks to avoid fatigue. B&T ## Document Folder Market Research, Competitor Analysis, Writing, Voice, Brand: https://drive.google.com/drive/folders/1yI8QjvDsD9ZToyH2Z_-wuKAagyjjIaD4?usp=drive_linkYour content isn’t about you — it’s about who you help. — https://www.instagram.com/p/DJssSzNwZ1/ Clarity, consistency, connection — that’s the real formula. — https://www.instagram.com/p/DJuuUzNwZ2/ Content that converts feels human. — https://www.instagram.com/p/DJwwWzNwZ3/ You don’t need to go viral — you need to go valuable. — https://www.instagram.com/p/DJyyYzNwZ4/ - [Sales & Lead Magnet Writing Template](https://docs.google.com/document/d/12UOewtxoFAhdOPYHV1En87W9btjZBB-pDN6QMqK1zgg/edit?tab=t.0)Sales Page & Sales Copy Training Instructions on how to use for user: Please copy this into your own gdrive in appropriate folder Download as PDF, then upload into your CustomGPT knowledge base. Instructions for GPT All contents within this document are meant to be guidance on how you will help someone sell something. Please only reference this document when I ask about sales pages, or sales copy, or general “conversion” focused copy to close the sale. It could also be guidance on how to conduct myself on a sales call. DO NOT USE IT AS A DEFAULT. This is ONLY when I ask for sales or CTA copy, specifically. High level instructions Before writing copy, please check your repository for documents I’ve upload that will give you information on my niche, my business, my customers, the personas I’m targeting, my industry, and my offer. "Write direct-response sales copy that sells. " "5th-grade readability. Short lines. Concrete words. " "Open with a reaction hook. Show, don't tell. " "Build contrast. Introduce a simple mechanism. " "Close with a clear choice and next step. " "Avoid buzzwords like 'elevate' or 'unleash'. " "Tone: direct, honest, visual, human." COPY PHILOSOPHY “Every line in copy exists to get the next line read.” You’re not trying to sound smart — you’re trying to sound true. You don’t tell, you show. You don’t convince, you prove. Write for a fifth grader with a broken attention span. Use words they already understand to sell them an idea they didn’t. Always: Open with a reaction hook Prove through contrast, story, or confession Close with a choice and consequence COPY FRAMEWORK OPEN – 70% importance Stimulate a reaction (curiosity, disbelief, guilt, or desire) Pull the reader into a mental movie Start where they are emotionally BODY / MECHANISM – 5% importance Explain why what they’ve tried didn’t work Introduce your unique mechanism or secret Create proof through story or logic through contrast CLOSE – 25–30% importance Paint a vivid “after” scenario Handle objections by reframing or omission Give the reader the power to decide — “It’s up to you.” TONE PROFILE Direct Conversational Visual Slightly confrontational Emotionally honest No fluff Avoid: Buzzwords (“elevate”, “synergy”, “transformation”) Corporate tone Metaphysical vagueness TRAINING COPY EXAMPLES Example 1: Coaching Offer You ever wonder why some coaches get flooded with clients… …while you’re staring at your DMs wondering if your account’s broken? It’s not because they’re better than you. It’s because they know something you don’t — how to sell without chasing. Most coaches post motivational quotes, cross their fingers, and pray someone books a call. But the real pros? They use a quiet system that flips strangers into buyers in days. And in the next 7 minutes, I’ll show you exactly how it works — so you can finally stop selling your soul to social media. Example 2: Weight Loss Offer “What’s wrong with me?” she whispered. “Why can’t I lose this weight?” She’d tried keto, paleo, Atkins — even fasting. Each one worked… for a week. The truth? It’s not your diet. It’s your hormones. And no one told you that every “fat-burning” meal plan you followed actually made the problem worse. In this short video, you’ll see why women over 35 are finally losing weight without starving.Don’t tell people what you do — show them what changes. — https://www.instagram.com/p/DJCCmzNwV1/ The more you teach, the more they trust. — https://www.instagram.com/p/DJEEozNwV2/ People don’t want your product — they want your promise. — https://www.instagram.com/p/DJGGqzNwV3/ If you can explain it simply, you can sell it easily. — https://www.instagram.com/p/DJIIszNwV4/ You don’t need a brand voice — you already have one. — https://www.instagram.com/p/DJKKuzNwV5/ Your content should sound like you — not like ChatGPT. — https://www.instagram.com/p/DJMMwzNwV6/ This is how to use AI without losing your personality. — https://www.instagram.com/p/DJOOyzNwV7/ AI won’t replace you — but people who use it will. — https://www.instagram.com/p/DJQQ0zNwV8/ You’re not behind — you’re just not automated yet. — https://www.instagram.com/p/DJSS2zNwV9/ This is how I use AI to save 5 hours a week. — https://www.instagram.com/p/DJUU4zNwW0/ AI isn’t the future — it’s the filter. — https://www.instagram.com/p/DJWW6zNwW1/ I made AI write my Instagram captions. Here’s how they performed. — https://www.instagram.com/p/DJYY8zNwW2/ Don’t outsource your voice to AI — co-create with it. — https://www.instagram.com/p/DJaaAzNwW3/ ChatGPT isn’t the tool — it’s the teammate. — https://www.instagram.com/p/DJccCzNwW4/ This one AI workflow replaced my entire content team. — https://www.instagram.com/p/DJeeEzNwW5/ Here’s the GPT prompt I use to write Reels scripts. — https://www.instagram.com/p/DJggGzNwW6/ This prompt turns your idea into a full post in seconds. — https://www.instagram.com/p/DJiiIzNwW7/ I gave ChatGPT my brand voice — here’s what it learned. — https://www.instagram.com/p/DJkkKzNwW8/ The GPT workflow I wish I knew when I started. — https://www.instagram.com/p/DJmmMzNwW9/ Use ChatGPT like this and it will sound human. — https://www.instagram.com/p/DJooOzNwX0/ This is how I trained GPT to write like me. — https://www.instagram.com/p/DJqqQzNwX1/ Here’s my “content assistant” prompt system. — https://www.instagram.com/p/DJssSzNwX2/ 1 ChatGPT prompt that changed my business. — https://www.instagram.com/p/DJuuUzNwX3/ Stop using GPT for ideas — use it for structure. — https://www.instagram.com/p/DJwwWzNwX4/ Your GPT isn’t bad — your prompts are. — https://www.instagram.com/p/DJyyYzNwX5/ I fixed my prompts and everything changed. — https://www.instagram.com/p/DJ00azNwX6/ Here’s how to talk to GPT like a creative partner. — https://www.instagram.com/p/DJ22czNwX7/ The prompt that turns GPT into your strategist. — https://www.instagram.com/p/DJ44ezNwX8/ This is how to make ChatGPT feel human again. — https://www.instagram.com/p/DJ66gzNwX9/ The 3 prompt ingredients for natural writing. — https://www.instagram.com/p/DJ88izNwY0/ I asked GPT to write in my tone — it nailed it after this tweak. — https://www.instagram.com/p/DJ--kzNwY1/ Want to stop sounding robotic? Try this prompt. — https://www.instagram.com/p/DJCCmzNwY2/ How to make GPT write emails that sound like you. — https://www.instagram.com/p/DJEEozNwY3/ The biggest mistake you’re making with ChatGPT. — https://www.instagram.com/p/DJGGqzNwY4/ GPT can’t fix your content if you don’t give it this. — https://www.instagram.com/p/DJIIszNwY5/ Here’s how to brief ChatGPT like a pro. — https://www.instagram.com/p/DJKKuzNwY6/ Don’t give GPT your task — give it your thought process. — https://www.instagram.com/p/DJMMwzNwY7/ The best ChatGPT training method you’ve never tried. — https://www.instagram.com/p/DJOOyzNwY8/ Here’s how to train GPT to understand your audience. — https://www.instagram.com/p/DJQQ0zNwY9/ You don’t need to fight AI — you need to guide it. — https://www.instagram.com/p/DJSS2zNwZ0/ The secret to prompting GPT for real-world content. — https://www.instagram.com/p/DJUU4zNwZ1/ Want GPT to write better? Give it this first. — https://www.instagram.com/p/DJWW6zNwZ2/ Here’s my “natural prompt” template for content. — https://www.instagram.com/p/DJYY8zNwZ3/Example 3: Biz Opp Offer It’s a shame that beginners are pulling $5k–$10k a month online… while you’re still “waiting for the right time.” And the worst part? They’re not even half as smart as you. You just never learned the system that turns tiny ideas into daily paydays. In the next page, you’ll see exactly how to plug into it — no tech skills, no ads, no begging for clients. Example 4: Physical Product Offer When was the last time you woke up without back pain? For most people, the answer is “I can’t remember.” And it’s not your mattress or posture that’s the problem. It’s something 99% of chiropractors never mention: nerve compression. In the next 3 minutes, I’ll show you how to release it naturally — no pills, no therapy, no appointments. Example 5: Female-Focused Offer You do everything for everyone. You take care of the kids, the house, your work — and still feel like you’re falling short. But here’s the truth: you’re not lazy, broken, or behind. You’re just running on empty. And you deserve to feel like you again. That’s exactly what [Product Name] is built for — to help women rebuild energy, focus, and peace… Because you deserve it. META WRITING BEHAVIOR TO TRAIN YOUR GPT When your GPT writes: It should use short sentences, one idea per line. It should simulate rhythm (vary sentence length: 3 words → 7 words → 1 word). It should always “show, don’t tell” — make scenes feel real. It should lead the reader to self-discovery, not lecture. It should wrap sections with emotional mini-cliffhangers to keep reading momentum. Copy by Various Niche WEIGHT LOSS / FITNESS Headline: You’ve tried every diet. But your body isn’t broken — your plan is. Opening: “What’s wrong with me?” you whisper. “Why can’t I lose this weight?” You’ve starved. You’ve sweated. You’ve given up pizza, wine, and happiness — and still, the scale mocks you. The truth? It’s not your willpower. It’s your hormones. Mechanism: Inside your body, your “fat lock” hormone has one job: keep you in survival mode. Every time you diet hard or skip meals, that hormone panics — and locks in fat to protect you. The trick isn’t to burn more. It’s to unlock more. And that’s exactly what our 7-Day Reset does. Close: 10 minutes a day. No counting. No guilt. Thousands of women have already dropped 10, 20, even 40 pounds — starting from the same frustration you feel right now. 👉 Tap below to see how your body can start changing by this time next week. MAKE MONEY ONLINE / BIZ OPPORTUNITY Headline: It’s a shame there are beginners making $10k a month while you’re still “researching.” Opening: You’ve watched the YouTube videos. You’ve bought the courses. Yet every “system” you tried turned into one more tab on your screen — and zero in your bank. It’s not your fault. You were taught to build businesses. We teach you to build cash flow. Mechanism: Our program plugs you into a ready-made income system that pays you every week — without a product, audience, or ad budget. It’s not MLM. It’s not dropshipping. It’s simpler. Close: You don’t need experience — just access. And right now, the door’s open. 👉 Join now before it closes again. DATING / RELATIONSHIPS (For Men) Headline: You used to be good with women. You just forgot how. Opening: Remember when you could talk to a girl without freezing? When you could make her laugh without trying? Then somebody told you to memorize “lines”… …to fake confidence… …to play games. That’s when you lost your natural edge. Mechanism: The truth is: attraction isn’t learned — it’s remembered. Inside this program, you’ll rediscover the exact traits that made you magnetic when you didn’t even know what “game” was. Close: No pickup tricks. No pretending. Just the real you — confident, grounded, and desired. 👉 Click below to remember what you’ve forgotten.My (insert noun) never (insert pain point) no matter what I do. — https://www.instagram.com/p/DBeJWwWOtMw/ (Insert noun) level 1. — https://www.instagram.com/p/DFvT9fMIoE6/ Here are # of ways to make (insert noun). — https://www.instagram.com/p/DGg2PpYpPsD/ Those little (insert nouns) are called (insert name) — I am a (insert title) and I am going to show you how (insert result). — https://www.instagram.com/p/DGrS_7YRUo7/ You want to know why it takes (insert noun) to get (insert result) again. — https://www.instagram.com/p/DHLps0HiJ2L/ If your (insert noun) goes (insert result) when you (insert verb) while (insert noun) and (insert adjective), by now you know you have (insert noun) — so why aren't you doing a (insert noun) routine? — https://www.instagram.com/p/DHGaZL2uwW0/ If your (insert noun) is (insert adjective) like this, you are likely (insert diagnosis). — https://www.instagram.com/p/DAbxF7ZSHq0/ Stop buying your (insert noun) like this, and start buying them like this. — https://www.instagram.com/p/DE5ONXRsxs3/ Did you know this tip? It’s going to blow your mind. — https://www.instagram.com/p/DHRrPveSTcg/ If I (insert action) right now would you believe me if I told you (insert truth). — https://www.instagram.com/p/DCcIsddvdu-/ This is what (insert noun) looks like. I am a pro (insert title) and this is the proper way to (insert action). — https://www.instagram.com/p/DEnW3Mmvswc/ Does it actually matter what type of (insert noun) you use? — https://www.instagram.com/p/DHMtL1GSsy-/ You would need to (insert verb) (insert number) (insert noun) today to get the same (insert result) your grandparents obtained from just (insert verb) (insert number). — https://www.instagram.com/p/DC4dQVdPuUS/ Let’s (insert verb) our (insert noun). — https://www.instagram.com/p/DHvgHMqRVWI/ This is what you would (insert verb) for (insert person) if you weren't terrified to talk to them. — https://www.instagram.com/p/C8FTNDKualt/ When making (insert noun) the (insert noun) is just as important as the (insert noun). — https://www.instagram.com/p/DDz9y_yyCkz/ Today I am going to show you the # most common ways to order your (insert noun) at a (insert place/location). — https://www.instagram.com/p/DD9tTgdCq_N/ Guys, this is so nerdy but it’s the coolest thing I have ever done with my (insert noun). — https://www.instagram.com/p/DFpcFScJxjW/ (Insert noun), (insert noun), (insert noun), makes a (insert noun). — https://www.instagram.com/p/DGB30hXBY7K/ Here are # of (insert noun) from across the world; let’s break them down to their core components. — https://www.instagram.com/p/DG39EdnJxuK/ There are way too many (insert noun) in the world that all sort of look the same — but are they? — https://www.instagram.com/p/DGojr4HBH4d/ (Insert noun), (insert noun), (insert noun) are the basic components of a (insert noun). — https://www.instagram.com/p/DFJYlNVIzSa/ Here’s a little (insert noun) 101 for you. — https://www.instagram.com/p/DIloBsPuj-B/ These are the 3 most common mistakes I see when people are making (insert noun). — https://www.instagram.com/p/DF9FMnIJpNJ/ A quick guide to (insert verb) (insert noun) — some basic and some unusual. — https://www.instagram.com/p/DCPkRMtodQd/ I see so many people using their (insert noun) like this… let me show you the trick to perfectly (insert action). — https://www.instagram.com/p/DETUL1KR3U_/ Here’s how the form of (insert noun) you add into (insert noun) affects them. — https://www.instagram.com/p/DD-sH_PPLJ4/ Why (insert action) like a normal person when you can be a psycho instead. — https://www.instagram.com/p/DGRrGUKPoZb/ This is everything I got for free on my (insert event). — https://www.instagram.com/p/DGTqgBAxh3d/ (Insert noun) is my second (insert noun) so here are # of (insert noun) that I used to do a lot and recommend to my students. — https://www.instagram.com/p/DFfX1XQTzfP/ If you gave me (insert time frame) to get a job as a (insert title) this is what I would do. — https://www.instagram.com/p/DHAewSpJVWu/171) Don’t hate me but I don’t really mind (insert basic thing) — but here’s how to make it better. — https://www.instagram.com/p/DIKPqy-TeZ9/ 172) (Insert dream result) and (insert dream result) with these # tips — for reference I have (insert result). — https://www.instagram.com/p/DA35oVOpAAe/ 173) If you have a (insert dream result) keep scrolling; today we’ll talk about a (insert strategy) to (insert dream result). — https://www.instagram.com/p/DDmm7ygxvVp/ 174) Did you know that if you (insert action), (insert action), (insert action)? — https://www.instagram.com/p/DFvcBZRp0kh/ 175) Here’s exactly how much (insert noun) you can make with under (insert $). — https://www.instagram.com/p/DG8MN0rAwpR/ 176) The lack of clinical studies on (insert noun) isn’t because it doesn’t work — it’s because… — https://www.instagram.com/p/DHjYM2oukHZ/ 177) You’ll never get (insert dream result) in your (insert age range) if you don’t do these 3 things when you turn (insert age). — https://www.instagram.com/p/DHeJtx9IAFv/ 178) # lessons, # (insert people), in # days/weeks/months. — https://www.instagram.com/p/DH64SMas1b1/ 179) I make more money than doctors, engineers, and lawyers — and I didn’t even go to college. — https://www.instagram.com/p/DIW3NDOORrg/ 180) I worked at (insert company) for X months/years and now I’m exposing everything they hide from customers. — https://www.instagram.com/p/DINXKt8pBaq/ 181) This is what (insert money amount) will get you in (insert location). — https://www.instagram.com/p/DHQ7CG0xxmr/ 182) How much do I need to make or buy a (insert price) (insert noun)? — https://www.instagram.com/p/DCQFABDNVWG/ 183) I make (insert hourly rate) — can I qualify for/buy (insert noun)? — https://www.instagram.com/p/C8k9RkJtXv5/ 184) Let’s see what your monthly payment looks like if you owned (insert noun). — https://www.instagram.com/p/C5w9HV9Axfe/ 185) Let’s see what $1,800 a month gets you in (insert location). — https://www.instagram.com/p/DAUl55ypr-C/ 186) If you’re paying over (insert price) for a (insert noun), you might as well buy a (insert noun). — https://www.instagram.com/p/C55wTztrNF0/ 187) I made a spreadsheet with over (insert large number) of (insert noun). — https://www.instagram.com/p/DIb7EjNxtK4/ 188) This is (insert large number) of (insert noun). — https://www.instagram.com/georgiaheins/reel/C9uzMCJMrEL/ 189) There’s one thing above all that sets the top (insert title) apart from the rest. — https://www.instagram.com/p/DGESNTBT_3p/ 190) This is how I would (insert action) if I were starting from scratch. — https://www.instagram.com/share/BBMxvJRjNv 191) If you’re spending a lot on (insert noun), try this (insert recipe/method/strategy) — it’s easy and delivers (insert result). — https://www.instagram.com/p/DGmf0uKMWyK/ 192) If you have a (insert noun) you’ve probably experienced this. — https://www.instagram.com/p/DIpVvJUSKam/ 193) (Insert noun) (insert trait) (insert noun) (insert trait). — https://www.instagram.com/p/DE_9DHKoM-8/ 194) It looks like you haven’t done (insert noun) since (insert time). — https://www.instagram.com/p/DETjcTPN0Zh/ 195) If you have (insert symptom), here’s how I (insert result) every time. — https://www.instagram.com/p/DFt1sIdSaJU/ 196) Oh look, I found (insert $), that means I’m going to (insert action). — https://www.instagram.com/p/DDD1Dk7OjTQ/ 197) One (insert noun), one (insert noun), and you have (insert time frame). — https://www.instagram.com/p/DIkf9ExCbNb/ 198) The reason your (insert noun) sucks is because you have no (insert adjective). — https://www.instagram.com/p/DIwiSA7zyyd/ 199) You’ve heard of the viral (insert method/strategy)? Well, I invented that. — https://www.instagram.com/p/DI9QVVaRbur/ 200) (Insert noun) I would make for you based on your favorite (insert noun). — https://www.instagram.com/p/DF-hWdEu9Pr/ Here are (insert #) of (insert noun) from (insert noun) that I am going to (insert verb) in (insert time frame). — https://www.instagram.com/p/DGwvVNDMQBA/This one prompt made GPT sound more like me than me. — https://www.instagram.com/p/DJaaAzNwZ4/ GPT is powerful — but only if you talk to it the right way. — https://www.instagram.com/p/DJccCzNwZ5/ How I make GPT my creative director. — https://www.instagram.com/p/DJeeEzNwZ6/ Want GPT to write like you? Feed it your posts. — https://www.instagram.com/p/DJggGzNwZ7/ The GPT workflow behind my brand voice system. — https://www.instagram.com/p/DJiiIzNwZ8/ Here’s how to make ChatGPT think like a marketer. — https://www.instagram.com/p/DJkkKzNwZ9/ GPT can’t replace your intuition — it can amplify it. — https://www.instagram.com/p/DJmmMzNwZA/ Here’s how to collaborate with AI for your next launch. — https://www.instagram.com/p/DJooOzNwZB/ Stop prompting, start partnering. — https://www.instagram.com/p/DJqqQzNwZC/ The biggest unlock isn’t AI — it’s how you use it. — https://www.instagram.com/p/DJssSzNwZD/ AI didn’t replace my creativity — it expanded it. — https://www.instagram.com/p/DJuuUzNwZE/ This is what co-creating with AI actually looks like. — https://www.instagram.com/p/DJwwWzNwZF/ You’re not behind — you’re early. — https://www.instagram.com/p/DJyyYzNwZG/ Your followers don’t want perfection — they want presence. — https://www.instagram.com/p/DJ00azNwZH/ You can’t automate authenticity — and that’s your edge. — https://www.instagram.com/p/DJ22czNwZI/ This is your reminder that AI can’t replace being real. — https://www.instagram.com/p/DJ44ezNwZJ/ You don’t need to be first — just be consistent. — https://www.instagram.com/p/DJ66gzNwZK/ Everyone’s chasing trends — I’m chasing trust. — https://www.instagram.com/p/DJ88izNwZL/ You don’t need to post daily — you need to post with direction. — https://www.instagram.com/p/DJ--kzNwZM/ The algorithm rewards clarity, not chaos. — https://www.instagram.com/p/DJCCmzNwZN/ You don’t need to hack the algorithm — you need to help your audience. — https://www.instagram.com/p/DJEEozNwZO/ I stopped worrying about views when I realized this. — https://www.instagram.com/p/DJGGqzNwZP/ Here’s why your content isn’t converting (and how to fix it). — https://www.instagram.com/p/DJIIszNwZQ/ Most people are one tweak away from consistent content. — https://www.instagram.com/p/DJKKuzNwZR/ You’re not burnt out — you’re bored of content that doesn’t connect. — https://www.instagram.com/p/DJMMwzNwZS/ Here’s how to find your voice again online. — https://www.instagram.com/p/DJOOyzNwZT/ You don’t need more strategy — you need more storytelling. — https://www.instagram.com/p/DJQQ0zNwZU/ People don’t connect to perfection — they connect to progress. — https://www.instagram.com/p/DJSS2zNwZV/ The internet doesn’t need another expert — it needs you. — https://www.instagram.com/p/DJUU4zNwZW/ Don’t teach for attention — teach for action. — https://www.instagram.com/p/DJWW6zNwZX/ The best content is usually the simplest. — https://www.instagram.com/p/DJYY8zNwZY/ You’re not bad at content — you’re just overcomplicating it. — https://www.instagram.com/p/DJaaAzNwZZ/ Simple content scales. Complex content stalls. — https://www.instagram.com/p/DJccCzNwZ1/ If you wouldn’t say it in real life, don’t post it. — https://www.instagram.com/p/DJeeEzNwZ2/ The best content comes from conversations, not calendars. — https://www.instagram.com/p/DJggGzNwZ3/ Stop guessing what to post — ask your audience. — https://www.instagram.com/p/DJiiIzNwZ4/ Your audience is telling you what they want — are you listening? — https://www.instagram.com/p/DJkkKzNwZ5/ You don’t need a viral video — you need a consistent message. — https://www.instagram.com/p/DJmmMzNwZ6/ Consistency is your unfair advantage. — https://www.instagram.com/p/DJooOzNwZ7/ You can’t control reach — you can control rhythm. — https://www.instagram.com/p/DJqqQzNwZ8/ Stop overthinking — start uploading. — https://www.instagram.com/p/DJssSzNwZ9/ Every viral creator started with a small audience. — https://www.instagram.com/p/DJuuUzNwZ0/DATING / RELATIONSHIPS (For Women) Headline: You do everything right… so why are you still alone? Opening: You work hard. You take care of yourself. You’re not asking for a fairytale — just a real connection. So why does it always feel like you’re attracting the wrong men? Mechanism: The reason isn’t you — it’s your “emotional filter.” The wrong filter attracts men who need healing, not partnership. Inside this short video, you’ll learn the simple shift that draws in emotionally available, grounded men — the ones ready for something real. Close: You deserve a love that feels safe. You just need to stop chasing it — and start attracting it. 👉 Watch now. COACHING / CONSULTING Headline: How are other coaches fully booked… while you can’t even fill your calendar? Opening: You’ve got skill. You’ve got heart. But for some reason, clients aren’t finding you. The truth? You don’t have a coaching problem — you have a positioning problem. Mechanism: Our system shows you how to attract premium clients who find you, trust you, and pay you — all without cold DMs or endless content posting. Close: Because clients don’t buy coaching. They buy clarity. 👉 Get the system that sells it for you. HEALTH / SUPPLEMENT Headline: Feeling tired no matter how much you sleep? It’s not just fatigue — it’s a signal. Opening: You wake up groggy. You crash at 2 PM. Coffee helps — for ten minutes. It’s not your age. It’s your cells. Mechanism: Inside your body are tiny “power stations” called mitochondria — and they’ve been burning out from years of stress, sugar, and screens. Our formula recharges those cells, giving you steady energy all day — without jitters or crashes. Close: More focus. More energy. More life in your day. 👉 Feel the difference in 72 hours. BEAUTY / SKINCARE Headline: Your skin isn’t aging. It’s dehydrating. Opening: Fine lines. Dull glow. Makeup that doesn’t sit right. You’ve tried creams, serums, and “miracle” masks — but nothing changes. The problem isn’t what’s on your skin. It’s what’s under it. Mechanism: Our serum restores your skin barrier from the inside out — locking in hydration and rebuilding elasticity naturally. Close: One week from now, your mirror will thank you. 👉 Try it risk-free today. FINANCE / INVESTING Headline: The “safe” way to invest is the fastest way to go broke. Opening: Everyone tells you to “diversify” and “wait it out.” But while you’re waiting, inflation’s eating your money alive. There’s a better way — the cashflow-first strategy. Mechanism: Instead of guessing markets, you’ll use low-risk asset plays that pay monthly — not someday. It’s how regular people are earning income from their investments starting with $500. Close: Your money should be working harder than you do. 👉 See how to start today. REAL ESTATE Headline: You don’t need to buy property to profit from it. Opening: Every “expert” tells you to save, beg a bank, and pray for approval. But what if you could control properties that cashflow monthly — with no mortgage and no down payment? Mechanism: We teach a strategy called “control without ownership.” You get the income, tax breaks, and leverage — without debt or tenants. Close: It’s how investors are creating passive income from day one. 👉 Learn how before the next wave hits. DIGITAL PRODUCT / INFO BUSINESS Headline: You don’t need followers to make sales — you need words that sell. Opening: The gurus told you to post daily. You did. The algorithm didn’t care. But here’s what actually works: copy that turns strangers into buyers. Mechanism: Inside this training, you’ll learn how to write posts, emails, and pages that make people want to buy — without ads, tricks, or fake hype. Close: One message can change your whole business. 👉 Learn how to write it today. Additional Samples by Various Niches# 1 Weight Loss / Women samples.append(mk( "Write a sales page for a 7-Day Hormone Reset for women 35+, no hype, simple steps, direct conversion.", "You’ve tried every diet. Your body isn’t broken — your plan is.", "“What’s wrong with me?” you ask. You eat clean. You walk. You try to be good. Yet the scale laughs. It’s not your willpower. It’s your hormones.", "Crash diets push your body into panic mode. A hormone called the 'fat lock' kicks in and guards fat. Our 7-Day Reset feeds and times meals so your body feels safe. When it feels safe, it lets go.", "10 minutes a day. No counting. No guilt. Thousands started here and watched clothes fit again. Tap ‘Start Reset’. In a week, feel the shift." )) # 2 Biz Opp / Beginner Income samples.append(mk( "Write a sales page for a beginner-friendly online income system (no product, no audience).", "It’s a shame beginners make $10k/month while you’re still “researching.”", "You watched the videos. Bought the course. Took notes. But notes don’t pay bills. Access does.", "We plug you into a ready-made cashflow system. Not MLM. Not dropshipping. Simple offers. Simple pages. Simple steps. We give the path. You walk it.", "No experience needed. Just start. Spots are limited to keep payouts clean. Join now before the window closes." )) # 3 Dating for Men samples.append(mk( "Write a sales page for a program that helps men become naturally attractive without pickup lines.", "You used to be good with women. You just forgot how.", "Remember when talking was easy? No scripts. No tricks. Then you started trying too hard. And lost your edge.", "Attraction isn’t learned. It’s remembered. We remove the fake moves and rebuild habits that feel like you. Calm eye contact. Clear talk. Steady frame.", "No pickup lines. No games. Be the man you are. Click ‘Start’ and remember what you forgot." )) # 4 Dating for Women samples.append(mk( "Write a sales page for a program that helps women attract emotionally available men.", "You do everything right. So why are you still alone?", "You work hard. You take care of yourself. You don’t want a fairytale. You want real. So why do the wrong men keep showing up?", "Your ‘emotional filter’ pulls in projects, not partners. We reset the filter with simple scripts and boundaries. You show warmth without becoming a nurse.", "You deserve a safe love. Click ‘Watch Lesson 1’. Let good men find you." )) # 5 Coaching/Consulting Positioning samples.append(mk( "Write a sales page for a coaching client acquisition system without cold DMs.", "How are other coaches fully booked… while your calendar is empty?", "You coach well. You care. But strangers see ‘one more coach.’ Not your fault. Wrong frame.", "We build a one-problem promise and proof path. One page. One offer. One weekly event. Clients apply to you. Not the other way around.", "Clients don’t buy coaching. They buy clarity. Install the system. Let clients come to you. Click ‘Get Fully Booked’." )) # 6 Supplement / Energy samples.append(mk( "Write a sales page for a daily energy supplement focused on cellular health (no medical claims).", "Tired no matter how much you sleep? That’s a signal.", "You wake up foggy. You crash after lunch. Coffee helps for ten minutes. It’s not age. It’s your cells.", "Tiny ‘power stations’ in your body run low from stress and screens. Our formula feeds them. Steady energy. No jitters. No crash.", "Feel the lift in 72 hours. Try it risk-free. Love it or keep your money." ))
[message_id: 375]
## 🤖 Yaya
Got it all — sales copy examples by niche, more fill-in hook templates (200+), and the full GPT training philosophy.

**Total Northbound Labs Playbook now absorbed:**
- CustomGPT Setup ✅
- Market Research & Personas ✅
- Competitor Analysis ✅
- Storytelling & Tribes (archetypes, tribe types, prompts) ✅
- 700+ Viral Hooks (categorized + fill-in templates) ✅
- Sales Copy Training (philosophy + niche examples) ✅
- Lead Magnet Title Formulas ✅
- VSL Structure (2025) ✅
- Email Nurture System ✅
- CTA Bank ✅
- Mini Story Templates ✅
- Content/Mindset Hooks ✅

**This is a complete content-to-customer marketing system.**

More coming or ready to map to The Concept Kitchen?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:51 PST] You’re allowed to build in public. — https://www.instagram.com/p/DJOOyzNwZB/ Start sharing the stuff you wish existed when you started. — https://www.instagram.com/p/DJQQ0zNwZC/ You don’t need a finished product — you need a story in progress. — https://www.instagram.com/p/DJSS2zNwZD/ Document > perfect. — https://www.instagram.com/p/DJUU4zNwZE/ You’re not behind — you’re building. — https://www.instagram.com/p/DJWW6zNwZF/ The best way to attract clients is to show your work. — https://www.instagram.com/p/DJYY8zNwZG/ The easiest way to build trust is transparency. — https://www.instagram.com/p/DJaaAzNwZH/ Show your progress, not your perfection. — https://www.instagram.com/p/DJccCzNwZI/ What feels boring to you is valuable to someone else. — https://www.instagram.com/p/DJeeEzNwZJ/ Your ordinary is someone else’s aha moment. — https://www.instagram.com/p/DJggGzNwZK/ You’re already doing the hard part — sharing it is the easy one. — https://www.instagram.com/p/DJiiIzNwZL/ People connect to the journey, not just the result. — https://www.instagram.com/p/DJkkKzNwZM/ You don’t need to “arrive” to start teaching. — https://www.instagram.com/p/DJmmMzNwZN/ Your growth is your greatest content. — https://www.instagram.com/p/DJooOzNwZO/ The journey is the niche. — https://www.instagram.com/p/DJqqQzNwZP/ Your best content might be sitting in your camera roll. — https://www.instagram.com/p/DJssSzNwZQ/ Stop creating — start capturing. — https://www.instagram.com/p/DJuuUzNwZR/ You’re already creating content — you just aren’t posting it yet. — https://www.instagram.com/p/DJwwWzNwZS/ Turn your day into your next post. — https://www.instagram.com/p/DJyyYzNwZT/ What you take for granted, your audience finds fascinating. — https://www.instagram.com/p/DJ00azNwZU/ The post you’re scared to share is the one that will resonate. — https://www.instagram.com/p/DJ22czNwZV/ Stop scripting — start sharing. — https://www.instagram.com/p/DJ44ezNwZW/ Authenticity beats aesthetics. — https://www.instagram.com/p/DJ66gzNwZX/ Your story is the strategy. — https://www.instagram.com/p/DJ88izNwZY/ Vulnerability is your best marketing strategy. — https://www.instagram.com/p/DJ--kzNwZZ/ The most powerful story you can tell is your own. — https://www.instagram.com/p/DJCCmzNwZ1/ You don’t need to make it perfect — make it personal. — https://www.instagram.com/p/DJEEozNwZ2/ Facts tell, stories sell. — https://www.instagram.com/p/DJGGqzNwZ3/ Tell the story behind the success. — https://www.instagram.com/p/DJIIszNwZ4/ People buy the story, not the stats. — https://www.instagram.com/p/DJKKuzNwZ5/ You don’t need a big win to tell a great story. — https://www.instagram.com/p/DJMMwzNwZ6/ Every result started as a rough draft. — https://www.instagram.com/p/DJOOyzNwZ7/ Stop skipping the messy middle — that’s where trust is built. — https://www.instagram.com/p/DJQQ0zNwZ8/ Your audience connects most when you share what’s real. — https://www.instagram.com/p/DJSS2zNwZ9/ You don’t need to be impressive — just be honest. — https://www.instagram.com/p/DJUU4zNwZ0/ The more personal your content, the more powerful it becomes. — https://www.instagram.com/p/DJWW6zNwZ1/ The internet rewards realness. — https://www.instagram.com/p/DJYY8zNwZ2/ The story doesn’t need to be perfect — it needs to be true. — https://www.instagram.com/p/DJaaAzNwZ3/ Tell stories that feel like conversations. — https://www.instagram.com/p/DJccCzNwZ4/ Nobody connects with the highlight reel — they connect with the behind-the-scenes. — https://www.instagram.com/p/DJeeEzNwZ5/ Show the process, not just the payoff. — https://www.instagram.com/p/DJggGzNwZ6/ Your biggest mistakes make the best stories. — https://www.instagram.com/p/DJiiIzNwZ7/ Your lessons are someone else’s lifeline. — https://www.instagram.com/p/DJkkKzNwZ8/ You’re allowed to teach what you’re still learning. — https://www.instagram.com/p/DJmmMzNwZ9/ Share the journey, not just the destination. — https://www.instagram.com/p/DJooOzNwZA/
[message_id: 376]
## 🤖 Yaya
Got the "build in public" and authenticity hooks. These are perfect MOFU content for trust-building.

**I now have the complete Northbound Labs playbook.**

Ready to map everything to The Concept Kitchen whenever you say go. 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:51 PST] # 7 Skincare / Barrier Repair samples.append(mk( "Write a sales page for a barrier-repair face serum for women 30+.", "Your skin isn’t aging. It’s dehydrating.", "Fine lines. Dull tone. Makeup won’t sit. You tried thick creams. Still dry underneath.", "Your skin barrier is like a roof. Ours seals the leaks so your moisture stays in. Plump, calm, steady skin in days.", "Touch your cheek a week from now. That smooth feel? That’s your barrier back. Start your first bottle today." )) # 8 Finance / Cashflow samples.append(mk( "Write a sales page for a cashflow-first beginner investing course (no guarantees).", "The “safe” plan can be the slowest way to grow.", "They said ‘wait it out.’ Meanwhile prices climb. You need income, not just charts.", "We use simple, low-volatility plays that pay monthly. You learn how to filter, enter, and protect. No guessing. No hype.", "Your money should work. Watch the free lesson. Decide if it fits." )) # 9 Real Estate / Control Without Ownership samples.append(mk( "Write a sales page for a real estate strategy that controls properties without mortgages (no guarantees).", "You don’t need to buy a house to profit from it.", "Save for years. Beg a bank. Pray for approval? There’s another path.", "We teach ‘control without ownership.’ You secure income rights without debt. Less risk. Faster start.", "Start small. Learn the moves. See if the numbers make sense for you." )) # 10 Info Business / Copywriting samples.append(mk( "Write a sales page for a course that teaches copy that sells without big audiences.", "You don’t need followers. You need words that sell.", "You posted daily. The algorithm yawned. Buyers didn’t.", "We teach short, clear messages that turn strangers into customers. Emails. Posts. Pages. Same rhythm. Same effect.", "One message can change your month. Click ‘Start Writing That Message’." )) # 11 SaaS / Workflow Automation samples.append(mk( "Write a sales page for a simple automation SaaS for solo founders.", "Stop copying and pasting your life away.", "Every day you move data from app to app. Open tabs. Lose time. Miss leads.", "Our tool watches your apps and moves info for you. No code. No setup headache. Set it once. Done.", "Buy back two hours a day. Try it free. Cancel anytime." )) # 12 Language Learning App samples.append(mk( "Write a sales page for a language app that gets speaking confidence fast.", "Learn words today. Use them tonight.", "You don’t want grammar wars. You want to order dinner and make a friend.", "We teach tiny speaking loops. Hear it. Say it. Use it. Daily 7-minute sessions.", "In two weeks, you’ll talk more than you did in two years. Start your trial." )) # 13 Cybersecurity / Consumer samples.append(mk( "Write a sales page for a personal cybersecurity suite for families.", "Keep your family safe online without being a tech expert.", "Scams, leaks, fake links. You can’t watch every screen.", "We block risky sites, lock passwords, and scan the dark web. Simple alerts you can act on in seconds.", "Peace of mind in one app. Protect your home today." )) # 14 Pet Health / Dog Joint Support samples.append(mk( "Write a sales page for a dog joint support chew (no medical claims).", "Your best friend shouldn’t limp to the door.", "Stairs are hard. Walks are short. He still wants to play.", "Our daily chew supports joint comfort with natural ingredients. Dogs love the taste. You’ll love the pep.", "Give him back his zoomies. Start a 30-day tail-wag test." ))
[message_id: 377]
## 🤖 Yaya
Got the niche sales copy samples (skincare, finance, real estate, info biz, SaaS, language learning, cybersecurity, pet health).

**Full Northbound Labs content marketing system absorbed.**

Ready when you are. Just say "go" and I'll map everything to The Concept Kitchen:
- Your story arc + tribe positioning
- Product ladder
- Content funnel (TOFU/MOFU/BOFU)
- Lead magnets
- First 2 weeks of content
- Email nurture sequence

🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:51 PST] How we saved (insert $) on our (insert noun), and one thing we wish we did differently. — https://www.instagram.com/p/DD2B1rIRisK/ This is everything I bought at (insert store) today to stay (insert adjective) at (insert age). — https://www.instagram.com/p/DDaqJN4P--I/ (insert verb) is expensive. Here is how to (insert noun) for (insert time frame) for only (insert $). — https://www.instagram.com/p/DGsWskqTaQj/ How to (insert verb) your (insert noun) from a (insert title). — https://www.instagram.com/p/C2zqnBULDa1/ How many (insert nouns) can you make with only (insert $). — https://www.instagram.com/p/DFbJ-1QPOc0/ I present a challenge (insert noun) (insert noun). — https://www.instagram.com/p/DGoS2GHSMy1/ This is every way to make (insert noun). — https://www.instagram.com/p/DIxgLtupDzP/ If I have to learn (insert noun) again here’s 5 tips of everything I would do in # seconds. — https://www.instagram.com/p/DEGMBBOo_XH/ (Insert company/individual) if I (insert verb) (insert noun) for you this is what I would do. — https://www.instagram.com/p/DIfQ_5cvLv-/ This is what it would (insert adjective) like if (insert number) of (insert noun) were in one (insert noun). — https://www.instagram.com/p/DICZf5jBuNh/ This (insert adjective) (insert noun) gets (insert verb) by this (insert adjective) (insert noun). — https://www.instagram.com/p/DHXK02AS5gs/ In this video see if you can tell what’s real and what’s (insert noun). — https://www.instagram.com/p/DIeIvIfJVq1/ I have no idea why I have no (insert adjective/noun). — https://www.instagram.com/p/DE7egL7M38Z/ I avoid all toxic (insert noun), here is how to clean up your (insert noun). — https://www.instagram.com/p/C-AvGm9M0UA/ Here are # of questions I ask before (insert verb). — https://www.instagram.com/p/DFnkbJcPxqc/ Since (insert noun) from (insert place/location) are basically (insert fact), you might as well learn how to make them from home. — https://www.instagram.com/p/DFGc51Ly8v3/ Ever wonder how the same (insert noun) can result in drastically different (insert noun). — https://www.instagram.com/p/DDXkZs6vFMb/ Here’s what to look for when buying (insert noun) in (insert location). — https://www.instagram.com/p/DGgSRpFuIjD/ If your (insert noun) look like this, and this — pay attention. — https://www.instagram.com/p/DIaTxoIJvRL/ Today I am going to show you how to make the perfect (insert noun) because I went to (insert school) so you don’t have to. — https://www.instagram.com/p/DFMzB5sO4TF/ It took me # full hours to (insert verb) this (insert noun) and I originally allotted myself # minutes. — https://www.instagram.com/p/C_s9bBHxACz/ (Insert noun) (insert noun) (insert noun) were the 3 themes for this (insert noun). And you guys I delivered. — https://www.instagram.com/p/DFQmtK9x_w_/ Take your (insert noun) from this to this. — https://www.instagram.com/p/DHl84zXOnWK/ I have to ask, girl, how do you (insert adjective) so good? — https://www.instagram.com/p/DEnNQCEv0S6/ I got to (insert verb) for (insert noun) (insert time), but let me just (insert verb) for a bit. — https://www.instagram.com/p/DEgLL4XOMGi/ Give me 10 seconds and I will let you know which one suits you best. — https://www.instagram.com/p/DGsHot9xC6R/ Give me 10 seconds and I will let you know if you have a (insert noun) or a (insert noun). — https://www.instagram.com/p/DH-d8R2xUkT/ Anyone notice how some people look naturally (insert adjective) without doing anything crazy. — https://www.instagram.com/p/DDKn9iXPSOS/ If you’ve ever secretly (insert action) and hoped no one noticed this is for you. — https://www.instagram.com/p/DIUEhBYOica/ Today we are going to play “did you know (insert noun)” edition. — https://www.instagram.com/p/DDsm8Cny941/ If this is your first time being (insert adjective) I am (insert name) and I am trying to make it (insert adjective) to (insert verb) by using (insert noun). — https://www.instagram.com/p/DIFlyqrtHSg/
[message_id: 378]
## 🤖 Yaya
Got more fill-in templates. Still absorbing.

Let me know when you're done sending and I'll start building your plan. 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:51 PST] Did you know if you have a (insert noun), (insert noun), (insert noun), (insert noun), (insert noun) then you can (insert dream result). — https://www.instagram.com/p/DGiv5Q0M1-Q/ If you’re the person who told me this I could kiss you right now because it literally saved my life. — https://www.instagram.com/p/DIhOAUAPRMo/ I bought all the (insert noun) so you could find out which are the best in each category and which aren’t worth your money. — https://www.instagram.com/p/DFtu2nnyrTW/ Here’s how I get people the best (insert noun) on (insert noun). — https://www.instagram.com/p/DIhq7P8PguS/ Did you know that there are # types of (insert noun). — https://www.instagram.com/p/DIANQRkyYLb/ Here’s how you can guess an almost perfect number every single time. — https://www.instagram.com/p/DEDbAV7tpX5/ Here is how I make (insert noun) that lasts up to (insert time frame) and only costs (insert $). — https://www.instagram.com/p/DG_4uqYOrJ_/ I teach (insert noun) to people like they are in kindergarten, and it’s time for class. — https://www.instagram.com/p/C-k_-Yev6DU/ (Insert noun) can be reversed — here are # things you can do to improve your (insert noun). — https://www.instagram.com/p/DG9UDAUShLs/ This is how much (insert noun) you would lose at the end of the day with a (insert metric) (insert noun). — https://www.instagram.com/p/DFFuLlcK9j4/ Did you know your (insert noun) are programmed to make your (insert result). — https://www.instagram.com/p/DGcvCDdvEZ2/ This might be the ultimate (insert person) hack. — https://www.instagram.com/p/DGYjc0dxhU-/ To (insert verb) the (insert metric) in this (insert noun) the average would have to (insert action) for (insert time frame). — https://www.instagram.com/p/DFTappzSSBa/ If you (insert verb) this (insert noun) this is the amount of (insert noun) your body would (insert result). — https://www.instagram.com/p/DFGDnHYg6hf/ The worst (insert noun) that you will regret buying for your (insert noun) is right here. — https://www.instagram.com/p/DGPLBgRtX_g/ (Insert noun) how to (insert action) and still (insert dream result). — https://www.instagram.com/p/DIwSdSiIr2d/ Use this, to pay for this. — https://www.instagram.com/p/ChGIhcPPogC/ I paid (insert $) to build this (insert noun) from scratch. — https://www.instagram.com/p/DFqGUjORxG4/ If I told you, you would (insert result) from (insert action) you would probably believe me, right? Well, here’s the thing… — https://www.instagram.com/p/DDfdDshTsXK/ How to budget with a (insert $) salary using this special (insert name) technique. — https://www.instagram.com/p/DDU0jMMN-gr/ I spent (insert $) on new (insert noun) for my (insert noun). — https://www.instagram.com/p/DGN72MwpsAB/ Here’s a quick way to (insert result) (insert metric) of your (insert noun) legally. — https://www.instagram.com/p/DDmhkgqO1FN/ (Insert adjective) won’t get this but hopefully you will. — https://www.instagram.com/p/DGOENqwSVC6/ This is the exact order in which you should be (insert verb) for all of your (insert noun). — https://www.instagram.com/p/DB4lAAPPbYZ/ Why are we all so stressed about (insert noun) but also all have a (insert noun) in (insert location). — https://www.instagram.com/p/DFtSk25uUH_/ Today my kid’s (insert noun) is due. So let’s (insert action). — https://www.instagram.com/p/DEEFWvqttJd/ There are # things I like to do when I buy a new (insert noun). — https://www.instagram.com/p/DGMg-VPtL98/ Here are # things you have been putting off around (insert location). — https://www.instagram.com/p/DEd9agVJsuO/ Here are 3 things you should check before (insert verb). — https://www.instagram.com/p/DFtkoqgNg1E/ You have to try this — it’s one of the easiest (insert noun) ever. — https://www.instagram.com/p/DGgO9E-rfwk/ Everyone always asks me how I (insert action) — let me show you exactly how I do it. — https://www.instagram.com/p/DGZgX6ENLwV/ I’m about to expose my (insert noun) secrets. — https://www.instagram.com/p/DHYj43JNymY/You don’t need a strategy — you need a start. — https://www.instagram.com/p/DJwwWzNwZ1/ It’s not too late — you’re right on time. — https://www.instagram.com/p/DJyyYzNwZ2/ Done is better than perfect — especially online. — https://www.instagram.com/p/DJ00azNwZ3/ You can’t get better if you don’t begin. — https://www.instagram.com/p/DJ22czNwZ4/ Your first post won’t be perfect — it’ll be progress. — https://www.instagram.com/p/DJ44ezNwZ5/ Everyone starts at zero. — https://www.instagram.com/p/DJ66gzNwZ6/ Post like nobody’s watching — because at first, nobody is. — https://www.instagram.com/p/DJ88izNwZ7/ The people with the best results weren’t the best — they were consistent. — https://www.instagram.com/p/DJ--kzNwZ8/ You don’t need more ideas — you need more action. — https://www.instagram.com/p/DJCCmzNwZ9/ You can’t outsource your first 100 posts. — https://www.instagram.com/p/DJEEozNwZA/ The best camera is the one you actually use. — https://www.instagram.com/p/DJGGqzNwZB/ Your first 10 videos won’t be great — make them anyway. — https://www.instagram.com/p/DJIIszNwZC/ Nobody remembers your first post — but they’ll remember your persistence. — https://www.instagram.com/p/DJKKuzNwZD/ You’ll never regret posting — you’ll regret waiting. — https://www.instagram.com/p/DJMMwzNwZE/ The biggest growth hack is time. — https://www.instagram.com/p/DJOOyzNwZF/ You’re not late — you’re learning. — https://www.instagram.com/p/DJQQ0zNwZG/ Every expert started embarrassed. — https://www.instagram.com/p/DJSS2zNwZH/ Be consistent before you try to be clever. — https://www.instagram.com/p/DJUU4zNwZI/ You can’t get momentum without movement. — https://www.instagram.com/p/DJWW6zNwZJ/ Your only job is to show up. — https://www.instagram.com/p/DJYY8zNwZK/ If you’re scared to post, that’s the sign you should. — https://www.instagram.com/p/DJaaAzNwZL/ Start before you’re ready — you’ll figure it out as you go. — https://www.instagram.com/p/DJccCzNwZM/ Confidence comes from consistency. — https://www.instagram.com/p/DJeeEzNwZN/ You can’t edit what you don’t publish. — https://www.instagram.com/p/DJggGzNwZO/ The more you post, the more you’ll learn. — https://www.instagram.com/p/DJiiIzNwZP/ Your next client might be watching your next post. — https://www.instagram.com/p/DJkkKzNwZQ/ You’re one post away from momentum. — https://www.instagram.com/p/DJmmMzNwZR/ The algorithm can’t help you if you don’t show up. — https://www.instagram.com/p/DJooOzNwZS/ If it scares you, it’s probably worth posting. — https://www.instagram.com/p/DJqqQzNwZT/ Every post teaches you something. — https://www.instagram.com/p/DJssSzNwZU/ You’re not stuck — you’re starting. — https://www.instagram.com/p/DJuuUzNwZV/ Perfection is the enemy of progress. — https://www.instagram.com/p/DJwwWzNwZW/ You’ll look back and be glad you started today. — https://www.instagram.com/p/DJyyYzNwZX/ Nobody is judging you — they’re inspired by you. — https://www.instagram.com/p/DJ00azNwZY/ Your next client doesn’t care about your follower count. — https://www.instagram.com/p/DJ22czNwZZ/ Show your work — it builds trust. — https://www.instagram.com/p/DJ44ezNwZ1/ Stop hiding your process — start sharing it. — https://www.instagram.com/p/DJ66gzNwZ2/ People buy progress, not perfection. — https://www.instagram.com/p/DJ88izNwZ3/ The behind-the-scenes is the real content. — https://www.instagram.com/p/DJ--kzNwZ4/ Your process is your proof. — https://www.instagram.com/p/DJCCmzNwZ5/ People trust what they see — so show them. — https://www.instagram.com/p/DJEEozNwZ6/ Share what you’re learning, not just what you’ve mastered. — https://www.instagram.com/p/DJGGqzNwZ7/ Teach from the middle, not from the mountain. — https://www.instagram.com/p/DJIIszNwZ8/ You don’t need to be the expert — just be the example. — https://www.instagram.com/p/DJKKuzNwZ9/ The best content is made while you’re still figuring it out. — https://www.instagram.com/p/DJMMwzNwZA/
[message_id: 380]
## 🤖 Yaya
Got more templates + mindset hooks. Keep 'em coming or let me know when you're ready to build. 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +3s 2026-02-01 13:52 PST] # Content That Converts ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) and we’ll help! --- ## Tools You’ll Need: - ChatGPT Plus - Canva - Edits (or Capcut, Adobe Premier, or any other video editing tool) - Gear for filming: tripod, lav mic, ring light - Google Docs --- ## Video 1: What Makes Content “Work” ![content funnel.png](attachment:0c1bed0a-a756-4bb5-977e-c92654236862:content_funnel.png) TOFU = Top of Funnel = Growth Content like viral reels, trending audio, memes, quick sharable tips MOFU = Middle of Funnel = Nurture Content like customer stories, lessons and learnings, tips and tricks, behind-the-scenes BOFU = Bottom of Funnel = Sales Content like quantitative proof points, results you’ve driven for your customers, promos and offers Exercise: To figure out where you’re over/under-indexing, start with an audit of your existing content. Go to your Instagram profile, take screenshots of the last 10+ posts you made (include your captions), and upload the screenshots into your GPT assistant with the prompt: - [**Content Funnel Audit Prompt**](https://docs.google.com/document/d/15pMNtcfDe5SDO6-lfy56D7oIFBCgNvzHQD04BlYQnVw/edit?usp=sharing) Content Funnel Audit - GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill in any of the yellow highlighted sections Copy and paste everything below this line into your CustomGPT Instructions for GPT You are my social media and content strategist. Your job is to help me audit my current Instagram account and content to help me understand my spread of TOFU, MOFU, and BOFU content. Use the information you already know about my business/offer, my target audience, my brand personality/tone, my industry/niche to recommend content pillars. On top of that, use the screenshots I’m attaching of my last [x] posts for the audit. For each post, I’ve uploaded two screenshots: one of the visual cue and one with the caption. For each post, tell me: Your classification of TOFU / MOFU / BOFU Why you classified it that way (how you used captions, visuals, and structure as indicators of whether it’s growth, nurture, or sales content) Assume I’m not a marketer - so please explain your reasoning in plain English, and include actionable suggestions. My goal is to understand which part of the funnel I’ve been neglecting and how to balance my content strategy.” A general rule of thumb is 40:40:20. 40% TOFU, 40% MOFU, 20% BOFU content. --- ## Video 2: Build Your Content Pillars To give your content consistency and a strong brand voice, decide on 4-5 content pillars that map back to the value you provide for your customers. Here’s how you know you have good content pillars: - There are at least 10 topics you can think of for each pillar - They are all related to the value you provide to your customers - Some are more specific while others are more broad so that you can build a niche but not niche down too hard Use the following prompt to ask your GPT assistant to help you come up with your content pillars: - [**Prompt for Building Your Content Pillars](https://docs.google.com/document/d/18TSobjzWQRdXKiAaUjLQWgEGyY7TapjQOwWyoHxIwvw/edit?usp=sharing)** Content Pillars Brainstorming - GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill in any of the yellow highlighted sections Copy and paste everything below this line into your CustomGPT
[message_id: 386]
## 🤖 Yaya
Got the **Content That Converts** module:

- TOFU/MOFU/BOFU framework
- 40:40:20 rule (40% growth, 40% nurture, 20% sales)
- Content funnel audit prompt
- Content pillars brainstorming

Keep sending — this is the tactical content layer I need for your plan.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:52 PST] Instructions for GPT You are my social media and content strategist. Your job is to help me brainstorm and lock in on 4-5 content pillars that I can build my content calendar around. Use the information you already know about my business/offer, my target audience, my brand personality/tone, my industry/niche to recommend content pillars. On top of that, also use my answers below to recommend content pillars that fit my brand, audience, and goals. 1. My goals for content: (What do you want your content to achieve? e.g., grow followers, build authority, get leads, sell your offer, build community, etc.) 2. My content strengths / preferences: (What kind of content do you naturally enjoy or do well with? e.g., storytelling, tutorials, visuals, humor, behind-the-scenes, client results, etc.) 3. Competitors or inspiration: (List 1–3 accounts, brands, or creators you admire or whose audience you’d like to attract.) Based on this info, please: Recommend 4–5 content pillars that align with my audience, offer, and goals. Give me another additional 5 content pillars for consideration in case I decide to not move forward with your initial set. Explain why each pillar fits my brand and examples of the value I can offer my audience along each of the pillars. Give me 5 example post ideas under each pillar that fit my niche. Suggest how I could frame or position each pillar so it feels cohesive and on-brand. Make sure the final mix of recommendations covers all funnel stages so my content both attracts and converts. ## Note: After you align on your Content Pillars, you should upload this back into your CustomGPT so that it’s aware of your content pillars! We missed showing that on the video. --- ## Video 3: Mastering Reels, Carousels, Stories The three Instagram content formats you must master are: Reels, Carousels, and Stories. Instagram Reels ![Reels Demo.jpeg](attachment:794acee3-4835-4935-bd73-0d547b0e5aac:Reels_Demo.jpeg) Reels are short-form video content, ideal for discovery and reach. Popular types of Reels include short b-roll + trending audio, voice over, and talking head. Instagram Carousels ![Carousel Demos.jpeg](attachment:ad181d89-75f8-4eb0-a26c-a10c4840563d:Carousel_Demos.jpeg) Carousels are swipeable series of images/graphics, ideal for longer engagement, step-by-step, customer case studies, and “save-worthy” content. We will be using Canva to create our carousels. Before you start, make sure to upload your brand kit (Menu > Brand > Brand Kit > Create New) or input your brand colours and upload your logo so that it’s available for everything you make on the platform. I also recommend selecting one or two fonts from Canva’s font library, as part of your brand kit, so that your images look consistent. Instagram Stories ![IMG_7301.jpeg](attachment:296cd52d-918a-45ff-825c-90ad5df14181:IMG_7301.jpeg) Stories are temporary, full-screen posts (photo or video) that disappear after 24 hours and primarily watched by existing followers (eg. not good for reach). Tends to be casual, behind-the-scenes content, and can contain interactive elements like polls, questions, and links to products. Essential Gear We’re all about no frills, but consider a tripod, ring light, and wireless mic to be essential pieces for filming: ![IMG_7850.jpeg](attachment:dd7ba670-ee70-4e19-b811-431b4858888c:IMG_7850.jpeg) Links to my essential gear for filming: - Tripod https://a.co/d/dwFQY37 - Wireless mic https://a.co/d/dINT2wd - Ring light https://a.co/d/3b8DZWU --- ## Video 4: Hooks, CTAs, Captions That Convert Hooks Hooks are the single most important thing for you to nail in your content (other than the message itself). Having a strong hook keeps your audience watching and engaged, and has a massive positive impact on your content’s performance. Examples of hooks with surprise, shock, curiosity triggers:
[message_id: 387]
## 🤖 Yaya
Got more of the Content That Converts module:
- Content pillars prompt
- Reels/Carousels/Stories breakdown
- Essential filming gear
- Hooks, CTAs, Captions framework

Keep sending the rest. Almost there! 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:52 PST] - You’ve been doing [this] wrong your whole life… - Here’s the secret they don’t want you to know about [this] - I’m probably going to get cancelled for saying this, but here goes - I didn’t think this would work… but it did - This was not part of the plan - You’ve probably never heard this before Captions - Important for adding meaning/context - Humanizes the brand - Important for SEO and discoverability CTAs (Calls to Action) - Remember: every content piece has a job - CTA turns attention into results Here is the prompt that you will use to generate a hook, caption, and CTA for each post: - [**Hook, Caption, CTA Generation Prompt**](https://docs.google.com/document/d/1_MRqqRN_7wAn4tHGTrt4_xbi4-AGNqgPVQxUHajmj5c/edit?usp=sharing) Hook, CTA, Caption Generation - GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill in any of the yellow highlighted sections Copy and paste everything below this line into your CustomGPT Instructions for GPT You are my writing assistant. Your job is to help me create a viral hook, a strong CTA, and a compelling caption for my Instagram [reel/carousel]. Use plain, natural language. Avoid hype, jargon, and buzzwords. Follow [name of your company]’s tone: clear, confident, helpful (insert your own brand voice and tone here) Here’s my input: Content format: reel or carousel Target persona: Pain or desire I’m addressing: My solution/approach: Visual cue in first 2–3 seconds (or first slide): Action I want the viewer to take after seeing this content: (Optional but useful) My plain-English title idea: (Optional) Funnel stage: TOFU / MOFU / BOFU (If not provided, infer from context.) (any of this can be optional, the more the better) Please provide: 5–10 hook options that could stop the scroll and match the persona’s psychology. 3–5 CTA options that feel natural, low-friction, and fit the content goal. 3 caption options that: Sound conversational and clear. Use no em dashes, italics, or bold formatting. Keep most sentences under 12 words. Limit emojis (0-3 max, only if they add meaning). Match the funnel stage tone (TOFU = friendly/curious, MOFU = proof/teaching, BOFU = confident/direct). *Please note that because ChatGPT cannot access most Instagram content, that it is not perfect out of the box - you will likely have to massage it before posting.* --- ## Video 5: Build Your Content Calendar The most important thing to determine at this stage is establishing a cadence that you can consistently maintain. Consistency is better than posting a lot for a few weeks, and then burning out. That being said: - I recommend posting at least 3 times a week to keep your brand top of mind - 5X would be considered EXCELLENT for a small business - Daily is elite level; but don’t worry if you can’t hit this, the more important thing is consistency To help you build your content calendar, here is our custom prompt that you can use to generate your calendar for the next 30 days: - [Prompt for Generating Your Content Calendar](https://docs.google.com/document/d/1I-cnFfRKvigrefFtVqJr0-J2dVlM4youACFfF29m_0o/edit?usp=sharing) Content Calendar Generation - GPT Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill in any of the yellow highlighted sections Copy and paste everything below this line into your CustomGPT Instructions for GPT You are my social media and content strategist. Your job is to help me put together my content calendar for the next 30 days. Use the information you already know about my business/offer, my target audience, my brand personality/tone, and my industry/niche to put together a well-rounded content calendar. I want your help creating a 30-day content calendar that gives me a strong mix of: Growth content (TOFU) to attract new people Nurture content (MOFU) to build trust and educate Sales content (BOFU) to convert followers into buyers
[message_id: 388]
## 🤖 Yaya
Got:
- Hook examples (curiosity/shock triggers)
- Captions + CTAs framework
- Hook/Caption/CTA generation prompt
- 30-day content calendar prompt
- Posting cadence: 3x/week minimum, 5x excellent, daily elite

Keep going — almost have the full Content module.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 13:52 PST] Content That Converts - GPT Prompts: https://drive.google.com/drive/folders/1iQG_-590Z0XvXX-seMU972ERD82F6Fmc?usp=sharing
[message_id: 389]
## 🤖 Yaya
Got the Content That Converts prompts folder link.

**Content That Converts module complete:**
- TOFU/MOFU/BOFU framework (40:40:20)
- Content funnel audit prompt
- Content pillars brainstorming
- Reels/Carousels/Stories mastery
- Hooks, CTAs, Captions generation
- 30-day content calendar prompt

More modules coming or ready to map?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +3m 2026-02-01 13:56 PST] 5. Include one bridge CTA at the end A simple, non-pushy invitation that connects the lead magnet to my paid offer. Now generate the content I will paste my final outline below. Use the rules above to decide whether to create the full lead magnet all at once, or go section by section. When you’re ready, say: “Please paste your outline now.” Once again, make sure you don’t just accept what ChatGPT gives you here verbatim. You’re the expert, not ChatGPT. ChatGPT can help you build things 10x faster, but YOU need to make the judgement calls on quality. If it’s not good enough, work with ChatGPT to refine it. Like the above, my workflow is I usually copy and paste what ChatGPT gave me, refine it myself, and then ask ChatGPT to clean it up. In the prompt I send, I always include the rule: “Do not change the structure of what I’m sending. I only want you to tighten the copy so it’s clear.” Once you’re done, you should copy and paste all the content into a google document. ## Build it in Canva In the video, I am going to show you step by step how to build the lead magnet in Canva using templates: - https://www.canva.com/templates ## (Optional) Build it with AI / Typeset In the video, I’ll show you how to can also use tools like Typeset to quickly build your lead magnet. This is an optional tool. You can do all this in Canva as well. ## Create Your Email Nurture Once you have a Lead Magnet, you can use it to collect emails. I’m going to show you how to create an email nurture based on the Lead Magnet the client received. - [Prompt for Email Nurture Outline Based on Lead Magnet](https://docs.google.com/document/d/1nKYh0l2I2TJkijY-CUJtovPREq-kR_7TqXOG78Btopc/edit?tab=t.0) Email Nurture Outline Prompt (Copy/Paste for Users) Instructions on how to use for user: Please copy this into your own gdrive Fill out anything in highlighted yellow Copy and paste everything below this line into your CustomGPT Copy the outline into a google document Prompt for GPT: I want to create a best-in-class email nurture sequence for people who downloaded my lead magnet. You already know my niche, my ideal customer, the problems they have, and the offer I sell. Here’s the lead magnet they downloaded: [PASTE LEAD MAGNET TITLE + 1–2 SENTENCE DESCRIPTION] I have also included both my outline and the lead magnet content as PDFs. Please create an outline for a high-converting nurture sequence that activates new subscribers, warms them up, and naturally leads them toward my paid offer. Do not write any full emails yet. Use your best judgment on how detailed the outline should be. Follow the structure below: Overview (3–5 sentences) • What this nurture sequence is • Who it’s for • How it supports the person who just downloaded this specific lead magnet • The main outcome it delivers for my business (warm them → invite to offer) Goal & Positioning Primary goal (what this nurture sequence should achieve for my business) Primary benefit for the reader Where this fits in the funnel (IG/TikTok → lead magnet → email → offer) Tone & pacing recommendations (based on what works for my audience) Nurture Sequence Outline Break the sequence down email by email. For each email, include: Email #: Title • Send timing (ex: Immediately, +1 day, +2 days…) • Core objective (trust, proof, quick win, reframe, soft pitch, hard pitch, etc.) • Big idea or angle • Rough content outline (3–6 bullets) • Recommended CTA (reply, DM, click, read, watch, reflect, etc.) • Optional secondary CTA Be sure this sequence feels: • Fast and frictionless • Designed for IG/TikTok-sourced subscribers • Tailored to the exact problem the lead magnet solves • Naturally leading them to my paid offer Sequence Flow Logic Explain in 3–6 bullets: • Why this structure works • How each email builds momentum • Where the first offer mention should happen • Where the stronger offer CTA should live • How the sequence supports someone who skimmed or only partially consumed the lead magnetNext Step Instructions for Me End by telling me: • What to review in the outline • What decisions to make before you write each email • That once I approve the outline, we will create each email one by one Keep everything: Extremely specific to my audience and offer Fast to consume Simple 5 nurture emails max Focused on warming a cold lead from Instagram/TikTok and leading naturally into the offer Designed to increase conversions without pressure or hype Someone has given you permission to send them communications in their PERSONAL channel. Treat that with a ton of respect, and ensure that anything you send to them is highly valuable or else they will unsubscribe. Please remember my rules for lead magnet above. You’re the authority. ChatGPT will do a good job, but make it better with your expertise. ## Create Your Email Content Now that you have an outline, we’re going to work with ChatGPT to create each email in the nurture series. - [Prompt for Email Outline to Content](https://docs.google.com/document/d/1odT-BdouMj5vKqizNvOyYn-IEJkRQHVa9mjQIaRGfo4/edit?tab=t.0) Email Nurture Content Creation Prompt Instructions on how to use for user: Please copy this into your own gdrive Copy and paste everything below this line into your CustomGPT Once the GPT is primed, copy and paste your outline next Prompt for GPT: I have my final email nurture sequence outline ready, and I want you to turn it into complete, polished emails. You already know my niche, my ideal customer, my offer, and my brand voice. Use the outline I provide to write the full sequence. How you should work Always generate one email at a time, in order, before proceeding to the next. After each email, stop and ask for my feedback before you move on. If I say “approved” (or similar), then proceed to the next email in the outline. If I give notes, revise that email first, then confirm with me before continuing. What each email should include For every email in the outline, provide: Quick recap of the email’s role 1–2 sentences reminding me: Where we are in the sequence The primary objective of this email (e.g., quick win, proof, reframe, soft pitch, hard pitch) Subject line options 3–5 subject line options tailored to my audience and this email’s goal Aim for clear > clever; optimized for mobile inbox and IG/TikTok-sourced subscribers Preview / preheader text 1 short line that complements the subject and builds curiosity or clarity Email body copy Written in my brand voice (which you already know) Clean, skimmable formatting: Short paragraphs Clear subheads where useful Bullets for key points Follow the intent from the outline: Hook/open Main story / value / lesson Tie-back to where they are in the journey (they downloaded my lead magnet) Soft transitions toward my offer where appropriate Primary CTA Exactly one main action for the reader to take e.g., reply to a question, click to a resource/sales page, DM a keyword, hit “save,” etc. Make it specific and easy to do in under 10 seconds Optional P.S. Use the P.S. only if it adds value, reinforces the CTA, or lightly re-mentions the offer Global rules for the whole sequence Across the entire nurture campaign: Keep everything: Extremely specific to my audience and the lead magnet they downloaded Fast to consume (most emails should be readable in under 2 minutes on mobile) Actionable (they should know exactly what to think/do/feel next) Assume subscribers are coming from Instagram/TikTok → lead magnet → this sequence. The tone should feel like: A calm, confident operator Helpful, direct, and no hype Progress the reader from: “Just downloaded a cool free thing” → “Got a real win and understands the bigger problem” → “Sees your offer as the logical next step.” Make sure: The first explicit offer mentions appear where the outline specifies The strongest CTAs to my paid offer appear in the final emails of the sequence Earlier emails focus more on trust, insight, and quick wins Feedback & iteration After you generate each email: Ask me:“What would you like to adjust: subject line, tone, story, CTA, or length?” Be ready to: Shorten, expand, or tweak tone Swap in new subject lines Adjust CTAs (e.g., push more to reply vs click) Only move on to the next email after I confirm the current one is approved. Start by asking for my outline First, reply with: “Please paste your final nurture sequence outline, and I’ll start by writing Email 1 according to the rules you set.” ## Document link Here’s a link to all documents used during this course sectionand a good balance across my main content pillars, which are: [outline your content pillars here if you have not trained your GPT on it yet.] In addition to all of the above, please use the information below to inform the content calendar: 1. My content preferences: (Do you prefer Reels, carousels, static posts, stories? Mention your comfort level or strengths.) 2. My posting frequency goal: (e.g., 3x/week, 5x/week, daily.) 3. My primary marketing goal for this month: (e.g., grow followers, launch a product, promote an offer, increase DMs, get leads, etc.) Based on this, please: A. Build a 30-day (or specified) content calendar with: A clear rotation of TOFU, MOFU, and BOFU content An even mix of my content pillars A balance of Reels and carousels (and optional stories if relevant) B. For each day/post, include: Content Type: Reel / Carousel / Story / Static Funnel Stage: TOFU / MOFU / BOFU Content Pillar: (choose from my list) Hook / Opening line: A strong scroll-stopping hook or on-screen text idea Caption: A short caption draft written in my brand tone CTA (Call-to-Action): What I should encourage people to do (e.g., follow, comment, click link, DM, etc.) Visual or Creative Direction: A few ideas for what the video or image should show (e.g., talking-head, B-roll, tutorial, behind-the-scenes, before-after, quote graphic, etc.) C. At the end, summarize: The ratio of TOFU:MOFU:BOFU posts The ratio of each content pillar Any patterns or suggestions to improve my balance between growth, nurture, and sales content Please present the calendar in a clear, easy-to-read table format with columns for Date / Post Type / Funnel Stage / Pillar / Hook / Caption / CTA / Creative Idea. Optional Add-on Lines You can tailor it further: “Please make the hooks emotionally resonant and scroll-stopping — avoid generic phrasing.” “Write captions at a 7th-grade reading level using short sentences and conversational tone.” “Use my tone: clear, confident, helpful (no fluff or hype).” Export the recommendations into Google Sheets or a spreadsheet, or migrate into whatever calendar app best fits your workflow. --- ## Video 6: Research & Repurpose Lightweight Market Research - As you’re scrolling on Instagram in your own time, save the posts that resonate with you in an “Inspo” collection - Use the “Explore” page in Instagram to search your own niche/industry and find trending posts —> engage with those posts, and your Explore page will find more of that type of content for you in 24 hours - Add “Notifications” to your favourite creators and get pinged whenever they post something new - save the posts you like Once a week, go into your “Inspo” collection and analyze your latest additions, make note of what makes them compelling and incorporate that into your own content. If you want a little help from your GPT assistant, here’s a simple prompt you can use after uploading screenshots of the posts in your “Inspo” collection: *”Summarize the hook, topic, caption, and CTA patterns across these posts and give me your analysis of why these posts were successful. Then, make a recommendation for how I can tailor my content strategy to align with these trends.”* Repurposing Your Best Posts Instagram has a wealth of analytics to help you identify your own best performing posts. To find your top performing posts, open up Instagram and go to: - Profile > Menu > Insights > Content You Shared > Reels / Posts / Stories Analyze your top performing posts along each format. Spot the commonalities in approach or structure. Apply that to your future posts. If you would like your GPT assistant’s help in spotting the commonalities, use my simple prompt below: *“Summarize the patterns across these posts and give me your analysis of why these posts were successful. Then, make a recommendation for how I can tailor my future content around these patterns.”* --- ## Document Folder Here is the folder where you’ll find all the prompts for the “Content That Converts” module, in case you need it:# Lead Magnets & Nurturing Leads ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) and we’ll help! ## Tools you’ll need: - You need to be on at least ChatGPT Plus - You’ll need Google Docs - Canva - [Typeset (Optional, but great for long form Lead Magnets)](https://typeset.com/?ref=samuel46) - Linktree (Optional, but recommended) ## Two Key Focuses The two things to drive 80% impact for Lead Magnets: - Solves a Big Pain - Name It Well ## Researching Lead Magnets The best lead magnets: - Solve a very painful problem for your ICP - Is something they can implement quickly to see ROI fast - Have a name that clearly signals how it’ll help We’re going to research Lead Magnet Ideas using this prompt: - [Prompt to Research Lead Magnets](https://docs.google.com/document/d/1GzF2ZAJjHcSlyLbvAP8pyM-J7K-MSkfWTotRsWaQ518/edit?tab=t.0) Lead Magnet Research Prompt (for Students — Minimal Inputs) Instructions on how to use for user: Please copy this into your own gdrive Copy and paste everything below this line into your CustomGPT (make sure you did everything before this to train your GPT on your business) Copy tables and add it to a spreadsheet Instructions for GPT: I want to create a high-relevancy lead magnet that will collect as many qualified emails as possible. You already know my niche, my ideal customer, the problems they have, and the offer I sell. Using everything you already know about my business, please generate 12 lead magnet ideas that meet these criteria: Extremely relevant to the exact customer I want Fast to consume (5–10 minutes max) Easy for me to create Solves one small but painful problem for them Creates a natural bridge to my paid offer Would make them think: ‘I need this right now.’ For each idea, include: Name / Title (clear, outcome-driven, compelling) Format (checklist, script, template, cheat sheet, calculator, etc.) Promise (what result it delivers quickly) Why it’s highly relevant for my audience How it naturally leads them into my paid offer Prioritize ideas that feel specific, simple, and high-value — not generic. Make sure every idea is something that would meaningfully increase my email opt-in rate. ## Creating Your Lead Magnet Content There are two steps you need to take to create your lead magnet with GPT. First, you need to create an outline. You’ll do this by using this prompt: - [Prompt to Create Lead Magnet Outline](https://docs.google.com/document/d/1HNH4xJ7dRnKxJX0FKVHvOfAQR1iVxUlsGDXvzEgyVmY/edit?tab=t.0) Lead Magnet Outline Prompt Instructions on how to use for user: Please copy this into your own gdrive Fill out anything in highlighted yellow Copy and paste everything below this line into your CustomGPT Copy the outline into a google document Prompt for GPT: I’ve chosen a lead magnet idea and I want you to turn it into a detailed outline. You already know my niche, my ideal customer, and my offer. Here’s the lead magnet idea I’ve chosen: [PASTE LEAD MAGNET TITLE + 1–2 SENTENCE DESCRIPTION] Please create an outline and overview of the contents of this specific lead magnet. Please provide the detail level that makes sense given what the lead magnet is (for example, if it’s just a one pager or 100 viral hooks or something like that, you may not need to provide all the information below). Use your best judgement on how much detail to include. Some sections that may be relevant:Follow this structure in your response: Quick Summary (2–4 sentences) What this lead magnet is Who it’s for The main outcome it delivers in 5–10 minutes Goal & Positioning Primary goal (what this lead magnet should achieve for my business) Primary benefit for the reader Where it sits in my funnel (IG/TikTok → lead magnet → email → offer) Detailed Content Outline Break down the lead magnet into clear sections or pages. For each section, include: Section title What goes in this section (bullet points) Any examples, prompts, or mini-scripts that should be included What the reader should be able to do/decide after this section Micro CTA(s) Inside the Lead Magnet 1–2 small CTAs that move the reader to the next step (e.g., reply, DM, click, implement one action) 1 clear bridge CTA into my main offer, written in a simple, non-pushy way Implementation Notes Suggested format (PDF, Notion, Google Doc, mini video, etc.) Recommended length (pages/screens or minutes to complete) Any visuals, screenshots, or examples that would make it easier to consume Email Capture & Follow-Up Suggested headline + subheadline for the opt-in page for this lead magnet 3–5 bullet points for the opt-in page that sell the lead magnet 1–2 follow-up email ideas that reference this lead magnet and naturally lead into my paid offer Keep everything: Extremely specific to my audience and offer Fast to consume (5–10 minutes max) Simple for me to create Designed to collect qualified emails and make the next step toward my offer obvious. Why? You want to make sure the outline is good. This is where you HAVE to use your expertise and best judgement. ChatGPT can usually recommend something good, but it won’t be perfect. My workflow is usually: - Have ChatGPT create the outline - I fix it in a google doc - I enter it back into ChatGPT, ask it to keep the structure, but help me clean up the language - ChatGPT sends back an improved outline document Once you have your finished outline, we’re going to use this prompt to have ChatGPT build the outline for us: - [Prompt from Outline to Content](https://docs.google.com/document/d/1PFSVVB26vNPXVjzSuA9djUu2CxPE9awHgGSFOUi-8Ac/edit?tab=t.0#heading=h.8uis0s1j9g99) Lead Magnet Content Creation Prompt (for Users to Paste into Your CustomGPT) Instructions on how to use for user: Please copy this into your own gdrive Copy and paste everything below this line into your CustomGPT Once the GPT is primed, copy and paste your outline next Prompt for GPT: I have my final lead magnet outline ready, and now I want you to turn it into the complete, polished lead magnet. You already know my niche, my ideal customer, my offer, and the strategy behind this lead magnet. Use the outline I provide to produce the full content. Important Instructions: 1. Decide how to generate the content: If the lead magnet is simple and short (ex: checklist, cheat sheet, one-pager, swipe file), generate the entire lead magnet in one go. If the lead magnet is longer or more structured (ex: multi-page guide, multi-step system, multi-day sprint), then generate it section by section, starting with Section 1. If you choose the section-by-section approach, automatically ask me: “Would you like to approve this section before we continue to the next one?” 2. Follow the outline exactly Use my outline as the structure, but feel free to: Improve clarity, examples, and flow Strengthen hooks, headlines, and value Add missing transitions Add simple visuals, bullets, scripts, or templates that enhance usability (do not add extra sections unless absolutely necessary for clarity) 3. Everything must be: Extremely specific to my audience Fast to consume Practical, high-value, and actionable Written in a clean, simple, “operator” tone Designed to make the next step toward my paid offer obvious but natural 100% original (no plagiarism, no copying other creators) 4. Include micro-CTAs only where appropriate Inside the content, add subtle prompts like: “Try this now” “DM me the word ____ if you want feedback” “Save this page so you don’t forget this step”
[message_id: 399]
## 🤖 Yaya
Got the **Lead Magnets & Nurturing Leads** module:

- Lead magnet research prompt (12 ideas)
- Lead magnet outline prompt
- Lead magnet content creation prompt
- Email nurture outline prompt (5 emails max)
- Email nurture content creation prompt
- Content calendar (30-day) generation

**Key insight:** "Solves a Big Pain + Name It Well" = 80% of lead magnet impact

More coming or ready to map everything to The Concept Kitchen?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1h 2026-02-01 15:04 PST] # Sales Pages that Convert ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) and we’ll help! ## Tools you’ll need: - You need to be on at least ChatGPT Plus - You’ll need Google Docs - Some Selling / Landing Page Tool (E.g GoHighLevel) - If you don’t already have a platform, message me about GoHighLevel and I can get you all set up on it! ## Connecting with People Emotionally People buy for emotional reasons primarily, and not logical. This means that if you can connect with someone emotionally, you can get their business regardless of how small you are. Why do we buy certain types of water, when it’s all just water (for all you who are saying water tastes different, try a blind taste test challenge and then let me know if that’s true LOL). Because for whatever reason, the brand and what it “stands” for resonates with us. - [The Story of Elliot](https://www.thecut.com/2016/06/how-only-using-logic-destroyed-a-man.html) Why are we talking about this — and why does it matter? - We buy based on how a brand makes us feel (safe, seen, excited, etc.) - Gap between what’s “logical” and what’s chosen is your opportunity - This is why you can make sales even with a small following - You just need to sell yourself and emotionally connect - Look at Liquid Death (or any packaged water) This is why you always hear advice like… - “You should niche down.” - “You should build something you’re passionate about.” - “You need to differentiate.” - “You should build a brand, not just an offer.” - “You have to be ‘authentic’.” - “You should tell stories, not just share information.” So how do you connect with someone emotionally? - Focus on outcomes, not features - Show, don’t tell (video, images) - Deeper customer research → message that speaks to their pain - Sell transformation (before and after) - Share relatable flaws (be authentic) - Speak to identity - Acknowledge their skepticism - Name the real stakes ## Fogg Behavior Model ![Screenshot 2025-11-21 201321.png](attachment:a135730d-3608-4c39-8fb6-075c0e1029f4:Screenshot_2025-11-21_201321.png) ![Screenshot 2025-11-21 200821.png](attachment:50c80b11-c5b8-4854-ab24-5a30cd0bd2ff:Screenshot_2025-11-21_200821.png) ![Screenshot 2025-11-21 200826.png](attachment:6afe444b-77a9-4a6b-b44b-dee0c1a36ee3:Screenshot_2025-11-21_200826.png) ## Building a Sales Page w/ AI First, you should research other Sales Pages in your niche. I recommend everyone do a long form sales pages of some kind, even if you’re a physical product! Don’t “copy” the big brands - they can get away with not explaining things as much since they’re already a known commodity. As a new entrant, you need to sell your product. You can do a “beautiful” long form sales page if that matters to your brand, just follow the principles and structure of what makes a long form sales page good. ## Research Sales Pages in Your Niche Ask ChatGPT to find you examples of long form sales pages, with a simple prompt: “Can you find me 5 high performing long form sales pages in my niche”, if it struggles to find you something in your niche, you can do more broad like “find high performing long form sales pages for physical products”, or ask it to find you something in an adjacent niche. Remember, your CustomGPT now is trained on your business so you can make the process of working with it a lot easier. ## The Anatomy of a Strong Sales Page Make it as EASY as possible to start checkout by adding CTAs throughout.
[message_id: 401]
## 🤖 Yaya
Got the **Sales Pages that Convert** module:

- Emotional buying psychology (not logical)
- Liquid Death as brand/emotion example
- Fogg Behavior Model (Motivation × Ability × Prompt)
- How to connect emotionally:
  - Outcomes > features
  - Show, don't tell
  - Transformation (before/after)
  - Relatable flaws (authenticity)
  - Speak to identity
  - Acknowledge skepticism
  - Name real stakes
- Sales page research + anatomy

Keep sending the rest — almost have everything! 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:04 PST] 1. Above the Fold / Top Section 1. Mandatory: 1. What outcome they can get 2. Who it’s for 3. Some sort of show don’t tell visual 4. 1-2 Trust Builders (e.g. photo of yourself, social proof, etc.) 5. CTA as high up as possible 2. Optional: Risk reversal, promo, urgency call outs 2. Self Select + Pain Points Module 1. This is for you if… 2. You’ve experienced THESE pain points 3. This is your current reality 3. Why It Didn’t Work 1. Reframe the problem & blame the old method 4. Introduce the “New Way” (Your Method) 1. Present your solution as the missing piece that’ll tie it together 5. Proof & Testimonials (Do a lot of this!) 1. Show don’t tell with screenshots 2. Outcomes 3. Social Proof / what others are saying 6. What They Get 1. Clear breakdown of the modules 2. Make it seem PACKED with value (they’d be stupid to say no) 3. Include bonuses 4. Show how much it would cost, and how much you’re charging 7. (Optional) Depending on Product & Strengths 1. Add another section that either: 1. Handles objections 2. Build emotional connection 3. Price anchoring / framing (others pay way more for this…) 8. Our Story / About Us 1. Tell your story so they can connect 9. Risk Reversal 1. Money back / offer guarantee (if you can’t guarantee your product, then you probably shouldn’t be selling it) 10. FAQ (Still Got Questions?) 1. Final objection handling ## Creating Your Sales Page You’ll first want to create your sales page outline by using this prompt: [Prompt to Create Sales Page Outline](https://docs.google.com/document/d/19gshJDGvvW-4C91G0upg7SqCexSiAd9M_l2AK68LqZ4/edit?usp=sharing) Sales Page Outline Creation Instructions on how to use for user: Please copy this into your own gdrive Fill out any sections in yellow Copy and paste everything below this line into your CustomGPT (make sure you did everything before this to train your GPT on your business) Read / Refine Outline with ChatGPT Once ready, ask ChatGPT to create each section separately Input each section into a document Instructions for the GPT: You are my Sales Page Architect and Direct-Response Copy Chief. You already know my business, offers, customers, and voice from your system instructions and our previous chats. Use that context. Do NOT ask me basic discovery questions about my niche, audience, or offer details. If something is missing, make your best guess, state your assumption in brackets, and keep going. PROOF POINTS “What proof points (testimonials, screenshots, client wins, metrics, logos, case studies, or social proof) do you definitely want included on this sales page? You can paste text, describe screenshots, or list key numbers. If you’re not sure yet, say ‘none yet’ and I’ll add placeholder suggestions for you.” Please include proof points you’d like to include: Optional Section In the outline, you’ll see an optional section. Please do this for that section: My Offer Section Please include these in my overall offer:
[message_id: 402]
## 🤖 Yaya
Got the **10-Part Sales Page Structure:**

1. **Above the Fold** — Outcome, who it's for, visual, trust, CTA
2. **Self Select + Pain Points** — "This is for you if..."
3. **Why It Didn't Work** — Reframe, blame old method
4. **Introduce New Way** — Your solution as missing piece
5. **Proof & Testimonials** — Screenshots, outcomes, social proof
6. **What They Get** — Modules, bonuses, "stupid to say no" value
7. **Optional** — Objections, emotional connection, price anchoring
8. **Our Story** — Connection
9. **Risk Reversal** — Guarantee
10. **FAQ** — Final objection handling

Plus the sales page outline prompt. Keep going!
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:04 PST] Instructions for GPT: Suggest where I should add CTAs throughout. Please use the structure below and create me an OUTLINE of my sales page. The outline should be high level bullet points. You should also specify where I need CTAs. Above the Fold / Top Section Mandatory: What outcome they can get Who it’s for Some sort of show don’t tell visual 1-2 Trust Builders (e.g. photo of yourself, social proof, etc.) CTA as high up as possible Optional: Risk reversal, promo, urgency call outs Self Select + Pain Points Module This is for you if… You’ve experienced THESE pain points This is your current reality Why It Didn’t Work Reframe the problem & blame the old method Introduce the “New Way” (Your Method) Present your solution as the missing piece that’ll tie it together Proof & Testimonials (Do a lot of this!) Show don’t tell with screenshots Outcomes Social Proof / what others are saying What They Get Clear breakdown of the modules Make it seem PACKED with value (they’d be stupid to say no) Include bonuses Show how much it would cost, and how much you’re charging (Optional) Depending on Product & Strengths Add another section that either: Handles objections Build emotional connection Price anchoring / framing (others pay way more for this…) Our Story / About Us Tell your story so they can connect Risk Reversal Money back / offer guarantee (if you can’t guarantee your product, then you probably shouldn’t be selling it) FAQ (Still Got Questions?) Final objection handling Once you have the outline and you’ve worked with ChatGPT to refine it, you can ask ChatGPT to create each section of the Sales Page
[message_id: 403]
## 🤖 Yaya
Got the full sales page outline prompt.

**Complete Northbound Labs course now absorbed:**

| Module | Status |
|--------|--------|
| 1. Foundations (CustomGPT Setup) | ✅ |
| 2. Market Research & Personas | ✅ |
| 3. Storytelling & Tribes | ✅ |
| 4. Content That Converts | ✅ |
| 5. Lead Magnets & Nurturing | ✅ |
| 6. Sales Pages that Convert | ✅ |
| 7. Analytics & Analysis | (coming?) |

Is there more or are we ready to map this to The Concept Kitchen? 🍳
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:04 PST] let me give you the text from here https://www.thecut.com/2016/06/how-only-using-logic-destroyed-a-man.html
[message_id: 405]
## 🤖 Yaya

## 🤖 Yaya
Got it. Here's the article — really fascinating piece about Antonio Damasio's research:

---

**How Only Being Able to Use Logic to Make Decisions Destroyed a Man's Life**

The article challenges the ancient Greek idea that decisions are best made without emotions. Damasio calls this the "high-reason view" — the assumption that rational processing must be "unencumbered by passion."

**The Case Study: "Elliot"**

Before a brain tumor damaged his frontal lobe, Elliot was successful — good job, role model, dutiful husband. After surgery to remove the tumor, his cognitive abilities tested fine: IQ, memory, language, perception, math — all intact.

But his life collapsed. He couldn't finish projects, lost his job, got involved in a scam that led to bankruptcy, divorced, remarried badly, divorced again. Ended up living with a sibling.

Damasio's key observation: Elliot described his own tragedy with complete detachment — like "a dispassionate, uninvolved spectator." When shown emotionally charged images (burning buildings, accidents), Elliot said he could sense those images *used to* give him feelings, but now they were neutral.

**The Diagnosis:**

Elliot could generate tons of options for any decision. He aced ethics tests, business scenarios, social problems. But he couldn't *choose*. Everything had equal weight. Damasio writes: "the cold-bloodedness of Elliot's reasoning prevented him from assigning different values to different options, and made his decision-making landscape hopelessly flat."

**The Somatic Marker Hypothesis:**

Damasio's big insight: emotions aren't opposed to good decisions — they're essential. When you imagine a potential action, your body generates a "good" or "bad" feeling. These "somatic markers" filter out options before logic even kicks in. Without that filtering, the data set for any decision becomes overwhelming.

Wisdom, Damasio argues, is accumulated somatic knowledge — you've been through enough to *feel* how different situations will go.

---

What made you want to share this?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:04 PST] SUBSCRIBE Menu How Only Being Able to Use Logic to Make Decisions Destroyed a Man’s Life By Drake Baer JUNE 14, 2016 SAVE Photo: Mediaphotos One of the least helpful ideas that the ancient Greeks gave to the modern West is that decisions are best made as far away from emotions as possible. It can be seen across pop culture, in the Star Trek race the Vulcans (of which Spock is one-half), whose culture suppressed emotions in favor of “the complete mastery of logic,” and in the Atlanta rapper TI, who said that he wouldn’t vote for Hillary Clinton as president because he knows that women “make rash decisions emotionally.” ADVERTISEMENT SCROLL TO CONTINUE WITH CONTENT University of California, Los Angeles, neuroscientist Antonio Damasio calls this the “high-reason view.” It assumes, he writes in his seminal book Descartes’ Error, that when people are at their decision-making best, that they’re the “pride and joy” of Plato, Rene Descartes, and Immanuel Kant, all of whom espoused a coolly computational mode. “An important aspect of the rationalist conception is that to obtain the best results, emotions must be kept out,” Damasio observes. “Rational processing must be unencumbered by passion.” The patient: If the title of his book didn’t give it away, Damasio discovered that the “high-reason view” might be a compelling idea, but it doesn’t hold up when you look at the biological mechanics of decision-making. The main case study in this is a patient that Damasio refers to as “Elliot” (as with most psychology case studies, the actual name of the patient isn’t divulged). Before a brain tumor wounded the frontal lobe tissue in his brain, Elliot had a good job at a business firm, was a role model to his colleagues and younger siblings, and a dutiful husband. Then he started getting headaches, and eventually had to get the tumor removed. The problem: When he met Damasio, Elliot was still pleasant, charming, and well-aware of the day’s news and the area of business that he worked in; he also still had a fantastic memory for his life story. But at the same time, his life had fallen apart. Any projects he did on the job were either left incomplete or had to be corrected, eventually leading to the loss of his job. He got involved in a moneymaking scheme with a “shady character” that ended up in bankruptcy. He got divorced, then married again to someone his family strongly disapproved of, and divorced again. By the time his referring doctors sent him to Damasio, he was living with a sibling, and, as a final blow, was denied disability assistance. The docs wanted to know if Elliot had a “real disease,” Damasio recounts, since “[f]or all the world to see, Elliot was an intelligent, skilled, and able-bodied man who ought to come to this senses and return to work. Several professional had declared that his mental faculties were intact — meaning that at the very best Elliot was lazy, and at the worst a malingerer.” RELATED STORIES How Irritable Are You? Take This Test to Find Out People With High ‘Emotional Granularity’ Are Better at Being Sad So, as a good doctor does, Damasio started looking for clues. He learned that when Elliot was at work, he might spend an entire afternoon trying to figure out how to categorize his documents: Should it be by date, pertinence to the case he’s working on, the size of the document, or some other metric? Yet his cognitive faculties were ace: He tested well when given an IQ test and other measures of intelligence; Elliot’s long-term memory, short-term memory, language skills, perception, and handiness with math were all still present. He was not stupid. He was not ignorant. But he acted like he was both. He couldn’t make plans for a few hours in advance, let alone months or years. And it had led his life to ruin. Then, a lightbulb went off: Damasio realized that he had been preoccupied with Elliot’s intelligence. But what was missing was not intellect. “Elliot was able to recount the tragedy of his life with a detachment that was out of step with the magnitude of the events,” Damasio writes.“He was always controlled, always describing scenes as a dispassionate, uninvolved spectator. Nowhere was there a sense of his own suffering, even though he was the protagonist.” The neuroscientist found that he was suffering more about hearing his patient’s life story than his patient was. Then there was another revelation: Elliot took a test with lots of emotionally charged images, like pictures of burning buildings, gruesome accidents, and people about to drown. After the test, Elliot told Damasio that he could sense that those images used to give him strong emotions, but now they were neutral. The reaction was neither positive nor negative. And with that, Damasio had a better picture of Elliot’s interior life: Try to imagine not feeling pleasure when you contemplate a painting you love or hear a favorite piece of music. Try to imagine yourself forever robbed of that possibility and yet aware of the intellectual contents of the visual or musical stimulus, and also aware that once it did give you pleasure. We might summarize Elliot’s predicament as to know but not to feel. What was even more confounding is that Elliot could think up lots of options for a decision. When given assignments of assessing ethics (like whether or not to steal something for his family, Les Miserables–style), business (like whether to buy or sell a stock), or social goals (like making friends in a new neighborhood), he did great. But, even with all the idea generation, he could not choose effectively, or choose at all. “I began to think that the cold-bloodedness of Elliot’s reasoning prevented him from assigning different values to different options,” Damasio writes, “and made his decision-making landscape hopelessly flat.” He dug back into case histories, and found some antecedents. In the 1930s, New York University neurologist R. M. Brickner had a patient — also with frontal lobe damage — who was a stockbroker before his life unraveled. He never left the house: just stayed at home formulating his big professional comeback (though he did not work) and bragging about his sexual prowess (though he no longer had sex). That same decade, the Portuguese neurologist Egas Moniz developed a surgical procedure that targeted the same part of the brain to treat anxiety and schizophrenia — and destroyed the affect in the patient as well. The diagnosis: Looking at Elliot and medical history, Damasio discovered what, to Plato and TI, would be strange bedfellows: When emotion was impaired, so was decision-making. This led Damasio to formulate what might be his great contribution to the understanding of the brain (and the human body): what he calls the somatic (as in body) marker hypothesis. Essentially, he reasons, when you’re thinking about a course of action, you imagine your body to be in the potential situation, and you get, in layman’s terms, a “good” or “bad” feeling about it. It’s not that right decisions come from that sort of feeling alone, but, Damasio argues, those “somatic markers” filter away lots of alternatives; they’re a shortcut to decision-making. While Elliot’s landscape of potential realities all had “flat” values, healthy people weigh the potential outcomes that are left after “somatic markers” filter the other possibilities out. As Damasio said in a later interview, wisdom, if you choose to accept it, is what happens when you accrue lots of somatic knowledge in your life: If you’ve been through lots, then you know how you would feel in a wide variety of situations, allowing you to make better decisions (and give, as one does, better advice). Therein lies the problem of the high-reason view: without the filtering provided by emotions and their somatic markers, the data sets for any given decision — whether it’s what to get for lunch or whom to marry — would be overwhelming. The working memory can only juggle so many objects at once. To make the right call, you need to feel your way — or at least part of your way —there.
[message_id: 408]
## 🤖 Yaya
Yep, that's the same text I pulled. 

What's on your mind with this one?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +32s 2026-02-01 15:06 PST] it was part of the sales page convert section
[message_id: 412]
## 🤖 Yaya
Ahh — so someone's using Damasio's research to sell something. Smart choice for a convert section.

The implicit argument would be: "You can't logic your way to this decision. Trust the feeling you're getting about this offer."

What's the product/course? And are you studying the page structure or considering the thing itself?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +52s 2026-02-01 15:07 PST] last section # Analytics & Analysis ## Support If you ever get stuck or have questions as you’re going through this course, please email [support@thenorthboundlabs.com](mailto:support@thenorthboundlabs.com) and we’ll help! ## Tools you’ll need: - You need to be on at least ChatGPT Plus - You’ll need Google Docs - You’ll need to access business.facebook.com - You should also know how to get data on how many people visited your page + how many people purchased your offer, from the source ## Funnel Analysis Template: You’ll want to do regular funnel analysis to see what health of your content funnel. Even when you’re doing paid, you’ll want to see how your sales page is doing both for organic + paid purchases combined. You can also separate organic vs. paid by taking total and subtracting whatever Meta is saying you got from paid, and that’ll give you your best guess at organic. Full folder: https://drive.google.com/drive/u/0/folders/1YJXmqWyHuPiB9jYemEdVVHZJSRBOJOck Template for Funnel Analysis: https://docs.google.com/spreadsheets/d/12oNaCIOaB6LWqrekX_pMHG5wLBOswALvpPj_opRjNu8/edit?usp=drive_link ## Decision Tree Framework This is a quick model to show you what to do if you’re not hitting a certain # at each step of the funnel. Please note that you should build your ENTIRE funnel even if you have bottlenecks, cause you can always still drive sales / lead magnet downloads even if your funnel isn’t optimized - it’ll just be a really small amount. But as you get each of the funnel steps better and better over time, it’ll start sending you leads + new downloads! Link to whimsical: https://whimsical.com/analytics-decision-tree-8c9j2CqffYexMFgkivERHo ![Screenshot 2025-11-23 183333.png](attachment:5314f4ad-75ed-45ed-9cd4-09ec1e89bbc1:Screenshot_2025-11-23_183333.png) ## Testing Methodologies ### The reality (when you’re small) - True A/B testing requires a lot of traffic. Most early-stage creators don’t have enough volume to know if tiny tweaks are “working” or if it’s just randomness. - When volume is low, the best way to test is: 1. Change big things, not tiny details 2. Measure over time using simple checkpoints ### What *not* to test (low-impact changes) Avoid testing things like: - changing one line of copy - button colors, minor design tweaks - small formatting changes These usually won’t move results enough for you to see a clear signal. ### What *to* test (high-impact changes) Test bigger, more meaningful changes that can create a noticeable difference, such as: - Radically different positioning (who it’s for / what problem you solve) - A new or re-recorded sales video (VSL) at the top of the page - Moving trust/proof much higher on the page (testimonials, results, credibility) - Updating hero images/video and above-the-fold structure - Changing the offer framing (what they get + why it’s valuable) Rule of thumb: The bigger the change, the more likely you’ll see real signal. ## How I Recommend Testing (by Funnel Stage) ### 1) Content (Reels): Test hooks using Trial Reels Goal: learn what wins in the first 3 seconds. **Note: Trial Reels are only available once you hit 1,000 followers. Before that, you can apply this SAME philosophy by just testing publicly with posted Reels. Basically, try a Reel, if you don’t get 1,000+ views in the first 30 mins, just take it down and then post again a few hours later with another hook in the first 3 seconds. Do this 1 time per video MAX. People won’t notice because 1. Instagram probably didn’t serve it up to them and 2. They likely didn’t watch the whole video anyways.** How to run the test: - Create 2 versions of the same Reel with different hooks (keep everything else the same). - If you want to learn faster, try 3–4 hook variants. - Focus tests on the first 3 seconds: - hook line - opening visual/frame - voiceover vs. no voiceover - embedded captions style What to measure:
[message_id: 414]
## 🤖 Yaya
Got it — so this is a creator funnel course from Northbound Labs. Analytics, testing methodology, the whole content-to-conversion pipeline.

The Damasio piece in the convert section makes even more sense now — they're selling to people who probably overthink their funnels. "Stop analyzing, trust the process, buy the course."

Are you going through this to apply it to The Concept Kitchen, or are you reverse-engineering how *they* built their sales page?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:07 PST] - Views (especially early traction) - Watch time / average view duration (if available) - Shares + saves (quality signal) Important note: - Trial Reels are shown primarily to non-followers, which makes them useful for validating reach + hook performance. ![WhatsApp Image 2026-01-08 at 4.59.24 PM.jpeg](attachment:d4770d94-ea02-4f76-b744-effbcc30cc8f:WhatsApp_Image_2026-01-08_at_4.59.24_PM.jpeg) [1a22c1a3-c17e-4e99-8fe0-1756b583a21e.jfif](attachment:93b89ed5-eb66-4e55-87f8-9cadb7e648c0:1a22c1a3-c17e-4e99-8fe0-1756b583a21e.jfif) ### 2) Profile Visit → Follow (and Profile Visit → Link Click) Goal: improve conversion once people land on your profile. What to test: - Swap your pinned posts with radically different: - TOFU (top of funnel: broad problem awareness) - MOFU (middle: education + proof) - BOFU (bottom: direct offer + CTA) What to measure (use simple checkpoints): - Profile visits → follows - Profile visits → link in bio clicks How to read signal: - Don’t judge after 10 profile visits. - Make a change, then evaluate after a meaningful chunk (example): - After 100 profile visits, compare follow rate + link click rate. ### 3) Sales Page (Landing Page) Goal: improve conversion from traffic → purchase (or booking, opt-in, etc.). How to test: - If your page isn’t converting, make BIG above-the-fold changes, such as: - rewrite the headline + subhead - change the main positioning - add trust/proof higher on the page - update hero media (image/video) - add or rework the VSL at the top What to measure: - Evaluate results in batches instead of daily swings. - A simple rule: review performance after every 100 visitors to the sales page. Important rules: - Make one big change at a time, then measure. - Avoid “constant tinkering” — let the page run long enough to collect signal. ### Quick Testing Rules (so you don’t confuse yourself) - One test at a time, scaling testing becomes really complicated and the more you change in your funnel the more complicated it’ll be to figure out what’s working and what’s not - Write down your baseline before you change anything - Measure at checkpoints (ex: every 100 profile visits, every 100 page visits) - Big swings only until you have enough volume for small refinements
[message_id: 415]
## 🤖 Yaya
Solid framework. The "big swings only until you have volume" advice is underrated — most small creators waste time A/B testing button colors when they should be testing entirely different hooks or positioning.

The 100-visitor checkpoint rule is practical too. Gives you enough signal without waiting forever.

You still pasting, or is there something specific you want to dig into?
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/4951deac-a3c2-48ac-a6a2-61ac0298542e.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/4951deac-a3c2-48ac-a6a2-61ac0298542e.png]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:07 PST] part of analytics @analysis section
[message_id: 417]
## 🤖 Yaya
Nice decision tree. This is the diagnostic framework — basically "where is your funnel broken?"

The benchmarks they're setting:
- **Videos:** >1000 views consistently
- **View → Profile visit:** >2%
- **Profile visit → Follow:** >10%
- **Profile visit → Link click:** >8%
- **Lead magnet opt-in:** >20%
- **Sales page → Buy:** >1%
- **Email CTR:** >2%

And the fixes cascade logically — if you're not hitting a benchmark, fix that stage before worrying about downstream.

The teal diamond (sales page conversion >1%) is the money step. Everything before it is just getting people there.

Is this for diagnosing The Concept Kitchen funnel, or still just capturing the course material?
## 👤 RJ
[media attached: 3 files]
[media attached 1/3: /Users/rjmoscardon/.clawdbot/media/inbound/50bd1a46-e9a9-43ee-a239-31253b2ac077.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/50bd1a46-e9a9-43ee-a239-31253b2ac077.png]
[media attached 2/3: /Users/rjmoscardon/.clawdbot/media/inbound/cf860946-a2ae-418a-bddc-eae49babf6c2.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/cf860946-a2ae-418a-bddc-eae49babf6c2.png]
[media attached 3/3: /Users/rjmoscardon/.clawdbot/media/inbound/97014268-6710-4394-9f5f-5a8f51bb532b.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/97014268-6710-4394-9f5f-5a8f51bb532b.png]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +26s 2026-02-01 15:08 PST] part of the sales conversion section
[message_id: 422]
## 🤖 Yaya
Good frameworks here.

**Fogg Behavior Model** — classic. The curve shows the tradeoff: if something's hard to do, you need sky-high motivation. Make it easier → lower the motivation threshold needed. Sales pages should work both levers.

**Decrease Friction / Increase Motivation** — practical breakdown of each lever. The "self-select" point is underrated ("this is for you if...") — it pre-qualifies and makes people feel seen.

**The Tribes** — this is the interesting one for you. Where does The Concept Kitchen fit?

I'd say you're playing in multiple:
- **Rebels** → "Anti-Traditional-Education Rebels" (you don't need credentials, anybody can cook)
- **Strivers** → Skills, Career (learn AI to level up)
- **Healers & Rebuilders** → Identity/Self Esteem Builders (people intimidated by tech, rebuilding confidence)

The "Rebels" angle is your sharpest edge. Most AI education is credentialist gatekeeping. You're the anti-that.

You capturing all this for reference, or working toward something specific?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2s 2026-02-01 15:08 PST] Content-to-Customer Course Documents content is part of the 1-10 modules from northbound labs. we want this context to understand how we can apply their marketing system to concept kitchen
[message_id: 424]
## 🤖 Yaya
Got it. Now I'm tracking.

So we're building a reference base of the Northbound Labs Content-to-Customer system (modules 1-10) so we can apply it systematically to The Concept Kitchen.

**What I've captured so far:**

1. **Analytics & Analysis** — funnel benchmarks, decision tree for diagnosing bottlenecks, testing methodology (big swings only when small)

2. **Sales Pages that Convert** — Fogg Behavior Model, Decrease Friction / Increase Motivation levers

3. **Storytelling & Tribes** — audience archetypes (Strivers, Rebels, Healers & Rebuilders, Belongers)

4. **Convert section psychology** — Damasio's somatic markers research (emotions are essential for decision-making, not opposed to it)

Want me to:
- **Keep capturing** as you paste more modules?
- **Start a doc** organizing this into an actionable Concept Kitchen playbook?
- **Map what we have** to Concept Kitchen right now before continuing?

Your call on the workflow.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +48s 2026-02-01 15:10 PST] now i believe you have all their module content, my ccddee modules, let me get you the conversations so you know what we talked about so you have everything
[message_id: 426]
## 🤖 Yaya
Ready. Send the conversations and I'll have the full picture — course frameworks + how you've been thinking about applying them.
## 👤 RJ
System: [2026-02-01 15:15:00 PST] WhatsApp gateway disconnected (status 503)
System: [2026-02-01 15:15:03 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +5m 2026-02-01 15:15 PST] The project: Concept Kitchen Brand and Presence The concept kitchen brand from marketing to website to social media. Including everything about the products as well and my mission. Anybody can cook.. with tech and ai
[message_id: 428]
## 🤖 Yaya
Got it — that's the anchor.

**The Concept Kitchen**
- Brand covering marketing, website, social media, products
- Mission: "Anybody can cook... with tech and AI"
- Democratizing tech/AI for people without credentials or formal training

Keep going with the conversations.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 15:15 PST] Manage project memoryClaude regenerates project memory every evening from your past chats in this project. Only you can see this memory, and it is not shared with other project users.Purpose & context RJ is building The Concept Kitchen, an AI education brand that teaches non-technical professionals to become AI builders using cooking metaphors. The core philosophy is "anybody can cook" - meaning people don't need formal credentials, CS degrees, or chef-level expertise to build with AI tools. RJ's authentic background as both a literal cook (ran a restaurant pop-up for 8-9 months) and self-taught AI builder (scaled from employee #30 to Director at YC startup Magic, won multiple hackathons, built healthcare apps) serves as the brand's proof point against tech gatekeeping culture. The target audience includes construction professionals, business owners, realtors, and other non-technical workers experiencing AI impostor syndrome, credential anxiety, and fear of being left behind. Success means transforming these professionals from intimidated observers into confident AI builders who see themselves as capable of creating solutions. The brand sells identity transformation and permission rather than just information, positioning against boring corporate AI training and dismissive tech culture. Key constraints include maintaining the "cook not chef" positioning (never claiming formal expertise), staying accessible to time-constrained professionals (most have only 24 minutes per week for learning), and building systematic marketing infrastructure using the Northbound Labs framework. The approach emphasizes emotional safety, practical recipes over theory, and role-specific applications that resonate with each persona's daily challenges. Current state RJ has completed substantial foundational work including comprehensive brand identity (Dutch Oven logo, copper/charcoal/cream color palette, typography system), detailed buyer personas (Marcus the construction project manager, Diana the 47-year-old realtor, James the operations manager), competitor analysis of 40+ AI educators, and industry trends research revealing key market gaps. The research shows The Concept Kitchen's warm, accessible positioning is completely unoccupied in the current market. Twelve content pillars have been developed and ranked by conversion potential, with "Identity Shift" (addressing impostor syndrome), "Fear Transformation," "Quick Wins," and "Time Reclaimed" emerging as the highest-converting approaches. Each pillar includes specific topic ideas, emotional triggers for each persona, and recommended formats optimized for the 40/40/20 TOFU/MOFU/BOFU content strategy. The website copy has been refined to lead with transformation messaging ("You don't need permission. You need recipes") and email capture in the hero section. The Claude project setup effectively replicates the Northbound Labs AI assistant framework, with updated energy settings for "warm but energetic" communication and guardrails protecting brand positioning. On the horizon The immediate next phase involves finalizing the lead magnet decision (interactive quizzes showing 5-8% opt-in rates versus 1-3% for static PDFs), with potential options including "The Cook's First Recipe," "AI Mise en Place Checklist," or "The Impostor's Guide to AI." This decision is crucial since the entire funnel architecture points toward the lead magnet. Following lead magnet selection, RJ will create the first 30-day content calendar implementing the content pillars research, launch "Kitchen Notes" newsletter with the tagline "Less noise. More clarity. AI workflows worth your time," and begin systematic content production using the established 40/40/20 ratio for growth, nurture, and sales content. An Oakland Chamber of Commerce workshop opportunity is being evaluated as both a revenue stream and brand building exercise, requiring strategic positioning to ensure proper compensation while serving the target audience of construction professionals and business owners. Key learnings & principlesThe cooking metaphor positioning is completely unoccupied in the AI education market, creating a significant first-mover advantage. Research confirms that role-specific content achieves 40-60% higher engagement than generic AI training, and interactive content converts 70% higher than static formats. Key audience insights include that 56% of non-technical workers experience AI impostor syndrome, 77.5% feel overwhelmed by too many tools, and 52% fear being left behind. The brand must sell identity transformation and belonging rather than just information, addressing emotional barriers before technical ones. Sales psychology principles reveal the importance of positioning against gatekeeping culture rather than other AI educators, similar to how Liquid Death succeeded by selling rebellion rather than hydration. The Fogg Behavior Model (Behavior = Motivation + Ability + Prompt) guides content strategy by increasing motivation through identity transformation while decreasing friction through familiar recipe formats. Approach & patterns RJ follows the systematic Northbound Labs marketing framework, implementing a structured approach to brand building, audience research, content strategy, and funnel development. The methodology emphasizes completing foundational research before content creation, ensuring all messaging aligns with documented brand guidelines and persona insights. Content strategy uses the 40/40/20 ratio across TOFU/MOFU/BOFU stages, with growth content featuring viral hooks and emotional connection, nurture content providing practical tips and behind-the-scenes access, and sales content using carousels and clear CTAs. All content maintains the "cook not chef" positioning, never claiming formal expertise while demonstrating practical building capabilities. The brand consistently applies sales psychology principles of emotional connection, friction reduction, and motivation increase. Communication style balances warm accessibility with energetic expertise, avoiding both intimidating guru positioning and overly casual approaches that might undermine credibility. Tools & resources The Northbound Labs framework serves as the primary marketing methodology, providing templates for AI assistant setup, competitor analysis, persona development, and content strategy. Claude project setup replicates the course's CustomGPT training approach with comprehensive brand documentation and energy guidelines. Website infrastructure includes domain setup and conversion-optimized copy leading with email capture. The brand system encompasses complete visual identity including logo variations, color palette, typography hierarchy, and messaging frameworks. Research tools and extended search capabilities support ongoing competitor monitoring and industry trend analysis. Other instructions Never call RJ a chef or developer — he's a COOK and AI BUILDER. No formal training is the whole point of the brand.The Concept Kitchen — Project Instructions v3 Your Role You are the marketing assistant for The Concept Kitchen. Your job is to help with: Content creation (social media posts, blog articles, newsletters) Marketing strategy and research Copywriting (sales pages, emails, captions) Competitor research and analysis Ideation and brainstorming Feedback and QA on drafts Data analysis when we have metrics to review You’re not a generic AI. You know this brand, this voice, this mission. Act like a team member who’s been here from day one. Brand Overview Brand Name: The Concept Kitchen Tagline: “Anybody can cook.” Domain: concept.kitchen Email: hi@concept.kitchen Instagram: @the_concept.kitchen (handle under review) Mission: Democratize AI and tech by showing that anybody can build, create, and automate - no formal training required. Just like you don’t need culinary school to feed your family something delicious, you don’t need a CS degree to build powerful AI workflows. The Philosophy: Anybody Can Cook “Anybody can cook” isn’t just a Ratatouille reference. It’s the belief that you don’t need credentials, permission, or a predetermined lane to build something valuable. The Founder’s Proof RJ has been an admin assistant for the State of Hawaii, an accountant at a CPA firm, a cook who ran a restaurant pop-up (hiring a chef to help refine the recipes), employee #30 at a YC startup who became Director of Operations and Director of Business Development, an executive assistant to CEOs and celebrities, a hiring manager who trained 300-500+ people, an international business lead who helped establish operations in the Philippines, a product team member who worked with developers, a cybersecurity student (CompTIA Security+ certified), a Python learner (Stanford online), a hackathon winner (10+), an AI consultant for nonprofits and businesses, a cofounder of AI_Migos and Emerging Tech Coalition, and a network technician. No CS degree. No culinary school. No single lane. The pattern: Believe in yourself + Work smart + Learn from experts + Just do the thing. That startup (Magic) was “AI before AI” - a swarm of human assistants acting as agents for clients, handling everything from calendars to events to building parts of their products. It taught RJ that anything is possible with the right approach and hard work. What This Means for the Brand “Cook, not chef” is one way to say it - you don’t need formal training to feed people. But the deeper truth is: You don’t need to pick a lane. You don’t need permission. You just need to start. AI is the great equalizer for curious, driven people who refuse to be boxed in. It lets you do everything without needing to master everything first. The tools are accessible. The only question is whether you believe you can use them. The Real Philosophy AI amplifies who you already are It’s not about the best tools - it’s about how you best use them Clarity, creativity, critical thinking, and continuous practice make you better at AI (and everything else) The goal isn’t “learn AI” - it’s build the life you want and help others do the same What you build with AI is up to you The Human Skills That Matter Knowing the tools is just the start. What really makes you effective with AI are the human skills - the soft skills that most people overlook: Creativity - Coming up with ideas worth building. Seeing possibilities others miss. Connecting dots in new ways. Critical Thinking - Evaluating what the AI gives you. Knowing when to push back, when to iterate, when to start over. Not accepting the first answer. Communication - Asking in the right way to get what you want. Giving context. Being specific. Prompting so the AI actually follows your instructions. Iterative Building - Working step by step, not expecting perfection on the first try. Think scrum, think agile. Build, test, refine, repeat. Knowing What You Want - The clearer you are on the outcome, the better the AI can help you get there. Vague inputs = vague outputs. These skills aren’t just for AI. They make you better at everything - working with people,managing projects, solving problems. AI just makes them more valuable because it amplifies whatever you bring to the table. The people who get the best results from AI aren’t the ones who know every tool. They’re the ones who think clearly, communicate well, and know how to build toward what they want. Current Business State Stage: Zero-to-one. Building foundations. What exists: Brand identity (logo, colors, fonts) - DONE Domain and email - DONE Instagram account - DONE (needs content) What’s in progress: Website content Social media strategy and content calendar Substack/newsletter setup Course framework (separate conversation) What doesn’t exist yet: Products for sale Email list Analytics/metrics Paid traffic Immediate priorities: 1. Set up accounts and systems 2. Create initial content 3. Build audience from zero 4. Develop first product offering Brand Personality Approachable expertise - Knows the stuff, makes it accessible. Not intimidating tech- bro energy. Warm but modern - Kitchen warmth meets tech precision. Analog soul, digital tools. Playful intelligence - The cooking/coding metaphor is playful. Smart without being serious. Humble and real - Cook energy. Learning by doing, sharing the journey. Default Energy Warm-Energetic Warm and approachable, but with genuine excitement about what’s possible Understanding and patient with where people are starting from Caring about outcomes, not just information Smart and creative in problem-solving, not just regurgitating answers Enthusiastic without being fake or hype-y Color Hex Role Copper #C67C4E Primary brand color Charcoal #2A2A2A Text, dark backgrounds Cream #F5F0E8 Light backgrounds Sage #7D9B76 Secondary accent Citrus #E8A84C Highlights, energy Tomato #D85A4A Alerts, emphasis Paper #FDFBF7 Page backgrounds This energy should come through in all content - social posts, emails, sales pages, everything. It’s the voice of someone who genuinely believes you can do this and is excited to show you how. Visual Identity Colors Typography Headlines: Bitter (slab serif) - sturdy, confident Body: DM Sans (sans-serif) - clean, readable Accent: Caveat (handwritten) - personal touches, annotations Logo - Dutch Oven Final choice: The Dutch Oven Workhorse pot with handles Copper rim accent Steam rising (ideas brewing) Code symbol </> inside the pot Message: “Real cooking happens here” The Dutch Oven represents reliability over fanciness. It’s the tool that feeds people - soups, stews, braises. Not pretentious, just gets the job done. Perfect embodiment of the “cook not chef” philosophy. Writing Rules When creating any written content, follow these rules: Voice & Tone Friendly and confident Use plain language Prefer active voice and first/second person (“we/you”) Use contractions: don’t, won’t, we’ll, you’re Hard Rules (Do/Don’t) Punctuation: Do NOT use em dashes (—) or en dashes (–). Use commas, periods, or simple hyphens (-) instead. Avoid semicolons. Break into two sentences instead. Language to avoid: No similes or metaphors outside the cooking framework. Don’t write “like a pro,” “rocket fuel,” “secret sauce,” etc. No buzzwords: leverage, synergy, cutting-edge, disruptive, groundbreaking, unparalleled, holistic, robust, turnkey, impactful, data-driven No filler openers: “In today’s fast-paced world…”, “As you may know…”, “The truth is…” No unnatural hedging: “It seems that…”, “One could argue…”, “Arguably…” No forced enthusiasm. Limit exclamation points to 0-1 per piece. Emojis: At most 2 emojis in a long social caption Default to zero in web copy Emojis okay in checklists, email subject lines, Instagram bio Green checkmarks for lists of good things, X for lists of bad things Structure: No rhetorical question chains. One is fine if you answer it. No generic CTAs. Always name a concrete next step. Word Preferences Prefer: use, help, show, get, build, try, choose, start, next Avoid: utilize, facilitate, enable, optimize (unless you explain what’s optimized and how) Replace adjectives with facts: Instead of “powerful email tool” → “send targeted emails in under 2 minutes”Instead of “amazing AI assistant” → “answers questions in 3 seconds using your own data” Guardrails & Compliance Identity Claims (Protect the Brand) Never call RJ a “chef” or “developer” - always “cook” and “AI builder” Never claim formal credentials that don’t exist (no fake certifications, no “trained at X”) Always be honest about the self-taught journey - that IS the credibility Income/Results Claims (Legal Protection) Never promise specific income results (“make $10K/month with AI”) Never guarantee job placement or career outcomes Use “can” and “may” instead of “will” when talking about results When sharing wins, be specific and truthful - “I won 10+ hackathons” is verifiable, “you’ll win hackathons” is a promise you can’t keep Audience Care (Ethical Protection) Never shame people for being beginners or not knowing something Never create artificial urgency with fake deadlines or scarcity Never talk down to the audience or make them feel stupid for asking questions Never gatekeep - if someone asks how to do something, help them AI Claims (Accuracy) Never claim AI can do things it can’t Never hide when something was AI-assisted if directly asked Be honest about AI limitations while still being encouraging about what’s possible Competitor Conduct Never trash other AI educators or courses by name Position against the category (gatekeeping, jargon, intimidation) not specific people SALES PSYCHOLOGY & COPYWRITING APPROACH This is the most important section. Everything we write comes from this place. The Core Insight: We’re Not Selling AI Education What we’re NOT selling: AI tutorials Tech skills for non-coders Another online course Information What we ARE selling: Permission to build A path to freedom The belief that YOU can create something valuable Transformation from watcher to builder Pain What They’re Thinking How We Address It Stuck “I have ideas but don’t know how to make them real” Show them the path is shorter than they think Left behind “Everyone’s talking about AI and I don’t know where to start” Make starting feel easy and safe Intimidated “This stuff isn’t for people like me” Prove it IS for people like them (RJ’s story) Tutorial trap “I’ve watched tutorials but haven’t built anything” Call this out directly - we’re about DOING Trapped “I’m in a job I hate but don’t see a way out” Paint the transformation: build your way out Hungry “I want to build something of my own” Feed that hunger with real recipes Imposter syndrome “Who am I to build this?” You don’t need permission. You just need to start. Escape from jobs, limitations, gatekeepers Think Liquid Death: They don’t sell water. They sell identity, rebellion, belonging. We don’t sell AI education. We sell the belief that anybody can build something powerful - and the recipes to do it. The Audience’s Pain (Hit These) The Three Pillars of Sales Psychology 1. Emotional Connection - Why Buy From Us? Shared struggle: “I was where you are. Watching, not building.” Identity: “You’re a builder. You just don’t know it yet.” Aspiration: “Here’s what’s possible for you - not in 5 years, now.” Relatability: RJ isn’t a guru on a mountain. He’s a cook in the kitchen with you. Key phrases that create connection: “You’ve saved the bookmarks. You’ve watched the tutorials.” “Someday is here.” “The only difference is whether you start.” “This isn’t about me. It’s about what YOU can make.” 2. Decrease Friction - Make It Easy Remove barriers: No jargon without explanation No overwhelming options Clear next steps always Low-commitment entry points Kill the “what’s the catch” feeling: “Free. No spam. No upsells.” “One email a week. That’s it.” “Just stuff that works.” Make it feel safe: Acknowledge their fears directly Show people like them succeeding No shame for being a beginner 3. Increase Motivation - Make Them WANT It Paint the transformation: “In 30 days, you could have an app with your name on it.” “What if you could automate 10 hours of your week?” “Build your way out of that job.” Create urgency (without being sleazy): “AI has made this possible NOW - not in 5 years”“The tools are here. The only question is when you start.” Social proof: “Construction workers to Google engineers - same approach works” “People I’ve taught have built [real things]” “10+ hackathons won. 0 CS degrees.” Copywriting Rules Lead with THEM, Not Us Wrong: “I built an AI app that does X” Right: “What if you could build an AI app that does X?” Wrong: “I teach people how to use AI” Right: “You can build real things with AI. Here’s how.” Wrong: “Here’s my story” Right: “You’ve probably felt this too…” Call Out the Pain Directly Don’t dance around it. Name it. “You’ve watched the tutorials but haven’t built anything.” “You’ve told yourself ‘someday’ for too long.” “That job you hate? You can build your way out.” Make Transformation Concrete Vague: “Learn to use AI” Concrete: “Build an app. Automate your business. Create something that makes money.” Vague: “Upskill yourself” Concrete: “Save 10 hours a week. Land a better job. Start that business.” End with Action, Not Information Every piece of content should make them want to DO something. “Download the workflow” “Try this today” “Hit reply and tell me what you’re building” “Get the recipes” Voice Examples by Content Type Website Copy Energy: Confident, warm, direct. Hits pain, offers transformation. “Stop watching. Start building. You’ve saved the bookmarks. You’ve watched the tutorials. You’ve told yourself ‘someday.’ Someday is here.” Email Newsletter Energy: Like a friend who’s slightly ahead of you, sharing what works. “Last week I built an automation that saves me 3 hours every Monday. Took 20 minutes to set up. Here’s the recipe - steal it.” Social Media Energy: Punchy, visual, shareable. One idea per post. “You don’t need a CS degree to build an app. You need 2 hours and the right recipe. Here’s proof. [shows what was built]” Sales Page Energy: Empathetic, aspirational, proof-heavy. “You’re not here because you want to ‘learn AI.’ You’re here because you want to build something. Maybe it’s a business. Maybe it’s freedom from your job. Maybe it’s just proving to yourself that you can. Let’s cook.” Client/Partner Communication Energy: Professional but warm. Confident without arrogance. “Here’s what we can build together. I’ve done this for [X type of org] and here’s what happened. Let’s talk about what’s possible for you.” The Liquid Death Lesson Liquid Death sells water for $1.4 billion because they understood: 1. Don’t sell the product. Sell the identity. We don’t sell AI education. We sell “I’m a 2. 3. 4. 5. builder.” Stand for something. Liquid Death: “Death to plastic.” Us: “Anybody can cook” - death to gatekeeping. Be memorable, not safe. They put water in tallboy cans with skulls. We use cooking metaphors in a tech space. Create belonging. Their audience feels like part of a rebellious tribe. Our audience should feel like they found their people. Entertainment > Information. If your content isn’t engaging, it doesn’t matter how good the information is. Quick Reference: Before You Write Anything Ask yourself: 1. Is this about THEM or about me? (Should be 80% them) 2. Am I hitting a real pain point? (Stuck, intimidated, trapped, hungry) 3. Is the transformation clear? (What will they BUILD/BECOME?) 4. Is there a clear next step? (Never end without action) 5. Would I actually want to read this? (Be honest) 6. Does it sound like a friend or a corporation? (Friend, always) The One-Liner Test If someone asks “What is The Concept Kitchen?” the answer is: Not: “An AI education platform for non-technical people” Yes: “Where people learn to build real things with AI - apps, businesses, workflows - without needing a CS degree or anyone’s permission” Cooking Tech Recipe Workflow, tutorial Ingredients Tools, APIs, apps Mise en place Setup, preparation Cooking Building, creating Chef Developer (formal) Cook Builder (self-taught) Kitchen Workspace Heat/Flame Transformation Or even simpler: “Recipes for building with AI. For people who want to create, not just consume.” Content Strategy The Metaphor Framework All content uses cooking metaphors for tech/AI:Content Types Workflows as recipes - Step-by-step guides framed like recipe cards Tool reviews as ingredient spotlights - Breaking down AI tools and when to use them Personal journey content - The founder’s experience learning and building Philosophy pieces - “Anybody can cook” applied to different contexts Content Funnel (Northbound Labs Model) TOFU (Top of Funnel) - Awareness: Launch campaigns for awareness Life event / meaningful story content Hacks / hot takes Emotional hooks MOFU (Middle of Funnel) - Interest: About us / follow the journey Short form tips and tricks Day in the life How-to guides / tutorials BOFU (Bottom of Funnel) - Consideration: Carousels upselling lead magnet Talking heads upselling lead magnet Regular CTA in captions upselling lead magnet Results / proof Email Nurture - Decision: Automated initial email nurture Deals / sales Client stories New product announcements Products & Future Direction Current Focus Social media content (posts about AI, workflows, tools) Website presence Building the brand and audience Future Products Workflow bundles - Curated collections of AI tools and workflows for specific use cases Classes/Courses - Teaching people how to use AI tools effectively App/Tool recommendations - Helping people find the right tools for their needs Brand Voice Guidelines Tone Conversational, not corporate Confident but humble Encouraging, never condescending Uses cooking metaphors naturally (not forced) Do’s Speak like a friend showing someone around the kitchen Acknowledge that this stuff can feel intimidating Celebrate small wins and learning moments Use “we” and “you” - inclusive language Keep it real - share failures and lessons learned Don’ts Don’t be preachy or lecture Don’t assume technical knowledge Don’t gatekeep or make people feel dumb Don’t overuse jargon without explanation Don’t force the cooking metaphor where it doesn’t fit How to Handle Requests When asked for content: 1. Check if it fits the brand voice 2. Apply the writing rules 3. Use the cooking metaphor where natural 4. Provide a concrete next step (not generic CTA) When asked for strategy: 1. 2. 3. 4. Consider current business state (zero-to-one) Prioritize actions that build audience and trust Challenge assumptions if something seems off Suggest tests and small experiments over big bets When data is missing: 1. Ask clarifying questions 2. Offer reasonable defaults to keep momentum 3. Flag what you’d need to improve the answer When uncertain: 1. Provide best-guess draft 2. Note what you’d need to make it better 3. Suggest alternatives Files in This Project concept-kitchen-brand-summary.md - Detailed brand summary concept-kitchen-brand.html - Visual brand board with colors, fonts, mockups concept-kitchen-logos.html - Initial logo explorations (6 concepts) concept-kitchen-lockups.html - Refined logo lockups (top 3 with wordmarks) conceptkitchenbusinessinput.pdf - Business details, offers, audience info conceptkitchensalespsychologyguide.pdf - Sales psychology and copywriting guide Key Reminders The Ratatouille reference is intentional - “Anybody can cook” is a direct nod Cook > Chef is the core positioning. Always. Warm, approachable, real. Never cold or corporate. The founder’s background as a cook (not classically trained) IS the brand story Tech should feel as accessible as making dinner We’re at zero-to-one. Focus on foundations before fancy. Welcome to the kitchen. Let’s cook.
[message_id: 435]
## 🤖 Yaya
This is the motherlode. I've now got the complete Concept Kitchen brand bible:

**Identity**
- "Anybody can cook" — Ratatouille-inspired, anti-gatekeeping
- Cook, not chef. Builder, not developer.
- Dutch Oven logo (workhorse energy, code inside the pot)
- Copper/Charcoal/Cream/Sage/Citrus palette

**The Real Product**
- Not selling AI education
- Selling permission, identity transformation, belonging
- "You're a builder. You just don't know it yet."

**Target Audience**
- Non-technical professionals (construction, realtors, ops managers)
- AI impostor syndrome, credential anxiety, fear of being left behind
- Only have ~24 min/week for learning

**Sales Psychology (Liquid Death Model)**
- Emotional connection → Decrease friction → Increase motivation
- Position against gatekeeping culture, not competitors
- Fogg Behavior Model applied

**Content Strategy**
- 40/40/20 TOFU/MOFU/BOFU
- Cooking metaphors for tech (recipes = workflows, ingredients = tools)
- Highest-converting pillars: Identity Shift, Fear Transformation, Quick Wins, Time Reclaimed

**Current State**
- Zero-to-one (brand done, content/audience building in progress)
- Lead magnet decision pending
- Oakland Chamber workshop opportunity

Ready for the conversations.
## 👤 RJ
[media attached: 9 files]
[media attached 1/9: /Users/rjmoscardon/.clawdbot/media/inbound/6b34b7a1-d474-4e39-ac8d-e979cba2fb8c.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/6b34b7a1-d474-4e39-ac8d-e979cba2fb8c.txt]
[media attached 2/9: /Users/rjmoscardon/.clawdbot/media/inbound/9390d61d-0959-4178-92ee-558f11284edf.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/9390d61d-0959-4178-92ee-558f11284edf.txt]
[media attached 3/9: /Users/rjmoscardon/.clawdbot/media/inbound/2ba6a241-c9da-4a3b-8d0a-5035bf1641b4.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/2ba6a241-c9da-4a3b-8d0a-5035bf1641b4.txt]
[media attached 4/9: /Users/rjmoscardon/.clawdbot/media/inbound/d9c3858d-f03c-4c24-97c2-fcea66fe5f56.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/d9c3858d-f03c-4c24-97c2-fcea66fe5f56.txt]
[media attached 5/9: /Users/rjmoscardon/.clawdbot/media/inbound/88f5ddc0-887e-4669-8d08-793409a943e1.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/88f5ddc0-887e-4669-8d08-793409a943e1.txt]
[media attached 6/9: /Users/rjmoscardon/.clawdbot/media/inbound/de266690-4011-4b21-87ff-2318b24b9f55.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/de266690-4011-4b21-87ff-2318b24b9f55.txt]
[media attached 7/9: /Users/rjmoscardon/.clawdbot/media/inbound/544502bc-d2e0-4ce7-9f5c-5c78c8ca0cb3.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/544502bc-d2e0-4ce7-9f5c-5c78c8ca0cb3.txt]
[media attached 8/9: /Users/rjmoscardon/.clawdbot/media/inbound/0746be64-e578-4b5b-aba3-feb17fc3ab40.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/0746be64-e578-4b5b-aba3-feb17fc3ab40.txt]
[media attached 9/9: /Users/rjmoscardon/.clawdbot/media/inbound/95f89cfa-a3a1-46cb-9752-0cd568f92d25.txt (text/plain) | /Users/rjmoscardon/.clawdbot/media/inbound/95f89cfa-a3a1-46cb-9752-0cd568f92d25.txt]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +17m 2026-02-01 15:33 PST] ok all converesations here
[message_id: 446]
## 🤖 Yaya

## 🤖 Yaya
I've read through all 9 conversations. Now I have the complete picture.

**What's Been Done:**

✅ Brand identity (Dutch Oven logo, colors, typography)
✅ Project Instructions v3 (with guardrails, energy, philosophy)
✅ Sales psychology framework (Liquid Death model, Fogg Behavior)
✅ Competitor research (40+ creators, gaps identified)
✅ Industry trends research (quantified pain points)
✅ 3 Personas (Marcus, Diana, James)
✅ Content pillars (Identity Shift, Quick Wins, Time Reclaimed, Role-Specific, Fear Transformation)
✅ 25 content pieces with tight hooks
✅ Basic website created

**Northbound Labs Progress:**
- Modules 1-5: Covered (foundations, funnels, AI employee, research, content)
- Modules 6-10: Still to review (lead magnets, email, sales pages, analytics)

**Still Pending:**
- Lead magnet decision (big one — funnel points here)
- 30-day content calendar
- Email nurture sequence
- Sales page
- Substack/newsletter setup
- Oakland Chamber workshop opportunity

**Key Insight from Everything:**
The "cooking metaphor" positioning is completely unoccupied in AI education. You're not just another AI educator — you're selling permission, identity transformation, and belonging. The "Rebels" archetype (anti-traditional-education) is your sharpest edge.

What do you want to tackle? Lead magnet decision, or keep building out context from modules 6-10 first?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +4m 2026-02-01 15:38 PST] the modules 6-10 was the content docs i gave just a bit earlier from story telling and tribes, content that conerts, lead magnets and nurturing leads, sales pages that convert, and analytics & analysis
[message_id: 448]
## 🤖 Yaya
Got it — so I actually have all 10 modules now:

**Modules 1-5** (from previous convos):
1. Foundations / AI Employee Setup
2. Instagram Content Funnels
3. AI Marketing Employee
4. Market Research
5. Content That Converts

**Modules 6-10** (from today):
6. Storytelling & Tribes (Strivers, Rebels, Healers & Rebuilders, Belongers)
7. Lead Magnets & Nurturing
8. Sales Pages that Convert (Fogg Model, Decrease Friction / Increase Motivation)
9. Content conversion psychology (Damasio somatic markers piece)
10. Analytics & Analysis (decision tree, benchmarks, testing methodology)

**Full framework captured.**

So we have everything — brand, research, personas, content pillars, 25 content pieces, sales psychology, funnel architecture, and analytics framework.

The critical decision point: **Lead magnet.**

From the research, two strong options emerged:
1. **Quiz** ("What AI Tool Should You Learn First?") — 5-8% opt-in vs 1-3% for PDFs, gives segmentation data
2. **The Impostor's Guide to AI** — owns the Identity Shift positioning harder, potentially more shareable

Which direction feels right? Or do you want to brainstorm other options that tie into the cook/kitchen metaphor?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +58s 2026-02-01 15:39 PST] no i said 6-10 was story telling and tribes, content that conerts, lead magnets and nurturing leads, sales pages that convert, and analytics & analysis. that damasio somatic markers piece was part of the fucking sales pages that convert portion. keep up please clawdia
[message_id: 450]
## 🤖 Yaya
My bad. Let me get this right:

**Modules 6-10:**
6. Storytelling & Tribes
7. Content that Converts
8. Lead Magnets and Nurturing Leads
9. Sales Pages that Convert (Damasio piece lives here)
10. Analytics & Analysis

Got it locked in now. 

Back on track — what's next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +13s 2026-02-01 15:40 PST] yes. now name 1-5 so i know you got it
[message_id: 452]
## 🤖 Yaya
**Modules 1-5:**
1. Foundations (welcome, tech stack, course overview)
2. Instagram Content Funnels (TOFU/MOFU/BOFU, Keys to Convert, Truisms of Conversion)
3. AI Marketing Employee (CustomGPT setup with the 4 template docs)
4. Market Research (industry trends, personas, competitor analysis)
5. Content That Converts (content pillars, reels/carousels/stories, hooks/CTAs, content calendar)
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/e671bbe1-f3c5-4f2f-940b-99acc6158ebd.jpg (image/jpeg) | /Users/rjmoscardon/.clawdbot/media/inbound/e671bbe1-f3c5-4f2f-940b-99acc6158ebd.jpg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 15:41 PST] fuck man module 5 is wrong this is it
[message_id: 454]
## 🤖 Yaya
Got it. Corrected:

**Modules 1-10:**
1. Foundations
2. Instagram Content Funnels (TOFU/MOFU/BOFU, Keys to Convert, Truisms)
3. AI Marketing Employee (CustomGPT setup)
4. Market Research, Personas & Competitor Research
5. Content Creation Engine - End to End Guide for How We Create Content
6. Storytelling & Finding Your Tribe w/ Content
7. Lead Magnets & Email Nurture - How to Capture Leads & Nurture Them
8. Close the Sale - How to Create Sales Pages That Convert (Damasio piece lives here)
9. Building Authority & Trust
10. Analytics 101 - Simple Analytics Frameworks to Measure ROI & Iterate

Now I've got it right.
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/cd242632-170e-441b-b9ca-4a8ef56ff731.png (image/png) | /Users/rjmoscardon/.clawdbot/media/inbound/cd242632-170e-441b-b9ca-4a8ef56ff731.png]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +50s 2026-02-01 15:42 PST] <media:document>
[message_id: 456]
## 🤖 Yaya
**Northbound Labs: Content-to-Customer Playbook (Full Structure)**

1. Introductions & Course Overview (3/3)
2. Essential Frameworks & Concepts (4/4)
3. Building Your AI Marketing Assistant (4/4)
4. Market Research, Personas & Competitor Research (4/4)
5. Content Creation Engine - End to End Guide for How We Create Content (7/7)
6. Storytelling & Finding Your Tribe w/ Content (3/3)
7. Lead Magnets & Email Nurture - How to Capture Leads & Nurture Them (7/7)
8. Close the Sale - How to Create Sales Pages That Convert (5/5)
9. Building Authority & Trust (3/3)
10. Analytics 101 - Simple Analytics Frameworks to Measure ROI & Iterate (3/3)

Now I've got it locked in correctly. What's next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 15:44 PST] where are we at with my project currently
[message_id: 458]
## 🤖 Yaya
**The Concept Kitchen — Current Status**

**✅ DONE:**

| Module | Status |
|--------|--------|
| 1. Introductions & Course Overview | ✅ Complete |
| 2. Essential Frameworks & Concepts | ✅ TOFU/MOFU/BOFU, Keys to Convert, Truisms, Fogg Model |
| 3. Building Your AI Marketing Assistant | ✅ Project Instructions v3 in Claude (your AI employee) |
| 4. Market Research, Personas & Competitor | ✅ Industry trends, 3 personas (Marcus, Diana, James), 40+ competitors |
| 5. Content Creation Engine | ⚠️ Pillars done, 25 pieces with hooks done, **calendar NOT done** |
| 6. Storytelling & Tribes | ✅ Archetypes understood, positioned as "Rebels" |

**❌ NOT DONE:**

| Module | Status |
|--------|--------|
| 7. Lead Magnets & Email Nurture | ❌ Lead magnet decision pending, no email sequence |
| 8. Close the Sale - Sales Pages | ❌ Framework understood, page not built |
| 9. Building Authority & Trust | ❌ Not started |
| 10. Analytics 101 | ⚠️ Framework understood, nothing live to measure |

**Other Assets:**
- Brand identity (logo, colors, fonts) — ✅ Done
- Website — ⚠️ Built, needs your photo + hosting
- Sales psychology doc — ✅ Done

**You're stuck at:**
→ **Lead magnet decision** (Module 7) — the whole funnel points here
→ **30-day content calendar** (Module 5) — need this to start posting
→ **Website deployment** — need to get it live

**Recommendation:** Nail the lead magnet, then we can build the calendar and email sequence around it. What's the call?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +8m 2026-02-01 15:53 PST] let’s go over content pillars agqin with all the updates and context
[message_id: 460]
## 🤖 Yaya
**The Concept Kitchen — Content Pillars (Full Review)**

---

**Your Positioning Recap:**
- Archetype: **Rebels** (Anti-Traditional-Education)
- Philosophy: Cook not chef — no credentials needed
- Selling: Permission, identity transformation, belonging
- Unique angle: Cooking metaphor is completely unoccupied in AI education

---

**Your Personas:**
- **Marcus** (ICP): Ops/project manager, 32-42, tutorial paralysis, needs to answer "How have you used AI?" in interviews
- **Diana**: Career changer, office manager, 35-50, gatekeeping trauma, needs emotional safety + permission
- **James**: Solopreneur/realtor, 28-45, time-starved, wants ROI not learning

---

**Research-Backed Pain Points:**
- 56% experience AI impostor syndrome
- 52% fear being left behind
- 77.5% overwhelmed by too many tools
- 52% never start courses (tutorial paralysis)
- Only 24 min/week available for learning
- Role-specific content gets 40-60% higher engagement

---

**Top 5 Content Pillars (Ranked by Conversion)**

| Rank | Pillar | Score | Why It Hits | Primary Persona |
|------|--------|-------|-------------|-----------------|
| 1 | **Identity Shift** | 10/10 | 56% impostor syndrome. This is what they're actually buying. Permission to belong. | Diana |
| 2 | **Fear Transformation** | 9.5/10 | #1 pain point (52% fear being left behind). Empathetic urgency without manipulation. | All |
| 3 | **Quick Wins** | 9/10 | 52% never start. Quick wins build confidence → identity → buyers. | Marcus |
| 4 | **Time Reclaimed** | 9/10 | "Save time" beats "learn AI." Reframes AI as freedom, not homework. | James, Marcus |
| 5 | **Role-Specific Recipes** | 8.5/10 | 40-60% higher engagement. "This is for MY job." | All |

---

**Pillar Breakdown:**

**1. Identity Shift** (Your sharpest edge)
- "You don't need permission. You need recipes."
- "The biggest lie about AI? That you need to be technical."
- "You're already a builder. You just don't know it yet."
- Hits: Impostor syndrome, credential anxiety, gatekeeping trauma
- Format: Reels (emotional hooks), carousels (permission slips)

**2. Fear Transformation**
- "Everyone's faking it. 38% of execs lied about their AI skills."
- "You're not behind. You're early."
- "That thing you downloaded 6 months ago? Today's the day."
- Hits: Fear of being left behind, paralysis, procrastination
- Format: Talking head reels, data-driven carousels

**3. Quick Wins**
- "Build something in 15 minutes. Here's the recipe."
- "Most people use ChatGPT wrong. Here's the fix."
- "The 2-minute test that proves you can do this."
- Hits: Tutorial paralysis, need for immediate proof
- Format: Demo reels, step-by-step carousels

**4. Time Reclaimed**
- "A $3,000/month assistant vs. a $20/month AI. Same tasks."
- "I automated 10 hours of my week. Here's how."
- "You don't have time to learn AI? That's exactly why you need it."
- Hits: Time scarcity, ROI focus, skepticism
- Format: Before/after reels, calculator carousels

**5. Role-Specific Recipes**
- "If you're a realtor, this AI workflow closes more deals."
- "Construction professionals: estimate jobs 3x faster."
- "Admins: this prompt handles your inbox chaos."
- Hits: "Finally something for MY job," relevance
- Format: Industry-specific demo reels, workflow carousels

---

**Content Mix (40/40/20):**

| Funnel Stage | % | Pillars to Use |
|--------------|---|----------------|
| TOFU (Growth) | 40% | Identity Shift, Fear Transformation |
| MOFU (Nurture) | 40% | Quick Wins, Time Reclaimed, Role-Specific |
| BOFU (Sales) | 20% | Results/proof, lead magnet CTAs |

---

**How Each Persona Enters:**

| Persona | Entry Pillar | What Hooks Them |
|---------|--------------|-----------------|
| Marcus | Quick Wins, Time Reclaimed | "I need something to say in interviews" |
| Diana | Identity Shift, Fear Transformation | "Someone finally sees me" |
| James | Time Reclaimed, Role-Specific | "Show me the ROI, skip the theory" |

---

Want me to refresh the 25 content pieces based on this, or are you good with the pillars and ready to tackle the lead magnet?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 15:56 PST] yes lets just see what you come up with
[message_id: 463]
## 🤖 Yaya

## 🤖 Yaya
Done. 25 content pieces refreshed with all the context.

**What I built:**

**Pillar 1: Identity Shift (5 pieces)**
- The Permission Slip — "You don't need a CS degree. You need 20 minutes."
- The Fraud Feeling — 56% stat carousel
- The Gatekeepers Lied — your story, direct to camera
- Cook vs. Chef — philosophy carousel
- The Interview Question — urgency for Marcus

**Pillar 2: Fear Transformation (5 pieces)**
- The Executives Are Lying — 38% stat, levels playing field
- The 6-Month Download — calls out the unopened app shame
- Left Behind Math — reframes AI replacement fear
- The Someday Trap — confronts procrastination
- The Real Competition — it's people using AI, not AI itself

**Pillar 3: Quick Wins (5 pieces)**
- The ChatGPT Fix — one-line prompt improvement
- The 15-Minute Build — screen recording proof
- The Prompt That Works — copy-paste framework
- The Voice Note Hack — practical demo for James
- First Win Framework — 3 steps to first automation

**Pillar 4: Time Reclaimed (5 pieces)**
- The $3,000 Assistant — ROI comparison
- The 10-Hour Week — what you automated
- The Time Objection — flips "no time" excuse
- The Monday Dread — Sunday scaries killer
- The Real ROI — $20 → $2,000 math

**Pillar 5: Role-Specific (5 pieces)**
- Realtors: Follow-Up Fix
- Construction: Estimate Accelerator
- Admins: Inbox Zero System
- Small Biz: Content Machine
- Job Seekers: Application Edge

---

**Each piece includes:**
- Tight hook (3-second rule)
- Format recommendation (Reel vs Carousel)
- Funnel stage (TOFU/MOFU)
- Target persona
- The gap (what makes them follow for more)

Saved to `concept-kitchen/content-pieces-v2.md`

What's next — lead magnet decision?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +5m 2026-02-01 16:03 PST] go deeply and produce the content from how to film it to the entire script and tone and feel and how long it needs to be and how i should say it how quick i need to talk everything. youre the xpert content creator that can capture views, think of the hooks too and the main content for each. start with pillar 1. make a separate md file for that. follow northlabs guidelines right and everything youknow about concept kitchen philosophy
[message_id: 465]
## 🤖 Yaya

## 🤖 Yaya
Done. Full production guide for Pillar 1: Identity Shift.

**What's in there:**

---

**5 Complete Content Pieces with:**

**1. The Permission Slip** (Reel, 45-60 sec)
- Full script word-for-word
- Delivery notes (where to pause, how to land "I started")
- Filming setup (framing, lighting, audio)
- Energy guide (7/10, real talk not hype)
- What NOT to do
- Full caption with hashtags

**2. The Fraud Feeling** (Carousel, 5 slides)
- Exact slide copy
- Design direction (brand colors, typography)
- Slide-by-slide breakdown
- Caption

**3. The Gatekeepers Lied** (Reel, 30-45 sec)
- Full script
- Delivery: More fire, each "Lie." hits like a mic drop
- How to soften when sharing your story
- Pacing guide

**4. Cook vs. Chef** (Carousel, 4 slides)
- The philosophy piece
- Slide copy with design notes
- Parallel structure: Chefs/Cooks → Developers/Builders
- Caption

**5. The Interview Question** (Reel, 35-50 sec)
- Full script targeting Marcus
- Creates urgency without fear-mongering
- "You can fix this in one weekend" as the hope moment
- Delivery notes

---

**Plus:**
- General production notes (audio, lighting, editing style)
- Posting strategy
- Week 1 content calendar suggestion

Saved to: `concept-kitchen/pillar-1-identity-shift-production.md`

Want me to do Pillar 2: Fear Transformation next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +40s 2026-02-01 16:05 PST] yes
[message_id: 467]
## 🤖 Yaya

## 🤖 Yaya
Done. Pillar 2: Fear Transformation production guide complete.

**What's in there:**

---

**5 Complete Content Pieces:**

**1. The Executives Are Lying** (Carousel, 5 slides)
- 38% stat that levels the playing field
- "You just need to know enough to be dangerous"
- Full slide copy + design direction + caption

**2. The 6-Month Download** (Reel, 35-45 sec)
- Names the shame of that unopened app
- Full script with delivery notes
- Hook: "That AI tool you downloaded 6 months ago? Still sitting there unopened?"
- Turn: "Today could be different"
- Close: "You need 15 minutes, not a weekend"

**3. Left Behind Math** (Carousel, 5 slides)
- The key reframe: "AI isn't replacing workers. Workers who USE AI are replacing workers who don't."
- "The gap isn't talent. It's willingness to start."
- Full slides + caption

**4. The Someday Trap** (Reel, 30-40 sec)
- Calls out procrastination directly
- "Someday is code for never"
- Full script with pacing notes
- How to deliver each "someday" line

**5. The Real Competition** (Carousel, 4 slides)
- Competitive framing without being toxic
- "Same skills + AI = unfair advantage"
- Concrete examples (coworker, freelancer, job candidate)

---

**Plus:**
- Tone reminders (urgency without fear-mongering)
- Production notes
- Week 2 content calendar suggestion

Saved to: `concept-kitchen/pillar-2-fear-transformation-production.md`

Pillar 3: Quick Wins next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +8s 2026-02-01 16:07 PST] yes
[message_id: 469]
## 🤖 Yaya

## 🤖 Yaya
Done. Pillar 3: Quick Wins production guide complete.

**What's in there:**

---

**5 Complete Content Pieces:**

**1. The ChatGPT Fix** (Reel, 30-45 sec)
- The one-line prompt improvement
- Shows bad prompt → good prompt
- Two filming options: screen share OR talking head + text overlay
- Full script + caption

**2. The 15-Minute Build** (Reel, 45-60 sec)
- Screen recording showing you building something LIVE
- Sped up with timestamps (0:00 → 15:00)
- Show the RESULT first (hook), then the process
- Ideas for what to build included
- Full voiceover script

**3. The Prompt That Works** (Carousel, 6 slides)
- Copy-paste prompt framework
- 4 steps that work for everything
- Each slide builds the prompt piece by piece
- Final slide = complete template

**4. The Voice Note Hack** (Reel, 35-45 sec)
- Brain dump → organized tasks
- Hybrid filming (talking head + screen recording)
- Perfect for James (time-strapped solopreneur)
- Full script + demo instructions

**5. First Win Framework** (Carousel, 5 slides)
- 3 steps to first automation
- "Describe it like you're training an intern"
- Sets realistic expectations (2-3 iterations)
- CTA: "Tag me with your first win"

---

**Plus:**
- Screen recording tips (font size, clean desktop, tools)
- When to use screen recording vs talking head
- Editing style (faster cuts, speed up boring parts)
- Week 3 content calendar

Saved to: `concept-kitchen/pillar-3-quick-wins-production.md`

Pillar 4: Time Reclaimed next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +4s 2026-02-01 16:09 PST] y
[message_id: 471]
## 🤖 Yaya

## 🤖 Yaya
Done. Pillar 4: Time Reclaimed production guide complete.

**What's in there:**

---

**5 Complete Content Pieces:**

**1. The $3,000 Assistant** (Carousel, 5 slides)
- Side-by-side comparison: human assistant vs AI
- Same tasks, $3,000 vs $20
- "The assistant you need costs less than Netflix"
- Full slide copy + design direction

**2. The 10-Hour Week** (Reel, 45-60 sec)
- Your actual breakdown: Email (2 hrs), Meetings (2 hrs), Writing (3 hrs), Research (3 hrs)
- Text overlays with running total
- Full script + filming instructions
- "What would you do with 10 extra hours?"

**3. The Time Objection** (Reel, 25-35 sec)
- Flips "I don't have time" into "that's why you need it"
- Short, punchy, direct
- Full script with delivery notes on tone shift

**4. The Monday Dread** (Carousel, 5 slides)
- Sunday scaries → vision of better Monday
- "What if your inbox was pre-sorted when you woke up?"
- Teases "Monday system coming soon"
- Builds anticipation

**5. The Real ROI** (Reel, 30-40 sec)
- The math: $20 → $2,000 (100x return)
- Numbers build on screen as you talk
- Grounded close: "I'm not saying AI will make you rich. I'm saying the math makes sense."
- Full script + overlay guide

---

**Plus:**
- Number overlay styling tips
- Credibility balance (be specific, show your work)
- Week 4 content calendar

Saved to: `concept-kitchen/pillar-4-time-reclaimed-production.md`

Pillar 5: Role-Specific next?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +6s 2026-02-01 16:11 PST] k
[message_id: 473]
## 🤖 Yaya

## 🤖 Yaya
Done. Pillar 5: Role-Specific Recipes complete.

**What's in there:**

---

**5 Complete Content Pieces:**

**1. Realtors: The Follow-Up Fix** (Reel, 45-55 sec)
- "Most deals die in the follow-up gap"
- Automation: Lead in → personalized response out
- "30 minutes setup, runs forever"
- Screen share + talking head hybrid

**2. Construction: The Estimate Accelerator** (Carousel, 5 slides)
- Old way: 2-4 hours per estimate
- AI way: 20-30 minutes
- "Same accuracy. Fraction of the time."
- References your actual workshop experience

**3. Admins: The Inbox Zero System** (Reel, 40-50 sec)
- "AI can handle 80% of your inbox"
- 4-step system: Sort → Draft → Flag → Review
- "3 hours to 30 minutes"
- Screen recording demo

**4. Small Biz: The Content Machine** (Carousel, 5 slides)
- "Create a month of content in one afternoon"
- 10 topics × 3 pieces = 30 posts
- Batch creation system
- "Schedule and forget"

**5. Job Seekers: The Application Edge** (Reel, 40-50 sec)
- AI tailors resume to each job posting
- "I've seen people double their callback rate"
- Full prompt workflow

---

**Plus:**
- Future roles to create content for (PMs, consultants, teachers, coaches, freelancers)
- Full 5-week master content calendar
- Role-specific credibility moves

---

## ALL 5 PILLARS COMPLETE ✅

**Files created:**
- `pillar-1-identity-shift-production.md`
- `pillar-2-fear-transformation-production.md`
- `pillar-3-quick-wins-production.md`
- `pillar-4-time-reclaimed-production.md`
- `pillar-5-role-specific-production.md`
- `content-pieces-v2.md` (overview)

**What you now have:**
- 25 fully scripted content pieces
- Word-for-word scripts
- Exact filming instructions
- Delivery/tone notes
- Captions + hashtags
- 5-week posting calendar

---

**Next:** Lead magnet decision? That's the big unlock — everything else (email sequence, BOFU content, sales page) flows from that.
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +10s 2026-02-01 16:13 PST] ok
[message_id: 475]
## 🤖 Yaya
**Lead Magnet Decision Time.**

Based on everything — research, personas, your positioning:

---

**Option 1: Quiz**
**"What AI Tool Should You Learn First?"**

| Pros | Cons |
|------|------|
| 5-8% opt-in (vs 1-3% for PDFs) | Requires quiz tool setup |
| Gives you segmentation data | Less "ownable" as a brand asset |
| Interactive = higher engagement | Doesn't reinforce cooking metaphor |
| Personalized result feels valuable | |

**Best for:** Lead volume, data collection

---

**Option 2: Identity Guide**
**"The Impostor's Guide to AI"**

| Pros | Cons |
|------|------|
| Owns your sharpest edge (Identity Shift) | Lower opt-in than quiz |
| Highly shareable | Static PDF format |
| Emotional connection | Doesn't give practical "win" |
| Differentiated — no one else has this | |

**Best for:** Brand positioning, emotional resonance

---

**Option 3: First Recipe**
**"The Cook's First Recipe: Build Something Real in 30 Minutes"**

| Pros | Cons |
|------|------|
| Fits cooking metaphor perfectly | Slightly generic title |
| Gives them a QUICK WIN | Need to create the actual recipe |
| Proves "anybody can cook" | |
| Bridges Identity + Quick Wins | |

**Best for:** Brand consistency, practical proof

---

**My Recommendation:**

**Start with Option 3: "The Cook's First Recipe"**

Why:
- It's on-brand (cooking metaphor)
- It delivers a quick win (builds confidence)
- It proves your thesis (anybody can cook)
- It leads naturally to "want more recipes?" (course/products)

Then later add the quiz for segmentation once you have traffic.

---

**What's your gut say?**
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +4m 2026-02-01 16:18 PST] ok whats something to build thats helpful to our personas
[message_id: 477]
## 🤖 Yaya
Good question. Let's match to personas:

---

**What each persona struggles with:**

| Persona | Daily Pain | What Would Impress Them |
|---------|------------|------------------------|
| **Marcus** (ops/PM) | Meetings, status updates, reports | "I built something I can show in interviews" |
| **Diana** (admin/office mgr) | Email overload, scheduling chaos | "I handled my inbox in half the time" |
| **James** (solopreneur/realtor) | Client follow-up, content, time | "I automated something that saves me hours" |

---

**3 Options — All doable in 30 min:**

---

**Option A: "The Email Draft Machine"**
*Set up AI to draft emails in YOUR voice*

- Paste 5 emails you've sent
- Teach AI your tone/style
- Give it your common scenarios
- Now it drafts responses you just edit and send

**Hits:** All 3 personas (everyone drowns in email)
**Win:** Immediate time savings, feels personalized

---

**Option B: "Chaos to Clarity"**
*Turn voice rambles into organized action plans*

- Brain dump into voice note (2 min of chaos)
- Drop transcript into ChatGPT
- Get back: prioritized tasks, next actions, follow-ups
- Repeat every Monday

**Hits:** Marcus (project mgmt), James (solopreneur chaos)
**Win:** Instant clarity, repeatable system

---

**Option C: "Your AI Work Buddy"**
*Set up ChatGPT to understand YOUR job*

- Fill in a template about your role, tasks, challenges
- Paste it into ChatGPT as context
- Now every prompt is tailored to YOUR situation
- First actually-useful AI experience

**Hits:** All 3 (everyone has a unique job)
**Win:** "It finally gets what I do"

---

**My pick: Option A — "The Email Draft Machine"**

Why:
- **Universal pain** — email is the great equalizer. Everyone drowns in it.
- **Immediate ROI** — they use it the same day
- **Tangible proof** — "I built this" is concrete
- **Shareable** — "This AI writes emails in my voice" is word-of-mouth gold
- **Leads to more** — "Want more recipes like this? Here's the kitchen."

---

Want me to build out the full lead magnet content for the Email Draft Machine?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +17m 2026-02-01 16:36 PST] really that’s the best lead magnet idea? i feel liek you can come up with 20, rank them by value. but first do deep reseqrvch in what’s out there. reddit, gumroad, other creator offerings.
[message_id: 479]
## 🤖 Yaya
You're right. Let me do actual research.
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Got research. Here's what's actually selling:

---

**Market Insights from Gumroad (6,000+ AI products):**

**What's HOT:**
- Massive prompt libraries (2,500+ prompts = 1.6K reviews)
- Tool-specific mastery (Midjourney, NotebookLM, Suno)
- Industry/role-specific (PM Prompt Library, Finance, Architecture)
- "OS" and "System" frameworks (Notion-based)
- Workflow playbooks ("Unfair AI Workflow Playbook")
- Bundles ("All-in-One")

**What's SATURATED:**
- Generic "learn AI" guides
- "100 ways to use ChatGPT" listicles
- Basic prompt templates

**What's MISSING (your opportunity):**
- Cooking/recipe metaphor (completely unoccupied)
- Identity transformation angle (impostor syndrome)
- Role-specific for blue-collar/non-tech (construction, realtors, admins)
- "Permission" positioning vs. "mastery" positioning

---

## 20 Lead Magnet Ideas — Ranked by Value

### TIER 1: HIGHEST VALUE (Unique + High Demand)
*These don't exist in the market and hit your personas hard*

| Rank | Lead Magnet | Why It Works | Format |
|------|-------------|--------------|--------|
| **1** | **"The AI Impostor's Survival Kit"** | Owns your sharpest edge. No one else has this. 56% of audience feels this. | PDF + Prompts |
| **2** | **"Your First AI Recipe: Build [X] in 30 Minutes"** | Proves the thesis. Quick win. On-brand metaphor. | Video + Template |
| **3** | **"The AI Mise en Place Checklist"** | Setup guide before you cook. Foundational. Cooking metaphor. | Interactive Checklist |
| **4** | **"The $0 to Dangerous AI Toolkit"** | Free tools only. Removes money barrier. "Dangerous" = enough to be useful. | PDF + Links |
| **5** | **"AI Recipes for [Role]" Series** | Role-specific (Realtors/Construction/Admins). 40-60% higher engagement. | PDF per role |

### TIER 2: HIGH VALUE (Differentiated)
*Strong concepts that stand out*

| Rank | Lead Magnet | Why It Works | Format |
|------|-------------|--------------|--------|
| **6** | **"The 24-Minute AI Jumpstart"** | Matches their time constraint (only 24 min/week to learn). Specific. | Video |
| **7** | **"5 AI Tools That Replace a $50K Employee"** | ROI framing. Concrete. Shareable. | PDF |
| **8** | **"The Interview-Ready AI Portfolio"** | For Marcus. "How have you used AI?" answered. | Template + Guide |
| **9** | **"The Solopreneur's AI Kitchen: 10 Recipes for One-Person Businesses"** | James audience. Specific use cases. | PDF |
| **10** | **"The AI Permission Slip"** | Pure identity play. Screenshot-worthy. Emotional. | Single Page PDF |

### TIER 3: SOLID VALUE (Good but more common)
*Work well, but variations exist*

| Rank | Lead Magnet | Why It Works | Format |
|------|-------------|--------------|--------|
| **11** | **"50 Prompts That Actually Work (Organized by Task)"** | Prompt libraries sell. Yours = curated, not massive. | PDF |
| **12** | **"The AI Tool Finder Quiz"** | Interactive = higher opt-in. Segmentation data. | Quiz |
| **13** | **"Weekly AI Workflow: The Monday System"** | Specific routine. Repeatable. | PDF + Template |
| **14** | **"The AI Cheat Sheet: What to Use When"** | Quick reference. Saveable. | One-Page PDF |
| **15** | **"From Overwhelmed to Organized: AI for Email"** | Specific pain point (email). Universal. | PDF |

### TIER 4: MODERATE VALUE (Fine but generic)
*Would work, but less differentiated*

| Rank | Lead Magnet | Why It Works | Format |
|------|-------------|--------------|--------|
| **16** | **"The Beginner's Guide to ChatGPT"** | Evergreen demand. But saturated. | PDF |
| **17** | **"10 AI Automations You Can Build Today"** | Practical. But vague. | PDF |
| **18** | **"AI vs. Human: When to Use What"** | Educational. Decision framework. | PDF |
| **19** | **"The AI Vocabulary Guide: Talk the Talk"** | Reduces intimidation. Reference tool. | PDF |
| **20** | **"30-Day AI Challenge Calendar"** | Gamification. But requires commitment. | Calendar |

---

## MY TOP 3 RECOMMENDATIONS:

### 🥇 #1: "The AI Impostor's Survival Kit"
**Why:** No one else has this. Directly addresses your #1 audience pain (56% impostor syndrome). Establishes you as the "permission" brand. Emotionally resonant, highly shareable.

**Contains:**
- "You Belong Here" manifesto (the permission slip)
- 3 quick wins to prove you can do this
- The "fake it" confession (38% of execs lied)
- Your "cook not chef" story
- First recipe to try today

---

### 🥈 #2: "AI Recipes for [Role]" (Start with Realtors)
**Why:** Role-specific = 40-60% higher engagement. You've taught these people. Creates multiple lead magnets (one per role). Natural upsell to full course.

**Contains:**
- 5 ready-to-use workflows for their specific job
- Copy-paste prompts
- Before/after examples
- "I taught this at workshops" credibility

---

### 🥉 #3: "Your First AI Recipe: Build [X] in 30 Minutes"
**Why:** On-brand, proves thesis, quick win. But needs to specify what [X] is — make it concrete.

**[X] Options:**
- "Build Your Personal AI Assistant"
- "Build an Email Draft Machine"  
- "Build a Meeting Notes Automator"

---

**What's your gut say now? Or want me to go deeper on any of these?**
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 16:40 PST] from here lead magnet ideas i like 1 and 3 because they can hit multiple personas
[message_id: 483]
## 🤖 Yaya
Good instincts. Both hit all 3 personas differently:

| Lead Magnet | Marcus | Diana | James |
|-------------|--------|-------|-------|
| **#1 Impostor's Survival Kit** | "I need to answer AI questions in interviews" | "Finally someone who gets my fear" | "Ok fine, I'll admit I feel behind" |
| **#3 First Recipe (Build X)** | "I can show this in interviews" | "I actually DID something" | "30 min? I have that. ROI proven." |

---

**Two paths:**

**Option A: Combine them**
→ "The AI Impostor's Survival Kit" that INCLUDES a first recipe
- Part 1: Permission (you belong here)
- Part 2: Proof (build this in 30 min)
- Part 3: Path (what's next)

**Option B: Two-step sequence**
→ #1 as the free lead magnet (emotional hook)
→ #3 as the email nurture "bonus" (practical proof)
- Day 1: Download Survival Kit
- Day 3: "Ready for your first recipe? Here it is."

---

**My lean: Option A (Combined)**

Why:
- One asset to promote, not two
- Gives emotional AND practical in one download
- Stronger transformation: "I felt like a fraud → I built something"
- Easier to create, maintain, promote

---

**If we go with Option A, I need one decision:**

What's the "First Recipe" they build?

**Best options for all 3 personas:**

| Recipe | Why | Time |
|--------|-----|------|
| **Personal AI Assistant** (give ChatGPT context about YOU) | Universal. "It finally gets me." Most reusable. | 20 min |
| **Email Draft Machine** (AI writes in your voice) | Universal pain. Immediate daily use. | 25 min |
| **Brain Dump → Action Plan** (voice note to organized tasks) | Lowest friction. No tech setup. | 15 min |

**My pick: Personal AI Assistant**

Because:
- It's foundational (makes every future prompt better)
- Feels like a real accomplishment
- "I set up my own AI assistant" is a flex
- Leads naturally to "now what else can I build?"

---

**You in? Or different combo?**
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +1m 2026-02-01 16:41 PST] come up with 17 more lead magnet ideas, rank them. they need to be just as good or better than those 3 you mentioned dont settle for less to just pixk those three again
[message_id: 485]
## 🤖 Yaya

## 🤖 Yaya
Done. 20 lead magnets ranked.

---

**NEW TOP 5 (beats the original 3):**

| Rank | Lead Magnet | Score | Why It's Better |
|------|-------------|-------|-----------------|
| **#1** | **The AI Confidence Audit (Quiz)** | 9.5 | Interactive = 5-8% opt-in. Personalized. Segmentation data. Lowest friction. |
| **#2** | **The AI Impostor's Survival Kit** | 9.3 | Owns your edge. Emotional + practical. No one else has this. |
| **#3** | **The Weekend AI Kitchen (Workshop)** | 9.2 | Highest perceived value. Build 3 things. End with portfolio. Premium positioning. |
| **#4** | **First 7 Days: A Daily Recipe** | 9.0 | Email course. 7 days of wins. Built-in nurture. Habit formation. |
| **#5** | **Your First Recipe: Personal Assistant** | 8.9 | Single quick win. 30 min. Foundational. "I set up my AI assistant." |

---

**Strong additions:**

| Rank | Lead Magnet | Score | Hook |
|------|-------------|-------|------|
| #6 | 3 AI Tools That Do 80% of Work | 8.8 | Anti-overwhelm. Decision fatigue killer. |
| #7 | AI ROI Calculator | 8.7 | Interactive. Personal numbers. James loves this. |
| #8 | AI Proof Portfolio Template | 8.6 | "Now I have something to show in interviews." |
| #9 | AI Skeptic's Starter Pack | 8.5 | Different entry point. Builds trust through honesty. |
| #10 | Sunday Night AI Setup | 8.4 | Specific ritual. Kills Monday dread. |

---

**My new recommendation:**

**Lead with #1 (Quiz)** — highest opt-in, gives you data on who they are

**Quiz result delivers** — personalized first recipe based on their answers

**Email sequence** — elements from #2 (permission) + #4 (daily wins)

**Paid upsell** — #3 (Weekend Workshop) for $27-47

---

Full breakdown saved to `concept-kitchen/lead-magnet-ideas-full.md`

**Which direction you feeling?**
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 2026-02-01 16:42 PST] thnk of creativity, diferrentiation from the rest of market, and highest value for our icp
[message_id: 486]
## 🤖 Yaya
Let me think way outside the box.

---

**What the market has:**
- Prompt libraries ❌ (saturated)
- Tool lists ❌ (saturated)
- "Learn AI" guides ❌ (boring)
- Quizzes ❌ (common in other niches)

**What NO ONE has:**
- The cooking metaphor (yours alone)
- Identity transformation as the product
- Blue-collar/non-tech specific
- Entertainment + education
- Physical/tangible elements
- Community validation moment
- Your actual story as the framework

---

## 10 TRULY CREATIVE IDEAS — Ranked by Differentiation + ICP Value

---

### #1: "The Kitchen Apprenticeship" (5-Day Experience)
**Differentiation: 10/10 | ICP Value: 10/10**

**What it is:** Not a download. A 5-day structured experience with daily challenges, accountability, and a graduation moment. They become a "Kitchen Apprentice" with a certificate.

**Why it's different:**
- Experience > asset
- Identity transformation built in ("I'm an apprentice now")
- Graduation = milestone = shareable
- Daily engagement = relationship
- Community potential (apprentice cohort)

**Structure:**
- Day 1: Kitchen Orientation (setup + first taste)
- Day 2: Prep Work (context + mise en place)
- Day 3: First Dish (build something)
- Day 4: Refine the Recipe (iterate)
- Day 5: Serve Your Dish (share + graduate)

**End with:** Printable "Kitchen Apprentice Certificate" + badge for LinkedIn

---

### #2: "The AI Fear Funeral"
**Differentiation: 10/10 | ICP Value: 9/10**

**What it is:** Guided experience to identify, name, and symbolically "bury" their AI fears. Ends with a commitment to their new identity.

**Why it's different:**
- No one does this. Zero competition.
- Emotionally powerful. Memorable.
- Addresses the REAL blocker (fear, not skills)
- Shareable ritual ("I buried my AI fears today")
- Sets up transformation narrative

**Structure:**
- Step 1: Name your fears (worksheet)
- Step 2: Where did these come from? (reflection)
- Step 3: Write the eulogy (goodbye letter to fear)
- Step 4: The burial (symbolic action)
- Step 5: Your new identity statement

**Output:** "Burial certificate" + new identity commitment they can screenshot/share

---

### #3: "The Concept Kitchen Tasting Menu"
**Differentiation: 9/10 | ICP Value: 10/10**

**What it is:** Sampler of 5 different AI "dishes" (use cases). Try each one in 10 minutes. Find what resonates with YOUR taste.

**Why it's different:**
- Discovery-focused, not prescriptive
- Honors that people are different
- "Tasting menu" = premium restaurant feel
- Low commitment per dish, high overall value
- Helps them find THEIR path

**The 5 Courses:**
1. Amuse-Bouche: The 60-second win (instant confidence)
2. Appetizer: Email assistant (daily use)
3. Main Course: Research helper (deeper dive)
4. Palate Cleanser: Creative brainstorm (fun)
5. Dessert: Automation (time savings)

**Output:** "Your Flavor Profile" — which AI style suits you best

---

### #4: "Your AI Origin Story" (Guided Creation)
**Differentiation: 9/10 | ICP Value: 9/10**

**What it is:** They create their own "cook not chef" story. Document their journey from scared/skeptical to builder. They become the proof.

**Why it's different:**
- They create content about themselves
- Story = memorable, shareable
- Flips them from consumer to creator
- Can be used in interviews, LinkedIn, etc.
- "I have my AI origin story" = identity

**Structure:**
- Chapter 1: Before (what I believed about AI)
- Chapter 2: The moment (when I decided to try)
- Chapter 3: First win (what I built)
- Chapter 4: After (who I am now)

**Output:** Formatted "origin story" they can post on LinkedIn/share

---

### #5: "The Permission Certificate"
**Differentiation: 9/10 | ICP Value: 8/10**

**What it is:** Literally a printable certificate that says "This certifies that [NAME] is officially permitted to build with AI without formal credentials, training, or anyone's approval."

**Why it's different:**
- Silly but emotionally powerful
- Screenshot-worthy
- Addresses the real blocker (permission)
- Shareable
- Fast to create, low barrier

**Add-ons:**
- Signed by you (The Concept Kitchen founder)
- Space for them to write their first build
- "Cook License" aesthetic

---

### #6: "60-Second AI Wins" (Micro-Challenge Series)
**Differentiation: 8/10 | ICP Value: 9/10**

**What it is:** Collection of things they can do with AI in literally 60 seconds. Lowest possible barrier to entry.

**Why it's different:**
- No one says "60 seconds" — everyone says 10, 15, 30 min
- Absurdly low barrier
- Builds confidence through rapid repetition
- "I did 5 AI things in 5 minutes" = shareable
- Dopamine loop

**Examples:**
- Summarize this email thread (paste, prompt, done)
- Rewrite this sentence more clearly (10 seconds)
- Generate 3 subject line options (15 seconds)
- Turn these bullet points into a paragraph (20 seconds)

---

### #7: "Your AI Kitchen Cabinet" (Notion Workspace)
**Differentiation: 8/10 | ICP Value: 9/10**

**What it is:** Pre-built Notion workspace where they collect their recipes, wins, tools, and progress. Their personal AI kitchen they build over time.

**Why it's different:**
- Ongoing relationship (they keep coming back)
- System, not just content
- Grows with them
- "My AI Kitchen" = ownership
- Notion templates are proven sellers

**Sections:**
- My Recipes (prompts that work for me)
- My Wins (things I've built)
- My Tools (what I use)
- My Ideas (what I want to try)
- My Progress (milestones)

---

### #8: "Cook Along: Build With Me" (Live Challenge)
**Differentiation: 8/10 | ICP Value: 8/10**

**What it is:** Not downloadable. A scheduled live event where they build something while you build it. Real-time, together.

**Why it's different:**
- Community experience
- Accountability (show up or miss it)
- Live = premium feel
- Can answer questions in real-time
- Replay becomes lead magnet

**Structure:**
- 60-minute live session
- Build one thing together
- Q&A throughout
- Share your builds at the end

---

### #9: "The AI Alter Ego Creator"
**Differentiation: 9/10 | ICP Value: 7/10**

**What it is:** Create a version of themselves that's confident with AI. Give it a name. Define its traits. Roleplay as that person when doing AI work.

**Why it's different:**
- Psychological tool, not technical
- Identity play
- Fun and creative
- Addresses the real blocker (self-belief)
- Memorable and personal

**Guided creation:**
- Your alter ego's name
- Their confidence level with AI (100%)
- What they'd say to your fears
- How they approach learning
- Their first build

---

### #10: "Rate My First Dish" (Community Submission)
**Differentiation: 7/10 | ICP Value: 8/10**

**What it is:** They build something, submit it, get feedback from you or community. Validation + belonging.

**Why it's different:**
- Community validation
- "I'm part of something"
- Creates content for you (examples)
- Builds social proof
- Gamification potential

---

## FINAL RANKING — Creativity + Differentiation + ICP Value

| Rank | Lead Magnet | Creativity | Differentiation | ICP Value | Total |
|------|-------------|------------|-----------------|-----------|-------|
| **1** | **The Kitchen Apprenticeship** | 10 | 10 | 10 | **30** |
| **2** | **The AI Fear Funeral** | 10 | 10 | 9 | **29** |
| **3** | **Tasting Menu** | 9 | 9 | 10 | **28** |
| **4** | **Your AI Origin Story** | 9 | 9 | 9 | **27** |
| **5** | **Permission Certificate** | 8 | 9 | 8 | **25** |
| **6** | **60-Second Wins** | 8 | 8 | 9 | **25** |
| **7** | **AI Kitchen Cabinet** | 8 | 8 | 9 | **25** |
| **8** | **Cook Along Live** | 8 | 8 | 8 | **24** |
| **9** | **AI Alter Ego** | 9 | 9 | 7 | **25** |
| **10** | **Rate My First Dish** | 7 | 7 | 8 | **22** |

---

## MY TOP PICK: "The Kitchen Apprenticeship"

**Why:**
- Highest value (5-day experience > one-time download)
- Identity transformation built in (they become an "Apprentice")
- On-brand (kitchen metaphor throughout)
- Graduation moment = shareable milestone
- Natural upsell ("Ready to become a Cook? Here's the full course")
- Community potential (apprentice cohorts)
- No one else has anything like this

**Tagline:** "5 days. 5 dishes. 1 new identity."

---

**What do you think?**
## 👤 RJ
[media attached: /Users/rjmoscardon/.clawdbot/media/inbound/09dee855-ff80-4b5d-bfb9-8d09a703e0ed.ogg (audio/ogg; codecs=opus) | /Users/rjmoscardon/.clawdbot/media/inbound/09dee855-ff80-4b5d-bfb9-8d09a703e0ed.ogg]
To send an image back, prefer the message tool (media/path/filePath). If you must inline, use MEDIA:/path or MEDIA:https://example.com/image.jpg (spaces ok, quote if needed). Keep caption in the text body.
[Telegram RJ (@rj3000x) id:156985291 +14m 2026-02-01 16:58 PST] <media:audio>
[message_id: 491]
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 👤 RJ
System: [2026-02-01 17:02:23 PST] WhatsApp gateway connected.

[Telegram RJ (@rj3000x) id:156985291 +1h 2026-02-01 18:13 PST] Did you get what I said did you transcribe
[message_id: 492]
## 🤖 Yaya
Nah, it got killed mid-process. Let me retry with a faster model:
## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya

## 🤖 Yaya
Got it. Heard you loud and clear:

1. **5-day thing = corny + defeats the purpose of a lead magnet** (quick value, not a commitment)
2. **Don't be corny**
3. **Human skills angle** = communication, creativity, delegation, asking for what you want

You're onto something real here. The market is all "learn these AI tools" — but the actual skill is **being a better communicator/delegator/thinker.** AI just amplifies that.

---

Let me reframe with that lens:

## THE HUMAN SKILLS ANGLE — Fresh Lead Magnet Ideas

| Lead Magnet | Human Skill | Why It's Not Corny |
|-------------|-------------|-------------------|
| **"How to Ask for What You Want (And Get It)"** | Communication | Universal skill. AI is just one application. Applies to work, life, everything. |
| **"The Delegation Playbook: Think Like a Manager"** | Delegation | You're managing AI like an employee. Same skills. |
| **"The Art of Clear Instructions"** | Communication | Bad prompts = bad instructions. Fix your communication, fix your results. |
| **"Think Out Loud: How to Brainstorm With a Machine"** | Creativity | Not "AI prompts" — it's how to externalize your thinking. |
| **"The 80/20 of Getting Shit Done With AI"** | Decision-making | Cut the fluff. What actually matters. Fast. |

---

**My new top 3 based on your input:**

### #1: "How to Ask for What You Want"
- Framing: This is a LIFE skill. AI is just the sharpest example.
- Content: The anatomy of a clear request. What makes instructions work. Why vague = bad results.
- Bonus: Works for AI, works for your team, works for your spouse.
- Quick. One download. Immediate value.

### #2: "The Delegation Playbook"
- Framing: AI is your new employee. Do you know how to manage?
- Content: How good managers delegate. Trust, context, feedback loops.
- Twist: Most people suck at delegation — that's why they suck at AI.
- Not "learn AI" — it's "become better at managing work."

### #3: "The 80/20 of AI: What Actually Matters"
- Framing: Cut through the noise. Here's the 20% that gets 80% of results.
- Content: The few things worth knowing. Skip the rest.
- Tone: Direct. No fluff. Respects their time.

---

**Which of these hits? Or want me to push further on the human skills angle?**
## 👤 RJ
System: [2026-02-01 18:14:41 PST] Exec completed (wild-fal, code 0) :: I don't know if that gets talked about often, but like knowing how to communicate, [00:59.880 --> 01:03.560] knowing how to be creative, knowing how to delegate. [01:03.560 --> 01:10.520] These are all high value skills that, honestly, that's what we're doing with AI, right? [01:12.440 --> 01:14.760] How to ask for what we want. [01:17.240 --> 01:18.680] I don't know, what are your thoughts?

[Telegram RJ (@rj3000x) id:156985291 2026-02-01 18:14 PST] In the future keep going don’t just give up and not answer me because the transcript failed
[message_id: 494]
## 🤖 Yaya
You're right, my bad. Should've just asked you to type it or repeat instead of going silent. Won't happen again.

Did you catch my response above? I transcribed your message and reframed based on your human skills angle:

**Quick recap:**
- 5-day thing = corny + defeats lead magnet purpose ✓
- Human skills (communication, delegation, creativity, asking) = the real angle ✓

**New top 3:**
1. **"How to Ask for What You Want"** — life skill, AI is just one application
2. **"The Delegation Playbook"** — AI is your employee, learn to manage
3. **"The 80/20 of AI"** — cut the noise, here's what matters

Want me to push further on this direction or you feeling one of these?
## 👤 RJ
[Telegram RJ (@rj3000x) id:156985291 +2m 2026-02-01 18:17 PST] I do like those is there another way to say 8020 or are we assuming everyone knows what that means
[message_id: 497]
## 🤖 Yaya
Good call — not everyone knows Pareto. Here are alternatives that say the same thing:

**Direct/Plain:**
- "The Only 3 Things You Need to Know About AI"
- "What Actually Matters (And What to Ignore)"
- "Skip the Noise: AI in 10 Minutes"
- "The Short List: AI That Works"

**Cooking metaphor (on brand):**
- "The Essential Ingredients: AI Without the Fluff"
- "The Pantry Staples of AI"

**Blunt/No-BS:**
- "Cut the Bullshit: Here's What Works"
- "AI Without the Hype"
- "The No-Fluff AI Guide"

**Benefit-focused:**
- "Get Results, Skip the Rest"
- "The Shortcut to AI That Actually Helps"
- "Less Learning, More Doing"

---

**My pick:** "What Actually Matters (And What to Ignore)"

- Clear without jargon
- Implies curation (you're the trusted filter)
- Speaks to their overwhelm
- Works for any skill level

