#!/bin/bash
set -e

THIS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$THIS_DIR/.." && pwd)"

cd "$ROOT" || exit 1

PORT="${PORT:-9091}"
echo "Starting Feedback Coach server on port $PORT (local only)..."

PORT="$PORT" node server/server.js
