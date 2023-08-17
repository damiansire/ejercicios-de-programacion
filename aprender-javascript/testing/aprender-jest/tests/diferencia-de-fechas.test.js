const { remainingDaysToDate } = require("./diferencia-de-fechas")

describe("remainingDaysToDate", () => {
    it("if is today, return 0 days", () => {
        const todayDate = new Date();
        const result = remainingDaysToDate(todayDate);
        expect(result).toBe(0)
    })
})

/*
describe("differenceInSeconds function", () => {
    it("should return 2 when there are 2 seconds difference between the dates", () => {
        const startDate = new Date(2020, 2, 2, 16, 28, 10);
        const endDate = new Date(2020, 2, 2, 16, 28, 12);

        const result = differenceInSeconds(startDate, endDate);

        expect(result).toBe(2);
    });

    it("should handle negative time differences", () => {
        const startDate = new Date(2020, 2, 2, 16, 28, 12);
        const endDate = new Date(2020, 2, 2, 16, 28, 10);

        const result = differenceInSeconds(startDate, endDate);

        expect(result).toBe(-2);
    });

    it("should handle same dates", () => {
        const date1 = new Date(2020, 2, 2, 16, 28, 10);
        const date2 = new Date(2020, 2, 2, 16, 28, 10);

        const result = differenceInSeconds(date1, date2);

        expect(result).toBe(0);
    });
});
*/