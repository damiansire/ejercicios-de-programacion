const { remainingDaysToDate } = require("./diferencia-de-fechas")

describe("remainingDaysToDate", () => {
    it("if is today, return 0 days", () => {
        const todayDate = new Date();
        const result = remainingDaysToDate(todayDate);
        expect(result).toBe(0)
    })
})