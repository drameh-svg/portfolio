# Zeinab Drameh — Portfolio

Static site. Upload the whole folder.

```
index.html       home: hero, clients, featured work, practice, about, contact
projects.html    “See more work” — full archive with category filters
project.html     individual project page (?id=slug)
featured.html    redirects to index.html#work
projects.js      shared project data
style.css        black/white + Averia Serif Libre
script.js        featured cards, archive filters, case studies, contact
fonts/           Averia Serif Libre (woff2)
img/             images grouped by project
```

## Project order and categories

Edit `projects.js`. `order` is the starting sequence in All and inside every filter. `categories` can include more than one of `ml`, `product`, `consulting`, and `brand`. Featured projects on the homepage are the ids in `featuredIds`.

Category labels, in filter order:

1. All
2. ML & Data Analytics
3. Product Design
4. Consulting
5. Brand Design and Marketing
