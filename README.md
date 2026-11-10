# Zeinab Drameh — Portfolio

Static site. Upload the whole folder.

```
index.html       home: hero, featured projects, clients, skills, about, contact
featured.html    featured project list
projects.html    filterable shuffling project deck
project.html     individual project page (?id=slug)
projects.js      shared project data
style.css        styling
script.js        cursor, deck, pages, contact form
fonts/           Geist, Geist Mono, Hanken Grotesk
img/             images grouped by project
```

## Project order and categories

Edit `projects.js`. `order` is the starting sequence in All and inside every filter. `categories` can include more than one of `ml`, `product`, `consulting`, and `brand`. Featured projects are the ids in `featuredIds`.

Category labels, in filter order:

1. All
2. ML & Data Analytics
3. Product Design
4. Consulting
5. Brand Design and Marketing
