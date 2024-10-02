export const fetchProperties = async (pageSize = 100) => {
  try {
    if (typeof window !== "undefined") {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-properties`
      );

      const finalPageSize =
        pageSize === Infinity ? Number.MAX_SAFE_INTEGER : pageSize;
      url.searchParams.append("page_size", finalPageSize.toString());

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
