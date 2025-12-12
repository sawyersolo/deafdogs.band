# Sanity CMS Integration (Skeleton)

This project is ready to connect to a Sanity studio for image-heavy surreal content.

Suggested steps:

1. In a separate folder, run:

   ```bash
   npm create sanity@latest
   ```

2. Create schemas for:

   - `tourShow`
   - `merchItem`
   - `photo`
   - `album`

3. Expose a read-only dataset via Sanity&apos;s API and environment variables like:

   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET`
   - `VITE_SANITY_READ_TOKEN` (if needed)

4. In this Vite app, create a Sanity client and swap the hardcoded arrays (tour, merch, photos) for live queries.

This repo includes the visual layer and placeholder components. You only need to wire data fetching.
