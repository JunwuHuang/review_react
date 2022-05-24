import { FiberRootNode } from "../reconciler";

const createRoot = () => {
  const root = new FiberRootNode();
  const uninitializedFiber = new FiberNode()
  root.current = uninitializedFiber
  uninitializedFiber.stateNode = root
};

export default createRoot;
