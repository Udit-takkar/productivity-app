import AddTask from "./AddTask";
import DeleteTask from "./DelteTask";
import DeleteSelectedBlocks from "./DeleteSelectedBlocks";
import SelectedColor from "./SelectedColor";
import InitializeState from "./InitializeState";

const allActions = {
  AddTask,
  SelectedColor,
  InitializeState,
  DeleteTask: DeleteTask,
  DeleteSelectedBlocks: DeleteSelectedBlocks,
};

export default allActions;
