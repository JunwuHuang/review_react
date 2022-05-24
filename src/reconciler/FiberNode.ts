import { NoFlags } from "./ReactFiberFlags";
import { NoLanes } from "./ReactFiberLane";
import { TypeOfMode } from "./ReactTypeOfMode";
import { WorkTag } from "./ReactWorkTags";

export default class FiberNode {
  // Instance
  tag;
  key;
  elementType = null;
  type = null;
  stateNode = null;

  // Fiber
  return = null;
  child = null;
  sibling = null;
  index = 0;

  ref = null;

  pendingProps;
  memoizedProps = null;
  updateQueue = null;
  memoizedState = null;
  dependencies = null;

  mode;

  // Effects
  flags = NoFlags;
  subtreeFlags = NoFlags;
  deletions = null;

  lanes = NoLanes;
  childLanes = NoLanes;

  alternate = null;

  constructor(
    tag: WorkTag,
    pendingProps: mixed,
    key: null | string,
    mode: TypeOfMode
  ) {
    // Instance
    this.tag = tag;
    this.key = key;

    // Fiber
    this.pendingProps = pendingProps;

    this.mode = mode;
  }
}
