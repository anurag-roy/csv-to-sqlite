# CSV to SQLite

Example converting a CSV to an SQLite DB using Node.js

## Usage

```sh
# Install deps
pnpm i

# Execute
pnpm dev
```

## Things I like

- Customisable csv header to db column name mapping and transformers
- Adjustable batch size (in which inserts take place)
- File is read one line at a time, so low memory consumption even for huge files
- `better-sqlite3` is very fast.

  > Converting a 30 MB file with around 200k rows takes 2-3 seconds.

## Things that can be improved

- Show progress bar (or some kind of feedback) throughout the process
- Overall code organisation
