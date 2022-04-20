import { Pagination, TreeSelect } from "antd";
import { TreeNode } from "antd/lib/tree-select";
import { FC, useState } from "react";
import { useInput } from "../../../hooks/useInput";

const ListPagination: FC = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  function itemRender(current: number, type: string, originalElement: any) {
    if (type === "prev") {
      return <a className="pagination-button">{` < Previous page`}</a>;
    }
    if (type === "next") {
      return <a className="pagination-button">{`Next page >`}</a>;
    }
    return originalElement;
  }

  return (
    <div className="list-pagination">
      <Pagination
        current={page}
        onChange={(e) => setPage(e)}
        showLessItems={true}
        responsive={false}
        showSizeChanger={false}
        itemRender={itemRender}
        defaultCurrent={1}
        defaultPageSize={page}
        pageSize={pageSize}
        total={500}
      />
      <TreeSelect
        virtual
        className="list-pagination__pages"
        showSearch={false}
        value={pageSize}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="10"
        treeDefaultExpandAll
        onChange={(e) => setPageSize(e)}
      >
        <TreeNode value="10" title="10" />
        <TreeNode value="50" title="50" />
        <TreeNode value="100" title="50" />
        <TreeNode value="500" title="500" />
      </TreeSelect>
    </div>
  );
};

export default ListPagination;
