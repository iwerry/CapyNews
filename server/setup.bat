@echo off
echo Setting up CapyNews Server...
echo.

cd server

echo [1/5] Setting DATABASE_URL...
set DATABASE_URL=file:./data/dev.db

echo [2/5] Installing dependencies...
call npm install

echo [3/5] Generating Prisma Client...
call npm run prisma:generate

echo [4/5] Running migrations...
call npm run prisma:migrate

echo [5/5] Seeding database...
call npm run prisma:seed

echo.
echo ✅ Setup complete! Run 'npm run dev' in the server folder to start the API.
