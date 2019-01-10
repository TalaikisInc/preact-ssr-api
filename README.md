# Preact CLI SSR + API

This is low latency, high performance SSR boilerplate with API proxy and async routes.

## Install && Run

```bash
npm i
npm run
```

## Performance

```bash
# loadtest  -n 25000 --rps 2000 -c 100 -k http://localhost:3000/categories
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Target URL:          http://localhost:3000/categories
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Max requests:        25000
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Concurrency level:   100
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Agent:               keepalive
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Requests per second: 2000
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Completed requests:  25000
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Total errors:        0
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Total time:          13.015058499999999 s
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Requests per second: 1921
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Mean latency:        9.7 ms
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO Percentage of the requests served within a certain time
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO   50%      1 ms
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO   90%      21 ms
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO   95%      57 ms
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO   99%      156 ms
[Thu Jan 10 2019 19:37:54 GMT+0200 (Eastern European Standard Time)] INFO  100%      338 ms (longest request)
```

## TODO

* render api data into string
* fix eslint-plugin-standard-preact + add:

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm test",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  }
```

## Licence

MIT
