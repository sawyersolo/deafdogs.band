# Payload CMS Integration (Skeleton)

If you&apos;d like to use Payload CMS:

1. Create a new Payload project (Node / Express).
2. Configure collections for `tour`, `merch`, `photos`, `albums`.
3. Enable GraphQL or REST.
4. Point this frontend at that Payload instance using env vars like:

   - `VITE_PAYLOAD_API_URL`

5. Replace local fixtures in `src/pages/Tour.jsx`, `Merch.jsx`, and `Photos.jsx` with live fetch calls.

This frontend is built to be CMS-agnostic, so you can swap in Payload, Sanity, or anything else.
