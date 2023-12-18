export function extractDate_dd_mm_yyyy(dateTimeString) {
  try {
    const dateObj = new Date(dateTimeString);

    if (isNaN(dateObj)) {
      throw new Error("Invalid date");
    }

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  } catch (error) {
    console.error("Error extracting date:", error.message);
    return null; // Or handle the error in an appropriate manner for your application
  }
}
