export function extractDate_dd_mm_yyyy(dateTimeString: string): string | null {
  try {
    const dateObj = new Date(dateTimeString);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  } catch (error: any) {
    console.error("Error extracting date:", error.message);
    return null;
  }
}
