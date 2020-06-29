import * as core from '@actions/core';
import * as semver from 'semver';
import { installCordova, installQuasar, installJava, installPods, logInstalledInfo } from './installer';

async function run() {
  try {

    checkPlatform();

    // install cordova-cli
    const cordovaVersion = core.getInput('cordova-version');
    if (checkVersion(cordovaVersion)) {
      await installCordova(cordovaVersion);
    }

    // install quasar-cli
    const quasarVersion = core.getInput('quasar-version');
    if (checkVersion(quasarVersion)) {
      await installQuasar(quasarVersion);
    }

    // install specific version of java and gradle
    // await installJava();

    // install cocoapods
    await installPods();

    // run `quasar info`
    await logInstalledInfo();

  } catch (error) {
    core.setFailed(error.message);
  }
}

function checkPlatform() {
  if (process.platform !== 'linux' && process.platform !== 'darwin') {
    throw new Error(
      '@coturiv/setup-quasar only supports either Ubuntu Linux or MacOS at this time'
    )
  }
}

function checkVersion(version: string) {
  if (!version || semver.valid(version) || semver.validRange(version)) {
    return true;
  }

  throw new Error(`Error, ${version} is not a valid format.`);
}

run();
