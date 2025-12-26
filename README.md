# Waitlister Examples

Code examples for integrating [Waitlister](https://waitlister.me) into your website.

## Examples

| Framework | Description | Folder |
|-----------|-------------|--------|
| [HTML/JavaScript](./html) | Zero dependencies, pure HTML | `html/` |
| [React](./react) | Component with hooks | `react/` |
| [Vue](./vue) | Composition API component | `vue/` |
| [Next.js](./nextjs) | API route + form component | `nextjs/` |

## Quick Start

1. Get your waitlist key from [waitlister.me](https://waitlister.me)
2. Replace `YOUR_WAITLIST_KEY` in the examples
3. Copy into your project

## Usage

All examples submit to Waitlister's form action endpoint:

```
POST https://waitlister.me/s/YOUR_WAITLIST_KEY
Content-Type: application/x-www-form-urlencoded

email=user@example.com&name=John
```

## Documentation

- [Integration guides](https://waitlister.me/integrations)
- [Form action docs](https://waitlister.me/docs/form-action-endpoint)
- [API reference](https://waitlister.me/docs)

## License

MIT
