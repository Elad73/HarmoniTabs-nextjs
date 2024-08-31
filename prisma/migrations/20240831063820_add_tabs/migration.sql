-- CreateTable
CREATE TABLE "Tabs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tabs" TEXT NOT NULL,
    "tab_creator_name" TEXT NOT NULL,
    "creator_email" TEXT NOT NULL,
    "artist_name" TEXT NOT NULL,
    "song_creation_year" TEXT NOT NULL
);
