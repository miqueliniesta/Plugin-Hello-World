import { testFileFeature } from '@pos-web/devkit-jest-gherkin';
import { helloSteps } from './hello.Steps';

testFileFeature('feature/hello.feature', helloSteps);
