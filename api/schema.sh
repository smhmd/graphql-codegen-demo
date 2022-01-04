#!/usr/bin/env bash
# This file runs schema generation
# if api/generated/schema.json does not exist
# or if GENERATE_SCHEMA is set to `true`

_BASEDIR=$(dirname "$0")
_GRAPHQL_SCHEMA="$_BASEDIR/generated/schema.json"

if [ "$GENERATE_SCHEMA" = true ] || [ ! -f $_GRAPHQL_SCHEMA ]; then
  yarn graphql-codegen -r dotenv/config --config api/schema.yml
else
  printf 'Skipping \e[33m`api`\e[m schema generation.\nRun \e[35mGENERATE_SCHEMA=true\e[m \e[34myarn gen\e[m to generate the schema.\nHappy local coding.\n'
fi
