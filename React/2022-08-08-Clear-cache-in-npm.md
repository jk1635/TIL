# Clear Cache in npm

## Issue

When you&#39;re facing the following error.

`Cannot read properties of null (reading 'pickAlgorithm')`

## Solution

This Error occurs because of your Cache.

You have too much cache data or you don&#39;t have enough space in your system for your package file.

To solve this error, you need to clear your cache and then re-run npm install. And then the error will be solved.

```bash
> npm cache clear --force

> npm install
```

See [here](https://stackoverflow.com/questions/70019872/npm-err-cannot-read-properties-of-null-reading-pickalgorithm) for more details.
