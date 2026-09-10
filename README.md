# Zeinab Drameh — Portfolio

One-page site. Files are kept simple on purpose:

```
index.html    full page (home, projects, about, contact)
style.css     all styling
script.js     featured carousel, filters, modals, form
img/          all images, grouped by project
```

## How to add a project

1. Copy an existing `<article class="project-tile">` in the All Projects gallery in `index.html`.
2. Set `data-modal` to a new id, for example `modal-newname`.
3. Set `data-categories` to one or more of: `product`  `ml`  `graphic`  `consulting`.
4. Copy a `<div class="proj-modal">` and give it that same id.
5. Put images in `img/newname/` and update the `src` paths.
6. Optional: add it to the Featured Work coverflow as well.

There is a longer version of these steps in a comment at the top of `index.html`.

## New project image folders

Drop covers and gallery shots here when you have them:

- `img/memesocial/`
- `img/furniture/`
- `img/arkadium/`
- `img/pneumonia/`
- `img/masjid/`
- `img/shift/`
- `img/presq-posters/`
