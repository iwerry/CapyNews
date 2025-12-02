@echo off
cd server
set DATABASE_URL=file:./data/dev.db
npm run dev
