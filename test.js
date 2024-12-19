const expect = require("chai").expect;
const request = require("request");

const BASE_URL = "http://localhost:8080/addTwoNumbers/3/5";

describe("Add Two Numbers API", function() {
    describe("Valid Inputs", function() {
        const url = `${BASE_URL}3/5`;

        it("should return status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("should return the correct result (8)", function(done) {
            request(url, function(error, response, body) {
                const parsedBody = JSON.parse(body);
                expect(parsedBody.result).to.equal(8);
                done();
            });
        });
    });

    describe("Invalid Inputs", function() {
        const url = `${BASE_URL}a/b`;

        it("should return status 200 for invalid inputs", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("should return statusCode 400 in the response body", function(done) {
            request(url, function(error, response, body) {
                const parsedBody = JSON.parse(body);
                expect(parsedBody.statusCode).to.equal(400);
                done();
            });
        });

        it("should return null result for invalid inputs", function(done) {
            request(url, function(error, response, body) {
                const parsedBody = JSON.parse(body);
                expect(parsedBody.result).to.be.null;
                done();
            });
        });
    });
});

