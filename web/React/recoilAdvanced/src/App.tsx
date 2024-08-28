import { useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { networkAtom } from "./store/atoms";
import {
  countOfAllSelector,
  fetchCountOfAll,
  myNetWorkSelector,
} from "./store/selectors";

function App() {
  const netWorkNotificationCount = useRecoilValue(myNetWorkSelector);
  const netWorkCounts = useRecoilValue(fetchCountOfAll);

  console.log(JSON.stringify(netWorkCounts));

  const setMessagingCount = useSetRecoilState(networkAtom);

  const allCount = useRecoilValue(countOfAllSelector);

  return (
    <>
      <div>
        <button>Home</button>
        <button>My Network ({netWorkNotificationCount})</button>
        <button>Jobs ({netWorkCounts.jobs})</button>
        <button>Messaging ({netWorkCounts.messaging})</button>
        <button>Notifications ({netWorkCounts.notifications})</button>
        <button
          onClick={() => {
            setMessagingCount((prev) => ({
              ...prev,
              messaging: prev.messaging + 1,
            }));
          }}
        >
          Me ({allCount})
        </button>
      </div>
    </>
  );
}

export default App;
