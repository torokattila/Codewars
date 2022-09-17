/*Write a function that will return the integer number of e-mails sent in the percentage of the limit.

Example:

limit       - 1000;
emails sent - 101;
return      - 10%; // because integer from 10,1 = 10
Arguments:
sent: number of e-mails sent today (integer)
limit: number of e-mails you can send today (integer)
When:
the argument sent = 0, then return the message: "No e-mails sent";
the argument sent >= limit, then return the message: "Daily limit is reached";
the argument limit is empty, then default limit = 1000 emails;
*/

function getPercentage(sent, limit = 1000) {
  if (sent === 0) return 'No e-mails sent';
  if (sent >= limit) return 'Daily limit is reached';

  return `${Math.floor((100 * sent) / limit)}%`;
}

console.log(getPercentage(101, 1000));
console.log(getPercentage(256, 500));
console.log(getPercentage(256, 300));
console.log(getPercentage(259));
console.log(getPercentage(0));
console.log(getPercentage(1000, 1000));
