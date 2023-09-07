<div align="center">
    <h1><code>▲</code> Next Js MVC</h1>
    <p>Next Js with Prisma, Tailwind CSS, Postgres, and MVC Pattern</p>
</div>

## `📝` About

This is a simple project to learn Next Js with Prisma, Tailwind CSS, Postgres, and MVC Pattern

## `📚` Stack

- [Next Js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Postgres](https://www.postgresql.org/)

## `📦` Installation

1. Clone this repository

```bash
git clone git@github.com:PunGrumpy/nextjs-mvc-simple
```

2. Install dependencies

```bash
pnpm install
```

3. Add [.env](./.env.example) file

```bash
cp .env.example .env
```

```env
# PORT
PORT=3000

# POSTGRES
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/nextjs-mvc-simple
```

4. Run the migration

```bash
pnpm migrate:deploy
```

5. Run the development server

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## `📂` Folder Structure

```bash
├── app
│   ├── components
│   ├── api
│   └── libs
└── prisma
    └── migrations
```

## `📝` Note

- This project is not for production
- This project is not for commercial use

## `📝` Feature

- [x] User
  - [x] Create
  - [x] Get All
  - [x] Get By Id
  - [x] Update
  - [x] Delete
- [x] Post
  - [x] Create
  - [x] Get All
  - [x] Get By Id
  - [x] Update
  - [x] Delete

## `📝` License

This project is under [MIT](LICENSE) License
