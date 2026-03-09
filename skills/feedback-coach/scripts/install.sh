#!/bin/bash
set -e

THIS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$THIS_DIR/.." && pwd)"

cd "$ROOT" || exit 1

echo "Installing Feedback Coach skill..."
npm install
mkdir -p data

# Security: do not log secrets
# No credentials required by default

echo "Installed."
