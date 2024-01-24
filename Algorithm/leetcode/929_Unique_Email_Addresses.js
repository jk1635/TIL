// https://leetcode.com/problems/unique-email-addresses/

// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.
// It is possible to use both of these rules at the same time.
// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

/**
 * @param {string[]} emails
 * @return {number}
 */

const emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]; // 2
// const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]; // 3

const numUniqueEmails = function (emails) {
    const uniqueEmails = new Set();

    emails.forEach(email => {
        const [local, domain] = email.split("@");
        uniqueEmails.add(`${local.split("+")[0].split(".").join("")}@${domain}`);
    });

    return uniqueEmails.size;
};

console.log(numUniqueEmails(emails));