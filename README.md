# 1am

## About this project

쉽고 간단한 팟캐스트 호스팅 플랫폼.

> [!WARNING]
> 해당 프로젝트는 현재 제작 중입니다. 프로젝트는 공개한 상태로 제작될 예정이지만 언제든 private으로 전환될 수 있습니다.

## Features

1인 개발 중이기 때문에 핫한 next.js로 제작중입니다.

- Written in <Strong>Typescript</Strong>
- Using <Strong>App Router</Strong> (/app)
- Not using Server Action, just <Strong>Route Handlers</Strong> (/app/api)
- Authentication using <strong>NextAuth.js</strong>
- ORM using <strong>Prisma</strong>
- Styled using <strong>Tailwind CSS</strong>
- Using designed components belong to <strong>shadcn/ui</strong>

## Running Locally

1. 의존 패키지 설치하기

```bash
npm install
```

2. 제대로 동작하기 위해선 `.env`가 필요합니다. `.env.example`을 복사한뒤 값을 수정하시길 바랍니다.

```bash
cp .env.example .env
```

3. development server 실행하기

```bash
npm run dev
```

## License

[MIT license](https://github.com/sukjuhong/1am/main/LICENSE.md)
