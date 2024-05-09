# Star Wars API

This repository contains the data structure for a Star Wars API.

## Data Structure

The API provides information about Star Wars characters, including their ID, name, creation date, last update date, associated movies, and notable quotes.

### Character Object

Each character object in the API has the following structure:

- `id`: A unique identifier for the character (string).
- `character`: The name of the character (string).
- `createdAt`: The date and time when the character was created (string).
- `updatedAt`: The date and time when the character was last updated (string).
- `movie`: The name of the movies that the character appeared in.
- `quotes`: Notable quotes from the character (string).

Example character object:

```json
{
  "id": "1",
  "character": "Luke Skywalker",
  "createdAt": "2024-05-07T12:00:00Z",
  "updatedAt": "2024-05-07T13:30:00Z",
  "movie": "A New Hope",
  "quotes": "May the Force be with you."
}

Ini adalah format Markdown untuk menjelaskan struktur data untuk API Star Wars di GitHub. Anda dapat mengganti atau menyesuaikan deskripsi dan contoh sesuai dengan kebutuhan proyek Anda.

