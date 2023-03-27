# Challenge Details

Suppose you just joined a team responsible for developing `Email Audit` system. Assume that this project is a real existing project and is already used in production environment on a trial basis (since the features are not yet complete), and are currently being developed by a team of frontend developers.

As your first assignment, you are tasked with implementing a component called `RecipientsDisplay`, to intelligently show email recipients inside the `AuditTable` component. We have prepared a barebones RecipientsDisplay component. Your task is to update the component to add these functionalities.

## `RecipientsDisplay` component requirements

Assume that an employee can send an email to a maximum of 5 recipients. Due to the limited amount of space, we want to make sure the information is displayed well. Our design team came up with this design:

- If we can show the whole email addresses in the available space, then we can simply display them all separated by commas and a trailing space character (e.g. `a, b`).
- When there is not enough space to display all recipients, we will trim the text. However, to prevent showing clipped email addresses that are hard to read, we should trim entire emails. If we cannot fit the entirety of an email address, it shouldn't be shown at all.
- When at least one email address is trimmed, we will put a comma followed by ellipsis, surrounded by a space character (e.g. `a, b, ...`) at the end of the line. Furthermore, the rightmost end of the column should show a "badge" that shows how many email addresses are hidden (`+N`).
- If there is not enough space to show the first email, the badge would show the number of extra emails that are not shown at all (the number of emails excluding the first email), and the email should be truncated with ellipsis. If there is only one recipient, there will be no badge, and the email should also be truncated by an ellipsis.
- This functionality should work on any screen size. For simplicity, this will only be tested in a recent version of the Chrome browser.

### Examples

#### Trim emails that doesn't fit the column, showing `, ...` behind the last shown email and `+N` at the cell's rightmost area

![Email trim example 1](Email%20trim%20example%201.svg)

#### If there is not enough space to show ellipsis and the extra space, trim that email too

Incorrect:

![Email trim example 2A](Email%20trim%20example%202A.svg)

Correct:

![Email trim example 2B](Email%20trim%20example%202B.svg)

#### If there is not enough space to show the first email, the badge would show the number of extra emails that are not shown at all (the number of emails excluding the first email), and the email should be truncated with ellipsis. If there is only one recipient, there will be no badge

Two recipients:

![Email trim example 3A](Email%20trim%20example%203A.svg)

One recipient:

![Email trim example 3B](Email%20trim%20example%203B.svg)

## Measurements

![Badge measurements](Badge%20measurements.png)

- Font size: 16px
- Foreground color: #f0f0f0
- Background color: #666666
- Border radius: 3px
- Top padding: 2px
- Bottom padding: 2px
- Left padding: 5px
- Right padding: 5px

![Cell measurements](Cell%20measurements.png)

- Font size: 16px
- Foreground color: #333333
- Top padding: 5px
- Bottom padding: 5px
- Left padding: 10px
- Right padding: 10px
