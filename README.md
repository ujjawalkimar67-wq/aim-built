# Cube Village Stand-Off

This project is a pure browser `Three.js` game built as a static site. It runs directly in the browser with HTML, CSS, and JavaScript modules.

## Project Structure

- Main entry: `index.html`
- Main JavaScript: `src/main.js`
- Styles: `styles.css`
- Assets: `assets/`

## Local Run

No npm build is required for the client.

Run the game locally with VS Code Live Server:

1. Install the `Live Server` extension in VS Code.
2. Right-click `index.html`.
3. Choose `Open with Live Server`.

## Deployment

This game is ready to deploy as a Render Static Site.

- Service type: `Static Site`
- Build command: none / leave blank
- Publish directory: `.`
- Entry file: `index.html`

## Notes

- The client uses `Three.js` from CDN imports.
- The main static client does not require a backend.
- Client settings and layout preferences are stored in browser `localStorage`.
- See `DEPLOYMENT_NOTES.txt` for the Render deployment checklist and repo cleanup notes.
