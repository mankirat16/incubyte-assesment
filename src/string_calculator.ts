export function add(numbers: string): number {
  if (numbers.trim().length === 0) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const all_numbers = numbers.split(delimiter);

  const negatives = all_numbers.filter((n) => Number(n) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  let sum: number = 0;

  all_numbers.forEach((number) => {
    sum += Number(number);
  });

  return sum;
}