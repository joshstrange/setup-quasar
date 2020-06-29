## setup-quasar

[![](https://github.com/joshstrange/setup-quasar/workflows/CI/badge.svg)](https://github.com/joshstrange/setup-quasar/actions)

Set up your GitHub Actions workflow with Cordova/Quasar environment. Only supports macos & ubuntu at this time.

Thank you to [coturiv/setup-ionic](https://github.com/coturiv/setup-ionic) for the initial code 

## example usage:

```
- name: Use joshstrange/setup-quasar
  uses: joshstrange/setup-quasar@v1
  with:
    cordova-version: 9

- name: Build
  run: |
    quasar build -m cordova -T ios     

```
