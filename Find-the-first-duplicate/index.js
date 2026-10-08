const userIds = [101, 205, 309, 101, 450, 205]

function findDuplicates(userIds) {
    const count = new Map()

    for (let i = 0; i < userIds.length; i++) {

        if (count.has(userIds[i])) {
            count.set(userIds[i], count.get(userIds[i]) + 1)
        } else {
            count.set(userIds[i], 1)
        }
    }

    for (const [userId, occurrences] of count) {
        if (occurrences > 1) {
            console.log(userId, "Appeared", occurrences, "times")
        }
    }
}

findDuplicates(userIds)