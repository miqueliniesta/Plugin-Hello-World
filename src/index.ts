import { HelloWorld } from './HelloWorld';

export class PluginHelloWorld {
  constructor({ uiHelper }) {
    uiHelper.putComponent('HelloWorld', HelloWorld);
  }
}
