# use the official Bun image
FROM oven/bun:1.2-alpine AS base
WORKDIR /app

# ===================================================
# Stage 1: Install dependencies
# ===================================================
FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# ===================================================
# Stage 2: Production (build + start)
# ===================================================
FROM base AS production
COPY --from=install /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build
USER bun
CMD ["bun", "run", "start"]

# ===================================================
# Stage 3: Development (watch mode)
# ===================================================
FROM base AS development
COPY --from=install /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=development
USER bun
CMD ["bun", "run", "watch"]
