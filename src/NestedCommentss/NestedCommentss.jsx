import NestedComments from "./components/NestedComments";
import commentsData from "./data/data.json";

function NestedCommentsMain() {
  return (
    <div>
      <h1>Nested Comment System</h1>
      <NestedComments
        comments={commentsData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
    </div>
  );
}

export default NestedCommentsMain;
