# ohmunity-app

Hallo Entwickler Team,

schön das ihr hier seit.

Ich habe hierfür den pnPM als package manager genommen.
Falls noch nicht getan bitte NodeJS installieren und NVM.

[NodeJS](https://nodejs.org/en)
[NVM](https://github.com/nvm-sh/nvm/releases)

danach

```
npm install -g pnpm
```

## Project setup

```
pnpm install
```

## How we work

Bitte immer einen branch erstellen mit command line oder GitHub Desktop App

```
git checkout -b branch-name-so
```

Nun könnt ihr auf euren eigenen branch local arbeiten.

Commit Message bitte in 3 kategorien zur Einfachheit:

ui = frontend stuff
chore = allgemeines
be = backend stuff

```
git commit -m "(chore): Initialisierung"
```

danach repo pushen...

```
git push origin <branch-name>
```

Auf github gehen und Button PR erstellen drücken und danach mich als Reviewer hinzufügen.

### Compiles and hot-reloads for development

Diesen command braucht ihr zur lokalen Entwicklung

```
pnpm serve
```

### Compiles and minifies for production

Das benötigt man bevor man es auf einen Webserver deployed. Wir werden es in firebase machen.

```
pnpm build
```

### Lints and fixes files

```
pnpm lint
```
