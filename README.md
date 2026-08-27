<div align="center">
  <img src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" width="100px" alt="GitHub Readme Stats" />
  <h1>GitHub Readme Stats</h1>
  <p>Get dynamically generated GitHub stats on your READMEs!</p>
</div>

# GitHub Stats Card

Copy and paste this into your markdown:

```md
[![GitHub stats](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME)](https://github.com/anuraghazra/github-readme-stats)
```

## Options

| Parameter             | Description                                | Default   |
| --------------------- | ------------------------------------------ | --------- |
| `hide`                | Hide specific stats, comma-separated       | -         |
| `show_icons`          | Show icons                                 | `false`   |
| `include_all_commits` | Count all commits                          | `false`   |
| `hide_rank`           | Hide rank circle                           | `false`   |
| `rank_icon`           | Rank icon: `default`/`github`/`percentile` | `default` |
| `show`                | Show additional stats                      | -         |
| `theme`               | Theme name                                 | `default` |
| `locale`              | Language                                   | `en`      |
| `custom_title`        | Custom title                               | -         |
| `hide_border`         | Hide border                                | `false`   |
| `border_radius`       | Corner radius                              | `4.5`     |

---

# GitHub Extra Pins

```md
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=USERNAME&repo=REPO_NAME)](https://github.com/USERNAME/REPO_NAME)
```

## Options

| Parameter                 | Description             | Default |
| ------------------------- | ----------------------- | ------- |
| `show_owner`              | Show owner name         | `false` |
| `description_lines_count` | Description lines (1-3) | auto    |

---

# GitHub Gist Pins

```md
[![Gist Card](https://github-readme-stats.vercel.app/api/gist?id=GIST_ID)](https://gist.github.com/USERNAME/GIST_ID)
```

## Options

| Parameter    | Description     | Default |
| ------------ | --------------- | ------- |
| `show_owner` | Show owner name | `false` |

---

# Top Languages Card

```md
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=USERNAME)](https://github.com/anuraghazra/github-readme-stats)
```

## Options

| Parameter       | Description                                               | Default       |
| --------------- | --------------------------------------------------------- | ------------- |
| `layout`        | Layout: `normal`/`compact`/`donut`/`donut-vertical`/`pie` | `normal`      |
| `langs_count`   | Number of languages (1-20)                                | `5`           |
| `hide`          | Hide languages                                            | -             |
| `exclude_repo`  | Exclude repositories                                      | -             |
| `hide_progress` | Hide progress bars                                        | `false`       |
| `stats_format`  | Format: `percentages`/`bytes`                             | `percentages` |
| `size_weight`   | Size weight                                               | `1`           |
| `count_weight`  | Repo count weight                                         | `0`           |

---

# Common Options

All card endpoints support:

| Parameter       | Description                  | Default   |
| --------------- | ---------------------------- | --------- |
| `title_color`   | Title color                  | `2f80ed`  |
| `text_color`    | Text color                   | `434d58`  |
| `icon_color`    | Icon color                   | `4c71f2`  |
| `bg_color`      | Background color or gradient | `fffefe`  |
| `border_color`  | Border color                 | `e4e2e2`  |
| `theme`         | Theme name                   | `default` |
| `hide_border`   | Hide border                  | `false`   |
| `border_radius` | Corner radius                | `4.5`     |
| `cache_seconds` | Cache time                   | `21600`   |
| `locale`        | Language                     | `en`      |
| `custom_title`  | Custom title                 | -         |

---

# Themes

Built-in 16 themes:

`default`, `default_repocard`, `transparent`, `dark`, `radical`, `merko`, `gruvbox`, `tokyonight`, `onedark`, `dracula`, `monokai`, `github_dark`, `github_dark_dimmed`, `nord`, `catppuccin_mocha`, `algolia`

Usage:

```md
![Stats](https://github-readme-stats.vercel.app/api?username=USERNAME&theme=dracula)
```

---

# Self-Hosting

## Environment Variables

| Variable                 | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `PAT_1`                  | GitHub Personal Access Token                    |
| `CACHE_SECONDS`          | Cache duration in seconds, `0` disables caching |
| `WHITELIST`              | Allowed usernames, comma-separated              |
| `GIST_WHITELIST`         | Allowed Gist IDs, comma-separated               |
| `EXCLUDE_REPO`           | Excluded repositories, comma-separated          |
| `FETCH_MULTI_PAGE_STARS` | Fetch multi-page stars                          |

## Deploy to Vercel

1. Fork this repository
2. Import project in Vercel
3. Add environment variable `PAT_1`
4. Deploy

## Other Platforms

```bash
npm install
node express.js
```

Default port: `9000`

---

# Local Development

```bash
npm install
npm test
```

---

Made with :heart: and JavaScript.
