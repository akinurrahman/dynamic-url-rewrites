# Next.js Dynamic Rewrites

This project demonstrates how to create dynamic rewrite rules in a Next.js application, allowing for flexible URL mapping to directories within the `user` folder.

## Features

- Dynamic URL rewrites
- Simplified routing without the need for prefixing paths with the `user` directory

## Configuration

The following configuration in `next.config.js` sets up the dynamic rewrites:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/user/:path*',
      },
    ];
  },
};

export default nextConfig;
```


## Folder Structure

The folder structure inside the user directory should look like this:

```
user/
├── profile
│   └── index.js
├── about
│   └── index.js
└── contact
    └── index.js
```
    
    
 ## Accessing Pages

With the dynamic rewrites configured, you can access the pages as follows:

    /profile will map to user/profile/page.tsx
    /about will map to user/about/page.tsx
    /contact will map to user/contact/page.tsx