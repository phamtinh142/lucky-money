-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "permission" TEXT NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "level" INTEGER NOT NULL DEFAULT 0,
    "coin" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetX50Game" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetX50GameWin" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetX2Game" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetX2GameWin" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetHiloGame" INTEGER NOT NULL DEFAULT 0,
    "totalCoinBetHiloGameWin" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "X2Game" (
    "id" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "roundNumberWin" INTEGER NOT NULL,
    "colorWin" INTEGER NOT NULL,
    "hashSalt" TEXT NOT NULL,
    "roundHash" TEXT NOT NULL,
    "rotate" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "timeStamp" INTEGER NOT NULL,
    "coin" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "X2Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "X50Game" (
    "id" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "roundNumberWin" INTEGER NOT NULL,
    "colorWin" INTEGER NOT NULL,
    "hashSalt" TEXT NOT NULL,
    "roundHash" TEXT NOT NULL,
    "rotate" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "timeStamp" INTEGER NOT NULL,
    "coin" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "X50Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HiloGame" (
    "id" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "hashSalt" TEXT NOT NULL,
    "roundHash" TEXT NOT NULL,
    "cardColor" TEXT NOT NULL,
    "cardValue" TEXT NOT NULL,
    "cardSign" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "timeStamp" INTEGER NOT NULL,
    "coin" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HiloGame_pkey" PRIMARY KEY ("id")
);
