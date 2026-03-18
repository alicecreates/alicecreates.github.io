# Your Personal Website — GitHub Pages

A clean, elegant author/personal website. No frameworks, no build tools — just HTML, CSS, and a little JavaScript. Hosted free on GitHub Pages.

---

## 📁 File Structure

```
/
├── index.html              ← Homepage
├── 404.html                ← Custom 404 page
├── about/
│   └── index.html          ← About page
├── books/
│   └── index.html          ← Books page
├── blog/
│   ├── index.html          ← Blog post list
│   └── your-first-post/
│       └── index.html      ← Blog post template ← COPY THIS FOR NEW POSTS
├── contact/
│   └── index.html          ← Contact page
└── assets/
    ├── css/
    │   └── style.css       ← All styles (edit colors/fonts here)
    ├── js/
    │   └── main.js         ← Navigation & interactions
    └── images/             ← Put your photos here
        ├── banner.jpg
        ├── author-photo.jpg
        └── book1.jpg, book2.jpg ...
```

---

## 🚀 How to Publish on GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `yourusername.github.io` (replace with your actual GitHub username)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
**Option A (easiest) — Drag & drop:**
1. Open your new repository
2. Click **Add file** → **Upload files**
3. Drag ALL your website files in
4. Click **Commit changes**

**Option B — Use Git (recommended for ongoing updates):**
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 5 — Visit your site!
Your site will be live at: `https://yourusername.github.io`

(It may take 1–2 minutes to first appear.)

---

## 🌐 Using a Custom Domain (Optional)

If you buy a domain (e.g. from Namecheap, Squarespace Domains, Google Domains):

1. In GitHub Pages settings, enter your domain in the **Custom domain** field
2. At your domain registrar, add these DNS records:
   ```
   Type: A     Value: 185.199.108.153
   Type: A     Value: 185.199.109.153
   Type: A     Value: 185.199.110.153
   Type: A     Value: 185.199.111.153
   Type: CNAME Value: yourusername.github.io
   ```
3. DNS changes take up to 24 hours to propagate
4. GitHub will automatically issue an HTTPS certificate (free!)

---

## ✏️ How to Customize

### Change your name everywhere
Search the project for `[Your Name]` and replace it with your actual name.
You'll find it in every HTML file.

### Change colors
Open `assets/css/style.css` and look for the `:root` block at the top:
```css
:root {
  --cream:       #faf7f2;    ← Page background
  --blush:       #e8c4b8;    ← Soft accent
  --dusty-rose:  #c9867c;    ← Primary accent color
  --deep-rose:   #9b4d4d;    ← Hover color
  --ink:         #2a1f1f;    ← Main text color
}
```
Swap these hex values to match your palette.

### Add your photos
Put images in `assets/images/` then replace placeholder divs with:
```html
<!-- Banner -->
<img src="/assets/images/banner.jpg" alt="[description]" class="hero-banner" />

<!-- Author photo -->
<img src="/assets/images/author-photo.jpg" alt="[Your Name]" class="about-photo" />

<!-- Book covers -->
<img src="/assets/images/book1.jpg" alt="Book Title" class="book-cover" />
```

### Add a new blog post
1. Create a new folder: `/blog/my-new-post/`
2. Copy `/blog/your-first-post/index.html` into it
3. Update the title, date, and body content
4. Add a new `<article class="post-card">` block to `/blog/index.html`
5. Add a matching block to the homepage `index.html` if you want it featured

---

## 📧 Making the Contact Form Work

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) → sign up free
2. Create a new form
3. Copy your Form ID (looks like `xpwdqkbl`)
4. In `contact/index.html`, replace `YOUR_FORM_ID`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

For the newsletter, you can use [Mailchimp](https://mailchimp.com) or [ConvertKit](https://convertkit.com) — both have free tiers. Replace the `action="#"` on newsletter forms with your Mailchimp/ConvertKit embed URL.

---

## 🔄 Updating Your Site

Every time you make changes:
```bash
git add .
git commit -m "Update: what you changed"
git push
```
GitHub Pages will automatically redeploy (usually within a minute).

---

## 💡 Tips

- **Images**: Compress your images before uploading. Use [Squoosh](https://squoosh.app) (free, browser-based). Aim for under 300KB per image.
- **Favicon**: Create a simple favicon at [favicon.io](https://favicon.io), save as `favicon.ico` in your root folder, then uncomment the favicon line in the `<head>` of each page.
- **Analytics**: Add [Google Analytics](https://analytics.google.com) or the privacy-friendly [Plausible](https://plausible.io) by pasting their script before `</body>` in each page.
- **SEO**: Update the `<meta name="description">` in each page's `<head>` with a unique description.
