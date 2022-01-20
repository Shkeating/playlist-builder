import styles from "./index.module.scss";
import Track from "../Track/Track";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h4> Track component error</h4>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const TrackList = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div className={styles.TrackList}>
        <Track name="Sample Track 1" artist="Artist Name" />
        <Track name="Sample Track 2" artist="Artist Name" />
        <Track name="Sample Rack 3" artist="Artist Name" />
        {/*<!-- You will add a map method that renders a set of Track components  -->*/}
      </div>
    </ErrorBoundary>
  );
};

export default TrackList;
