import { PaginateFunc } from "@/utils/paginateFunc";
import React, { useState } from "react";

interface FoodTypeData<T> {
  data: T[];
  limit: number;
}

function FoodPage<T>({ limit, data }: FoodTypeData<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const { paginateData, totalPages, hasNextPage, hasPrevPage } = PaginateFunc({
    data,
    currentPage,
    limit: limit,
  });

  return (
    <div>
      <div></div>
    </div>
  );
}

export default FoodPage;
