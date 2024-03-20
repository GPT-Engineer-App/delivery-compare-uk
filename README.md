# delivery-compare-uk


Certainly! Here’s a detailed description for an AI software developer to build an internal business dashboard based on the provided image:

Title: Delivery Services – Major Appliances UK

Purpose: To provide a comparative overview of delivery service options for major appliances within the UK sector, tailored for internal business analysis and decision-making.

Dashboard Components:

Header Section:

Title of the dashboard clearly displayed at the top.
Comparison Table:

Columns: The table should have columns for Price, Leadtime, Pick timeslot, Express, Evening, and Weekend delivery options.
Rows: Each row represents a different service level (Best in the market, Average, and a row for the company itself, labeled 'We are …').
Icons and Text: Each row should have an icon indicating the level of service (trophy for 'Best', figures for 'Average', and a company logo for 'We are …') followed by the text descriptions.
Service Level Details:

For each service level, provide the following details:
Price: Indicated as 'Free' for all service levels.
Leadtime: Specified in days (e.g., '1-3 days' for the best in the market, '2-5 days' for average, and '2-5 days' for the company’s service).
Pick timeslot: Availability of timeslot selection (e.g., '3-hour slot' for the best, 'Morning/Afternoon slots' for average, 'No' for the company’s service).
Delivery Options:

Boolean indicators (Yes/No) for each of the delivery options (Express, Evening, Weekend) across service levels.
Visual Indicators:

Colored backgrounds for the cells to indicate availability or absence (e.g., green for 'Yes', red for 'No').
Footer:

Date of the last update (e.g., '2/29/2024') at the bottom of the dashboard.
Styling:

Use a clean and professional design with legible fonts.
Employ a color scheme that reflects the brand identity of the company, such as the company’s color for the 'We are …' row.
Ensure that icons and color indicators are intuitive and have tooltips on hover explaining what they signify.
Functionality:

The dashboard should be interactive where applicable, allowing users to hover over information for additional details.
It should be dynamic, capable of updating in real-time as delivery service data changes.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/delivery-compare-uk.git
cd delivery-compare-uk
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
