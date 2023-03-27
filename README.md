# Email Audit

Email Audit is a system used to audit all emails sent from within an organization.
In the event of security incidents (such as leakage of sensitive information via emails), this system will be used by the organization's auditing department to retrieve and verify the emails of the concerning parties through its admin console.

## Running the project

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org) in development mode:

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). The app should be running after the build is finished.

## Building the project for deployment

To generate production version:

```bash
npm run build
```

You can run the newly built app locally with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in the package.json's `dependencies` to serve the app in production.

## Technologies used and why we use them

- `Svelte` framework is used since it doesn't produce any runtime element. This should keep the app performant as new features are added.
- `Typescript` is used to augment Javascript with type information. Helps prevent bugs from showing up.
- `SCSS` syntax is used to help write complex CSS rules, as well as all its pre-processing benefits.
- `Lodash` is added so we don't have to reinvent the wheel for utility functions.

## Features

This project is in an early phase, so the features are not yet complete. At the moment, it will display mocked email data from `fake-data.ts` to simulate an API response. It also doesn't have any kind of pagination at the moment, but we plan to support it in the future, as well as allowing the user to set how many items to show per page.

Since checking date and time is crucial in an auditing process, table rows have alternating background colors between dates to make it easier to distinguish emails sent on different dates.

Our users are diverse and have many different device configurations, so we need to make sure the UI doesn't break when viewed at any screen size. However, since we haven't implemented a mobile version of the design yet, we understand that the information cannot be consumed well on very small screen sizes.
