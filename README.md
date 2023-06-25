# ohmunity-app

Hello there Developers,

to get started please follow this readme.

I used PNPM as package manager As base you need node js installed.

[NodeJS](https://nodejs.org/en)
[NVM](https://github.com/nvm-sh/nvm/releases)

then

```
npm install -g pnpm
```

## Project setup

Install all node modules with this command:

```
pnpm install
```

## How we work

Create a branch:

```
git checkout -b branch-name
```

Commit Messages in 3 simply catagories:

ui = frontend stuff
be = backend stuff
chore = everything else

```
git commit -m "(chore): Init"
```

Then push the repo with:

```
git push origin <branch-name>
```

Navigate to github and open a PR.

### Local Development

To develop locally:

```
pnpm serve
```

### Lints and fixes files

To lint all files run the following command:

```
pnpm lint
```
