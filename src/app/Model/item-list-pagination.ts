export class ItemListPagination {
        content: [];
        page: number;
        size: number;
        totalElements: number;
        totalPages: number;
        last: boolean;
        first: boolean;
      
        constructor(
          content: [],
          page: number,
          size: number,
          totalElements: number,
          totalPages: number,
          last: boolean,
          first: boolean
        ) {
          this.content = content;
          this.page = page;
          this.size = size;
          this.totalElements = totalElements;
          this.totalPages = totalPages;
          this.last = last;
          this.first = first;
          }
 }

