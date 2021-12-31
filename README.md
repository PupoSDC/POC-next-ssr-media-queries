# POC Next SSR media queries

## The Problem

How can we best deliver Server Side Rendered (SSR) pages that drastically differ 
from mobile to desktop views to an extent where rendering the wrong version on 
the server would be undesirable when compared to performing no SSR at all.

## Scenario

We have a page that is built from two API queries. Each of them are quite slow.
The mobile design only requires one of these queries to be complete while the 
browser version requires both of them.


## Implementation 0: Baseline

[Demo](https://nest-ssr-media-queries-4ivkwwyrp-puposdc.vercel.app/example-0)

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

The good:

- Without JS, the first render is appropriate to the current device size 

The bad:

- Since data is loaded after mounting, the first render will be incomplete
- Since we are using CSS to hide unwanted parts of the app, those parts of the
  app will still be part of the initial HTML load. 
- Likewise, on mobile, the unecessary query from `<UserProfile />` will still be
  performed.
- Since the React tree will include nodes that are not part of the DOM.
- Testing for visibility is hard since the visibility of the tree is determined by CSS
- Readability is hard, specially given that the `display` control would probably end up 
  in a css distant from the JSX.


## Implementation 1: Custom Component

[Demo](https://nest-ssr-media-queries-4ivkwwyrp-puposdc.vercel.app/example-1)

The first improvement is the addition of a custom component that abstracts away
the css logic. Implementation logic looks like this:

```tsx
const MobileOnly = styled("div")(({ theme }) => ({
  all: "inherit",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
```

And usage of these components like this:

```tsx
    <AppContainer title={"Example 1: Css based components"}>
      <DesktopOnly>
        <HomePageDesktop />
      </DesktopOnly>
      <MobileOnly>
        <HomePageMobile />
      </MobileOnly>
    </AppContainer>
```

Although this may look enticing at first glance it pretty much keeps the same 
problems of the first implementation. It improves code readability and consistency, 
but also deteriorates the DOM representation by the addition of one additional node
that is otherwise not necessary. 

## Implementation 2: Media query hook

[Demo](https://nest-ssr-media-queries-4ivkwwyrp-puposdc.vercel.app/example-2)

This is the most kosher solution available:

```tsx
const IndexPage: NextPage = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return (
    <AppContainer title={"Example 2: media query hook"}>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
    </AppContainer>
  );
```


The good:

- Without JS, the first render is appropriate to the current device size 

The bad:

- Since data is loaded after mounting, the first render will be incomplete
- Since we are using CSS to hide unwanted parts of the app, those parts of the
  app will still be part of the initial HTML load. 
- Likewise, on mobile, the unecessary query from `<UserProfile />` will still be
  performed.
- Since the React tree will include nodes that are not part of the DOM.
- Testing for visibility is hard since the visibility of the tree is determined by CSS
- Readability is hard, specially given that the `display` control would probably end up 
  in a css distant from the JSX.





## Implementation 3

[Demo](https://nest-ssr-media-queries-4ivkwwyrp-puposdc.vercel.app/example-3)

Fresnel


## Implementation 4: Media query with preloading

## Implementation 5: 

## Implementation 6: 


## Summary

|                                            | 0: Baseline            | 1: Custom Component    | 2: Media query hook    |
|--------------------------------------------|------------------------|------------------------|------------------------|
| [Perf] Correct first render with no JS (M) | :white_check_mark:     | :white_check_mark:     | :white_check_mark:     |
| [Perf] Correct first render with no JS (D) | :white_check_mark:     | :white_check_mark:     | :white_check_mark:     |
| [Perf] Correct data on first request (M)   | :x:                    | :x:                    | :x:                    |
| [Perf] Correct data on first request (D)   | :x:                    | :x:                    | :x:                    |
| [Perf] Correct HTML on first request (M)   | :x:                    | :x:                    | :x:                    |
| [Perf] Correct HTML on first request (D)   | :x:                    | :x:                    | :x:                    |
| [DX| Correct tree representation           | :x:                    | :x:                    | :x:                    |
| [DX] Code readability / safeness           | :x:                    | :x:                    | :x:                    |
| [DX] Testability                           | :x:                    | :x:                    | :x:                    |
