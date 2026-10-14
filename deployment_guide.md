# Deployment Guide: Monastery360

Since Monastery360 is built completely on a modern, static web stack (`HTML`, `CSS`, and `Vanilla JavaScript` with Base64 assets), deploying it is incredibly fast, simple, and **100% free**. 

You do not need to configure any back-end servers, Python environments, or databases to make it work. All you need to do is upload your folder to a static hosting provider. 

Here are the three easiest ways to get your site live on the internet in under 5 minutes:

---

## Option 1: Vercel (Recommended & Fastest)
Vercel is incredibly fast and provides excellent performance out of the box with free SSL certificates (HTTPS).

### Method A: Drag & Drop (No Git required)
1. Go to [Vercel](https://vercel.com/) and create a free account.
2. Once logged in, navigate to your Dashboard.
3. Simply **drag and drop** your entire `monastery360` folder from your computer directly into the Vercel dashboard window.
4. Vercel will instantly upload your files and give you a live `.vercel.app` link. 

### Method B: Using Vercel CLI (For developers)
If you prefer the terminal:
1. Open your terminal in the `monastery360` folder.
2. Install the Vercel CLI: `npm install -g vercel`
3. Run the command: `vercel`
4. Follow the default prompts (say yes to everything), and it will automatically deploy and give you your live URL.

---

## Option 2: Netlify (Great Alternative)
Netlify is very similar to Vercel and specializes in static websites.

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Without even needing to create an account immediately, you can drag and drop your `monastery360` folder directly onto the circle on the web page.
3. Netlify will instantly launch a live website for you with a secure HTTPS link.
4. *(Optional)* Claim your site by making a free account so the link doesn't expire, and you can change the random site name to something like `monastery360.netlify.app`.

---

## Option 3: GitHub Pages (Best for Code Portfolios)
If you want to keep your code backed up and hosted simultaneously, GitHub Pages is the industry standard.

1. Go to [GitHub](https://github.com/) and create a free account.
2. Create a new repository and name it `monastery360`.
3. Upload all the files inside your local `monastery360` folder to that repository.
4. Once the files are uploaded, go to the repository's **Settings** tab.
5. On the left sidebar, click on **Pages**.
6. Under "Build and deployment", change the Source dropdown to **Deploy from a branch**.
7. Under "Branch", select `main` (or `master`), and click **Save**.
8. Wait about 3-5 minutes, and GitHub will provide you with a live link (usually `https://[your-username].github.io/monastery360`).

---

> [!TIP]
> **Custom Domains**
> Regardless of which option you choose (Vercel, Netlify, or GitHub Pages), you can optionally buy your own domain name (like `www.monastery360.com`) from a registrar like GoDaddy or Namecheap, and link it directly to your free deployment for a fully professional finish!
