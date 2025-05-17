## Overview

This project implements a checkout queue system for a hypermart using HTML, CSS, and JavaScript. The goal is to dynamically assign customers to the checkout counter with the fewest total items in the queue.

## Features

* Add customers with a specified number of items.
* Assign customers to checkout machines with the least total items.
* Visually render checkout queues in real-time.
* Display total items at the bottom of each checkout.
* Material icons used for enhanced UI.

## Algorithm Logic

When a new customer is added:

1. Loop through all checkout queues.
2. Calculate the total number of items in each.
3. Select the queue with the minimum total.
4. If there is a tie, choose the leftmost queue.
5. Append the customer’s item count to that queue.

## Time Complexity

* **Adding a customer**: O(n \* m), where:

  * `n` = number of checkout queues
  * `m` = average length of each queue (due to `.reduce()`)
* **Rendering queues**: O(n \* m) as we rebuild the UI for each queue and item

## Assumptions

* The number of checkouts is fixed (default 3), but configurable.
* Each customer brings only a positive integer number of items.
* No customer removal or update functionality is included.
* Performance is sufficient for small to medium retail setups (\~10 checkouts).

## Tech Stack

* HTML5
* CSS3 (with Material Icons CDN)
* Vanilla JavaScript (ES6+)

## Folder Structure

assignment/
├── index.html       # UI structure
├── style.css        # Styling rules
├── script.js        # Logic and rendering
└── README.md        # Documentation
```

## How to Run

1. Open `index.html` in a browser.
2. Enter item counts in the input box.
3. Click "Add Customer" to assign them to the optimal queue.
