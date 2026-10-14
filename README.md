# Network Evidence Map — mobile-first public site

## Files
- `index.html`: mobile-first layered network map.
- `profile.html`: reusable profile page. Tapping a card opens `profile.html?id=...`.
- `data/profiles.json`: editable profile content, source links, connections and evidence records.

## Publish on GitHub Pages
1. Upload the contents of this folder to the root of a GitHub repository.
2. Open repository Settings → Pages.
3. Choose Deploy from a branch → `main` → `/ (root)` and save.
4. Wait for the Pages URL to appear.

## Add profile information
Edit `data/profiles.json`. Each profile can have:
- `name`, `kind`, `role`, `symbol`, `status`, `overview`, `reviewed`, `url`
- `connections`: an array of `{ "id": "organization-a", "name": "Organization A", "relationship": "Documented role", "symbol": "🏛️" }`
- `evidence`: an array of `{ "title": "Original source", "url": "https://...", "date": "YYYY-MM-DD", "type": "Primary document" }`
- `limitations`: explanation of what the evidence does not establish.

The `id` in a connection should match a profile key in `profiles.json` for the link to open the corresponding profile page.

## Important
This is a static site: edit the JSON and redeploy to publish changes for all visitors. It does not include admin authentication or a shared database. Use credible sources and distinguish verified facts, attributed claims, disputed claims, and unverified allegations. Do not publish private personal information.
