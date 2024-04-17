### Angular update
1. Globalnie

```console
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```

2. Lokalnie

```console
rm -rf node_modules dist
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
ng update
```