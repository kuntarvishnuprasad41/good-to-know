import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms";
import { countOfAllSelector, myNetWorkSelector } from "./store/selectors";

function App() {
  const netWorkNotificationCount = useRecoilValue(myNetWorkSelector);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messagesCount, setMessagingCount] = useRecoilState(messagesAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const allCount = useRecoilValue(countOfAllSelector);

  return (
    <>
      <div>
        <button>Home</button>

        <button>My Network ({netWorkNotificationCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagesCount})</button>
        <button>Notifications ({notificationCount})</button>

        <button
          onClick={() => {
            setMessagingCount((c) => c + 1);
          }}
        >
          Me ({allCount})
        </button>
      </div>
    </>
  );
}

export default App;
