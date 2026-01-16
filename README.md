# redis-playground

A small repository of examples and experiments for learning and testing Redis.

This repo contains sample code, Docker compose configuration, and notes to help you quickly start using Redis locally and try common patterns (caching, pub/sub, data structures, streams).

## Features

- Quick start using Docker / docker-compose
- Examples for connecting from different languages (Python, Node.js)
- Sample scripts demonstrating common Redis patterns: caching, counters, pub/sub, lists, sets, sorted sets, and streams
- Troubleshooting notes and links to resources

## Prerequisites

- Docker (https://docs.docker.com/get-docker/)
- docker-compose (optional; Docker Desktop includes it)
- A language runtime if you want to run examples (e.g., Python 3.9+, Node.js 14+)

## Quick start (Docker)

Start a single Redis server with persistence disabled (good for experiments):

```bash
docker run --name redis-playground -p 6379:6379 -d redis:7-alpine redis-server --save "" --appendonly no
```

Or use docker-compose if a compose file is included:

```bash
docker-compose up -d
```

Connect with the Redis CLI from your host (requires redis-cli):

```bash
redis-cli -h 127.0.0.1 -p 6379
```

From inside the container:

```bash
docker exec -it redis-playground redis-cli
```

## Example: Python (redis-py)

Install the client:

```bash
python -m pip install redis
```

Simple example (examples/python/basic.py):

```python
import redis

r = redis.Redis(host='127.0.0.1', port=6379)

r.set('hello', 'world')
print(r.get('hello'))  # b'world'
```

## Example: Node.js (ioredis)

Install the client:

```bash
npm install ioredis
```

Simple example (examples/node/basic.js):

```js
const Redis = require('ioredis');
const redis = new Redis({ host: '127.0.0.1', port: 6379 });

(async () => {
  await redis.set('hello', 'world');
  const val = await redis.get('hello');
  console.log(val); // 'world'
  await redis.quit();
})();
```

## Common patterns to explore

- Caching: SET/GET with TTL (EX, PX)
- Atomic counters: INCR, INCRBY
- Pub/Sub: PUBLISH, SUBSCRIBE
- Lists: LPUSH, RPUSH, LPOP, BRPOP for queues
- Sets and Sorted Sets for membership and leaderboards
- Streams (XADD, XREADGROUP) for event sourcing and consumer groups

## Troubleshooting

- If port 6379 is in use, stop the other service or map Redis to another port (`-p 6380:6379`).
- For persistent experiments, remove `--save "" --appendonly no` or mount a volume for `/data`.

## Contributing

Contributions, examples, and bug reports are welcome. Please open an issue or submit a pull request with small, focused changes.

Suggested structure:

```
redis-playground/
├── docker-compose.yml   # optional compose configuration
├── examples/
│   ├── python/
│   │   └── basic.py
│   └── node/
│       └── basic.js
├── docs/                # notes and how-tos
└── README.md
```

## Resources

- Redis docs: https://redis.io/docs/
- redis-py: https://github.com/redis/redis-py
- ioredis: https://github.com/luin/ioredis

## License

This repository is provided under the MIT License. Replace or update the license as appropriate for your project.
``` ````

Commands — add README.md to branch main

If main already exists locally or on origin:
- git fetch origin
- git checkout main
- (create file) cat > README.md <<'EOF' 
  (paste the file contents above)
  EOF
- git add README.md
- git commit -m "Add README.md"
- git push origin main

If main does not exist yet and you want to create it from an existing branch (for example origin/master):
- git fetch origin
- git checkout -b main origin/master
- cat > README.md <<'EOF'
  (paste the file contents above)
  EOF
- git add README.md
- git commit -m "Add README.md"
- git push -u origin main

If the repo is empty and you want to create an initial main branch:
- mkdir repo && cd repo
- git init -b main
- cat > README.md <<'EOF'
  (paste the file contents above)
  EOF
- git add README.md
- git commit -m "Add README.md"
- git remote add origin git@github.com:Jagdish6666/redis-playground.git
- git push -u origin main

GitHub web UI (no local Git required)
1. Open https://github.com/Jagdish6666/redis-playground
2. Click "Add file" → "Create new file"
3. Name it README.md and paste the contents from the file block above
4. Commit directly to the main branch (or create a new branch named main and open a PR)

Tell me which method you'd like to use (local Git or web UI). If you want, I can modify the README (shorter, more examples, add license text) before you paste/commit it.
