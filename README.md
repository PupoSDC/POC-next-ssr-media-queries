# POC Next SSR media queries

## The Problem

How can we best deliver Server Side Rendered (SSR) pages that drastically differ 
from mobile to desktop views to an extent where rendering the wrong version on 
the server would be undesirable when compared to performing no SSR at all.

## Scenario

We have a page that is built from two API queries. Each of them are quite slow.
The mobile design only requires one of these queries to be complete while the 
browser version requires both of them.


## Implementation 0

In the initial scenario we hide the mobile part of the application using CSS
and no pre-fetching is done on the server:

```tsx
<Grid item xs={0} display={{ xs: "none", sm: "block" }} sm={3}>
    <UserProfile />
</Grid>
<Grid item xs={12} sm={9}>
    <AddressesTable />
</Grid>
```

## Implementation 1

Home brew query


## Implementation 2

Media query hook

## Implementation 3

Fresnel


## Implementation 4: Media query with preloading