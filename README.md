# BoomTH Dev Next.js Admin Dashboard

BoomTH Dev Admin Dashboard is a responsive admin dashboard template built using **Next.js** and styled with **TailwindCSS**. This template is optimized for modern development and provides a clean, functional layout for managing admin interfaces.

## Features

- ⚡️ **Next.js** for optimized performance and routing
- 💨 **TailwindCSS** for fast, customizable styling
- 🎨 Dark-themed by default with easy-to-configure global styles
- 📱 Fully responsive design for desktop and mobile

## Note Style Variable

```css
:root {
    --bg: #151c2c;
    --bgSoft: #182237;
    --text: white;
    --textSoft: #b7bac1;
}

.pending {
    background-color: #f7cb7375;
}

.done {
    background-color: #afd6ee75;
}

.cancelled {
    background-color: #f7737375;
}
```

## Installation

To get started, first clone the repository, then use the package manager [bun](https://bun.sh/) to install the necessary dependencies.

### Clone the repository

```bash
git clone https://github.com/boomthdev/boomth-nextjs-dashboard.git
cd boomth-nextjs-dashboard
```
### Install dependencies
Make sure you have Bun installed. Then run:

```bash
bun install
```

## Usage

Once you've installed the dependencies, you can start the development server:

```bash
bun dev
```

This will launch the app at **http://localhost:3000**.