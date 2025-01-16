import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTree } from "@/Constant";
import { BasicTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
import { handleTreeViewCheckChange, processTreeViewItems, TreeView, TreeViewCheckDescriptor, TreeViewExpandChangeEvent } from "@progress/kendo-react-treeview";
import { useState } from "react";
import { Card, CardBody } from "reactstrap";

const BasicTrees = () => {
  const checkField = "checked";

  type TreeState = {
    check: TreeViewCheckDescriptor;
    items: typeof TreeViewList;
  };

  const [treeState, setTreeState] = useState<TreeState>({
    check: { idField: "text", applyCheckIndeterminate: true, ids: [] },
    items: TreeViewList,
  });

  const onCheckChange = (event: any) => {
    const settings = { checkChildren: true, checkParents: true };
    const newCheck = handleTreeViewCheckChange(event, treeState.check, [treeState.items], settings) as TreeViewCheckDescriptor;
    setTreeState((prevState) => ({
      ...prevState,
      check: { ...prevState.check, ...newCheck },
    }));
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    event.item.expanded = !event.item.expanded;
    setTreeState((prevState: any) => ({ ...prevState, items: [...prevState.items] }));
  };

  return (
    <Card>
      <CommonCardHeader title={BasicTree} span={BasicTreeData} />
      <CardBody>
        <div className='tree-container'>
          <TreeView
            data={processTreeViewItems(treeState.items, {
              check: treeState.check,
            })}
            checkField={checkField}
            checkboxes={true}
            onCheckChange={onCheckChange}
            expandIcons={true}
            onExpandChange={onExpandChange}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicTrees;
