import { Container, noTimeout } from "./ReactFiberHostConfig";
import { createLaneMap, NoLane, NoLanes, NoTimestamp } from "./ReactFiberLane";
import { RootTag } from "./ReactRootTags";

export default class FiberRootNode {
  tag;
  containerInfo;
  pendingChildren = null;
  current = null;
  pingCache = null;
  finishedWork = null;
  timeoutHandle = noTimeout;
  context = null;
  pendingContext = null;
  callbackNode = null;
  callbackPriority = NoLane;
  eventTimes = createLaneMap(NoLanes);
  expirationTimes = createLaneMap(NoTimestamp);

  pendingLanes = NoLanes;
  suspendedLanes = NoLanes;
  pingedLanes = NoLanes;
  expiredLanes = NoLanes;
  mutableReadLanes = NoLanes;
  finishedLanes = NoLanes;

  entangledLanes = NoLanes;
  entanglements = createLaneMap(NoLanes);

  identifierPrefix;
  onRecoverableError;
  constructor(
    containerInfo: Container,
    tag: RootTag,
    _hydrate: boolean, // 该入参仅在开发模式下消费，用语提醒用户
    identifierPrefix: string,
    onRecoverableError: null | ((error: mixed) => void)
  ) {
    this.tag = tag;
    this.containerInfo = containerInfo;

    this.identifierPrefix = identifierPrefix;
    this.onRecoverableError = onRecoverableError;
  }
}
