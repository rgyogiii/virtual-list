export async function fetchProduct(itemsPerPage?: number, skip?: number) {
  try {
    const response = await fetch(
      `${process.env.API_BASE}/products?limit=${
        itemsPerPage ? itemsPerPage : 6
      }&skip=${skip ? skip * (itemsPerPage ? itemsPerPage : 6) : 0}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}
