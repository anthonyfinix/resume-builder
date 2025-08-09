export default (date?: Date | undefined | null) => {
  if (!date) return "Present";
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};
