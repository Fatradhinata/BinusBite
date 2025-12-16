interface PaginateParam<T> {
  data: T[];
  currentPage: number;
  limit: number;
}

export function PaginateFunc<T>({
  data,
  currentPage,
  limit,
}: PaginateParam<T>) {
  const totalData = data.length;
  const totalPages = Math.ceil(totalData / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const paginateData = data.slice(startIndex, endIndex);

  return {
    paginateData,
    totalData,
    totalPages,
    currentPage,
    limit,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}
