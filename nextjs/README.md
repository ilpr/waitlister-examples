# Next.js Example

Waitlist integration using Next.js App Router with API route.

## Usage

1. Add `WAITLIST_KEY` to your `.env.local`:
   ```
   WAITLIST_KEY=your_key_here
   ```

2. Copy `api/waitlist/route.ts` to `app/api/waitlist/route.ts`

3. Import and use the form component:
   ```tsx
   import WaitlistForm from './WaitlistForm';
   
   export default function Page() {
     return <WaitlistForm />;
   }
   ```

## Files

- `api/waitlist/route.ts` - API route handler
- `WaitlistForm.tsx` - Client form component

## Documentation

[Full Next.js integration guide](https://waitlister.me/integrations/nextjs)
