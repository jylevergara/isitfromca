-- CreateTable
CREATE TABLE "CompanySearch" (
    "id" SERIAL NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT NOT NULL,
    "displayName" TEXT,
    "website" TEXT,
    "country" TEXT,
    "industry" TEXT,
    "isFromUS" BOOLEAN NOT NULL DEFAULT false,
    "isFromCanada" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanySearch_pkey" PRIMARY KEY ("id")
);
