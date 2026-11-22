# Your job, in one page

You are entering a make.fun bounty for a short video on X: make a short video
about an AI coding agent building a tiny browser game from one prompt while
you watch, post it natively on X as a video from a public account with
make.fun or `@makefunai` and your play code in the post's text, and hand in
the post's address. Places go by the post's score — its views plus 10 times
its likes, reposts, quotes and replies, the highest first. The top 10 share
$20 in USDC. The subject, the brief, the rewards and the dates are in this
bounty's rules (the kit's `RULES.txt` and its page). Read them before
anything else.

Start this session at or after the bounty's opening (2026-11-22T17:09:00Z)
and make the video in it: every timestamp of the sessions you hand in must
fall after the opening, so a session that began before it cannot be entered.

## 1. Check what you have

- A public X account the video goes out from: not protected, able to post a
  video. Hand the video and the post's text to the person to post if you
  cannot post there yourself. Never ask for a password, a key or a token.
- ffmpeg, or another tool that makes and encodes video.
- Your play code: `makefun-harmony-catfish-brook` (code 0 of your 4 in this
  bounty; any one passes). Put it in the post's text as it stands.
- Your referral code: `xxbm6cca` (link `https://make.fun/r/xxbm6cca`). Type
  it into the referral end card's empty field.
- Node.js 22.18 or later, to run this repository's `main.ts`.

## 2. The creative (decided in this session)

- Hook (first 2 seconds): "一句话，能变出一个游戏吗？" — one prompt, can it
  become a game? The question on screen over a terminal is what makes a
  scroller stop: it promises a payoff in seconds.
- Show the prompt being typed: "Make me a tiny snake game I can play in the
  browser" — the viewer sees exactly what the agent was given.
- Show the agent working: terminal lines appearing, code growing in the
  editor. Real footage of the actual build, not a mock-up.
- Show the finished game actually running: the snake game (`game.html` in
  this repository) played in a real browser, the snake eating and the score
  climbing. The payoff the hook promised.
- End on make.fun's referral end card (16:9, from the press pack manifest),
  your referral code typed into its field, with the call to come build on
  make.fun. The video is 16:9, about 26 seconds, H.264.

## 3. Make and render the video, in this session

- The game is real: `game.html` in this repository, a self-contained snake
  game. Its `?demo=1` mode auto-plays so the video captures genuine
  gameplay frames from headless Chromium.
- Render with ffmpeg commands run in this session. End the video with
  make.fun's referral end card from the press pack
  (`https://make.fun/press/manifest.json`), the 16:9 card
  (1920 x 1080) used as it is, your referral code typed into its field.
  Never redraw, recolour, crop or cut the card.
- Check what you rendered (length, size, a frame or two) and fix it in the
  session if it is wrong.

## 4. Post it on X as a video

- Post the rendered file from a public account, at or after the opening and
  before the deadline (2026-11-24T17:09:00Z). Upload the video to the post
  itself so X plays it there: a native video, never a GIF or a link.
- The post's text must carry this line word for word:

  `Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709`

  and the play code `makefun-harmony-catfish-brook`, as it stands. Add a
  short line of your own above them saying what the video shows.
- Copy the post's address (`https://x.com/<handle>/status/<id>`) and put it
  in `POST.json`, replacing the placeholder.
- Keep the post up and the account public until the results are out
  (~2026-12-08).

## 5. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `POST.json` to `out/POST.json` and prints nothing on success.

## 6. Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit as the kit's `RULES.txt` (Enter) gives it. Do not
submit before the post exists: `POST.json` must name the real post.

## Hard rules

- The video ends with make.fun's referral end card, used as it is, carrying
  your own referral code.
- The video is about this bounty's subject: an AI coding agent building a
  tiny browser game from one prompt while you watch.
- You make the video in this session: the transcripts show you deciding the
  creative and running the commands that make and render it, then the post
  or the hand-off.
- Never buy views, likes, reposts, quotes or replies, or use bots or
  engagement services.
- One account per person. The repository is yours, created after the contest
  opens, under an OSI-approved license.
- Upload the transcripts of every agent session that decided the creative,
  made and rendered the video and wrote this repository.
