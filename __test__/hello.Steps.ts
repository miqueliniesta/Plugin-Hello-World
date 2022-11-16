import { Given, Then, When } from '@pos-web/devkit-jest-gherkin';
import { renderPOSComponent } from '@orion/ui/test-utils';
import { addPlugin } from '@orion/core/test-utils';
import { screen } from '@testing-library/dom';
import PluginHelloWorldPkg from '../package.json';
import PluginHelloWorld from '..';

export const helloSteps = [
  Given(/^I have a hello world plugin$/, () => {
    addPlugin(PluginHelloWorldPkg, PluginHelloWorld);
  }),
  When(/^I run the hello world plugin$/, () => {
    renderPOSComponent('HelloWorld');
  }),
  Then(/^I should see "([^"]*)"$/, (expected) => {
    const hello = screen.getByText(expected);
    // expected(document.body.textContent).toContain(expected);
    // eslint-disable-next-line jest/no-standalone-expect
    expect(hello).toBeInTheDocument();
  }),
];
