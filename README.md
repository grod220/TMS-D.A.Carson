# The Meatball Stoppe: React App 
##### Version 4: [D.A. Carson](https://en.wikipedia.org/wiki/D._A._Carson)

The app repo for themeatballstoppe.com. If you're in the Orlando area, give us a visit! [YELP](https://www.yelp.com/biz/the-meatball-stoppe-orlando-2) - [Google Maps](https://goo.gl/maps/zQhgK1nnauw)

## Technologies used

- Front-end
	- React v16 (creat-react-app)
	- Styled-components w/ media reference for breakpoints
	- Flexbox
	- Lazy Loading homepage with react-lazyload
	- Custom FB social widget
- Back-end (via Firebase cloud functions)
	- Expressjs
	- Firebase data store
	- Facebook webhooks to detect post updates

### How to dev locally
npm install && npm start

### Deployment steps
- Build production ready app: npm run build
- Send to Firebase: firebase deploy
- Follow steps as needed. At times, one may need to cd into functions/ to add the right packages.
- On Firebase Blaze plan. Will pay as you go.

### Notes
- Increasingly inspired by [JAM stack](https://jamstack.org/). Pre-rendered, statically served content + serverless cloud functions for backend/routes.

### Update from v3
- Moved from front-end + backend expressjs in Heroku to only front-end app with serverless cloud functions with Firebase (+hosting).

### Update from v2.2
- Migrated from Angular 4 to React
- New Menu design (pinterest-like)
- Guy Fieri feature on Media page
- Central location for menu data
- Better responsive layouts