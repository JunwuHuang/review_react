import {
  ConcurrentMode,
  ConcurrentRoot,
  Container,
  FiberNode,
  FiberRootNode,
  HostRoot,
} from "../reconciler";

const createRoot = (container: Container) => {
  const root = new FiberRootNode(container, ConcurrentRoot, false, "", null);
  const uninitializedFiber = new FiberNode(
    HostRoot,
    null,
    null,
    ConcurrentMode
  );
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  uninitializedFiber.memoizedState = { element: null };
};

export default createRoot;
