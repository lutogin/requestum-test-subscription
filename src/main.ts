function getCorrectWeekday(date: Date): number {
  return date.getDay() || 7;
}

function dayDiff(from: Date, to: Date): number {
  return Math.ceil((to.getTime() - from.getTime()) / (1000 * 3600 * 24));
}

function getDays(startDate: string, trainingCount: number, schedule: number[]): number {
  const from = new Date(startDate);
  const to = new Date(startDate);

  while (trainingCount > 0) {
    if (schedule.includes(getCorrectWeekday(to))) {
      trainingCount -= 1;
    }

    to.setDate(to.getDate() + 1);
  }

  return dayDiff(from, to);
}

console.log(getDays('2016.04.18', 6, [2, 4, 6]));
console.log(getDays('2016.04.18', 6, [1, 3, 5]));
console.log(getDays('2016.04.18', 6, [1, 4]));
console.log(getDays('2016.04.19', 6, [2, 4, 6]));
console.log(getDays('2016.04.21', 1, [2, 4, 6]));
console.log(getDays('2016.05.01', 2, [2]));
console.log(getDays('2016.05.10', 12, [2, 4, 6]));
console.log(getDays('2016.05.30', 3, [2]));
console.log(getDays('2016.05.30', 3, [1, 2, 3, 4, 5, 6]));
console.log(getDays('2016.10.12', 2, [1]));
console.log(getDays('2016.10.10', 200, [2, 4, 6]));
console.log(getDays('2016.10.10', 200, [7]));
