// Import any necessary testing dependencies or modules
const { expect } = require('chai');

// Import the code to be tested
const index = require('../index');

// Define the moveDodgerLeft function
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);
    if (currentPosition > 0) {
        dodger.style.left = `${currentPosition - 1}px`;
    }
}

// Define the moveDodgerRight function
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);
    if (currentPosition < 360) {
        dodger.style.left = `${currentPosition + 1}px`;
    }
}

// Describe the test suite
describe('Index Tests', () => {
    // Test case to check if dodger moves to the right on "ArrowRight" key press
    it('should move the dodger to the right on "ArrowRight" key press', () => {
        // Create a mock DOM environment
        const { JSDOM } = require('jsdom');
        const dom = new JSDOM('<!DOCTYPE html><div id="game"><div id="dodger"></div></div>');
        global.window = dom.window;
        global.document = dom.window.document;

        // Get the dodger element
        const dodger = document.getElementById('dodger');

        // Set the initial left position of the dodger
        dodger.style.left = '0px';

        // Simulate the keydown event with "ArrowRight" key
        const event = new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight' });
        document.dispatchEvent(event);

        // Check if the dodger element's position has been updated correctly
        const expectedPosition = '1px'; // We expect the dodger to move 1px to the right
        const actualPosition = dodger.style.left;
        expect(actualPosition).to.equal(expectedPosition);
    });
});
