import React, { useState } from "react";

// Recursive component for rendering nested checkboxes
const CheckboxTree = ({ item, handleCheckboxChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        indeterminate={item.indeterminate || false}
        onChange={() => handleCheckboxChange(item)}
      />
      {item.label}

      {item.children && (
        <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
          {item.children.map((child) => (
            <CheckboxTree
              key={child.id}
              item={child}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const NestedCheckboxes = () => {
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      label: "Parent 1",
      checked: false,
      indeterminate: false,
      children: [
        { id: 2, label: "Child 1.1", checked: false, indeterminate: false },
        { id: 3, label: "Child 1.2", checked: false, indeterminate: false },
      ],
    },
    {
      id: 4,
      label: "Parent 2",
      checked: false,
      indeterminate: false,
      children: [
        { id: 5, label: "Child 2.1", checked: false, indeterminate: false },
        { id: 6, label: "Child 2.2", checked: false, indeterminate: false },
      ],
    },
  ]);

  // Handle checkbox changes and update the tree
  const handleCheckboxChange = (item) => {
    const updateTree = (nodes, targetItem, checked) => {
      return nodes.map((node) => {
        if (node.id === targetItem.id) {
          // If it's the current item, update its checked state
          return {
            ...node,
            checked: checked,
            indeterminate: false,
            children: node.children
              ? updateChildren(node.children, checked)
              : undefined,
          };
        } else if (node.children) {
          // If it's a parent, recurse over children
          const updatedChildren = updateTree(
            node.children,
            targetItem,
            checked
          );
          const { allChecked, someChecked } =
            getChildrenStatus(updatedChildren);

          return {
            ...node,
            checked: allChecked,
            indeterminate: someChecked && !allChecked,
            children: updatedChildren,
          };
        }
        return node;
      });
    };

    // Update all children based on parent's checked state
    const updateChildren = (children, checked) => {
      return children.map((child) => ({
        ...child,
        checked,
        indeterminate: false,
        children: child.children
          ? updateChildren(child.children, checked)
          : undefined,
      }));
    };

    // Determine if all or some children are checked
    const getChildrenStatus = (children) => {
      const allChecked = children.every((child) => child.checked);
      const someChecked = children.some(
        (child) => child.checked || child.indeterminate
      );
      return { allChecked, someChecked };
    };

    const newCheckedState = !item.checked; // Toggle current item's checked state
    const updatedTree = updateTree(treeData, item, newCheckedState);
    setTreeData(updatedTree);
  };

  return (
    <div>
      <h3>Nested Checkboxes</h3>
      <ul style={{ listStyleType: "none" }}>
        {treeData.map((item) => (
          <CheckboxTree
            key={item.id}
            item={item}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default NestedCheckboxes;
