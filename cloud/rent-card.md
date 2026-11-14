# SCS2b.4 — Cloud Rent Card

## The need

My client is a small salon that wants to advertise its hair and beauty services, display contact information and attract potential customers.

- **Kind of website:** A static website with four pages: Home, About, Services and Contact.
- **Visitors per day:** Assumed 50 visitors per day. This figure has not yet been measured.
- **Monthly budget:** To be confirmed with the client (KES).
- **Region:** The website is intended for customers who can access it online; the hosting region is not applicable to my current no-server choice.

## Measured

The required measurements must come from `scs-cloud`, not my laptop.

| Command or measurement | At 1 GB | At 4 GB |
|---|---|---|
| Date and time | Pending | Pending |
| `nproc` | Pending | Pending |
| `free -m` — total, used, available | Pending | Pending |
| `uptime` — load averages | Pending | Pending |
| `df -h` — root disk usage | Pending | Pending |
| `uname -m` | Pending | Pending |
| `free -m` after five page loads | Pending | Pending |
| Meter hours at this size | Pending | Pending |

**Site facts — to be measured on scs-cloud:**

- Website size on disk (`du -sh /var/www/html`): Pending.
- Number of HTML pages: Pending.
- Nginx access-log requests: Pending. These are requests, not unique visitors.

## What to rent for what

| For | Rent this | Where price comes from | US$ / KES | What would move it up or down |
|---|---|---|---|---|
| Only pages | No paid server. Host the static website with GitHub Pages within its published limits. | GitHub Pages official documentation; record the source and date checked. | US$0 / KES 0 for hosting; custom domain costs are separate. | Up if the client needs a database, login or server-side functions. |
| Basic site or small WordPress | The smallest burstable size (1 GB), or the smallest suitable Lightsail plan. | SCS2b.1 rate card; record provider, page and date. | Pending rate-card verification. | Up if measured memory use becomes too high; down if the site only needs static pages. |
| WordPress with plugins, catalogue and images | One size up, or a larger Lightsail plan. | The same rate card, using the next suitable size. | Pending rate-card verification. | Up if measured load stays high; down if measurements show most resources are idle. |
| Never for a small client | Avoid m-class, r-class, c-class and GPU instances. | Same rate card; compare its cost with the small instance in KES. | Pending rate-card verification. | Only consider these for workloads that genuinely need their specialist resources. |
| Learning and staging | Use my existing `scs-server` VM on my laptop (SCS1.5). | Runs locally on my laptop; no cloud rental charge. | US$0 / KES 0 cloud rental. | Move to a hosted service when real customers need public access. |

## My choice

**No paid server.**

I recommend hosting the salon's four-page static website with GitHub Pages. It can display services and contact information without paying for a cloud server that the website does not currently need.

## Why not bigger, why not smaller

**Why not bigger:** The salon only needs four static pages. A larger paid server would add a rental cost without a demonstrated need. I will add the measured memory and load figures after the scs-cloud measurements are available.

**Why not smaller:** No paid server is already the smallest-cost option for this static website. GitHub Pages can host the pages without renting a virtual machine. If the client later needs a database, login or server-side features, I will reassess the hosting choice.

## Prices

**Rate card used:** Pending SCS2b.1 rate card.

**Provider, page and date:** To be filled in from the actual rate card.

**Exchange rate:** To be filled in from the trainer's supplied exchange rate, including its source and date.

The 1 GB and 4 GB instance prices, disk, public address, data transfer and snapshots must all be priced from the same rate card. I will not invent or estimate these figures.

**Monthly total at 1 GB:** Pending.

**Monthly total at 4 GB:** Pending.

**4 GB cost compared with 1 GB:** Pending calculation from the verified rate-card figures.

## Lightsail or EC2 for this client

If the salon later needs a paid server, I would choose Lightsail because its simpler fixed monthly plan is easier for a small business owner to understand and budget for than EC2's more detailed pricing.# SCS2b.4 — Cloud Rent Card

## The need

My client needs a professional website to advertise services, display contact information and attract potential customers.

Visitors per day: Assumed 50 visitors per day (not yet counted).

Budget: To be confirmed with the client (KES).
## Measured

Measurements taken on 14 November 2026.

- Total memory: 15,869 MiB (approximately 15.5 GiB).
- Available memory: 15,262 MiB.
- CPU processors: 8.
- Load average: 0.04, 0.05, 0.01.
- Processor architecture: x86_64.
