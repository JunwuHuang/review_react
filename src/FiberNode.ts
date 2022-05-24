import { noTimeout } from "./ReactFiberHostConfig";
import { createLaneMap, NoLane, NoLanes, NoTimestamp } from "./ReactFiberLane";

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
    containerInfo,
    tag,
    _hydrate, // 该入参仅在开发模式下消费，用语提醒用户
    identifierPrefix,
    onRecoverableError
  ) {
    this.tag = tag;
    this.containerInfo = containerInfo;

    this.identifierPrefix = identifierPrefix;
    this.onRecoverableError = onRecoverableError;
  }
}
