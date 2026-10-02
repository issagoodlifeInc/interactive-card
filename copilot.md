# Interactive card form updates

## What changed

- Rebuilt the form markup with associated labels, accessible error-message regions, suitable autocomplete/input modes, and a dedicated success state.
- Connected all five inputs to the card preview so the name, grouped card number, expiry, and CVC update while typing. Empty fields show the design's default card details.
- Added submit-time validation for required values, a 16-digit card number, a month from 01 to 12 and two-digit year, and a three-digit CVC. Errors are announced through each field's accessible description and clear as corrected values are entered.
- Added a completion screen after valid submission. **Continue** resets the form, errors, and preview so another card can be entered.
- Reworked the layout for desktop and mobile, with overlapping cards on small screens, plus hover, active, keyboard-focus, and reduced-motion styles.

## How it works

`index.html` contains the card preview, form, and completion view. `assets/main.js` listens for input events to sanitize numeric fields and update the preview; on submission it validates the values and switches to the completion view only when all fields pass. The Continue button resets the form and restores the default preview. `assets/styles.css` provides the desktop/mobile layouts, visual states, and error styling.

This is a front-end challenge demo only. It does not send, store, or process payment information.
