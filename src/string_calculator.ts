export function add(numbers: string): number {
    
  if (numbers.trim().length === 0) return 0;

  const all_numbers = numbers.split(",");

  let sum: number = 0;

  all_numbers.forEach((number) => {
    sum += Number(number);
  });

  return sum;
}
