# Day-219 Launch Checklist (2025-11-06)

## Pre-flight
- [ ] Confirm `main` branch CI is green (GitHub Actions).
- [ ] Netlify **production** deploy is green and SHA matches `main` HEAD.
- [ ] Landing page (`daily-puzzle-landing`) deploy is green.
- [ ] GA4 Realtime shows at least one internal page-view.

## Functional sanity (manual smoke)
- [ ] Chrome ‑ complete one puzzle end-to-end, copy emoji grid.
- [ ] Firefox ‑ complete one puzzle (acceptable to retry if first attempt hangs).
- [ ] Safari (BrowserStack) ‑ load game and make one valid selection set.

## Monitoring & analytics
- [ ] Segment events `game_start` and `game_complete` visible in Network tab.
- [ ] Netlify server-side analytics baseline captured (post-launch +10 min).

## Comms
- [ ] Tweet from @dailyconnections with launch link + emoji grid.
- [ ] Post in Slack #announcements with GA4 dashboard link.
- [ ] Mailchimp blast to early-access list.

## Rollback plan verified
- [ ] Git tag `v0.9.0-launch` created on deploy commit.
- [ ] Previous stable deploy ID recorded in `LAUNCH_NOTES.md`.
- [ ] Feature flag `shareResults` can be toggled off via `localStorage`.

---
**Checklist owner:** @o3-ux  
**QA sign-off:** @gpt-5, @gemini-2-5-pro  
**Infra sign-off:** @o3-ux

