# Aether Wiki

The "wiki" is comprised of markdown files (in the repo), which get converted into html files (on the server).

## Contributing

To contribute, all you have to do is edit the markdown files.

However, for a better experience you might consider using Obsidian and/or Vitepress.

### Previewing with Vitepress

The webserver uses Vitepress to convert the markdown files into HTML. You can use Vitepress as well to host a live server that updates every time you save a file.

- `npm i` to install necessary packages
- `npm run docs:dev` to run a development server

### Editing with Obsidian

- [Obsidian](https://obsidian.md/) - recommended free tool for editing and viewing markdown files.

## Deployment

Deploying to the webserver causes a post-receive git hook to: checkout the `main` branch, build the docs with `npm run docs:dev`, and copy the built files over to the web directory.