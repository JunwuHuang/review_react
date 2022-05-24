# createRoot

- createContainer
- markContainerAsRoot
- listenToAllSupportedEvents
- new ReactDOMRoot

## createContainer

- 通过createFiberRoot创建容器

- 利用FiberRootNode创建root

- 利用createHostRootFiber创建uninitializedFiber

- 将上述两个fiber关联起来

```javascript
root.current = uninitializedFiber
uninitializedFiber.stateNode = root
```		
	
- 初始化uninitializedFiber的state

```javascript
uninitializedFiber.memoizedState = initialState
```

- 初始化更新队列

```javascript
initializeUpdateQueue(uninitializedFiber)
```

### FiberRootNode

```javascript
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onRecoverableError,
) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.pendingChildren = null;
  this.current = null;
  this.pingCache = null;
  this.finishedWork = null;
  this.timeoutHandle = noTimeout;
  this.context = null;
  this.pendingContext = null;
  this.callbackNode = null;
  this.callbackPriority = NoLane;
  this.eventTimes = createLaneMap(NoLanes);
  this.expirationTimes = createLaneMap(NoTimestamp);

  this.pendingLanes = NoLanes;
  this.suspendedLanes = NoLanes;
  this.pingedLanes = NoLanes;
  this.expiredLanes = NoLanes;
  this.mutableReadLanes = NoLanes;
  this.finishedLanes = NoLanes;

  this.entangledLanes = NoLanes;
  this.entanglements = createLaneMap(NoLanes);

  this.identifierPrefix = identifierPrefix;
  this.onRecoverableError = onRecoverableError;
}
```

### createHostFiberNode

```javascript
export function createHostRootFiber(
  tag: RootTag,
): Fiber {
  let mode;
  if (tag === ConcurrentRoot) {
    mode = ConcurrentMode;
  } else {
    mode = NoMode;
  }

  return createFiber(HostRoot, null, null, mode);
}
```

#### FiberNode

createHostRootFiber方法会通过createFiber方法去创建FiberNode实例

```javascript
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
}
```

### initializeUpdateQueue

```typescript
export function initializeUpdateQueue<State>(fiber: Fiber): void {
  const queue: UpdateQueue<State> = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: NoLanes,
    },
    effects: null,
  };
  fiber.updateQueue = queue;
}
```

## markContainerAsRoot

给container打上标记

## listenToAllSupportedEvents

名副其实，过滤不支持的事件，开始监听原生事件

## ReactDOMRoot

虽然这个构造函数只有这一行代码，但是代码中利用原型链给它加上了其他的内容

```javascript
function ReactDOMRoot(internalRoot: FiberRoot) {
  this._internalRoot = internalRoot;
}
```