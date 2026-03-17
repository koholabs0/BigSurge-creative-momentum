

## Fix: Scroll to Top on Page Navigation

**Problem**: When navigating between pages, the scroll position stays at the bottom instead of resetting to the top.

**Cause**: React Router does not automatically scroll to the top on route changes. A `ScrollToTop` component is needed.

**Solution**: Create a `ScrollToTop` component that listens to `location.pathname` changes and calls `window.scrollTo(0, 0)`, then add it inside `BrowserRouter` in `App.tsx`.

### Steps

1. **Create `src/components/ScrollToTop.tsx`** — a small component using `useEffect` + `useLocation` to scroll to top on every route change.

2. **Update `src/App.tsx`** — add `<ScrollToTop />` inside `<BrowserRouter>` before `<AnimatedRoutes />`.

