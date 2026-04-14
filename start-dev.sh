#!/bin/bash
export PATH="/Users/kamagataryo/.nvm/versions/node/v22.22.1/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:$PATH"
cd "/Users/kamagataryo/claud code/ryokamagata-website"
exec node node_modules/next/dist/bin/next dev
